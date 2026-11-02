import React from 'react';
import Link from 'next/link';
import { Phone, Calendar, Award } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#072617] text-[#F8F6EB] text-xs border-b border-[#C6A75E]/20 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
          {/* Main Welcome Message */}
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#C6A75E] animate-pulse" />
            <span>
              Welcome to <span className="text-[#DFC483] font-semibold">{CLUB_INFO.officialName}</span> – Established in {CLUB_INFO.estYear}
            </span>
            <span className="hidden md:inline-block text-[#C6A75E]/60">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#F2EEDC]/80 text-[11px]">
              <Calendar className="w-3 h-3 text-[#C6A75E]" />
              25th Baisakh (Pochishe Boishakh)
            </span>
          </div>

          {/* Quick Info & Govt Reg Badge */}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] text-[#F2EEDC]/90">
            <span className="hidden lg:inline-flex items-center gap-1 bg-[#145A32]/60 px-2 py-0.5 rounded border border-[#C6A75E]/30">
              <Award className="w-3 h-3 text-[#C6A75E]" />
              Govt. Regd. {CLUB_INFO.registrationNumber}
            </span>

            <a
              href={`tel:${CLUB_INFO.contact.phoneRaw}`}
              className="inline-flex items-center gap-1 hover:text-[#DFC483] transition-colors font-medium"
              title="Call President Mr. Debasis Moitra"
            >
              <Phone className="w-3 h-3 text-[#C6A75E]" />
              <span>{CLUB_INFO.contact.phone}</span>
            </a>

            <span className="text-[#C6A75E]/40">|</span>

            <Link
              href="/#durga-puja-2026"
              className="text-[#DFC483] hover:underline font-semibold"
            >
              Durga Puja 2026 Theme &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

