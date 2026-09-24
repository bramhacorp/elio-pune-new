import React from 'react';
import { ArrowRight, Eye, Bookmark, Check } from 'lucide-react';
import { featuredJewellery, ProductItem } from '@/src/data/products';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onExploreAll: () => void;
  onToggleLookbook: (product: ProductItem) => void;
  isSavedInLookbook: (id: string) => boolean;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onExploreAll,
  onToggleLookbook,
  isSavedInLookbook,
}) => {
  return (
    <section id="products" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#EBE3D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column Header */}
          <div className="lg:col-span-4 xl:col-span-3 lg:pr-4">
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#666059] font-medium block mb-3">
              OUR PRODUCTS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#1A1918] mb-5 tracking-tight">
              Products
            </h2>
            <p className="text-sm text-[#524C46] font-light leading-relaxed mb-8 max-w-xs">
              Thoughtfully curated pieces that reflect elegance, individuality and meaningful design.
            </p>
            <div>
              <button
                onClick={onExploreAll}
                className="group inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-[#1A1918] pb-1 border-b border-[#1A1918] hover:border-[#B89358] hover:text-[#B89358] transition-colors cursor-pointer"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Product Cards from Mockup */}
          <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-5">
            {featuredJewellery.map((item) => {
              const saved = isSavedInLookbook(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectProduct(item)}
                  className="group relative cursor-pointer overflow-hidden aspect-square bg-[#E8E2D8] shadow-xs transition-transform duration-500 hover:-translate-y-1"
                >
                  {/* Background Product Image */}
                  <img
                    src={item.image}
                    alt={`${item.name} - ELIO Jewellery`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Scrim for Mockup Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity" />

                  {/* Top Right Quick Actions */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleLookbook(item);
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                        saved
                          ? 'bg-[#B89358] text-white'
                          : 'bg-black/40 hover:bg-black/60 text-white'
                      }`}
                      title={saved ? 'Remove from Lookbook' : 'Save to Lookbook'}
                    >
                      {saved ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(item);
                      }}
                      className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white transition-colors cursor-pointer"
                      title="View Details"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Text Matching Approved Mockup */}
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10 pointer-events-none">
                    <h3 className="font-serif text-lg md:text-xl font-normal leading-snug tracking-wide">
                      {item.subtitle}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/80 font-medium mt-0.5">
                      {item.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
