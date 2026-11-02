import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ChevronRight } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { BengaliMotif } from '../components/BengaliMotif';
import { CLUB_INFO } from '../data/clubData';

export const metadata: Metadata = {
  title: 'Contact Us | Connect with Dhupguri Santi Sangha',
  description:
    'Contact Dhupguri Santi Sangha: B.D.O. Road, Ghosh Para, Dhupguri, West Bengal – 735210. Phone: +91 98320 65943. Contact Person: Mr. Debasis Moitra.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#F2EEDC] min-h-screen">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#072617] via-[#0B3D25] to-[#145A32] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-[#DFC483] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Contact Us</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-serif-heritage font-bold text-white tracking-tight">
            Connect With Dhupguri Santi Sangha
          </h1>
          <BengaliMotif variant="flourish" color="#DFC483" className="mt-3" />
          <p className="mt-3 text-sm sm:text-base text-[#F2EEDC]/90 max-w-2xl mx-auto font-light">
            We welcome members, cultural patrons, youth athletes, and well-wishers to get in touch with our leadership.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-[#145A32] border border-[#C6A75E]/40 text-[#DFC483]">
              President: {CLUB_INFO.contact.person}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#145A32] border border-[#C6A75E]/40 text-[#DFC483]">
              Phone: {CLUB_INFO.contact.phone}
            </span>
          </div>
        </div>
      </section>

      {/* Main Contact Section Component */}
      <ContactSection />
    </div>
  );
}

