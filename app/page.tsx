import React from 'react';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { HistorySection } from './components/HistorySection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { StatsSection } from './components/StatsSection';
import { KaliPujaAnnouncement } from './components/KaliPujaAnnouncement';
import { GallerySection } from './components/GallerySection';
import { CommitteeSection } from './components/CommitteeSection';
import { ContactSection } from './components/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* SECTION 3: Hero Section */}
      <Hero />

      {/* SECTION 4: About Our Club */}
      <AboutSection />

      {/* SECTION 5: Our Legacy & History */}
      <HistorySection />

      {/* SECTION 6: Our Activities */}
      <ActivitiesSection />

      {/* SECTION 7: Membership & Club Statistics */}
      <StatsSection />

      {/* SECTION 8: Special Announcement – Kali Puja 2026 */}
      <KaliPujaAnnouncement />

      {/* SECTION 9: Photo Gallery */}
      <GallerySection />

      {/* SECTION 10: Committee Members */}
      <CommitteeSection />

      {/* SECTION 11: Contact Us */}
      <ContactSection />
    </>
  );
}
