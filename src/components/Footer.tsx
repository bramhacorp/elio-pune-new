import React from 'react';
import { Instagram, Facebook, MapPin, Download } from 'lucide-react';
import { ElioLogo } from './ElioLogo';

interface FooterProps {
  onOpenStudioModal: () => void;
  onOpenExportModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStudioModal, onOpenExportModal }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#121110] text-[#FAF7F2] pt-14 pb-12 border-t border-[#262422]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Row Matching Mockup */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#2A2724]">
          {/* Brand Logo in White */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group transition-transform active:scale-95"
            aria-label="ELIO Atelier"
          >
            <ElioLogo className="h-8 md:h-10 text-white" theme="light" />
          </a>

          {/* Center Navigation Links Matching Mockup */}
          <nav className="flex items-center gap-6 sm:gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#C8BFB5]">
            <button
              onClick={() => scrollToSection('products')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Products
            </button>
            <span className="text-[#4A4540]">|</span>
            <button
              onClick={() => scrollToSection('clothing')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Clothing
            </button>
            <span className="text-[#4A4540]">|</span>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Social Icons & Location Pin Matching Mockup */}
          <div className="flex items-center gap-5 text-[#C8BFB5]">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ELIO on Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ELIO on Facebook"
              className="hover:text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* Pinterest (SVG) */}
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ELIO on Pinterest"
              className="hover:text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <line x1="12" y1="9" x2="12" y2="21" />
                <path d="M8 12c-1.5-2.5-1-6 2-7.5 3.5-1.7 7.5.5 7.5 4.5 0 3-2 6-4.5 6-1 0-1.8-.7-2-1.5" />
              </svg>
            </a>

            {/* Pune Location */}
            <button
              onClick={onOpenStudioModal}
              className="flex items-center gap-1.5 text-xs text-[#C8BFB5] hover:text-white transition-colors cursor-pointer ml-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span className="tracking-wider">Pune</span>
            </button>
          </div>
        </div>

        {/* Bottom Row Matching Mockup */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A726A] font-light">
          <div className="flex items-center gap-4">
            <p>© 2026 Elio. All rights reserved.</p>
            {onOpenExportModal && (
              <button
                onClick={onOpenExportModal}
                className="text-[#B89358] hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider"
              >
                <Download className="w-3 h-3" />
                <span>Export Code (.zip)</span>
              </button>
            )}
          </div>

          <div className="uppercase tracking-[0.28em] text-[10px] md:text-[11px] text-[#8C827A]">
            <span>STYLE</span>
            <span className="mx-2.5 text-[#3D3834]">|</span>
            <span>MEANING</span>
            <span className="mx-2.5 text-[#3D3834]">|</span>
            <span>YOU</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
