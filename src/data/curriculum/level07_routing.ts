import { CurriculumModule } from './types';

export const level07Module: CurriculumModule = {
  id: 'level-07-routing',
  levelNumber: 7,
  tier: 'Intermediate',
  titleEn: 'LEVEL 07 — Routing and Inter-Network Communication',
  titleBn: 'লেভেল ০৭ — রাউটিং এবং আন্তঃনেটওয়ার্ক যোগাযোগ',
  descEn: 'Master Layer 3 packet forwarding: Routing tables, Longest Prefix Match, Static vs Dynamic routing, Distance Vector (RIP), Link State (OSPF), Path Vector (BGP), Inter-VLAN routing, and NAT/PAT.',
  descBn: 'লেয়ার ৩ প্যাকেট ফরওয়ার্ডিং: রাউটিং টেবিল, লঙ্গেস্ট প্রিফিক্স ম্যাচ, স্ট্যাটিক বনাম ডাইনামিক রাউটিং, রিস্ট্যান্স ভেক্টর (RIP), লিংক স্টেট (OSPF), পাথ ভেক্টর (BGP), ইন্টার-ভ্যান রাউটিং এবং ন্যাট/প্যাট।',
  estimatedHours: 20,
  iconName: 'GitBranch',
  prerequisites: ['level-04-ip-subnetting', 'level-06-switching-vlan'],
  relatedLabs: ['lab-subnet-calculator'],
  topics: [
    {
      id: 'routing-fundamentals',
      titleEn: 'Routing Fundamentals & The Routing Decision Process',
      titleBn: 'রাউটিং ফান্ডামেন্টালস এবং রাউটিং সিদ্ধান্ত প্রক্রিয়া',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Interactive step-by-step packet arrival at Router Ingress interface -> De-encapsulate L2 frame -> Check Destination IP in Routing Table -> Find Longest Prefix Match -> Decrement TTL -> Recalculate IP Checksum -> Re-encapsulate with Next-Hop MAC -> Transmit out Egress interface.',
        descriptionBn: 'রাউটারের ইনপুট পোর্টে প্যাকেট গ্রহণ, লেয়ার ২ ফ্রেম খোলা, রাউটিং টেবিলে গন্তব্য আইপি মেলানো, টিটিএল ১ কমানো, নতুন ম্যাক ফ্রেম তৈরি এবং আউটপুট পোর্টে পাঠানোর সচিত্র অ্যানিমেশন।'
      },
      keyConcepts: ['Layer 3 Packet Forwarding', 'TTL Decrement', 'MAC Header Rewrite', 'Directly Connected Networks'],
      summaryEn: 'How routers make hop-by-hop forwarding decisions across heterogeneous physical networks.',
      summaryBn: 'কীভাবে রাউটার প্রতিটি হপে প্যাকেট পরীক্ষা করে পরবর্তী সঠিক নেটওয়ার্কে ফরওয়ার্ড করে।'
    },
    {
      id: 'routed-vs-routing-protocols',
      titleEn: 'Routed Protocols vs Routing Protocols',
      titleBn: 'রাউটেড প্রোটোকল বনাম রাউটিং প্রোটোকল',
      durationMinutes: 20,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Visual comparison: Routed Protocols (IPv4, IPv6 - the passenger carrying user payload) vs Routing Protocols (OSPF, BGP, RIP - the navigation highway system that builds routing maps).',
        descriptionBn: 'রাউটেড প্রোটোকল (আইপিভি৪, আইপিভি৬ যা ডেটা বহন করে) এবং রাউটিং প্রোটোকল (ওএসপিএফ, বিজিপি যা রাস্তা তৈরি করে)-এর স্পষ্ট তুলনামূলক চার্ট।'
      },
      keyConcepts: ['Routed Protocol (Data Plane)', 'Routing Protocol (Control Plane)', 'Control vs Data Plane Separation'],
      summaryEn: 'Understanding the vital distinction between protocols that carry user traffic and protocols that exchange network topology.',
      summaryBn: 'ব্যবহারকারীর ডেটা বহনকারী প্রোটোকল এবং নেটওয়ার্কের পথ নির্ধারণকারী প্রোটোকলের মধ্যে পার্থক্য।'
    },
    {
      id: 'routing-table-architecture',
      titleEn: 'Routing Table Architecture & Components',
      titleBn: 'রাউটিং টেবিল আর্কিটেকচার এবং উপদানসমূহ',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Anatomy of a modern routing table: Network Destination, Subnet Mask/Prefix, Next-Hop Gateway, Outgoing Interface, Metric, Administrative Distance, and Route Code flags (C, S, O, B, D).',
        descriptionBn: 'রাউটিং টেবিলের মূল কাঠামো: গন্তব্য নেটওয়ার্ক, সাবনেট মাস্ক, নেক্সট-হপ গেটওয়ে, আউটগোয়িং ইন্টারফেস, মেট্রিক এবং অ্যাডমিনিস্ট্রেটিভ ডিসট্যান্সের বিশ্লেষণ।'
      },
      keyConcepts: ['Network Destination & Prefix', 'Next-Hop IP Address', 'Exit Interface', 'Metric Value', 'Route Codes'],
      summaryEn: 'Deep dive into how routers organize routing tables and evaluate possible paths to remote networks.',
      summaryBn: 'রাউটার কীভাবে নেটওয়ার্কের গন্তব্য ও পথসমূহ নিজস্ব মেমরি টেবিলে সংরক্ষণ ও বিশ্লেষণ করে।'
    },
    {
      id: 'longest-prefix-match',
      titleEn: 'Longest Prefix Match (LPM) Rule',
      titleBn: 'লঙ্গেস্ট প্রিফিক্স ম্যাচ (LPM) নিয়ম',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Interactive simulator matching IP 192.168.1.55 against routes: 0.0.0.0/0, 192.168.0.0/16, 192.168.1.0/24, and 192.168.1.48/28. Highlights the most specific prefix (/28) winning.',
        descriptionBn: 'একটি আইপিকে একাধিক রাউটের সাথে মিলিয়ে সবচেয়ে বড় সাবনেট মাস্ক (সর্বাধিক নির্দিষ্ট প্রিফিক্স) কীভাবে অগ্রাধিকার পায় তার ইন্টারঅ্যাক্টিভ ডেমো।'
      },
      keyConcepts: ['Prefix Specificity', 'Bitwise Comparison', 'CIDR Bit Depth', 'Tie-Breaking in Routing'],
      summaryEn: 'The universal golden rule routers execute when multiple routes overlap for the same destination IP.',
      summaryBn: 'একই গন্তব্যের জন্য একাধিক পথ থাকলে রাউটার সর্বদা সবচেয়ে নির্দিষ্ট (দীর্ঘতম প্রিফিক্স) পথটি বেছে নেয়।'
    },
    {
      id: 'default-route-gateway',
      titleEn: 'Default Route & Gateway of Last Resort (0.0.0.0/0)',
      titleBn: 'ডিফল্ট রাউট এবং গেটওয়ে অব লাস্ট রিসোর্ট (0.0.0.0/0)',
      durationMinutes: 25,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Enterprise edge router forwarding all unknown Internet-bound packets through default route 0.0.0.0 0.0.0.0 -> ISP WAN gateway.',
        descriptionBn: 'রাউটিং টেবিলে না থাকা অজানা গন্তব্যের সকল ইন্টারনেট ট্রাফিক কীভাবে 0.0.0.0/0 দিয়ে আইএসপি গেটওয়েতে পাঠানো হয়।'
      },
      keyConcepts: ['Quad-Zero (0.0.0.0/0)', 'Gateway of Last Resort', 'Stub Network Design', 'Edge Router Uplink'],
      summaryEn: 'Why default routes prevent routing tables from exploding and enable home and enterprise Internet connectivity.',
      summaryBn: 'ইন্টারনেট ট্রাফিক পরিচালনা করতে ডিফল্ট রাউটের অপরিহার্য ভূমিকা ও ব্যবহার পদ্ধতি।'
    },
    {
      id: 'static-routing-and-floating-routes',
      titleEn: 'Static Routing & Floating Static Backup Routes',
      titleBn: 'স্ট্যাটিক রাউটিং এবং ফ্লোটিং স্ট্যাটিক ব্যাকআপ রাউট',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Dual-link topology: Primary Fiber Link (AD 1) active; Secondary Cellular Backup Link configured with AD 10 (Floating Static). When primary link drops, backup immediately installs in routing table.',
        descriptionBn: 'প্রাথমিক ফাইবার সংযোগ নষ্ট হলে কীভাবে উচ্চ অ্যাডমিনিস্ট্রেটিভ ডিসট্যান্সের ফ্লোটিং ব্যাকআপ লাইন স্বয়ংক্রিয়ভাবে সচল হয়।'
      },
      keyConcepts: ['Manual Route Definition', 'Administrative Distance Manipulation', 'Floating Static Route', 'Failover Convergence'],
      summaryEn: 'How to manually configure deterministic routes and design high-availability automatic failover without dynamic protocols.',
      summaryBn: 'ম্যানুয়ালি রাউট নির্ধারণ এবং জরুরি ব্যাকআপ সংযোগ সচল রাখার কৌশল।'
    },
    {
      id: 'administrative-distance-metrics',
      titleEn: 'Administrative Distance (AD) and Routing Metrics',
      titleBn: 'অ্যাডমিনিস্ট্রেটিভ ডিসট্যান্স (AD) এবং রাউটিং মেট্রিক',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Hierarchy chart ranking trustworthiness: Connected (0), Static (1), eBGP (20), EIGRP (90), OSPF (110), RIP (120), iBGP (200), Unreachable (255). Shows metric breaking ties within the same protocol.',
        descriptionBn: 'বিভিন্ন রাউটিং প্রোটোকলের বিশ্বস্ততার স্কেল (AD) এবং একই প্রোটোকলের একাধিক পথের মধ্যে সেরা পথ বাছাইয়ের মেট্রিক।'
      },
      keyConcepts: ['Believability / Trustworthiness', 'AD Table', 'Metric Tie-Breaking', 'Multi-Protocol Redistribution'],
      summaryEn: 'How routers decide which route to trust when multiple dynamic protocols and static routes advertise the exact same network.',
      summaryBn: 'একাধিক প্রোটোকল একই নেটওয়ার্কের সন্ধান দিলে রাউটার কার কথা বিশ্বাস করবে তা নির্ধারণের নিয়ম।'
    },
    {
      id: 'dynamic-routing-igp-vs-egp',
      titleEn: 'Dynamic Routing Fundamentals: Autonomous Systems, IGP vs EGP',
      titleBn: 'ডাইনামিক রাউটিং ফান্ডামেন্টালস: অটোনোমাস সিস্টেম, আইজিপি বনাম ইজিপি',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Global Internet map showing Autonomous Systems (AS15169 Google, AS714 Apple) running Interior Gateway Protocols (OSPF/EIGRP) inside their network and Exterior Gateway Protocols (BGP) between AS boundaries.',
        descriptionBn: 'গ্লোবাল ইন্টারনেটের অটোনোমাস সিস্টেম এবং এর ভেতরে চলা আইজিপি ও বাইরে চলা ইজিপির সাংগঠনিক রূপরেখা।'
      },
      keyConcepts: ['Autonomous System Number (ASN)', 'Intra-Domain Routing (IGP)', 'Inter-Domain Routing (EGP)', 'Dynamic Route Discovery'],
      summaryEn: 'The organizational architecture of global IP routing dividing internal corporate networks from the public Internet core.',
      summaryBn: 'বিশ্বব্যাপী ইন্টারনেট যোগাযোগে নিজস্ব নেটওয়ার্ক ও সার্বজনীন নেটওয়ার্কের মধ্যে রাউটিং বিন্যাস।'
    },
    {
      id: 'distance-vector-routing-rip',
      titleEn: 'Distance Vector Routing & RIP (Routing Information Protocol)',
      titleBn: 'ডিসট্যান্স ভেক্টর রাউটিং এবং আরআইপি (RIP)',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Routers passing full periodic routing tables every 30s ("routing by rumor"). Demonstrates count-to-infinity problem and solutions: Split Horizon, Route Poisoning, and 15-hop limit.',
        descriptionBn: 'আরআইপিতে প্রতি ৩০ সেকেন্ড পর পর হপ কাউন্টের ভিত্তিতে তথ্য আদান-প্রদান এবং লুপ প্রতিরোধে স্প্লিট হরাইজন ও রুট পয়জনিংয়ের কার্যপদ্ধতি।'
      },
      keyConcepts: ['Bellman-Ford Algorithm', 'Hop Count Metric (Max 15)', 'Split Horizon', 'Poison Reverse', 'Routing by Rumor'],
      summaryEn: 'The classic distance vector algorithm, hop count limitations, and loop prevention mechanisms.',
      summaryBn: 'দূরত্ব ও দিকের ভিত্তিতে তথ্য আদান-প্রদানকারী প্রোটোকলের সুবিধা, অসুবিধা ও লুপ সমস্যা সমাধান।'
    },
    {
      id: 'link-state-routing-ospf',
      titleEn: 'Link State Routing & OSPF (Open Shortest Path First)',
      titleBn: 'লিংক স্টেট রাউটিং এবং ওএসপিএফ (OSPF)',
      durationMinutes: 40,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Protocol State Graph',
        descriptionEn: 'OSPF neighbor state machine: Down -> Init -> 2-Way -> ExStart -> Exchange -> Loading -> Full. Shows Dijkstra Shortest Path First (SPF) tree calculation where Cost = 100,000,000 / Bandwidth in bps.',
        descriptionBn: 'ওএসপিএফ নেইবারশিপ গড়ে ওঠার ৭টি ধাপ এবং ডাইকস্ট্রা অ্যালগরিদম দিয়ে ব্য্যান্ডউইথের ভিত্তিতে সর্বনিম্ন খরচের সেরা পথ বের করার প্রক্রিয়া।'
      },
      keyConcepts: ['Link-State Advertisements (LSA)', 'Dijkstra SPF Algorithm', 'OSPF Areas (Backbone Area 0)', 'Cost Metric = Reference BW / Interface BW', 'DR and BDR Election'],
      summaryEn: 'The industry-standard open interior gateway protocol powering modern enterprise campus and data center networks.',
      summaryBn: 'এন্টারপ্রাইজ নেটওয়ার্কে ব্যবহৃত শক্তিশালী লিংক-স্টেট প্রোটোকল ওএসপিএফ-এর কার্যপদ্ধতি।'
    },
    {
      id: 'eigrp-fundamentals',
      titleEn: 'EIGRP Fundamentals & Diffusing Update Algorithm (DUAL)',
      titleBn: 'ইআইজিআরপি ফান্ডামেন্টালস এবং ডুয়াল (DUAL) অ্যালগরিদম',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'DUAL finite state machine: Successor (best path) vs Feasible Successor (instant loop-free backup path). Feasibility Condition: Reported Distance (RD) < Feasible Distance (FD).',
        descriptionBn: 'ইআইজিআরপিতে ডুয়াল অ্যালগরিদমের মাধ্যমে কীভাবে মুহূর্তের মধ্যে কোনো লুপ ছাড়া ব্যাকআপ পথ (ফিজিবল সাকসেসর) সচল হয়।'
      },
      keyConcepts: ['Diffusing Update Algorithm (DUAL)', 'Successor & Feasible Successor', 'Composite Metric (Bandwidth + Delay)', 'Sub-Second Convergence'],
      summaryEn: 'Cisco advanced distance-vector routing technology featuring instantaneous sub-second convergence.',
      summaryBn: 'বিদ্যুৎগতির কনভার্জেন্স সুবিধাযুক্ত অ্যাডভান্সড ডিস্ট্যান্স ভেক্টর প্রোটোকল ইআইজিআরপি।'
    },
    {
      id: 'bgp-fundamentals',
      titleEn: 'BGP Fundamentals: The Protocol That Makes the Internet Work',
      titleBn: 'বিজিপি ফান্ডামেন্টালস: যে প্রোটোকল দিয়ে ইন্টারনেট চলে',
      durationMinutes: 40,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Autonomous Systems exchanging path vectors over TCP port 179. Visualizing AS-PATH attribute: [AS 13335 (Cloudflare) -> AS 174 (Cogent) -> AS 15169 (Google)]. Shows loop prevention (reject if own ASN in path).',
        descriptionBn: 'বিশ্বের বিভিন্ন আইএসপির মধ্যে টিসিপি ১৭৯ পোর্টে বিজিপি রাউট আদান-প্রদান এবং কীভাবে এএস-পাথ অ্যাট্রিবিউট ব্যবহার করে লুপ ঠেকানো হয়।'
      },
      keyConcepts: ['Path Vector Protocol', 'TCP Port 179 Peering', 'AS-PATH Attribute', 'eBGP vs iBGP', 'Internet Routing Scalability'],
      summaryEn: 'How the Border Gateway Protocol connects thousands of disparate ISPs and cloud providers into a singular global Internet.',
      summaryBn: 'পুরো ইন্টারনেটের মেরুদণ্ড হিসেবে বিভিন্ন দেশের টেলিকম ও ক্লাউড প্রোভাইডারকে যুক্তকারী বিজিপি প্রোটোকল।'
    },
    {
      id: 'inter-vlan-routing',
      titleEn: 'Inter-VLAN Routing: Router-on-a-Stick vs Layer 3 SVI',
      titleBn: 'ইন্টার-ভ্যান রাউটিং: রাউটার-অন-এ-স্টিক বনাম লেয়ার ৩ এসভিআই',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Side-by-side comparison: Router-on-a-Stick (single physical trunk cable, 802.1Q subinterfaces g0/0.10, g0/0.20) vs Layer 3 Multilayer Switch routing internally via Switched Virtual Interfaces (interface vlan 10, interface vlan 20) at multi-gigabit hardware line rate.',
        descriptionBn: 'একক ট্রাংক ক্যাবলে সাব-ইন্টারফেস দিয়ে রাউটিং (রাউটার-অন-এ-স্টিক) এবং লেয়ার ৩ সুইচের ইন্টারনাল এসভিআই দিয়ে দ্রুতগতির রাউটিংয়ের তুলনা।'
      },
      keyConcepts: ['802.1Q Subinterfaces', 'Encapsulation Dot1Q', 'Router-on-a-Stick Bottleneck', 'Switched Virtual Interface (SVI)', 'Wire-Speed Inter-VLAN Forwarding'],
      summaryEn: 'Enabling isolated VLANs to communicate securely and efficiently through Layer 3 routers and multilayer switches.',
      summaryBn: 'ভিন্ন ভিন্ন ভি-ল্যানের ডিভাইসগুলোর মাঝে নিরাপদে তথ্য চালাচালি করার দুটি প্রধান পদ্ধতি।'
    },
    {
      id: 'nat-and-pat',
      titleEn: 'NAT & PAT: Network Address Translation and Port Translation',
      titleBn: 'ন্যাট এবং প্যাট: নেটওয়ার্ক অ্যাড্রেস ও পোর্ট ট্রান্সলেশন',
      durationMinutes: 40,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Inside Host 192.168.1.100:54321 connects to Public Web Server 93.184.216.34:80. NAT Gateway rewrites packet to Public IP 203.0.113.5:40001, logs translation in NAT table, and performs reverse translation when reply returns.',
        descriptionBn: 'লোকাল প্রাইভেট আইপি ও পোর্ট কীভাবে রাউটারে পাবলিক আইপি ও ইউনিক পোর্টে রূপান্তরিত হয়ে ইন্টারনেটে যায় এবং ফেরত আসে।'
      },
      keyConcepts: ['Inside Local vs Inside Global', 'Outside Global vs Outside Local', 'PAT / NAT Overload', 'NAT State Translation Table', 'IPv4 Address Conservation'],
      summaryEn: 'The critical networking technology allowing millions of private computers to share a single public IPv4 address.',
      summaryBn: 'একটিমাত্র পাবলিক আইপি দিয়ে শত শত কম্পিউটারে ইন্টারনেট ব্যবহারের সুযোগ সৃষ্টিকারী প্রযুক্তি।'
    },
    {
      id: 'routing-troubleshooting',
      titleEn: 'Routing Troubleshooting: Loops, Black Holes, and Suboptimal Paths',
      titleBn: 'রাউটিং ট্রাবলশুটিং: লুপ, ব্ল্যাক হোল এবং সাবঅপটিমাল পাথ',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Troubleshooting interactive canvas showing three fatal routing conditions: 1. Routing Loop bouncing packets until TTL expires; 2. Black Hole dropping packets due to missing return route; 3. Asymmetric/Suboptimal routing sending traffic across high-latency links.',
        descriptionBn: 'রাউটিং লুপে প্যাকেট আটকে থাকা, রিটার্ন রুট না থাকায় ব্ল্যাক হোলে প্যাকেট ড্রপ হওয়া এবং ভুল পথে ট্রাফিক যাওয়ার কারণ ও সমাধান।'
      },
      keyConcepts: ['TTL Expired in Transit', 'Missing Return Route (Asymmetric Path)', 'Route Flapping', 'Prefix Discrepancy', 'Traceroute Anomaly Diagnosis'],
      summaryEn: 'Systematic diagnosis and remediation of the most common and disruptive routing configuration anomalies.',
      summaryBn: 'বাস্তব নেটওয়ার্কে রাউটিং সংক্রান্ত জটিল সমস্যা চিহ্নিতকরণ ও সমাধানের পদ্ধতি।'
    }
  ]
};
