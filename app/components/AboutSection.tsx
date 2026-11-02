import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, Heart, Shield, Landmark } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { BengaliMotif } from './BengaliMotif';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#F8F6EB] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#145A32]/10 border border-[#145A32]/20 text-xs font-semibold text-[#145A32] uppercase tracking-widest mb-3">
            <Landmark className="w-3.5 h-3.5 text-[#C6A75E]" />
            Heritage &amp; Identity
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heritage font-bold text-[#0B3D25] tracking-tight">
            About Dhupguri Santi Sangha
          </h2>
          <BengaliMotif variant="flourish" color="#C6A75E" className="mt-3" />
          <p className="mt-3 text-base text-[#4F5E52] font-light max-w-xl mx-auto">
            A pillar of Bengali cultural pride, athletic vitality, and social harmony in Dhupguri since 1959.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photographic Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Main Photo: Welcoming Pandal Reception */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#145A32]/15 aspect-[4/3] bg-white">
                <Image
                  src="/images/puja-pandal-reception.jpg"
                  alt="Club organizers welcoming members and visitors at Santi Sangha"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-semibold tracking-widest uppercase bg-[#145A32] px-2 py-0.5 rounded text-[#DFC483]">
                    Community Hospitality
                  </span>
                  <p className="text-xs sm:text-sm font-medium mt-1 text-[#F8F6EB]">
                    Club leadership and organizers welcoming families and guests at the festival entrance.
                  </p>
                </div>
              </div>

              {/* Overlapping Secondary Photo: Khuti Puja Ceremony */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-[#F8F6EB] bg-white">
                <Image
                  src="/images/khuti-puja-ceremony.jpg"
                  alt="Auspicious Khuti Puja ritual at Dhupguri Santi Sangha"
                  fill
                  sizes="350px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[11px] font-semibold text-[#DFC483]">
                    Auspicious Khuti Puja Ritual
                  </p>
                  <p className="text-[9px] text-[#F8F6EB]/80 line-clamp-1">
                    B.D.O. Road Pandal Inauguration
                  </p>
                </div>
              </div>

              {/* Experience Stamp */}
              <div className="absolute top-3 left-3 sm:-top-5 sm:-left-5 bg-[#0B3D25] text-white p-2.5 sm:p-3.5 rounded-xl border-2 border-[#C6A75E] shadow-xl flex items-center gap-2.5 sm:gap-3 z-10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#145A32] flex items-center justify-center font-serif-heritage font-bold text-[#DFC483] text-sm sm:text-lg border border-[#C6A75E]/40">
                  67+
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-xs font-bold text-[#DFC483] uppercase tracking-wider">Years of Legacy</span>
                  <span className="text-[9px] sm:text-[10px] text-[#F2EEDC]/80">Estd. May 8, 1959</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: History & Official Introduction Text */}
          <div className="lg:col-span-6 space-y-6">
            {/* The Official Verbatim Content */}
            <div className="space-y-4 text-[#202820] text-base sm:text-lg leading-relaxed font-normal">
              <p className="first-letter:text-4xl first-letter:font-serif-heritage first-letter:font-bold first-letter:text-[#145A32] first-letter:mr-2 first-letter:float-left">
                {CLUB_INFO.aboutText[0]}
              </p>

              <div className="p-4 rounded-xl bg-[#F2EEDC] border-l-4 border-[#145A32] shadow-sm my-4">
                <p className="italic text-[#0B3D25] font-serif-heritage text-base sm:text-lg">
                  &ldquo;{CLUB_INFO.aboutText[1]}&rdquo;
                </p>
                <span className="block mt-2 text-xs font-semibold text-[#9E813B] uppercase tracking-wider">
                  Traditional Bengali Calendar Association
                </span>
              </div>

              <p>{CLUB_INFO.aboutText[2]}</p>

              <p className="font-medium text-[#0B3D25]">
                {CLUB_INFO.aboutText[3]}
              </p>
            </div>

            {/* Core Values Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#145A32]/10">
              <div className="p-3 rounded-lg bg-white border border-[#145A32]/10 shadow-sm text-center">
                <Heart className="w-5 h-5 mx-auto text-[#145A32] mb-1" />
                <span className="block text-xs font-bold text-[#0B3D25]">Unity &amp; Harmony</span>
                <span className="text-[10px] text-[#4F5E52]">Sampriti &amp; Aikya</span>
              </div>

              <div className="p-3 rounded-lg bg-white border border-[#145A32]/10 shadow-sm text-center">
                <Compass className="w-5 h-5 mx-auto text-[#145A32] mb-1" />
                <span className="block text-xs font-bold text-[#0B3D25]">Culture &amp; Arts</span>
                <span className="text-[10px] text-[#4F5E52]">Heritage Preservation</span>
              </div>

              <div className="p-3 rounded-lg bg-white border border-[#145A32]/10 shadow-sm text-center col-span-2 sm:col-span-1">
                <Shield className="w-5 h-5 mx-auto text-[#145A32] mb-1" />
                <span className="block text-xs font-bold text-[#0B3D25]">Social Welfare</span>
                <span className="text-[10px] text-[#4F5E52]">Civic Responsibility</span>
              </div>
            </div>

            {/* Button Link to History */}
            <div className="pt-2">
              <Link
                href="#history"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#145A32] hover:text-[#0B3D25] group"
              >
                <span>Read our complete 67-year timeline journey</span>
                <ArrowRight className="w-4 h-4 text-[#C6A75E] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

