import { CurriculumModule } from './types';

export const level05Module: CurriculumModule = {
  id: 'level-05-protocols-ports',
  levelNumber: 5,
  tier: 'Elementary',
  titleEn: 'LEVEL 05 — Networking Protocols and Ports',
  titleBn: 'লেভেল ০৫ — নেটওয়ার্কিং প্রোটোকল ও পোর্ট নম্বর',
  descEn: 'Deep architectural study of core Internet protocols (TCP, UDP, DNS, DHCP, HTTP/S, SSH, ICMP, SNMP, NTP, TLS) and port number assignments.',
  descBn: 'ইন্টারনেটের মূল প্রোটোকলসমূহ (টিসিপি, ইউডিপি, ডিএনএস, ডিএইচসিপি, এইচটিটিপি/এস, এসএসএইচ, আইসিএমপি, টিএলএস) এবং পোর্ট নম্বরের কার্যপদ্ধতির বিশদ বিশ্লেষণ।',
  estimatedHours: 20,
  iconName: 'Cpu',
  prerequisites: ['level-03-models-communication', 'level-04-ip-subnetting'],
  relatedLabs: ['lab-tcp-handshake', 'lab-dns-resolution'],
  topics: [
    {
      id: 'what-is-a-network-protocol',
      titleEn: 'What Is a Network Protocol? Syntax, Semantics & Timing',
      titleBn: 'নেটওয়ার্ক প্রোটোকল কী? সিনট্যাক্স, সিম্যান্টিক্স ও টাইমিং',
      durationMinutes: 20,
      difficulty: 'Beginner',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Conversational protocol analogy: two diplomats exchanging formal greetings vs network sockets exchanging SYN/ACK handshakes.',
        descriptionBn: 'দুটি দেশের প্রতিনিধিদের আনুষ্ঠানিক করমর্দন বনাম দুটি ডিভাইসের প্রোটোকল হ্যান্ডশেকের তুলনামূলক চিত্র।'
      },
      keyConcepts: ['Syntax (Format)', 'Semantics (Meaning of Bits)', 'Timing (Sequencing)', 'IETF RFC Standards'],
      summaryEn: 'The formal rules of communication enabling systems from different manufacturers to understand each other.',
      summaryBn: 'বিভিন্ন ব্র্যান্ডের কম্পিউটারের নিজেদের মধ্যে তথ্য আদান-প্রদানের সুনির্দিষ্ট নিয়ম ও স্ট্যান্ডার্ড।'
    },
    {
      id: 'tcp-protocol-deep-dive',
      titleEn: 'Transmission Control Protocol (TCP): Reliable Stream Transport',
      titleBn: 'ট্রান্সমিশন কন্ট্রোল প্রোটোকল (TCP): নির্ভরযোগ্য স্ট্রিম ট্রান্সপোর্ট',
      durationMinutes: 35,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: '20-byte TCP Header structure: Source Port, Destination Port, Sequence Number, Ack Number, Flags (URG, ACK, PSH, RST, SYN, FIN), Window Size.',
        descriptionBn: 'টিসিপি-র ২০-বাইট হেডারের প্রতিটি ফিল্ড (সিকোয়েন্স নম্বর, অ্যাক নম্বর, ৬টি ফ্ল্যাগ এবং উইন্ডো সাইজ)-এর দৃশ্যমান বিশ্লেষণ।'
      },
      keyConcepts: ['Connection-Oriented', 'Byte-Stream Delivery', 'In-Order Guarantee', 'Retransmission on Loss'],
      summaryEn: 'How TCP achieves guaranteed, in-order reliable data delivery across unreliable networks.',
      summaryBn: 'অবিশ্বস্ত ইন্টারনেটে টিসিপি কীভাবে শতভাগ নির্ভরযোগ্য এবং ক্রমানুসারিক ডেটা ডেলিভারি নিশ্চিত করে।'
    },
    {
      id: 'udp-protocol-deep-dive',
      titleEn: 'User Datagram Protocol (UDP): Lightweight Low-Latency Transport',
      titleBn: 'ইউজার ডেটাগ্রাম প্রোটোকল (UDP): দ্রুতগতির লো-লেটেন্সি ট্রান্সপোর্ট',
      durationMinutes: 25,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Ultra-lean 8-byte UDP header: Source Port, Destination Port, Length, Checksum. Fire-and-forget datagram stream.',
        descriptionBn: 'মাত্র ৮-বাইটের হালকা ইউডিপি হেডার (সোর্স পোর্ট, ডেস্টিনেশন পোর্ট, দৈর্ঘ্য ও চেকসাম)-এর সচিত্র রূপ।'
      },
      keyConcepts: ['Connectionless', 'No Handshake Overhead', 'No Retransmission', 'Real-Time Voice/Video/DNS'],
      summaryEn: 'Why real-time audio, live video streaming, and DNS prefer fast stateless UDP over TCP.',
      summaryBn: 'ভিডিও কল, অনলাইন গেমিং ও ডিএনএস কেন কোনো হ্যান্ডশেক ছাড়াই দ্রুতগামী ইউডিপি বেছে নেয়।'
    },
    {
      id: 'tcp-three-way-handshake',
      titleEn: 'TCP Three-Way Handshake: SYN, SYN-ACK, ACK In-Depth',
      titleBn: 'টিসিপি ৩-ওয়ে হ্যান্ডশেক: SYN, SYN-ACK, ACK এর পুঙ্খানুপুঙ্খ ধাপ',
      durationMinutes: 35,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Protocol State Graph',
        descriptionEn: 'Step-by-step sequence number tracker: Client sends SYN (ISN=1000) -> Server replies SYN-ACK (ISN=5000, ACK=1001) -> Client sends ACK (ACK=5001).',
        descriptionBn: 'সিকোয়েন্স ও অ্যাকনলেজমেন্ট নম্বরের পরিবর্তন সহ ক্লায়েন্ট ও সার্ভারের মধ্যে ৩টি ধাপে কানেকশন প্রতিষ্ঠার অ্যানিমেশন।'
      },
      keyConcepts: ['Initial Sequence Number (ISN)', 'SYN Flag', 'ACK Flag', 'ESTABLISHED State Transition'],
      summaryEn: 'The mathematical synchronization sequence required before any TCP application payload can flow.',
      summaryBn: 'কোনো টিসিপি ডেটা পাঠানোর আগে উভয় প্রান্তের মধ্যে সিকোয়েন্স নাম্বার সিনক্রোনাইজ করার নিয়ম।'
    },
    {
      id: 'tcp-flow-control-congestion',
      titleEn: 'TCP Flow Control (Sliding Window) & Congestion Avoidance',
      titleBn: 'টিসিপি ফ্লো কন্ট্রোল (স্লাইডিং উইন্ডো) ও কনজেশন কন্ট্রোল',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Protocol State Graph',
        descriptionEn: 'Dynamic sliding window animation: Receiver window buffer filling up triggers Window Size = 0 (Stop sending!), avoiding buffer overflow.',
        descriptionBn: 'রিসিভারের বাফার পূর্ণ হয়ে গেলে উইন্ডো সাইজ শূন্য করে প্রেরকের ডেটা পাঠানো থামিয়ে বাফার ওভারফ্লো রোধের অ্যানিমেশন।'
      },
      keyConcepts: ['Sliding Window Buffer', 'Window Size Advertising', 'Slow Start (CWND)', 'Congestion Avoidance'],
      summaryEn: 'Preventing fast senders from overwhelming slow receivers and mitigating global internet router congestion.',
      summaryBn: 'দ্রুতগতির সেন্ডার যেন দুর্বল রিসিভারকে অতিরিক্ত ডেটা পাঠিয়ে ক্র্যাশ না করে তা নিশ্চিত করার পদ্ধতি।'
    },
    {
      id: 'tcp-connection-teardown',
      titleEn: 'TCP Connection Teardown: 4-Way FIN-ACK and RST Terminations',
      titleBn: 'টিসিপি কানেকশন সমাপ্তি: ৪-ধাপ FIN-ACK টিয়ারডাউন ও RST রিসেট',
      durationMinutes: 25,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Protocol State Graph',
        descriptionEn: 'FIN -> ACK -> FIN -> ACK handshake sequence leading to TIME_WAIT state to ensure all in-flight packets expire gracefully.',
        descriptionBn: 'FIN এবং ACK আদান-প্রদানের মাধ্যমে সেশন বন্ধ করা এবং TIME_WAIT অবস্থায় অপেক্ষা করে সব প্যাকেট নিশ্চিত করা।'
      },
      keyConcepts: ['FIN (Finish) Flag', 'Half-Closed Connections', 'TIME_WAIT (2MSL Timer)', 'RST (Hard Abort) Flag'],
      summaryEn: 'How TCP connections close gracefully in both directions or abort instantly upon network fault.',
      summaryBn: 'কীভাবে টিসিপি কানেকশন উভয় দিক থেকে সুশৃঙ্খলভাবে বন্ধ হয় অথবা ত্রুটি দেখা দিলে সঙ্গে সঙ্গে রিসেট হয়।'
    },
    {
      id: 'http-https-protocols',
      titleEn: 'HTTP and HTTPS: From HTTP/1.1 to HTTP/2 and HTTP/3 (QUIC)',
      titleBn: 'HTTP এবং HTTPS: HTTP/1.1 থেকে HTTP/2 এবং HTTP/3 (QUIC)',
      durationMinutes: 35,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Protocol comparison: Head-of-line blocking in HTTP/1.1 vs Multiplexed streams in HTTP/2 vs UDP-based QUIC in HTTP/3.',
        descriptionBn: 'HTTP/১.১-এর একটার পর একটা রিকোয়েস্ট বনাম HTTP/২-এর মাল্টিপ্লেক্সিং এবং HTTP/৩-এর ইউডিপি-ভিত্তিক QUIC-এর তুলনা।'
      },
      keyConcepts: ['Stateless Request/Response', 'TLS Encryption (Port 443)', 'HTTP/2 Binary Multiplexing', 'HTTP/3 QUIC over UDP'],
      summaryEn: 'The foundational protocols of the World Wide Web and their evolution toward zero-latency transport.',
      summaryBn: 'ওয়েবসাইট লোড হওয়ার মূল প্রোটোকল এবং ইন্টারনেটের আধুনিক হাই-স্পিড HTTP/৩-এর বিবর্তন।'
    },
    {
      id: 'dns-resolution-hierarchy',
      titleEn: 'Domain Name System (DNS): Root, TLD, and Authoritative Servers',
      titleBn: 'ডোমেন নেম সিস্টেম (DNS): রুট, টিএলডি ও অথরিটেটিভ সার্ভার হায়ারার্কি',
      durationMinutes: 35,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Interactive resolution chain: Browser -> Recursive Resolver -> 13 Root Servers (.) -> TLD (.com) -> Authoritative Nameserver -> IP returned.',
        descriptionBn: 'ব্রাউজার থেকে শুরু করে রুট সার্ভার, টিএলডি সার্ভার হয়ে ফাইনাল অথরিটেটিভ সার্ভার থেকে আইপি উদ্ধারের সমগ্র প্রবাহ।'
      },
      keyConcepts: ['Recursive vs Iterative Queries', 'A, AAAA, CNAME, MX, TXT Records', 'DNS Caching & TTL', 'Anycast 13 Root Server Clusters'],
      summaryEn: 'The distributed phonebook of the Internet converting human domain names into machine IP addresses.',
      summaryBn: 'ইন্টারনেটের বিশ্বব্যাপী ফোনবুক যা মানুষের পাঠযোগ্য ডোমেইন নামকে কম্পিউটারের আইপিতে রূপান্তর করে।'
    },
    {
      id: 'dhcp-dora-process',
      titleEn: 'Dynamic Host Configuration Protocol (DHCP): The 4-Step DORA Flow',
      titleBn: 'ডাইনামিক হোস্ট কনফিগারেশন প্রোটোকল (DHCP): ৪-ধাপের DORA প্রবাহ',
      durationMinutes: 30,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Step-by-step DORA flow: Discover (Broadcast 255.255.255.255) -> Offer (Unicast/Broadcast) -> Request -> Acknowledgment (ACK).',
        descriptionBn: 'Discover, Offer, Request এবং Acknowledgment-এর মাধ্যমে নতুন কম্পিউটারে আইপি, সাবনেট ও গেটওয়ে বরাদ্দের অ্যানিমেশন।'
      },
      keyConcepts: ['DORA Process', 'UDP Ports 67 (Server) & 68 (Client)', 'DHCP Pools & Exclusions', 'Lease Renewal (T1 & T2 Timers)'],
      summaryEn: 'How client computers automatically acquire their IP address, subnet mask, default gateway, and DNS servers.',
      summaryBn: 'কীভাবে নতুন কোনো ডিভাইস নেটওয়ার্কে যুক্ত হওয়ামাত্র স্বয়ংক্রিয়ভাবে নিজের আইপি ও গেটওয়ে কনফিগার করে নেয়।'
    },
    {
      id: 'icmp-ping-traceroute',
      titleEn: 'Internet Control Message Protocol (ICMP): Diagnostics, Ping & TTL',
      titleBn: 'ইন্টারনেট কন্ট্রোল মেসেজ প্রোটোকল (ICMP): ডায়াগনস্টিকস, পিং ও টিটিএল',
      durationMinutes: 30,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Ping packet animation: Echo Request (Type 8) transmitted, Echo Reply (Type 0) received; Traceroute incrementing TTL from 1 to 3.',
        descriptionBn: 'পিং-এর ইকো রিকোয়েস্ট ও ইকো রিপ্লাই এবং ট্রেসরাউটে প্রতিটি রাউটারে টিটিএল এক্সপায়ার করিয়ে রুট ট্র্যাক করার চিত্র।'
      },
      keyConcepts: ['Echo Request (Type 8, Code 0)', 'Echo Reply (Type 0, Code 0)', 'Time Exceeded (Type 11 - Traceroute)', 'Destination Unreachable (Type 3)'],
      summaryEn: 'The control and error-reporting protocol used by diagnostic tools like ping and traceroute.',
      summaryBn: 'নেটওয়ার্কের সমস্যা শনাক্তকরণ ও পিং পরীক্ষার জন্য ব্যবহৃত প্রধান এরর-রিপোর্টিং প্রোটোকল।'
    },
    {
      id: 'file-transfer-protocols',
      titleEn: 'File Transfer Protocols: FTP, FTPS, SFTP, and TFTP Compared',
      titleBn: 'ফাইল ট্রান্সফার প্রোটোকল: FTP, FTPS, SFTP এবং TFTP-এর তুলনা',
      durationMinutes: 25,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Dual-port FTP visual (Port 21 Command, Port 20 Data) in cleartext vs Single-port SSH-encrypted SFTP (Port 22).',
        descriptionBn: 'এফটিপি-র দুটি পোর্টে পাসওয়ার্ড উন্মুক্ত থাকা বনাম এসএফটিপি-র পোর্ট ২২-এ এনক্রিপ্ট হয়ে ফাইল আদান-প্রদানের চিত্র।'
      },
      keyConcepts: ['FTP Control vs Data Connections', 'Cleartext Security Risks', 'SFTP over SSH (Port 22)', 'TFTP UDP Port 69 for Router Firmware'],
      summaryEn: 'Transport mechanisms used for network file exchange, backups, and network boot environments.',
      summaryBn: 'সার্ভার ও রাউটারে ফাইল আদান-প্রদান ও ফার্মওয়্যার আপডেটের জন্য ব্যবহৃত ফাইল ট্রান্সফার প্রোটোকল।'
    },
    {
      id: 'remote-access-ssh-telnet',
      titleEn: 'Secure Shell (SSH) vs Telnet: Secure Encrypted Administration',
      titleBn: 'সিকিউর শেল (SSH) বনাম টেলনেট: নিরাপদ এনক্রিপ্টেড রিমোট এক্সেস',
      durationMinutes: 25,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Wireshark packet capture comparison: Telnet shows plain text passwords on wire; SSH shows uncrackable encrypted ciphertext.',
        descriptionBn: 'ওয়্যারশার্কে টেলনেটের পাসওয়ার্ড সরাসরি পড়তে পারা বনাম এসএসএইচ-এর এনক্রিপ্টেড সাইফারটেক্সট সুরক্ষার তুলনা।'
      },
      keyConcepts: ['Telnet Port 23 (Cleartext Hazard)', 'SSH Port 22 (Public Key Cryptography)', 'Diffie-Hellman Key Exchange', 'CLI Administration'],
      summaryEn: 'Why legacy Telnet was universally replaced by cryptographic SSH for router, switch, and server administration.',
      summaryBn: 'কেন পুরোনো টেলনেট সম্পূর্ণ বর্জন করে রাউটার ও সার্ভার কনফিগারেশনে এসএসএইচ বাধ্যতামূলক করা হয়েছে।'
    },
    {
      id: 'email-protocols-smtp-pop3-imap',
      titleEn: 'Email Architecture Protocols: SMTP, POP3, and IMAP4',
      titleBn: 'ইমেইল আর্কিটেকচার প্রোটোকল: SMTP, POP3 এবং IMAP4',
      durationMinutes: 30,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Sender Mail Client pushes via SMTP (Port 587) -> Sender Mail Server transfers via SMTP (Port 25) -> Recipient Server stores -> Recipient Client syncs via IMAP (Port 993).',
        descriptionBn: 'মেইল সেন্ডার থেকে সার্ভারে এসএমটিপি দিয়ে পাঠানো এবং রিসিভার প্রান্তে আইম্যাপ দিয়ে সিঙ্ক করার সম্পূর্ণ চক্র।'
      },
      keyConcepts: ['SMTP Push Protocol (Port 25/587)', 'POP3 Download & Delete (Port 110/995)', 'IMAP Cloud Synchronization (Port 143/993)', 'MTA vs MUA'],
      summaryEn: 'The split architecture between sending mail (SMTP) and synchronizing mailboxes (IMAP/POP3).',
      summaryBn: 'ইমেইল পাঠানোর প্রোটোকল (SMTP) এবং ইনবক্সের মেইল দেখার প্রোটোকল (IMAP/POP3)-এর পৃথকীকরণ।'
    },
    {
      id: 'network-management-snmp',
      titleEn: 'Simple Network Management Protocol (SNMP): MIB, OID, and Traps',
      titleBn: 'সিম্পল নেটওয়ার্ক ম্যানেজমেন্ট প্রোটোকল (SNMP): MIB, OID ও ট্র্যাপস',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Network Management Station (NMS) polling Router CPU/Interface stats (GetRequest) and Router alerting NMS on link down (Trap/Inform).',
        descriptionBn: 'সেন্ট্রাল সার্ভার কীভাবে রাউটারের সিপিইউ ও পোর্ট ট্রাফিকের খোঁজ নেয় এবং কোনো পোর্ট ডাউন হলে রাউটার কীভাবে অ্যালার্ট পাঠায়।'
      },
      keyConcepts: ['SNMP Manager vs Agent', 'Management Information Base (MIB)', 'Object Identifiers (OID)', 'SNMPv3 Security & Encryption'],
      summaryEn: 'The universal telemetry protocol used to monitor network bandwidth, hardware temperature, and link outages.',
      summaryBn: 'বিশ্বজুড়ে নেটওয়ার্ক ডিভাইসের স্বাস্থ্য, ব্যান্ডউইথ ব্যবহার এবং ডাউন-টাইম নিরীক্ষণের মূল প্রোটোকল।'
    },
    {
      id: 'network-time-ntp',
      titleEn: 'Network Time Protocol (NTP): Stratum Levels & Clock Sync',
      titleBn: 'নেটওয়ার্ক টাইম প্রোটোকল (NTP): স্ট্র্যাটাম লেভেল ও ঘড়ির সময় সিনক্রোনাইজেশন',
      durationMinutes: 20,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Stratum pyramid: Stratum 0 (Atomic Clocks/GPS) -> Stratum 1 (Primary NTP Servers) -> Stratum 2 (Enterprise Servers) -> Stratum 3 (Client Devices).',
        descriptionBn: 'পারমাণবিক ঘড়ি (স্ট্র্যাটাম ০) থেকে শুরু করে সার্ভার ও ক্লায়েন্ট কম্পিউটারের সুনির্দিষ্ট সময় পাওয়ার পিরামিড।'
      },
      keyConcepts: ['Stratum 0 Atomic Reference', 'UDP Port 123', 'Sub-millisecond Precision', 'Log Timestamp Correlation'],
      summaryEn: 'Why accurate microsecond clock synchronization is mandatory for security certificates, logs, and databases.',
      summaryBn: 'নেটওয়ার্ক সিকিউরিটি সার্টিফিকেট ও লগ বিশ্লেষণের জন্য নিখুঁত সময় সিনক্রোনাইজেশনের প্রয়োজনীয়তা।'
    },
    {
      id: 'transport-layer-security-tls',
      titleEn: 'Transport Layer Security (TLS) Fundamentals: Handshake & Cryptography',
      titleBn: 'ট্রান্সপোর্ট লেয়ার সিকিউরিটি (TLS) ফান্ডামেন্টালস: হ্যান্ডশেক ও এনক্রিপশন',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Protocol State Graph',
        descriptionEn: 'TLS 1.3 1-RTT Handshake: Client Hello -> Server Hello + Certificate + Key Share -> Symmetric Session Key generated -> Encrypted application data.',
        descriptionBn: 'ক্লায়েন্ট ও সার্ভারের মধ্যে সার্টিফিকেট যাচাই, কি-এক্সচেঞ্জ এবং সিমেট্রিক কি তৈরি করে নিরাপদ ডেটা আদান-প্রদানের অ্যানিমেশন।'
      },
      keyConcepts: ['Asymmetric vs Symmetric Encryption', 'Certificate Authorities (CA)', 'TLS 1.3 1-RTT Handshake', 'Perfect Forward Secrecy'],
      summaryEn: 'The cryptographic layer providing confidentiality, integrity, and server authentication for HTTPS.',
      summaryBn: 'ওয়েবসাইট ও ইন্টারনেটে ডেটা চুরি বা পরিবর্তন রোধ করার সর্বাধুনিক ক্রিপ্টোগ্রাফিক প্রোটোকল।'
    },
    {
      id: 'tcp-udp-port-numbers-architecture',
      titleEn: 'Port Numbers Architecture: Demultiplexing to Sockets (0 to 65,535)',
      titleBn: 'পোর্ট নম্বর আর্কিটেকচার: সকেটে ট্রাফিক বিতরণ (০ থেকে ৬৫,৫৩৫)',
      durationMinutes: 30,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Socket analogy: IP address = Apartment Building, Port Number = Specific Apartment Door (Port 80 Web, Port 22 SSH, Port 443 SSL).',
        descriptionBn: 'আইপি অ্যাড্রেস হলো ভবনের ঠিকানা, আর পোর্ট নম্বর হলো সেই ভবনের নির্দিষ্ট ফ্ল্যাট নম্বর যা নির্দিষ্ট প্রোগ্রামকে নির্দেশ করে।'
      },
      keyConcepts: ['IP + Port = Socket', 'Well-Known (0-1023)', 'Registered (1024-49151)', 'Ephemeral/Dynamic (49152-65535)'],
      summaryEn: 'How operating systems direct incoming network packets to the exact intended software application.',
      summaryBn: 'কম্পিউটারে আসা প্যাকেটগুলো কীভাবে নির্দিষ্ট সফটওয়্যার অ্যাপ্লিকেশনে নিখুঁতভাবে পৌঁছে যায়।'
    },
    {
      id: 'tcp-vs-udp-decision-matrix',
      titleEn: 'TCP vs UDP Comprehensive Protocol Decision Matrix',
      titleBn: 'টিসিপি বনাম ইউডিপি: বাস্তব প্রয়োগ ও সিদ্ধান্ত গ্রহণের ম্যাট্রিক্স',
      durationMinutes: 25,
      difficulty: 'Elementary',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Interactive decision tree: Does application require 100% accuracy? (Yes -> TCP: Web, Email, File transfer). Does it require minimum latency? (Yes -> UDP: VoIP, Video, Gaming).',
        descriptionBn: 'কোন অ্যাপ্লিকেশনে টিসিপি প্রয়োজন এবং কোনটিতে ইউডিপি প্রয়োজন তা বাছাই করার সিদ্ধান্ত গ্রহণকারী ম্যাট্রিক্স।'
      },
      keyConcepts: ['Reliability vs Speed Tradeoff', 'Header Overhead (20B vs 8B)', 'Stateful vs Stateless', 'Protocol Selection Criteria'],
      summaryEn: 'Framework for network architects and developers deciding between TCP and UDP transport protocols.',
      summaryBn: 'সফটওয়্যার ডেভেলপার ও ইঞ্জিনিয়ারদের জন্য টিসিপি বনাম ইউডিপি নির্বাচনের সুনির্দিষ্ট নির্দেশিকা।'
    }
  ]
};
