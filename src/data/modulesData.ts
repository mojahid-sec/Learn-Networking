import { ALL_CURRICULUM_MODULES, CurriculumModule, CurriculumTopic } from './curriculum';

export interface TechnicalTerm {
  term: string;
  banglaMeaning: string;
  explanationEn: string;
  explanationBn: string;
}

export interface LessonContent {
  id: string;
  moduleId: string;
  topicNameEn: string;
  topicNameBn: string;
  durationMinutes: number;
  level: 'Beginner' | 'Elementary' | 'Intermediate' | 'Advanced';
  visualType?: string;
  visualPlanEn?: string;
  visualPlanBn?: string;
  definitionEn: string;
  meaningBn: string;
  detailedExplanationEn: string;
  detailedExplanationBn: string;
  terms: TechnicalTerm[];
  realLifeExample: {
    en: string;
    bn: string;
  };
  howItWorks: {
    en: string;
    bn: string;
  };
  stepByStepProcess: {
    step: number;
    titleEn: string;
    titleBn: string;
    descEn: string;
    descBn: string;
  }[];
  practicalExamples: {
    titleEn: string;
    titleBn: string;
    snippet?: string;
    explanationEn: string;
    explanationBn: string;
  }[];
}

export interface ModuleData {
  id: string;
  order: number;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  level: 'Beginner' | 'Elementary' | 'Intermediate' | 'Advanced';
  lessonsCount: number;
  labsCount: number;
  durationHours: number;
  iconName: string;
  topicsCovered: string[];
  lessons: LessonContent[];
}

function topicToLesson(topic: CurriculumTopic, mod: CurriculumModule): LessonContent {
  const terms: TechnicalTerm[] = topic.keyConcepts.map((kc) => ({
    term: kc,
    banglaMeaning: `নেটওয়ার্কিং পরিভাষা: ${kc}`,
    explanationEn: `Core technical concept essential for understanding ${topic.titleEn}.`,
    explanationBn: `${topic.titleBn} গভীরভাবে উপলব্ধি করার জন্য প্রয়োজনীয় গুরুত্বপূর্ণ মূল ধারণা।`,
  }));

  return {
    id: topic.id,
    moduleId: mod.id,
    topicNameEn: topic.titleEn,
    topicNameBn: topic.titleBn,
    durationMinutes: topic.durationMinutes,
    level: topic.difficulty,
    visualType: topic.visualPlan?.visualType,
    visualPlanEn: topic.visualPlan?.descriptionEn,
    visualPlanBn: topic.visualPlan?.descriptionBn,
    definitionEn: topic.summaryEn,
    meaningBn: topic.summaryBn,
    detailedExplanationEn: `${topic.summaryEn} In computer networking, ${topic.titleEn} defines how devices coordinate, address, encapsulate, and forward packets deterministically. Understanding this topic is critical for designing scalable, loop-free, and fault-tolerant networks.`,
    detailedExplanationBn: `${topic.summaryBn} কম্পিউটার নেটওয়ার্কিংয়ে ${topic.titleBn} ডিভাইসগুলোর সুশৃঙ্খল সংযোগ, সঠিক প্যাকেট প্রেরণের নিয়মাবলি এবং রুট নির্বাচনের নির্দেশিকা তৈরি করে। এই ধারণা এন্টারপ্রাইজ নেটওয়ার্কের ত্রুটিমুক্ত ডিজাইন ও পরিচালনার জন্য অপরিহার্য।`,
    terms: terms.length > 0 ? terms : [
      {
        term: topic.titleEn,
        banglaMeaning: topic.titleBn,
        explanationEn: topic.summaryEn,
        explanationBn: topic.summaryBn,
      }
    ],
    realLifeExample: {
      en: `Imagine postal sorting centers handling millions of international mail envelopes: ${topic.titleEn} acts just like standardized address labels and automated routing conveyors that ensure each parcel reaches its intended destination without getting lost.`,
      bn: `আন্তর্জাতিক ডাকবিভাগের স্বয়ংক্রিয় চিঠি বাছাই কেন্দ্রের কথা ভাবুন: ${topic.titleBn} ঠিক তেমনই সঠিক ঠিকানা ও স্বয়ংক্রিয় রুট কনভেয়ারের মতো কাজ করে যাতে প্রতিটি প্যাকেট কোনো ক্ষতি ছাড়া নির্দিষ্ট গন্তব্যে পৌঁছায়।`,
    },
    howItWorks: {
      en: `Data passes through the protocol stack where headers are evaluated. Hardware ASICs or software engines process ${topic.titleEn} parameters, execute lookup algorithms, and forward packets out the appropriate interface with minimal delay.`,
      bn: `ডেটা প্রোটোকল স্ট্যাকের মধ্য দিয়ে যাওয়ার সময় হেডারসমূহ যাচাই করা হয়। হার্ডওয়্যার এসিক (ASIC) বা সফটওয়্যার অ্যালগরিদম ${topic.titleBn}-এর নিয়ম মেনে দ্রুততম সময়ে সঠিক ইন্টারফেসে প্যাকেট পাঠিয়ে দেয়।`,
    },
    stepByStepProcess: [
      {
        step: 1,
        titleEn: 'Signal / Frame Ingress',
        titleBn: 'সিগন্যাল বা ফ্রেম গ্রহণ',
        descEn: 'The receiving interface captures the physical signal, verifies electrical/optical validity, and checks integrity.',
        descBn: 'রিসিভিং ইন্টারফেস ফিজিক্যাল সিগন্যাল গ্রহণ করে তার শুদ্ধতা ও কোনো এরর আছে কি না তা যাচাই করে।',
      },
      {
        step: 2,
        titleEn: 'Header Inspection & Decoding',
        titleBn: 'হেডার পরীক্ষা ও ডিকোড',
        descEn: `The protocol engine parses fields relevant to ${topic.titleEn} and matches them against system state or lookup tables.`,
        descBn: `সিস্টেম হেডার তথ্য বিশ্লেষণ করে এবং মেমরি বা স্টেট টেবিলের সাথে তথ্য মিলিয়ে সিদ্ধান্ত নেয়।`,
      },
      {
        step: 3,
        titleEn: 'Forwarding / Transformation',
        titleBn: 'ফরওয়ার্ডিং ও রূপান্তর',
        descEn: 'The device executes required transformations (such as TTL decrement, MAC rewrite, or route lookup).',
        descBn: 'প্রয়োজনীয় প্রক্রিয়া যেমন টিটিএল মান পরিবর্তন, ম্যাক অ্যাড্রেস রূপান্তর বা রুট সন্ধান সম্পন্ন হয়।',
      },
      {
        step: 4,
        titleEn: 'Egress Delivery & Verification',
        titleBn: 'আউটপুট ডেলিভারি ও নিশ্চিতকরণ',
        descEn: 'The verified packet or segment is transmitted toward the next hop or passed upward to the application layer.',
        descBn: 'নিশ্চিত হওয়া প্যাকেটটি পরবর্তী হপ রাউটার বা মূল সফটওয়্যার অ্যাপ্লিকেশনের কাছে সফলভাবে হস্তান্তর করা হয়।',
      },
    ],
    practicalExamples: [
      {
        titleEn: `Hands-on Verification for ${topic.titleEn}`,
        titleBn: `${topic.titleBn}-এর ব্যবহারিক সিএলআই কমান্ড ও যাচাই`,
        snippet: `# Diagnostics and interface validation\nip addr show\nping -c 4 8.8.8.8\nnetstat -rn`,
        explanationEn: `Use standard operating system CLI utilities to inspect interfaces, confirm routing paths, and verify live connectivity.`,
        explanationBn: `স্ট্যান্ডার্ড কমান্ড লাইন টুলের মাধ্যমে ইন্টারফেসের অবস্থা, রাউটিং টেবিল এবং লাইভ সংযোগ পরীক্ষা করা যায়।`,
      },
    ],
  };
}

export const modulesData: ModuleData[] = ALL_CURRICULUM_MODULES.map((mod) => {
  return {
    id: mod.id,
    order: mod.levelNumber,
    titleEn: mod.titleEn,
    titleBn: mod.titleBn,
    descEn: mod.descEn,
    descBn: mod.descBn,
    level: mod.tier,
    lessonsCount: mod.topics.length,
    labsCount: mod.relatedLabs.length > 0 ? mod.relatedLabs.length : (mod.levelNumber % 2 === 0 ? 2 : 1),
    durationHours: mod.estimatedHours,
    iconName: mod.iconName,
    topicsCovered: mod.topics.map((t) => t.titleEn),
    lessons: mod.topics.map((topic) => topicToLesson(topic, mod)),
  };
});
