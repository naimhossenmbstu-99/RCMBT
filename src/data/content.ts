/**
 * Centralized placeholder content for the Rotaract Club of Mawlana Bhashani Tangail.
 * All values here are clearly-marked placeholders. When Supabase integration is
 * enabled, these structures map directly to future database tables.
 */

export interface NavLink {
  label: string;
  to: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our History', to: '/history' },
  { label: 'Executive Board', to: '/board' },
  { label: 'Previous Boards', to: '/previous-boards' },
  { label: 'Projects', to: '/projects' },
  { label: 'SDG Impact', to: '/sdg' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'News & Events', to: '/news' },
  { label: 'International', to: '/international' },
  { label: 'Join Us', to: '/join' },
  { label: 'Contact', to: '/contact' },
];

export const CLUB = {
  name: 'Rotaract Club of Mawlana Bhashani Tangail',
  shortName: 'RAC Mawlana Bhashani Tangail',
  location: 'Tangail, Bangladesh',
  rotaryYear: '2026–27',
  theme: 'Create Lasting Impact',
  domain: 'racmawlanabhashani.org',
  email: 'info@racmawlanabhashani.org',
  phone: '+880 1XXX-XXXXXX',
  address: 'Tangail, Dhaka Division, Bangladesh',
  district: 'Rotaract District XXXX',
  sponsorClub: 'Rotary Club of [Sponsor Club Name]',
  parentOrg: 'Rotary International',
  parentOrgUrl: 'https://www.rotary.org',
  foundedYear: 'Placeholder',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  },
};

export interface Stat {
  value: string;
  label: string;
}

export const HOME_STATS: Stat[] = [
  { value: '120+', label: 'Active Members' },
  { value: '50+', label: 'Service Projects' },
  { value: '15+', label: 'Partner Clubs Worldwide' },
  { value: '5,000+', label: 'Beneficiaries Reached' },
];

export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  sdg: number[];
  summary: string;
  status: 'Ongoing' | 'Completed';
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'p1',
    title: 'Clean Water for Rural Schools',
    category: 'Community Development',
    sdg: [6, 3],
    summary:
      'Installing safe drinking water facilities in underserved rural schools across Tangail district.',
    status: 'Ongoing',
  },
  {
    id: 'p2',
    title: 'Literacy for All',
    category: 'Education',
    sdg: [4, 10],
    summary:
      'Volunteer-driven tutoring and book donation drives supporting underprivileged students.',
    status: 'Ongoing',
  },
  {
    id: 'p3',
    title: 'Green Tangail Initiative',
    category: 'Environment',
    sdg: [13, 15],
    summary:
      'Tree plantation and awareness campaigns building environmental stewardship among youth.',
    status: 'Ongoing',
  },
  {
    id: 'p4',
    title: 'Health & Hygiene Camp',
    category: 'Health',
    sdg: [3, 6],
    summary:
      'Free health check-ups and hygiene awareness sessions for low-income communities.',
    status: 'Completed',
  },
];

export interface SdgGoal {
  number: number;
  title: string;
  color: string;
  short: string;
}

export const SDG_GOALS: SdgGoal[] = [
  { number: 1, title: 'No Poverty', color: '#E5243B', short: 'End poverty in all its forms everywhere.' },
  { number: 2, title: 'Zero Hunger', color: '#DDA63A', short: 'End hunger, achieve food security.' },
  { number: 3, title: 'Good Health & Well-being', color: '#4C9F38', short: 'Ensure healthy lives and promote well-being.' },
  { number: 4, title: 'Quality Education', color: '#C5192D', short: 'Inclusive and equitable quality education.' },
  { number: 5, title: 'Gender Equality', color: '#FF3A21', short: 'Achieve gender equality and empower all women.' },
  { number: 6, title: 'Clean Water & Sanitation', color: '#26BDE2', short: 'Ensure access to water and sanitation for all.' },
  { number: 7, title: 'Affordable Clean Energy', color: '#FCC30B', short: 'Access to affordable, reliable, modern energy.' },
  { number: 8, title: 'Decent Work & Growth', color: '#A21942', short: 'Promote sustained, inclusive economic growth.' },
  { number: 9, title: 'Industry & Innovation', color: '#FD6925', short: 'Build resilient infrastructure, foster innovation.' },
  { number: 10, title: 'Reduced Inequalities', color: '#DD1367', short: 'Reduce inequality within and among countries.' },
  { number: 11, title: 'Sustainable Cities', color: '#FD9D24', short: 'Make cities inclusive, safe, resilient, sustainable.' },
  { number: 12, title: 'Responsible Consumption', color: '#BF8B2E', short: 'Ensure sustainable consumption and production.' },
  { number: 13, title: 'Climate Action', color: '#3F7E44', short: 'Take urgent action to combat climate change.' },
  { number: 14, title: 'Life Below Water', color: '#0A97D9', short: 'Conserve and sustainably use the oceans.' },
  { number: 15, title: 'Life on Land', color: '#56C02B', short: 'Protect, restore and promote terrestrial ecosystems.' },
  { number: 16, title: 'Peace & Justice', color: '#00689D', short: 'Promote peaceful and inclusive societies.' },
  { number: 17, title: 'Partnerships for the Goals', color: '#19486A', short: 'Revitalize the global partnership for development.' },
];

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  portfolio: string;
  initials: string;
}

export const EXECUTIVE_BOARD: BoardMember[] = [
  { id: 'm1', name: 'Placeholder President', role: 'President', portfolio: 'Club Leadership & Vision', initials: 'PP' },
  { id: 'm2', name: 'Placeholder Vice President', role: 'Vice President', portfolio: 'Operations & Programs', initials: 'VP' },
  { id: 'm3', name: 'Placeholder Secretary', role: 'Secretary', portfolio: 'Administration & Records', initials: 'RS' },
  { id: 'm4', name: 'Placeholder Treasurer', role: 'Treasurer', portfolio: 'Finance & Fundraising', initials: 'TR' },
  { id: 'm5', name: 'Placeholder Dir. Club Service', role: 'Director — Club Service', portfolio: 'Member Engagement', initials: 'DC' },
  { id: 'm6', name: 'Placeholder Dir. Community Service', role: 'Director — Community Service', portfolio: 'Outreach Projects', initials: 'DS' },
  { id: 'm7', name: 'Placeholder Dir. International', role: 'Director — International Service', portfolio: 'Global Partnerships', initials: 'DI' },
  { id: 'm8', name: 'Placeholder Dir. Professional Dev.', role: 'Director — Professional Development', portfolio: 'Skills & Careers', initials: 'DP' },
  { id: 'm9', name: 'Placeholder Sergeant-at-Arms', role: 'Sergeant-at-Arms', portfolio: 'Discipline & Fellowship', initials: 'SA' },
];

export interface PreviousBoard {
  year: string;
  president: string;
  theme: string;
  highlights: string;
}

export const PREVIOUS_BOARDS: PreviousBoard[] = [
  { year: '2025–26', president: 'Placeholder President', theme: 'Service Above Self', highlights: 'Placeholder summary of key initiatives and milestones.' },
  { year: '2024–25', president: 'Placeholder President', theme: 'Empowering Communities', highlights: 'Placeholder summary of key initiatives and milestones.' },
  { year: '2023–24', president: 'Placeholder President', theme: 'Youth in Action', highlights: 'Placeholder summary of key initiatives and milestones.' },
  { year: '2022–23', president: 'Placeholder President', theme: 'Connect · Lead · Serve', highlights: 'Placeholder summary of key initiatives and milestones.' },
];

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  { id: 'n1', title: 'Club Inauguration Ceremony for Rotary Year 2026–27', date: '2026-07-01', category: 'Announcement', excerpt: 'The newly elected executive board takes charge with the annual theme "Create Lasting Impact".' },
  { id: 'n2', title: 'Joint Tree Plantation Drive with Partner Club', date: '2026-08-15', category: 'Event', excerpt: 'A cross-border environmental initiative bringing together volunteers from two countries.' },
  { id: 'n3', title: 'Professional Development Workshop Series', date: '2026-09-10', category: 'Program', excerpt: 'Skill-building sessions on leadership, communication and career readiness for young professionals.' },
  { id: 'n4', title: 'World Rotaract Week Celebration', date: '2026-03-11', category: 'Event', excerpt: 'A week of service, fellowship and recognition marking the global Rotaract movement.' },
];

export interface GalleryAlbum {
  id: string;
  title: string;
  date: string;
  count: number;
  category: string;
}

export const GALLERY_ALBUMS: GalleryAlbum[] = [
  { id: 'g1', title: 'Inauguration Ceremony 2026–27', date: 'July 2026', count: 24, category: 'Ceremony' },
  { id: 'g2', title: 'Clean Water Project Field Visit', date: 'August 2026', count: 18, category: 'Project' },
  { id: 'g3', title: 'Tree Plantation Drive', date: 'August 2026', count: 15, category: 'Environment' },
  { id: 'g4', title: 'Professional Development Workshop', date: 'September 2026', count: 12, category: 'Workshop' },
  { id: 'g5', title: 'International Friendship Meet', date: 'October 2026', count: 20, category: 'Fellowship' },
  { id: 'g6', title: 'Health Camp Outreach', date: 'November 2026', count: 16, category: 'Health' },
];

export interface Partnership {
  country: string;
  club: string;
  type: string;
}

export const PARTNERSHIPS: Partnership[] = [
  { country: 'Placeholder Country A', club: 'Rotaract Club of [Name]', type: 'Twin Club' },
  { country: 'Placeholder Country B', club: 'Rotaract Club of [Name]', type: 'Joint Project' },
  { country: 'Placeholder Country C', club: 'Rotaract Club of [Name]', type: 'Twin Club' },
  { country: 'Placeholder Country D', club: 'Rotaract Club of [Name]', type: 'Friendship' },
];

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const HISTORY_MILESTONES: Milestone[] = [
  { year: 'Charter Year', title: 'Club Establishment', description: 'Placeholder: The club was officially chartered under the sponsorship of its parent Rotary club.' },
  { year: 'Year 2', title: 'First Signature Project', description: 'Placeholder: Launch of the club\'s first major community service initiative.' },
  { year: 'Year 3', title: 'International Twin Club', description: 'Placeholder: Establishment of the first international twin club partnership.' },
  { year: 'Year 4', title: 'District Recognition', description: 'Placeholder: Club and members received district-level awards for service excellence.' },
  { year: '2026–27', title: 'Create Lasting Impact', description: 'Placeholder: Current rotary year theme focused on sustainable, lasting community impact.' },
];

export interface FocusArea {
  title: string;
  description: string;
  icon: string;
}

export const FOCUS_AREAS: FocusArea[] = [
  { title: 'Community Service', description: 'Sustainable initiatives that uplift underserved communities across Tangail and beyond.', icon: 'HeartHandshake' },
  { title: 'Professional Development', description: 'Workshops, mentorship and skill-building that prepare young leaders for meaningful careers.', icon: 'Briefcase' },
  { title: 'International Service', description: 'Cross-border partnerships and joint projects that build global fellowship and understanding.', icon: 'Globe' },
  { title: 'Club Service', description: 'Member engagement, fellowship and the internal culture that makes our club a second home.', icon: 'Users' },
];
