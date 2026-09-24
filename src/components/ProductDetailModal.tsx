import React from 'react';
import { X, Bookmark, Check, Calendar, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { ProductItem } from '@/src/data/products';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onToggleLookbook: (product: ProductItem) => void;
  isSavedInLookbook: (id: string) => boolean;
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onToggleLookbook,
  isSavedInLookbook,
  onOpenAppointmentModal,
}) => {
  if (!product) return null;

  const isSaved = isSavedInLookbook(product.id);

  const handleWhatsAppEnquiry = () => {
    const text = `Hello ELIO Concierge, I am interested in inquiring about the "${product.name}" (${product.price}). Could you share more details and availability for a private viewing?`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF7F2] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E0D7CB]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] rounded-full text-[#1A1918] transition-colors cursor-pointer"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left: Product Image */}
          <div className="md:col-span-6 bg-[#EBE5DC] relative aspect-square md:aspect-auto min-h-[350px] md:min-h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 text-white text-[10px] uppercase tracking-widest">
              {product.subcategory}
            </div>
          </div>

          {/* Right: Details & Concierge Actions */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C827A] font-medium">
                  {product.subtitle} · {product.tagline}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#B89358] font-medium">
                  {product.category === 'jewellery' ? 'Fine Jewellery' : 'Haute Couture'}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1918] mb-3 leading-snug">
                {product.name}
              </h3>

              <div className="text-xl font-serif text-[#1A1918] mb-4">
                {product.price}
                <span className="text-xs text-[#8C827A] font-sans ml-2">
                  (Inclusive of taxes & atelier consultation)
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#524C46] leading-relaxed mb-6 font-light">
                {product.description}
              </p>

              {/* Technical Specifications */}
              <div className="bg-[#F3ECE2] p-4 border border-[#E5DACB] space-y-2 mb-6 text-xs">
                <div>
                  <span className="text-[#8C827A] uppercase tracking-wider text-[10px] block">
                    Material & Gemstones
                  </span>
                  <p className="font-medium text-[#1A1918]">{product.details.material}</p>
                </div>
                <div>
                  <span className="text-[#8C827A] uppercase tracking-wider text-[10px] block">
                    Artisanal Craftsmanship
                  </span>
                  <p className="font-medium text-[#1A1918]">{product.details.craftsmanship}</p>
                </div>
                <div>
                  <span className="text-[#8C827A] uppercase tracking-wider text-[10px] block">
                    Origin & Atelier
                  </span>
                  <p className="font-medium text-[#1A1918]">{product.details.origin}</p>
                </div>
                <div>
                  <span className="text-[#8C827A] uppercase tracking-wider text-[10px] block">
                    Fit & Dimensions
                  </span>
                  <p className="font-medium text-[#1A1918]">{product.details.dimensionsOrFit}</p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-1.5 mb-8">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#524C46]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B89358] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-[#E8DFD5]">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => onToggleLookbook(product)}
                  className={`py-3 px-4 text-xs uppercase tracking-[0.18em] font-medium border transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                    isSaved
                      ? 'bg-[#B89358] text-white border-[#B89358]'
                      : 'border-[#1A1918] text-[#1A1918] hover:bg-[#1A1918] hover:text-[#FAF7F2]'
                  }`}
                >
                  {isSaved ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  <span>{isSaved ? 'In Lookbook' : 'Save Piece'}</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenAppointmentModal(`Private Viewing: ${product.name}`);
                  }}
                  className="py-3 px-4 bg-[#1A1918] hover:bg-[#332F2B] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Trial</span>
                </button>
              </div>

              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/30 text-xs uppercase tracking-[0.18em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Concierge Consultation via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
