import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { clothingModelImg, allProducts, ProductItem } from '@/src/data/products';

interface ClothingSectionProps {
  onExploreClothing: () => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const ClothingSection: React.FC<ClothingSectionProps> = ({
  onExploreClothing,
  onSelectProduct,
}) => {
  const featuredClothing = allProducts.find((p) => p.id === 'gulmohar-blush-lehenga');

  return (
    <section id="clothing" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#EBE3D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#666059] font-medium block mb-3">
              OUR CLOTHING
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#1A1918] mb-5 tracking-tight">
              Clothing
            </h2>
            <p className="text-sm md:text-base text-[#524C46] font-light leading-relaxed mb-8 max-w-md">
              From everyday elegance to special occasion wear, our collections are designed for the modern woman.
            </p>

            {/* Dark CTA Button */}
            <div className="mb-12">
              <button
                onClick={onExploreClothing}
                className="group inline-flex items-center gap-3 bg-[#1A1918] text-[#FAF7F2] px-7 py-3 text-xs md:text-sm uppercase tracking-[0.2em] font-medium hover:bg-[#332F2B] transition-colors cursor-pointer"
              >
                <span>EXPLORE CLOTHING</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 inline" />
                </span>
              </button>
            </div>

            {/* 3 Features Matching Mockup Icons */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8DFD5]">
              {/* Feature 1: Elegant Designs */}
              <div className="flex flex-col items-start">
                <div className="w-9 h-9 mb-2 flex items-center justify-center text-[#1A1918]">
                  {/* Custom delicate flower icon matching mockup */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7"
                  >
                    <path d="M12 2a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z" />
                    <path d="M12 13s-4 4-7 4a4 4 0 1 1 0-8c3 0 7 4 7 4z" />
                    <path d="M12 13s4 4 7 4a4 4 0 1 0 0-8c-3 0-7 4-7 4z" />
                    <circle cx="12" cy="13" r="1.5" />
                  </svg>
                </div>
                <span className="text-xs font-serif text-[#1A1918] font-medium leading-tight">
                  Elegant
                  <br />
                  Designs
                </span>
              </div>

              {/* Feature 2: Fine Fabrics */}
              <div className="flex flex-col items-start">
                <div className="w-9 h-9 mb-2 flex items-center justify-center text-[#1A1918]">
                  {/* Custom textile spool / fabric roll icon matching mockup */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M4 9h16" />
                    <path d="M4 15h16" />
                    <path d="M9 4v16" />
                    <path d="M15 4v16" />
                  </svg>
                </div>
                <span className="text-xs font-serif text-[#1A1918] font-medium leading-tight">
                  Fine
                  <br />
                  Fabrics
                </span>
              </div>

              {/* Feature 3: For Every You */}
              <div className="flex flex-col items-start">
                <div className="w-9 h-9 mb-2 flex items-center justify-center text-[#1A1918]">
                  <Heart className="w-6 h-6 stroke-[1.2]" />
                </div>
                <span className="text-xs font-serif text-[#1A1918] font-medium leading-tight">
                  For Every
                  <br />
                  You
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Clothing Model Image */}
          <div className="lg:col-span-7 relative flex items-center justify-end">
            <div
              className="relative w-full overflow-hidden aspect-[16/10] bg-[#E8E2D8] shadow-sm cursor-pointer group"
              onClick={() => featuredClothing && onSelectProduct(featuredClothing)}
              title="Click to view details of Gulmohar Blush Lehenga"
            >
              <img
                src={clothingModelImg}
                alt="ELIO Luxury Haute Couture Gulmohar Blush Lehenga Model"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Right Side Poetic Typographic Column */}
              <div className="hidden sm:block absolute top-8 right-8 text-right pointer-events-none select-none">
                <div className="text-[11px] md:text-xs uppercase tracking-[0.28em] font-medium text-white/90 leading-[1.8] bg-black/35 backdrop-blur-xs p-3 md:p-4 border-l border-white/30">
                  <p>WEAR</p>
                  <p>YOUR</p>
                  <p>STORY</p>
                  <div className="w-8 h-[1px] bg-white/70 ml-auto mt-2" />
                </div>
              </div>

              {/* Quick View Tag */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-md text-white text-[11px] uppercase tracking-widest px-3 py-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>Gulmohar Blush Lehenga · View Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
