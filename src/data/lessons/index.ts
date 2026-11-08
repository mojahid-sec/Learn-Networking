import { DetailedLessonData } from '../../types/lessonTypes';
import { HANDCRAFTED_LESSONS } from './handcraftedLessons';
import { ALL_CURRICULUM_MODULES, CurriculumTopic, CurriculumModule, getTopicById } from '../curriculum';

export * from '../../types/lessonTypes';
export { HANDCRAFTED_LESSONS };

function synthesizeLessonFromTopic(topic: CurriculumTopic, mod: CurriculumModule): DetailedLessonData {
  const terms = topic.keyConcepts.map((k) => ({
    term: k,
    banglaMeaning: `পারিভাষিক শব্দ: ${k}`,
    explanationEn: `Fundamental technical networking concept governing the behavior of ${topic.titleEn}.`,
    explanationBn: `${topic.titleBn} সঠিকভাবে বোঝার জন্য প্রয়োজনীয় অত্যন্ত গুরুত্বপূর্ণ কারিগরি ধারণা।`,
  }));

  // Determine simulator hook based on topic id / keywords
  let simulator: 'router' | 'switch' | 'dns' | 'dhcp' | 'tcp' | 'subnet' | 'generic' | undefined = undefined;
  const tid = topic.id.toLowerCase();
  if (tid.includes('router') || tid.includes('routing') || tid.includes('lpm') || tid.includes('prefix-match')) {
    simulator = 'router';
  } else if (tid.includes('switch') || tid.includes('mac') || tid.includes('cam') || tid.includes('vlan')) {
    simulator = 'switch';
  } else if (tid.includes('dns') || tid.includes('domain')) {
    simulator = 'dns';
  } else if (tid.includes('dhcp') || tid.includes('dora')) {
    simulator = 'dhcp';
  } else if (tid.includes('tcp') || tid.includes('handshake') || tid.includes('transport')) {
    simulator = 'tcp';
  } else if (tid.includes('subnet') || tid.includes('cidr') || tid.includes('binary') || tid.includes('ipv4')) {
    simulator = 'subnet';
  }

  return {
    id: topic.id,
    moduleId: mod.id,
    moduleTitleEn: mod.titleEn,
    moduleTitleBn: mod.titleBn,
    levelNumber: mod.levelNumber,
    difficulty: topic.difficulty,
    durationMinutes: topic.durationMinutes,

    topicTitleEn: topic.titleEn,
    topicTitleBn: topic.titleBn,

    englishDefinition: topic.summaryEn,
    banglaMeaning: topic.summaryBn,

    englishExplanation: `${topic.summaryEn} In computer networking, ${topic.titleEn} provides the technical specifications, standard operational boundaries, and deterministic protocols that allow interconnected computing devices to communicate, negotiate, verify, and forward packets without data corruption.`,
    banglaExplanation: `${topic.summaryBn} কম্পিউটার নেটওয়ার্কিং জগতে ${topic.titleBn} এমন একটি সুনির্দিষ্ট প্রযুক্তিগত কাঠামো তৈরি করে, যার মাধ্যমে ভিন্ন ভিন্ন অপারেটিং সিস্টেম এবং ডিভাইসগুলো কোনো ধরনের ত্রুটি বা তথ্য বিকৃতি ছাড়াই একে অপরের সাথে ডেটা আদান-প্রদান করতে পারে।`,

    whyNeededEn: `Without ${topic.titleEn}, networks would suffer from communication breakdown, uncoordinated packet flooding, or inability to establish reliable end-to-end sessions across diverse hardware infrastructures.`,
    whyNeededBn: `${topic.titleBn} ছাড়া আধুনিক কম্পিউটার নেটওয়ার্কে যোগাযোগ স্থাপন অসম্ভব হতো, ডেটা হারিয়ে যেত অথবা ভিন্ন ভিন্ন ব্যান্ডের হার্ডওয়্যারের মাঝে সংযোগ বিচ্ছিন্ন হয়ে পড়ত।`,

    whereUsedEn: `Widely implemented across enterprise local area networks (LANs), wide-area network backbones (WANs), telecommunication carrier clouds, and client operating systems.`,
    whereUsedBn: `এন্টারপ্রাইজ লোকাল নেটওয়ার্ক (LAN), ইন্টারনেট সার্ভিস প্রোভাইডার (ISP), ক্লাউড ডেটা সেন্টার এবং ব্যবহারকারীদের অপারেটিং সিস্টেমে ব্যাপকভাবে ব্যবহৃত হয়।`,

    howItWorksEn: `Operational entities evaluate protocol headers, match system states against lookup tables (e.g. routing tables, CAM tables, or socket states), and execute algorithmic forwarding or transformation before transmitting data onto physical media.`,
    howItWorksBn: `সিস্টেম আগত ফ্রেম বা প্যাকেটের হেডার পরীক্ষা করে, মেমরি টেবিলের সাথে তথ্য মেলায় এবং সুনির্দিষ্ট অ্যালগরিদম অনুযায়ী ডেটা রূপান্তর বা সঠিক আউটপুট পোর্টে ফরওয়ার্ড করে।`,

    internalMechanismEn: `Step-by-step internal workflow: 1. Ingress signal capture & physical layer validation; 2. Frame/packet header parsing and integrity check; 3. State evaluation and lookup execution; 4. Payload encapsulation/mutation; 5. Egress transmission across the network link.`,
    internalMechanismBn: `অভ্যন্তরীণ কার্যপ্রণালী: ১. ইনপুট পোর্টে সিগন্যাল গ্রহণ ও এরর চেক; ২. হেডার ডিকোড ও মেমরি স্টেট যাচাই; ৩. সঠিক সিদ্ধান্ত গ্রহণ; ৪. প্রয়োজনীয় রূপান্তর সম্পন্ন করা; ৫. আউটপুট পোর্টের তার দিয়ে সফলভাবে পরবর্তী ডিভাইসে প্রেরণ।`,

    stepByStep: [
      {
        step: 1,
        titleEn: 'Signal & Header Ingress',
        titleBn: 'সিগন্যাল ও হেডার গ্রহণ',
        detailEn: `Receiving interface validates the physical signal and parses fields relevant to ${topic.titleEn}.`,
        detailBn: `রিসিভিং পোর্ট সিগন্যাল গ্রহণ করে এবং হেডারের প্রয়োজনীয় তথ্য বিশ্লেষণ করে।`
      },
      {
        step: 2,
        titleEn: 'Decision Logic & Lookup',
        titleBn: 'সিদ্ধান্ত গ্রহণ ও টেবিল সন্ধান',
        detailEn: `The protocol engine matches parameters against system tables or established state machines.`,
        detailBn: `সিস্টেম মেমরি টেবিল থেকে সেরা পথ বা প্রয়োজনীয় রেকর্ড খুঁজে বের করে।`
      },
      {
        step: 3,
        titleEn: 'Payload Processing & Mutation',
        titleBn: 'প্যাকেট প্রসেসিং ও রূপান্তর',
        detailEn: `Necessary header modifications, flags updates, or encapsulation adjustments are applied.`,
        detailBn: `প্রয়োজনীয় হেডার আপডেট, ফ্ল্যাগ পরিবর্তন বা নতুন ফ্রেমে মোড়ানোর কাজ শেষ হয়।`
      },
      {
        step: 4,
        titleEn: 'Egress Delivery & Verification',
        titleBn: 'আউটপুট ডেলিভারি ও নিশ্চিতকরণ',
        detailEn: `The verified unit is transmitted toward the next hop or passed upward to the application stack.`,
        detailBn: `নিশ্চিত হওয়া ডেটাটি পরবর্তী হপে পাঠানো হয় অথবা মূল সফটওয়্যারের কাছে হস্তান্তর করা হয়।`
      }
    ],

    realLifeExample: {
      en: `Analogy: Think of a high-speed airport baggage conveyor system. ${topic.titleEn} functions exactly like standardized barcode tags and automated optical sorters that read destination codes and route each suitcase to the correct aircraft gate.`,
      bn: `বাস্তব উদাহরণ: একটি আন্তর্জাতিক বিমানবন্দরের স্বয়ংক্রিয় লাগেজ কনভেয়ার বেল্টের মতো। ${topic.titleBn} ঠিক তেমনই ডিজিটাল বারকোড ও অপটিক্যাল সেন্সরের মতো কাজ করে, যা প্রতিটি ব্যাগের গন্তব্য পড়ে সঠিক বিমানের কার্গোতে পাঠিয়ে দেয়।`
    },

    technicalTerms: terms.length > 0 ? terms : [
      {
        term: topic.titleEn,
        banglaMeaning: topic.titleBn,
        explanationEn: topic.summaryEn,
        explanationBn: topic.summaryBn
      }
    ],

    advantages: [
      {
        en: `Standardization: Guarantees full interoperability across devices from different hardware vendors.`,
        bn: `আন্তর্জাতিক স্ট্যান্ডার্ড: ভিন্ন ভিন্ন কোম্পানির ডিভাইসগুলোর মাঝে নির্ভুল যোগাযোগের নিশ্চয়তা দেয়।`
      },
      {
        en: `Deterministic reliability: Prevents packet collisions and uncoordinated transmission errors.`,
        bn: `নির্ভরযোগ্যতা: নেটওয়ার্কে ডেটা সংঘর্ষ ও অনাকাঙ্ক্ষিত এরর প্রতিরোধ করে।`
      }
    ],

    disadvantages: [
      {
        en: `Processing overhead: Header inspection and encapsulation require hardware compute cycles and memory.`,
        bn: `প্রসেসিং ওভারহেড: প্রতিটি ফ্রেম পরীক্ষা ও প্রসেস করতে সামান্য হার্ডওয়্যার রিসোর্স ব্যয় হয়।`
      }
    ],

    comparison: [
      {
        techA: topic.titleEn,
        techB: 'Legacy Alternative',
        criteria: 'Efficiency & Speed',
        diffEn: 'Modern deterministic processing with hardware ASICs and standard RFC specifications.',
        diffBn: 'আধুনিক হার্ডওয়্যার চিপ এবং আন্তর্জাতিক স্ট্যান্ডার্ড দিয়ে উচ্চগতির নির্ভুল কার্যক্রম।'
      }
    ],

    practicalCommands: [
      {
        titleEn: `Diagnostic Verification for ${topic.titleEn}`,
        titleBn: `${topic.titleBn}-এর ব্যবহারিক সিএলআই কমান্ড ও যাচাই`,
        command: `# Verify active interfaces and network statistics\nip addr show\nnetstat -rn\nping -c 4 8.8.8.8`,
        explanationEn: `Execute standard diagnostic CLI commands to inspect link state, verify route entries, and confirm live packet flow.`,
        explanationBn: `টার্মিনালে কমান্ড চালিয়ে ইন্টারফেসের সক্রিয়তা, রুট টেবিল এবং লাইভ সংযোগ পরীক্ষা করা যায়।`,
        expectedOutput: `Interface up, MTU 1500, state UP, packets transmitted without loss.`
      }
    ],

    commonMistakes: [
      {
        mistakeEn: `Overlooking Layer 1 physical link state or incorrect subnet mask configuration.`,
        mistakeBn: `ফিজিক্যাল ক্যাবলের সংযোগ বা ভুল সাবনেট মাস্কের কারণে সৃষ্ট সমস্যা এড়িয়ে যাওয়া।`,
        correctionEn: `Always verify physical link lights and IP subnet alignment first before troubleshooting higher protocol layers.`,
        correctionBn: `উচ্চতর প্রোটোকল তদন্তের আগে সর্বদা ফিজিক্যাল ক্যাবল বাতির অবস্থা ও আইপি সাবনেট নিশ্চিত করতে হবে।`
      }
    ],

    importantNotes: [
      {
        en: `Visual Learning Blueprint: ${topic.visualPlan.visualType} — ${topic.visualPlan.descriptionEn}`,
        bn: `শিক্ষামূলক ভিজ্যুয়াল ব্লুপ্রিন্ট: ${topic.visualPlan.visualType} — ${topic.visualPlan.descriptionBn}`
      }
    ],

    knowledgeCheck: [
      {
        questionEn: `What is the primary role of ${topic.titleEn} within the network architecture?`,
        questionBn: `নেটওয়ার্ক আর্কিটেকচারে ${topic.titleBn}-এর প্রধান কাজ কী?`,
        options: [
          `To manage and coordinate deterministic networking communication`,
          `To physically power down all connected computers`,
          `To delete user files on remote servers`,
          `To bypass all networking protocols`
        ],
        correctIndex: 0,
        explanationEn: `${topic.titleEn} ensures structured, coordinated communication across network layers.`,
        explanationBn: `${topic.titleBn} নেটওয়ার্কের বিভিন্ন স্তরে ডেটা আদান-প্রদান সুশৃঙ্খল ও সমন্বিত রাখে।`
      },
      {
        questionEn: `Which factor is critical for the proper operation of ${topic.titleEn}?`,
        questionBn: `${topic.titleBn} সঠিকভাবে কাজ করার জন্য কোন বিষয়টি অত্যন্ত গুরুত্বপূর্ণ?`,
        options: [
          `Randomly changing IP configurations every minute`,
          `Correct addressing, valid protocol headers, and compliant link parameters`,
          `Disconnecting network cables during transmission`,
          `Using unsupported proprietary cable connectors`
        ],
        correctIndex: 1,
        explanationEn: `Proper operational compliance requires accurate addressing, correct headers, and aligned subnet parameters.`,
        explanationBn: `সঠিক আইপি অ্যাড্রেসিং, মানসম্মত হেডার এবং সাবনেট প্যারামিটার ঠিক থাকা অপরিহার্য।`
      }
    ],

    practiceQuestions: [
      {
        questionEn: `Engineering Practice Challenge: Explain how you would troubleshoot a host that cannot establish communication related to ${topic.titleEn}.`,
        questionBn: `ব্যবহারিক অনুশীলন প্রশ্ন: ${topic.titleBn} সংক্রান্ত কোনো কারণে কোনো কম্পিউটার নেটওয়ার্ক বিচ্ছিন্ন হলে আপনি কীভাবে সমস্যা চিহ্নিত করবেন?`,
        scenarioEn: `Follow the OSI Bottom-Up approach: 1. Confirm physical link LED; 2. Verify IP and subnet mask with 'ip addr' or 'ipconfig'; 3. Ping local default gateway; 4. Test DNS and transport port reachability.`,
        scenarioBn: `ওএসআই বটম-আপ পদ্ধতি অনুসরণ করুন: প্রথমে ক্যাবলের বাতি দেখুন; তারপর 'ip addr' দিয়ে আইপি ও সাবনেট মাস্ক পরীক্ষা করুন; এরপর ডিফল্ট গেটওয়ে পিং করুন এবং শেষে পোর্ট সক্রিয়তা যাচাই করুন।`
      }
    ],

    interactiveSimulator: simulator
  };
}

export function getDetailedLessonById(lessonId: string): DetailedLessonData {
  // 1. Check handcrafted lessons
  if (HANDCRAFTED_LESSONS[lessonId]) {
    return HANDCRAFTED_LESSONS[lessonId];
  }

  // 2. Check curriculum topics
  const topicMatch = getTopicById(lessonId);
  if (topicMatch) {
    return synthesizeLessonFromTopic(topicMatch, topicMatch.module);
  }

  // 3. Fallback to routing-fundamentals
  return HANDCRAFTED_LESSONS['routing-fundamentals'];
}

export function getAllDetailedLessons(): DetailedLessonData[] {
  return ALL_CURRICULUM_MODULES.flatMap((mod) =>
    mod.topics.map((t) => getDetailedLessonById(t.id))
  );
}
