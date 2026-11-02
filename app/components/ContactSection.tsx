'use client';

import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, User, ExternalLink, Send, CheckCircle2 } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { BengaliMotif } from './BengaliMotif';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose WhatsApp message directly to the official contact
    const text = `*Inquiry from Dhupguri Santi Sangha Website*%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Subject:* ${encodeURIComponent(
      formData.subject
    )}%0A*Message:* ${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/919832065943?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#F2EEDC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#145A32]/10 border border-[#145A32]/20 text-xs font-semibold text-[#145A32] uppercase tracking-widest mb-3">
            <Phone className="w-3.5 h-3.5 text-[#C6A75E]" />
            Official Communications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heritage font-bold text-[#0B3D25] tracking-tight">
            Connect With Dhupguri Santi Sangha
          </h2>
          <BengaliMotif variant="flourish" color="#C6A75E" className="mt-3" />
          <p className="mt-3 text-base text-[#4F5E52] font-light max-w-xl mx-auto">
            Get in touch with our President and club representatives for membership queries, cultural festivals, or community initiatives.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Official Details & Map */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary Details Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#145A32]/15 space-y-6">
              <div className="border-b border-[#145A32]/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#9E813B] block">
                  Official Club Headquarters
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-heritage font-bold text-[#0B3D25] mt-1">
                  {CLUB_INFO.officialName}
                </h3>
                <span className="text-xs text-[#4F5E52]">
                  Govt. Registration No. {CLUB_INFO.registrationNumber}
                </span>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F2] border border-[#145A32]/20 flex items-center justify-center text-[#145A32] flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#9E813B] uppercase tracking-wider block">
                    Official Address
                  </span>
                  <p className="text-sm sm:text-base font-medium text-[#202820] mt-0.5 leading-relaxed">
                    {CLUB_INFO.address.line1},<br />
                    {CLUB_INFO.address.city}, {CLUB_INFO.address.state} – {CLUB_INFO.address.pincode}, {CLUB_INFO.address.country}.
                  </p>
                  <a
                    href={CLUB_INFO.contact.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#145A32] hover:text-[#0B3D25] hover:underline mt-2"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Contact Person & Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F2] border border-[#145A32]/20 flex items-center justify-center text-[#145A32] flex-shrink-0 mt-1">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#9E813B] uppercase tracking-wider block">
                    Contact Person &amp; President
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#0B3D25] mt-0.5">
                    {CLUB_INFO.contact.person}
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <a
                      href={`tel:${CLUB_INFO.contact.phoneRaw}`}
                      className="text-base sm:text-lg font-bold text-[#145A32] hover:underline"
                    >
                      {CLUB_INFO.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Communication Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${CLUB_INFO.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-[#145A32] hover:bg-[#0B3D25] shadow-md transition-all"
                >
                  <Phone className="w-4 h-4 text-[#DFC483]" />
                  <span>Call President</span>
                </a>

                <a
                  href={CLUB_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider text-[#0B3D25] bg-[#FAF8F2] border border-[#C6A75E] hover:bg-[#F2EEDC] shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#145A32]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps Container */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#145A32]/15 aspect-[16/9] relative">
              <iframe
                title="Dhupguri Santi Sangha Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14258.468761278149!2d89.0068!3d26.5982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3f64c1b9a9d9b%3A0x6b4f7a7f4e9a8f0!2sDhupguri%2C%20West%20Bengal%20735210!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-semibold text-[#0B3D25] shadow">
                Ghosh Para, B.D.O. Road, Dhupguri
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message / WhatsApp Dispatch Form */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#145A32]/15">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E813B] block mb-1">
                Direct Contact
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-heritage font-bold text-[#0B3D25] mb-2">
                Send a Message to Santi Sangha
              </h3>
              <p className="text-xs sm:text-sm text-[#4F5E52] leading-relaxed mb-6">
                Fill out the form below to connect instantly with Mr. Debasis Moitra and club executives via WhatsApp and phone.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-[#145A32]/10 border border-[#145A32]/30 flex items-center gap-3 text-xs text-[#0B3D25]">
                  <CheckCircle2 className="w-5 h-5 text-[#145A32] flex-shrink-0" />
                  <div>
                    <span className="font-bold">Thank you for reaching out!</span> Your message draft has been generated for direct forwarding to our official WhatsApp channel.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-[#0B3D25] uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#145A32]/20 bg-[#FAF8F2] text-base text-[#202820] focus:outline-none focus:ring-2 focus:ring-[#145A32] focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-[#0B3D25] uppercase tracking-wider mb-1">
                    Phone Number / WhatsApp *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#145A32]/20 bg-[#FAF8F2] text-base text-[#202820] focus:outline-none focus:ring-2 focus:ring-[#145A32] focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold text-[#0B3D25] uppercase tracking-wider mb-1">
                    Subject / Topic
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#145A32]/20 bg-[#FAF8F2] text-base text-[#202820] focus:outline-none focus:ring-2 focus:ring-[#145A32] focus:bg-white"
                  >
                    <option value="General Inquiry">General Club Inquiry</option>
                    <option value="Durga Puja 2026 Celebration">Durga Puja 2026 Celebration</option>
                    <option value="Cultural Event Participation">Cultural Event Participation</option>
                    <option value="Sports & Gymnasium Program">Sports &amp; Gymnasium Program</option>
                    <option value="Membership & Community Welfare">Membership &amp; Community Welfare</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-[#0B3D25] uppercase tracking-wider mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#145A32]/20 bg-[#FAF8F2] text-base text-[#202820] focus:outline-none focus:ring-2 focus:ring-[#145A32] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-widest text-[#072617] bg-[#DFC483] hover:bg-[#C6A75E] transition-all shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp to Official Representative</span>
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-[#145A32]/10 text-center">
                <span className="text-[11px] text-[#4F5E52]">
                  Direct call assistance available at <strong className="text-[#145A32]">{CLUB_INFO.contact.phone}</strong> (Mr. Debasis Moitra)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

