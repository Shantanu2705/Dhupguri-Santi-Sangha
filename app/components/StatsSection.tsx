'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Users, UserCheck, CalendarDays, Award } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { BengaliMotif } from './BengaliMotif';

const STATS = [
  {
    icon: Users,
    value: CLUB_INFO.totalMembers,
    suffix: '',
    label: 'Total Members',
    sublabel: 'Enrolled club fraternity',
  },
  {
    icon: UserCheck,
    value: 75,
    suffix: '+',
    label: 'Active Members',
    sublabel: 'Core volunteers & organizers',
  },
  {
    icon: CalendarDays,
    value: CLUB_INFO.estYear,
    suffix: '',
    label: 'Year Established',
    sublabel: 'May 8, 1959 (Pochishe Boishakh)',
  },
  {
    icon: Award,
    value: 67,
    suffix: '+',
    label: 'Years of Legacy',
    sublabel: 'Serving Dhupguri with honor',
  },
];

export const StatsSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-16 lg:py-20 bg-gradient-to-r from-[#0B3D25] via-[#145A32] to-[#072617] text-[#F8F6EB] relative overflow-hidden"
    >
      {/* Decorative Gold Leaf Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A75E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C6A75E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-[#DFC483] tracking-widest uppercase bg-[#072617]/60 px-3.5 py-1 rounded-full border border-[#C6A75E]/30">
            Institutional Strength
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif-heritage font-bold text-white tracking-tight">
            Our Community at a Glance
          </h2>
          <BengaliMotif variant="flourish" color="#DFC483" className="mt-3" />
          <p className="mt-2 text-sm sm:text-base text-[#F2EEDC]/80 font-light max-w-lg mx-auto">
            A united social collective driven by 67+ years of dedication, voluntary service, and cultural fellowship.
          </p>
        </div>

        {/* 4 Key Statistics Cards (2x2 on mobile, 4 across on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-[#072617]/70 backdrop-blur-md p-4 sm:p-8 rounded-2xl border border-[#C6A75E]/30 text-center hover:border-[#C6A75E] transition-all duration-300 hover:-translate-y-1 group shadow-xl"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#145A32] border border-[#C6A75E]/40 mx-auto flex items-center justify-center text-[#DFC483] mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div
                  className="text-2xl sm:text-4xl lg:text-5xl font-serif-heritage font-bold text-[#DFC483] tracking-tight"
                  suppressHydrationWarning
                >
                  <Counter target={stat.value} trigger={inView} />
                  <span>{stat.suffix}</span>
                </div>

                <div className="mt-1.5 sm:mt-2 text-xs sm:text-base font-bold text-white tracking-wide">
                  {stat.label}
                </div>

                <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-[#F2EEDC]/70 line-clamp-1 sm:line-clamp-none">
                  {stat.sublabel}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Verification Banner */}
        <div className="mt-10 pt-6 border-t border-[#C6A75E]/20 text-center flex flex-wrap items-center justify-center gap-4 text-xs text-[#DFC483]">
          <span>Govt. Registration No: <strong className="text-white">{CLUB_INFO.registrationNumber}</strong></span>
          <span className="hidden sm:inline">•</span>
          <span>Date of Foundation: <strong className="text-white">{CLUB_INFO.establishmentDate}</strong></span>
          <span className="hidden sm:inline">•</span>
          <span>Bengali Calendar: <strong className="text-white">{CLUB_INFO.bengaliCalendarDate}</strong></span>
        </div>
      </div>
    </section>
  );
};

interface CounterProps {
  target: number;
  trigger: boolean;
}

const Counter: React.FC<CounterProps> = ({ target, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(update);
  }, [target, trigger]);

  return <span>{count}</span>;
};

