import { CurriculumModule } from './types';

export const level06Module: CurriculumModule = {
  id: 'level-06-switching-vlan',
  levelNumber: 6,
  tier: 'Intermediate',
  titleEn: 'LEVEL 06 — Switching and VLAN',
  titleBn: 'লেভেল ০৬ — সুইচিং এবং ভার্চুয়াল ল্যান (VLAN)',
  descEn: 'Enterprise local area network switching: Layer 2 and Layer 3 switches, CAM tables, broadcast domain isolation, 802.1Q VLAN trunking, STP loop prevention, and port security.',
  descBn: 'এন্টারপ্রাইজ লোকাল নেটওয়ার্ক সুইচিং: লেয়ার ২ ও ৩ সুইচ, সিএএম টেবিল, ব্রডকাস্ট ডোমেইন বিভাজন, ৮০২.১কিউ ভি-ল্যান ট্রাংকিং, এসটিপি লুপ প্রতিরোধ এবং পোর্ট সিকিউরিটি।',
  estimatedHours: 16,
  iconName: 'Server',
  prerequisites: ['level-02-devices-media', 'level-03-models-communication'],
  relatedLabs: ['lab-switch-mac'],
  topics: [
    {
      id: 'switching-fundamentals',
      titleEn: 'Switching Fundamentals & Hardware Architecture',
      titleBn: 'সুইচিং ফান্ডামেন্টালস ও হার্ডওয়্যার আর্কিটেকচার',
      durationMinutes: 25,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Switch internal architecture: Ingress Queues -> Crossbar Switching Fabric -> Ternary CAM (TCAM) -> Egress Port Buffers.',
        descriptionBn: 'সুইচের অভ্যন্তরীণ ইনগ্রেস কিউ, ক্রসবার ফ্যাব্রিক এবং টিসিএএম মেমরির মধ্য দিয়ে দ্রুত ফ্রেম পরিবহনের চিত্র।'
      },
      keyConcepts: ['ASIC Crossbar', 'Wire-Speed Switching', 'Input/Output Queuing', 'TCAM Memory'],
      summaryEn: 'How enterprise switches achieve billions of packets-per-second switching speed.',
      summaryBn: 'কীভাবে এন্টারপ্রাইজ সুইচ হার্ডওয়্যার লেভেলে বিলিয়ন বিলিয়ন প্যাকেট অনায়াসে ফরওয়ার্ড করে।'
    },
    {
      id: 'layer-2-vs-layer-3-switching',
      titleEn: 'Layer 2 vs Layer 3 Switching (Multilayer Switches)',
      titleBn: 'লেয়ার ২ বনাম লেয়ার ৩ সুইচিং (মাল্টিলেয়ার সুইচ)',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'L2 Switch forwarding solely on MAC addresses vs L3 Switch using hardware ASICs to route between VLANs at wire speed.',
        descriptionBn: 'শুধুমাত্র ম্যাকের ভিত্তিতে কাজ করা লেয়ার ২ সুইচ বনাম হার্ডওয়্যার আইপি রাউটিং ক্ষমতাসম্পন্ন লেয়ার ৩ সুইচের তুলনা।'
      },
      keyConcepts: ['Hardware Routing Engine', 'Switched Virtual Interface (SVI)', 'Routed Ports', 'Core/Distribution Layer Role'],
      summaryEn: 'The modern merging of Layer 2 switching and Layer 3 IP routing inside high-speed silicon ASICs.',
      summaryBn: 'আধুনিক হাই-স্পিড নেটওয়ার্কে সুইচ ও রাউটারের সম্মিলিত লেয়ার ৩ সুইচিংয়ের প্রয়োজনীয়তা।'
    },
    {
      id: 'mac-learning-cam-table',
      titleEn: 'MAC Address Learning: Learn, Forward, Filter, Flood, and Age',
      titleBn: 'ম্যাক অ্যাড্রেস লার্নিং: লার্ন, ফরওয়ার্ড, ফিল্টার, ফ্লাড ও এজিং সাইকেল',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Interactive 5-step lifecycle: Inspect Source MAC (Learn) -> Check Dst MAC in table (Found? Forward: Flood) -> Ingress=Egress (Filter) -> 300s inactivity (Age out).',
        descriptionBn: 'ফ্রেম আসার পর সোর্স ম্যাক শেখা, টেবিলে থাকলে পাঠানো, না থাকলে ফ্লাড করা এবং ৩০০ সেকেন্ড পর পুরোনো রেকর্ড মোছার চক্র।'
      },
      keyConcepts: ['Learning from Source MAC', 'Forwarding by Destination MAC', 'Unknown Unicast Flooding', '300-Second Aging Timer'],
      summaryEn: 'The core algorithmic state machine executed on every single incoming Ethernet frame.',
      summaryBn: 'প্রতিটি ইথারনেট ফ্রেমে সুইচের স্বয়ংক্রিয় ৫-ধাপের লার্নিং ও ফরওয়ার্ডিং অ্যালগরিদম।'
    },
    {
      id: 'frame-forwarding-methods',
      titleEn: 'Frame Forwarding Methods: Store-and-Forward, Cut-Through, Fragment-Free',
      titleBn: 'ফ্রেম ফরওয়ার্ডিং পদ্ধতি: স্টোর-অ্যান্ড-ফরওয়ার্ড, কাট-থ্রু ও ফ্র্যাগমেন্ট-ফ্রি',
      durationMinutes: 25,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Comparison visual: Store-and-Forward waits for entire frame + checks CRC; Cut-Through forwards after first 6 bytes; Fragment-Free reads first 64 bytes.',
        descriptionBn: 'সম্পূর্ণ ফ্রেম পড়ে এরর যাচাই করা বনাম প্রথম ৬ বাইট পরেই পাঠিয়ে দেওয়া এবং প্রথম ৬৪ বাইট পড়ে কলিশন ফ্রেম আটকানোর চিত্র।'
      },
      keyConcepts: ['Latency vs Error Checking', 'Store-and-Forward Integrity', 'Cut-Through Nanosecond Latency', '64-Byte Runt Frame Filtering'],
      summaryEn: 'Architectural tradeoffs between packet inspection latency and corrupted frame propagation.',
      summaryBn: 'লেটেন্সি কমানো এবং ত্রুটিযুক্ত ফ্রেম আটকে দেওয়ার মধ্যকার কারিগরি পার্থক্য।'
    },
    {
      id: 'broadcast-vs-collision-domains',
      titleEn: 'Broadcast Domains vs Collision Domains: Definitive Breakdown',
      titleBn: 'ব্রডকাস্ট ডোমেইন বনাম কলিশন ডোমেইন: চূড়ান্ত বিশ্লেষণ',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Network diagram highlighting: Hubs extend collision domains; Switches break collision domains; Routers/VLANs break broadcast domains.',
        descriptionBn: 'হাব কলিশন বাড়ায়, সুইচ প্রতিটি পোর্টে কলিশন দূর করে এবং রাউটার অপ্রয়োজনীয় ব্রডকাস্ট আটকায় তার স্পষ্ট মানচিত্র।'
      },
      keyConcepts: ['Per-Port Collision Domain on Switches', 'Router Broadcast Isolation', 'VLAN Broadcast Boundaries', 'Network Flooding Limits'],
      summaryEn: 'The single most fundamental design boundary determining network performance and scalability.',
      summaryBn: 'নেটওয়ার্কের গতি ও কর্মক্ষমতা ধরে রাখার প্রধানতম সীমানা বিভাজন নীতি।'
    },
    {
      id: 'vlan-fundamentals',
      titleEn: 'Virtual Local Area Networks (VLAN): Logical Network Segmentation',
      titleBn: 'ভার্চুয়াল লোকাল এরিয়া নেটওয়ার্ক (VLAN): লজিক্যাল নেটওয়ার্ক বিভাজন',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'A single physical 24-port switch logically partitioned into VLAN 10 (Sales - Red) and VLAN 20 (Engineering - Blue), isolated completely.',
        descriptionBn: 'একটি মাত্র ফিজিক্যাল সুইচকে লজিক্যালি দুটি সম্পূর্ণ পৃথক নেটওয়ার্কে (সেলস ও ইঞ্জিনিয়ারিং) বিভক্ত করার চিত্র।'
      },
      keyConcepts: ['Logical Segmentation', 'Broadcast Confinement', 'Departmental Security', 'VLAN ID Range (1-4094)'],
      summaryEn: 'Splitting physical switches into multiple isolated logical broadcast domains for security and performance.',
      summaryBn: 'নিরাপত্তা ও গতি নিশ্চিত করতে একটি ফিজিক্যাল সুইচকে একাধিক স্বাধীন নেটওয়ার্কে ভাগ করা।'
    },
    {
      id: 'access-vs-trunk-ports',
      titleEn: 'Switch Port Types: Access Ports vs Trunk Ports',
      titleBn: 'সুইচ পোর্ট প্রকারভেদ: এক্সেস পোর্ট বনাম ট্রাঙ্ক পোর্ট',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Access Port passing untagged frames to PC vs Trunk Port carrying multiplexed frames with color-coded tags between two switches.',
        descriptionBn: 'এক্সেস পোর্টে সাধারণ ফ্রেম যাওয়া বনাম ট্রাঙ্ক পোর্টে একাধিক ভি-ল্যানের ট্যাগযুক্ত ফ্রেম আদান-প্রদানের অ্যানিমেশন।'
      },
      keyConcepts: ['Access Port (Single VLAN, Untagged)', 'Trunk Port (Multiple VLANs, Tagged)', 'Inter-Switch Links', 'Allowed VLAN Lists'],
      summaryEn: 'How access ports serve end devices while trunk ports carry traffic for multiple VLANs across switches.',
      summaryBn: 'কম্পিউটার সংযুক্ত এক্সেস পোর্ট এবং সুইচ-টু-সুইচ সংযোগকারী ট্রাঙ্ক পোর্টের পার্থক্য।'
    },
    {
      id: 'ieee-8021q-vlan-tagging',
      titleEn: 'IEEE 802.1Q Standard: 4-Byte VLAN Tagging Structure',
      titleBn: 'আইইইই ৮০২.১কিউ স্ট্যান্ডার্ড: ৪-বাইট ভি-ল্যান ট্যাগিং গঠন',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: '4-byte tag inserted after Source MAC: TPID (0x8100, 2B), Priority PCP (3 bits), Drop DEI (1 bit), and VLAN ID (12 bits = 4096 IDs).',
        descriptionBn: 'ইথারনেট ফ্রেমে যুক্ত হওয়া ৪-বাইট ট্যাগের ১২-বিট ভি-ল্যান আইডি এবং প্রায়োরিটি বিটের রঙিন চার্ট।'
      },
      keyConcepts: ['TPID EtherType 0x8100', '12-Bit VLAN Identifier (VID)', 'CoS 3-Bit Priority', 'Untagged Stripping at Egress Access Ports'],
      summaryEn: 'The international frame-tagging format enabling multi-VLAN trunking across multivendor switches.',
      summaryBn: 'বিভিন্ন ব্র্যান্ডের সুইচের মধ্যে একাধিক ভি-ল্যানের ডেটা সঠিকভাবে পৌঁছে দেওয়ার আন্তর্জাতিক ট্যাগিং মানদণ্ড।'
    },
    {
      id: 'native-vlan-security',
      titleEn: 'The Native VLAN: Untagged Trunk Traffic & Security Risks',
      titleBn: 'নেটিভ ভি-ল্যান: আনট্যাগড ট্রাঙ্ক ট্রাফিক ও নিরাপত্তা ঝুঁকি',
      durationMinutes: 25,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'VLAN Hopping vulnerability diagram: Double-tagging attack exploiting default Native VLAN 1, and remediation by renumbering.',
        descriptionBn: 'ডিফল্ট নেটিভ ভি-ল্যান ১ ব্যবহার করার ঝুঁকি এবং ডাবল-ট্যাগিং আক্রমণ রোধ করার কনফিগারেশন চিত্র।'
      },
      keyConcepts: ['Default VLAN 1', 'Untagged Frame Handling', 'VLAN Hopping Vulnerability', 'Remediation: Dedicated Unused Native ID'],
      summaryEn: 'How switches handle frames arriving without tags on a trunk link and how to secure against VLAN hopping attacks.',
      summaryBn: 'ট্রাঙ্ক লিংকে ট্যাগহীন ফ্রেমের আচরণ এবং ভি-ল্যান হপিং আক্রমণ প্রতিহত করার নিয়ম।'
    },
    {
      id: 'inter-vlan-routing-roas',
      titleEn: 'Inter-VLAN Routing: Router-on-a-Stick (ROAS) vs L3 Switch SVI',
      titleBn: 'ইন্টার-ভি-ল্যান রাউটিং: রাউটার-অন-এ-স্টিক বনাম লেয়ার ৩ সুইচ এসভিআই',
      durationMinutes: 40,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Router-on-a-Stick subinterfaces (g0/0.10, g0/0.20) trunk link bottleneck vs L3 Switch internal SVI hardware routing at 40 Gbps.',
        descriptionBn: 'রাউটারের একটি পোর্টের সাব-ইন্টারফেস দিয়ে ভি-ল্যান ট্রাফিক ঘোরা বনাম লেয়ার ৩ সুইচের ভেতরেই বিদ্যুৎ গতিতে রাউটিং।'
      },
      keyConcepts: ['Subinterfaces (e.g. g0/0.10)', '802.1Q Encapsulation Command', 'Router-on-a-Stick Bottleneck', 'Switched Virtual Interface (SVI)'],
      summaryEn: 'Enabling isolated VLANs to communicate securely through routing gateways.',
      summaryBn: 'ভিন্ন ভিন্ন ভি-ল্যানের কম্পিউটারের মধ্যে রাউটার বা লেয়ার ৩ সুইচের মাধ্যমে যোগাযোগ স্থাপন।'
    },
    {
      id: 'spanning-tree-protocol-stp',
      titleEn: 'Spanning Tree Protocol (STP - IEEE 802.1D): Preventing Switching Loops',
      titleBn: 'স্প্যানিং ট্রি প্রোটোকল (STP): সুইচিং লুপ ও ব্রডকাস্ট ঝড় প্রতিরোধ',
      durationMinutes: 45,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Protocol State Graph',
        descriptionEn: 'Broadcast storm animation: Redundant switch links without STP create infinite circulating loops crashing LAN; STP blocks one port to break loop.',
        descriptionBn: 'রিডান্ডেন্ট সুইচ লিংকে এসটিপি ছাড়া তৈরি হওয়া ব্রডকাস্ট ঝড়ের ধ্বংসযজ্ঞ বনাম এসটিপি একটি পোর্ট ব্লক করে লুপ বন্ধ করার অ্যানিমেশন।'
      },
      keyConcepts: ['Broadcast Storms & MAC Flapping', 'Bridge Protocol Data Units (BPDUs)', 'Root Bridge Election (Priority + MAC)', 'Root, Designated, and Blocked Ports'],
      summaryEn: 'The critical loop-prevention algorithm allowing redundant switch cabling without causing broadcast storms.',
      summaryBn: 'ব্যাকআপ ক্যাবলিং সত্ত্বেও নেটওয়ার্ক যাতে লুপে পড়ে বন্ধ না হয়ে যায় তা নিশ্চিত করার অত্যাবশ্যকীয় অ্যালগরিদম।'
    },
    {
      id: 'rapid-spanning-tree-rstp',
      titleEn: 'Rapid Spanning Tree Protocol (RSTP - IEEE 802.1w): Fast Convergence',
      titleBn: 'র‌্যাপিড স্প্যানিং ট্রি প্রোটোকল (RSTP): দ্রুত কনভার্জেন্স ও পোর্ট স্টেট',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Protocol State Graph',
        descriptionEn: 'Convergence speed race: Legacy STP takes 50 seconds (Listening -> Learning -> Forwarding); RSTP takes under 1 second with Proposal/Agreement.',
        descriptionBn: 'পুরোনো এসটিপি-র ৫০ সেকেন্ড অপেক্ষা বনাম আরএসটিপি-র মাত্র ১ সেকেন্ডের মধ্যে বিকল্প পোর্ট সক্রিয় করার তুলনা।'
      },
      keyConcepts: ['50s vs <1s Convergence', 'Proposal-Agreement Handshake', 'Port States: Discarding, Learning, Forwarding', 'Edge Ports (PortFast)'],
      summaryEn: 'Modern high-speed loop-free convergence replacing slow legacy 802.1D STP timers.',
      summaryBn: 'ক্যাবল কেটে গেলে এক সেকেন্ডেরও কম সময়ে ব্যাকআপ পোর্ট চালু করার আধুনিক স্প্যানিং ট্রি স্ট্যান্ডার্ড।'
    },
    {
      id: 'link-aggregation-lacp-etherchannel',
      titleEn: 'Link Aggregation: LACP (802.3ad) & Cisco EtherChannel',
      titleBn: 'লিংক এগ্রিগেশন: LACP ও ইথারচ্যানেল দিয়ে ব্যান্ডউইথ দ্বিগুণ করা',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Bundle animation: Four 1 Gbps physical cables bonded into a single logical 4 Gbps Port-Channel bundle without STP blocking.',
        descriptionBn: '৪টি আলাদা ১জি ক্যাবলকে একসাথে যুক্ত করে একটি ৪জি হাই-স্পিড চ্যানেল বানানোর দৃশ্য, যাতে এসটিপি পোর্ট ব্লক না করে।'
      },
      keyConcepts: ['Bandwidth Aggregation', 'Hardware Redundancy', 'LACP Negotiation (Active/Passive)', 'Hashing Load Balancing'],
      summaryEn: 'Bonding multiple physical Ethernet cables into a single logical high-bandwidth trunk pipe.',
      summaryBn: 'একাধিক ক্যাবলকে যুক্ত করে ব্যান্ডউইথ বৃদ্ধি এবং কোনো একটি ক্যাবল ছিঁড়ে গেলেও সংযোগ চালু রাখার প্রযুক্তি।'
    },
    {
      id: 'switch-port-security-fundamentals',
      titleEn: 'Switch Port Security: MAC Limiting, Sticky MAC, and Violations',
      titleBn: 'সুইচ পোর্ট সিকিউরিটি: ম্যাক লিমিট, স্টিকি ম্যাক ও ভায়োলেশন মোড',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Rogue laptop plugs into wall port: Switch compares MAC against sticky authorized MAC -> Port trips into Err-Disabled (Shutdown) mode.',
        descriptionBn: 'অননুমোদিত ল্যাপটপ প্লাগ করামাত্র সুইচের পোর্ট স্বয়ংক্রিয়ভাবে বন্ধ (Err-Disabled) হয়ে যাওয়ার অ্যানিমেশন।'
      },
      keyConcepts: ['Maximum Allowed MAC Count', 'Sticky MAC Auto-Learning', 'Violation Actions: Protect, Restrict, Shutdown', 'Err-Disabled Recovery'],
      summaryEn: 'Preventing unauthorized physical devices from plugging into enterprise wall jack ports.',
      summaryBn: 'অফিসের দেওয়ালে থাকা পোর্টে বাইরের কোনো অপরিচিত ল্যাপটপ লাগালে পোর্ট সাথে সাথে লক করে দেওয়া।'
    }
  ]
};
