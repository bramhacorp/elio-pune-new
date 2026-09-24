import React, { useState } from 'react';
import { X, Download, Github, ExternalLink, Check, Copy, Terminal, Sparkles, Loader2 } from 'lucide-react';
import { downloadProjectZip } from '../utils/downloadProject';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [progressMsg, setProgressMsg] = useState('');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      setDownloading(true);
      await downloadProjectZip((msg) => setProgressMsg(msg));
      setProgressMsg('Downloaded successfully!');
      setTimeout(() => {
        setDownloading(false);
        setProgressMsg('');
      }, 2500);
    } catch (err) {
      console.error(err);
      setProgressMsg('Error generating zip');
      setDownloading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF7F2] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E0D7CB] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#1A1918] hover:bg-[#EBE3D7] rounded-full transition-colors cursor-pointer"
          aria-label="Close export modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C827A] font-medium">
              Export & Deployment
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1918]">
            Get Your Code to GitHub & Vercel
          </h2>
          <p className="text-xs text-[#524C46] mt-1.5 leading-relaxed">
            Download your full, self-contained project codebase (including high-res assets, Tailwind styles, and Vercel configuration) or push to GitHub in moments.
          </p>
        </div>

        <div className="space-y-6">
          {/* Method 1: Instant ZIP Download */}
          <div className="p-5 bg-[#F3ECE2] border border-[#E0D5C5]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8C827A] font-semibold">
                  Option 1 · Instant Download (Recommended)
                </span>
                <h3 className="font-serif text-lg text-[#1A1918] mt-0.5">
                  Download Complete Codebase (.ZIP)
                </h3>
                <p className="text-xs text-[#635D56] mt-1">
                  Downloads all React + Vite files, components, and photography directly to your Mac Downloads folder.
                </p>
              </div>
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="bg-[#1A1918] hover:bg-[#332F2B] text-white px-5 py-2.5 text-xs uppercase tracking-wider font-medium flex items-center gap-2 transition-colors cursor-pointer shrink-0 disabled:opacity-50"
              >
                {downloading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>{progressMsg || 'Bundling...'}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download ZIP</span>
                  </>
                )}
              </button>
            </div>
            {progressMsg && !downloading && (
              <p className="text-[11px] text-green-700 mt-2 font-medium">✓ {progressMsg}</p>
            )}
          </div>

          {/* Method 2: Deploy to Vercel via Mac Terminal */}
          <div className="p-5 bg-[#F7F2EA] border border-[#E3D9CC]">
            <span className="text-[10px] uppercase tracking-wider text-[#8C827A] font-semibold">
              Option 2 · Deploy from Mac Terminal
            </span>
            <h3 className="font-serif text-lg text-[#1A1918] mt-0.5">
              Deploy to Vercel in 2 Terminal Commands
            </h3>
            <p className="text-xs text-[#635D56] mt-1 mb-3">
              After downloading and unzipping, paste this into the Mac Terminal window you already have open:
            </p>

            <div className="bg-[#1F1E1D] text-[#ECE7DF] p-3 rounded font-mono text-xs flex items-center justify-between overflow-x-auto">
              <code>cd ~/Downloads/elio-luxury-atelier && npx vercel --prod</code>
              <button
                onClick={() =>
                  copyToClipboard('cd ~/Downloads/elio-luxury-atelier && npx vercel --prod', 'vercel-cmd')
                }
                className="text-[#9E958C] hover:text-white p-1 ml-2 transition-colors"
                title="Copy command"
              >
                {copiedCmd === 'vercel-cmd' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Method 3: Push to GitHub */}
          <div className="p-5 bg-[#F7F2EA] border border-[#E3D9CC]">
            <div className="flex items-center gap-2 mb-1">
              <Github className="w-4 h-4 text-[#1A1918]" />
              <span className="text-[10px] uppercase tracking-wider text-[#8C827A] font-semibold">
                Option 3 · Push to GitHub Repository
              </span>
            </div>
            <p className="text-xs text-[#635D56] mb-3">
              To push from your Mac terminal to your GitHub repository:
            </p>

            <div className="bg-[#1F1E1D] text-[#ECE7DF] p-3 rounded font-mono text-xs space-y-1 overflow-x-auto">
              <div className="flex items-center justify-between">
                <span>cd ~/Downloads/elio-luxury-atelier</span>
              </div>
              <div>git remote add origin https://github.com/&lt;your-username&gt;/&lt;repo-name&gt;.git</div>
              <div>git push -u origin main</div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E8DFD5] flex items-center justify-between text-xs text-[#78716A]">
          <span>Need help? You can also click the top-right "Publish" button for instant cloud hosting.</span>
          <button
            onClick={onClose}
            className="text-[#1A1918] hover:underline uppercase tracking-wider text-[11px] font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
