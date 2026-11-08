export interface AuthorInfo {
  name: string;
  nameBn: string;
  department: string;
  departmentBn: string;
  institution: string;
  institutionBn: string;
  github: string;
  role: string;
  roleBn: string;
  photoUrl: string;
  bioEn: string;
  bioBn: string;
  specializations: { en: string; bn: string }[];
}

export const authorInfo: AuthorInfo = {
  name: 'MD. MOJAHIDUR RAHMAN SAJID',
  nameBn: 'মোঃ মোজাহিদুর রহমান সাজিদ',
  department: 'Computer Science & Technology',
  departmentBn: 'কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি',
  institution: 'Bogura Polytechnic Institute',
  institutionBn: 'বগুড়া পলিটেকনিক ইনস্টিটিউট',
  github: 'mojahid-sec',
  role: 'DEVELOPER & FOUNDER OF NETCORE',
  roleBn: 'নেটকোরের ডেভেলপার ও প্রতিষ্ঠাতা',
  photoUrl: '/assets/developer/mojahid.jpeg',
  bioEn: 'Dedicated to demystifying computer networking for learners worldwide with a strong focus on visual packet tracing, enterprise routing architecture, and bilingual educational accessibility.',
  bioBn: 'কম্পিউটার নেটওয়ার্কিংয়ের জটিল বিষয়গুলোকে ভিজ্যুয়াল প্যাকেট ট্র্যাকিং, এন্টারপ্রাইজ রাউটিং আর্কিটেকচার এবং সহজ বাংলা ব্যাখ্যার মাধ্যমে শিক্ষার্থীদের জন্য বোধগম্য করে তোলার লক্ষ্যে নিবেদিত।',
  specializations: [
    { en: 'Network Topologies & Enterprise Switching', bn: 'নেটওয়ার্ক টপোলজি ও এন্টারপ্রাইজ সুইচিং' },
    { en: 'IP Subnetting & CIDR Calculation', bn: 'আইপি সাবনেটিং ও সিআইডিআর ক্যালকুলেশন' },
    { en: 'Packet Flow & Protocol Analysis (Wireshark)', bn: 'প্যাকেট ফ্লো ও প্রোটোকল অ্যানালাইসিস' },
    { en: 'Linux Network Administration & Troubleshooting', bn: 'লিনাক্স নেটওয়ার্ক অ্যাডমিনিস্ট্রেশন ও ট্রাবলশুটিং' },
  ],
};
