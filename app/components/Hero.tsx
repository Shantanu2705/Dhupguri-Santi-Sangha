'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Image as ImageIcon, Award, Users, ShieldCheck, Flame } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { BengaliMotif } from './BengaliMotif';

const HERO_SLIDES = [
  {
    image: '/images/club-members-green-punjabi.jpg',
    title: 'Generations of Brotherhood & Culture',
    subtitle: 'Club members united in traditional attire before the illuminated Puja festival',
  },
  {
    image: '/images/crowd-festival-night.jpg',
    title: 'The Heartbeat of Dhupguri',
    subtitle: 'Thousands gathered in celebration under the festive lights of Santi Sangha',
  },
  {
    image: '/images/kali-puja-silver-daaker-saaj.jpg',
    title: 'Sublime Artistry & Reverence',
    subtitle: 'Iconic silver saaj deity crafted by maestro Dayal Paul of Dhupguri',
  },
];

export const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#072617] via-[#0B3D25] to-[#145A32] text-[#F8F6EB] pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative Traditional Alpona / Mandala Watermark */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #DFC483 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Heritage Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full bg-[#145A32]/70 border border-[#C6A75E]/40 text-xs text-[#DFC483] font-medium tracking-wider uppercase backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#DFC483] animate-ping" />
              <span>ESTABLISHED 1959</span>
              <span className="text-[#C6A75E]/50">•</span>
              <span className="text-[#F8F6EB]/90">67+ Years of Heritage</span>
            </div>

            {/* Main Club Title with Bengali Typography */}
            <div>
              <span className="block text-sm sm:text-base font-serif-heritage text-[#DFC483] tracking-widest uppercase mb-1">
                Official Web Portal • Dhupguri, West Bengal
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-serif-heritage font-bold text-white tracking-tight leading-[1.12]">
                Celebrating Togetherness, Culture &amp; Community Since 1959
              </h1>
            </div>

            {/* Traditional Flourish */}
            <BengaliMotif variant="flourish" color="#DFC483" className="self-start my-1" />

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#F2EEDC]/90 font-light leading-relaxed max-w-2xl">
              Rooted in tradition, driven by community spirit. Dhupguri Santi Sangha has been bringing people together through cultural, educational, sporting and social activities for generations.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#072617] bg-[#DFC483] hover:bg-[#C6A75E] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
              >
                <span>Explore Our Club</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#gallery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#F8F6EB] bg-[#072617]/60 hover:bg-[#072617] border border-[#C6A75E]/60 transition-all shadow-md hover:-translate-y-0.5 text-center"
              >
                <ImageIcon className="w-4 h-4 text-[#DFC483]" />
                <span>View Gallery</span>
              </Link>

              <Link
                href="#kali-puja-2026"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#DFC483] hover:text-white transition-colors text-center"
              >
                <Flame className="w-4 h-4 text-[#DFC483]" />
                <span>Kali Puja 2026 Theme &rarr;</span>
              </Link>
            </div>

            {/* Institutional Credentials Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#C6A75E]/20">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#DFC483] flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Regd. S/50499</div>
                  <div className="text-[11px] text-[#F2EEDC]/70">Govt. Certified</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Users className="w-5 h-5 text-[#DFC483] flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">300 Members</div>
                  <div className="text-[11px] text-[#F2EEDC]/70">75+ Active Core</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Award className="w-5 h-5 text-[#DFC483] flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Pochishe Boishakh</div>
                  <div className="text-[11px] text-[#F2EEDC]/70">25th Baisakh 1959</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Photographic Showcase with Official Logo Badge */}
          <div className="lg:col-span-5 relative">
            {/* Visual Frame */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C6A75E]/40 shadow-2xl bg-[#072617]">
              {/* Active Image Showcase */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src={HERO_SLIDES[activeSlide].image}
                  alt={HERO_SLIDES[activeSlide].title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#072617] via-transparent to-black/20" />

                {/* Prominent Official Seal Overlay on Hero */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#F8F6EB]/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C6A75E] shadow-lg">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-[#145A32]">
                    <Image
                      src="/logo/logo.jpeg"
                      alt="Official Seal"
                      fill
                      sizes="32px"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold text-[#0B3D25] leading-none uppercase">Official Seal</span>
                    <span className="text-[9px] text-[#4F5E52] leading-tight">Estd. 1959</span>
                  </div>
                </div>

                {/* Bottom Caption Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#072617]/90 backdrop-blur-md border border-[#C6A75E]/30">
                  <p className="text-xs font-semibold text-[#DFC483] tracking-wide">
                    {HERO_SLIDES[activeSlide].title}
                  </p>
                  <p className="text-[11px] text-[#F2EEDC]/80 line-clamp-1">
                    {HERO_SLIDES[activeSlide].subtitle}
                  </p>
                </div>
              </div>

              {/* Slide Switcher Strip */}
              <div className="p-3 bg-[#0B3D25] border-t border-[#C6A75E]/20 flex items-center justify-between gap-2">
                <div className="text-[11px] text-[#DFC483] font-medium tracking-wide uppercase">
                  Authentic Club Archives
                </div>
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        activeSlide === idx
                          ? 'w-7 bg-[#DFC483]'
                          : 'w-2 bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`View slide ${idx + 1}: ${slide.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Gold Leaf Border Accent */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-[#C6A75E]/50 rounded-br-2xl pointer-events-none hidden sm:block" />
            <div className="absolute -top-3 -left-3 w-24 h-24 border-l-2 border-t-2 border-[#C6A75E]/50 rounded-tl-2xl pointer-events-none hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

