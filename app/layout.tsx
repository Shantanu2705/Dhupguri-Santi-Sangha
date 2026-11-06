import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { CLUB_INFO } from './data/clubData';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0B3D25',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(CLUB_INFO.url),
  title: {
    default: 'Dhupguri Santi Sangha | Established 1959 | Dhupguri, West Bengal',
    template: '%s | Dhupguri Santi Sangha',
  },
  description:
    'Discover Dhupguri Santi Sangha, established in 1959. Explore our rich cultural heritage, sports, gymnasium initiatives, community activities, events and history in Dhupguri, West Bengal.',
  keywords: [
    'Dhupguri Santi Sangha',
    'Dhupguri club',
    'Santi Sangha 1959',
    'Dhupguri cultural club',
    'Kali Puja 2026 Abu Dhabi Hindu Temple theme',
    'Kali Puja Samman 2025 Dhupguri',
    'Ghosh Para Dhupguri',
    'West Bengal clubs',
    'Pochishe Boishakh 1959 club',
    'Pioneering gymnasium Dhupguri',
  ],
  authors: [{ name: 'Dhupguri Santi Sangha' }],
  creator: 'Dhupguri Santi Sangha',
  publisher: 'Dhupguri Santi Sangha',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: CLUB_INFO.url,
    siteName: 'Dhupguri Santi Sangha',
    title: 'Dhupguri Santi Sangha | Established 1959 | Dhupguri, West Bengal',
    description:
      'Discover Dhupguri Santi Sangha, established in 1959. Explore our rich cultural heritage, sports, gymnasium initiatives, community activities, events and history in Dhupguri, West Bengal.',
    images: [
      {
        url: '/logo/logo.jpeg',
        width: 1024,
        height: 1024,
        alt: 'Dhupguri Santi Sangha Official Crest',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhupguri Santi Sangha | Established 1959',
    description:
      'Celebrating togetherness, cultural heritage, gymnasium fitness, and community welfare in Dhupguri since 1959.',
    images: ['/logo/logo.jpeg'],
  },
  alternates: {
    canonical: CLUB_INFO.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['NGO', 'SportsClub', 'CommunityCenter'],
    name: 'Dhupguri Santi Sangha',
    alternateName: 'ধূপগুড়ি শান্তি সংঘ',
    url: 'https://dhupgurisantisangha.org',
    logo: 'https://dhupgurisantisangha.org/logo/logo.jpeg',
    foundingDate: '1959-05-08',
    description:
      'Established in 1959 on Pochishe Boishakh, Dhupguri Santi Sangha is a premier cultural, sports, and social welfare organization in Dhupguri, West Bengal.',
    identifier: 'S/50499',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'B.D.O. Road, Ghosh Para',
      addressLocality: 'Dhupguri',
      addressRegion: 'West Bengal',
      postalCode: '735210',
      addressCountry: 'IN',
    },
    telephone: '+919832065943',
    founder: {
      '@type': 'Person',
      name: 'Visionary Citizens of Dhupguri (1959)',
    },
    memberOf: {
      '@type': 'Organization',
      name: 'Govt. of West Bengal Societies Registration Act S/50499',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919832065943',
      contactType: 'Official Representative / President',
      name: 'Mr. Debasis Moitra',
    },
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8F6EB] text-[#202820] font-sans-modern selection:bg-[#145A32] selection:text-[#F8F6EB]">
        {/* SECTION 1: Announcement Bar */}
        <AnnouncementBar />

        {/* SECTION 2: Header & Navigation */}
        <Header />

        {/* Main Content Sections / Routed Pages */}
        <main className="flex-1">{children}</main>

        {/* SECTION 12: Footer Section containing the bottom blinking banner & club credentials */}
        <Footer />

        {/* Back To Top Action */}
        <BackToTop />
      </body>
    </html>
  );
}
