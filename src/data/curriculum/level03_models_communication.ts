import { CurriculumModule } from './types';

export const level03Module: CurriculumModule = {
  id: 'level-03-models-communication',
  levelNumber: 3,
  tier: 'Beginner',
  titleEn: 'LEVEL 03 — Network Models and Data Communication',
  titleBn: 'লেভেল ০৩ — নেটওয়ার্ক মডেল ও ডেটা কমিউনিকেশন',
  descEn: 'The core conceptual architecture of networking: The 7-Layer OSI Reference Model, the TCP/IP stack, Encapsulation, PDUs, MAC framing, MTU, and ARP operations.',
  descBn: 'নেটওয়ার্কিংয়ের মূল আর্কিটেকচারাল ফ্রেমওয়ার্ক: ওএসআই ৭টি লেয়ার, টিসিপি/আইপি স্ট্যাক, ডেটা এনক্যাপসুলেশন, পিডিইউ, ম্যাক ফ্রেমের গঠন, এমটিইউ এবং এআরপি মেকানিজম।',
  estimatedHours: 15,
  iconName: 'Layers',
  prerequisites: ['level-01-fundamentals', 'level-02-devices-media'],
  relatedLabs: ['lab-switch-mac', 'lab-tcp-handshake'],
  topics: [
    {
      id: 'data-communication-fundamentals',
      titleEn: 'Data Communication Fundamentals: Signals, Encoding & Channels',
      titleBn: 'ডেটা কমিউনিকেশন ফান্ডামেন্টালস: সিগন্যাল, এনকোডিং ও চ্যানেল',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Digital binary signal encoding diagram: NRZ vs Manchester encoding transforming 0s and 1s into voltage clock transitions.',
        descriptionBn: 'বাইনারি ০ ও ১ কীভাবে ভোল্টেজ বা ক্লক পালসে রূপান্তরিত হয় তার সিগন্যাল এনকোডিং চার্ট।'
      },
      keyConcepts: ['Baud vs Bit Rate', 'Signal-to-Noise Ratio', 'Attenuation', 'Encoding Schemes'],
      summaryEn: 'How abstract digital computer information is encoded into physical transmission mediums.',
      summaryBn: 'কম্পিউটারের ডিজিটাল ডেটা কীভাবে ফিজিক্যাল সিগন্যালে রূপান্তরিত হয়ে মাধ্যমে প্রেরিত হয়।'
    },
    {
      id: 'osi-reference-model-overview',
      titleEn: 'The OSI 7-Layer Reference Model: Architecture & Purpose',
      titleBn: 'ওএসআই ৭-লেয়ার রেফারেন্স মডেল: আর্কিটেকচার ও প্রয়োজনীয়তা',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Vertical 7-layer stack visual with expandable layer panels describing the standard purpose and boundaries of each layer.',
        descriptionBn: 'লেয়ার ৭ থেকে লেয়ার ১ পর্যন্ত ওএসআই স্ট্যাকের প্রতিটি স্তরের দায়িত্ব ও কাজের সীমানার সচিত্র চিত্র।'
      },
      keyConcepts: ['ISO Standard', 'Separation of Concerns', 'Interoperability', 'Layer Boundaries'],
      summaryEn: 'The international conceptual benchmark defining how applications talk across physical wires.',
      summaryBn: 'সফটওয়্যার অ্যাপ্লিকেশন কীভাবে নেটওয়ার্কের তারের সাথে সংযুক্ত হয় তার আন্তর্জাতিক মানদণ্ড।'
    },
    {
      id: 'osi-layer-1-physical',
      titleEn: 'OSI Layer 1: The Physical Layer',
      titleBn: 'ওএসআই লেয়ার ১: ফিজিক্যাল লেয়ার',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Raw bitstream traveling across copper voltages, fiber laser light pulses, and radio waves.',
        descriptionBn: 'কপার ক্যাবলের ভোল্টেজ, ফাইবার অপটিকের আলোর পালস এবং রেডিও তরঙ্গের বিট প্রবাহ চিত্র।'
      },
      keyConcepts: ['Bit Transmission', 'Voltages & Connectors', 'Clock Synchronization', 'Topologies'],
      summaryEn: 'Transmission and reception of unstructured raw bit streams over a physical medium.',
      summaryBn: 'ফিজিক্যাল মাধ্যমের উপর দিয়ে ০ ও ১-এর বৈদ্যুতিক বা অপটিক্যাল বিট প্রবাহ পরিচালনা।'
    },
    {
      id: 'osi-layer-2-data-link',
      titleEn: 'OSI Layer 2: The Data Link Layer (MAC & LLC)',
      titleBn: 'ওএসআই লেয়ার ২: ডেটা লিংক লেয়ার (ম্যাক ও এলএলসি)',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Layer 2 framing animation: wrapping network IP packets with Source/Destination MAC addresses and FCS trailer for local hop delivery.',
        descriptionBn: 'লোকাল হপ ডেলিভারির জন্য আইপি প্যাকেটের সাথে সোর্স-ডেস্টিনেশন ম্যাক ও এফসিএস এরর চেক জুড়ে ফ্রেম তৈরির অ্যানিমেশন।'
      },
      keyConcepts: ['Media Access Control (MAC)', 'Logical Link Control (LLC)', 'Framing', 'Error Detection (CRC)'],
      summaryEn: 'Hop-to-hop physical addressing, framing, and transmission error detection across local links.',
      summaryBn: 'লোকাল লিংকে সরাসরি সংযুক্ত ডিভাইসের মধ্যে শারীরিক ম্যাক ফ্রেমের আদান-প্রদান ও এরর চেকিং।'
    },
    {
      id: 'osi-layer-3-network',
      titleEn: 'OSI Layer 3: The Network Layer (Logical IP Addressing & Routing)',
      titleBn: 'ওএসআই লেয়ার ৩: নেটওয়ার্ক লেয়ার (লজিক্যাল আইপি অ্যাড্রেসিং ও রাউটিং)',
      durationMinutes: 35,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'End-to-end packet traversal traversing 3 intermediate routers across different subnets without modifying original IP headers.',
        descriptionBn: 'সোর্স ও ডেস্টিনেশন আইপি অপরিবর্তিত রেখে ৩টি ভিন্ন রাউটার অতিক্রম করার অ্যানিমেশন।'
      },
      keyConcepts: ['Logical Addressing (IP)', 'Best Path Routing', 'Packet Forwarding', 'Inter-network Communication'],
      summaryEn: 'Logical addressing and path determination across heterogeneous interconnected networks.',
      summaryBn: 'ভিন্ন ভিন্ন নেটওয়ার্কের মধ্যে আইপি অ্যাড্রেস ব্যবহার করে সর্বোত্তম পথে প্যাকেট পৌঁছানো।'
    },
    {
      id: 'osi-layer-4-transport',
      titleEn: 'OSI Layer 4: The Transport Layer (TCP vs UDP Reliability)',
      titleBn: 'ওএসআই লেয়ার ৪: ট্রান্সপোর্ট লেয়ার (টিসিপি ও ইউডিপি নির্ভরযোগ্যতা)',
      durationMinutes: 35,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Protocol State Graph',
        descriptionEn: 'Segmentation and reassembly diagram: large files divided into numbered segments with sequence tags, tracking lost packets.',
        descriptionBn: 'বড় ফাইলকে সিকোয়েন্স নম্বরযুক্ত ছোট ছোট সেগমেন্টে বিভক্ত করা এবং ড্রপ হওয়া সেগমেন্ট পুনরায় চাওয়ার দৃশ্য।'
      },
      keyConcepts: ['Segmentation & Reassembly', 'Port Addressing', 'Flow Control (Sliding Window)', 'Connection-Oriented vs Connectionless'],
      summaryEn: 'End-to-end process-to-process delivery, segmentation, flow control, and error recovery.',
      summaryBn: 'কম্পিউটারের নির্দিষ্ট প্রোগ্রামের মধ্যে ডেটা সেগমেন্টেশন, প্রবাহ নিয়ন্ত্রণ ও ত্রুটিহীন ডেলিভারি।'
    },
    {
      id: 'osi-layer-5-session',
      titleEn: 'OSI Layer 5: The Session Layer',
      titleBn: 'ওএসআই লেয়ার ৫: সেশন লেয়ার',
      durationMinutes: 20,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Session establishment, synchronization checkpoints during a large file download, and graceful termination.',
        descriptionBn: 'বড় ফাইল ডাউনলোডের মাঝে চেকপয়েন্ট তৈরি ও সংযোগ বিচ্ছিন্ন হলে পুনরায় সেখান থেকে ডাউনলোডের চিত্র।'
      },
      keyConcepts: ['Dialog Control', 'Synchronization Checkpoints', 'Session Token Management', 'Graceful Teardown'],
      summaryEn: 'Establishing, managing, synchronizing, and terminating sessions between communicating applications.',
      summaryBn: 'অ্যাপ্লিকেশনগুলোর মধ্যে যোগাযোগ সেশন তৈরি, চলমান রাখা ও সুন্দরভাবে বন্ধ করা।'
    },
    {
      id: 'osi-layer-6-presentation',
      titleEn: 'OSI Layer 6: The Presentation Layer (Syntax, Encryption & Compression)',
      titleBn: 'ওএসআই লেয়ার ৬: প্রেজেন্টেশন লেয়ার (সিনট্যাক্স, এনক্রিপশন ও কম্প্রেশন)',
      durationMinutes: 20,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Transformation pipeline: Plain text data compressed (Gzip) and encrypted (TLS/SSL) into wire-safe standardized format.',
        descriptionBn: 'সাধারণ টেক্সটকে জিপ কম্প্রেশন এবং টিএলএস এনক্রিপশনের মাধ্যমে নিরাপদ ফরম্যাটে রূপান্তরের পাইপলাইন।'
      },
      keyConcepts: ['Data Translation (ASCII/EBCDIC)', 'Encryption/Decryption (SSL/TLS)', 'Compression', 'MIME Types'],
      summaryEn: 'Ensuring data format compatibility, cryptographic encryption, and payload compression.',
      summaryBn: 'ডেটার ফরম্যাট রূপান্তর, ক্রিপ্টোগ্রাফিক এনক্রিপশন এবং সাইজ কমানোর দায়িত্ব।'
    },
    {
      id: 'osi-layer-7-application',
      titleEn: 'OSI Layer 7: The Application Layer',
      titleBn: 'ওএসআই লেয়ার ৭: অ্যাপ্লিকেশন লেয়ার',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'End-user browser talking HTTP/HTTPS, mail client talking IMAP/SMTP, and terminal talking SSH to initiate network communications.',
        descriptionBn: 'ব্রাউজার (HTTP), ইমেইল (SMTP/IMAP) এবং টার্মিনাল (SSH) সরাসরি নেটওয়ার্কে যুক্ত হওয়ার চিত্র।'
      },
      keyConcepts: ['User-Facing Protocols', 'HTTP/3, DNS, SSH, DHCP', 'API Endpoints', 'Application Services'],
      summaryEn: 'The direct interface between user software applications and underlying network communication stacks.',
      summaryBn: 'ব্যবহারকারীর সফটওয়্যার ও নেটওয়ার্কের মধ্যকার সরাসরি ইন্টারফেস স্তর।'
    },
    {
      id: 'tcpip-model-architecture',
      titleEn: 'The TCP/IP Protocol Suite: 4-Layer & 5-Layer Models',
      titleBn: 'টিসিপি/আইপি প্রোটোকল সুইট: ৪-লেয়ার ও ৫-লেয়ার মডেল',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Side-by-side mapping diagram showing how OSI 7 layers correspond to TCP/IP 4 layers (Application, Transport, Internet, Network Access).',
        descriptionBn: 'ওএসআই-এর ৭টি লেয়ার কীভাবে বাস্তবসম্মত টিসিপি/আইপি-র ৪টি লেয়ারের সাথে সম্পর্কযুক্ত তার তুলনামূলক চার্ট।'
      },
      keyConcepts: ['RFC 1122', 'Department of Defense (DoD) Model', 'Pragmatic Engineering', 'Internet Protocol Suite'],
      summaryEn: 'The real-world implementation model that actually powers the global Internet.',
      summaryBn: 'বাস্তব পৃথিবীর ইন্টারনেট পরিচালনার আসল এবং সবচেয়ে গ্রহণযোগ্য নেটওয়ার্ক মডেল।'
    },
    {
      id: 'osi-vs-tcpip-comparison',
      titleEn: 'OSI Model vs TCP/IP Model: In-Depth Comparison',
      titleBn: 'ওএসআই বনাম টিসিপি/আইপি মডেল: তুলনামূলক বিশ্লেষণ',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Interactive matrix comparing Conceptual vs Practical, Protocol-independent vs Protocol-dependent, and layer merges.',
        descriptionBn: 'তাত্ত্বিক মডেল বনাম বাস্তব প্রোটোকল নির্ভর মডেলের পয়েন্ট-বাই-পয়েন্ট তুলনামূলক ছক।'
      },
      keyConcepts: ['Theoretical Benchmark vs Implementation', 'Layer Mergers', 'Loose Coupling', 'Industry Standard Usage'],
      summaryEn: 'Key architectural distinctions between theoretical models and working software protocols.',
      summaryBn: 'তাত্ত্বিক গবেষণা ও বাস্তব সফটওয়্যার ইঞ্জিনিয়ারিংয়ের মধ্যে গুরুত্বপূর্ণ পার্থক্য।'
    },
    {
      id: 'encapsulation-decapsulation',
      titleEn: 'Data Encapsulation and Decapsulation Process',
      titleBn: 'ডেটা এনক্যাপসুলেশন এবং ডিক্যাপসুলেশন প্রক্রিয়া',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Russian nesting doll animation: User data gets wrapped with TCP header (Segment), IP header (Packet), and MAC header+trailer (Frame).',
        descriptionBn: 'ব্যবহারকারীর মূল ডেটার সাথে কীভাবে ধাপে ধাপে টিসিপি হেডার, আইপি হেডার এবং ম্যাক ফ্রেম হেডার জুড়ে দেওয়া হয় তার অ্যানিমেশন।'
      },
      keyConcepts: ['Wrapping Headers', 'Stripping Headers', 'Control Information', 'Payload Nesting'],
      summaryEn: 'How data gains control headers traveling down the stack and sheds them moving up at destination.',
      summaryBn: 'প্রেরকের ক্ষেত্রে ডেটায় হেডার যুক্ত হওয়া এবং প্রাপকের ক্ষেত্রে তা ধাপে ধাপে উন্মোচিত হওয়ার মেকানিজম।'
    },
    {
      id: 'pdu-frames-packets-segments-bits',
      titleEn: 'Protocol Data Units (PDU): Data, Segments, Packets, Frames, and Bits',
      titleBn: 'প্রোটোকল ডেটা ইউনিট (PDU): ডেটা, সেগমেন্ট, প্যাকেট, ফ্রেম ও বিট',
      durationMinutes: 25,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Visual hierarchy: Layer 7-5 = Data -> Layer 4 = Segment/Datagram -> Layer 3 = Packet -> Layer 2 = Frame -> Layer 1 = Bits.',
        descriptionBn: 'প্রতিটি লেয়ারে ডেটার নির্দিষ্ট নাম ও রূপান্তরের ভিজ্যুয়াল হায়ারার্কি চার্ট।'
      },
      keyConcepts: ['Data', 'Segment', 'Packet', 'Frame', 'Bits'],
      summaryEn: 'Standard terminology assigned to data chunks at each discrete networking layer.',
      summaryBn: 'প্রতিটি নেটওয়ার্কিং লেয়ারে রূপান্তরিত ডেটার সুনির্দিষ্ট বৈজ্ঞানিক নাম।'
    },
    {
      id: 'mac-address-architecture',
      titleEn: 'MAC Address: 48-Bit Physical Address & OUI Vendor Registry',
      titleBn: 'ম্যাক অ্যাড্রেস: ৪৮-বিট ফিজিক্যাল অ্যাড্রেস ও ওআইইউ ভেন্ডর রেজিস্ট্রি',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: '48-bit hex breakdown: First 24 bits = IEEE Organizationally Unique Identifier (OUI - e.g. Cisco/Intel), Last 24 bits = Unique NIC serial.',
        descriptionBn: '৪৮-বিট হেক্সাডেসিমেল ম্যাকের প্রথম ২৪ বিট (কোম্পানি কোড) ও শেষ ২৪ বিট (কার্ড সিরিয়াল)-এর রঙিন বিশ্লেষণ।'
      },
      keyConcepts: ['48-Bit Hexadecimal', 'OUI (Vendor Code)', 'NIC Specific Serial', 'Unicast/Multicast/Broadcast Bit'],
      summaryEn: 'Hardware burned-in address used by Layer 2 switches to identify devices on local LAN links.',
      summaryBn: 'লোকাল ল্যানে ডিভাইস শনাক্ত করতে নেটওয়ার্ক কার্ডে স্থায়ীভাবে সংরক্ষিত শারীরিক ঠিকানা।'
    },
    {
      id: 'ethernet-frame-structure',
      titleEn: 'Ethernet II Frame Structure: Preamble, SFD, Headers, Payload, and FCS',
      titleBn: 'ইথারনেট ফ্রেমের অভ্যন্তরীণ গঠন: প্রিয়্যাম্বল, হেডার, পেলোড ও এফসিএস',
      durationMinutes: 35,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Interactive frame inspector: Preamble (7B) -> SFD (1B) -> Dst MAC (6B) -> Src MAC (6B) -> EtherType (2B) -> Payload (46-1500B) -> FCS (4B).',
        descriptionBn: 'ইথারনেট ফ্রেমের প্রতিটি বাইটের কাজ এবং এফসিএস সিআরসি এরর চেকিংয়ের বিস্তারিত ইন্টারঅ্যাকটিভ চিত্র।'
      },
      keyConcepts: ['Preamble & SFD', 'EtherType (0x0800 IPv4, 0x0806 ARP)', 'Minimum 64-Byte Frame', 'FCS CRC-32'],
      summaryEn: 'Anatomy of the fundamental data container transported across Ethernet cables.',
      summaryBn: 'ইথারনেট ক্যাবলে প্রবাহিত মূল ডেটা ফ্রেমের প্রতিটি বিট ও বাইটের পুঙ্খানুপুঙ্খ গঠন।'
    },
    {
      id: 'mtu-path-discovery',
      titleEn: 'Maximum Transmission Unit (MTU) & Path MTU Discovery (PMTUD)',
      titleBn: 'ম্যাক্সিমাম ট্রান্সমিশন ইউনিট (MTU) ও পাথ এমটিইউ ডিসকভারি',
      durationMinutes: 25,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: '1500-byte packet hitting an interface with 1400-byte MTU: DF flag causes ICMP "Fragmentation Needed" or packet splitting.',
        descriptionBn: 'বড় প্যাকেট ছোট এমটিইউ ইন্টারফেসে আটকে গেলে ফ্র্যাগমেন্টেশন অথবা আইসিএমপি ড্রপ বার্তার অ্যানিমেশন।'
      },
      keyConcepts: ['Standard 1500-Byte MTU', 'Jumbo Frames (9000 Bytes)', 'DF (Don\'t Fragment) Bit', 'MSS vs MTU'],
      summaryEn: 'Size limits imposed by network interfaces and how routers prevent packet truncation.',
      summaryBn: 'ইন্টারফেসে প্যাকেটের সর্বোচ্চ সাইজ নির্ধারণ এবং প্যাকেট কাটা পড়া রোধ করার পদ্ধতি।'
    },
    {
      id: 'arp-protocol-mechanism',
      titleEn: 'Address Resolution Protocol (ARP): IPv4 to MAC Resolution',
      titleBn: 'অ্যাড্রেস রেজোলিউশন প্রোটোকল (ARP): আইপি থেকে ম্যাক রূপান্তর',
      durationMinutes: 30,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Host A broadcasts ARP Request ("Who has 192.168.1.5?"), Switch floods to all ports, Host B unicasts ARP Reply with its MAC.',
        descriptionBn: 'হোস্ট এ-এর ব্রডকাস্ট এআরপি রিকোয়েস্ট এবং হোস্ট বি-এর ম্যাক অ্যাড্রেস সম্বলিত ইউনিকাস্ট রিপ্লাইয়ের সম্পূর্ণ অ্যানিমেশন।'
      },
      keyConcepts: ['ARP Request (Broadcast)', 'ARP Reply (Unicast)', 'ARP Cache Table', 'Gratuitous ARP'],
      summaryEn: 'The critical bridge translating Layer 3 IP logical addresses into Layer 2 physical MAC addresses.',
      summaryBn: 'আইপি অ্যাড্রেস থেকে ফিজিক্যাল ম্যাক অ্যাড্রেস খুঁজে বের করার অপরিহার্য নেটওয়ার্কিং প্রোটোকল।'
    },
    {
      id: 'end-to-end-transmission-walkthrough',
      titleEn: 'Complete End-to-End Data Transmission Walkthrough',
      titleBn: 'একটি প্যাকেট প্রেরণের সম্পূর্ণ বাস্তবসম্মত বিশ্লেষণ',
      durationMinutes: 40,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Browser requests web page: DNS lookup -> ARP resolution -> TCP 3-Way Handshake -> HTTP GET -> Router routing -> Server reply.',
        descriptionBn: 'ব্রাউজারে ওয়েব রিকোয়েস্ট থেকে শুরু করে ডিএনএস, এআরপি, টিসিপি হ্যান্ডশেক ও সার্ভার রেসপন্সের সম্পূর্ণ চক্র।'
      },
      keyConcepts: ['Full Stack Synthesis', 'Step-by-Step Lifecycle', 'Socket Creation', 'Packet Delivery'],
      summaryEn: 'Unifying all fundamentals into a single comprehensive packet lifecycle walkthrough.',
      summaryBn: 'এতক্ষণ শেখা সমস্ত মৌলিক নিয়মকে একটি পূর্ণাঙ্গ রিকোয়েস্টের বাস্তব প্রবাহের মাধ্যমে একত্রিত করা।'
    }
  ]
};
