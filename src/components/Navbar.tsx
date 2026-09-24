import React, { useState, useEffect } from 'react';
import { MapPin, Bookmark, Menu, X, Calendar, Sparkles, Download } from 'lucide-react';
import { ElioLogo } from './ElioLogo';

interface NavbarProps {
  onOpenStudioModal: () => void;
  onOpenAppointmentModal: () => void;
  onOpenLookbookDrawer: () => void;
  onOpenExportModal: () => void;
  lookbookCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenStudioModal,
  onOpenAppointmentModal,
  onOpenLookbookDrawer,
  onOpenExportModal,
  lookbookCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#E8DFD5]'
            : 'bg-[#FAF7F2]/80 backdrop-blur-xs py-4 md:py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group transition-transform active:scale-95"
            aria-label="ELIO Atelier Home"
          >
            <ElioLogo className="h-8 md:h-10 text-[#161513]" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection('products')}
              className="text-xs uppercase tracking-[0.2em] font-medium text-[#2C2926] hover:text-[#B89358] transition-colors py-1 cursor-pointer"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('clothing')}
              className="text-xs uppercase tracking-[0.2em] font-medium text-[#2C2926] hover:text-[#B89358] transition-colors py-1 cursor-pointer"
            >
              Clothing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-xs uppercase tracking-[0.2em] font-medium text-[#2C2926] hover:text-[#B89358] transition-colors py-1 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Action Icons & Location */}
          <div className="flex items-center gap-5 md:gap-7">
            {/* Location: Pune */}
            <button
              onClick={onOpenStudioModal}
              className="flex items-center gap-1.5 text-xs font-medium text-[#2C2926] hover:text-[#B89358] transition-colors cursor-pointer group"
              title="ELIO Atelier Studio in Pune, India"
            >
              <MapPin className="w-3.5 h-3.5 text-[#2C2926] group-hover:text-[#B89358] transition-colors" />
              <span className="tracking-[0.1em] text-xs">Pune</span>
            </button>

            {/* Lookbook / Saved Pieces Drawer */}
            <button
              onClick={onOpenLookbookDrawer}
              className="relative p-1.5 text-[#2C2926] hover:text-[#B89358] transition-colors cursor-pointer"
              title="View Curated Lookbook"
              aria-label="View Saved Lookbook"
            >
              <Bookmark className="w-4 h-4" />
              {lookbookCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-[#B89358] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse">
                  {lookbookCount}
                </span>
              )}
            </button>

            {/* Export & Deploy to GitHub / Vercel */}
            <button
              onClick={onOpenExportModal}
              className="flex items-center gap-1.5 bg-[#161513] text-white hover:bg-[#332F2B] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.16em] font-medium transition-all duration-300 cursor-pointer shadow-xs"
              title="Download Codebase / Push to GitHub & Vercel"
            >
              <Download className="w-3 h-3 text-[#D4AF37]" />
              <span className="hidden sm:inline">Export Code</span>
            </button>

            {/* Book Appointment CTA */}
            <button
              onClick={onOpenAppointmentModal}
              className="hidden lg:flex items-center gap-2 border border-[#2C2926] hover:bg-[#2C2926] hover:text-[#FAF7F2] text-[#2C2926] px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-3 h-3" />
              <span>Book Atelier</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#2C2926] hover:text-[#B89358] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FAF7F2]/98 backdrop-blur-md pt-28 px-8 flex flex-col justify-between pb-12 md:hidden">
          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C827A]">
              Navigation
            </span>
            <button
              onClick={() => scrollToSection('products')}
              className="text-left text-2xl font-serif text-[#2C2926] hover:text-[#B89358] transition-colors py-2 border-b border-[#E8DFD5]"
            >
              Our Products
            </button>
            <button
              onClick={() => scrollToSection('clothing')}
              className="text-left text-2xl font-serif text-[#2C2926] hover:text-[#B89358] transition-colors py-2 border-b border-[#E8DFD5]"
            >
              Our Clothing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-2xl font-serif text-[#2C2926] hover:text-[#B89358] transition-colors py-2 border-b border-[#E8DFD5]"
            >
              Let's Connect
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStudioModal();
              }}
              className="flex items-center gap-2 text-left text-base text-[#2C2926] hover:text-[#B89358] transition-colors py-2"
            >
              <MapPin className="w-4 h-4 text-[#B89358]" />
              <span>Visit Pune Studio (By Appointment)</span>
            </button>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#E8DFD5]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExportModal();
              }}
              className="w-full bg-[#161513] text-[#FAF7F2] py-3 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
              Export Codebase (.ZIP / GitHub)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              className="w-full border border-[#2C2926] text-[#2C2926] hover:bg-[#2C2926] hover:text-[#FAF7F2] py-3 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Book Atelier Consultation
            </button>
            <p className="text-center text-[11px] text-[#8C827A] tracking-wider pt-2">
              STYLE · CRAFTSMANSHIP · YOU
            </p>
          </div>
        </div>
      )}
    </>
  );
};
