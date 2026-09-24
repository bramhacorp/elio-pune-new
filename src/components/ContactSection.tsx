import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { contactCardImg } from '@/src/data/products';

interface ContactSectionProps {
  onOpenStudioModal: () => void;
  onOpenAppointmentModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenStudioModal,
  onOpenAppointmentModal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bespoke Custom Jewellery',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save inquiry to localStorage for seamless client-side persistence
    setTimeout(() => {
      const existingInquiries = JSON.parse(localStorage.getItem('elio_inquiries') || '[]');
      const newInquiry = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem('elio_inquiries', JSON.stringify([...existingInquiries, newInquiry]));

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Bespoke Custom Jewellery',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#EBE3D9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-start">
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#666059] font-medium block mb-3">
              LET'S CONNECT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#1A1918] mb-5 tracking-tight">
              Contact
            </h2>
            <p className="text-sm md:text-base text-[#524C46] font-light leading-relaxed mb-10 max-w-md">
              Visit our studio in Pune or get in touch for enquiries, custom jewellery designs or personalised styling ideas.
            </p>

            {/* Contact Details List Matching Mockup */}
            <div className="flex flex-col gap-8 mb-10">
              {/* Location */}
              <div
                onClick={onOpenStudioModal}
                className="flex items-start gap-4 group cursor-pointer"
                role="button"
                tabIndex={0}
              >
                <div className="w-8 h-8 rounded-full border border-[#D8CEBE] flex items-center justify-center text-[#1A1918] group-hover:border-[#B89358] group-hover:text-[#B89358] transition-colors shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-medium text-[#1A1918] group-hover:text-[#B89358] transition-colors">
                    Pune, Maharashtra, India
                  </h4>
                  <p className="text-xs text-[#78716A] mt-0.5">Visit by Appointment</p>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:hello@elio.in"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full border border-[#D8CEBE] flex items-center justify-center text-[#1A1918] group-hover:border-[#B89358] group-hover:text-[#B89358] transition-colors shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-medium text-[#1A1918] group-hover:text-[#B89358] transition-colors">
                    hello@elio.in
                  </h4>
                  <p className="text-xs text-[#78716A] mt-0.5">We'd love to hear from you</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full border border-[#D8CEBE] flex items-center justify-center text-[#1A1918] group-hover:border-[#B89358] group-hover:text-[#B89358] transition-colors shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-medium text-[#1A1918] group-hover:text-[#B89358] transition-colors">
                    +91 98765 43210
                  </h4>
                  <p className="text-xs text-[#78716A] mt-0.5">Mon – Sat, 10:00 AM – 7:00 PM</p>
                </div>
              </a>
            </div>

            {/* Quick Action Button for Appointment */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2 border border-[#1A1918] bg-[#1A1918] text-[#FAF7F2] hover:bg-[#332F2B] px-6 py-2.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Studio Appointment</span>
              </button>
              <button
                onClick={onOpenStudioModal}
                className="inline-flex items-center gap-2 border border-[#B8AFA6] hover:border-[#1A1918] text-[#1A1918] px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors cursor-pointer"
              >
                <span>Studio Location Details</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hand-scripted visual + Stationery photo + Consultation form */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-6">
            <div className="relative">
              {/* Handwritten Script Header as seen in the mockup */}
              <div className="mb-4 sm:mb-6 pl-2">
                <span className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-[#2B2724] tracking-wide block transform -rotate-1">
                  Let's Create <br className="sm:hidden" />
                  Something Beautiful
                </span>
                <div className="w-12 h-px bg-[#4A443E] mt-3" />
              </div>

              {/* Stationery Card and Floral arrangement Image */}
              <div className="relative overflow-hidden aspect-[16/10] bg-[#EBE5DC] shadow-sm mb-6">
                <img
                  src={contactCardImg}
                  alt="ELIO Atelier luxury stationery card with baby breath flowers"
                  className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-3 right-3 bg-[#FAF7F2]/80 backdrop-blur-xs px-3 py-1 text-[10px] tracking-widest uppercase text-[#55504A]">
                  ELIO Studio · Pune
                </div>
              </div>
            </div>

            {/* Direct Inquiry & Styling Consultation Box */}
            <div className="bg-[#F4ECE3] border border-[#E4DACD] p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-xl md:text-2xl text-[#1A1918]">
                  Personalised Concierge & Styling Inquiry
                </h3>
                <Sparkles className="w-4 h-4 text-[#B89358]" />
              </div>

              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center gap-3">
                  <CheckCircle2 className="w-10 h-10 text-[#4E7A52]" />
                  <h4 className="font-serif text-xl text-[#1A1918]">Inquiry Received</h4>
                  <p className="text-xs text-[#524C46] max-w-sm">
                    Thank you. Our senior jewellery specialist and bridal stylist will review your request and connect with you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs uppercase tracking-widest text-[#1A1918] underline hover:text-[#B89358] cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Radhika Sharma"
                        className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] placeholder-[#9C9287] focus:outline-none focus:border-[#1A1918] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. radhika@example.com"
                        className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] placeholder-[#9C9287] focus:outline-none focus:border-[#1A1918] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] placeholder-[#9C9287] focus:outline-none focus:border-[#1A1918] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1">
                        Inquiry Focus
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] focus:outline-none focus:border-[#1A1918] transition-colors cursor-pointer"
                      >
                        <option value="Bespoke Custom Jewellery">Bespoke Custom Jewellery</option>
                        <option value="Bridal Lehenga & Trousseau">Bridal Lehenga & Trousseau</option>
                        <option value="Haute Couture Fitting">Haute Couture Fitting</option>
                        <option value="Heirloom Jewellery Remodeling">Heirloom Jewellery Remodeling</option>
                        <option value="Private Salon Viewing">Private Salon Viewing (Pune)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1">
                      Notes or Styling Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details such as upcoming wedding dates, preferred precious metals or gemstone ideas..."
                      className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] placeholder-[#9C9287] focus:outline-none focus:border-[#1A1918] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1A1918] text-[#FAF7F2] hover:bg-[#332F2B] py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Personalised Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
