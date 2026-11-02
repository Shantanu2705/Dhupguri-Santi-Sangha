import React from 'react';
import Image from 'next/image';
import { Sparkles, Trophy, Dumbbell, GraduationCap, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { ACTIVITY_CATEGORIES } from '../data/clubData';
import { BengaliMotif } from './BengaliMotif';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Sparkles,
  Trophy,
  Dumbbell,
  GraduationCap,
  HeartHandshake,
};

export const ActivitiesSection: React.FC = () => {
  return (
    <section id="activities" className="py-16 lg:py-24 bg-[#F8F6EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#145A32]/10 border border-[#145A32]/20 text-xs font-semibold text-[#145A32] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A75E]" />
            Core Domains &amp; Initiatives
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heritage font-bold text-[#0B3D25] tracking-tight">
            What We Do
          </h2>
          <BengaliMotif variant="flourish" color="#C6A75E" className="mt-3" />
          <p className="mt-3 text-base text-[#4F5E52] font-light max-w-xl mx-auto">
            Committed to cultural vitality, athletic excellence, modern fitness culture, education, and community solidarity.
          </p>
        </div>

        {/* 5 Pillar Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITY_CATEGORIES.map((act, index) => {
            const Icon = ICON_MAP[act.iconName] || Sparkles;
            const isLarge = index === 0 || index === 1;

            return (
              <div
                key={act.id}
                className={`group bg-white rounded-2xl overflow-hidden border border-[#145A32]/10 shadow-md hover:shadow-2xl hover:border-[#C6A75E]/60 transition-all duration-500 flex flex-col ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Authentic Club Photo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#072617]">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#0B3D25]/90 border border-[#C6A75E]/50 flex items-center justify-center text-[#DFC483] shadow-md backdrop-blur-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title on image */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold text-[#DFC483] tracking-widest uppercase">
                      {act.subtitle}
                    </span>
                    <h3 className="text-xl font-serif-heritage font-bold text-white tracking-tight">
                      {act.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-[#4F5E52] leading-relaxed">
                    {act.description}
                  </p>

                  {/* Highlights List */}
                  <ul className="space-y-2 pt-2 border-t border-[#145A32]/10">
                    {act.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-[#202820]">
                        <CheckCircle2 className="w-4 h-4 text-[#145A32] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

