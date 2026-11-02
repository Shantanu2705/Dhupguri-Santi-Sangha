import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Landmark, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';
import { AboutSection } from '../components/AboutSection';
import { BengaliMotif } from '../components/BengaliMotif';
import { CLUB_INFO } from '../data/clubData';

export const metadata: Metadata = {
  title: 'About Us | 67+ Years of Heritage',
  description:
    'Learn about the rich history and founding of Dhupguri Santi Sangha on May 8th, 1959 (Pochishe Boishakh). A pillar of cultural heritage, sports, and social welfare.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#F8F6EB] min-h-screen">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#072617] via-[#0B3D25] to-[#145A32] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs text-[#DFC483] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">About Us</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-serif-heritage font-bold text-white tracking-tight">
            About Dhupguri Santi Sangha
          </h1>
          <BengaliMotif variant="flourish" color="#DFC483" className="mt-3" />
          <p className="mt-3 text-sm sm:text-base text-[#F2EEDC]/90 max-w-2xl mx-auto font-light">
            Founded on 25th Baisakh (May 8, 1959), uniting generations through Bengali cultural traditions, athletic sportsmanship, pioneering fitness, and compassionate community service.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-[#145A32] border border-[#C6A75E]/40 text-[#DFC483]">
              Govt. Registration: {CLUB_INFO.registrationNumber}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#145A32] border border-[#C6A75E]/40 text-[#DFC483]">
              Pochishe Boishakh Foundation
            </span>
          </div>
        </div>
      </section>

      {/* Main About Component */}
      <AboutSection />

      {/* Extended Cultural Heritage Philosophy Section */}
      <section className="py-16 bg-[#F2EEDC] border-t border-[#145A32]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#145A32]/15 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#C6A75E]/40 shadow-md">
                <Image
                  src="/images/club-members-green-punjabi.jpg"
                  alt="Club fraternity in green kurtas"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#9E813B] uppercase tracking-widest block">
                  Our Founding Ideals
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-heritage font-bold text-[#0B3D25]">
                  Rooted in Pochishe Boishakh &amp; Rabindra Jayanti
                </h3>
                <p className="text-sm text-[#4F5E52] leading-relaxed">
                  In Bengal, 25th Baisakh carries profound emotional and cultural resonance as the birth anniversary of Kabiguru Rabindranath Tagore. Our founding fathers inaugurated Dhupguri Santi Sangha on this auspicious date in 1959 to embed intellectual curiosity, artistic expression, physical vigor, and universal brotherhood into the everyday fabric of Dhupguri.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#145A32]">
                  <Link href="/history" className="hover:underline flex items-center gap-1">
                    Explore History Timeline &rarr;
                  </Link>
                  <Link href="/committee" className="hover:underline flex items-center gap-1">
                    Meet Our Managing Committee &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

