import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { History, ChevronRight, Award, ShieldCheck } from 'lucide-react';
import { HistorySection } from '../components/HistorySection';
import { BengaliMotif } from '../components/BengaliMotif';
import { CLUB_INFO } from '../data/clubData';

export const metadata: Metadata = {
  title: 'Our Journey Since 1959 | Historical Milestones',
  description:
    'Discover the verified historical milestones of Dhupguri Santi Sangha: founded in 1959 on Pochishe Boishakh, pioneering gymnasium culture in Dhupguri, and upholding social traditions.',
};

export default function HistoryPage() {
  return (
    <div className="bg-[#F2EEDC] min-h-screen">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#072617] via-[#0B3D25] to-[#145A32] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-[#DFC483] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Our History</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-serif-heritage font-bold text-white tracking-tight">
            Our Journey Since 1959
          </h1>
          <BengaliMotif variant="flourish" color="#DFC483" className="mt-3" />
          <p className="mt-3 text-sm sm:text-base text-[#F2EEDC]/90 max-w-2xl mx-auto font-light">
            Tracing 67+ years of unbroken dedication, cultural celebrations, athletic pioneering, and humanitarian service in North Bengal.
          </p>
        </div>
      </section>

      {/* Main History Timeline Component */}
      <HistorySection />
    </div>
  );
}

