import { CurriculumModule } from './types';

export const level04Module: CurriculumModule = {
  id: 'level-04-ip-subnetting',
  levelNumber: 4,
  tier: 'Elementary',
  titleEn: 'LEVEL 04 — IP Addressing and Subnetting',
  titleBn: 'লেভেল ০৪ — আইপি অ্যাড্রেসিং ও সাবনেটিং',
  descEn: 'Master IPv4 and IPv6 logical addressing, binary conversions, subnet masks, CIDR prefixes, usable host ranges, and precision VLSM network design.',
  descBn: 'আইপিভি৪ এবং আইপিভি৬ লজিক্যাল অ্যাড্রেসিং, বাইনারি রূপান্তর, সাবনেট মাস্ক, সিআইডিআর প্রিফিক্স এবং নির্ভুল ভিএলএসএম সাবনেটিং গণিতে পূর্ণ দক্ষতা।',
  estimatedHours: 18,
  iconName: 'Binary',
  prerequisites: ['level-01-fundamentals', 'level-03-models-communication'],
  relatedLabs: ['lab-subnet-calculator'],
  topics: [
    {
      id: 'binary-number-system',
      titleEn: 'The Binary Number System: Base-2 Place Values',
      titleBn: 'বাইনারি সংখ্যা পদ্ধতি: বেস-২ পজিশনাল ভ্যালু',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Interactive 8-bit octet slider: Powers of 2 (128, 64, 32, 16, 8, 4, 2, 1) toggling bits 0 and 1 with real-time decimal sum.',
        descriptionBn: '৮টি বিটের মান (১২৮, ৬৪, ৩২, ১৬, ৮, ৪, ২, ১) অন-অফ করে সাথে সাথে ডেসিমেল যোগফল দেখার ইন্টারঅ্যাকটিভ স্লাইডার।'
      },
      keyConcepts: ['Base-2 Radix', 'Place Values 2^0 to 2^7', 'Octet Structure', 'Bit Manipulation'],
      summaryEn: 'The foundational mathematical language governing all networking hardware and addressing.',
      summaryBn: 'নেটওয়ার্কিং হার্ডওয়্যার ও আইপি অ্যাড্রেসের মূল ভিত্তি বাইনারি গণিত।'
    },
    {
      id: 'decimal-binary-conversion',
      titleEn: 'Decimal and Binary Fast Mental Conversion Techniques',
      titleBn: 'ডেসিমেল এবং বাইনারি দ্রুত রূপান্তর কৌশল',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Step-by-step subtraction ladder taking numbers like 192, 168, 255 and converting them into 8-bit binary strings.',
        descriptionBn: '১৯২, ১৬৮ বা ২৫৫ এর মতো ডেসিমেল সংখ্যাকে দ্রুত ৮-বিট বাইনারিতে রূপান্তর করার কৌশল।'
      },
      keyConcepts: ['Successive Subtraction', 'Powers of 2 Checklist', 'Octet Boundaries', 'Mental Math for Subnets'],
      summaryEn: 'High-speed conversion tricks vital for subnetting exams and field engineering.',
      summaryBn: 'পরীক্ষা ও বাস্তব ফিল্ডে দ্রুত আইপি হিসাব করার জন্য প্রয়োজনীয় মানসিক গণিত কৌশল।'
    },
    {
      id: 'ipv4-addressing-structure',
      titleEn: 'IPv4 Address Architecture: 32 Bits in Dotted Decimal',
      titleBn: 'আইপিভি৪ অ্যাড্রেস আর্কিটেকচার: ৩২ বিট ও ডটেড ডেসিমেল ফরম্যাট',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: '32-bit array sliced into 4 separate octets (8 bits each) separated by dots: e.g. 192.168.1.1.',
        descriptionBn: '৩২টি বিটকে ৪টি ৮-বিট অক্টেটে ভাগ করে ডট দিয়ে সাজানোর রঙিন অ্যানিমেশন।'
      },
      keyConcepts: ['32-Bit Address Space', '4 Octets', '4.29 Billion Theoretical Limit', 'Dotted Decimal Notation'],
      summaryEn: 'Structure, layout, and capacity of standard IPv4 logical addresses.',
      summaryBn: 'স্ট্যান্ডার্ড আইপিভি৪ ঠিকানার গঠন এবং ৪.২৯ বিলিয়ন মোট ঠিকানার বিন্যাস।'
    },
    {
      id: 'network-id-host-id',
      titleEn: 'Network ID vs Host ID: Dividing the Address',
      titleBn: 'নেটওয়ার্ক আইডি বনাম হোস্ট আইডি: অ্যাড্রেসের সীমানা নির্ধারণ',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Street and House number analogy: Network ID = Street Name (shared by all neighbours), Host ID = Specific House Number.',
        descriptionBn: 'রাস্তার নাম ও বাড়ির নম্বরের তুলনা: নেটওয়ার্ক আইডি = মহল্লার নাম, হোস্ট আইডি = নির্দিষ্ট বাড়ির নম্বর।'
      },
      keyConcepts: ['Network Portion', 'Host Portion', 'Subnet Mask Role', 'Prefix Boundary'],
      summaryEn: 'How routers distinguish which part of an IP identifies the network and which identifies the specific device.',
      summaryBn: 'আইপি ঠিকানার কোন অংশ নেটওয়ার্কের নাম এবং কোন অংশ নির্দিষ্ট কম্পিউটারের তা চেনার নিয়ম।'
    },
    {
      id: 'public-vs-private-ip',
      titleEn: 'Public vs Private IP Addresses: RFC 1918 Standards',
      titleBn: 'পাবলিক বনাম প্রাইভেট আইপি অ্যাড্রেস: RFC 1918 স্ট্যান্ডার্ড',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Network diagram showing 100 private PCs (192.168.1.x) routed through a single public ISP IP via NAT onto the global Internet.',
        descriptionBn: '১০০টি প্রাইভেট কম্পিউটার কীভাবে রাউটারের একটি মাত্র পাবলিক আইপি ব্যবহার করে ন্যাট (NAT) দিয়ে ইন্টারনেটে যায়।'
      },
      keyConcepts: ['RFC 1918 Ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16)', 'NAT Translation', 'Routable vs Non-Routable', 'IPv4 Depletion Workaround'],
      summaryEn: 'Why internal LANs use private non-routable IP ranges and how they conserve global IP space.',
      summaryBn: 'কেন লোকাল নেটওয়ার্কে প্রাইভেট আইপি ব্যবহার করা হয় এবং এর মাধ্যমে কীভাবে বৈশ্বিক আইপি ঘাটতি সমাধান হয়েছে।'
    },
    {
      id: 'static-vs-dynamic-ip',
      titleEn: 'Static vs Dynamic IP Addressing (Manual vs DHCP Leasing)',
      titleBn: 'স্ট্যাটিক বনাম ডাইনামিক আইপি অ্যাড্রেসিং: ম্যানুয়াল ও ডিএইচসিপি লিজ',
      durationMinutes: 20,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Client boots up, receives temporary IP lease with expiration timer from DHCP server vs server with fixed manual static IP.',
        descriptionBn: 'ডিএইচসিপি সার্ভার থেকে ক্লায়েন্টের সাময়িক আইপি লিজ গ্রহণ বনাম সার্ভারে স্থায়ী আইপি কনফিগারেশনের চিত্র।'
      },
      keyConcepts: ['Manual Assignment', 'DHCP Lease Timers', 'DNS & Gateway Push', 'Server Static Needs'],
      summaryEn: 'Tradeoffs between permanent fixed manual IP allocation and automated DHCP leasing.',
      summaryBn: 'ম্যানুয়াল স্ট্যাটিক আইপি এবং স্বয়ংক্রিয় ডিএইচসিপি বরাদ্দের ব্যবহারের ক্ষেত্র ও সুবিধা।'
    },
    {
      id: 'special-ip-ranges',
      titleEn: 'Special IPv4 Address Ranges: Loopback, APIPA, and Multicast',
      titleBn: 'বিশেষ আইপিভি৪ রেঞ্জ: লুপব্যাক, অপিপা (APIPA) ও মাল্টিকাস্ট',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Summary table of reserved ranges: 127.0.0.1 (Loopback), 169.254.0.0/16 (APIPA), 224.0.0.0/4 (Multicast), 0.0.0.0/0 (Default Route).',
        descriptionBn: '১২৭.০.০.১ (লুপব্যাক), ১৬৯.২৫৪ (ডিএইচসিপি ফেইল হলে অপিপা) ও অন্যান্য সংরক্ষিত বিশেষ আইপির চার্ট।'
      },
      keyConcepts: ['Loopback (127.0.0.1)', 'APIPA (169.254.0.0/16)', 'Carrier-Grade NAT (100.64.0.0/10)', 'Limited Broadcast (255.255.255.255)'],
      summaryEn: 'Reserved and diagnostic IP ranges that can never be assigned to standard internet hosts.',
      summaryBn: 'বিশেষ কাজের জন্য সংরক্ষিত আইপি অ্যাড্রেস যা সাধারণ ইন্টারনেটে ব্যবহার করা যায় না।'
    },
    {
      id: 'subnet-mask-mechanics',
      titleEn: 'Subnet Mask Mechanics: Bitwise AND Logic Operation',
      titleBn: 'সাবনেট মাস্ক মেকানিজম: বিটওয়াইজ AND লজিক অপারেশন',
      durationMinutes: 30,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Bit-by-bit logical AND visual: IP 192.168.1.50 AND 255.255.255.0 = Network ID 192.168.1.0 in pure binary math.',
        descriptionBn: 'আইপি এবং সাবনেট মাস্কের প্রতিটি বিটের মাঝে AND গুণন করে কীভাবে নেটওয়ার্ক আইডি পাওয়া যায় তার বাইনারি হিসাব।'
      },
      keyConcepts: ['Contiguous 1s and 0s', 'Bitwise AND Operation', 'Network Address Extraction', 'Subnet Mask Notation'],
      summaryEn: 'How computers mathematically filter an IP address with a subnet mask to determine local network membership.',
      summaryBn: 'কম্পিউটার কীভাবে গাণিতিকভাবে বিটওয়াইজ AND অপারেশনের মাধ্যমে নিজের নেটওয়ার্ক অ্যাড্রেস শনাক্ত করে।'
    },
    {
      id: 'network-broadcast-usable-range',
      titleEn: 'Network Address, Broadcast Address & Usable Host Range',
      titleBn: 'নেটওয়ার্ক অ্যাড্রেস, ব্রডকাস্ট অ্যাড্রেস এবং ব্যবহারযোগ্য হোস্ট রেঞ্জ',
      durationMinutes: 35,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Interactive subnet breakdown: All host bits 0 = Network Address; All host bits 1 = Broadcast Address; Inside range = Usable Hosts.',
        descriptionBn: 'হোস্টের সব বিট ০ হলে নেটওয়ার্ক অ্যাড্রেস, সব বিট ১ হলে ব্রডকাস্ট এবং মাঝেরগুলো বৈধ কম্পিউটারের আইপি।'
      },
      keyConcepts: ['First Address (Network ID)', 'Last Address (Broadcast)', 'Usable Host Formula (2^H - 2)', 'Boundary Conditions'],
      summaryEn: 'The 3 essential components calculated for every single subnet without exception.',
      summaryBn: 'যেকোনো সাবনেটের প্রথম অব্যবহারযোগ্য নেটওয়ার্ক, শেষ ব্রডকাস্ট এবং মাঝের সক্রিয় হোস্ট ঠিকানার হিসাব।'
    },
    {
      id: 'classful-addressing-history',
      titleEn: 'Classful Addressing: Classes A, B, C, D, and E',
      titleBn: 'ক্লাসফুল অ্যাড্রেসিং: ক্লাস A, B, C, D এবং E',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Class pie chart: Class A (1-126, /8), Class B (128-191, /16), Class C (192-223, /24), Class D (Multicast), Class E (Experimental).',
        descriptionBn: 'ক্লাস A, B ও C এর প্রথম অক্টেটের ভ্যালু এবং ডিফল্ট সাবনেট মাস্কের রঙিন চার্ট।'
      },
      keyConcepts: ['First Octet Rule', 'Default Masks (/8, /16, /24)', 'Historical Inefficiency', 'Class Boundaries'],
      summaryEn: 'The historical system created before CIDR and why it led to massive address waste.',
      summaryBn: '১৯৯৩ সালের পূর্বের পুরোনো ক্লাসফুল ব্যবস্থা এবং কেন এতে প্রচুর আইপি অপচয় হতো।'
    },
    {
      id: 'cidr-notation',
      titleEn: 'Classless Inter-Domain Routing (CIDR): Slash Notation (/24, /27)',
      titleBn: 'ক্লাসলেস ইন্টার-ডোমেন রাউটিং (CIDR): স্ল্যাশ নোটেশন (/২৪, /২৭)',
      durationMinutes: 30,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Slider changing slash prefix from /8 down to /30, dynamically watching the network line shift across 32 bits.',
        descriptionBn: 'স্ল্যাশ /৮ থেকে /৩০ পর্যন্ত পরিবর্তন করে ৩২টি বিটের মধ্যে নেটওয়ার্ক ও হোস্ট সীমানা পরিবর্তনের চিত্র।'
      },
      keyConcepts: ['Slash Notation', 'Classless Allocation', 'Route Aggregation', 'Flexible Subnet Boundaries'],
      summaryEn: 'How CIDR revolutionized modern IP allocation and stopped global route table explosions.',
      summaryBn: 'সিআইডিআর কীভাবে নির্দিষ্ট ক্লাসের বাধ্যবাধকতা দূর করে যেকোনো সাইজের সাবনেট তৈরির স্বাধীনতা এনে দিয়েছে।'
    },
    {
      id: 'subnetting-calculation-step-by-step',
      titleEn: 'Step-by-Step Subnetting Calculation & Block Size Magic',
      titleBn: 'ধাপে ধাপে সাবনেটিং ক্যালকুলেশন ও ব্লক সাইজ নির্ণয়',
      durationMinutes: 45,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Interactive step-by-step calculation assistant: Borrowing bits, 2^B subnets, 2^H - 2 hosts, Block Size (256 - Mask Octet).',
        descriptionBn: 'ধার নেওয়া বিটের সংখ্যা, সাবনেট সংখ্যা, হোস্ট সংখ্যা এবং ব্লক সাইজ (২৫৬ - মাস্ক) বের করার ইন্টারঅ্যাকটিভ গাইড।'
      },
      keyConcepts: ['Borrowing Host Bits', 'Subnet Multipliers', 'Magic Number / Block Size', 'Subnet Tables'],
      summaryEn: 'The exact formula and shortcut methods professional network engineers use to calculate subnets instantly.',
      summaryBn: 'পেশাদার নেটওয়ার্ক ইঞ্জিনিয়াররা যেভাবে মুখে মুখে কয়েক সেকেন্ডে যেকোনো সাবনেট হিসাব করেন।'
    },
    {
      id: 'vlsm-subnet-design',
      titleEn: 'Variable Length Subnet Masking (VLSM): Zero-Waste Subnet Design',
      titleBn: 'ভেরিয়েবল লেংথ সাবনেট মাস্কিং (VLSM): অপচয়হীন নিখুঁত নেটওয়ার্ক ডিজাইন',
      durationMinutes: 45,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Hierarchical corporate tree: Subnetting a /24 block into a /26 for HQ (60 hosts), /27 for Branch (25 hosts), and /30s for WAN links.',
        descriptionBn: 'একটি বড় ব্লক থেকে হেড অফিসের জন্য /২৬, ব্রাঞ্চের জন্য /২৭ এবং রাউটার লিংকের জন্য /৩০ দিয়ে অপচয়হীন নকশা।'
      },
      keyConcepts: ['Largest-to-Smallest Ordering', 'Variable Mask Lengths', 'Point-to-Point /30 and /31 Links', 'Address Conservation'],
      summaryEn: 'Designing enterprise topologies with customized mask sizes matching exact department host counts.',
      summaryBn: 'বিভিন্ন বিভাগের প্রকৃত কম্পিউটারের সংখ্যা অনুযায়ী ভিন্ন ভিন্ন সাইজের সাবনেট তৈরি করার কৌশল।'
    },
    {
      id: 'supernetting-route-summarization',
      titleEn: 'Supernetting & Route Summarization',
      titleBn: 'সুপারনেটিং এবং রুট সামারাইজেশন',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Merging four contiguous /24 networks (192.168.0.0, 1.0, 2.0, 3.0) into a single concise /22 route in router routing tables.',
        descriptionBn: '৪টি পাশাপাশি /২৪ নেটওয়ার্ককে একত্রিত করে রাউটারে একটি মাত্র /২২ সংক্ষিপ্ত রুটে প্রকাশ করার পদ্ধতি।'
      },
      keyConcepts: ['Reverse Subnetting', 'Contiguous Block Merging', 'Routing Table Shrinking', 'Prefix Aggregation'],
      summaryEn: 'Combining contiguous network prefixes into a single smaller routing table entry.',
      summaryBn: 'রাউটারের মেমরি বাঁচাতে একাধিক ছোট নেটওয়ার্ককে একটি সংক্ষিপ্ত রুটে রূপান্তর করার পদ্ধতি।'
    },
    {
      id: 'ipv6-architecture-notation',
      titleEn: 'IPv6 Architecture: 128-Bit Hexadecimal Colon Notation',
      titleBn: 'আইপিভি৬ আর্কিটেকচার: ১২৮-বিট হেক্সাডেসিমেল কোলন নোটেশন',
      durationMinutes: 35,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: '128-bit structure: 8 hextets of 4 hexadecimal characters (e.g. 2001:0db8:85a3:0000:0000:8a2e:0370:7334) with zero compression.',
        descriptionBn: '১২৮ বিটের ৮টি হেক্সটেট এবং কোলন-কোলন (::) দিয়ে শূন্য বাদ দিয়ে সংক্ষিপ্ত লেখার নিয়ম।'
      },
      keyConcepts: ['128 Bits Space (340 Undecillion)', 'Hextet Structure', 'Zero Compression Rule (::)', 'Leading Zero Stripping'],
      summaryEn: 'The next-generation Internet Protocol architecture with an inexhaustible address pool.',
      summaryBn: 'ইন্টারনেটের পরবর্তী প্রজন্মের আইপি ব্যবস্থা যার ধারণক্ষমতা প্রায় সীমাহীন (৩৪০ ট্রিলিয়ন ট্রিলিয়ন)।'
    },
    {
      id: 'ipv6-address-types',
      titleEn: 'IPv6 Address Types: Global Unicast, Unique Local, Link-Local',
      titleBn: 'আইপিভি৬ অ্যাড্রেসের প্রকারভেদ: গ্লোবাল ইউনিকাস্ট, ইউনিক লোকাল ও লিংক-লোকাল',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'IPv6 Scope Map: 2000::/3 (Global Internet Routable), FC00::/7 (Unique Local Corporate), FE80::/10 (Link-Local Auto).',
        descriptionBn: 'গ্লোবাল ইউনিকাস্ট (২০০০::/৩), ইউনিক লোকাল এবং লিংক-লোকাল (FE80::) এর ব্যবহারের ক্ষেত্র ও স্কোপের চার্ট।'
      },
      keyConcepts: ['Global Unicast (2000::/3)', 'Link-Local (fe80::/10)', 'Unique Local (fc00::/7)', 'No Broadcast in IPv6 (Multicast Only)'],
      summaryEn: 'Scope classifications for IPv6 and why broadcasts were eliminated entirely.',
      summaryBn: 'আইপিভি৬-এ ব্রডকাস্ট সম্পূর্ণ বাদ দিয়ে কীভাবে মাল্টিকাস্ট ও লিংক-লোকাল ব্যবস্থা আনা হয়েছে।'
    },
    {
      id: 'ipv6-autoconfiguration-slaac',
      titleEn: 'IPv6 Auto-Configuration: SLAAC, EUI-64, and DHCPv6',
      titleBn: 'আইপিভি৬ অটো-কনফিগারেশন: SLAAC, EUI-64 এবং DHCPv6',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'SLAAC Router Advertisement (RA): Host hears prefix from router, converts its 48-bit MAC into 64-bit EUI-64 with FFFE, and self-assigns IP.',
        descriptionBn: 'রাউটার থেকে প্রিফিক্স নিয়ে কম্পিউটার কীভাবে নিজের ম্যাক অ্যাড্রেসকে EUI-64 দিয়ে নিজেই আইপি বানিয়ে নেয়।'
      },
      keyConcepts: ['Stateless Address Autoconfiguration (SLAAC)', 'Router Solicitation / Advertisement', 'EUI-64 MAC Splitting (FFFE Insertion)', 'DHCPv6'],
      summaryEn: 'Plug-and-play address autoconfiguration enabling devices to connect without dedicated servers.',
      summaryBn: 'কোনো ডিএইচসিপি সার্ভার ছাড়াই ডিভাইস কীভাবে নিজে থেকেই স্বয়ংক্রিয়ভাবে বৈধ আইপি বানাতে পারে।'
    },
    {
      id: 'ipv4-vs-ipv6-comparison',
      titleEn: 'IPv4 vs IPv6 Comprehensive Engineering Comparison',
      titleBn: 'আইপিভি৪ বনাম আইপিভি৬: সামগ্রিক ইঞ্জিনিয়ারিং তুলনা',
      durationMinutes: 25,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Comparison table: Header sizes (20-60B vs fixed 40B), Checksum (Removed in IPv6), Broadcast vs Multicast, NAT dependency.',
        descriptionBn: 'হেডার সাইজ, চেকসামের অনুপস্থিতি, ফিক্সড ৪০-বাইট হেডার ও ন্যাট প্রয়োজনীয়তার তুলনামূলক ছক।'
      },
      keyConcepts: ['Fixed 40-Byte Header', 'Hardware Acceleration', 'Built-in IPsec', 'Dual-Stack Transition'],
      summaryEn: 'Structural and operational differences between legacy and modern IP protocols.',
      summaryBn: 'আইপিভি৪ ও আইপিভি৬-এর মধ্যে প্রযুক্তিগত সুবিধা ও রূপান্তরের দ্বৈত-স্ট্যাক কৌশল।'
    }
  ]
};
