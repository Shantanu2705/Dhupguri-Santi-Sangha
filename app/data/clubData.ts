export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'cultural' | 'puja' | 'community' | 'awards';
  categoryLabel: string;
  src: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
  featured?: boolean;
}

export interface CommitteeMember {
  name: string;
  role: string;
  isLeadership?: boolean;
}

export interface CommitteeGroup {
  groupTitle: string;
  roleDescription?: string;
  members: CommitteeMember[];
}

export interface ActivityCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  iconName: string;
}

export interface TimelineMilestone {
  yearOrPeriod: string;
  title: string;
  description: string;
  badge?: string;
}

export const CLUB_INFO = {
  officialName: 'Dhupguri Santi Sangha',
  bengaliName: 'ধূপগুড়ি শান্তি সংঘ',
  domain: 'DhupguriSantiSangha.org',
  url: 'https://dhupgurisantisangha.org',
  registrationNumber: 'S/50499',
  establishmentDate: 'May 8, 1959',
  bengaliCalendarDate: '25th Baisakh (Pochishe Boishakh / Rabindra Jayanti)',
  estYear: 1959,
  legacyYears: '67+',
  totalMembers: 300,
  activeMembers: '75+',
  address: {
    line1: 'B.D.O. Road, Ghosh Para',
    city: 'Dhupguri',
    state: 'West Bengal',
    pincode: '735210',
    country: 'India',
    fullFormatted: 'B.D.O. Road, Ghosh Para, Dhupguri, West Bengal – 735210, India',
  },
  contact: {
    person: 'Mr. Debasis Moitra',
    role: 'President',
    phone: '+91 98320 65943',
    phoneRaw: '+919832065943',
    whatsapp: 'https://wa.me/919832065943',
    googleMapsLink: 'https://maps.google.com/?q=Ghosh+Para,+B.D.O.+Road,+Dhupguri,+West+Bengal+735210',
  },
  aboutText: [
    'Established on May 8th, 1959, Dhupguri Santi Sangha was founded by a group of dedicated individuals who came together with a shared vision of promoting cultural, sporting, educational and social activities.',
    "According to the traditional Bengali calendar, the club's establishment is associated with 25th Baisakh, popularly celebrated as Pochishe Boishakh and Rabindra Jayanti.",
    'Since its foundation, the club has remained committed to bringing the community together, preserving cultural traditions, encouraging participation in sports and supporting the development of society.',
    'Today, Dhupguri Santi Sangha continues to represent unity, dedication, tradition and community spirit.',
  ],
  kaliPuja2026: {
    clubName: 'DHUPGURI SANTI SANGHA',
    eventName: 'KALI PUJA 2026',
    theme: 'ABU DHABI HINDU TEMPLE',
    ceremonyTitle: 'OPENING CEREMONY',
    date: '6 NOVEMBER 2026',
    time: '7:00 PM',
  },
  // Backwards compatibility alias
  get durgaPuja2026() {
    return this.kaliPuja2026;
  },
};

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    yearOrPeriod: '1959',
    title: 'Foundation of Dhupguri Santi Sangha',
    description:
      'Established on May 8, 1959 (25th Baisakh / Pochishe Boishakh), the club was inaugurated by visionary local stalwarts seeking to unite the town through culture, harmony, and community service.',
    badge: 'Inaugural Year',
  },
  {
    yearOrPeriod: 'Cultural Development',
    title: 'Nurturing Bengali Heritage & Arts',
    description:
      'Founding members came together to promote cultural, educational, games and social activities, establishing a vibrant tradition of annual festivals, Rabindra Jayanti, and artistic celebrations.',
    badge: 'Cultural Heritage',
  },
  {
    yearOrPeriod: 'Gymnasium Initiative',
    title: 'Pioneering Gymnasium Culture in Dhupguri',
    description:
      'The club became an acclaimed pioneer in introducing modern gymnasium culture in Dhupguri, encouraging youth wellness, physical fitness, and athletic training.',
    badge: 'Pioneering Movement',
  },
  {
    yearOrPeriod: 'Present Day',
    title: 'Continuity, Social Welfare & Excellence',
    description:
      'Continuing its steadfast commitment to community participation, cultural celebrations, sports and social activities, representing unity and philanthropic leadership across generations.',
    badge: '67+ Years Strong',
  },
];

export const ACTIVITY_CATEGORIES: ActivityCategory[] = [
  {
    id: 'cultural',
    title: 'Cultural Activities',
    subtitle: 'Celebrating Bengal’s Rich Heritage & Festivals',
    description:
      'Dhupguri Santi Sangha organizes vibrant cultural celebrations, traditional festivals, Rabindra Jayanti observances, and stage performances that unite thousands across the region.',
    highlights: [
      'Cultural celebrations & festive galas',
      'Community gatherings & commemorative events',
      'Traditional festivals including grand Pujas',
      'Music, drama, and youth cultural programmes',
    ],
    image: '/images/cultural-stage-celebration.jpg',
    iconName: 'Sparkles',
  },
  {
    id: 'sports',
    title: 'Sports & Games',
    subtitle: 'Promoting Teamwork, Athletics & Fair Play',
    description:
      'Fostering sportsmanship and physical recreation through tournaments, indoor games, and outdoor athletic initiatives that nurture youth talent and camaraderie.',
    highlights: [
      'Sporting activities & athletic tournaments',
      'Games and recreational community events',
      'Encouraging mass participation and teamwork',
      'Youth coaching and sportsmanship values',
    ],
    image: '/images/club-members-green-punjabi.jpg',
    iconName: 'Trophy',
  },
  {
    id: 'gymnasium',
    title: 'Gymnasium & Fitness',
    subtitle: 'Pioneering Modern Fitness Culture',
    description:
      'Proud pioneers of introducing modern gymnasium culture in Dhupguri, offering youth and citizens structured physical training, body conditioning, and healthy lifestyle guidance.',
    highlights: [
      'Pioneering gymnasium culture in Dhupguri',
      'Promoting fitness and modern training experiences',
      'Body conditioning and athletic development',
      'Inspiring disciplined and healthy community living',
    ],
    image: '/images/crowd-festival-night.jpg',
    iconName: 'Dumbbell',
  },
  {
    id: 'educational',
    title: 'Educational Activities',
    subtitle: 'Empowering Minds & Inspiring Learning',
    description:
      'Dedicated to advancing literacy, educational encouragement, youth workshops, and student felicitations that empower local learners to reach greater heights.',
    highlights: [
      'Supporting educational initiatives & awareness',
      'Encouraging lifelong learning and development',
      'Academic felicitations & youth motivation',
      'Workshops on character and civic values',
    ],
    image: '/images/committee-executive-meeting.jpg',
    iconName: 'GraduationCap',
  },
  {
    id: 'social',
    title: 'Social Activities',
    subtitle: 'Uniting People for Community Welfare',
    description:
      'Leading social welfare, emergency community assistance, health camps, and collective humanitarian action that place the well-being of Dhupguri at the center.',
    highlights: [
      'Community participation and civic cohesion',
      'Social initiatives and humanitarian relief',
      'Bringing people together across all backgrounds',
      'Blood donation, public hygiene, and elder support',
    ],
    image: '/images/khuti-puja-ceremony.jpg',
    iconName: 'HeartHandshake',
  },
];

export const COMMITTEE_GROUPS: CommitteeGroup[] = [
  {
    groupTitle: 'President',
    roleDescription: 'Official Head & Legal Representative',
    members: [
      {
        name: 'Mr. Debasis Moitra',
        role: 'President',
        isLeadership: true,
      },
    ],
  },
  {
    groupTitle: 'Vice Presidents',
    members: [
      { name: 'Mr. Dipak Kar Dutta', role: 'Vice President' },
      { name: 'Mr. Swapan Das', role: 'Vice President' },
    ],
  },
  {
    groupTitle: 'General Secretary',
    members: [
      { name: 'Mr. Debasish Dasgupta', role: 'General Secretary', isLeadership: true },
    ],
  },
  {
    groupTitle: 'Assistant Secretaries',
    members: [
      { name: 'Mr. Monoj Dey', role: 'Assistant Secretary' },
      { name: 'Mr. Mithun Sutradhar', role: 'Assistant Secretary' },
      { name: 'Mr. Bubai Ball', role: 'Assistant Secretary' },
      { name: 'Mr. Narayan Das', role: 'Assistant Secretary' },
    ],
  },
  {
    groupTitle: 'Treasurers',
    members: [
      { name: 'Mr. Debasish Ghosh', role: 'Treasurer' },
      { name: 'Mr. Arindam Bhattacharjee', role: 'Treasurer' },
    ],
  },
  {
    groupTitle: 'Game Secretaries',
    members: [
      { name: 'Mr. Rabindra Nath Mandal', role: 'Game Secretary' },
      { name: 'Mr. Japash Sutradhar', role: 'Game Secretary' },
      { name: 'Mr. Sujit Paul', role: 'Game Secretary' },
    ],
  },
  {
    groupTitle: 'Cultural Secretaries',
    members: [
      { name: 'Mr. Biman Chakraborty', role: 'Cultural Secretary' },
      { name: 'Mr. Krishna Das', role: 'Cultural Secretary' },
    ],
  },
  {
    groupTitle: 'Executive Members',
    members: [
      { name: 'Mr. Haridhan Sarkar', role: 'Executive Member' },
      { name: 'Mr. Gour Gopal Sarkar', role: 'Executive Member' },
      { name: 'Mr. Ratan Chanda', role: 'Executive Member' },
      { name: 'Mr. Narayan Dasgupta', role: 'Executive Member' },
      { name: 'Mr. Nitai Dutta', role: 'Executive Member' },
      { name: 'Mr. Amal Nandy', role: 'Executive Member' },
      { name: 'Mr. Sanjay Das', role: 'Executive Member' },
      { name: 'Mr. Arun Roy', role: 'Executive Member' },
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'members-unity',
    title: 'Santi Sangha Members in Traditional Attire',
    category: 'community',
    categoryLabel: 'Community & Brotherhood',
    src: '/images/club-members-green-punjabi.jpg',
    width: 1600,
    height: 900,
    caption:
      'Club members unified in traditional green kurtas with official Santi Sangha badges before the grand puja festival pandal.',
    alt: 'Dhupguri Santi Sangha club members gathered in green kurtas before the festival pandal',
    featured: true,
  },
  {
    id: 'kali-puja-murti',
    title: 'Magnificent Idol with Daaker Saaj',
    category: 'puja',
    categoryLabel: 'Puja & Deities',
    src: '/images/kali-puja-silver-daaker-saaj.jpg',
    width: 1600,
    height: 1200,
    caption:
      'Resplendent Kali Puja deity adorned in intricate silver daaker saaj and grand architectural backdrop, crafted by renowned clay artist Dayal Paul of Dhupguri.',
    alt: 'Majestic Kali Puja idol in silver saaj backdrop at Dhupguri Santi Sangha',
    featured: true,
  },
  {
    id: 'crowd-festival',
    title: 'Grand Festive Night Gathering',
    category: 'cultural',
    categoryLabel: 'Cultural & Celebrations',
    src: '/images/crowd-festival-night.jpg',
    width: 960,
    height: 540,
    caption:
      'Vast gathering of thousands of residents from Dhupguri and surrounding regions celebrating together at Santi Sangha festival grounds.',
    alt: 'Massive festive crowd attending Dhupguri Santi Sangha festival at night',
    featured: true,
  },
  {
    id: 'khuti-puja',
    title: 'Auspicious Khuti Puja Inauguration',
    category: 'cultural',
    categoryLabel: 'Cultural & Traditions',
    src: '/images/khuti-puja-ceremony.jpg',
    width: 1200,
    height: 1600,
    caption:
      'Sacred Khuti Puja ceremony marking the auspicious beginning of pandal construction with Vedic rituals, marigold floral decorations, and club organizers on B.D.O. Road.',
    alt: 'Sacred Khuti Puja bamboo pole ceremony at Santi Sangha on BDO Road',
  },
  {
    id: 'award-samman',
    title: 'Uttarbanga Sambad Kali Puja Samman 2025',
    category: 'awards',
    categoryLabel: 'Honors & Achievements',
    src: '/images/kali-puja-samman-trophy.jpg',
    width: 960,
    height: 720,
    caption:
      'Club organizers proudly displaying the prestigious Kali Puja Samman 2025 awarded by Uttarbanga Sambad in recognition of artistic and cultural excellence.',
    alt: 'Santi Sangha organizers holding the Kali Puja Samman 2025 trophy',
  },
  {
    id: 'senior-leaders',
    title: 'Leadership & Cultural Recognition',
    category: 'awards',
    categoryLabel: 'Honors & Leadership',
    src: '/images/senior-leaders-award.jpg',
    width: 1200,
    height: 1600,
    caption:
      'Senior club leadership holding the Kali Puja Samman 2025 honor badge and trophy during the 67th Shyama Puja festival celebrations.',
    alt: 'Senior Santi Sangha leadership with 67th Shyama Puja honor badge and award',
  },
  {
    id: 'cultural-stage',
    title: 'Grand Cultural Stage Evening',
    category: 'cultural',
    categoryLabel: 'Cultural Programmes',
    src: '/images/cultural-stage-celebration.jpg',
    width: 960,
    height: 1280,
    caption:
      'Dignitaries, guest performers, and committee members on the decorated cultural stage celebrating the annual festival evening.',
    alt: 'Cultural stage performance and honoured guests at Dhupguri Santi Sangha',
  },
  {
    id: 'committee-meeting',
    title: 'Managing Committee Executive Session',
    category: 'community',
    categoryLabel: 'Governance & Planning',
    src: '/images/committee-executive-meeting.jpg',
    width: 1280,
    height: 960,
    caption:
      'Managing Committee members convened in the Santi Sangha club hall deliberating on community initiatives, cultural programmes, and social welfare projects.',
    alt: 'Managing committee meeting inside the Santi Sangha club hall',
  },
  {
    id: 'pandal-reception',
    title: 'Pandal Welcome & Reception',
    category: 'community',
    categoryLabel: 'Reception & Hospitality',
    src: '/images/puja-pandal-reception.jpg',
    width: 1600,
    height: 900,
    caption:
      'Club representatives welcoming visitors, families, and community elders at the Santi Sangha festival entrance.',
    alt: 'Club organizers welcoming visitors at Dhupguri Santi Sangha puja pandal',
  },
];

