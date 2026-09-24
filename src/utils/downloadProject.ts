import JSZip from 'jszip';
import { saveAs } from 'file-saver';

// Import all text files in the project
const rootTextFiles = import.meta.glob<string>(
  ['/index.html', '/package.json', '/tsconfig.json', '/vite.config.ts', '/vercel.json', '/firebase.json', '/README.md', '/.gitignore', '/.env.example'],
  { query: '?raw', import: 'default', eager: true }
);

const srcTextFiles = import.meta.glob<string>(
  ['/src/**/*.tsx', '/src/**/*.ts', '/src/**/*.css'],
  { query: '?raw', import: 'default', eager: true }
);

// Import image asset URLs
const imageAssets = import.meta.glob<string>(
  '/src/assets/images/*.jpg',
  { import: 'default', eager: true }
);

export async function downloadProjectZip(onProgress?: (msg: string) => void): Promise<void> {
  const zip = new JSZip();

  onProgress?.('Preparing source files...');

  // Add root files
  for (const [path, content] of Object.entries(rootTextFiles)) {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    zip.file(cleanPath, content);
  }

  // Add src files
  for (const [path, content] of Object.entries(srcTextFiles)) {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    zip.file(cleanPath, content);
  }

  onProgress?.('Bundling high-resolution image assets...');

  // Fetch and add images
  for (const [path, url] of Object.entries(imageAssets)) {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      zip.file(cleanPath, blob);
    } catch (err) {
      console.warn(`Failed to fetch image ${path}`, err);
    }
  }

  onProgress?.('Generating zip archive...');
  const zipContent = await zip.generateAsync({ type: 'blob' });

  onProgress?.('Starting download...');
  saveAs(zipContent, 'elio-luxury-atelier.zip');
}
