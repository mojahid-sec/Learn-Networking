import { CurriculumModule } from './types';

export const level09Module: CurriculumModule = {
  id: 'level-09-services-architecture',
  levelNumber: 9,
  tier: 'Intermediate',
  titleEn: 'LEVEL 09 — Network Services & Enterprise Architecture',
  titleBn: 'লেভেল ০৯ — নেটওয়ার্ক সার্ভিসেস ও এন্টারপ্রাইজ আর্কিটেকচার',
  descEn: 'Core enterprise infrastructure services (DNS, DHCP DORA, NTP Strata, Reverse Proxies, LDAP/Active Directory) and structural network topologies: Cisco 3-Tier (Core, Distribution, Access), DMZ security perimeters, and redundancy design.',
  descBn: 'কোর এন্টারপ্রাইজ সার্ভিসেস (ডিএনএস, ডিএইচসিপি ডোরা, এনটিপি, রিভার্স প্রক্সি, অ্যাক্টিভ ডিরেক্টরি) এবং নেটওয়ার্কের বৃহৎ স্থাপত্য: সিসকো ৩-টায়ার মডেল (কোর, ডিস্ট্রিবিউশন, অ্যাক্সেস), ডিএমজেড পেরিমিটার ও রিডানড্যান্সি ডিজাইন।',
  estimatedHours: 18,
  iconName: 'Layers',
  prerequisites: ['level-05-protocols-ports', 'level-06-switching-vlan', 'level-07-routing'],
  relatedLabs: [],
  topics: [
    {
      id: 'network-services-overview',
      titleEn: 'Network Services Overview & The Infrastructure Stack',
      titleBn: 'নেটওয়ার্ক সার্ভিসেস ওভারভিউ এবং ইনফ্রাস্ট্রাকচার স্ট্যাক',
      durationMinutes: 20,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'The full enterprise services ecosystem: Client booting up -> DHCP assigns IP -> DNS resolves names -> NTP syncs time -> Kerberos/LDAP authenticates user -> Web/File services deliver applications.',
        descriptionBn: 'একটি ক্লায়েন্ট কম্পিউটার অন হওয়ার পর ডিএইচসিপি, ডিএনএস, এনটিপি ও এলডিএপি সার্ভিসের মধ্য দিয়ে ধাপে ধাপে নেটওয়ার্কে যুক্ত হওয়ার সমন্বিত চিত্র।'
      },
      keyConcepts: ['Infrastructure Services', 'Client Onboarding Sequence', 'Centralized vs Decentralized Services', 'Service Port Binding'],
      summaryEn: 'How complementary network services combine to create a frictionless operational environment for users and applications.',
      summaryBn: 'একাধিক নেটওয়ার্ক সার্ভিস কীভাবে একসাথে কাজ করে দৈনন্দিন ইন্টারনেট ও অফিস কার্যক্রম সচল রাখে।'
    },
    {
      id: 'dns-server-architecture-in-depth',
      titleEn: 'DNS Server Hierarchy & Complete Resolution Lifecycle',
      titleBn: 'ডিএনএস সার্ভার হায়ারার্কি এবং রেজোলিউশন লাইফসাইকেল',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Browser requests www.wikipedia.org -> Local Recursive Resolver -> Root Server (.) -> TLD Server (.org) -> Authoritative Nameserver (wikipedia.org) -> Returns A/AAAA Record -> Local DNS Cache.',
        descriptionBn: 'ওয়েব অ্যাড্রেস টাইপ করার পর লোকাল রিসলভার, রুট সার্ভার, টিএলডি সার্ভার এবং অথরিটেটিভ সার্ভারের মধ্যে ৮ ধাপের প্রশ্নোত্তরের নিখুঁত অ্যানিমেশন।'
      },
      keyConcepts: ['Root Name Servers (A-M)', 'Top-Level Domain (TLD) Servers', 'Authoritative vs Recursive Resolver', 'DNS Records (A, AAAA, CNAME, MX, TXT, PTR, NS, SOA)', 'DNS TTL Caching'],
      summaryEn: 'The global distributed hierarchical database translating human names into machine IP addresses.',
      summaryBn: 'গোটা বিশ্বের কম্পিউটারগুলোকে নামের ভিত্তিতে খুঁজে বের করার সবচেয়ে গুরুত্বপূর্ণ ডিস্ট্রিবিউটেড ডেটাবেস।'
    },
    {
      id: 'dhcp-server-dora-relay',
      titleEn: 'DHCP Architecture: DORA Process & IP Helper / Relay Agent',
      titleBn: 'ডিএইচসিপি আর্কিটেকচার: ডোরা (DORA) প্রসেস ও আইপি হেল্পার রিলে এজেন্ট',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Client in VLAN 10 broadcasts DHCP Discover -> Router receives broadcast, encapsulates as unicast IP Helper (DHCP Relay) across WAN to Central DHCP Server -> Server responds with DHCP Offer -> Request -> Acknowledge.',
        descriptionBn: 'ক্লায়েন্টের ব্রডকাস্ট পাঠানো, রাউটারের আইপি হেল্পার দিয়ে অন্য নেটওয়ার্কের সেন্ট্রাল সার্ভারে পাঠানো এবং আইপি লিজ পাওয়ার ডোরা (DORA) প্রক্রিয়া।'
      },
      keyConcepts: ['DORA Exchange (Discover, Offer, Request, ACK)', 'Broadcast to Unicast Conversion', 'DHCP Relay Agent (IP Helper-Address)', 'Lease Time & Renewal Timers (T1/T2)', 'Scope Options (Gateway, DNS, Domain)'],
      summaryEn: 'Automated IP address provisioning and how IP helper-addresses allow one central server to service hundreds of remote subnets.',
      summaryBn: 'স্বয়ংক্রিয়ভাবে আইপি অ্যাসাইন করা এবং সেন্ট্রাল সার্ভার দিয়ে ভিন্ন ভিন্ন ব্রাঞ্চ বা ভি-ল্যানে আইপি বণ্টনের পদ্ধতি।'
    },
    {
      id: 'web-and-reverse-proxy-servers',
      titleEn: 'Web Servers, Reverse Proxies, and Load Balancers',
      titleBn: 'ওয়েব সার্ভার, রিভার্স প্রক্সি এবং লোড ব্যালেন্সার',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Internet traffic hitting Nginx Reverse Proxy / Load Balancer over HTTPS (port 443 with TLS termination) -> distributes requests across 4 internal backend app servers (port 8080) using Round-Robin and Health Checks.',
        descriptionBn: 'বাইরের ইন্টারনেট থেকে আসা লক্ষ লক্ষ রিকোয়েস্ট রিভার্স প্রক্সির মাধ্যমে কীভাবে ভেতরের একাধিক সার্ভারে সমানভাবে বণ্টন করা হয়।'
      },
      keyConcepts: ['Forward vs Reverse Proxy', 'TLS Termination / Offloading', 'Load Balancing Algorithms (Round-Robin, Least Connections)', 'Health Checks & High Availability'],
      summaryEn: 'Protecting backend infrastructure and scaling web applications across high-concurrency clusters.',
      summaryBn: 'ওয়েবসাইট ও সার্ভারকে সাইবার নিরাপত্তা প্রদান এবং ট্রাফিকের চাপ সামলানোর রিভার্স প্রক্সি আর্কিটেকচার।'
    },
    {
      id: 'file-sharing-and-storage-services',
      titleEn: 'Network File Sharing & Storage Protocols (FTP, SFTP, SMB, NFS)',
      titleBn: 'নেটওয়ার্ক ফাইল শেয়ারিং ও স্টোরেজ প্রোটোকল (FTP, SFTP, SMB, NFS)',
      durationMinutes: 25,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Comparison of Windows SMB (port 445), Linux NFS (port 2049), Legacy FTP (ports 20/21 cleartext), and Secure SSH File Transfer (SFTP port 22 encrypted).',
        descriptionBn: 'উইন্ডোজের এসএমবি ফাইল শেয়ারিং, লিনাক্সের এনএফএস এবং এনক্রিপ্টেড এসএফটিপি ফাইল সার্ভারের কাজের ধরন ও পোর্টের তুলনা।'
      },
      keyConcepts: ['Server Message Block (SMB/CIFS)', 'Network File System (NFS)', 'SFTP vs FTPS vs FTP', 'Storage Area Network (SAN) vs NAS'],
      summaryEn: 'How distributed operating systems share drives, files, and centralized storage pools across local and wide-area networks.',
      summaryBn: 'অফিসের কম্পিউটারগুলোর মধ্যে সেন্ট্রাল হার্ডডিস্ক ও ফাইল শেয়ার করার টেকনোলজি।'
    },
    {
      id: 'ntp-time-synchronization-strata',
      titleEn: 'NTP (Network Time Protocol) & Stratum Hierarchy',
      titleBn: 'এনটিপি (Network Time Protocol) এবং স্ট্রাটাম হায়ারার্কি',
      durationMinutes: 25,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Stratum clock hierarchy: Stratum 0 (Atomic Clocks, GPS Satellites) -> Stratum 1 (Directly connected NTP servers) -> Stratum 2 (Enterprise edge NTP) -> Stratum 3 (Client PCs). Shows packet timestamping algorithm calculating network delay.',
        descriptionBn: 'পারমাণবিক ঘড়ি ও জিপিএস (স্ট্রাটাম ০) থেকে কীভাবে ধাপে ধাপে নেটওয়ার্কের প্রতিটি কম্পিউটারের সময় মাইক্রোসেকেন্ডে সিঙ্ক রাখা হয়।'
      },
      keyConcepts: ['Stratum Hierarchy (0 to 15)', 'Clock Drift & Jitter Offset', 'Kerberos Time Window (5-minute limit)', 'Log Correlation Security'],
      summaryEn: 'Why microsecond-accurate time synchronization is mandatory for cryptographic certificates, Active Directory, and log auditing.',
      summaryBn: 'সার্ভার লগ মিলানো, সিকিউরিটি সার্টিফিকেট এবং ইউজার লগইনের ক্ষেত্রে নিখুঁত টাইম সিঙ্কিংয়ের প্রয়োজনীয়তা।'
    },
    {
      id: 'directory-services-and-ldap',
      titleEn: 'Directory Services, LDAP, and Active Directory Domain Services',
      titleBn: 'ডিরেক্টরি সার্ভিসেস, এলডিএপি এবং অ্যাক্টিভ ডিরেক্টরি (AD)',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Active Directory forest and domain tree: Central Domain Controller authenticates user login via Kerberos (port 88) and queries user attributes using LDAP/LDAPS (ports 389/636).',
        descriptionBn: 'অফিসের শত শত ব্যবহারকারীর আইডি, পাসওয়ার্ড ও পারমিশন এক কেন্দ্রীয় ডোমেইন কন্ট্রোলার (AD) দিয়ে নিয়ন্ত্রণের চিত্র।'
      },
      keyConcepts: ['Lightweight Directory Access Protocol (LDAP)', 'Active Directory Domain Controller (DC)', 'Kerberos Authentication', 'Single Sign-On (SSO)', 'Group Policy Objects (GPO)'],
      summaryEn: 'Centralized identity and access management for computers, servers, users, and policy enforcement.',
      summaryBn: 'একটি কর্পোরেট নেটওয়ার্কের সমস্ত ব্যবহারকারী ও কম্পিউটারের সেন্ট্রাল অথেনটিকেশন ও পলিসি ব্যবস্থাপনা।'
    },
    {
      id: 'client-server-vs-peer-to-peer',
      titleEn: 'Client-Server Architecture vs Peer-to-Peer (P2P)',
      titleBn: 'ক্লায়েন্ট-সার্ভার আর্কিটেকচার বনাম পিয়ার-টু-পিয়ার (P2P)',
      durationMinutes: 25,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Contrasting topologies: Centralized Client-Server (all 50 clients query single server; bottleneck & single point of failure) vs Distributed P2P (BitTorrent swarm where every peer uploads pieces to other peers simultaneously).',
        descriptionBn: 'কেন্দ্রীয় সার্ভারভিত্তিক ট্রাফিক মডেল বনাম বিটটরেন্ট ও ব্লকচেইনের মতো বিকেন্দ্রীকৃত পিয়ার-টু-পিয়ার ফাইল আদান-প্রদান।'
      },
      keyConcepts: ['Centralized vs Distributed Topology', 'Single Point of Failure (SPOF)', 'BitTorrent Swarm & Trackers', 'Distributed Hash Tables (DHT)'],
      summaryEn: 'Evaluating when to choose centralized client-server control versus resilient, distributed peer-to-peer architectures.',
      summaryBn: 'কেন্দ্রীয় নিয়ন্ত্রণ বনাম অংশীদারিত্বমূলক নেটওয়ার্ক আর্কিটেকচারের সুবিধা ও সীমাবদ্ধতা।'
    },
    {
      id: 'dmz-perimeter-architecture',
      titleEn: 'Demilitarized Zone (DMZ) Architecture & Perimeter Security',
      titleBn: 'ডিএমলিটারাইজড জোন (DMZ) আর্কিটেকচার ও পেরিমিটার নিরাপত্তা',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Dual-Firewall Enterprise DMZ: External Internet -> Edge Firewall -> DMZ Network (Public Web Server, Mail Server, Reverse Proxy) -> Internal Firewall -> Trusted Corporate LAN (Database, Active Directory, Workstations).',
        descriptionBn: 'ইন্টারনেট এবং প্রতিষ্ঠানের অভ্যন্তরীণ গোপন সার্ভারগুলোর মাঝখানে নিরাপত্তা বেষ্টনী হিসেবে ডিএমজেড-এর অবস্থান ও ট্রাফিক ফিল্টারিং।'
      },
      keyConcepts: ['Perimeter Security Buffer', 'Dual-Firewall DMZ', 'Service Segregation', 'Least Privilege Network ACLs', 'Compromise Containment'],
      summaryEn: 'Isolating public-facing Internet services so that even if a web server is hacked, the internal database LAN remains untouched.',
      summaryBn: 'পাবলিক ওয়েব সার্ভারগুলো আলাদা জোনে রেখে প্রতিষ্ঠানের অভ্যন্তরীণ ডেটাবেস ও ইউজার পিসি সুরক্ষিত রাখার কৌশল।'
    },
    {
      id: 'enterprise-hierarchical-network-model',
      titleEn: 'Cisco Enterprise 3-Tier Model: Core, Distribution, and Access Layers',
      titleBn: 'সিসকো এন্টারপ্রাইজ ৩-টায়ার মডেল: কোর, ডিস্ট্রিবিউশন এবং অ্যাক্সেস লেয়ার',
      durationMinutes: 40,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Interactive 3-tier diagram: 1. Core Layer (Ultra-high speed 100Gbps backbone, no packet filtering); 2. Distribution Layer (L3 switches, routing, policy filtering, VLAN aggregation); 3. Access Layer (L2 switches connecting end-user PCs, APs, and printers).',
        descriptionBn: 'সিসকো স্ট্যান্ডার্ড ৩-টায়ার ক্যাম্পাসের কোর লেয়ার (গতি), ডিস্ট্রিবিউশন লেয়ার (পলিসি ও রাউটিং) এবং অ্যাক্সেস লেয়ার (ইউজার কানেকশন)।'
      },
      keyConcepts: ['Core Layer (Speed & Backbone)', 'Distribution Layer (Policy & Inter-VLAN)', 'Access Layer (Port Security & Edge)', 'Collapsed Core (2-Tier for SMBs)'],
      summaryEn: 'The global standard blueprint for designing deterministic, scalable, modular, and maintainable enterprise networks.',
      summaryBn: 'বড় ক্যাম্পাস বা অফিসে হাজার হাজার পিসির সমন্বিত ও সুশৃঙ্খল নেটওয়ার্ক ডিজাইনের আন্তর্জাতিক রূপরেখা।'
    },
    {
      id: 'network-redundancy-high-availability',
      titleEn: 'High Availability (HA) & Redundancy Design Principles',
      titleBn: 'হাই অ্যাভেইলেবিলিটি (HA) এবং রিডানড্যান্সি ডিজাইন প্রিন্সিপালস',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Fault-tolerant enterprise design: Dual Power Supplies + Dual ISP WAN circuits + Dual Core Switches running MLAG / VPC + Redundant default gateways (HSRP/VRRP). Simulates link cut: traffic reroutes in <50ms with 0 downtime.',
        descriptionBn: 'বিদ্যুৎ লাইন, ইন্টারনেট সংযোগ, সুইচ ও রাউটারের দ্বৈত ব্যাকআপ ব্যবস্থা যাতে কোনো একটি নষ্ট হলেও নেটওয়ার্ক এক সেকেন্ডও বন্ধ না থাকে।'
      },
      keyConcepts: ['No Single Point of Failure (SPOF)', 'Dual Homing & Redundant Uplinks', 'Multi-Chassis Link Aggregation', '99.999% ("Five Nines") Uptime', 'Automatic Failover Convergence'],
      summaryEn: 'Building mission-critical networks that survive hardware burns, severed fiber cables, and power outages without interrupting service.',
      summaryBn: 'চরম দুর্যোগ বা যান্ত্রিক ত্রুটিতেও নিরবচ্ছিন্ন ৯৯.৯৯৯% ইন্টারনেট ও সার্ভিস চালু রাখার ডিজাইন টেকনিক।'
    }
  ]
};
