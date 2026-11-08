import { CurriculumModule, DifficultyTier, CurriculumTopic } from './types';
import { level01Module } from './level01_fundamentals';
import { level02Module } from './level02_devices_media';
import { level03Module } from './level03_models_communication';
import { level04Module } from './level04_ip_subnetting';
import { level05Module } from './level05_protocols_ports';
import { level06Module } from './level06_switching_vlan';
import { level07Module } from './level07_routing';
import { level08Module } from './level08_wireless';
import { level09Module } from './level09_services_architecture';
import { level10Module } from './level10_os_cli_config';
import { level11Module } from './level11_troubleshooting_monitoring';
import { level12Module } from './level12_advanced_networking';

export * from './types';
export {
  level01Module,
  level02Module,
  level03Module,
  level04Module,
  level05Module,
  level06Module,
  level07Module,
  level08Module,
  level09Module,
  level10Module,
  level11Module,
  level12Module,
};

export const ALL_CURRICULUM_MODULES: CurriculumModule[] = [
  level01Module,
  level02Module,
  level03Module,
  level04Module,
  level05Module,
  level06Module,
  level07Module,
  level08Module,
  level09Module,
  level10Module,
  level11Module,
  level12Module,
];

export interface TierGroup {
  tier: DifficultyTier;
  titleEn: string;
  titleBn: string;
  badgeEn: string;
  badgeBn: string;
  descEn: string;
  descBn: string;
  colorClass: string;
  modules: CurriculumModule[];
}

export const CURRICULUM_TIERS: TierGroup[] = [
  {
    tier: 'Beginner',
    titleEn: 'Beginner Tier: Foundations & Physical Reality',
    titleBn: 'বিগিনার টায়ার: নেটওয়ার্কের প্রাথমিক ভিত্তি ও ফিজিক্যাল মিডিয়া',
    badgeEn: 'Foundational • Levels 1-3',
    badgeBn: 'প্রাথমিক ভিত্তি • লেভেল ১-৩',
    descEn: 'Build unshakeable core mental models of networks, hardware devices, cables, and layered data encapsulation.',
    descBn: 'কম্পিউটার নেটওয়ার্ক, হার্ডওয়্যার ডিভাইস, ক্যাবল এবং ওএসআই মডেলের লেয়ারের বাস্তব ধারণা তৈরি করুন।',
    colorClass: 'emerald',
    modules: [level01Module, level02Module, level03Module],
  },
  {
    tier: 'Elementary',
    titleEn: 'Elementary Tier: Addressing & Transport Architecture',
    titleBn: 'এলিমেন্টারি টায়ার: আইপি অ্যাড্রেসিং ও ট্রান্সপোর্ট প্রোটোকল',
    badgeEn: 'Core Addressing • Levels 4-5',
    badgeBn: 'কোর অ্যাড্রেসিং • লেভেল ৪-৫',
    descEn: 'Master IPv4/IPv6 subnetting math, CIDR, VLSM, TCP/UDP sockets, 3-way handshakes, and port protocols.',
    descBn: 'আইপি সাবনেটিং গণিত, ভিএলএসএম, সিআইডিআর, টিসিপি ৩-ওয়ে হ্যান্ডশেক এবং প্রধান প্রধান নেটওয়ার্ক প্রোটোকল।',
    colorClass: 'blue',
    modules: [level04Module, level05Module],
  },
  {
    tier: 'Intermediate',
    titleEn: 'Intermediate Tier: Enterprise Switching, Routing & Infrastructure',
    titleBn: 'ইন্টারমিডিয়েট টায়ার: এন্টারপ্রাইজ সুইচিং, রাউটিং ও ওয়্যারলেস',
    badgeEn: 'Infrastructure • Levels 6-9',
    badgeBn: 'ইনফ্রাস্ট্রাকচার • লেভেল ৬-৯',
    descEn: 'VLANs, STP loop prevention, L3 routing (OSPF, RIP, BGP), Wi-Fi RF propagation, and 3-tier campus designs.',
    descBn: 'ভি-ল্যান ট্রাংকিং, এসটিপি, ওএসপিএফ ও বিজিপি রাউটিং, ওয়াই-ফাই ফ্রিকোয়েন্সি এবং সিসকো ৩-টায়ার ডিজাইন।',
    colorClass: 'purple',
    modules: [level06Module, level07Module, level08Module, level09Module],
  },
  {
    tier: 'Advanced',
    titleEn: 'Advanced Tier: Systems CLI, Forensics, Overlays & Cloud',
    titleBn: 'অ্যাডভান্সড টায়ার: সিস্টেম সিএলআই, ওয়্যারশার্ক, ওভারলে ও ক্লাউড',
    badgeEn: 'Professional • Levels 10-12',
    badgeBn: 'প্রফেশনাল • লেভেল ১০-১২',
    descEn: 'Windows/Linux/Kali command-line diagnostics, Wireshark packet capture forensics, SDN, VXLAN overlays, and Cloud VPCs.',
    descBn: 'উইন্ডোজ ও লিনাক্স সিএলআই ডায়াগনস্টিকস, ওয়্যারশার্ক প্যাকেট তদন্ত, এসডিএন, ভিএক্স-ল্যান এবং ক্লাউড ভিপিসি আর্কিটেকচার।',
    colorClass: 'amber',
    modules: [level10Module, level11Module, level12Module],
  },
];

export function getAllCurriculumModules(): CurriculumModule[] {
  return ALL_CURRICULUM_MODULES;
}

export function getCurriculumModuleById(id: string): CurriculumModule | undefined {
  return ALL_CURRICULUM_MODULES.find((m) => m.id === id);
}

export function getCurriculumModuleByLevel(level: number): CurriculumModule | undefined {
  return ALL_CURRICULUM_MODULES.find((m) => m.levelNumber === level);
}

export function getAllTopics(): Array<CurriculumTopic & { module: CurriculumModule }> {
  return ALL_CURRICULUM_MODULES.flatMap((mod) =>
    mod.topics.map((t) => ({ ...t, module: mod }))
  );
}

export function getTopicById(topicId: string): (CurriculumTopic & { module: CurriculumModule }) | undefined {
  for (const mod of ALL_CURRICULUM_MODULES) {
    const topic = mod.topics.find((t) => t.id === topicId);
    if (topic) {
      return { ...topic, module: mod };
    }
  }
  return undefined;
}

export function searchTopics(query: string): Array<CurriculumTopic & { module: CurriculumModule }> {
  const q = query.trim().toLowerCase();
  if (!q) return getAllTopics();
  return getAllTopics().filter((t) => {
    return (
      t.titleEn.toLowerCase().includes(q) ||
      t.titleBn.toLowerCase().includes(q) ||
      t.summaryEn.toLowerCase().includes(q) ||
      t.summaryBn.toLowerCase().includes(q) ||
      t.keyConcepts.some((k) => k.toLowerCase().includes(q)) ||
      t.module.titleEn.toLowerCase().includes(q) ||
      t.visualPlan.visualType.toLowerCase().includes(q)
    );
  });
}

export function getCurriculumStats() {
  const totalModules = ALL_CURRICULUM_MODULES.length;
  const allTopics = getAllTopics();
  const totalTopics = allTopics.length;
  const totalEstimatedHours = ALL_CURRICULUM_MODULES.reduce((sum, m) => sum + m.estimatedHours, 0);
  const totalVisuals = allTopics.filter((t) => t.visualPlan).length;

  return {
    totalModules,
    totalTopics,
    totalEstimatedHours,
    totalVisuals,
  };
}
