import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Award, Calendar, MessageSquare, ExternalLink } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { BengaliMotif } from './BengaliMotif';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0B3D25] via-[#072617] to-[#04160D] text-[#F8F6EB] border-t-2 border-[#C6A75E]/40 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Upper Footer: 3 Columns of Club Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#C6A75E]/20">
          {/* Column 1: Official Crest & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white p-1 border-2 border-[#DFC483] shadow-lg flex-shrink-0">
                <Image
                  src="/logo/logo.jpeg"
                  alt="Dhupguri Santi Sangha Official Crest"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#DFC483] tracking-widest uppercase block">
                  ESTD. {CLUB_INFO.estYear} • DHUPGURI
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-heritage font-bold text-white leading-tight">
                  {CLUB_INFO.officialName}
                </h3>
                <span className="text-xs text-[#DFC483]/80 font-medium">
                  {CLUB_INFO.bengaliName}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F2EEDC]/80 font-light leading-relaxed max-w-md pt-1">
              Established on 25th Baisakh (May 8, 1959), Dhupguri Santi Sangha has stood for 67+ years as a beacon of cultural heritage, youth fitness, sportsmanship, and social welfare in Dhupguri, West Bengal.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#145A32] border border-[#C6A75E]/30 text-[#DFC483]">
                <Award className="w-3.5 h-3.5" />
                Govt. Regd. {CLUB_INFO.registrationNumber}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#145A32] border border-[#C6A75E]/30 text-[#DFC483]">
                <Calendar className="w-3.5 h-3.5" />
                Pochishe Boishakh 1959
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DFC483] pb-2 border-b border-[#C6A75E]/20">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-[#F2EEDC]/80 hover:text-[#DFC483] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#F2EEDC]/80 hover:text-[#DFC483] transition-colors">
                  About Our Heritage
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-[#F2EEDC]/80 hover:text-[#DFC483] transition-colors">
                  67-Year Historical Timeline
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-[#F2EEDC]/80 hover:text-[#DFC483] transition-colors">
                  Pillar Activities &amp; Fitness
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#F2EEDC]/80 hover:text-[#DFC483] transition-colors">
                  Authentic Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/committee" className="text-[#F2EEDC]/80 hover:text-[#DFC483] transition-colors">
                  Managing Committee Directory
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#F2EEDC]/80 hover:text-[#DFC483] transition-colors">
                  Connect &amp; Location
                </Link>
              </li>
              <li>
                <Link href="/#durga-puja-2026" className="text-[#DFC483] font-semibold hover:underline">
                  Durga Puja 2026 Announcement
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DFC483] pb-2 border-b border-[#C6A75E]/20">
              Official Contact
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-[#F2EEDC]/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFC483] flex-shrink-0 mt-0.5" />
                <span>{CLUB_INFO.address.fullFormatted}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFC483] flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${CLUB_INFO.contact.phoneRaw}`}
                    className="font-bold text-white hover:text-[#DFC483] transition-colors"
                  >
                    {CLUB_INFO.contact.phone}
                  </a>
                  <span className="block text-[11px] text-[#F2EEDC]/70">
                    Contact Person: {CLUB_INFO.contact.person} (President)
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={CLUB_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#145A32] hover:bg-[#1E7E45] border border-[#C6A75E]/40 text-xs font-semibold text-white transition-all shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#DFC483]" />
                  <span>Connect on Official WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 12: BLINKABLE BANNER IN FOOTER SECTION AT BOTTOM OF WEBSITE */}
        <div className="pt-10 pb-8 border-b border-[#C6A75E]/20">
          <div className="flex flex-col items-center justify-center">
            {/* Clickable and Blinkable Banner navigating to www.digitaldictionarysiliguri.com */}
            <a
              href="https://www.digitaldictionarysiliguri.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-4xl transition-transform duration-300 hover:scale-[1.01] focus:outline-none cursor-pointer"
              title="Visit Digital Dictionary Siliguri - www.digitaldictionarysiliguri.com"
              aria-label="Visit Digital Dictionary Siliguri - www.digitaldictionarysiliguri.com"
            >
              <div className="relative w-full aspect-[1000/290] sm:aspect-[1200/340] banner-blink">
                <Image
                  src="/banner/digital-dictionary-banner.png"
                  alt="Comprehensive Agency Solutions - Digital Dictionary Siliguri - www.digitaldictionarysiliguri.com"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
                  className="object-contain"
                  priority={false}
                />
              </div>
            </a>
          </div>
        </div>

        {/* Traditional Flourish */}
        <BengaliMotif variant="flourish" color="#DFC483" className="my-6 opacity-60" />

        {/* Bottom Copyright & Rights */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F2EEDC]/70 text-center sm:text-left">
          <div>
            © 2026 {CLUB_INFO.officialName}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span>Govt. Reg. No. {CLUB_INFO.registrationNumber}</span>
            <span>•</span>
            <span>Dhupguri, West Bengal – 735210</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
