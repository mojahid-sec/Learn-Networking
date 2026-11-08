export interface NavItem {
  nameEn: string;
  nameBn: string;
  path: string;
  badge?: string;
}

export const navigationItems: NavItem[] = [
  { nameEn: 'Home', nameBn: 'হোম', path: '/' },
  { nameEn: 'Learning Roadmap', nameBn: 'লার্নিং রোডম্যাপ', path: '/roadmap' },
  { nameEn: 'Courses', nameBn: 'কোর্সসমূহ', path: '/courses' },
  { nameEn: 'Lessons', nameBn: 'লেসনসমূহ', path: '/lessons' },
  { nameEn: 'Practical Labs', nameBn: 'প্র্যাকটিক্যাল ল্যাব', path: '/labs' },
  { nameEn: 'Network Diagrams', nameBn: 'নেটওয়ার্ক ডায়াগ্রাম', path: '/diagrams' },
  { nameEn: 'Quizzes', nameBn: 'কুইজ', path: '/quizzes' },
  { nameEn: 'My Learning Progress', nameBn: 'শেখার অগ্রগতি', path: '/progress' },
  { nameEn: 'About', nameBn: 'পরিচিতি', path: '/about' },
];
