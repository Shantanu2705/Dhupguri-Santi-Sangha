'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { GalleryItem } from '../data/clubData';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const item = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
    >
      {/* Top Action Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-[#DFC483] tracking-widest uppercase bg-[#145A32]/80 px-3 py-1 rounded-full border border-[#C6A75E]/40">
            {currentIndex + 1} of {items.length}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#F2EEDC]/80 bg-white/10 px-3 py-1 rounded-full">
            <Tag className="w-3 h-3 text-[#DFC483]" />
            {item.categoryLabel}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#DFC483]"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Viewport */}
      <div className="relative w-full h-[65vh] sm:h-[80vh] flex items-center justify-center px-4 sm:px-16">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>

      {/* Navigation Buttons */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-1 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/40 sm:bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#DFC483] z-30"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-1 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/40 sm:bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#DFC483] z-30"
        aria-label="Next Image"
      >
        <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" />
      </button>

      {/* Bottom Caption Overlay */}
      <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-12 sm:right-12 z-20 text-center">
        <div className="max-w-2xl mx-auto bg-[#072617]/95 backdrop-blur-md px-3.5 py-2 sm:px-5 sm:py-3 rounded-xl border border-[#C6A75E]/30 text-white shadow-2xl">
          <h3 className="text-xs sm:text-base font-serif-heritage font-bold text-[#DFC483]">
            {item.title}
          </h3>
          <p className="text-[11px] sm:text-xs text-[#F2EEDC]/90 mt-0.5 sm:mt-1 font-light line-clamp-2 sm:line-clamp-none">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

