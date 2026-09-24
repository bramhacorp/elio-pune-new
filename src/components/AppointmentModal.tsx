import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, MapPin } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const timeSlots = [
  '10:30 AM – 12:00 PM',
  '12:15 PM – 01:45 PM',
  '02:30 PM – 04:00 PM',
  '04:15 PM – 05:45 PM',
  '06:00 PM – 07:30 PM',
];

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Private Bridal Styling & Trousseau',
}) => {
  const [service, setService] = useState(initialService);
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [time, setTime] = useState(timeSlots[0]);
  const [guests, setGuests] = useState('2 Guests');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [hospitality, setHospitality] = useState('Champagne & Strawberries');
  const [confirmedBooking, setConfirmedBooking] = useState<{
    id: string;
    service: string;
    date: string;
    time: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookingId = 'ELIO-' + Math.floor(100000 + Math.random() * 900000);
    const newBooking = {
      id: bookingId,
      service,
      date,
      time,
      guests,
      name,
      email,
      phone,
      notes,
      hospitality,
      createdAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem('elio_appointments') || '[]');
    localStorage.setItem('elio_appointments', JSON.stringify([...existing, newBooking]));

    setConfirmedBooking({
      id: bookingId,
      service,
      date,
      time,
    });
  };

  const handleResetAndClose = () => {
    setConfirmedBooking(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-md animate-fadeIn"
      onClick={handleResetAndClose}
    >
      <div
        className="relative bg-[#FAF7F2] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E0D7CB] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 text-[#1A1918] hover:bg-[#EBE3D7] rounded-full transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedBooking ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#B89358]/15 border border-[#B89358]/40 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#B89358]" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C827A] mb-1">
              Confirmed Atelier Appointment
            </span>
            <h3 className="font-serif text-3xl text-[#1A1918] mb-2">We Look Forward to Welcoming You</h3>
            <p className="text-xs text-[#55504A] max-w-md mb-6 leading-relaxed">
              Your private styling suite has been reserved at our Pune studio. An invitation and salon concierge briefing have been dispatched to your email and WhatsApp.
            </p>

            <div className="w-full bg-[#F3ECE2] border border-[#E3D7C8] p-5 text-left mb-6 space-y-3">
              <div className="flex items-center justify-between border-b border-[#E3D7C8] pb-2">
                <span className="text-[10px] uppercase tracking-wider text-[#8C827A]">Booking Reference</span>
                <span className="font-mono text-xs font-bold text-[#1A1918]">{confirmedBooking.id}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-[#8C827A]">Service Experience</span>
                <span className="text-xs font-medium text-[#1A1918]">{confirmedBooking.service}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-[#8C827A]">Date & Timing</span>
                <span className="text-xs font-medium text-[#1A1918]">
                  {confirmedBooking.date} · {confirmedBooking.time}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-[#8C827A]">Location</span>
                <span className="text-xs font-medium text-[#1A1918]">ELIO Atelier, Koregaon Park, Pune</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="bg-[#1A1918] hover:bg-[#332F2B] text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
            >
              Done & Return to Atelier
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#8C827A] font-medium">
                  Private Salon Consultation
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1918] tracking-tight">
                Reserve Your Atelier Visit
              </h2>
              <p className="text-xs text-[#524C46] mt-2">
                Enjoy an uninterrupted private fitting suite, curated high tea, and dedicated styling advice at our Pune atelier.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1">
                  Experience / Consultation Type *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] focus:outline-none focus:border-[#1A1918] cursor-pointer"
                >
                  <option value="Private Bridal Styling & Trousseau">Private Bridal Styling & Trousseau (90 mins)</option>
                  <option value="Bespoke High Jewellery Commission">Bespoke High Jewellery Commission (60 mins)</option>
                  <option value="Heirloom Jewellery Remodeling">Heirloom Jewellery Remodeling & Upcycling (45 mins)</option>
                  <option value="Haute Couture Silhouette Fitting">Haute Couture Silhouette Fitting (60 mins)</option>
                  <option value="Virtual Video Consultation">Virtual Video Consultation via Concierge (45 mins)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#B89358]" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] focus:outline-none focus:border-[#1A1918]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#B89358]" />
                    <span>Preferred Time Slot *</span>
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] focus:outline-none focus:border-[#1A1918] cursor-pointer"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1 flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-[#B89358]" />
                    <span>Party Size</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] focus:outline-none focus:border-[#1A1918] cursor-pointer"
                  >
                    <option value="Solo (1 Guest)">Solo (1 Guest)</option>
                    <option value="2 Guests">2 Guests (Bride & Stylist / Companion)</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests (Family Suite)">4 Guests (Family Suite)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1">
                    Salon Hospitality Preference
                  </label>
                  <select
                    value={hospitality}
                    onChange={(e) => setHospitality(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] focus:outline-none focus:border-[#1A1918] cursor-pointer"
                  >
                    <option value="Champagne & Strawberries">Champagne & Fresh Berries</option>
                    <option value="Single-Origin Pour-over Coffee">Single-Origin Pour-over Coffee</option>
                    <option value="Makaibari Darjeeling First Flush Tea">Makaibari Darjeeling First Flush Tea</option>
                    <option value="Sparkling Water & Artisanal Macarons">Sparkling Water & Artisanal Macarons</option>
                  </select>
                </div>
              </div>

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
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1">
                  Phone / WhatsApp (for confirmation) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] placeholder-[#9C9287] focus:outline-none focus:border-[#1A1918]"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-medium text-[#666059] mb-1">
                  Special Notes or Specific Pieces of Interest
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share details like wedding dates, lehenga color preferences, custom jewellery ideas..."
                  className="w-full bg-[#FAF7F2] border border-[#D8CEBE] px-3.5 py-2 text-xs text-[#1A1918] placeholder-[#9C9287] focus:outline-none focus:border-[#1A1918] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center gap-2 text-[11px] text-[#78716A]">
                <MapPin className="w-3.5 h-3.5 text-[#B89358] shrink-0" />
                <span>Atelier Location: Koregaon Park, Pune · Valet parking included</span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A1918] hover:bg-[#332F2B] text-[#FAF7F2] py-3 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer mt-4"
              >
                Confirm Private Reservation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
