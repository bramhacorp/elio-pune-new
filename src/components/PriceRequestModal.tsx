import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, Phone, Mail, Send, MapPin, Calendar, Clock } from 'lucide-react';
import { ProductItem } from '@/src/data/products';

interface PriceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductItem | null;
  categoryContext?: 'all' | 'jewellery' | 'clothing';
}

export const PriceRequestModal: React.FC<PriceRequestModalProps> = ({
  isOpen,
  onClose,
  product,
  categoryContext = 'all',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Price & Certified Valuation');
  const [includeAtelierVisit, setIncludeAtelierVisit] = useState(false);
  const [preferredDate, setPreferredDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [preferredTime, setPreferredTime] = useState('11:00 AM – 1:00 PM');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Update default message when product or categoryContext changes
  useEffect(() => {
    if (product) {
      setMessage(
        `Hello ELIO Concierge, I would like to request the official pricing, availability, and consultation details for "${product.name}".`
      );
    } else if (categoryContext === 'clothing') {
      setMessage(
        'Hello ELIO Concierge, I would like to request the bespoke pricing dossier and private consultation details for the Haute Couture & Clothing collection.'
      );
    } else if (categoryContext === 'jewellery') {
      setMessage(
        'Hello ELIO Concierge, I would like to request the bespoke pricing dossier and private consultation details for the Fine Jewellery collection.'
      );
    } else {
      setMessage(
        'Hello ELIO Concierge, I would like to request the bespoke pricing dossier and private consultation details for your curated collections.'
      );
    }
    setIsSubmitted(false);
  }, [product, categoryContext, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reqId = 'ELIO-REQ-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(reqId);

    const inquiryRecord = {
      id: reqId,
      productId: product?.id,
      productName: product?.name,
      name,
      email,
      phone,
      inquiryType,
      includeAtelierVisit,
      preferredDate: includeAtelierVisit ? preferredDate : null,
      preferredTime: includeAtelierVisit ? preferredTime : null,
      message,
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('elio_price_requests') || '[]');
      localStorage.setItem('elio_price_requests', JSON.stringify([...existing, inquiryRecord]));
    } catch {
      // ignore
    }

    setIsSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = product
      ? `Hello ELIO Concierge, I would like to request the price and availability for "${product.name}". Could you share details?`
      : 'Hello ELIO Concierge, I would like to request pricing details for your creations.';
    window.open(`https://wa.me/919225177513?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="relative bg-[#FAF7F2] max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DFD5C7] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-[#1A1918] hover:bg-[#EBE3D7] rounded-full transition-colors cursor-pointer"
          aria-label="Close form"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#B89358]/15 border border-[#B89358]/40 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#B89358]" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C827A] mb-1">
              Request Received
            </span>
            <h3 className="font-serif text-3xl text-[#1A1918] mb-2">Price Request Dispatched</h3>
            <p className="text-xs text-[#55504A] max-w-sm mb-6 leading-relaxed">
              Thank you, <span className="font-medium text-[#1A1918]">{name || 'Client'}</span>. Our senior jewellery specialist and atelier concierge will share the private quotation and piece dossier via WhatsApp and email within 2 hours.
            </p>

            <div className="w-full bg-[#F3ECE2] border border-[#E3D7C8] p-4 text-left mb-6 space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-[#E3D7C8] pb-2">
                <span className="text-[#8C827A] uppercase tracking-wider text-[10px]">Reference</span>
                <span className="font-mono font-bold text-[#1A1918]">{referenceId}</span>
              </div>
              {product && (
                <div className="flex items-center justify-between border-b border-[#E3D7C8] pb-2">
                  <span className="text-[#8C827A] uppercase tracking-wider text-[10px]">Selected Piece</span>
                  <span className="font-medium text-[#1A1918] truncate max-w-[240px]">{product.name}</span>
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-[#8C827A] uppercase tracking-wider text-[10px]">Concierge Desk</span>
                <span className="text-[#1A1918]">+91 92251 77513 · support@eliostore.in</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                onClick={handleClose}
                className="flex-1 bg-[#1A1918] hover:bg-[#332F2B] text-white py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
              >
                Return to Collections
              </button>
              <button
                onClick={handleWhatsAppInquiry}
                className="flex-1 border border-[#25D366] text-[#1E7E34] hover:bg-[#25D366]/10 py-3 text-xs uppercase tracking-[0.16em] font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Instant WhatsApp</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C827A] font-medium">
                  Bespoke Atelier Inquiry
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1918] tracking-tight">
                Request Price & Details
              </h2>
              <p className="text-xs text-[#666059] mt-1 font-light">
                Our bespoke creations and heirloom jewels are tailored to order. Receive the current price dossier and availability directly from our Pune atelier.
              </p>
            </div>

            {/* Product Card Highlight or Category Highlight */}
            {product ? (
              <div className="mb-6 p-3 bg-[#F2EBE0] border border-[#E3D8CA] flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover border border-[#DFD4C5] shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-[9px] uppercase tracking-widest text-[#8C827A]">
                    {product.subtitle} · {product.subcategory}
                  </div>
                  <h4 className="font-serif text-base text-[#1A1918] truncate font-medium">
                    {product.name}
                  </h4>
                  <div className="inline-block mt-0.5 px-2 py-0.5 bg-[#FAF7F2] border border-[#DDD2C2] text-[10px] uppercase tracking-wider text-[#B89358] font-medium">
                    Price on Request
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-6 p-3.5 bg-[#F2EBE0] border border-[#E3D8CA] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#B89358] shrink-0" />
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#8C827A] block">
                      Atelier Catalog Inquiry
                    </span>
                    <span className="font-serif text-sm text-[#1A1918] font-medium">
                      {categoryContext === 'clothing'
                        ? 'Haute Couture & Clothing Collection'
                        : categoryContext === 'jewellery'
                        ? 'Fine Jewellery & Heirlooms'
                        : 'Curated Atelier Collections'}
                    </span>
                  </div>
                </div>
                <div className="px-2 py-0.5 bg-[#FAF7F2] border border-[#DDD2C2] text-[10px] uppercase tracking-wider text-[#B89358] font-medium">
                  Price on Request
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Radhika Sharma"
                    className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] placeholder-[#9C9287] focus:outline-none focus:border-[#1A1918]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 92251 77513"
                    className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] placeholder-[#9C9287] focus:outline-none focus:border-[#1A1918]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. radhika@example.com"
                    className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] placeholder-[#9C9287] focus:outline-none focus:border-[#1A1918]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1">
                    Inquiry Focus
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] focus:outline-none focus:border-[#1A1918] cursor-pointer"
                  >
                    <option value="Price & Certified Valuation">Price & Certified Valuation</option>
                    <option value="Availability & Delivery Timeframe">Availability & Delivery Timeframe</option>
                    <option value="Bespoke Customization & Sizing">Bespoke Customization & Sizing</option>
                    <option value="Heirloom Gold / Diamond Exchange">Heirloom Gold / Diamond Exchange</option>
                  </select>
                </div>
              </div>

              {/* Message / Specific Requirements */}
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1">
                  Message or Specific Inquiries
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about carat weight, certificate, custom fit, delivery..."
                  className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] placeholder-[#9C9287] focus:outline-none focus:border-[#1A1918] resize-none"
                />
              </div>

              {/* Option to also book salon trial */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeAtelierVisit}
                    onChange={(e) => setIncludeAtelierVisit(e.target.checked)}
                    className="mt-0.5 accent-[#1A1918]"
                  />
                  <div className="text-xs">
                    <span className="font-medium text-[#1A1918]">
                      Also reserve a private viewing session at our Pune studio
                    </span>
                    <p className="text-[11px] text-[#78716A]">
                      F-16, Boulevard Towers, Camp, Pune - 411 001 · Single-client suite with valet
                    </p>
                  </div>
                </label>
              </div>

              {includeAtelierVisit && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 bg-[#F2EAE0] border border-[#E3D7C8] animate-fadeIn">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#666059] mb-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#B89358]" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3 py-1.5 text-xs text-[#1A1918]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-[#666059] mb-1 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#B89358]" />
                      <span>Preferred Time</span>
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3 py-1.5 text-xs text-[#1A1918]"
                    >
                      <option value="10:30 AM – 12:00 PM">10:30 AM – 12:00 PM</option>
                      <option value="12:15 PM – 01:45 PM">12:15 PM – 01:45 PM</option>
                      <option value="02:30 PM – 04:00 PM">02:30 PM – 04:00 PM</option>
                      <option value="04:15 PM – 05:45 PM">04:15 PM – 05:45 PM</option>
                      <option value="06:00 PM – 07:30 PM">06:00 PM – 07:30 PM</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Submit Actions */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full bg-[#1A1918] hover:bg-[#332F2B] text-white py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Price Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="w-full border border-[#D8CEBE] hover:border-[#25D366] hover:bg-[#25D366]/5 text-[#1A1918] py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Inquire via WhatsApp (+91 92251 77513)</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
