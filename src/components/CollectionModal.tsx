import React, { useState } from 'react';
import { X, Search, Bookmark, Check, ArrowRight, Sparkles } from 'lucide-react';
import { allProducts, ProductItem } from '@/src/data/products';

interface CollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: 'all' | 'jewellery' | 'clothing';
  onSelectProduct: (product: ProductItem) => void;
  onToggleLookbook: (product: ProductItem) => void;
  isSavedInLookbook: (id: string) => boolean;
  onOpenAppointmentModal: (note?: string) => void;
}

export const CollectionModal: React.FC<CollectionModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'all',
  onSelectProduct,
  onToggleLookbook,
  isSavedInLookbook,
  onOpenAppointmentModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'jewellery' | 'clothing'>(
    initialCategory
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  if (!isOpen) return null;

  const filteredProducts = allProducts.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const formatPrice = (priceNum: number) => {
    if (currency === 'USD') {
      const usdAmount = Math.round(priceNum / 86);
      return `$ ${usdAmount.toLocaleString('en-US')}`;
    }
    return `₹ ${priceNum.toLocaleString('en-IN')}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/65 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF7F2] max-w-6xl w-full h-[90vh] flex flex-col shadow-2xl border border-[#E0D7CB] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 md:p-8 border-b border-[#E8DFD5] flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0 bg-[#FAF7F2]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C827A] font-medium">
                ELIO Atelier Catalog
              </span>
              <span className="text-[10px] text-[#B89358]">·</span>
              <span className="text-[10px] uppercase tracking-widest text-[#B89358]">
                Pune, India
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1918]">
              Curated Collections
            </h2>
          </div>

          {/* Controls: Search, Category Tabs, Currency */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C827A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search collection..."
                className="bg-[#F2EBE1] border border-[#DDD3C5] pl-8 pr-3 py-1.5 text-xs text-[#1A1918] placeholder-[#8C827A] focus:outline-none focus:border-[#1A1918] w-40 sm:w-48"
              />
            </div>

            {/* Currency toggle */}
            <div className="flex border border-[#DDD3C5] overflow-hidden text-xs">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-2.5 py-1 transition-colors cursor-pointer ${
                  currency === 'INR'
                    ? 'bg-[#1A1918] text-white font-medium'
                    : 'bg-[#FAF7F2] text-[#666059] hover:bg-[#F2EBE1]'
                }`}
              >
                INR (₹)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 transition-colors cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-[#1A1918] text-white font-medium'
                    : 'bg-[#FAF7F2] text-[#666059] hover:bg-[#F2EBE1]'
                }`}
              >
                USD ($)
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 border border-[#DDD3C5] hover:bg-[#1A1918] hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close collections"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="px-6 md:px-8 py-3 bg-[#F4ECE3] border-b border-[#E8DFD5] flex items-center gap-6 overflow-x-auto text-xs uppercase tracking-[0.18em]">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`py-1 cursor-pointer transition-colors relative whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'font-bold text-[#1A1918] border-b-2 border-[#1A1918]'
                : 'text-[#78716A] hover:text-[#1A1918]'
            }`}
          >
            All Pieces ({allProducts.length})
          </button>
          <button
            onClick={() => setSelectedCategory('jewellery')}
            className={`py-1 cursor-pointer transition-colors relative whitespace-nowrap ${
              selectedCategory === 'jewellery'
                ? 'font-bold text-[#1A1918] border-b-2 border-[#1A1918]'
                : 'text-[#78716A] hover:text-[#1A1918]'
            }`}
          >
            Fine Jewellery ({allProducts.filter((p) => p.category === 'jewellery').length})
          </button>
          <button
            onClick={() => setSelectedCategory('clothing')}
            className={`py-1 cursor-pointer transition-colors relative whitespace-nowrap ${
              selectedCategory === 'clothing'
                ? 'font-bold text-[#1A1918] border-b-2 border-[#1A1918]'
                : 'text-[#78716A] hover:text-[#1A1918]'
            }`}
          >
            Haute Couture & Clothing ({allProducts.filter((p) => p.category === 'clothing').length})
          </button>
        </div>

        {/* Products Grid */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {filteredProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <Sparkles className="w-8 h-8 text-[#8C827A] mb-3" />
              <p className="font-serif text-2xl text-[#1A1918]">No pieces match your search</p>
              <p className="text-xs text-[#78716A] mt-1">
                Try searching for another piece or explore all categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-4 py-2 border border-[#1A1918] text-xs uppercase tracking-widest text-[#1A1918] hover:bg-[#1A1918] hover:text-white transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map((item) => {
                const saved = isSavedInLookbook(item.id);
                return (
                  <div
                    key={item.id}
                    className="group bg-[#FAF7F2] border border-[#E4DACD] hover:border-[#B89358] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md"
                  >
                    {/* Image Area */}
                    <div
                      className="relative aspect-square overflow-hidden bg-[#ECE4DA] cursor-pointer"
                      onClick={() => onSelectProduct(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#1A1918]">
                        {item.subcategory}
                      </div>

                      {/* Bookmark button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleLookbook(item);
                        }}
                        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                          saved
                            ? 'bg-[#B89358] text-white'
                            : 'bg-black/35 hover:bg-black/60 text-white'
                        }`}
                        title={saved ? 'Remove from Lookbook' : 'Save to Lookbook'}
                      >
                        {saved ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-[#8C827A] mb-1">
                          {item.subtitle}
                        </div>
                        <h3
                          onClick={() => onSelectProduct(item)}
                          className="font-serif text-xl font-normal text-[#1A1918] hover:text-[#B89358] transition-colors cursor-pointer mb-2 leading-snug"
                        >
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#666059] line-clamp-2 font-light mb-3">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#EFE8DE] flex items-center justify-between">
                        <span className="font-serif text-base font-normal text-[#1A1918]">
                          {formatPrice(item.priceNum)}
                        </span>
                        <button
                          onClick={() => onSelectProduct(item)}
                          className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-[#1A1918] group-hover:text-[#B89358] font-medium cursor-pointer"
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer / Atelier trial banner */}
        <div className="p-4 md:p-6 bg-[#161513] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <p className="text-xs text-[#E0D7CB]">
              Wish to view these creations in person? Experience private salon styling in Pune.
            </p>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenAppointmentModal('Curated Collection Consultation');
            }}
            className="px-5 py-2 bg-[#FAF7F2] text-[#161513] hover:bg-white text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap cursor-pointer transition-colors"
          >
            Book Private Appointment
          </button>
        </div>
      </div>
    </div>
  );
};
