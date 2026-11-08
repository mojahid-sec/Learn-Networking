import { CurriculumModule } from './types';

export const level01Module: CurriculumModule = {
  id: 'level-01-fundamentals',
  levelNumber: 1,
  tier: 'Beginner',
  titleEn: 'LEVEL 01 — Networking Fundamentals',
  titleBn: 'লেভেল ০১ — নেটওয়ার্কিং ফান্ডামেন্টালস',
  descEn: 'Foundational concepts of computer networking: definitions, historical evolution, architectures, topologies, switching mechanisms, and transmission physics.',
  descBn: 'কম্পিউটার নেটওয়ার্কের মৌলিক ভিত্তি: সংজ্ঞা, বিবর্তন, আর্কিটেকচার, টপোলজি, সুইচিং পদ্ধতি এবং ডেটা স্থানান্তরের প্রাথমিক ধারণা।',
  estimatedHours: 12,
  iconName: 'Network',
  prerequisites: ['Basic Computer Literacy'],
  relatedLabs: ['lab-switch-mac'],
  topics: [
    {
      id: 'intro-computer-networking',
      titleEn: 'Introduction to Computer Networking',
      titleBn: 'কম্পিউটার নেটওয়ার্কিং পরিচিতি',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Interactive diagram showing global nodes interconnected via transmission media sharing resources.',
        descriptionBn: 'ট্রান্সমিশন মিডিয়ার মাধ্যমে সংযুক্ত নোডগুলোর রিসোর্স শেয়ারিংয়ের ইন্টারেক্টিভ ডায়াগ্রাম।'
      },
      keyConcepts: ['Interconnection', 'Resource Sharing', 'Scalability'],
      summaryEn: 'Understand the definition and foundational philosophy of modern computer networking.',
      summaryBn: 'আধুনিক কম্পিউটার নেটওয়ার্কিংয়ের সংজ্ঞা ও মূল দর্শন জানুন।'
    },
    {
      id: 'what-is-a-computer-network',
      titleEn: 'What Is a Computer Network?',
      titleBn: 'কম্পিউটার নেটওয়ার্ক কী?',
      durationMinutes: 20,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Node-to-node topology visual highlighting sender, receiver, medium, protocol, and message.',
        descriptionBn: 'প্রেরক, প্রাপক, মাধ্যম, প্রোটোকল ও বার্তার সংযোগকারী টপোলজি ভিউ।'
      },
      keyConcepts: ['Nodes', 'Links', 'Communication Entities'],
      summaryEn: 'The 5 essential components of any telecommunication system.',
      summaryBn: 'যেকোনো যোগাযোগ ব্যবস্থার ৫টি অপরিহার্য উপাদান।'
    },
    {
      id: 'why-need-networks',
      titleEn: 'Why Do We Need Computer Networks?',
      titleBn: 'আমাদের কেন কম্পিউটার নেটওয়ার্ক প্রয়োজন?',
      durationMinutes: 20,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Before-and-after comparison visual: isolated computers with physical drives vs instantaneous networked sharing.',
        descriptionBn: 'বিচ্ছিন্ন কম্পিউটার বনাম তাৎক্ষণিক নেটওয়ার্কিং রিসোর্স শেয়ারিংয়ের তুলনামূলক চিত্র।'
      },
      keyConcepts: ['Hardware Sharing', 'Centralized Data', 'Reliability', 'Collaboration'],
      summaryEn: 'Business and technical drivers behind constructing local and global networks.',
      summaryBn: 'লোকাল ও গ্লোবাল নেটওয়ার্ক তৈরির ব্যবসায়িক ও প্রযুক্তিগত প্রয়োজনীয়তা।'
    },
    {
      id: 'history-of-networking',
      titleEn: 'History and Evolution of Networking',
      titleBn: 'নেটওয়ার্কিংয়ের ইতিহাস ও বিবর্তন',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Interactive chronological timeline from ARPANET (1969) to TCP/IP standardization and modern optical networks.',
        descriptionBn: 'আরপানেট (১৯৬৯) থেকে টিসিপি/আইপি স্ট্যান্ডার্ড এবং আধুনিক ফাইবার অপটিক নেটওয়ার্কের টাইমলাইন।'
      },
      keyConcepts: ['ARPANET', 'Packet Switching Pioneer', 'RFC Standards', 'Internet Explosion'],
      summaryEn: 'How packet-switching research evolved into the modern global Internet.',
      summaryBn: 'প্যাকেট-সুইচিং গবেষণা কীভাবে বর্তমানের বিশ্বব্যাপী ইন্টারনেটে রূপ নিল।'
    },
    {
      id: 'how-networks-work',
      titleEn: 'How Computer Networks Work: End-to-End Overview',
      titleBn: 'কম্পিউটার নেটওয়ার্ক কীভাবে কাজ করে: সার্বিক ধারণা',
      durationMinutes: 35,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'End-to-end animated flow showing an application request transformed into bits, propagated over wire, and rebuilt.',
        descriptionBn: 'অ্যাপ্লিকেশন রিকোয়েস্ট কীভাবে বিটে রূপান্তরিত হয়ে ক্যাবলের মাধ্যমে অপর প্রান্তে পৌঁছায় তার অ্যানিমেশন।'
      },
      keyConcepts: ['Encoding', 'Signaling', 'Addressing', 'Routing', 'Decoding'],
      summaryEn: 'The full physical and logical journey of data between two communicating endpoints.',
      summaryBn: 'যোগাযোগকারী দুটি প্রান্তের মধ্যে ডেটার ফিজিক্যাল ও লজিক্যাল পথচলা।'
    },
    {
      id: 'basic-network-terminology',
      titleEn: 'Basic Network Terminology',
      titleBn: 'নেটওয়ার্কিংয়ের মৌলিক পারিভাষিক শব্দ',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Glossary flashcards with clickable network node diagrams illustrating Host, Node, Link, Protocol, Packet, and Frame.',
        descriptionBn: 'হোস্ট, নোড, লিংক, প্রোটোকল, প্যাকেট ও ফ্রেমের সচিত্র ইন্টারঅ্যাকটিভ ফ্ল্যাশকার্ড।'
      },
      keyConcepts: ['Host vs Node', 'Payload vs Header', 'Full Duplex', 'PDU'],
      summaryEn: 'Standard networking lexicon every student must know.',
      summaryBn: 'প্রতিটি শিক্ষার্থীর জানা প্রয়োজন এমন প্রমিত নেটওয়ার্কিং পরিভাষা।'
    },
    {
      id: 'network-components',
      titleEn: 'Core Network Hardware & Software Components',
      titleBn: 'নেটওয়ার্কের মূল হার্ডওয়্যার ও সফটওয়্যার উপাদান',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Deconstructed network diagram illustrating End Devices, Intermediary Devices, and Media in an enterprise LAN.',
        descriptionBn: 'এন্টারপ্রাইজ ল্যানে এন্ড ডিভাইস, ইন্টারমিডিয়েট ডিভাইস ও ট্রান্সমিশন মিডিয়ার পৃথকীকরণ।'
      },
      keyConcepts: ['End Devices', 'Intermediary Devices', 'Network Media', 'NOS'],
      summaryEn: 'Physical hardware and network operating system layers.',
      summaryBn: 'ফিজিক্যাল হার্ডওয়্যার এবং নেটওয়ার্ক অপারেটিং সিস্টেম লেয়ার।'
    },
    {
      id: 'network-types-lan-wan-man-pan',
      titleEn: 'Network Types: LAN, WAN, MAN, PAN, and WLAN',
      titleBn: 'নেটওয়ার্কের প্রকারভেদ: ল্যান, ওয়ান, ম্যান, প্যান ও ডব্লিউ-ল্যান',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Concentric geographic map showing coverage ranges: PAN (10m), LAN (1km), MAN (50km), WAN (Global).',
        descriptionBn: 'কভারেজ এলাকার ভিত্তিতে প্যান, ল্যান, ম্যান ও ওয়ানের ভৌগোলিক স্কেলের মানচিত্র।'
      },
      keyConcepts: ['Coverage Area', 'Ownership', 'Latency Comparison', 'Transmission Speed'],
      summaryEn: 'Categorization of networks based on geographical scale and operational ownership.',
      summaryBn: 'ভৌগোলিক পরিধি ও মালিকানার ভিত্তিতে নেটওয়ার্কের শ্রেণিবিভাগ।'
    },
    {
      id: 'internet-intranet-extranet',
      titleEn: 'Internet, Intranet, and Extranet',
      titleBn: 'ইন্টারনেট, ইন্ট্রানেট এবং এক্সট্রানেট',
      durationMinutes: 20,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Security boundary perimeter diagram showing Public Internet, Private Intranet, and Partner Extranet with firewall tiers.',
        descriptionBn: 'ফায়ারওয়াল বাউন্ডারির মাধ্যমে পাবলিক ইন্টারনেট, প্রাইভেট ইন্ট্রানেট ও পার্টনার এক্সট্রানেটের স্তর।'
      },
      keyConcepts: ['Public vs Private', 'Authentication Boundaries', 'VPN Tunnels', 'Access Control'],
      summaryEn: 'Security and administrative demarcations in institutional networks.',
      summaryBn: 'প্রাতিষ্ঠানিক নেটওয়ার্কে নিরাপত্তা ও প্রশাসনিক সীমানা নির্ধারণ।'
    },
    {
      id: 'client-server-architecture',
      titleEn: 'Client-Server Architecture',
      titleBn: 'ক্লায়েন্ট-সার্ভার আর্কিটেকচার',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Multiple clients sending concurrent requests to dedicated database and web servers with response queues.',
        descriptionBn: 'মাল্টিপল ক্লায়েন্ট থেকে সার্ভারে কনকারেন্ট রিকোয়েস্ট ও রেসপন্স কিউ-এর অ্যানিমেশন।'
      },
      keyConcepts: ['Centralized Resources', 'Scalability', 'Single Point of Failure', 'Request-Response Model'],
      summaryEn: 'Centralized service model governing modern web and corporate infrastructure.',
      summaryBn: 'আধুনিক ওয়েব ও করপোরেট অবকাঠামোর কেন্দ্রীভূত সার্ভিস মডেল।'
    },
    {
      id: 'peer-to-peer-architecture',
      titleEn: 'Peer-to-Peer (P2P) Architecture',
      titleBn: 'পিয়ার-টু-পিয়ার (P2P) আর্কিটেকচার',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Decentralized mesh of workstations acting simultaneously as clients and servers distributing chunks.',
        descriptionBn: 'কোনো সেন্ট্রাল সার্ভার ছাড়া নোডগুলোর মধ্যে সরাসরি ফাইল খণ্ড শেয়ারিংয়ের মেশ অ্যানিমেশন।'
      },
      keyConcepts: ['Decentralized', 'Equal Node Roles', 'BitTorrent Principles', 'Fault Resilience'],
      summaryEn: 'Distributed computing where each workstation acts as both consumer and supplier.',
      summaryBn: 'বিকেন্দ্রীভূত ব্যবস্থা যেখানে প্রতিটি ওয়ার্কস্টেশন ক্লায়েন্ট ও সার্ভার উভয় হিসেবে কাজ করে।'
    },
    {
      id: 'network-topologies',
      titleEn: 'Network Topologies: Bus, Star, Ring, Mesh, Tree, and Hybrid',
      titleBn: 'নেটওয়ার্ক টপোলজি: বাস, স্টার, রিং, মেশ, ট্রি এবং হাইব্রিড',
      durationMinutes: 35,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Clickable interactive topology simulator: cut a cable or crash a node to see if communication continues.',
        descriptionBn: 'ইন্টারেক্টিভ টপোলজি সিমুলেটর: কোনো ক্যাবল বা নোড ডাউন হলে নেটওয়ার্কে কী প্রভাব পড়ে তা যাচাই করুন।'
      },
      keyConcepts: ['Physical vs Logical', 'Fault Tolerance', 'Single Point of Failure', 'Cabling Cost'],
      summaryEn: 'Geometric and structural arrangements of network nodes and cabling.',
      summaryBn: 'নেটওয়ার্ক নোড ও ক্যাবলিংয়ের জ্যামিতিক ও কাঠামোগত বিন্যাস।'
    },
    {
      id: 'communication-modes-duplex',
      titleEn: 'Network Communication Modes: Simplex, Half-Duplex, Full-Duplex',
      titleBn: 'কমিউনিকেশন মোড: সিমপ্লেক্স, হাফ-ডুপ্লেক্স ও ফুল-ডুপ্লেক্স',
      durationMinutes: 20,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Side-by-side visual: One-way radio (Simplex), Walkie-Talkie (Half-Duplex), and Telephone channel (Full-Duplex).',
        descriptionBn: 'একমুখী রেডিও (সিমপ্লেক্স), ওয়াকিটকি (হাফ-ডুপ্লেক্স) এবং টেলিফোন চ্যানেল (ফুল-ডুপ্লেক্স)-এর দৃশ্যমান তুলনা।'
      },
      keyConcepts: ['Directionality', 'CSMA/CD Dependency', 'Collisions in Half-Duplex', 'Gigabit Full-Duplex'],
      summaryEn: 'Directionality and concurrency of data transmission channels.',
      summaryBn: 'ডেটা চ্যানেলে সিগন্যাল প্রবাহের দিক ও যুগপত যোগাযোগের সক্ষমতা।'
    },
    {
      id: 'transmission-types-cast',
      titleEn: 'Transmission Types: Unicast, Broadcast, Multicast, and Anycast',
      titleBn: 'ট্রান্সমিশনের ধরণ: ইউনিকাস্ট, ব্রডকাস্ট, মাল্টিকাস্ট ও এনিকাস্ট',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Packet replication animation: 1-to-1 (Unicast), 1-to-All (Broadcast), 1-to-Group (Multicast), 1-to-Nearest (Anycast).',
        descriptionBn: 'প্যাকেট ডুপ্লিকেশন অ্যানিমেশন: ১-থেকে-১, ১-থেকে-সবাই, ১-থেকে-নির্দিষ্ট দল এবং ১-থেকে-নিকটতম নোড।'
      },
      keyConcepts: ['Destination Scopes', 'IGMP Groups', 'BGP Anycast DNS', 'Broadcast Flooding'],
      summaryEn: 'Addressing scopes determining packet delivery recipients across switches and routers.',
      summaryBn: 'সুইচ ও রাউটারে প্রাপক নির্ধারণের জন্য ৪টি ভিন্ন ডেলিভারি স্কোপ।'
    },
    {
      id: 'circuit-switching-vs-packet-switching',
      titleEn: 'Circuit Switching vs Packet Switching',
      titleBn: 'সার্কিট সুইচিং বনাম প্যাকেট সুইচিং',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Visual comparison: dedicated physical path reservation vs statistically multiplexed packet slice routing.',
        descriptionBn: 'ডেডিকেটেড পাথ রিজার্ভেশন (টেলিফোন) বনাম স্বাধীন প্যাকেট রাউটিংয়ের (ইন্টারনেট) অ্যানিমেশন।'
      },
      keyConcepts: ['Dedicated Connection', 'Statistical Multiplexing', 'Store-and-Forward', 'Jitter in Packets'],
      summaryEn: 'Why modern computer networks chose packet switching over legacy telecommunication circuits.',
      summaryBn: 'কেন কম্পিউটার নেটওয়ার্কে সার্কিট সুইচিংয়ের পরিবর্তে প্যাকেট সুইচিং গৃহীত হয়েছিল।'
    },
    {
      id: 'network-metrics-performance',
      titleEn: 'Network Performance: Bandwidth, Throughput, Latency, Jitter, Packet Loss',
      titleBn: 'নেটওয়ার্ক পারফরম্যান্স: ব্যান্ডউইথ, থ্রুপুট, লেটেন্সি, জিটার ও প্যাকেট লস',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Interactive pipe visual: Pipe width = Bandwidth, Flow rate = Throughput, Travel time = Latency, Variation = Jitter.',
        descriptionBn: 'ইন্টারেক্টিভ পাইপ সিমুলেশন: পাইপের প্রশস্ততা = ব্যান্ডউইথ, প্রবাহ = থ্রুপুট, সময় = লেটেন্সি, ওঠানামা = জিটার।'
      },
      keyConcepts: ['Theoretical vs Real', 'Propagation vs Transmission Delay', 'Bufferbloat', 'QoS Metrics'],
      summaryEn: 'The quantitative metrics defining the health, responsiveness, and capacity of any network.',
      summaryBn: 'যেকোনো নেটওয়ার্কের কার্যক্ষমতা ও মান নির্ণয়ের প্রধান গাণিতিক পরিমাপকসমূহ।'
    }
  ]
};
