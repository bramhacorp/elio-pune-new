import React from 'react';
import { X, MapPin, Clock, Phone, Mail, Car, Shield, Sparkles, Calendar } from 'lucide-react';

interface StudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAppointmentModal: () => void;
}

export const StudioModal: React.FC<StudioModalProps> = ({
  isOpen,
  onClose,
  onOpenAppointmentModal,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF7F2] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E0D7CB] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#1A1918] hover:bg-[#EBE3D7] rounded-full transition-colors cursor-pointer"
          aria-label="Close studio information"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C827A] font-medium">
              Flagship Atelier
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1918]">
            The ELIO Studio, Pune
          </h2>
          <p className="text-xs sm:text-sm text-[#55504A] mt-2 font-light max-w-xl">
            Nestled in the lush lanes of Koregaon Park, our Pune atelier is an intimate sanctuary dedicated to artisanal bridal couture, heirloom fine jewellery, and private bespoke styling.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Studio Details */}
          <div className="space-y-4">
            <div className="p-4 bg-[#F4ECE3] border border-[#E4DACD]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1918]">
                    Atelier Address
                  </h4>
                  <p className="text-xs text-[#524C46] mt-1 leading-relaxed">
                    Villa 12, Lane 6, Koregaon Park,
                    <br />
                    Pune, Maharashtra 411001, India
                  </p>
                  <p className="text-[11px] text-[#8C827A] mt-1 italic">
                    Near North Main Road Enclave
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F4ECE3] border border-[#E4DACD]">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1918]">
                    Consultation Hours
                  </h4>
                  <p className="text-xs text-[#524C46] mt-1">
                    Monday to Saturday: 10:00 AM – 7:00 PM
                  </p>
                  <p className="text-[11px] text-[#8C827A] mt-0.5">
                    Sunday: By special private request only
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F4ECE3] border border-[#E4DACD]">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1918]">
                    Concierge Desk
                  </h4>
                  <p className="text-xs text-[#524C46] mt-1">
                    +91 98765 43210 · hello@elio.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Salon Amenities & Experience */}
          <div className="p-5 bg-[#F2EAE0] border border-[#E1D6C7] flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1A1918] mb-3">
                Atelier Salon Amenities
              </h4>
              <ul className="space-y-2.5 text-xs text-[#524C46]">
                <li className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-[#B89358]" />
                  <span>Complimentary Private Valet Service</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#B89358]" />
                  <span>Exclusive Single-Client Viewing Suites</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
                  <span>Certified In-House Gemologist & Head Couturier</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#B89358]" />
                  <span>Curated High Tea & Champagne Service</span>
                </li>
              </ul>
            </div>

            {/* Stylized Map View Graphic */}
            <div className="mt-4 pt-4 border-t border-[#DED3C3]">
              <div className="bg-[#E7DFC5]/40 p-3 rounded-xs border border-[#D5C9B5] text-center">
                <p className="text-[11px] font-serif text-[#1A1918]">
                  Pune Airport (PNQ): ~15 mins drive
                </p>
                <p className="text-[11px] font-serif text-[#1A1918]">
                  Pune Railway Station: ~12 mins drive
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E8DFD5]">
          <p className="text-xs text-[#78716A]">
            To ensure an intimate experience, all studio visits are scheduled in advance.
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenAppointmentModal();
            }}
            className="w-full sm:w-auto bg-[#1A1918] hover:bg-[#332F2B] text-white px-7 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
          >
            Reserve Atelier Visit
          </button>
        </div>
      </div>
    </div>
  );
};
