import { CurriculumModule } from './types';

export const level11Module: CurriculumModule = {
  id: 'level-11-troubleshooting-monitoring',
  levelNumber: 11,
  tier: 'Advanced',
  titleEn: 'LEVEL 11 — Network Troubleshooting, Wireshark & Monitoring',
  titleBn: 'লেভেল ১১ — নেটওয়ার্ক ট্রাবলশুটিং, ওয়্যারশার্ক ও মনিটরিং',
  descEn: 'Systematic OSI-based troubleshooting methodologies, diagnosing Layer 1 through Layer 7 failures, deep Wireshark packet capture analysis, SNMP telemetry, Syslog severity levels, and flow-based bandwidth monitoring (NetFlow/sFlow).',
  descBn: 'ওএসআই মডেলভিত্তিক ট্রাবলশুটিং পদ্ধতি, লেয়ার ১ থেকে লেয়ার ৭ পর্যন্ত ত্রুটি নির্ণয়, ওয়্যারশার্ক দিয়ে ডিপ প্যাকেট অ্যানালাইসিস, এসএনএমপি টেলিমেট্রি, সিসলগ ০-৭ লেভেল এবং নেটফ্লো দিয়ে ব্যান্ডউইথ মনিটরিং।',
  estimatedHours: 22,
  iconName: 'Activity',
  prerequisites: ['level-03-models-communication', 'level-05-protocols-ports', 'level-10-os-cli-config'],
  relatedLabs: [],
  topics: [
    {
      id: 'systematic-troubleshooting-methodology',
      titleEn: 'Systematic Troubleshooting Methodologies: Bottom-Up, Top-Down, Divide-and-Conquer',
      titleBn: 'সিস্টেমেটিক ট্রাবলশুটিং পদ্ধতি: বটম-আপ, টপ-ডাউন এবং ডিভাইড-অ্যান্ড-কনকার',
      durationMinutes: 30,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Decision flow diagram contrasting: 1. Bottom-Up (checking physical cable -> L2 link light -> IP -> App); 2. Top-Down (checking application -> HTTP response -> down); 3. Divide-and-Conquer (pinging default gateway first to cut problem space in half); 4. Follow-the-Path.',
        descriptionBn: 'সমস্যা দ্রুত সমাধানের ৪টি প্রধান বৈজ্ঞানিক পদ্ধতি: ক্যাবল থেকে শুরু করে ধাপে ধাপে ওপরে ওঠা, অথবা মাঝের গেটওয়ে পিং করে সমস্যা অর্ধেক ভাগ করে ফেলা।'
      },
      keyConcepts: ['Bottom-Up Approach', 'Top-Down Approach', 'Divide-and-Conquer (Half-Split)', 'Follow-the-Path Tracing', 'Change Management Verification'],
      summaryEn: 'Structured diagnostic workflows that eliminate guesswork and solve complex outages in minutes.',
      summaryBn: 'অহেতুক আন্দাজ না করে বৈজ্ঞানিক পদ্ধতিতে কয়েক মিনিটের মধ্যে নেটওয়ার্ক সমস্যার মূল কারণ খুঁজে বের করার উপায়।'
    },
    {
      id: 'layer-1-physical-faults',
      titleEn: 'Physical Layer Faults: Speed/Duplex Mismatch, Bad Crimping, SFP Mismatch',
      titleBn: 'ফিজিক্যাল লেয়ার ত্রুটি: স্পিড/ডুপ্লেক্স গরমিল, ভুল ক্রিমিং ও এসএফপি মিসম্যাচ',
      durationMinutes: 25,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Interactive hardware fault diagram: Speed/Duplex Mismatch (Half vs Full Duplex causing late collisions and runaway CRC errors); Optical fiber contamination (dirty ferrule measured with OTDR); SFP+ wavelength mismatch (850nm Multi-Mode plugged into 1310nm Single-Mode).',
        descriptionBn: 'স্পিড ও ডুপ্লেক্স অমিল হলে সিআরসি (CRC) এরর হওয়া, ফাইবার ক্যাবলে ধুলো জমা এবং ভুল এসএফপি লাগালে কানেকশন না পাওয়ার দৃশ্যমান চিত্র।'
      },
      keyConcepts: ['Duplex Mismatch & Late Collisions', 'CRC Alignment Errors', 'TDR & OTDR Cable Testing', 'Fiber Attenuation & Transceiver Mismatch'],
      summaryEn: 'Pinpointing and repairing physical hardware, cabling, and transceiver layer discrepancies.',
      summaryBn: 'ক্যাবল নষ্ট, ভুল কানেক্টর বা ফাইবার মডিউলের সমস্যার কারণে সৃষ্ট নেটওয়ার্ক ডাউন সমস্যার সমাধান।'
    },
    {
      id: 'layer-2-switching-faults',
      titleEn: 'Data Link Layer Faults: VLAN Mismatch, STP Blocking, MAC Flapping, Port Security',
      titleBn: 'ডাটা লিংক লেয়ার ত্রুটি: ভি-ল্যান অমিল, এসটিপি ব্লকিং, ম্যাক ফ্ল্যাপিং ও পোর্ট সিকিউরিটি',
      durationMinutes: 35,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Switch port diagnostic scenario: Port drops into err-disabled state because an unapproved MAC plugged in (Port Security); Native VLAN mismatch warning in syslog; MAC address bouncing back and forth between Port 1 and Port 2 (MAC Flapping indicating network loop).',
        descriptionBn: 'সুইচ পোর্ট স্বয়ংক্রিয় বন্ধ (err-disabled) হয়ে যাওয়া, ভি-ল্যান মিসম্যাচ এবং নেটওয়ার্ক লুপের কারণে ম্যাক ফ্ল্যাপিং শনাক্ত করার ডায়াগ্রাম।'
      },
      keyConcepts: ['Native VLAN Mismatch', 'Err-Disabled Recovery', 'MAC Flapping & Loop Induction', 'STP Root Bridge Hijack', 'Spanning Tree Topology Changes (TCN)'],
      summaryEn: 'Diagnosing switched LAN outages, loop storms, and security policy shutdowns.',
      summaryBn: 'লোকাল সুইচের পোর্ট বন্ধ হওয়া, লুপ তৈরি এবং ভি-ল্যান কনফিগারেশন ভুলের সমাধান।'
    },
    {
      id: 'layer-3-routing-ip-faults',
      titleEn: 'Network Layer Faults: IP Conflicts, Subnet Overlaps, Routing Black Holes, MTU Issues',
      titleBn: 'নেটওয়ার্ক লেয়ার ত্রুটি: আইপি কনফ্লিক্ট, সাবনেট ওভারল্যাপ, ব্ল্যাক হোল ও এমটিইউ বাধার সমাধান',
      durationMinutes: 35,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Routing anomaly simulator: Two hosts assigned the same IP 192.168.1.50 triggering Gratuitous ARP collisions; Missing return route creating a one-way black hole; Packet dropped silently because Don\'t Fragment (DF) bit is set and packet size 1500 exceeds VPN MTU 1420 (Path MTU Black Hole).',
        descriptionBn: 'একই আইপি দুই পিসিতে বসানো, ফেরার পথ না থাকায় প্যাকেট হারিয়ে যাওয়া এবং ভিপিএন টানেলে এমটিইউ ড্রপের কারণে ওয়েবসাইট আটকে থাকা।'
      },
      keyConcepts: ['Duplicate IP Detection (Gratuitous ARP)', 'Asymmetric Routing & Missing Return Path', 'Path MTU Discovery (PMTUD) Black Hole', 'Subnet Mask Miscalculation'],
      summaryEn: 'Resolving IP address collisions, routing disconnects, and packet fragmentation black holes.',
      summaryBn: 'আইপি বিভ্রাট, সাবনেটের ভুল এবং প্যাকেট সাইজ জটিলতায় ইন্টারনেট সংযোগ ভেঙে পড়ার কারণ ও প্রতিকার।'
    },
    {
      id: 'layer-4-to-7-application-faults',
      titleEn: 'Layer 4-7 Faults: Firewall Port Blocks, DNS Failures, Expired TLS Certificates',
      titleBn: 'লেয়ার ৪-৭ অ্যাপ্লিকেশন ত্রুটি: পোর্ট ব্লক, ডিএনএস ফেইলিউর ও টিএলএস সার্টিফিকেট মেয়াদোত্তীর্ণ',
      durationMinutes: 30,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Tracing client connection failure: Ping succeeds (ICMP allowed) but HTTP connection hangs because Enterprise Firewall drops TCP SYN on port 443; Browser warning displaying "ERR_CERT_DATE_INVALID"; DNS returning NXDOMAIN.',
        descriptionBn: 'পিং পেলেও ওয়েবসাইট না আসার রহস্য: ফায়ারওয়ালে নির্দিষ্ট পোর্ট ব্লক থাকা, ডিএনএস নাম না মেলা এবং এসএসএল সার্টিফিকেটের মেয়াদ শেষ হওয়া।'
      },
      keyConcepts: ['TCP Port Filtering vs ICMP Reachability', 'DNS NXDOMAIN & SERVFAIL', 'TLS Handshake Failure & Certificate Revocation', 'Application Keep-Alive Timeouts'],
      summaryEn: 'Troubleshooting higher-layer application services when basic IP connectivity is completely functional.',
      summaryBn: 'ইন্টারনেট কানেকশন ঠিক থাকা সত্ত্বেও ওয়েবসাইট বা সফটওয়্যার কাজ না করার কারণ অনুসন্ধান।'
    },
    {
      id: 'wireshark-fundamentals-packet-capture',
      titleEn: 'Wireshark Packet Analysis: Capturing, Berkeley Filters, and Display Filters',
      titleBn: 'ওয়্যারশার্ক প্যাকেট অ্যানালাইসিস: ক্যাপচার, বার্কলে ফিল্টার ও ডিসপ্লে ফিল্টার',
      durationMinutes: 40,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Wireshark user interface masterclass: Packet List -> Packet Details (Dissecting Ethernet II, IPv4, TCP headers) -> Packet Bytes (Hex/ASCII dump). Shows exact syntax difference between Capture Filter ("host 10.0.0.1 and port 80") and Display Filter ("ip.addr == 10.0.0.1 && tcp.port == 80").',
        descriptionBn: 'ওয়্যারশার্কের ইন্টারফেস পরিচিতি: হেক্সাডেসিমাল ডেটা দেখা, প্যাকেট হেডার বিশ্লেষণ এবং ক্যাপচার বনাম ডিসপ্লে ফিল্টারের নিয়ম।'
      },
      keyConcepts: ['Promiscuous Mode & Monitor Mode', 'Capture Filters (BPF) vs Display Filters', 'Packet Dissection Tree', 'Exporting Specified Packets (.pcapng)'],
      summaryEn: 'Learning to capture and navigate raw network packets with the world\'s premiere packet analyzer.',
      summaryBn: 'নেটওয়ার্কের তার দিয়ে ঠিক কী কী তথ্য যাচ্ছে তা নিজের চোখে দেখার আন্তর্জাতিক সেরা সফটওয়্যার ওয়্যারশার্ক।'
    },
    {
      id: 'wireshark-deep-dive-tcp-analysis',
      titleEn: 'Analyzing Wireshark Traces: TCP Handshakes, Retransmissions, and Zero Window',
      titleBn: 'ওয়্যারশার্ক ডিপ ডাইভ: টিসিপি হ্যান্ডশেক, রিট্রান্সমিশন এবং জিরো উইন্ডো বিশ্লেষণ',
      durationMinutes: 40,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Visualizing bad network behavior in Wireshark: Healthy TCP 3-Way Handshake -> sudden delay -> TCP Retransmission (packet lost in transit) -> TCP Dup ACK -> Fast Retransmit -> TCP ZeroWindow (server buffer full, telling sender to halt).',
        descriptionBn: 'ওয়্যারশার্কে লাল-কালো লাইনে প্যাকেট হারিয়ে যাওয়া (Retransmission), ডুপ্লিকেট অ্যাক এবং সার্ভার মেমরি ফুল হওয়ার (Zero Window) বাস্তব সংকেত বিশ্লেষণ।'
      },
      keyConcepts: ['TCP Previous Segment Not Captured', 'TCP Fast Retransmission & Dup ACK', 'TCP Window Full & ZeroWindow Probe', 'TCP Reset (RST) Flag Injection'],
      summaryEn: 'Reading network packet captures like an expert to prove whether network latency or server slowdown is to blame.',
      summaryBn: 'নেটওয়ার্কে সমস্যা নাকি সার্ভারের কোডে সমস্যা—ওয়্যারশার্কের প্যাকেট দিয়ে তার চূড়ান্ত প্রমাণ বের করার কৌশল।'
    },
    {
      id: 'snmp-monitoring-telemetry',
      titleEn: 'SNMP Network Monitoring: SNMPv2c vs SNMPv3, MIBs, and OIDs',
      titleBn: 'এসএনএমপি নেটওয়ার্ক মনিটরিং: SNMPv2c বনাম v3, MIB এবং OID',
      durationMinutes: 35,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'SNMP Architecture: Network Management Station (NMS like Zabbix/PRTG) polling Router Agent via UDP 161 (GET-REQUEST for CPU OID .1.3.6.1.4.1.9.2.1.58); Router Agent sending spontaneous SNMP Trap to NMS on UDP 162 when link drops.',
        descriptionBn: 'মনিটরিং সফটওয়্যার কীভাবে রাউটারের সিপিইউ, র‍্যাম ও ইন্টারফেস ট্রাফিক ডেটা সংগ্রহ করে এবং কোনো পোর্ট ডাউন হলে ট্র্যাপ নোটিফিকেশন পাঠায়।'
      },
      keyConcepts: ['Management Information Base (MIB Tree)', 'Object Identifier (OID)', 'SNMP GET, GET-NEXT, SET, WALK', 'SNMP Traps & Informs (UDP 162)', 'SNMPv3 Security (AuthPriv - HMAC-SHA + AES)'],
      summaryEn: 'Automated 24/7 monitoring of network routers, switches, servers, and power supplies via SNMP telemetry.',
      summaryBn: '২৪ ঘণ্টা নেটওয়ার্কের সমস্ত ডিভাইসের স্বাস্থ্য ও কর্মক্ষমতা অটোমেটেড মনিটরিং করার আন্তর্জাতিক প্রোটোকল।'
    },
    {
      id: 'syslog-and-centralized-logging',
      titleEn: 'Syslog Architecture (RFC 5424) & Severity Levels 0 to 7',
      titleBn: 'সিসলগ আর্কিটেকচার (RFC 5424) এবং ০ থেকে ৭ সেভিয়ারিটি লেভেল',
      durationMinutes: 25,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Syslog severity pyramid: 0-Emergency (System unusable), 1-Alert, 2-Critical, 3-Error, 4-Warning, 5-Notice, 6-Informational (Link Up/Down), 7-Debug. Shows edge devices forwarding logs over UDP 514 to centralized SIEM / Graylog server.',
        descriptionBn: 'সিসলগের ০ থেকে ৭ পর্যন্ত সতর্কবার্তা লেভেল এবং সেন্ট্রাল লগে সমস্ত ডিভাইসের ইভেন্ট সংরক্ষণের স্থাপত্য।'
      },
      keyConcepts: ['RFC 5424 Syslog Format', 'Severity Levels 0 (Emergency) to 7 (Debug)', 'UDP/TCP Port 514', 'Centralized Log Retention & Audit Compliance'],
      summaryEn: 'Aggregating system events, interface status changes, and critical hardware alerts into centralized log repositories.',
      summaryBn: 'নেটওয়ার্কের সমস্ত ডিভাইসের অতীত রেকর্ড ও ক্র্যাশ রিপোর্ট এক জায়গায় জমা রাখার সিস্টেম।'
    },
    {
      id: 'netflow-sflow-bandwidth-analytics',
      titleEn: 'Flow-Based Traffic Monitoring: NetFlow, sFlow, and IPFIX',
      titleBn: 'ফ্লো-বেসড ট্রাফিক মনিটরিং: নেটফ্লো, এসফ্লো এবং আইপিফিক্স (IPFIX)',
      durationMinutes: 30,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Router cache aggregating 7-tuple IP flows (Src IP, Dst IP, Src Port, Dst Port, Protocol, Ingress Interface, ToS). Exports flow records to NetFlow Collector, rendering charts of "Top 10 Bandwidth Consumers" and application usage breakdown.',
        descriptionBn: 'কারা সবচেয়ে বেশি ইন্টারনেট ব্যান্ডউইথ ব্যবহার করছে এবং কোন সফটওয়্যার কত ডেটা খাচ্ছে তা নেটফ্লো চার্টে প্রদর্শনের চিত্র।'
      },
      keyConcepts: ['IP Flow Definition (7-Key Tuple)', 'NetFlow v5 vs NetFlow v9 / IPFIX (RFC 7011)', 'Sampled Flow (sFlow)', 'Top Talkers & Application Breakdown'],
      summaryEn: 'Analyzing exactly who is using corporate bandwidth, what applications they are running, and where traffic originates.',
      summaryBn: 'অফিসের ইন্টারনেট কে কোন কাজে কীভাবে খরচ করছে তা পুঙ্খানুপুঙ্খ বের করার টেকনোলজি।'
    }
  ]
};
