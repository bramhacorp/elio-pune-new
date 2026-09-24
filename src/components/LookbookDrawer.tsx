import React from 'react';
import { X, Trash2, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { ProductItem } from '@/src/data/products';

interface LookbookDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lookbook: ProductItem[];
  onRemoveItem: (id: string) => void;
  onClearLookbook: () => void;
  onSelectProduct: (product: ProductItem) => void;
  onOpenAppointmentModal: (serviceNote?: string) => void;
}

export const LookbookDrawer: React.FC<LookbookDrawerProps> = ({
  isOpen,
  onClose,
  lookbook,
  onRemoveItem,
  onClearLookbook,
  onSelectProduct,
  onOpenAppointmentModal,
}) => {
  if (!isOpen) return null;

  const totalAmount = lookbook.reduce((sum, item) => sum + item.priceNum, 0);

  const handleInquireAll = () => {
    const names = lookbook.map((i) => i.name).join(', ');
    onClose();
    onOpenAppointmentModal(`Lookbook Consultation: ${names}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF7F2] max-w-md w-full h-full shadow-2xl border-l border-[#E0D7CB] flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#E8DFD5] flex items-center justify-between bg-[#FAF7F2]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-medium">
                Personal Curation
              </span>
            </div>
            <h3 className="font-serif text-2xl text-[#1A1918]">Curated Lookbook</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#1A1918] hover:bg-[#EBE3D7] rounded-full transition-colors cursor-pointer"
            aria-label="Close lookbook"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {lookbook.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 text-[#8C827A]">
              <p className="font-serif text-2xl text-[#1A1918] mb-2">Your Lookbook is Empty</p>
              <p className="text-xs text-[#666059] max-w-xs mb-6">
                Explore our fine jewellery and couture garments to curate your dream ensemble.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 border border-[#1A1918] text-xs uppercase tracking-widest text-[#1A1918] hover:bg-[#1A1918] hover:text-white transition-colors cursor-pointer"
              >
                Browse Creations
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between pb-2 border-b border-[#EBE3D9] text-xs text-[#8C827A]">
                <span>{lookbook.length} {lookbook.length === 1 ? 'Piece' : 'Pieces'} Saved</span>
                <button
                  onClick={onClearLookbook}
                  className="hover:text-red-700 transition-colors cursor-pointer text-[11px] underline"
                >
                  Clear All
                </button>
              </div>

              {lookbook.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-[#F4ECE3] border border-[#E5DACB] group relative"
                >
                  <div
                    className="w-20 h-20 bg-[#ECE4DA] shrink-0 overflow-hidden cursor-pointer"
                    onClick={() => {
                      onClose();
                      onSelectProduct(item);
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-[#8C827A] block">
                        {item.subcategory}
                      </span>
                      <h4
                        onClick={() => {
                          onClose();
                          onSelectProduct(item);
                        }}
                        className="font-serif text-base text-[#1A1918] hover:text-[#B89358] transition-colors cursor-pointer line-clamp-1"
                      >
                        {item.name}
                      </h4>
                      <p className="font-serif text-xs text-[#1A1918] mt-0.5">{item.price}</p>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectProduct(item);
                        }}
                        className="text-[10px] uppercase tracking-wider text-[#B89358] hover:underline cursor-pointer flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </button>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#8C827A] hover:text-red-700 transition-colors p-1"
                        title="Remove piece"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer */}
        {lookbook.length > 0 && (
          <div className="p-6 border-t border-[#E8DFD5] bg-[#F2EAE0] space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-xs uppercase tracking-wider text-[#78716A]">Estimated Value</span>
              <span className="font-serif text-lg font-medium text-[#1A1918]">
                ₹ {totalAmount.toLocaleString('en-IN')}
              </span>
            </div>

            <button
              onClick={handleInquireAll}
              className="w-full bg-[#1A1918] hover:bg-[#332F2B] text-white py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Salon Fitting for Lookbook</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
