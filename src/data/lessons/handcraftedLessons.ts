import { DetailedLessonData } from '../../types/lessonTypes';

export const HANDCRAFTED_LESSONS: Record<string, DetailedLessonData> = {
  'routing-fundamentals': {
    id: 'routing-fundamentals',
    moduleId: 'level-07-routing',
    moduleTitleEn: 'LEVEL 07 — Routing and Inter-Network Communication',
    moduleTitleBn: 'লেভেল ০৭ — রাউটিং এবং আন্তঃনেটওয়ার্ক যোগাযোগ',
    levelNumber: 7,
    difficulty: 'Intermediate',
    durationMinutes: 35,
    topicTitleEn: 'How Routers Actually Forward Packets: The Complete Layer 3 Engine',
    topicTitleBn: 'রাউটার কীভাবে প্রকৃতপক্ষে প্যাকেট ফরওয়ার্ড করে: লেয়ার ৩ ইঞ্জিন',
    englishDefinition: 'A router is an intelligent Layer 3 networking device that joins distinct broadcast domains, maintains a Forwarding Information Base (FIB), decrements TTL, rewrites Layer 2 MAC headers, and switches packets hop-by-hop toward their final destination.',
    banglaMeaning: 'রাউটার হলো এমন একটি বুদ্ধিমান লেয়ার ৩ নেটওয়ার্কিং ডিভাইস, যা ভিন্ন ভিন্ন ব্রডকাস্ট ডোমেইনকে যুক্ত করে, নিজস্ব রাউটিং টেবিল দেখে সেরা পথ নির্ধারণ করে, প্রতি হপে ম্যাক অ্যাড্রেস রূপান্তর করে এবং প্যাকেটকে গন্তব্যের দিকে এগিয়ে দেয়।',
    englishExplanation: 'Routing operates at the core of the global Internet. When an application transmits a packet, the local host determines whether the destination is inside its local subnet. If remote, the host encapsulates the packet inside an Ethernet frame with the Destination MAC address of the default gateway router. Upon arrival, the router de-encapsulates the frame, examines the 32-bit destination IP against its routing table using Longest Prefix Match (LPM), decrements the IP Time-To-Live (TTL) field by 1, recalculates the IP checksum, resolves the next-hop router or destination MAC address via ARP, encapsulates a brand new Layer 2 frame, and pushes electrical or optical bits out the egress interface.',
    banglaExplanation: 'রাউটিং হলো গোটা ইন্টারনেটের প্রধান ভিত্তি। যখন কোনো কম্পিউটার ডেটা পাঠায়, সে প্রথমে নিজের সাবনেট মাস্ক দিয়ে পরীক্ষা করে গন্তব্যটি লোকাল নেটওয়ার্কে আছে নাকি দূরের নেটওয়ার্কে। যদি দূরের নেটওয়ার্কে হয়, তবে কম্পিউটারটি প্যাকেটটিকে নিজের লোকাল ডিফল্ট গেটওয়ে রাউটারের ম্যাক অ্যাড্রেসে ফ্রেমবন্দি করে পাঠায়। রাউটার ফ্রেমটি পাওয়ার পর তার বাইরের লেয়ার ২ খোলসটি খুলে ফেলে এবং ভেতরের আইপি ঠিকানাকে নিজের রাউটিং টেবিলের সাথে মেলায় (লঙ্গেস্ট প্রিফিক্স ম্যাচ)। এরপর লুপে আটকে থাকা ঠেকাতে টিটিএল (TTL) মান ১ কমায়, নতুন চেকসাম হিসাব করে এবং এআরপি (ARP) টেবিল থেকে পরবর্তী হপের ম্যাক অ্যাড্রেস নিয়ে একদম নতুন একটি লেয়ার ২ ফ্রেমে প্যাকেটটিকে মুড়ে পরবর্তী তারে পাঠিয়ে দেয়।',
    whyNeededEn: 'Without routers, all computers in the entire world would have to be connected into one colossal, flat Layer 2 Ethernet network. Broadcast storms would saturate all available bandwidth within milliseconds, MAC address tables would overflow, and no private segmentation would be possible.',
    whyNeededBn: 'রাউটার না থাকলে গোটা বিশ্বের সমস্ত কম্পিউটারকে একটিমাত্র বিশালাকার ফ্ল্যাট সুইচ নেটওয়ার্কে যুক্ত করতে হতো। কয়েক মিলি-সেকেন্ডের মধ্যে ব্রডকাস্ট ঝড়ে পুরো ইন্টারনেট ক্র্যাশ করত, সুইচের ম্যাক মেমরি উপচে পড়ত এবং কোনো প্রাইভেট নেটওয়ার্ক বা নিরাপত্তা বজায় রাখা সম্ভব হতো না।',
    whereUsedEn: 'At the perimeter of every home and enterprise network, connecting private LANs to Internet Service Providers (ISPs), inside cloud data centers (AWS Direct Connect, Google Cloud Interconnect), and across the global telecom fiber backbone.',
    whereUsedBn: 'প্রতিটি বাড়ি ও অফিসের পেরিমিটারে লোকাল নেটওয়ার্ককে ইন্টারনেটের সাথে যুক্ত করতে, বড় বড় ক্লাউড ডেটা সেন্টারে এবং বিশ্বব্যাপী টেলিকম ফাইবার ব্যাকবোনে রাউটার ব্যবহৃত হয়।',
    howItWorksEn: 'Routers maintain two architectural planes: the Control Plane (which runs protocols like OSPF and BGP to construct routing tables) and the Data Plane (hardware ASICs that examine incoming packets, match FIB prefixes, and forward packets at wire speeds of millions of packets per second).',
    howItWorksBn: 'রাউটার মূলত দুটি স্তরে কাজ করে: কন্ট্রোল প্লেন (যা ওএসপিএফ বা বিজিপির মতো প্রোটোকল চালিয়ে সেরা পথের ম্যাপ তৈরি করে) এবং ডেটা প্লেন (উচ্চগতির হার্ডওয়্যার চিপ যা আগত প্যাকেট দেখে সেকেন্ডে কোটি কোটি প্যাকেট সঠিক আউটপুট পোর্টে ছুড়ে দেয়)।',
    internalMechanismEn: 'When an IPv4 packet arrives: 1. Layer 2 Frame Check Sequence (FCS) validated; 2. Destination MAC verified against router interface; 3. Layer 2 header stripped; 4. IP Version, Header Length, and Checksum validated; 5. TTL checked (if TTL <= 1, packet dropped and ICMP Type 11 Time Exceeded generated); 6. Destination IP matched in FIB tree; 7. TTL decremented and Checksum updated; 8. ARP table queried for next-hop Layer 2 MAC; 9. New L2 header prepended with updated FCS; 10. Frame transmitted on egress physical port buffer.',
    internalMechanismBn: 'প্যাকেট ঢোকার পর অভ্যন্তরীণ সিকোয়েন্স: ১. ফ্রেম চেক সিকোয়েন্স (FCS) দিয়ে এরর পরীক্ষা; ২. রাউটার নিজের ম্যাক কি না নিশ্চিত হয়ে লেয়ার ২ ফ্রেমটি খুলে ফেলা; ৩. আইপি হেডার পরীক্ষা; ৪. টিটিএল চেক করা (১ বা ০ হলে ড্রপ করে আইসিএমপি টাইম এক্সিডেড পাঠানো); ৫. সবচেয়ে নির্দিষ্ট প্রিফিক্স বের করা; ৬. টিটিএল ১ কমানো ও নতুন চেকসাম গণনা; ৭. পরবর্তী হপের ম্যাক নেওয়া; ৮. নতুন লেয়ার ২ ফ্রেমে আবদ্ধ করে আউটপুট তারে পাঠানো।',
    stepByStep: [
      {
        step: 1,
        titleEn: 'Host Subnet Check & Default Gateway Resolution',
        titleBn: 'সাবনেট যাচাই ও ডিফল্ট গেটওয়ে নির্বাচন',
        detailEn: 'Host ANDs destination IP with its subnet mask. Seeing a remote network, it queries local ARP cache for the default gateway MAC.',
        detailBn: 'কম্পিউটার নিজের সাবনেট মাস্ক মিলিয়ে নিশ্চিত হয় যে গন্তব্য বাইরে অবস্থিত, তাই গেটওয়ের ম্যাকে ফ্রেম পাঠায়।'
      },
      {
        step: 2,
        titleEn: 'Ingress & Frame Strip',
        titleBn: 'ইনপুট গ্রহণ ও ফ্রেম খোলা',
        detailEn: 'Router port receives bits, checks FCS, strips Ethernet header, and hands payload to Layer 3 processor.',
        detailBn: 'রাউটার পোর্ট সিগন্যাল গ্রহণ করে, এরর পরীক্ষা করে লেয়ার ২ হেডার খুলে ফেলে।'
      },
      {
        step: 3,
        titleEn: 'Longest Prefix Match (LPM) Lookup',
        titleBn: 'লঙ্গেস্ট প্রিফিক্স ম্যাচ রুট সন্ধান',
        detailEn: 'Routing table evaluates overlapping routes (e.g. 0.0.0.0/0, 10.0.0.0/8, 10.1.2.0/24). The longest prefix (/24) wins.',
        detailBn: 'একাধিক রুটের মধ্যে সবচেয়ে নির্দিষ্ট প্রিফিক্সযুক্ত সেরা পথটি বেছে নেওয়া হয়।'
      },
      {
        step: 4,
        titleEn: 'TTL Decrement & Integrity Update',
        titleBn: 'টিটিএল ১ কমানো ও চেকসাম নবায়ন',
        detailEn: 'TTL is reduced by 1. Since IPv4 header changed, the 16-bit header checksum is recalculated.',
        detailBn: 'লুপ প্রতিরোধে টিটিএল ১ কমানো হয় এবং পরিবর্তিত হেডারের নতুন চেকসাম তৈরি হয়।'
      },
      {
        step: 5,
        titleEn: 'Layer 2 Header Rewrite (MAC Address Mutation)',
        titleBn: 'নতুন ম্যাক অ্যাড্রেস ফ্রেম তৈরি',
        detailEn: 'IP remains unchanged! Router sets Source MAC = Egress Interface, Destination MAC = Next-Hop Router or Target Host.',
        detailBn: 'আইপি অপরিবর্তিত থাকে! কিন্তু সোর্স ম্যাক হয় রাউটারের আউটপুট পোর্ট এবং ডেস্টিনেশন ম্যাক হয় পরবর্তী ডিভাইসের ম্যাক।'
      },
      {
        step: 6,
        titleEn: 'Egress Physical Transmission',
        titleBn: 'আউটপুট তারে প্রেরণ',
        detailEn: 'Frame is placed on physical media queue and transmitted at wire rate.',
        detailBn: 'ফ্রেমটি আউটপুট ইন্টারফেসের কিউতে জমা হয় এবং বৈদ্যুতিক বা আলোক তরঙ্গে প্রেরিত হয়।'
      }
    ],
    realLifeExample: {
      en: 'Think of an international postal system: An envelope has a Sender Address (Source IP) and Receiver Address (Destination IP). These postal addresses NEVER change. But as the parcel travels from local courier (truck 1) to air freight (plane) to delivery van (truck 2), the carrying vehicles (MAC addresses) change at every single sorting hub (Router).',
      bn: 'একটি আন্তর্জাতিক ডাক ব্যবস্থার কথা ভাবুন: চিঠির খামের ওপর প্রেরকের ঠিকানা (Source IP) এবং প্রাপকের ঠিকানা (Destination IP) কখনোই পরিবর্তন হয় না। কিন্তু চিঠিটি বহনকারী যানবাহন (MAC Address)—প্রথমে ডাকপিয়নের সাইকেল, তারপর বিমান, সবশেষে ডেলিভারি ভ্যান—প্রতিটি বাছাই কেন্দ্রে (Router) পরিবর্তন হতে থাকে।'
    },
    technicalTerms: [
      {
        term: 'Default Gateway (ডিফল্ট গেটওয়ে)',
        banglaMeaning: 'লোকাল নেটওয়ার্ক থেকে বের হওয়ার প্রধান দরজা বা রাউটার ইন্টারফেস',
        explanationEn: 'The Layer 3 router interface on the local subnet to which hosts send packets bound for remote destinations.',
        explanationBn: 'লোকাল নেটওয়ার্কের কম্পিউটারগুলো বাইরের ইন্টারনেটে যাওয়ার জন্য যে রাউটার আইপিতে ট্রাফিক পাঠায়।'
      },
      {
        term: 'Longest Prefix Match (লঙ্গেস্ট প্রিফিক্স ম্যাচ)',
        banglaMeaning: 'সবচেয়ে নির্দিষ্ট সাবনেট মাস্কের রুটকে অগ্রাধিকার দেওয়ার নীতি',
        explanationEn: 'The routing decision rule where the route with the highest number of matching contiguous network bits (/28 over /24) is chosen.',
        explanationBn: 'রাউটিং টেবিলে একাধিক পথ থাকলে যার সাবনেট মাস্ক সবচেয়ে বড় ও নির্দিষ্ট, রাউটার সেই পথ বেছে নেয়।'
      },
      {
        term: 'Time To Live (TTL)',
        banglaMeaning: 'প্যাকেটটির সর্বোচ্চ বেঁচে থাকার মেয়াদ বা হপ সীমা',
        explanationEn: 'An 8-bit IPv4 field decremented by 1 at every router hop to prevent looping packets from surviving indefinitely.',
        explanationBn: 'প্রতিটি রাউটারে ১ করে কমা একটি সংখ্যা, যাতে কোনো প্যাকেট অনন্তকাল ধরে ঘুরতে না পারে।'
      }
    ],
    advantages: [
      {
        en: 'Broadcast containment: Stops Layer 2 broadcast storms from bringing down the network.',
        bn: 'ব্রডকাস্ট পৃথকীকরণ: লোকাল নেটওয়ার্কের অপ্রয়োজনীয় ব্রডকাস্ট ট্রাফিককে বাইরে ছড়িয়ে পড়া থেকে আটকায়।'
      },
      {
        en: 'Hierarchical scalability: Enables millions of independent organizations to interconnect without sharing MAC tables.',
        bn: 'বিশাল স্কেলেবিলিটি: লাখ লাখ প্রতিষ্ঠানকে নিজস্ব স্বাধীন আইপিতে ইন্টারনেটে যুক্ত হতে সাহায্য করে।'
      },
      {
        en: 'Dynamic path recovery: Automatically reroutes traffic if a fiber cable is severed.',
        bn: 'স্বয়ংক্রিয় ব্যাকআপ রুট: কোনো তার ছিঁড়ে গেলে ডাইনামিক প্রোটোকল দিয়ে স্বয়ংক্রিয়ভাবে বিকল্প পথে ডেটা পাঠায়।'
      }
    ],
    disadvantages: [
      {
        en: 'Processing latency: De-encapsulation, route table lookups, and checksum recalculations add microsecond delays compared to simple L2 switching.',
        bn: 'সামান্য বিলম্ব (Latency): ফ্রেম খোলা, আইপি টেবিল দেখা এবং নতুন ফ্রেম বাঁধার কারণে সুইচের চেয়ে সামান্য বেশি সময় নেয়।'
      },
      {
        en: 'Higher equipment cost: High-throughput core enterprise routers require specialized TCAM and ASIC silicon.',
        bn: 'অধিক মূল্য: গিগাবিট বা টেরাবিট গতির রাউটার তৈরিতে অত্যন্ত ব্যয়বহুল চিপসেট ও মেমরির প্রয়োজন হয়।'
      }
    ],
    comparison: [
      {
        techA: 'Router (Layer 3)',
        techB: 'Switch (Layer 2)',
        criteria: 'Forwarding Basis',
        diffEn: 'Forwards based on 32-bit Logical IP addresses using Routing Tables.',
        diffBn: 'রাউটিং টেবিলের আইপি অ্যাড্রেস (Logical IP) দেখে প্যাকেট ফরওয়ার্ড করে।'
      },
      {
        techA: 'Router (Layer 3)',
        techB: 'Switch (Layer 2)',
        criteria: 'Broadcast Domains',
        diffEn: 'Breaks up and isolates broadcast domains at every physical port.',
        diffBn: 'প্রতিটি পোর্টে ব্রডকাস্ট ডোমেইনকে আলাদা করে আটকে দেয়।'
      },
      {
        techA: 'Router (Layer 3)',
        techB: 'Switch (Layer 2)',
        criteria: 'Header Modification',
        diffEn: 'Rewrites L2 MAC addresses and decrements TTL at every hop.',
        diffBn: 'ফ্রেমের ভেতরের কোনো ডেটা পরিবর্তন করে না, কেবল হুবহু চালান করে।'
      }
    ],
    practicalCommands: [
      {
        titleEn: 'Inspect Local Routing Table (Linux / Kali)',
        titleBn: 'লিনাক্সে রাউটিং টেবিল দেখা',
        command: 'ip route show\n# or modern tabular view:\nip route',
        explanationEn: 'Displays directly connected subnets, metric values, outgoing device interfaces, and default gateway (0.0.0.0/0).',
        explanationBn: 'লোকাল নেটওয়ার্কের গেটওয়ে, কানেক্টেড সাবনেট এবং ডিফল্ট রুট প্রদর্শন করে।',
        expectedOutput: 'default via 192.168.1.1 dev eth0 proto dhcp metric 100\n192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.10'
      },
      {
        titleEn: 'Inspect Windows Host Routing Table',
        titleBn: 'উইন্ডোজে হোস্ট রাউটিং টেবিল পরীক্ষা',
        command: 'route print',
        explanationEn: 'Shows active IPv4 route table, netmasks, gateways, interfaces, and metrics.',
        explanationBn: 'উইন্ডোজ পিসির অভ্যন্তরীণ আইপিভি৪ রুট টেবিল ও গেটওয়ে প্রদর্শন করে।'
      }
    ],
    commonMistakes: [
      {
        mistakeEn: 'Believing that IP addresses change when passing through a router.',
        mistakeBn: 'মনে করা যে রাউটার দিয়ে যাওয়ার সময় আইপি অ্যাড্রেস বদলে যায়।',
        correctionEn: 'IP addresses stay constant from source to destination (unless NAT is specifically used). Only MAC addresses change at each router hop!',
        correctionBn: 'সোর্স এবং ডেস্টিনেশন আইপি শুরু থেকে শেষ পর্যন্ত অপরিবর্তিত থাকে (ন্যাট ছাড়া)। প্রতিটি হপে কেবল ম্যাক অ্যাড্রেস পরিবর্তিত হয়!'
      },
      {
        mistakeEn: 'Setting an invalid Default Gateway IP that is outside the local subnet.',
        mistakeBn: 'লোকাল সাবনেটের বাইরের কোনো আইপিকে গেটওয়ে হিসেবে বসানো।',
        correctionEn: 'A host can only communicate with devices on its own Layer 2 subnet directly. The default gateway IP MUST belong to the host\'s local subnet!',
        correctionBn: 'কম্পিউটার সরাসরি কেবল নিজের সাবনেটের ডিভাইসের সাথে যোগাযোগ করতে পারে। তাই ডিফল্ট গেটওয়ের আইপি অবশ্যই একই সাবনেটের হতে হবে।'
      }
    ],
    importantNotes: [
      {
        en: 'A router will silently drop a packet without forwarding if its routing table contains no matching route and no default gateway (0.0.0.0/0) is configured.',
        bn: 'রাউটিং টেবিলে কোনো গন্তব্যের রাস্তা না থাকলে এবং কোনো ডিফল্ট রুট না থাকলে রাউটার প্যাকেটটি সম্পূর্ণ ড্রপ করে দেয়।'
      },
      {
        en: 'When a router drops a packet because TTL reaches 0, it sends an ICMP Type 11 (Time Exceeded) message back to the sender—this is the exact mechanism traceroute uses!',
        bn: 'টিটিএল ০ হওয়ার কারণে রাউটার প্যাকেট ড্রপ করলে প্রেরককে আইসিএমপি টাইম এক্সিডেড মেসেজ পাঠায়—ট্রেসরাউট কমান্ড ঠিক এই নীতিতেই কাজ করে!'
      }
    ],
    knowledgeCheck: [
      {
        questionEn: 'What happens to the Layer 2 Destination MAC address when a packet crosses a router hop?',
        questionBn: 'একটি প্যাকেট রাউটার অতিক্রম করার সময় লেয়ার ২ ডেস্টিনেশন ম্যাক অ্যাড্রেসের কী ঘটে?',
        options: [
          'It remains identical to the original sender MAC',
          'It is rewritten with the MAC address of the next hop or target device',
          'It is converted into an IPv6 address',
          'It is completely removed and never replaced'
        ],
        correctIndex: 1,
        explanationEn: 'At every router hop, the old Layer 2 Ethernet header is stripped and a brand new header is created with the Next-Hop MAC address.',
        explanationBn: 'প্রতিটি রাউটার হপে পুরোনো লেয়ার ২ ফ্রেম খুলে পরবর্তী হপের ম্যাক অ্যাড্রেস দিয়ে একদম নতুন ফ্রেম তৈরি করা হয়।'
      },
      {
        questionEn: 'What is the primary purpose of decrementing the IPv4 Time To Live (TTL) field by 1?',
        questionBn: 'আইপিভি৪ প্যাকেটে টিটিএল (TTL) মান প্রতি হপে ১ কমানোর মূল উদ্দেশ্য কী?',
        options: [
          'To increase network download speed',
          'To encrypt user payload data',
          'To prevent packets from circulating endlessly in routing loops',
          'To calculate internet billing'
        ],
        correctIndex: 2,
        explanationEn: 'If a routing loop occurs, TTL ensures the packet will eventually hit 0 and be dropped rather than consuming bandwidth forever.',
        explanationBn: 'নেটওয়ার্কে লুপ লাগলে কোনো প্যাকেট যাতে অনন্তকাল ঘুরে ব্যান্ডউইথ নষ্ট না করে, তাই টিটিএল ০ হলেই তা বাতিল করা হয়।'
      },
      {
        questionEn: 'If a router has routes for 10.0.0.0/8, 10.1.0.0/16, and 10.1.2.0/24, which route matches packet destination 10.1.2.50?',
        questionBn: 'রাউটারে 10.0.0.0/8, 10.1.0.0/16 এবং 10.1.2.0/24 রুট থাকলে 10.1.2.50 গন্তব্যের জন্য কোনটি নির্বাচিত হবে?',
        options: [
          '10.0.0.0/8 because it covers the largest number of hosts',
          '10.1.2.0/24 because of the Longest Prefix Match rule',
          '10.1.0.0/16 because it is in the middle',
          'None of them, the packet is broadcasted'
        ],
        correctIndex: 1,
        explanationEn: 'The Longest Prefix Match (LPM) rule mandates that the most specific prefix (/24 has 24 matching network bits) always takes precedence.',
        explanationBn: 'লঙ্গেস্ট প্রিফিক্স ম্যাচ (LPM) নিয়মানুযায়ী সবচেয়ে নির্দিষ্ট মাস্ক (/24) অন্য সব রুটকে হারিয়ে অগ্রাধিকার পায়।'
      }
    ],
    practiceQuestions: [
      {
        questionEn: 'Troubleshooting Challenge: Host A can ping its Default Gateway 192.168.1.1, but cannot reach 8.8.8.8. Traceroute stops at 192.168.1.1. What are the two most likely causes on the router?',
        questionBn: 'ট্রাবলশুটিং চ্যালেঞ্জ: হোস্ট এ তার গেটওয়ে 192.168.1.1-এ পিং পাচ্ছে, কিন্তু 8.8.8.8 পাচ্ছে না। ট্রেসরাউট রাউটারে এসে আটকে যায়। রাউটারের সম্ভাব্য দুটি সমস্যা কী?',
        scenarioEn: 'Host A configuration: IP 192.168.1.10/24, GW 192.168.1.1. Gateway answers ARP and pings normally. WAN uplink is down or Default Route (0.0.0.0/0) is missing.',
        scenarioBn: 'গেটওয়ে আইপি লোকাল ল্যানে সাড়া দিচ্ছে। এর অর্থ লোকাল কেবল ও এনআইসি ঠিক আছে। সমস্যা রাউটারের আউটগোয়িং ইন্টারফেসে: হয় আইএসপি ওয়ান লিঙ্ক ডাউন, নয়তো 0.0.0.0/0 ডিফল্ট রুট কনফিগার করা নেই অথবা ন্যাট (NAT) বন্ধ আছে।'
      }
    ],
    interactiveSimulator: 'router'
  },
  'mac-learning-cam-table': {
    id: 'mac-learning-cam-table',
    moduleId: 'level-06-switching-vlan',
    moduleTitleEn: 'LEVEL 06 — Switching and VLAN',
    moduleTitleBn: 'লেভেল ০৬ — সুইচিং এবং ভার্চুয়াল ল্যান (VLAN)',
    levelNumber: 6,
    difficulty: 'Intermediate',
    durationMinutes: 35,
    topicTitleEn: 'MAC Address Learning, CAM Tables, and Layer 2 Forwarding Decisions',
    topicTitleBn: 'ম্যাক অ্যাড্রেস লার্নিং, সিএএম (CAM) টেবিল ও লেয়ার ২ ফরওয়ার্ডিং সিদ্ধান্ত',
    englishDefinition: 'A network switch is an intelligent multiport Layer 2 bridging device that inspects the Source MAC address of every ingress frame to dynamically build its Content Addressable Memory (CAM) table, forwarding unicast traffic strictly to the target physical port while isolating collision domains.',
    banglaMeaning: 'একটি নেটওয়ার্ক সুইচ হলো এমন একটি বুদ্ধিমান লেয়ার ২ ডিভাইস, যা প্রতিটি ইনকামিং ফ্রেমের সোর্স ম্যাক পরীক্ষা করে নিজস্ব সিএএম (CAM) টেবিল তৈরি করে এবং শুধুমাত্র নির্দিষ্ট পোর্টে ইউনিকাস্ট ফ্রেম পাঠিয়ে কলিশন ডোমেইন দূর করে।',
    englishExplanation: 'Unlike legacy network hubs that blindly repeat electrical voltage signals out every single port, a switch operates at Layer 2 (Data Link Layer). When an Ethernet frame enters any physical switch port, the switch hardware ASIC immediately performs five fundamental actions: 1. Learn (it maps the Source MAC address to the ingress port); 2. Forward (if the Destination MAC exists in the CAM table, it switches the frame directly to that port); 3. Flood (if the Destination MAC is unknown or broadcast, it floods the frame out all ports in that VLAN except the ingress port); 4. Filter (if the Destination MAC resides on the same port where it came from, it drops the frame); 5. Age (inactive entries are discarded after 300 seconds to keep memory fresh).',
    banglaExplanation: 'পুরোনো হাবের মতো সব পোর্টে অন্ধভাবে ডেটা না পাঠিয়ে সুইচ অত্যন্ত বিচক্ষণতার সাথে লেয়ার ২-তে কাজ করে। কোনো সুইচ পোর্টে যখন কোনো ইথারনেট ফ্রেম ঢোকে, তখন সুইচের হার্ডওয়্যার ৫টি মূল কাজ করে: ১. শেখে (ফ্রেমের সোর্স ম্যাক দেখে লিখে রাখে যে এই কম্পিউটারটি কোন পোর্টে যুক্ত); ২. ফরোয়ার্ড করে (গন্তব্যের ম্যাক যদি টেবিলে জানা থাকে, তবে সরাসরি সেই একটিমাত্র পোর্টে পাঠিয়ে দেয়); ৩. ফ্লাড করে (গন্তব্যের ম্যাক যদি টেবিলে না থাকে বা ব্রডকাস্ট হয়, তবে যে পোর্টে ঢুকেছে তা বাদে বাকি সব পোর্টে পাঠিয়ে দেয়); ৪. ফিল্টার করে (যদি দেখা যায় গন্তব্য একই পোর্টে রয়েছে, তবে প্যাকেট বাতিল করে দেয়); ৫. এজিং (৩০০ সেকেন্ড কোনো ডিভাইস নিষ্ক্রিয় থাকলে মেমরি খালি করতে তার রেকর্ড মুছে ফেলে)।',
    whyNeededEn: 'Hubs forced all connected devices to share one single collision domain in half-duplex, causing packet collisions whenever two computers spoke simultaneously. Switches eliminate collisions entirely by providing dedicated full-duplex microsegments for each port.',
    whyNeededBn: 'হাবে সমস্ত পিসি একটিমাত্র কলিশন ডোমেইনে থাকত, ফলে দুজন একসাথে কথা বললেই সিগন্যালে ধাক্কা লেগে ডেটা নষ্ট হতো। সুইচ প্রতিটি পোর্টকে আলাদা কলিশন ডোমেইন ও ফুল-ডুপ্লেক্স গতি দিয়ে সংঘর্ষ সম্পূর্ণ দূর করেছে।',
    whereUsedEn: 'In every modern local area network (LAN), connecting office PCs, printers, wireless access points, IP surveillance cameras, and data center servers.',
    whereUsedBn: 'বিশ্বের প্রতিটি অফিস ও ঘরের লোকাল নেটওয়ার্কে পিসি, প্রিন্টার, ওয়াই-ফাই এক্সেস পয়েন্ট ও সার্ভারগুলোকে তারের মাধ্যমে যুক্ত করতে সুইচ ব্যবহৃত হয়।',
    howItWorksEn: 'Switches utilize specialized Content Addressable Memory (CAM) hardware chips. Unlike normal RAM where you provide a memory address to retrieve data, CAM takes the 48-bit MAC address as an input and returns the associated physical port number in a single clock cycle.',
    howItWorksBn: 'সুইচ সিএএম (CAM) নামক বিশেষ হার্ডওয়্যার মেমরি ব্যবহার করে। সাধারণ র‍্যামের মতো না হয়ে সিএএম মেমরিতে ম্যাক অ্যাড্রেস দিলেই এক ক্লক সাইকেলে মুহূর্তের মধ্যে সংশ্লিষ্ট পোর্ট নাম্বার বের হয়ে আসে।',
    internalMechanismEn: 'Upon frame ingress: 1. Preamble & SFD synchronized; 2. Source MAC extracted -> CAM table checked: if not found, entry added with timestamp; if found, aging timer reset to 300s; 3. Destination MAC parsed: if FF:FF:FF:FF:FF:FF -> broadcast flooded across VLAN; if unicast -> CAM lookup: hit = forward to mapped port; miss = unknown unicast flooded out VLAN member ports; 4. Ingress == Egress check: if true -> filtered.',
    internalMechanismBn: 'ফ্রেম আসার পর অভ্যন্তরীণ ধাপ: ১. সোর্স ম্যাক রিড করে সিএএম টেবিলে পোর্টসহ যোগ করা বা টাইমার রিফ্রেশ করা; ২. গন্তব্য ম্যাক পড়া: ব্রডকাস্ট হলে ভি-ল্যানের সব পোর্টে পাঠানো; ইউনিকাস্ট হলে টেবিলে সন্ধান: পেলে নির্দিষ্ট পোর্টে ফরোয়ার্ড, না পেলে আননোন ইউনিকাস্ট ফ্লাডিং; ৩. ইনকামিং ও আউটগোয়িং পোর্ট এক হলে ফ্রেম ড্রপ করা।',
    stepByStep: [
      {
        step: 1,
        titleEn: 'Source MAC Learning',
        titleBn: 'সোর্স ম্যাক শেখা',
        detailEn: 'Switch reads Source MAC in header. Maps MAC -> Port in CAM table.',
        detailBn: 'সুইচ ইনকামিং ফ্রেমের সোর্স ম্যাক পড়ে পোর্টের সাথে টেবিলে নোট করে নেয়।'
      },
      {
        step: 2,
        titleEn: 'Destination MAC Evaluation',
        titleBn: 'গন্তব্য ম্যাক যাচাই',
        detailEn: 'Switch queries CAM table for Destination MAC address.',
        detailBn: 'সুইচ নিজের সিএএম টেবিলে গন্তব্য ম্যাকের পোর্ট সন্ধান করে।'
      },
      {
        step: 3,
        titleEn: 'Known Unicast Forwarding',
        titleBn: 'নির্দিষ্ট পোর্টে ফরোয়ার্ড',
        detailEn: 'If Destination MAC is found in CAM table, switch forwards exclusively out that port.',
        detailBn: 'টেবিলে গন্তব্য ম্যাক পাওয়া গেলে শুধুমাত্র সেই নির্দিষ্ট পোর্টে ফ্রেম পাঠানো হয়।'
      },
      {
        step: 4,
        titleEn: 'Unknown Unicast Flooding',
        titleBn: 'অজানা ম্যাক ফ্লাডিং',
        detailEn: 'If Destination MAC is missing from CAM table, frame is flooded out all other ports.',
        detailBn: 'টেবিলে গন্তব্য ম্যাক না থাকলে ইনপুট পোর্ট বাদে বাকি সব পোর্টে পাঠিয়ে দেওয়া হয়।'
      },
      {
        step: 5,
        titleEn: 'Aging Timer Expiration',
        titleBn: 'এজিং টাইমার ও রেকর্ড মোছা',
        detailEn: 'If a device sends no frames for 300 seconds, its CAM entry is pruned to free memory.',
        detailBn: 'কোনো কম্পিউটার ৩০০ সেকেন্ড কোনো ডেটা না পাঠালে তার রেকর্ড মুছে দেওয়া হয়।'
      }
    ],
    realLifeExample: {
      en: 'Imagine a classroom teacher (Switch) receiving an assignment paper: When student Alice (Host) hands in the paper, the teacher reads Alice\'s name on top (Source MAC) and notes that Alice sits at Desk 1 (Port Fa0/1). When Bob asks the teacher to give a note to Alice, the teacher checks the gradebook, sees Alice is at Desk 1, and walks directly to Desk 1 without disturbing anyone else.',
      bn: 'একজন শিক্ষকের (সুইচ) কথা ভাবুন: যখন কোনো ছাত্র সাজিদ (Host) একটি খাতা জমা দেয়, শিক্ষক তার নাম দেখে (Source MAC) লিখে রাখেন যে সাজিদ ১ নম্বর বেঞ্চে বসে (Port Fa0/1)। পরবর্তীতে অন্য কেউ সাজিদকে চিঠি দিতে বললে শিক্ষক সরাসরি ১ নম্বর বেঞ্চেই যান, পুরো ক্লাসে চিৎকার করে সবাইকে বিরক্ত করেন না।'
    },
    technicalTerms: [
      {
        term: 'CAM Table (Content Addressable Memory)',
        banglaMeaning: 'সুইচের ম্যাক অ্যাড্রেস টেবিল',
        explanationEn: 'The high-speed lookup memory where switches store MAC-address-to-port mappings.',
        explanationBn: 'সুইচের মেমরি যেখানে কোন পোর্টে কোন ম্যাক অ্যাড্রেস যুক্ত তা সংরক্ষিত থাকে।'
      },
      {
        term: 'Unknown Unicast Flooding',
        banglaMeaning: 'অজানা গন্তব্যের ইউনিকাস্ট প্যাকেট সকল পোর্টে ছড়িয়ে দেওয়া',
        explanationEn: 'The action of copying an Ethernet frame to all active ports when the destination MAC is not yet learned.',
        explanationBn: 'সুইচ যদি গন্তব্য ম্যাকের পোর্ট না জানে, তবে সঠিক ডিভাইসের সাড়া পাওয়ার জন্য সবার কাছে কপি পাঠিয়ে দেয়।'
      }
    ],
    advantages: [
      {
        en: 'Zero collisions: Dedicated full-duplex microsegments on every physical switch port.',
        bn: 'কলিশনমুক্ত যোগাযোগ: প্রতিটি পোর্টে স্বাধীন ফুল-ডুপ্লেক্স ব্যান্ডউইথ।'
      },
      {
        en: 'Privacy and security: Unicast conversations are not visible to other ports on the switch.',
        bn: 'নিরাপত্তা: দুজনের কথোপকথন অন্য পোর্টের কম্পিউটার শুনতে বা স্নিফ করতে পারে না।'
      }
    ],
    disadvantages: [
      {
        en: 'Vulnerable to MAC Flooding Attacks if port security is not explicitly configured.',
        bn: 'পোর্ট সিকিউরিটি না থাকলে হ্যাকাররা ভুয়া ম্যাক পাঠিয়ে টেবিল ওভারফ্লো করতে পারে।'
      }
    ],
    comparison: [
      {
        techA: 'Switch',
        techB: 'Hub',
        criteria: 'Intelligence',
        diffEn: 'Inspects MAC addresses and switches frames selectively.',
        diffBn: 'ম্যাক অ্যাড্রেস বুঝে নির্দিষ্ট পোর্টে পাঠায়।'
      },
      {
        techA: 'Switch',
        techB: 'Hub',
        criteria: 'Collision Domain',
        diffEn: 'Each port is its own isolated collision domain.',
        diffBn: 'সব পোর্ট মিলে একটিমাত্র কলিশন ডোমেইন শেয়ার করে।'
      }
    ],
    practicalCommands: [
      {
        titleEn: 'Inspect Switch CAM Table (Cisco IOS)',
        titleBn: 'সিসকো সুইচে ম্যাক টেবিল দেখা',
        command: 'Switch# show mac address-table\n# or on dynamic entries:\nSwitch# show mac address-table dynamic',
        explanationEn: 'Lists all learned MAC addresses, associated VLANs, port numbers, and entry types.',
        explanationBn: 'সুইচের শেখা সমস্ত ম্যাক অ্যাড্রেস, ভি-ল্যান এবং পোর্ট নাম্বার দেখায়।',
        expectedOutput: 'Vlan    Mac Address       Type        Ports\n----    -----------       --------    -----\n   1    0011.22aa.0101    DYNAMIC     Fa0/1\n   1    0011.22aa.0102    DYNAMIC     Fa0/2'
      }
    ],
    commonMistakes: [
      {
        mistakeEn: 'Thinking that switches learn MAC addresses from the Destination MAC.',
        mistakeBn: 'মনে করা যে সুইচ ডেস্টিনেশন ম্যাক দেখে টেবিল বানায়।',
        correctionEn: 'Switches LEARN only from the SOURCE MAC address! They FORWARD based on the Destination MAC address.',
        correctionBn: 'সুইচ কেবল SOURCE MAC দেখেই শেখে! আর ফরোয়ার্ড করার সময় DESTINATION MAC পরীক্ষা করে।'
      }
    ],
    importantNotes: [
      {
        en: 'By default, Cisco switches maintain a 300-second (5 minute) CAM aging timer. If a host sends no frames for 5 minutes, its entry disappears.',
        bn: 'ডিফল্টভাবে সুইচে ৩০০ সেকেন্ডের (৫ মিনিট) এজিং টাইমার থাকে। ৫ মিনিট কোনো ফ্রেম না পাঠালে রেকর্ড মুছে যায়।'
      }
    ],
    knowledgeCheck: [
      {
        questionEn: 'From which field in the incoming Ethernet frame does a switch learn MAC-to-port mappings?',
        questionBn: 'ইনকামিং ইথারনেট ফ্রেমের কোন ফিল্ড দেখে সুইচ নিজের টেবিল তৈরি করে?',
        options: [
          'Destination IP address',
          'Source MAC address',
          'Destination MAC address',
          'CRC Checksum'
        ],
        correctIndex: 1,
        explanationEn: 'Switches learn strictly from the Source MAC address of incoming frames.',
        explanationBn: 'সুইচ সর্বদা ইনকামিং ফ্রেমের সোর্স ম্যাক অ্যাড্রেস দেখে নিজের পোর্ট ম্যাপ করে।'
      },
      {
        questionEn: 'What action does a switch take when a unicast frame arrives with a Destination MAC that is NOT in its CAM table?',
        questionBn: 'সিএএম টেবিলে না থাকা কোনো অজানা ম্যাকের ফ্রেম আসলে সুইচ কী করে?',
        options: [
          'Drops the frame immediately',
          'Sends an ICMP error packet',
          'Floods the frame out all ports in the same VLAN except the receiving port',
          'Shuts down the port'
        ],
        correctIndex: 2,
        explanationEn: 'This is called Unknown Unicast Flooding: the switch floods the frame across the VLAN so the recipient can respond.',
        explanationBn: 'এটিকে আননোন ইউনিকাস্ট ফ্লাডিং বলে: যে পোর্টে এসেছে তা বাদে বাকি সব পোর্টে ফ্রেমটি ছড়িয়ে দেওয়া হয়।'
      }
    ],
    practiceQuestions: [
      {
        questionEn: 'Scenario: PC-1 (Port 1) and PC-2 (Port 2) are connected to a fresh switch. Neither has sent any packets. PC-1 pings PC-2. Exactly what frames are transmitted, learned, and flooded?',
        questionBn: 'দৃশ্যপট: পিসি-১ ও পিসি-২ একদম নতুন সুইচে যুক্ত। পিসি-১ পিসি-২ কে পিং করল। সুইচ কোন ফ্রেম শিখবে এবং কোথায় ফ্লাড করবে?',
        scenarioEn: '1. PC-1 sends ARP Request (Broadcast FF:FF:..). Switch learns PC-1 MAC on Port 1, floods broadcast to Port 2, 3, 4. 2. PC-2 replies with Unicast ARP Reply. Switch learns PC-2 MAC on Port 2, forwards directly to Port 1 (known unicast).',
        scenarioBn: 'প্রথমে পিসি-১ এআরপি ব্রডকাস্ট পাঠাবে। সুইচ পিসি-১ এর ম্যাক শিখে বাকি সব পোর্টে ফ্লাড করবে। পিসি-২ যখন ইউনিকাস্ট উত্তর দেবে, সুইচ পিসি-২ এর ম্যাক শিখে সরাসরি পিসি-১ এর পোর্টে পাঠিয়ে দেবে।'
      }
    ],
    interactiveSimulator: 'switch'
  },
  'dns-protocol-architecture': {
    id: 'dns-protocol-architecture',
    moduleId: 'level-05-protocols-ports',
    moduleTitleEn: 'LEVEL 05 — Networking Protocols and Ports',
    moduleTitleBn: 'লেভেল ০৫ — মূল নেটওয়ার্কিং প্রোটোকল ও পোর্টস',
    levelNumber: 5,
    difficulty: 'Elementary',
    durationMinutes: 30,
    topicTitleEn: 'Domain Name System (DNS) Architecture & Complete Resolution Flow',
    topicTitleBn: 'ডোমেইন নেম সিস্টেম (ডিএনএস) আর্কিটেকচার ও রেজোলিউশন প্রক্রিয়া',
    englishDefinition: 'The Domain Name System (DNS) is an internationally distributed, hierarchical database system operating primarily over UDP/TCP Port 53 that translates human-friendly alphanumeric domain names into machine-readable IP addresses.',
    banglaMeaning: 'ডোমেইন নেম সিস্টেম (DNS) হলো বিশ্বব্যাপী বিস্তৃত একটি হায়ারারকিক্যাল ডেটাবেস সিস্টেম (পোর্ট ৫৩), যা মানুষের বোধগম্য ডোমেইন নামকে (যেমন google.com) কম্পিউটারের বোঝার উপযোগী আইপি ঠিকানায় (যেমন 142.250.190.46) রূপান্তর করে।',
    englishExplanation: 'Computers route packets across networks using numerical IP addresses, but humans cannot easily memorize billions of 32-bit or 128-bit numbers. DNS solves this by establishing a globally delegated hierarchy of name servers. The hierarchy begins at the Root Servers (denoted by a single dot "."), proceeds downward to Top-Level Domains (.com, .org, .edu, .bd), delegates to Second-Level Authoritative Domains (google.com, netcore.edu), and resolves specific subdomains (www, mail, api). When a query is initiated, client stub resolvers consult recursive resolvers, which systematically follow delegations down the tree until an authoritative answer is received and cached.',
    banglaExplanation: 'ইন্টারনেটে কম্পিউটারগুলো একে অপরের সাথে যোগাযোগের জন্য কেবল গাণিতিক আইপি অ্যাড্রেস চেনে। কিন্তু কোটি কোটি আইপি মানুষের পক্ষে মুখস্থ রাখা অসম্ভব। ডিএনএস এই সমস্যার সমাধান করে। ডিএনএস একটি উল্টানো গাছের মতো স্তরে স্তরে বিভক্ত। সবার ওপরে থাকে রুট সার্ভার (.), তার নিচে টপ লেভেল ডোমেইন (.com, .org, .gov, .bd), তার নিচে সেকেন্ড লেভেল অথরিটেটিভ ডোমেইন (যেমন wikipedia.org) এবং সবার নিচে সাবডোমেইন (www বা mail)। ব্যবহারকারী কোনো নাম লিখলে রিকার্সিভ রিজলভার ধাপে ধাপে রুট থেকে শুরু করে অথরিটেটিভ সার্ভারে গিয়ে আসল আইপি বের করে আনে এবং দ্রুত কাজের জন্য নিজের কাছে ক্যাশ করে রাখে।',
    whyNeededEn: 'Without DNS, modern web navigation would be completely impossible. Users would need to type raw IP addresses like "142.250.183.174" to read news, and any server IP change would break access for all visitors worldwide.',
    whyNeededBn: 'ডিএনএস না থাকলে ইন্টারনেটে ওয়েবসাইট ব্রাউজ করা অসম্ভব হতো। সবাইকে ফেসবুক বা গুগলের জটিল আইপি লিখে সার্চ করতে হতো এবং সার্ভার আইপি পরিবর্তন হলেই গোটা বিশ্বের মানুষের কানেকশন বিচ্ছিন্ন হয়ে যেত।',
    whereUsedEn: 'In every single Internet transaction: loading web pages, sending emails (MX records), streaming video, looking up cloud API endpoints, and verifying cryptographic domain ownership (TXT records).',
    whereUsedBn: 'ইন্টারনেটের প্রতিটি কাজে: ওয়েবসাইট ভিজিট, ইমেইল পাঠানো (MX রেকর্ড), ভিডিও স্ট্রিমিং এবং ক্লাউড এপিআই ব্যবহারের ক্ষেত্রে ডিএনএস ব্যবহৃত হয়।',
    howItWorksEn: 'DNS queries travel over UDP port 53 for speed (sub-50ms query latency). If responses exceed the 512-byte UDP packet limit (such as DNSSEC cryptographic keys or zone transfers), DNS automatically switches to TCP port 53.',
    howItWorksBn: 'দ্রুতগতির জন্য ডিএনএস সাধারণত ইউডিপি (UDP) পোর্ট ৫৩ ব্যবহার করে (৫০ মিলি-সেকেন্ডের কম সময়ে উত্তর পাওয়ার জন্য)। তবে জোন ফাইল ট্রান্সফার বা বড় সিকিউরিটি ডেটার ক্ষেত্রে এটি টিসিপি (TCP) পোর্ট ৫৩ ব্যবহার করে।',
    internalMechanismEn: 'Resolution flow: 1. Application calls getaddrinfo(); 2. OS checks memory cache; 3. If miss, UDP packet sent to Recursive Resolver (e.g. 8.8.8.8); 4. Resolver queries Root Server for .com; 5. Root responds with NS records for .com TLD; 6. Resolver queries .com TLD server; 7. TLD responds with NS records for target domain; 8. Resolver queries Authoritative Server; 9. Authoritative returns A/AAAA record with TTL; 10. Resolver caches and returns IP to client.',
    internalMechanismBn: 'অভ্যন্তরীণ ধাপ: ১. ব্রাউজার সিস্টেমে কল করে; ২. ওএস লোকাল ক্যাশ চেক করে; ৩. না পেলে রিকার্সিভ রিজলভারে পাঠায়; ৪. রিজলভার রুট সার্ভারকে নক করে; ৫. রুট সার্ভার টিএলডি সার্ভারের রেফারেল দেয়; ৬. রিজলভার টিএলডি সার্ভারকে নক করে; ৭. টিএলডি অথরিটেটিভ সার্ভারকে রেফার করে; ৮. অথরিটেটিভ সার্ভার মূল আইপি ও টিটিএল দেয়; ৯. রিজলভার ক্যাশ করে ক্লায়েন্টকে উত্তর দেয়।',
    stepByStep: [
      {
        step: 1,
        titleEn: 'Browser Cache Check',
        titleBn: 'ব্রাউজার ক্যাশ চেক',
        detailEn: 'Browser checks its internal recent DNS cache. If found, connection starts instantly without network queries.',
        detailBn: 'ব্রাউজার নিজের মেমরিতে দেখে সম্প্রতি এই ঠিকানায় যাওয়া হয়েছিল কি না।'
      },
      {
        step: 2,
        titleEn: 'Query to Recursive Resolver',
        titleBn: 'রিকার্সিভ রিজলভারে রিকোয়েস্ট',
        detailEn: 'Host sends recursive query to ISP or public DNS (8.8.8.8, 1.1.1.1).',
        detailBn: 'কম্পিউটার আইএসপি বা পাবলিক ডিএনএস সার্ভারে কোয়েরি পাঠায়।'
      },
      {
        step: 3,
        titleEn: 'Root Server (.) Referral',
        titleBn: 'রুট সার্ভার (.) রেফারেল',
        detailEn: 'Resolver asks Root Server. Root directs resolver to the appropriate TLD nameservers.',
        detailBn: 'রুট সার্ভার বলে দেয় কোন টিএলডি সার্ভারে ডোমেইনের তথ্য আছে।'
      },
      {
        step: 4,
        titleEn: 'TLD Server (.com) Referral',
        titleBn: 'টিএলডি সার্ভার (.com) রেফারেল',
        detailEn: 'TLD server points resolver to the authoritative nameservers responsible for the domain.',
        detailBn: 'টিএলডি সার্ভার সংশ্লিষ্ট ডোমেইনের অথরিটেটিভ নেম সার্ভারের তালিকা দেয়।'
      },
      {
        step: 5,
        titleEn: 'Authoritative Answer & Caching',
        titleBn: 'অথরিটেটিভ উত্তর ও ক্যাশিং',
        detailEn: 'Authoritative server returns the master A/AAAA record. Resolver caches and delivers IP to user.',
        detailBn: 'অথরিটেটিভ সার্ভার নিশ্চিত আইপি দেয়। রিজলভার ক্যাশ করে ইউজারের পিসিতে পাঠায়।'
      }
    ],
    realLifeExample: {
      en: 'Think of DNS as a smartphone contact directory: You do not dial your friend\'s 11-digit phone number directly; you click "Sajid". Your phone\'s operating system looks up "Sajid" in the contacts database, finds the actual phone number, and dials the cellular tower.',
      bn: 'ডিএনএস হলো আপনার ফোনের কন্ট্যাক্ট ডিরেক্টরির মতো: আপনি কারও ১১ ডিজিটের নম্বর মুখস্থ না রেখে "সাজিদ" নামে সেভ করে রাখেন। যখন সাজিদকে কল দেন, ফোন ব্যাকগ্রাউন্ডে নামটির বিপরীতে আসল নম্বরটি বের করে নেটওয়ার্কে ডায়াল করে।'
    },
    technicalTerms: [
      {
        term: 'A Record (Address Record)',
        banglaMeaning: 'আইপিভি৪ অ্যাড্রেস রেকর্ড',
        explanationEn: 'The core DNS record mapping a hostname to a 32-bit IPv4 address (e.g. example.com -> 93.184.216.34).',
        explanationBn: 'ডোমেইন নামকে আইপিভি৪ (IPv4) অ্যাড্রেসের সাথে যুক্তকারী মূল রেকর্ড।'
      },
      {
        term: 'AAAA Record (Quad-A Record)',
        banglaMeaning: 'আইপিভি৬ অ্যাড্রেস রেকর্ড',
        explanationEn: 'The DNS record mapping a hostname to a 128-bit IPv6 address.',
        explanationBn: 'ডোমেইন নামকে আইপিভি৬ (IPv6) অ্যাড্রেসের সাথে যুক্তকারী রেকর্ড।'
      },
      {
        term: 'CNAME Record (Canonical Name)',
        banglaMeaning: 'উপনাম বা এলিয়াস রেকর্ড',
        explanationEn: 'An alias pointing one domain name to another domain name instead of an IP address.',
        explanationBn: 'একটি ডোমেইন নামকে সরাসরি আইপিতে না দিয়ে অন্য একটি ডোমেইন নামের সাথে যুক্ত করা।'
      }
    ],
    advantages: [
      {
        en: 'Human convenience: Easy memorization of websites and service endpoints.',
        bn: 'ব্যবহারকারীর সুবিধা: জটিল আইপির বদলে সহজ ডোমেইন নাম ব্যবহার।'
      },
      {
        en: 'Infrastructure agility: Server IPs can migrate to new cloud datacenters by simply updating DNS records.',
        bn: 'সহজ সার্ভার মাইগ্রেশন: সার্ভার আইপি পরিবর্তন হলেও ডিএনএস রেকর্ড আপডেট করলেই সবকিছু ঠিক থাকে।'
      }
    ],
    disadvantages: [
      {
        en: 'DNS Cache Poisoning & Spoofing if DNSSEC is not deployed.',
        bn: 'ডিএনএস ক্যাশ পয়জনিংয়ের মাধ্যমে হ্যাকাররা ভুয়া ওয়েবসাইটে ট্রাফিক ঘুরিয়ে দিতে পারে।'
      }
    ],
    comparison: [
      {
        techA: 'Recursive Resolver',
        techB: 'Authoritative Nameserver',
        criteria: 'Role',
        diffEn: 'Hunts down answers on behalf of clients by traversing the hierarchy.',
        diffBn: 'ক্লায়েন্টের পক্ষ হয়ে পুরো দুনিয়ার সার্ভার খুঁজে আসল আইপি বের করে আনে।'
      },
      {
        techA: 'Recursive Resolver',
        techB: 'Authoritative Nameserver',
        criteria: 'Data Ownership',
        diffEn: 'Holds the final, authoritative zone files configured by domain owners.',
        diffBn: 'ডোমেইন মালিকের মূল ও আসল ডেটাবেস ফাইল নিজের কাছে সংরক্ষণ করে।'
      }
    ],
    practicalCommands: [
      {
        titleEn: 'Trace Full DNS Delegation with Dig (Linux/Kali)',
        titleBn: 'লিনাক্সে dig দিয়ে পূর্ণাঙ্গ ডিএনএস চেইন দেখা',
        command: 'dig +trace example.com',
        explanationEn: 'Prints the entire recursive query journey: Root -> TLD -> Authoritative server.',
        explanationBn: 'রুট সার্ভার থেকে শুরু করে অথরিটেটিভ সার্ভার পর্যন্ত পুরো ৪টি ধাপ টার্মিনালে দেখায়।',
        expectedOutput: '.                       518400  IN      NS      a.root-servers.net.\ncom.                    172800  IN      NS      a.gtld-servers.net.\nexample.com.            172800  IN      NS      a.iana-servers.net.\nexample.com.            86400   IN      A       93.184.216.34'
      },
      {
        titleEn: 'Query Specific DNS Record on Windows/CMD',
        titleBn: 'উইন্ডোজ সিএমডিতে নির্দিষ্ট ডিএনএস রেকর্ড দেখা',
        command: 'nslookup -type=MX google.com 8.8.8.8',
        explanationEn: 'Queries Google Public DNS directly for Mail Exchange (MX) records.',
        explanationBn: 'গুগলের মেইল এক্সচেঞ্জ সার্ভারের আইপি ও রেকর্ড সরাসরি বের করে।'
      }
    ],
    commonMistakes: [
      {
        mistakeEn: 'Assuming DNS changes take effect immediately worldwide.',
        mistakeBn: 'মনে করা যে ডিএনএস রেকর্ড পরিবর্তন করার সাথে সাথেই সবাই দেখতে পাবে।',
        correctionEn: 'DNS records are cached according to their TTL (Time To Live). Changes take time to propagate until previous cached records expire!',
        correctionBn: 'ডিএনএস ক্যাশ টিটিএল (TTL) সময় অনুযায়ী সংরক্ষিত থাকে। ক্যাশের মেয়াদ শেষ না হওয়া পর্যন্ত পুরোনো রেকর্ড দেখা যেতে পারে।'
      }
    ],
    importantNotes: [
      {
        en: 'The 13 root name server IP addresses (A through M) are operated by independent non-profit institutions and universities worldwide using Anycast routing.',
        bn: 'বিশ্বের ১৩টি রুট নেম সার্ভার এনিকাস্ট (Anycast) টেকনোলজির মাধ্যমে বিশ্বের শত শত শহরে ছড়িয়ে রাখা হয়েছে।'
      }
    ],
    knowledgeCheck: [
      {
        questionEn: 'Which DNS record type is specifically used to translate a domain name into an IPv4 address?',
        questionBn: 'ডোমেইন নামকে আইপিভি৪ (IPv4) ঠিকানায় রূপান্তরের জন্য কোন ডিএনএস রেকর্ড ব্যবহৃত হয়?',
        options: [
          'CNAME Record',
          'MX Record',
          'A Record',
          'TXT Record'
        ],
        correctIndex: 2,
        explanationEn: 'An "A" (Address) record maps a hostname directly to a 32-bit IPv4 address.',
        explanationBn: 'এ (A) রেকর্ড সরাসরি ডোমেইন নামকে আইপিভি৪ ঠিকানার সাথে ম্যাপ করে।'
      },
      {
        questionEn: 'What port and transport protocol does DNS typically utilize for standard name resolution queries?',
        questionBn: 'স্ট্যান্ডার্ড ডিএনএস কোয়েরির জন্য সাধারণত কোন পোর্ট ও প্রোটোকল ব্যবহৃত হয়?',
        options: [
          'UDP Port 53',
          'TCP Port 80',
          'UDP Port 67',
          'TCP Port 443'
        ],
        correctIndex: 0,
        explanationEn: 'Standard DNS queries use UDP Port 53 for minimum latency and rapid response.',
        explanationBn: 'দ্রুতগতির জন্য স্ট্যান্ডার্ড ডিএনএস ইউডিপি (UDP) পোর্ট ৫৩ ব্যবহার করে।'
      }
    ],
    practiceQuestions: [
      {
        questionEn: 'Scenario: A web developer updates an A record from 10.0.0.1 to 10.0.0.2 with a TTL of 86400 seconds (24 hours). Why do some users still land on the old server 12 hours later?',
        questionBn: 'দৃশ্যপট: একজন ডেভেলপার টিটিএল ২৪ ঘণ্টা রেখে নতুন আইপি বসালেন। ১২ ঘণ্টা পরও কিছু ইউজার পুরোনো সার্ভারে যাচ্ছেন কেন?',
        scenarioEn: 'Their local ISP recursive resolvers cached the old record with 24h TTL. Until that 24 hours expires, those resolvers will not query the authoritative server again.',
        scenarioBn: 'ব্যবহারকারীদের লোকাল আইএসপি ডিএনএস সার্ভারে পুরোনো রেকর্ডটি ২৪ ঘণ্টার জন্য ক্যাশ করা ছিল। সেই ক্যাশ মেয়াদোত্তীর্ণ না হওয়া পর্যন্ত তারা নতুন আইপি পাবে না।'
      }
    ],
    interactiveSimulator: 'dns'
  },
  'dhcp-protocol-dora': {
    id: 'dhcp-protocol-dora',
    moduleId: 'level-05-protocols-ports',
    moduleTitleEn: 'LEVEL 05 — Networking Protocols and Ports',
    moduleTitleBn: 'লেভেল ০৫ — মূল নেটওয়ার্কিং প্রোটোকল ও পোর্টস',
    levelNumber: 5,
    difficulty: 'Elementary',
    durationMinutes: 30,
    topicTitleEn: 'Dynamic Host Configuration Protocol (DHCP) & The DORA Process',
    topicTitleBn: 'ডাইনামিক হোস্ট কনফিগারেশন প্রোটোকল (ডিএইচসিপি) ও ডোরা (DORA) প্রক্রিয়া',
    englishDefinition: 'DHCP is a client-server network protocol operating on UDP ports 67 (server) and 68 (client) that dynamically automates the distribution of IP addresses, subnet masks, default gateways, and DNS server addresses to hosts.',
    banglaMeaning: 'ডিএইচসিপি (DHCP) হলো এমন একটি ক্লায়েন্ট-সার্ভার প্রোটোকল (পোর্ট ৬৭/৬৮), যা নেটওয়ার্কে যুক্ত হওয়া কম্পিউটারগুলোকে স্বয়ংক্রিয়ভাবে আইপি অ্যাড্রেস, সাবনেট মাস্ক, গেটওয়ে এবং ডিএনএস তথ্য বরাদ্দ করে।',
    englishExplanation: 'Manually configuring static IP addresses on hundreds of laptops, smartphones, and IoT devices is error-prone and unscalable. Address conflicts occur frequently. DHCP solves this through automated centralized leasing. When a client connects to an Ethernet switch or Wi-Fi network, it executes the 4-step DORA exchange: 1. DHCP Discover (broadcast seeking servers); 2. DHCP Offer (servers propose unassigned IP); 3. DHCP Request (client accepts specific offer); 4. DHCP Acknowledgment (server commits lease in database).',
    banglaExplanation: 'একটি প্রতিষ্ঠানে শত শত কম্পিউটার বা মোবাইলে হাতে হাতে আইপি বসানো অত্যন্ত সময়সাপেক্ষ এবং এতে প্রায়ই আইপি কনফ্লিক্ট বা ডুপ্লিকেট হওয়ার ভুল হয়। ডিএইচসিপি এই পুরো প্রক্রিয়া স্বয়ংক্রিয় করে। যখনই কোনো ডিভাইস ওয়াই-ফাই বা ক্যাবলে যুক্ত হয়, সে ৪টি ধাপে (DORA) সার্ভারের সাথে যোগাযোগ করে: ১. ডিসকভার (Discover - নেটওয়ার্কে সার্ভার খোঁজা); ২. অফার (Offer - সার্ভারের আইপি প্রস্তাব); ৩. রিকোয়েস্ট (Request - ক্লায়েন্টের অফার গ্রহণ); ৪. অ্যাকনলেজ (Acknowledgment - সার্ভারের চূড়ান্ত সিলমোহর ও বরাদ্দ)।',
    whyNeededEn: 'Eliminates human IP configuration errors, prevents duplicate IP conflicts, and reclaims unused IP addresses when mobile devices leave the building.',
    whyNeededBn: 'ম্যানুয়ালি আইপি বসানোর ভুল দূর করে, আইপি কনফ্লিক্ট ঠেকায় এবং কোনো কর্মী অফিস থেকে চলে গেলে তার অব্যবহৃত আইপি অন্য কাউকে দেওয়ার সুযোগ তৈরি করে।',
    whereUsedEn: 'In every Wi-Fi router, home gateway, corporate campus, airport hotspot, and hotel network.',
    whereUsedBn: 'বিশ্বের প্রতিটি বাসা-বাড়ির ওয়াই-ফাই রাউটার, অফিস, এয়ারপোর্ট ও পাবলিক হটস্পটে ডিএইচসিপি ব্যবহৃত হয়।',
    howItWorksEn: 'DHCP operates over UDP because newly booting clients lack an IP address and cannot establish TCP connections. Clients broadcast from 0.0.0.0:68 to 255.255.255.255:67.',
    howItWorksBn: 'নতুন পিসির কোনো আইপি না থাকায় সে টিসিপি সংযোগ বানাতে পারে না, তাই ইউডিপির (UDP) মাধ্যমে ব্রডকাস্ট মেসেজ পাঠিয়ে সার্ভার খুঁজে নেয়।',
    internalMechanismEn: 'DORA lifecycle: 1. Discover: Client broadcast (Src 0.0.0.0, Dst 255.255.255.255); 2. Offer: Server reserves IP from pool, sends parameters; 3. Request: Client broadcasts acceptance of server offer; 4. ACK: Server records binding with lease timer (e.g. 86400s) and returns ACK; 5. T1 Timer (50% lease): Client attempts unicast renewal.',
    internalMechanismBn: 'ডোরা জীবনচক্র: ১. ডিসকভার ব্রডকাস্ট; ২. সার্ভারের পুল থেকে আইপি অফার; ৩. ক্লায়েন্টের রিকোয়েস্ট ব্রডকাস্ট; ৪. সার্ভারের চূড়ান্ত অ্যাকনলেজমেন্ট ও লিজ টাইম প্রদান; ৫. লিজের ৫০% সময় পার হলে ক্লায়েন্ট রিনিউ রিকোয়েস্ট পাঠায়।',
    stepByStep: [
      {
        step: 1,
        titleEn: 'DHCP Discover',
        titleBn: 'ডিএইচসিপি ডিসকভার',
        detailEn: 'Client broadcasts to 255.255.255.255 searching for any local DHCP server.',
        detailBn: 'ক্লায়েন্ট পুরো লোকাল নেটওয়ার্কে ব্রডকাস্ট করে ডিএইচসিপি সার্ভার খোঁজে।'
      },
      {
        step: 2,
        titleEn: 'DHCP Offer',
        titleBn: 'ডিএইচসিপি অফার',
        detailEn: 'DHCP server offers an unassigned IP, subnet mask, gateway, and DNS servers.',
        detailBn: 'সার্ভার তার ফাঁকা তালিকা থেকে একটি আইপি ও গেটওয়ে ঠিকানার প্রস্তাব পাঠায়।'
      },
      {
        step: 3,
        titleEn: 'DHCP Request',
        titleBn: 'ডিএইচসিপি রিকোয়েস্ট',
        detailEn: 'Client confirms it wants the offered IP and broadcasts acceptance.',
        detailBn: 'ক্লায়েন্ট প্রস্তাবটি গ্রহণ করে নিশ্চিত বার্তা পাঠায়।'
      },
      {
        step: 4,
        titleEn: 'DHCP Acknowledgment (ACK)',
        titleBn: 'ডিএইচসিপি অ্যাকনলেজ (ACK)',
        detailEn: 'Server commits lease in its binding database and finalizes the IP assignment.',
        detailBn: 'সার্ভার তার ডেটাবেসে লিজ নিশ্চিত করে চূড়ান্ত অ্যাকনলেজ পাঠায়।'
      }
    ],
    realLifeExample: {
      en: 'Think of renting a hotel room: You arrive at the front desk without a room (Discover). The receptionist offers Room 304 with Wi-Fi and Breakfast (Offer). You say "Yes, I will take Room 304" (Request). The receptionist stamps your keycard and notes your 24-hour checkout time in the computer (ACK).',
      bn: 'হোটেলে রুম ভাড়ার মতো: আপনি কোনো রুম ছাড়া রিসেপশনে গেলেন (Discover)। ম্যানেজার বললেন ৩০৪ নম্বর রুম খালি আছে (Offer)। আপনি বললেন "হ্যাঁ, আমি ৩০৪ নম্বর রুমটি নেব" (Request)। ম্যানেজার আপনার নামে চাবি ইস্যু করে কম্পিউটারে ২৪ ঘণ্টার জন্য লিখে রাখলেন (ACK)।'
    },
    technicalTerms: [
      {
        term: 'DORA Process',
        banglaMeaning: 'ডিএইচসিপির ৪-ধাপ প্রক্রিয়া (Discover, Offer, Request, ACK)',
        explanationEn: 'The four sequential packet exchanges between a DHCP client and server to negotiate an IP lease.',
        explanationBn: 'আইপি লিজ নেওয়ার জন্য ক্লায়েন্ট ও সার্ভারের মধ্যবর্তী চারটি সুনির্দিষ্ট বার্তা বিনিময়।'
      },
      {
        term: 'DHCP Scope / Pool',
        banglaMeaning: 'আইপি বরাদ্দের সংরক্ষিত পরিসীমা',
        explanationEn: 'The range of consecutive IP addresses that a DHCP server is permitted to assign to clients.',
        explanationBn: 'সার্ভারে নির্ধারিত আইপির তালিকা (যেমন ১৯২.১৬৮.১.৫০ থেকে ২০০) যা ক্লায়েন্টদের দেওয়া যায়।'
      }
    ],
    advantages: [
      {
        en: 'Zero manual configuration: Plug-and-play network access for end users.',
        bn: 'প্লাগ অ্যান্ড প্লে: তার লাগানো বা ওয়াই-ফাইতে যুক্ত হওয়ার সাথে সাথেই ইন্টারনেট চালু।'
      },
      {
        en: 'Dynamic address recycling: Inactive leases are recovered and assigned to other devices.',
        bn: 'আইপি পুনর্ব্যবহার: পুরানো ডিভাইস চলে গেলে সেই আইপি অন্য ডিভাইসকে দেওয়া যায়।'
      }
    ],
    disadvantages: [
      {
        en: 'Single point of failure if no redundant DHCP server or IP helper relay is active.',
        bn: 'সার্ভার ডাউন হলে নতুন কোনো কম্পিউটার নেটওয়ার্কে আইপি পাবে না।'
      }
    ],
    comparison: [
      {
        techA: 'DHCP (Dynamic IP)',
        techB: 'Static IP',
        criteria: 'Configuration Effort',
        diffEn: 'Completely automated by server.',
        diffBn: 'ম্যানুয়ালি প্রতিটি পিসিতে গিয়ে টাইপ করতে হয়।'
      },
      {
        techA: 'DHCP (Dynamic IP)',
        techB: 'Static IP',
        criteria: 'Ideal Use Case',
        diffEn: 'Laptops, smartphones, office workstations.',
        diffBn: 'সার্ভার, রাউটার ও নেটওয়ার্ক প্রিন্টারের জন্য প্রযোজ্য।'
      }
    ],
    practicalCommands: [
      {
        titleEn: 'Release and Renew DHCP Lease (Windows)',
        titleBn: 'উইন্ডোজে আইপি বাতিল ও নতুন লিজ নেওয়া',
        command: 'ipconfig /release\nipconfig /renew',
        explanationEn: 'Releases current IP and initiates fresh DORA negotiation with the server.',
        explanationBn: 'বর্তমান আইপি ছেড়ে দিয়ে সার্ভারের কাছ থেকে নতুন করে আইপি লিজ গ্রহণ করে।'
      },
      {
        titleEn: 'Request DHCP Lease on Linux',
        titleBn: 'লিনাক্সে ডিএইচসিপি ক্লায়েন্ট চালানো',
        command: 'sudo dhclient -r eth0  # Release\nsudo dhclient eth0     # Renew',
        explanationEn: 'Runs the dynamic host configuration client daemon on interface eth0.',
        explanationBn: 'লিনাক্স ইন্টারফেসে নতুন আইপি লিজের জন্য ডিএইচসিপি রিকোয়েস্ট পাঠায়।'
      }
    ],
    commonMistakes: [
      {
        mistakeEn: 'Running two uncoordinated DHCP servers on the same local subnet.',
        mistakeBn: 'একই নেটওয়ার্কে না জানিয়ে দুটি আলাদা ডিএইচসিপি সার্ভার চালানো (Rogue DHCP)।',
        correctionEn: 'Causes IP conflicts and wrong default gateway assignment. Always use DHCP Snooping on switches!',
        correctionBn: 'এর ফলে আইপি কনফ্লিক্ট হয় এবং ভুল গেটওয়ে চলে আসে। সুইচে অবশ্যই DHCP Snooping ফিচার চালু রাখতে হবে।'
      }
    ],
    importantNotes: [
      {
        en: 'If a Windows PC fails to reach a DHCP server, it automatically assigns itself an APIPA address in the range 169.254.x.x, which cannot access the Internet!',
        bn: 'কম্পিউটার যদি ডিএইচসিপি সার্ভার খুঁজে না পায়, তবে সে নিজে নিজে 169.254.x.x (APIPA) আইপি বসিয়ে নেয়, যা দিয়ে ইন্টারনেট চলে না!'
      }
    ],
    knowledgeCheck: [
      {
        questionEn: 'Which message in the DHCP DORA process does a client broadcast to announce its initial search for servers?',
        questionBn: 'সার্ভার খোঁজার জন্য ক্লায়েন্ট ডোরা (DORA) প্রক্রিয়ায় কোন মেসেজটি প্রথম ব্রডকাস্ট করে?',
        options: [
          'DHCP ACK',
          'DHCP OFFER',
          'DHCP DISCOVER',
          'DHCP RELEASE'
        ],
        correctIndex: 2,
        explanationEn: 'The client begins by broadcasting a DHCP DISCOVER message.',
        explanationBn: 'ক্লায়েন্ট সর্বদা DHCP DISCOVER ব্রডকাস্টের মাধ্যমে শুরু করে।'
      },
      {
        questionEn: 'What default IP range does Windows assign to an adapter when no DHCP server responds (APIPA)?',
        questionBn: 'ডিএইচসিপি সার্ভার না পেলে উইন্ডোজ স্বয়ংক্রিয়ভাবে কোন রেঞ্জের আইপি (APIPA) বসায়?',
        options: [
          '192.168.1.x',
          '169.254.x.x',
          '10.0.0.x',
          '127.0.0.1'
        ],
        correctIndex: 1,
        explanationEn: 'Automatic Private IP Addressing (APIPA) assigns an address from 169.254.0.1 to 169.254.255.254.',
        explanationBn: 'এপিআইপিএ (APIPA) ১৬৯.২৫৪.০.০/১৬ রেঞ্জের ঠিকানা বসিয়ে দেয়।'
      }
    ],
    practiceQuestions: [
      {
        questionEn: 'Scenario: A user plugs into an office Ethernet wall jack. They get IP 169.254.12.88 and cannot open intranet portals. What is the root cause?',
        questionBn: 'দৃশ্যপট: একজন কর্মী অফিসে ক্যাবল লাগানোর পর 169.254.12.88 আইপি পেলেন এবং কোনো সাইট খুলছে না। মূল কারণ কী?',
        scenarioEn: 'The 169.254.x.x address confirms APIPA. The computer sent DHCP Discovers, but received no DHCP Offers. Check if the switch port VLAN is correct or if the DHCP relay / server is offline.',
        scenarioBn: '১৬৯.২৫৪ আইপি নির্দেশ করে কম্পিউটার ডিএইচসিপি থেকে কোনো সাড়া পায়নি। সুইচ পোর্টে সঠিক ভি-ল্যান নেই অথবা ডিএইচসিপি সার্ভার ডাউন হয়ে আছে।'
      }
    ],
    interactiveSimulator: 'dhcp'
  },
  'tcp-protocol-operation': {
    id: 'tcp-protocol-operation',
    moduleId: 'level-05-protocols-ports',
    moduleTitleEn: 'LEVEL 05 — Networking Protocols and Ports',
    moduleTitleBn: 'লেভেল ০৫ — মূল নেটওয়ার্কিং প্রোটোকল ও পোর্টস',
    levelNumber: 5,
    difficulty: 'Elementary',
    durationMinutes: 35,
    topicTitleEn: 'Transmission Control Protocol (TCP): Reliable Transport & Handshakes',
    topicTitleBn: 'ট্রান্সমিশন কন্ট্রোল প্রোটোকল (টিসিপি): নির্ভরযোগ্য ট্রান্সপোর্ট ও হ্যান্ডশেক',
    englishDefinition: 'TCP (RFC 793) is a connection-oriented, reliable Layer 4 Transport Layer protocol that guarantees in-order, error-checked, flow-controlled delivery of a stream of octets between communicating network sockets.',
    banglaMeaning: 'টিসিপি (TCP) হলো লেয়ার ৪ ট্রান্সপোর্ট প্রোটোকল, যা দুটি কম্পিউটারের মধ্যে নির্ভরযোগ্য ও ক্রমানুসারে শতভাগ নির্ভুল ডেটা আদান-প্রদান নিশ্চিত করে।',
    englishExplanation: 'IP (Layer 3) is a best-effort, connectionless protocol that provides zero guarantees against lost, duplicated, or out-of-order packets. TCP solves this by establishing a virtual connection before transmitting data using the 3-Way Handshake (SYN, SYN-ACK, ACK). TCP assigns unique 32-bit Sequence Numbers (SEQ) to every transmitted byte. The receiver acknowledges bytes received using Acknowledgment Numbers (ACK). If an acknowledgment is not received before a retransmission timer expires, TCP automatically retransmits the lost segment.',
    banglaExplanation: 'আইপি (লেয়ার ৩) নিজে কোনো প্যাকেট হারিয়ে যাওয়া বা উল্টাপাল্টা ক্রমের নিশ্চয়তা দিতে পারে না। টিসিপি এই দায়িত্ব পালন করে। ডেটা পাঠানোর আগে টিসিপি ৩-ওয়ে হ্যান্ডশেক দিয়ে সংযোগ নিশ্চিত করে। এরপর প্রেরিত প্রতিটি বাইটের সাথে সিকোয়েন্স নাম্বার (SEQ) জুড়ে দেয়। প্রাপক ঠিকঠাক পেলে প্রাপ্তি স্বীকার (ACK) পাঠায়। কোনো প্যাকেট তারের মাঝে হারিয়ে গেলে নির্দিষ্ট সময়ের মধ্যে টিসিপি স্বয়ংক্রিয়ভাবে তা পুনরায় পাঠিয়ে শতভাগ নিশ্চিত করে।',
    whyNeededEn: 'Web pages, financial transactions, database queries, and file downloads cannot tolerate a single lost byte. TCP guarantees perfect data integrity.',
    whyNeededBn: 'ওয়েবসাইট, ব্যাংক লেনদেন, ফাইল ডাউনলোড বা টেক্সট মেসেজে একটি বাইটও নষ্ট হওয়া চলে না। টিসিপি ডেটার শতভাগ বিশ্বস্ততা নিশ্চিত করে।',
    whereUsedEn: 'HTTP/HTTPS (Port 80/443), SSH (Port 22), FTP (Port 21), SMTP/IMAP email (Ports 25, 993), and database connections.',
    whereUsedBn: 'এইচটিটিপিএস ওয়েব ব্রাউজিং, এসএসএইচ রিমোট লগইন, ইমেইল প্রেরণ ও ডেটাবেস সংযোগে টিসিপি ব্যবহৃত হয়।',
    howItWorksEn: 'TCP uses sliding windows for flow control (preventing a fast sender from overwhelming a slow receiver) and congestion control algorithms (Slow Start, Congestion Avoidance) to adapt to network bandwidth.',
    howItWorksBn: 'রিসিভারের সক্ষমতা বুঝে ডেটা পাঠানোর গতি কমাতে বা বাড়াতে টিসিপি স্লাইডিং উইন্ডো এবং কনজেশন কন্ট্রোল পদ্ধতি ব্যবহার করে।',
    internalMechanismEn: 'Handshake: 1. Client SYN (Seq=x); 2. Server SYN-ACK (Seq=y, Ack=x+1); 3. Client ACK (Seq=x+1, Ack=y+1). Sockets enter ESTABLISHED state. Data transfer tracks SEQ/ACK delta. Teardown uses FIN/ACK exchange.',
    internalMechanismBn: 'হ্যান্ডশেক মেকানিজম: ১. ক্লায়েন্ট সিন (seq=x); ২. সার্ভার সিন-অ্যাক (seq=y, ack=x+1); ৩. ক্লায়েন্ট অ্যাক (seq=x+1, ack=y+1)। সংযোগ ESTABLISHED হয়। কাজ শেষ হলে FIN ফ্ল্যাগ দিয়ে সকেট বন্ধ হয়।',
    stepByStep: [
      {
        step: 1,
        titleEn: 'SYN (Synchronize)',
        titleBn: 'সিন (SYN)',
        detailEn: 'Client generates random ISN and sends SYN segment to server port.',
        detailBn: 'ক্লায়েন্ট সংযোগের প্রস্তাব জানিয়ে নিজের সিকোয়েন্স নাম্বারসহ SYN পাঠায়।'
      },
      {
        step: 2,
        titleEn: 'SYN-ACK',
        titleBn: 'সিন-অ্যাক (SYN-ACK)',
        detailEn: 'Server acknowledges client ISN and sends its own server ISN.',
        detailBn: 'সার্ভার ক্লায়েন্টের প্রস্তাব গ্রহণ করে পাল্টা নিজের সিকোয়েন্সসহ উত্তর দেয়।'
      },
      {
        step: 3,
        titleEn: 'ACK & Established',
        titleBn: 'অ্যাক ও সংযোগ প্রতিষ্ঠিত',
        detailEn: 'Client acknowledges server ISN. Full duplex communication stream opens.',
        detailBn: 'ক্লায়েন্ট স্বীকৃতি পাঠায় এবং উভয়ের মাঝে দ্বি-মুখী ডেটা পাইপ চালু হয়।'
      },
      {
        step: 4,
        titleEn: 'Reliable Data Transfer',
        titleBn: 'নির্ভরযোগ্য ডেটা স্থানান্তর',
        detailEn: 'Payload segments are verified with ACK responses and sliding window.',
        detailBn: 'প্রতিটি প্যাকেটের প্রাপ্তি নিশ্চিত করে এগিয়ে যাওয়া হয়।'
      },
      {
        step: 5,
        titleEn: 'Connection Teardown (FIN/ACK)',
        titleBn: 'সংযোগ সমাপ্তি (FIN/ACK)',
        detailEn: 'Both endpoints exchange FIN and ACK flags to gracefully close sockets.',
        detailBn: 'উভয় পক্ষ FIN পাঠিয়ে নিরাপদে সকেট বন্ধ করে।'
      }
    ],
    realLifeExample: {
      en: 'Think of a registered courier parcel: You do not leave a valuable diamond ring on a random doorstep. The courier arrives, asks for your signature on delivery, and confirms the recipient ID. If nobody signs, the courier re-delivers the package the next morning.',
      bn: 'রেজিস্ট্রি চিঠির মতো: মূল্যবান কোনো চিঠি দরজায় ফেলে রেখে যাওয়া হয় না। প্রাপক নিজে স্বাক্ষর করে চিঠি গ্রহণ করেন এবং ডাকপিয়ন নিশ্চিত হন যে চিঠি সঠিক হাতে পৌঁছেছে। স্বাক্ষর না পেলে চিঠি পুনরায় পাঠানো হয়।'
    },
    technicalTerms: [
      {
        term: 'Sequence Number (SEQ)',
        banglaMeaning: 'প্যাকেটের ক্রমিক সংখ্যা',
        explanationEn: 'The byte offset number identifying the exact position of data in the stream.',
        explanationBn: 'প্রতিটি ডেটা বাইট কোন ক্রমানুসারে সাজানো হবে তা নির্দেশকারী সংখ্যা।'
      },
      {
        term: 'Acknowledgment Number (ACK)',
        banglaMeaning: 'প্রাপ্তিস্বীকার সংখ্যা',
        explanationEn: 'The next sequence number that the receiving station expects to receive.',
        explanationBn: 'প্রাপক পরবর্তীতে প্রেরকের কাছ থেকে কোন সিকোয়েন্স আশা করছে তার স্বীকৃতি।'
      }
    ],
    advantages: [
      {
        en: '100% reliable in-order delivery: Lost packets are retransmitted automatically.',
        bn: 'শতভাগ নির্ভরযোগ্যতা: হারিয়ে যাওয়া প্যাকেট স্বয়ংক্রিয়ভাবে রিট্রান্সমিট হয়।'
      },
      {
        en: 'Flow control: Window sizes prevent fast senders from crashing slow receivers.',
        bn: 'ফ্লো কন্ট্রোল: রিসিভারের মেমরি ফুল হওয়া ঠেকাতে গতির ভারসাম্য রক্ষা করে।'
      }
    ],
    disadvantages: [
      {
        en: 'Higher overhead: 20-byte headers, handshake latency, and retransmissions introduce lag for live streaming.',
        bn: 'অতিরিক্ত ওভারহেড: ৩-ওয়ে হ্যান্ডশেক ও বড় হেডারের কারণে লাইভ ভিডিও বা অনলাইন গেমিংয়ে সামান্য ল্যাগ সৃষ্টি হয়।'
      }
    ],
    comparison: [
      {
        techA: 'TCP',
        techB: 'UDP',
        criteria: 'Reliability',
        diffEn: 'Guarantees delivery, retransmits lost packets.',
        diffBn: 'হারিয়ে যাওয়া প্যাকেট পুনরায় পাঠিয়ে শতভাগ ডেটা নিশ্চিত করে।'
      },
      {
        techA: 'TCP',
        techB: 'UDP',
        criteria: 'Connection State',
        diffEn: 'Connection-oriented (Requires 3-Way Handshake).',
        diffBn: 'কানেকশনলেস: কোনো হ্যান্ডশেক ছাড়াই সরাসরি প্যাকেট ছুঁড়ে দেয়।'
      }
    ],
    practicalCommands: [
      {
        titleEn: 'Inspect Active TCP Connections and States (Linux/Windows)',
        titleBn: 'সক্রিয় টিসিপি কানেকশন ও সকেট দেখা',
        command: 'ss -tan  # Modern Linux\nnetstat -ano  # Windows',
        explanationEn: 'Displays local and foreign socket addresses, connection state (ESTABLISHED, TIME-WAIT, LISTEN), and process PIDs.',
        explanationBn: 'কোন কোন পোর্টে টিসিপি কানেকশন সচল আছে এবং সকেটের বর্তমান অবস্থা দেখায়।'
      }
    ],
    commonMistakes: [
      {
        mistakeEn: 'Believing that UDP is obsolete because TCP is reliable.',
        mistakeBn: 'মনে করা যে টিসিপি থাকায় ইউডিপি (UDP) অপ্রয়োজনীয়।',
        correctionEn: 'Real-time applications (VoIP, DNS, video games, Zoom calls) cannot wait for retransmissions; they rely on UDP for minimum latency!',
        correctionBn: 'ভিডিও কল বা গেমিংয়ে পুরোনো প্যাকেট পুনরায় আনার চেয়ে লাইভ থাকা জরুরি, তাই তারা ইউডিপি পছন্দ করে।'
      }
    ],
    importantNotes: [
      {
        en: 'If a client attempts to connect to a port that has no listening service, the server responds with a TCP RST (Reset) flag, immediately terminating the attempt.',
        bn: 'কোনো বন্ধ পোর্টে টিসিপি হ্যান্ডশেক পাঠানোর চেষ্টা করলে সার্ভার RST (Reset) ফ্ল্যাগ পাঠিয়ে রিকোয়েস্ট তৎক্ষণাৎ বাতিল করে দেয়।'
      }
    ],
    knowledgeCheck: [
      {
        questionEn: 'What are the three flags exchanged in order during the TCP connection establishment?',
        questionBn: 'টিসিপি সংযোগ প্রতিষ্ঠায় কোন তিনটি ফ্ল্যাগ ক্রমানুসারে আদান-প্রদান করা হয়?',
        options: [
          'FIN, FIN-ACK, ACK',
          'SYN, SYN-ACK, ACK',
          'RST, PSH, URG',
          'DISCOVER, OFFER, REQUEST'
        ],
        correctIndex: 1,
        explanationEn: 'The TCP 3-Way Handshake sequence is always SYN -> SYN-ACK -> ACK.',
        explanationBn: 'টিসিপি ৩-ওয়ে হ্যান্ডশেক সর্বদা SYN -> SYN-ACK -> ACK ক্রমানুসারে সম্পন্ন হয়।'
      }
    ],
    practiceQuestions: [
      {
        questionEn: 'Scenario: Wireshark shows a client sending repeated SYN packets to port 80, but receives no SYN-ACK or RST. What is happening in the network?',
        questionBn: 'দৃশ্যপট: ওয়্যারশার্কে দেখা যাচ্ছে ক্লায়েন্ট বারবার পোর্ট ৮০-তে SYN পাঠাচ্ছে কিন্তু কোনো উত্তর পাচ্ছে না। সমস্যা কী?',
        scenarioEn: 'A network firewall is silently dropping (filtering) the packets without replying, or the destination IP is completely unreachable.',
        scenarioBn: 'মাঝের কোনো ফায়ারওয়াল বা রাউটার সাইলেন্টলি প্যাকেটটি ড্রপ করছে, অথবা সার্ভার আইপিটি বন্ধ আছে।'
      }
    ],
    interactiveSimulator: 'tcp'
  },
  'cidr-notation-subnet-masks': {
    id: 'cidr-notation-subnet-masks',
    moduleId: 'level-04-ip-subnetting',
    moduleTitleEn: 'LEVEL 04 — IP Addressing and Subnetting',
    moduleTitleBn: 'লেভেল ০৪ — আইপি অ্যাড্রেসিং এবং সাবনেটিং',
    levelNumber: 4,
    difficulty: 'Elementary',
    durationMinutes: 35,
    topicTitleEn: 'CIDR Subnetting Math, Binary Bit Masks, and Host Range Planning',
    topicTitleBn: 'সিআইডিআর সাবনেটিং গণিত, বাইনারি বিট মাস্ক এবং হোস্ট রেঞ্জ পরিকল্পনা',
    englishDefinition: 'Classless Inter-Domain Routing (CIDR, RFC 4632) is an IP addressing scheme that eliminates rigid Class A, B, and C boundaries by using a variable-length prefix slash notation (e.g. /24, /27) to divide 32 binary bits into Network Bits and Host Bits.',
    banglaMeaning: 'ক্লাসলেস ইন্টার-ডোমেন রাউটিং (CIDR) হলো এমন একটি আধুনিক আইপি পদ্ধতি, যা পুরোনো ক্লাস এ, বি ও সি-এর অপচয় রোধ করে স্ল্যাশ নোটেশন (যেমন /২৪, /২৭) দিয়ে ৩২টি বাইনারি বিটকে প্রয়োজনমাফিক নেটওয়ার্ক ও হোস্ট অংশে ভাগ করে।',
    englishExplanation: 'An IPv4 address consists of exactly 32 binary bits divided into four 8-bit octets. A subnet mask serves as a bitwise filter: binary 1s indicate the immutable Network Portion, while binary 0s denote the assignable Host Portion. The universal formula for calculating total IP addresses in a subnet is 2^H (where H is the number of host bits). The usable host count is 2^H - 2, because two addresses are permanently reserved: the Network Address (all host bits 0) and the Broadcast Address (all host bits 1).',
    banglaExplanation: 'একটি আইপিভি৪ অ্যাড্রেসে মোট ৩২টি বাইনারি বিট থাকে, যা ৪টি অকটেটে বিভক্ত। সাবনেট মাস্কের কাজ হলো কোন বিটগুলো নেটওয়ার্কের আর কোনগুলো ডিভাইসের (হোস্ট) তা আলাদা করা। মাস্কের মধ্যে যতগুলো ১ থাকে তা নেটওয়ার্কের অংশ নির্দেশ করে, আর যতগুলো ০ থাকে তা হোস্টের সংখ্যা নির্ধারণ করে। কোনো সাবনেটে মোট আইপি বের করার সূত্র হলো ২^H (যেখানে H হলো ০ বা হোস্ট বিটের সংখ্যা)। তবে ব্যবহারের উপযোগী হোস্ট আইপি হয় (২^H - ২), কারণ দুটি আইপি কখনোই কম্পিউটারে বসানো যায় না: একটি নেটওয়ার্ক অ্যাড্রেস (সব বিট ০) এবং অন্যটি ব্রডকাস্ট অ্যাড্রেস (সব বিট ১)।',
    whyNeededEn: 'Without subnetting, an organization needing 50 IP addresses would be assigned an entire legacy Class C network (256 IPs, wasting 80%) or Class B network (65,536 IPs, wasting 99.9%). Subnetting prevents the exhaustion of IPv4 address space.',
    whyNeededBn: 'সাবনেটিং না থাকলে কোনো অফিসে ৫০টি আইপি লাগলেও পুরো ২৫৬ বা ৬৫,৫৩৬টি আইপি দিতে হতো, যার ৯৯% নষ্ট হতো। সাবনেটিং বিশ্বব্যাপী আইপিভি৪ অপচয় রোধ করার প্রধান অস্ত্র।',
    whereUsedEn: 'In every router configuration, enterprise VLAN segmentation, ISP customer allocations, and cloud VPC private subnets.',
    whereUsedBn: 'প্রতিটি রাউটার, অফিসের ভি-ল্যান নেটওয়ার্ক, আইএসপির গ্রাহক সংযোগ এবং ক্লাউড ভিপিসি সাবনেট ডিজাইনে ব্যবহৃত হয়।',
    howItWorksEn: 'Bitwise ANDing: A computer takes its 32-bit IP and performs a bitwise AND with its Subnet Mask. The resulting binary string is its exact Network ID.',
    howItWorksBn: 'কম্পিউটার নিজের আইপি এবং সাবনেট মাস্কের মধ্যে বাইনারি এন্ড (AND) অপারেশন চালিয়ে নিজের নেটওয়ার্ক আইডি বের করে নেয়।',
    internalMechanismEn: 'Calculation mechanics: /27 prefix means 27 network bits (11111111.11111111.11111111.11100000) = 255.255.255.224. Remaining host bits H = 32 - 27 = 5. Total IPs = 2^5 = 32. Usable Hosts = 32 - 2 = 30. Block size = 256 - 224 = 32.',
    internalMechanismBn: 'হিসাবের মেকানিজম: /২৭ মানে ২৭টি ১ বিট = 255.255.255.224। বাকি হোস্ট বিট H = ৩২ - ২৭ = ৫। মোট আইপি = ২^৫ = ৩২টি। ব্যবহারযোগ্য পিসি = ৩২ - ২ = ৩০টি। ব্লক সাইজ = ২৫৬ - ২২৪ = ৩২।',
    stepByStep: [
      {
        step: 1,
        titleEn: 'Count Host Bits (H = 32 - Prefix)',
        titleBn: 'হোস্ট বিট সংখ্যা বের করা',
        detailEn: 'Subtract CIDR prefix from 32. For /26: H = 32 - 26 = 6 host bits.',
        detailBn: '৩২ থেকে প্রিফিক্স বিয়োগ দিন। যেমন /২৬ এর জন্য ৩২ - ২৬ = ৬টি হোস্ট বিট।'
      },
      {
        step: 2,
        titleEn: 'Calculate Total IPs (2^H)',
        titleBn: 'মোট আইপি সংখ্যা হিসাব',
        detailEn: 'Raise 2 to power of H. For 6 host bits: 2^6 = 64 total addresses.',
        detailBn: '২-এর পাওয়ার হোস্ট বিট করুন। ২^৬ = মোট ৬৪টি আইপি।'
      },
      {
        step: 3,
        titleEn: 'Calculate Usable Hosts (2^H - 2)',
        titleBn: 'ব্যবহারযোগ্য হোস্ট আইপি হিসাব',
        detailEn: 'Subtract 2 for Network ID and Broadcast. 64 - 2 = 62 usable computers.',
        detailBn: 'নেটওয়ার্ক ও ব্রডকাস্টের জন্য ২টি বাদ দিন। ৬৪ - ২ = ৬২টি কম্পিউটার চালানো যাবে।'
      },
      {
        step: 4,
        titleEn: 'Determine Subnet Mask & Block Size',
        titleBn: 'সাবনেট মাস্ক ও ব্লক সাইজ নির্ধারণ',
        detailEn: 'Block size is 64. Subnet boundaries are .0, .64, .128, .192.',
        detailBn: 'ব্লক সাইজ ৬৪। তাই সাবনেটগুলো হবে .০, .৬৪, .১২৮, .১৯২।'
      }
    ],
    realLifeExample: {
      en: 'Think of a 256-room apartment building: Instead of leaving all rooms as one giant open dormitory where everyone hears everyone else\'s noise (Broadcast), you construct concrete security walls dividing the building into 4 private sub-apartments of 64 rooms each.',
      bn: 'একটি ২৫৬ কক্ষের ভবনের কথা ভাবুন: সবাইকে একটিমাত্র বড় মেসে না রেখে যেখানে একজনের চিৎকারে সবার পড়াশোনা নষ্ট হয় (Broadcast), আপনি দেয়াল তুলে ভবনটিকে ৪টি আলাদা ফ্ল্যাটে (Subnet) ভাগ করলেন, যার প্রতিটিতে ৬৪টি করে কামরা রয়েছে।'
    },
    technicalTerms: [
      {
        term: 'CIDR (Classless Inter-Domain Routing)',
        banglaMeaning: 'ক্লাসবিহীন আইপি অ্যাড্রেসিং পদ্ধতি',
        explanationEn: 'Prefix notation representing subnet masks by counting consecutive 1-bits (e.g. /24).',
        explanationBn: 'মাস্কের ১-বিটের সংখ্যা দিয়ে সংক্ষেপে আইপি রেঞ্জ প্রকাশের স্ল্যাশ পদ্ধতি (যেমন /২৪)।'
      },
      {
        term: 'Broadcast Address',
        banglaMeaning: 'ব্রডকাস্ট ঠিকানা',
        explanationEn: 'The highest IP in a subnet (all host bits 1) used to send messages to all hosts.',
        explanationBn: 'সাবনেটের সর্বশেষ আইপি ঠিকানা, যা দিয়ে ঐ সাবনেটের সবাইকে বার্তা পাঠানো যায়।'
      }
    ],
    advantages: [
      {
        en: 'Efficient IP allocation: Tailors exact subnet sizes for branch offices.',
        bn: 'আইপি সাশ্রয়: প্রয়োজন অনুযায়ী নিখুঁত সাইজের সাবনেট তৈরি করা যায়।'
      },
      {
        en: 'Performance optimization: Limits broadcast traffic to small local domains.',
        bn: 'উচ্চ পারফরম্যান্স: ব্রডকাস্ট ট্রাফিক লোকাল সাবনেটে সীমাবদ্ধ রেখে নেটওয়ার্ক গতি বাড়ায়।'
      }
    ],
    disadvantages: [
      {
        en: 'Requires binary calculation skills to prevent IP overlapping errors.',
        bn: 'সাবনেট হিসাব করতে ভুলের কারণে নেটওয়ার্ক বিচ্ছিন্ন হওয়ার ঝুঁকি থাকে।'
      }
    ],
    comparison: [
      {
        techA: 'CIDR (/24, /27)',
        techB: 'Classful (Class A, B, C)',
        criteria: 'Flexibility',
        diffEn: 'Any prefix length from /8 to /30.',
        diffBn: 'নির্দিষ্ট ৩টি ক্লাসে আটকে ছিল, ফলে বিশাল অপচয় হতো।'
      }
    ],
    practicalCommands: [
      {
        titleEn: 'Calculate Subnet on Linux/CLI',
        titleBn: 'লিনাক্সে আইপিক্যালক দিয়ে সাবনেট হিসাব',
        command: 'ipcalc 192.168.10.0/26',
        explanationEn: 'Calculates network, netmask, broadcast, min/max host addresses, and binary breakdown.',
        explanationBn: 'নেটওয়ার্ক, মাস্ক, ব্রডকাস্ট এবং হোস্ট রেঞ্জ এক কমান্ডে বের করে দেয়।'
      }
    ],
    commonMistakes: [
      {
        mistakeEn: 'Assigning the Network Address or Broadcast Address to a computer NIC.',
        mistakeBn: 'কম্পিউটারের নেটওয়ার্ক কার্ডে নেটওয়ার্ক বা ব্রডকাস্ট আইপি বসানো।',
        correctionEn: 'Operating systems will reject these addresses! Always choose an IP between the first and last usable host range.',
        correctionBn: 'অপারেটিং সিস্টেম এই দুটি আইপি গ্রহণ করবে না। সর্বদা প্রথম ও শেষ আইপির মধ্যবর্তী রেঞ্জ ব্যবহার করতে হবে।'
      }
    ],
    importantNotes: [
      {
        en: 'A /30 subnet yields 4 total addresses and exactly 2 usable hosts (2^2 - 2 = 2)—making it the classic standard for point-to-point router serial links.',
        bn: 'একটি /৩০ সাবনেটে মোট ৪টি ও ব্যবহারযোগ্য ঠিক ২টি আইপি থাকে—যা দুটি রাউটারের সরাসরি সংযোগের আন্তর্জাতিক স্ট্যান্ডার্ড।'
      }
    ],
    knowledgeCheck: [
      {
        questionEn: 'How many usable host IP addresses are provided by a /28 subnet?',
        questionBn: 'একটি /২৮ সাবনেটে কতটি ব্যবহারযোগ্য হোস্ট আইপি পাওয়া যায়?',
        options: [
          '16 hosts',
          '14 hosts',
          '30 hosts',
          '12 hosts'
        ],
        correctIndex: 1,
        explanationEn: 'Host bits = 32 - 28 = 4. Total = 2^4 = 16. Usable = 16 - 2 = 14 hosts.',
        explanationBn: '৩২ - ২৮ = ৪টি হোস্ট বিট। মোট আইপি ২^৪ = ১৬টি। ব্যবহারযোগ্য ১৬ - ২ = ১৪টি।'
      }
    ],
    practiceQuestions: [
      {
        questionEn: 'Design Problem: An engineering department has 25 PCs. What is the smallest CIDR prefix that satisfies this requirement without wasting addresses?',
        questionBn: 'ডিজাইন সমস্যা: একটি বিভাগে ২৫টি পিসি আছে। অপচয় ছাড়া সর্বনিম্ন কোন সিআইডিআর প্রিফিক্স ব্যবহার করতে হবে?',
        scenarioEn: '/27 provides 30 usable hosts (2^5 - 2 = 30), which fits 25 PCs with room for growth. A /28 only provides 14 hosts (too small).',
        scenarioBn: '/২৭ প্রিফিক্স ৩০টি ব্যবহারযোগ্য আইপি দেয়, যা ২৫টি পিসির জন্য উপযুক্ত। /২৮ দিলে মাত্র ১৪টি হতো যা দিয়ে হতো না।'
      }
    ],
    interactiveSimulator: 'subnet'
  }
};
