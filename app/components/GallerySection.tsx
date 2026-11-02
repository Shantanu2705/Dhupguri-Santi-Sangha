'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Camera, Maximize2, Sparkles, Filter } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/clubData';
import { BengaliMotif } from './BengaliMotif';
import { LightboxModal } from './LightboxModal';

type FilterCategory = 'all' | 'cultural' | 'puja' | 'community' | 'awards';

interface FilterOption {
  key: FilterCategory;
  label: string;
}

const FILTER_OPTIONS: FilterOption[] = [
  { key: 'all', label: 'All Photographs (9)' },
  { key: 'cultural', label: 'Cultural & Festivals' },
  { key: 'puja', label: 'Puja & Deities' },
  { key: 'community', label: 'Community & Brotherhood' },
  { key: 'awards', label: 'Honors & Trophies' },
];

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const openLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
    setActiveImageIndex(idx !== -1 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#F2EEDC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#145A32]/10 border border-[#145A32]/20 text-xs font-semibold text-[#145A32] uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5 text-[#C6A75E]" />
            Visual Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heritage font-bold text-[#0B3D25] tracking-tight">
            Glimpses of Santi Sangha
          </h2>
          <BengaliMotif variant="flourish" color="#C6A75E" className="mt-3" />
          <p className="mt-3 text-base text-[#4F5E52] font-light max-w-xl mx-auto">
            Authentic photographs capturing our cultural festivals, sacred pujas, community leaders, and prestigious recognitions.
          </p>
        </div>

        {/* Filter Navigation Bar (Horizontally scrollable on mobile) */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center px-1">
          <div className="hidden sm:flex items-center text-xs text-[#9E813B] font-semibold mr-2 uppercase tracking-wider flex-shrink-0">
            <Filter className="w-3.5 h-3.5 mr-1" />
            Filter:
          </div>
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setActiveFilter(opt.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap flex-shrink-0 ${
                activeFilter === opt.key
                  ? 'bg-[#145A32] text-[#DFC483] shadow-md border border-[#C6A75E]'
                  : 'bg-white text-[#202820] hover:bg-[#FAF8F2] border border-[#145A32]/10 shadow-sm'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Editorial Masonry/Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isSpan2 = item.featured && (index === 0 || index === 1);

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-[#072617] border border-[#145A32]/15 hover:border-[#C6A75E] ${
                  isSpan2 ? 'sm:col-span-2 lg:col-span-2 aspect-[16/10]' : 'aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3]'
                }`}
              >
                {/* Next.js Optimized Image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Category Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-[#0B3D25]/90 text-[#DFC483] px-2.5 py-1 rounded-full border border-[#C6A75E]/40 backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Fullscreen Expand Icon */}
                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                  <Maximize2 className="w-4 h-4 text-[#DFC483]" />
                </div>

                {/* Bottom Title & Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-base sm:text-lg font-serif-heritage font-bold text-white group-hover:text-[#DFC483] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#F2EEDC]/80 mt-1 line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#4F5E52] italic">
            * All photographs shown above are authentic historical and contemporary records of Dhupguri Santi Sangha.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setActiveImageIndex(newIndex)}
      />
    </section>
  );
};

