import { CurriculumModule } from './types';

export const level02Module: CurriculumModule = {
  id: 'level-02-devices-media',
  levelNumber: 2,
  tier: 'Beginner',
  titleEn: 'LEVEL 02 — Networking Devices and Physical Media',
  titleBn: 'লেভেল ০২ — নেটওয়ার্কিং ডিভাইস ও ফিজিক্যাল মিডিয়া',
  descEn: 'Comprehensive breakdown of networking hardware: NICs, Hubs, Switches, Routers, Modems, Firewalls, Load Balancers, and copper/optical transmission media.',
  descBn: 'নেটওয়ার্ক হার্ডওয়্যার ও তারের বিশদ বিশ্লেষণ: এনআইসি, হাব, সুইচ, রাউটার, মডেম, ফায়ারওয়াল, লোড ব্যালেন্সার এবং কপার ও ফাইবার অপটিক ক্যাবলিং।',
  estimatedHours: 14,
  iconName: 'Server',
  prerequisites: ['level-01-fundamentals'],
  relatedLabs: ['lab-switch-mac', 'lab-router-lookup'],
  topics: [
    {
      id: 'nic-architecture',
      titleEn: 'Network Interface Card (NIC): Architecture & Operation',
      titleBn: 'নেটওয়ার্ক ইন্টারফেস কার্ড (NIC): গঠন ও কার্যপ্রণালী',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Internal hardware diagram of a PCIe/USB NIC showing PHY chip, MAC controller, onboard buffer, and RJ45 magnetics.',
        descriptionBn: 'এনআইসি-র অভ্যন্তরীণ ফিজিক্যাল চিপ, ম্যাক কন্ট্রোলার, বাফার মেমরি ও ম্যাগনেটিক ফিল্টারের আর্কিটেকচার ডায়াগ্রাম।'
      },
      keyConcepts: ['PHY Layer', 'MAC Controller', 'Interrupt Requests', 'Hardware Burned-In Address'],
      summaryEn: 'How computers interface with physical network media at the hardware layer.',
      summaryBn: 'কম্পিউটার কীভাবে হার্ডওয়্যার লেভেলে নেটওয়ার্ক মাধ্যমের সাথে সংযোগ স্থাপন করে।'
    },
    {
      id: 'network-hub',
      titleEn: 'Network Hub: Multi-Port Repeater & Collision Domains',
      titleBn: 'নেটওয়ার্ক হাব: মাল্টি-পোর্ট রিপিটার ও কলিশন ডোমেইন',
      durationMinutes: 20,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Layer 1 dumb broadcast animation: Frame entering Port 1 is blindly blasted out of every single other port causing collisions.',
        descriptionBn: 'হাবের লেয়ার ১ ব্লাইন্ড ব্রডকাস্ট অ্যানিমেশন: পোর্ট ১-এ ঢোকা ফ্রেম অন্য সব পোর্টে ছড়িয়ে পড়ে কলিশন সৃষ্টি করছে।'
      },
      keyConcepts: ['Layer 1 Device', 'Shared Bandwidth', 'Single Collision Domain', 'Obsolete Technology'],
      summaryEn: 'Why legacy hubs cause network saturation and collisions across connected endpoints.',
      summaryBn: 'কেন পুরোনো হাবগুলো অতিরিক্ত ট্রাফিক ও কলিশন সৃষ্টি করে নেটওয়ার্ক ধীর করে দেয়।'
    },
    {
      id: 'network-switch',
      titleEn: 'Network Switch: Layer 2 Intelligent Frame Forwarding',
      titleBn: 'নেটওয়ার্ক সুইচ: লেয়ার ২ ইন্টেলিজেন্ট ফ্রেম ফরওয়ার্ডিং',
      durationMinutes: 35,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Interactive switch cutaway showing internal ASIC switching fabric, port buffers, and live populating CAM table.',
        descriptionBn: 'সুইচের অভ্যন্তরীণ এএসআইসি (ASIC) সুইচিং ফ্যাব্রিক এবং লাইভ ম্যাক টেবিল তৈরি হওয়ার ইন্টারঅ্যাকটিভ ডায়াগ্রাম।'
      },
      keyConcepts: ['ASIC Hardware', 'CAM Table', 'Microsegmentation', 'Dedicated Bandwidth per Port'],
      summaryEn: 'How switches eliminate collision domains and achieve wire-speed dedicated bandwidth.',
      summaryBn: 'কীভাবে সুইচ কলিশন ডোমেইন দূর করে প্রতিটি পোর্টে ডেডিকেটেড গতি নিশ্চিত করে।'
    },
    {
      id: 'network-router',
      titleEn: 'Network Router: Layer 3 Inter-Network Path Determination',
      titleBn: 'নেটওয়ার্ক রাউটার: লেয়ার ৩ ইন্টার-নেটওয়ার্ক পথ নির্ধারণ',
      durationMinutes: 35,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Animated router cross-section: receiving frame, stripping L2 header, inspecting IP in routing table, and writing new L2 header.',
        descriptionBn: 'রাউটারের প্যাকেট গ্রহণ, লেয়ার ২ ফ্রেম খুলে আইপি পরীক্ষা এবং নতুন ফ্রেম তৈরি করে গন্তব্যে পাঠানোর অ্যানিমেশন।'
      },
      keyConcepts: ['Layer 3 Gateway', 'Broadcast Domain Boundary', 'Routing Table Lookups', 'TTL Decrementing'],
      summaryEn: 'How routers connect distinct IP networks and make forwarding decisions.',
      summaryBn: 'কীভাবে রাউটার সম্পূর্ণ ভিন্ন দুটি নেটওয়ার্ককে যুক্ত করে সেরা রুট নির্বাচন করে।'
    },
    {
      id: 'modem-technologies',
      titleEn: 'Modem (Modulator-Demodulator): Digital to Analog Translation',
      titleBn: 'মডেম: ডিজিটাল ও অ্যানালগ সিগন্যাল রূপান্তর',
      durationMinutes: 20,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Oscilloscope waveform visual: Digital square waves modulated into analog sine waves for telephone/cable lines.',
        descriptionBn: 'ডিজিটাল স্কয়ার ওয়েভ সিগন্যাল কীভাবে অ্যানালগ সাইন ওয়েভে রূপান্তরিত হয়ে দীর্ঘ দূরত্বের মাধ্যমে যায় তার চিত্র।'
      },
      keyConcepts: ['Modulation', 'Demodulation', 'ISP Handshake', 'DSL/DOCSIS'],
      summaryEn: 'Bridging local digital computer networks with ISP analog/carrier lines.',
      summaryBn: 'লোকাল ডিজিটাল ডিভাইসকে আইএসপির অ্যানালগ বা অপটিক্যাল ক্যারিয়ার লাইনের সাথে যুক্ত করা।'
    },
    {
      id: 'repeater-and-bridge',
      titleEn: 'Repeaters and Bridges: Signal Regeneration and LAN Segmentation',
      titleBn: 'রিপিটার এবং ব্রিজ: সিগন্যাল রি-জেনারেশন ও ল্যান সেগমেন্টেশন',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Attenuated weak signal entering Repeater and coming out clean and amplified; Bridge inspecting MAC to segment two collisions.',
        descriptionBn: 'দুর্বল সিগন্যালকে রিপিটার দ্বারা অ্যামপ্লিফাই করা এবং ব্রিজ দ্বারা দুটি ল্যান সেগমেন্ট বিভক্ত করার চিত্র।'
      },
      keyConcepts: ['Signal Attenuation', '2-Port Bridge', 'Software Switching Predecessor', 'Collision Isolation'],
      summaryEn: 'The historical and operational significance of repeaters and bridges.',
      summaryBn: 'নেটওয়ার্ক ইতিহাসে রিপিটার ও ব্রিজের কার্যপদ্ধতি ও তাৎপর্য।'
    },
    {
      id: 'default-gateway-concept',
      titleEn: 'Default Gateway: Leaving the Local Subnet',
      titleBn: 'ডিফল্ট গেটওয়ে: লোকাল সাবনেটের বাইরে যোগাযোগের দুয়ার',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Decision flowchart: Host compares destination IP to its subnet mask: matches local -> send via ARP; remote -> forward to Default Gateway.',
        descriptionBn: 'কম্পিউটার আইপি তুলনা করে দেখে ডেস্টিনেশন একই নেটওয়ার্কে থাকলে সরাসরি পাঠায়, বাইরে হলে ডিফল্ট গেটওয়েতে পাঠায়।'
      },
      keyConcepts: ['Exit Point', 'Subnet Mask Evaluation', 'Router Interface IP', 'Routing Forwarding Step'],
      summaryEn: 'Why every networked device requires a default gateway IP to communicate with the world.',
      summaryBn: 'বাইরের ইন্টারনেটে যুক্ত হতে কেন প্রতিটি কম্পিউটারের একটি ডিফল্ট গেটওয়ে প্রয়োজন।'
    },
    {
      id: 'wireless-access-point',
      titleEn: 'Wireless Access Point (WAP): Radio Waves to Ethernet',
      titleBn: 'ওয়্যারলেস এক্সেস পয়েন্ট (WAP): রেডিও তরঙ্গ থেকে ইথারনেট রূপান্তর',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'RF radiation pattern from antenna converting 802.11 wireless frames into 802.3 wired Ethernet frames.',
        descriptionBn: 'অ্যান্টেনার মাধ্যমে বাতাসে প্রবাহিত ৮০২.১১ ওয়্যারলেস ফ্রেমকে ক্যাবলের ৮০২.৩ ইথারনেট ফ্রেমে রূপান্তরের চিত্র।'
      },
      keyConcepts: ['802.11 to 802.3 Translation', 'Autonomous vs Controller-based', 'SSID Broadcasting', 'Shared RF Medium'],
      summaryEn: 'Connecting Wi-Fi mobile clients directly into the wired infrastructure.',
      summaryBn: 'মোবাইল ও ল্যাপটপকে ওয়াই-ফাইয়ের মাধ্যমে ক্যাবলযুক্ত মূল নেটওয়ার্কে যুক্ত করার পদ্ধতি।'
    },
    {
      id: 'network-firewall-fundamentals',
      titleEn: 'Network Firewall Fundamentals: Packet Inspection & Security Zones',
      titleBn: 'নেটওয়ার্ক ফায়ারওয়াল ফান্ডামেন্টালস: প্যাকেট ইন্সপেকশন ও সিকিউরিটি জোন',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Security checkpoint: Packets inspected against 5-tuple ACL rules (Source IP, Dst IP, Src Port, Dst Port, Protocol); ALLOW vs DROP.',
        descriptionBn: '৫-টি বিষয়ের (সোর্স আইপি, ডেস্টিনেশন আইপি, পোর্ট, প্রোটোকল) ভিত্তিতে প্যাকেট অ্যালাউ বা ড্রপ করার চিত্র।'
      },
      keyConcepts: ['Stateful vs Stateless', '5-Tuple Matching', 'Default Deny Rule', 'DMZ Segmentation'],
      summaryEn: 'First line of network perimeter boundary defense and traffic policy enforcement.',
      summaryBn: 'নেটওয়ার্কের প্রবেশমুখে ট্রাফিক নিয়ন্ত্রণ ও ক্ষতিকারক প্যাকেট ব্লক করার প্রধান প্রাচীর।'
    },
    {
      id: 'load-balancer-fundamentals',
      titleEn: 'Load Balancer Fundamentals: Traffic Distribution & High Availability',
      titleBn: 'লোড ব্যালেন্সার ফান্ডামেন্টালস: ট্রাফিক বণ্টন ও উচ্চ প্রাপ্যতা',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Virtual IP (VIP) receiving 1,000 requests and distributing them evenly across a farm of 4 web servers via Round-Robin.',
        descriptionBn: 'ভার্চুয়াল আইপিতে আসা হাজার হাজার রিকোয়েস্টকে রাউন্ড-রবিন নিয়মে ৪টি সার্ভারে সমানভাবে ভাগ করে দেওয়ার দৃশ্য।'
      },
      keyConcepts: ['VIP', 'Round-Robin', 'Health Checks', 'Layer 4 vs Layer 7'],
      summaryEn: 'Distributing incoming network requests across multiple back-end computing nodes.',
      summaryBn: 'একাধিক ব্যাক-এন্ড সার্ভারে নেটওয়ার্ক ট্রাফিকের ভারসাম্য বজায় রাখার নিয়ম।'
    },
    {
      id: 'ethernet-standards',
      titleEn: 'Ethernet Standards and IEEE 802.3 Evolution',
      titleBn: 'ইথারনেট স্ট্যান্ডার্ড ও আইইইই ৮০২.৩ এর বিবর্তন',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Evolution timeline table: 10BASE-T (10 Mbps) -> 100BASE-TX (Fast) -> 1000BASE-T (Gigabit) -> 10G/40G/100G Ethernet.',
        descriptionBn: '১০ এমবিপিএস থেকে শুরু করে গিগাবিট ও ১০০জি ইথারনেটের স্পিড, ক্যাবল দূরত্ব ও এনকোডিংয়ের তালিকা।'
      },
      keyConcepts: ['IEEE 802.3', 'CSMA/CD History', 'Baseband Signaling', 'Full Duplex Switching'],
      summaryEn: 'The dominant global wired LAN standard connecting billions of devices.',
      summaryBn: 'বিশ্বের সর্বাধিক ব্যবহৃত ক্যাবলভিত্তিক ল্যান যোগাযোগ স্ট্যান্ডার্ড।'
    },
    {
      id: 'twisted-pair-utp-stp',
      titleEn: 'Twisted Pair Cabling: UTP, STP, and Crosstalk Cancellation',
      titleBn: 'টুইস্টেড পেয়ার ক্যাবল: ইউটিপি, এসটিপি এবং ক্রসটক নিরসন',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Cutaway 3D diagram showing 4 twisted pairs with differential signaling cancelling out electromagnetic interference (EMI).',
        descriptionBn: '৪ জোড়া প্যাঁচানো তারে বিপরীত সিগন্যাল পাঠিয়ে কীভাবে বাইরের নয়েজ ও ক্রসটক দূর করা হয় তার থ্রিডি চিত্র।'
      },
      keyConcepts: ['Differential Signaling', 'Twist Rate Cancellation', 'UTP vs Shielded STP', 'EMI & RFI Protection'],
      summaryEn: 'Physics of electromagnetic interference cancellation in twisted copper wires.',
      summaryBn: 'প্যাঁচানো তামার তারে তড়িৎচৌম্বকীয় ব্যতিচার রোধ করার বৈজ্ঞানিক নিয়ম।'
    },
    {
      id: 'cable-categories-cat5e-cat8',
      titleEn: 'Ethernet Cable Categories: Cat5e, Cat6, Cat6a, Cat7, and Cat8',
      titleBn: 'ইথারনেট ক্যাবল ক্যাটাগরি: Cat5e, Cat6, Cat6a, Cat7 এবং Cat8',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Interactive comparison matrix: Frequency (MHz), Max Data Rate (Gbps), Max Distance (m), and Shielding type per category.',
        descriptionBn: 'ক্যাটাগরি ভিত্তিক ফ্রিকোয়েন্সি (মেগাহার্টজ), গতি (জিবিপিএস) এবং সর্বোচ্চ দূরত্বের তুলনামূলক ছক।'
      },
      keyConcepts: ['Bandwidth (MHz)', 'Max Distance (100m)', 'Alien Crosstalk', 'Datacenter vs Home Use'],
      summaryEn: 'Selecting the appropriate copper specification for corporate and datacenter installations.',
      summaryBn: 'বিভিন্ন ক্যাটাগরির তারের সক্ষমতা এবং সঠিক প্রজেক্টে উপযুক্ত ক্যাবল নির্বাচন।'
    },
    {
      id: 'rj45-pinouts-wiring',
      titleEn: 'RJ45 Connectors & Color Codes: T568A vs T568B Pinouts',
      titleBn: 'RJ45 কানেক্টর ও তারের কালার কোড: T568A বনাম T568B পিনআউট',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Interactive crimping tool visual showing the 8 colored wires aligned into the clear 8P8C modular RJ45 plug in exact order.',
        descriptionBn: '৮টি রঙিন তারের ক্রম সাজিয়ে আরজে৪৫ কানেক্টরে ক্র্যাম্পিং করার ইন্টারঅ্যাকটিভ কালার কোড গাইড।'
      },
      keyConcepts: ['T568A vs T568B', 'Straight-Through vs Crossover', 'Auto-MDIX', 'Pin 1 to Pin 8 Functions'],
      summaryEn: 'Industry standard wiring order required to crimp and terminate Ethernet cables.',
      summaryBn: 'ইথারনেট ক্যাবল সঠিকভাবে তৈরি ও পাঞ্চ করার আন্তর্জাতিক কালার কোড নিয়মাবলী।'
    },
    {
      id: 'fiber-optic-cabling',
      titleEn: 'Fiber Optic Cabling: Single-Mode vs Multi-Mode Optics',
      titleBn: 'ফাইবার অপটিক ক্যাবল: সিঙ্গেল-মোড বনাম মাল্টি-মোড অপটিক্স',
      durationMinutes: 35,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Light refraction laser animation: Single-mode (9µm core, straight laser beam, 100km) vs Multi-mode (50µm core, bouncing LED light, 500m).',
        descriptionBn: 'সিঙ্গেল-মোড (সরাসরি লেজার রশ্মি) বনাম মাল্টি-মোড (প্রতিফলিত আলো)-এর অভ্যন্তরীণ গ্লাস কোরের আলো প্রতিসরণ চিত্র।'
      },
      keyConcepts: ['Total Internal Reflection', 'Core & Cladding', 'Modal Dispersion', 'Wavelengths (850nm, 1310nm, 1550nm)'],
      summaryEn: 'Physics of transmitting high-speed digital photons over silicon glass fibers across vast distances.',
      summaryBn: 'কাঁচের সূক্ষ্ম তন্তুর মধ্য দিয়ে আলোর পূর্ণ অভ্যন্তরীণ প্রতিফলনে দ্রুতগতির ডেটা পরিবহন।'
    },
    {
      id: 'coaxial-cable',
      titleEn: 'Coaxial Cabling: Construction and Legacy Uses',
      titleBn: 'কোএক্সিয়াল ক্যাবল: গঠন ও ব্যবহার',
      durationMinutes: 20,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Concentric cutaway: Center copper core, dielectric insulator, braided metallic shield, and outer plastic jacket.',
        descriptionBn: 'সেন্টার কপার কোর, ডাই-ইলেকট্রিক ইনসুলেটর ও মেটালিক শিল্ডের স্তরভিত্তিক অভ্যন্তরীণ দৃশ্য।'
      },
      keyConcepts: ['Center Conductor', 'Braided Shielding', 'BNC Connector', 'DOCSIS Cable Modems'],
      summaryEn: 'Structure of coaxial lines used in early 10BASE2/10BASE5 LANs and modern broadband cable modems.',
      summaryBn: 'কোএক্সিয়াল তারের স্তরভিত্তিক গঠন এবং ব্রডব্যান্ড মডেমে এর বর্তমান ব্যবহার।'
    },
    {
      id: 'patch-panels-racks',
      titleEn: 'Patch Panels, Keystones, and Server Rack Cabling',
      titleBn: 'প্যাচ প্যানেল, কিস্টোন এবং সার্ভার র্যাক ক্যাবলিং',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Structured cabling rack view: Wall keystones -> Bulk horizontal cable -> 24-Port Patch Panel -> Short patch cords -> Switch.',
        descriptionBn: 'স্ট্রাকচার্ড ক্যাবলিং ডায়াগ্রাম: দেয়ালের পোর্ট থেকে প্যাচ প্যানেল হয়ে সুইচে সুশৃঙ্খল সংযোগ।'
      },
      keyConcepts: ['Structured Cabling', 'Punch-Down Block 110', 'Port Labeling', 'Strain Relief'],
      summaryEn: 'Professional structured cabling standards for server rooms and enterprise buildings.',
      summaryBn: 'সার্ভার রুম ও এন্টারপ্রাইজ ভবনে সুশৃঙ্খল তার বিন্যাসের আন্তর্জাতিক নিয়মাবলী।'
    },
    {
      id: 'sfp-transceivers-interfaces',
      titleEn: 'SFP, SFP+, and QSFP Modular Transceivers',
      titleBn: 'SFP, SFP+ এবং QSFP মডুলার ট্রান্সসিভার',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Hot-pluggable optical module sliding into a switch SFP cage with LC duplex fiber connectors attached.',
        descriptionBn: 'সুইচের এসএফপি পোর্টে অপটিক্যাল মডিউল ও ফাইবার ক্যাবল লাগানোর ইন্টারঅ্যাকটিভ চিত্র।'
      },
      keyConcepts: ['Hot-Pluggable', '1G SFP vs 10G SFP+ vs 100G QSFP28', 'LC Connector', 'Direct Attach Copper (DAC)'],
      summaryEn: 'Swappable optical transceiver interfaces used in modern data center switches.',
      summaryBn: 'আধুনিক ডাটা সেন্টার সুইচে ব্যবহৃত বিভিন্ন গতির অপটিক্যাল মডিউলের পরিচিতি।'
    }
  ]
};
