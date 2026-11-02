import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, ChevronRight, ShieldCheck } from 'lucide-react';
import { CommitteeSection } from '../components/CommitteeSection';
import { BengaliMotif } from '../components/BengaliMotif';
import { CLUB_INFO } from '../data/clubData';

export const metadata: Metadata = {
  title: 'Our Managing Committee | Leadership & Stewards',
  description:
    'Meet the Managing Committee of Dhupguri Santi Sangha: President Mr. Debasis Moitra, General Secretary Mr. Debasish Dasgupta, Vice Presidents, Treasurers, Secretaries, and Executive Members.',
};

export default function CommitteePage() {
  return (
    <div className="bg-[#F8F6EB] min-h-screen">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#072617] via-[#0B3D25] to-[#145A32] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-[#DFC483] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Managing Committee</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-serif-heritage font-bold text-white tracking-tight">
            Our Managing Committee
          </h1>
          <BengaliMotif variant="flourish" color="#DFC483" className="mt-3" />
          <p className="mt-3 text-sm sm:text-base text-[#F2EEDC]/90 max-w-2xl mx-auto font-light">
            Guiding Dhupguri Santi Sangha with transparency, dedication to public welfare, and deep respect for Bengal&apos;s cultural traditions.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-[#145A32] border border-[#C6A75E]/40 text-[#DFC483]">
              President: {CLUB_INFO.contact.person}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#145A32] border border-[#C6A75E]/40 text-[#DFC483]">
              Govt. Registered Society S/50499
            </span>
          </div>
        </div>
      </section>

      {/* Main Committee Component */}
      <CommitteeSection />
    </div>
  );
}

