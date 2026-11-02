import React from 'react';
import Image from 'next/image';
import { History, Calendar, Dumbbell, Sparkles, Trophy } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/clubData';
import { BengaliMotif } from './BengaliMotif';

const MILESTONE_IMAGES: Record<number, { src: string; alt: string; caption: string }> = {
  0: {
    src: '/logo/logo.jpeg',
    alt: 'Foundational seal of Dhupguri Santi Sangha established in 1959',
    caption: 'Official Seal established on 25th Baisakh 1366 / May 8, 1959',
  },
  1: {
    src: '/images/cultural-stage-celebration.jpg',
    alt: 'Cultural stage celebration at Dhupguri Santi Sangha',
    caption: 'Cultural evening with guest performers and dignitaries on stage',
  },
  2: {
    src: '/images/crowd-festival-night.jpg',
    alt: 'Dhupguri community gathered for sports and youth vitality',
    caption: 'Pioneering gymnasium culture & youth fitness in Dhupguri',
  },
  3: {
    src: '/images/senior-leaders-award.jpg',
    alt: 'Present day recognition: Uttarbanga Sambad Kali Puja Samman 2025',
    caption: '67th Shyama Puja Utsav honor and leadership in community welfare',
  },
};

const MILESTONE_ICONS = [Calendar, Sparkles, Dumbbell, Trophy];

export const HistorySection: React.FC = () => {
  return (
    <section id="history" className="py-16 lg:py-24 bg-[#F2EEDC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#145A32]/10 border border-[#145A32]/20 text-xs font-semibold text-[#145A32] uppercase tracking-widest mb-3">
            <History className="w-3.5 h-3.5 text-[#C6A75E]" />
            Historical Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heritage font-bold text-[#0B3D25] tracking-tight">
            Our Journey Since 1959
          </h2>
          <BengaliMotif variant="flourish" color="#C6A75E" className="mt-3" />
          <p className="mt-3 text-base text-[#4F5E52] font-light max-w-xl mx-auto">
            From visionary beginnings on Pochishe Boishakh to pioneering modern fitness and grand cultural festivals.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Central Vertical Timeline Rule (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#C6A75E] via-[#145A32] to-[#C6A75E]" />

          {/* Timeline Nodes */}
          <div className="space-y-8 md:space-y-16">
            {TIMELINE_MILESTONES.map((milestone, idx) => {
              const IconComponent = MILESTONE_ICONS[idx % MILESTONE_ICONS.length];
              const isEven = idx % 2 === 0;
              const photoData = MILESTONE_IMAGES[idx];

              return (
                <div
                  key={milestone.title}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 md:px-6">
                    <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-lg border border-[#145A32]/10 hover:border-[#C6A75E]/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#145A32] text-[#DFC483]">
                          <IconComponent className="w-3.5 h-3.5 md:hidden" />
                          <span>{milestone.yearOrPeriod}</span>
                        </span>
                        {milestone.badge && (
                          <span className="text-[11px] font-semibold text-[#9E813B] uppercase tracking-wide">
                            {milestone.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif-heritage font-bold text-[#0B3D25] mb-3">
                        {milestone.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#4F5E52] leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Badge (Desktop) */}
                  <div className="hidden md:flex relative z-10 items-center justify-center w-12 h-12 rounded-full bg-[#145A32] text-[#DFC483] border-4 border-[#F2EEDC] shadow-lg flex-shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Media / Photo Side */}
                  <div className="w-full md:w-1/2 md:px-6">
                    {photoData && (
                      <div className="rounded-2xl overflow-hidden shadow-lg border border-[#145A32]/10 bg-white group">
                        <div
                          className={`relative w-full ${
                            idx === 0 ? 'aspect-[16/9] p-6 bg-[#FAF8F2] flex items-center justify-center' : 'aspect-[16/10]'
                          }`}
                        >
                          {idx === 0 ? (
                            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#145A32] shadow-inner bg-white p-1">
                              <Image
                                src={photoData.src}
                                alt={photoData.alt}
                                fill
                                sizes="120px"
                                className="object-contain"
                              />
                            </div>
                          ) : (
                            <Image
                              src={photoData.src}
                              alt={photoData.alt}
                              fill
                              sizes="(max-width: 768px) 100vw, 450px"
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          )}
                        </div>
                        <div className="p-3 bg-[#FAF8F2] border-t border-[#145A32]/10 text-center">
                          <p className="text-xs text-[#0B3D25] font-medium">
                            {photoData.caption}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

