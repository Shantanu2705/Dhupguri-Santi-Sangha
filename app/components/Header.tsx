'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'History', href: '/#history' },
    { name: 'Activities', href: '/#activities' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Committee', href: '/#committee' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F6EB]/95 backdrop-blur-md shadow-md border-b border-[#C6A75E]/30 py-2.5'
          : 'bg-[#F8F6EB] border-b border-[#145A32]/10 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 xl:gap-8">
          {/* Logo & Brand Identity (Left) */}
          <Link
            href="/"
            className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none flex-shrink-0"
            aria-label="Dhupguri Santi Sangha Homepage"
          >
            {/* Prominent Official Seal */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0 rounded-full p-0.5 bg-white shadow-md border-2 border-[#145A32] group-hover:border-[#C6A75E] transition-colors">
              <Image
                src="/logo/logo.jpeg"
                alt="Dhupguri Santi Sangha Official Crest Logo"
                fill
                sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
                className="object-contain rounded-full"
                priority
              />
            </div>

            {/* Club Typography */}
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-[#9E813B] bg-[#F2EEDC] px-1.5 py-0.5 rounded border border-[#C6A75E]/30 leading-none">
                  ESTD. {CLUB_INFO.estYear}
                </span>
                <span className="hidden sm:inline-block text-[11px] text-[#4F5E52] font-medium leading-none">
                  {CLUB_INFO.bengaliName}
                </span>
              </div>
              <h1 className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-serif-heritage font-bold text-[#0B3D25] tracking-tight group-hover:text-[#145A32] transition-colors whitespace-nowrap leading-tight mt-0.5">
                {CLUB_INFO.officialName}
              </h1>
              <span className="text-[9px] sm:text-[11px] text-[#4F5E52] tracking-wide font-medium truncate sm:whitespace-nowrap">
                Regd. No. {CLUB_INFO.registrationNumber} • Dhupguri
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (Center with Spacing & No-Wrap) */}
          <nav
            className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-2 flex-1 px-2"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold tracking-wide text-[#202820] hover:text-[#145A32] rounded-md transition-colors relative group whitespace-nowrap"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#145A32] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          {/* Action CTAs (Right - Spacious & Non-Congested) */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
            {/* Sleek WhatsApp Button */}
            <a
              href={`https://wa.me/919832065943?text=${encodeURIComponent(
                'Hello Dhupguri Santi Sangha, I would like to connect with your team.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B3D25] bg-[#FAF8F2] hover:bg-[#F2EEDC] border border-[#C6A75E] rounded-lg shadow-sm transition-all hover:shadow whitespace-nowrap"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#145A32]" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Prominent Primary Get in Touch CTA */}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#145A32] hover:bg-[#0B3D25] border border-[#0B3D25] rounded-lg shadow-sm transition-all hover:shadow-md whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFC483]" />
              <span>Get in Touch</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/#contact"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#145A32] rounded-md shadow-sm"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#0B3D25] hover:text-[#145A32] hover:bg-[#F2EEDC] focus:outline-none focus:ring-2 focus:ring-[#145A32]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#C6A75E]/30 bg-[#F8F6EB]/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 border-b border-[#145A32]/10 mb-2">
            <span className="text-xs font-semibold tracking-wider text-[#9E813B] uppercase">
              Club Navigation
            </span>
            <span className="text-xs text-[#4F5E52]">
              Est. {CLUB_INFO.estYear}
            </span>
          </div>

          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-[#202820] hover:bg-[#F2EEDC] hover:text-[#145A32] transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#C6A75E]" />
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#145A32]/10 flex flex-col gap-2">
            <a
              href={`tel:${CLUB_INFO.contact.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#145A32] hover:bg-[#0B3D25] rounded-md shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#DFC483]" />
              <span>Call: {CLUB_INFO.contact.phone}</span>
            </a>
            <a
              href={CLUB_INFO.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#0B3D25] bg-white border border-[#C6A75E] rounded-md shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#145A32]" />
              <span>Direct WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
