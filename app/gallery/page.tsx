import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Camera, ChevronRight } from 'lucide-react';
import { GallerySection } from '../components/GallerySection';
import { BengaliMotif } from '../components/BengaliMotif';

export const metadata: Metadata = {
  title: 'Photo Gallery | Visual Archives & Celebrations',
  description:
    'Browse the authentic photographic archives of Dhupguri Santi Sangha: cultural programmes, Puja pandals, sacred rituals, community gatherings, and prestigious awards.',
};

export default function GalleryPage() {
  return (
    <div className="bg-[#F2EEDC] min-h-screen">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#072617] via-[#0B3D25] to-[#145A32] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-[#DFC483] mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Photo Gallery</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-serif-heritage font-bold text-white tracking-tight">
            Photo Gallery
          </h1>
          <BengaliMotif variant="flourish" color="#DFC483" className="mt-3" />
          <p className="mt-3 text-sm sm:text-base text-[#F2EEDC]/90 max-w-2xl mx-auto font-light">
            An authentic photographic chronicle of Dhupguri Santi Sangha&apos;s cultural excellence, grand pujas, community leaders, and civic fellowship.
          </p>
        </div>
      </section>

      {/* Main Gallery Component with Lightbox & Category Filters */}
      <GallerySection />
    </div>
  );
}

