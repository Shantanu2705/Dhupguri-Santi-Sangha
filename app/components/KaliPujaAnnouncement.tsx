'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, Clock, Sparkles, MapPin, Trophy } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { BengaliMotif } from './BengaliMotif';

export const KaliPujaAnnouncement: React.FC = () => {
  // Target: November 6, 2026, 19:00:00 IST
  const targetDate = new Date('2026-11-06T19:00:00+05:30').getTime();

  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="kali-puja-2026" className="py-14 sm:py-20 lg:py-28 bg-[#072617] text-[#F8F6EB] relative overflow-hidden">
      {/* Anchor alias for any backward links */}
      <span id="durga-puja-2026" className="sr-only" aria-hidden="true" />

      {/* Decorative Traditional Temple Arch Pattern in Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center">
        <svg width="800" height="800" viewBox="0 0 100 100" fill="none" stroke="#DFC483" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" strokeDasharray="1 1" />
          <circle cx="50" cy="50" r="25" />
          <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Festive Badge */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#145A32] border border-[#DFC483]/50 text-xs font-semibold text-[#DFC483] uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#DFC483]" />
            Grand Festive Announcement
          </div>
        </div>

        {/* Master Royal Announcement Panel */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#0B3D25] to-[#072617] rounded-3xl border-2 border-[#C6A75E] p-5 sm:p-10 lg:p-12 shadow-2xl relative">
          {/* Ornate Corner Accents */}
          <div className="absolute top-3 left-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#DFC483] rounded-tl-lg pointer-events-none" />
          <div className="absolute top-3 right-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#DFC483] rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#DFC483] rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#DFC483] rounded-br-lg pointer-events-none" />

          {/* Exact Required Announcement Content */}
          <div className="text-center space-y-5 sm:space-y-6">
            {/* Club Name */}
            <div className="tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-base font-semibold text-[#DFC483] uppercase">
              {CLUB_INFO.kaliPuja2026.clubName}
            </div>

            {/* Event Name */}
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-serif-heritage font-bold text-white tracking-wider uppercase">
              {CLUB_INFO.kaliPuja2026.eventName}
            </h2>

            {/* Motif */}
            <BengaliMotif variant="flourish" color="#DFC483" className="my-2" />

            {/* Theme Box */}
            <div className="py-3 px-4 sm:py-4 sm:px-8 bg-[#145A32]/60 rounded-2xl border border-[#DFC483]/60 max-w-xl mx-auto shadow-inner">
              <span className="block text-xl sm:text-3xl lg:text-4xl font-serif-heritage font-extrabold text-white tracking-wide">
                THEME: ABU DHABI HINDU TEMPLE
              </span>
            </div>

            {/* Temple-inspired architectural note */}
            <p className="text-xs sm:text-sm text-[#F2EEDC]/80 max-w-lg mx-auto font-light leading-relaxed">
              Inspired by the grandeur and timeless spiritual architecture of the Abu Dhabi Hindu Temple, our master pandal craftsmen will present a magnificent tribute uniting devotion, architectural precision, and cultural splendor.
            </p>

            {/* Ceremony Details */}
            <div className="pt-4 border-t border-[#C6A75E]/30 max-w-md mx-auto">
              <span className="block text-xs font-bold tracking-[0.2em] text-[#DFC483] uppercase mb-3">
                {CLUB_INFO.kaliPuja2026.ceremonyTitle}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div className="flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-xl bg-[#072617] border border-[#C6A75E]/40">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#DFC483]" />
                  <span className="text-sm sm:text-lg font-bold text-white tracking-wide">
                    {CLUB_INFO.kaliPuja2026.date}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-xl bg-[#072617] border border-[#C6A75E]/40">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#DFC483]" />
                  <span className="text-sm sm:text-lg font-bold text-white tracking-wide">
                    {CLUB_INFO.kaliPuja2026.time}
                  </span>
                </div>
              </div>
            </div>

            {/* Venue Location Line */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs text-[#DFC483] pt-1">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DFC483] flex-shrink-0" />
              <span>Santi Sangha Grounds, B.D.O. Road, Ghosh Para, Dhupguri</span>
            </div>

            {/* Live Countdown Grid (Mobile-friendly 4 columns) */}
            <div className="pt-4 sm:pt-6">
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#DFC483] uppercase tracking-widest block mb-2.5 sm:mb-3">
                Countdown to the Auspicious Opening
              </span>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-4 max-w-md mx-auto">
                {[
                  { label: 'Days', val: timeLeft.days },
                  { label: 'Hours', val: timeLeft.hours },
                  { label: 'Mins', val: timeLeft.minutes },
                  { label: 'Secs', val: timeLeft.seconds },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-2 sm:p-3 rounded-xl bg-[#145A32]/80 border border-[#C6A75E]/40 text-center"
                  >
                    <div
                      className="text-lg sm:text-3xl font-serif-heritage font-bold text-[#DFC483]"
                      suppressHydrationWarning
                    >
                      {mounted ? String(item.val).padStart(2, '0') : '--'}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-[#F8F6EB]/80 uppercase tracking-wider mt-0.5">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Previous Festival Artistic Excellence Showcase (Mobile-friendly layout) */}
        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-[#0B3D25]/70 rounded-2xl overflow-hidden border border-[#C6A75E]/30 p-3.5 sm:p-4 flex items-center gap-3 sm:gap-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 border border-[#C6A75E]/40">
              <Image
                src="/images/kali-puja-silver-daaker-saaj.jpg"
                alt="Silver saaj idol artistry at Santi Sangha"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#DFC483] uppercase tracking-wider block">
                Artistic Heritage
              </span>
              <h4 className="text-sm font-serif-heritage font-bold text-white mt-0.5">
                Renowned Idols &amp; Saaj Artistry
              </h4>
              <p className="text-xs text-[#F2EEDC]/70 mt-1 line-clamp-2">
                Crafted by renowned clay maestro Dayal Paul of Dhupguri for our annual cultural festivities.
              </p>
            </div>
          </div>

          <div className="bg-[#0B3D25]/70 rounded-2xl overflow-hidden border border-[#C6A75E]/30 p-3.5 sm:p-4 flex items-center gap-3 sm:gap-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 border border-[#C6A75E]/40">
              <Image
                src="/images/kali-puja-samman-trophy.jpg"
                alt="Uttarbanga Sambad Kali Puja Samman 2025"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#DFC483] uppercase tracking-wider block">
                Prestigious Recognition
              </span>
              <h4 className="text-sm font-serif-heritage font-bold text-white mt-0.5">
                Kali Puja Samman 2025 Winner
              </h4>
              <p className="text-xs text-[#F2EEDC]/70 mt-1 line-clamp-2">
                Awarded by Uttarbanga Sambad honoring our community dedication and pandal presentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const DurgaPujaAnnouncement = KaliPujaAnnouncement;
