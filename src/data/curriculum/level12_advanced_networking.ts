import { CurriculumModule } from './types';

export const level12Module: CurriculumModule = {
  id: 'level-12-advanced-networking',
  levelNumber: 12,
  tier: 'Advanced',
  titleEn: 'LEVEL 12 — Advanced Enterprise & Cloud Networking',
  titleBn: 'লেভেল ১২ — অ্যাডভান্সড এন্টারপ্রাইজ এবং ক্লাউড নেটওয়ার্কিং',
  descEn: 'The summit of network engineering: Multi-Area OSPF, advanced BGP policy routing, IPsec/SSL VPNs, First Hop Redundancy (HSRP/VRRP), Quality of Service (QoS), Software-Defined Networking (SDN), VXLAN overlays, and Cloud VPC architecture.',
  descBn: 'নেটওয়ার্ক ইঞ্জিনিয়ারিংয়ের সর্বোচ্চ শিখর: মাল্টি-এরিয়া OSPF, অ্যাডভান্সড BGP পলিসি, IPsec VPN, ফার্স্ট হপ রিডানড্যান্সি (HSRP/VRRP), কোয়ালিটি অব সার্ভিস (QoS), সফটওয়্যার-ডিফাইন্ড নেটওয়ার্কিং (SDN), VXLAN এবং ক্লাউড ভিপিসি আর্কিটেকচার।',
  estimatedHours: 25,
  iconName: 'Shield',
  prerequisites: ['level-06-switching-vlan', 'level-07-routing', 'level-09-services-architecture'],
  relatedLabs: [],
  topics: [
    {
      id: 'advanced-supernetting-route-summarization',
      titleEn: 'Route Summarization, CIDR Aggregation, and Discontiguous Subnets',
      titleBn: 'রুট সামারাইজেশন, সিআইডিআর অ্যাগ্রিগেশন ও ডিসকন্টিগুয়াস সাবনেট',
      durationMinutes: 30,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Live Calculation Matrix',
        descriptionEn: 'Interactive summarization calculator: Collapsing 4 subnets 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24, 192.168.3.0/24 into single optimal summary route 192.168.0.0/22. Demonstrates routing table size reduction and avoiding black holes.',
        descriptionBn: 'চারটি ভিন্ন সাবনেটকে গণিতের সাহায্যে মিলিয়ে একটিমাত্র মাস্টার রাউটে সংকুচিত করা যাতে রাউটার মেমরি বাঁচে এবং ইন্টারনেট ফাস্ট থাকে।'
      },
      keyConcepts: ['Binary Common Prefix Matching', 'Supernetting Mask Calculation', 'Routing Table Optimization', 'Discontiguous Subnetting Hazards'],
      summaryEn: 'Condensing dozens of routing table entries into compact aggregate advertisements to save memory and CPU cycles.',
      summaryBn: 'হাজার হাজার রাউটকে একটি সংক্ষেপিত লাইনে প্রকাশ করে রাউটারের গতি ও সক্ষমতা বাড়ানোর কৌশল।'
    },
    {
      id: 'multi-area-ospf-architecture',
      titleEn: 'Multi-Area OSPF Architecture & LSA Types 1 to 5',
      titleBn: 'মাল্টি-এরিয়া ওএসপিএফ আর্কিটেকচার এবং এলএসএ (LSA) টাইপ ১ থেকে ৫',
      durationMinutes: 40,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Multi-Area OSPF topology: Backbone Area 0 connected to Area 1 (HR) and Area 2 (Engineering). Shows Area Border Router (ABR) stopping Type 1/2 LSAs and generating Type 3 Summary LSAs; Autonomous System Boundary Router (ASBR) injecting Type 5 External LSAs.',
        descriptionBn: 'ব্যাকবোন এরিয়া ০-এর সাথে একাধিক শাখা এরিয়ার সংযোগ, এভিআর (ABR) এবং এএসবিআরের ভূমিকা এবং বিভিন্ন এলএসএ টাইপের কার্যকারিতা।'
      },
      keyConcepts: ['Backbone Area 0 Rule', 'Area Border Router (ABR)', 'Autonomous System Boundary Router (ASBR)', 'LSA Type 1 (Router), Type 2 (Network), Type 3 (Summary), Type 5 (External)', 'Inter-Area Route Summarization'],
      summaryEn: 'Scaling OSPF across enterprise campus networks of hundreds of routers by segmenting SPF flood boundaries into hierarchical areas.',
      summaryBn: 'শত শত রাউটারবিশিষ্ট বিশাল কর্পোরেট নেটওয়ার্কে ওএসপিএফ ভাগ করে পারফরম্যান্স অক্ষুণ্ণ রাখার পদ্ধতি।'
    },
    {
      id: 'bgp-advanced-path-attributes',
      titleEn: 'BGP Advanced Policy Routing & Path Selection Algorithm',
      titleBn: 'বিজিপি অ্যাডভান্সড পলিসি রাউটিং এবং পাথ সিলেকশন অ্যালগরিদম',
      durationMinutes: 45,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'The 8-step BGP path selection decision ladder: 1. Highest WEIGHT (Cisco proprietary) -> 2. Highest LOCAL_PREF -> 3. Locally Originated -> 4. Shortest AS_PATH -> 5. Lowest ORIGIN code -> 6. Lowest MED -> 7. eBGP over iBGP -> 8. Lowest IGP metric to next-hop.',
        descriptionBn: 'বিজিপির ৮ ধাপের বিখ্যাত সিদ্ধান্ত সিঁড়ি: কীভাবে ওয়েট, লোকাল প্রেফারেন্স ও এএস-পাথ মিলিয়ে বিশ্বের সেরা ইন্টারনেট পথ নির্ধারিত হয়।'
      },
      keyConcepts: ['BGP Path Attributes (Well-Known vs Optional)', 'Weight (Local to router)', 'Local Preference (Outbound traffic engineering)', 'AS-PATH Prepending', 'Multi-Exit Discriminator (MED - Inbound traffic engineering)'],
      summaryEn: 'Mastering the enterprise traffic engineering levers that steer multi-homed ISP traffic inbound and outbound.',
      summaryBn: 'ইন্টারনেট ট্রাফিক কোন দিক দিয়ে প্রতিষ্ঠানে ঢুকবে আর কোন দিক দিয়ে বের হবে তা পুঙ্খানুপুঙ্খ নিয়ন্ত্রণের কৌশল।'
    },
    {
      id: 'first-hop-redundancy-fhrp-hsrp-vrrp',
      titleEn: 'First Hop Redundancy Protocols: HSRP and VRRP Virtual Gateways',
      titleBn: 'ফার্স্ট হপ রিডানড্যান্সি প্রোটোকল: এইচএসআরপি (HSRP) ও ভিআরআরপি (VRRP) ভার্চুয়াল গেটওয়ে',
      durationMinutes: 35,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Dual Core Router setup: Router 1 (Active, Priority 110) + Router 2 (Standby, Priority 100). Both share Virtual IP 192.168.1.1 and Virtual MAC 0000.0c07.ac01. Simulates cutting Router 1 power: Router 2 preempts within 3 seconds, PCs never lose internet.',
        descriptionBn: 'দুটি রাউটার মিলে একটিমাত্র ভার্চুয়াল আইপি তৈরি করে ব্যাকআপ থাকা। প্রধান রাউটার পুড়ে গেলেও ৩ সেকেন্ডে ব্যাকআপ রাউটার দায়িত্ব বুঝে নেওয়ার ডায়াগ্রাম।'
      },
      keyConcepts: ['Virtual IP & Virtual MAC Address', 'Active/Standby Role Negotiation', 'HSRP (Cisco) vs VRRP (IEEE Standard)', 'Preemption & Interface Tracking', 'Sub-Second Failover Timers'],
      summaryEn: 'Eliminating the default gateway single point of failure so desktop clients never lose access when a router dies.',
      summaryBn: 'একটি রাউটার নষ্ট হলেও অফিসের কম্পিউটারের গেটওয়ে কোনো ধরনের পরিবর্তন ছাড়াই স্বয়ংক্রিয়ভাবে চালু রাখার সিস্টেম।'
    },
    {
      id: 'multi-chassis-lacp-etherchannel',
      titleEn: 'Link Aggregation (LACP IEEE 802.3ad) & Multi-Chassis EtherChannel',
      titleBn: 'লিংক অ্যাগ্রিগেশন (LACP ৮০২.৩ad) এবং মাল্টি-চ্যাসিস ইথারচ্যানেল',
      durationMinutes: 30,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Bundle of 4x 1Gbps physical Ethernet cables bonded into a single Port-Channel logical 4Gbps interface. Shows frame distribution using Source-Destination IP hash algorithm preventing out-of-order delivery while bypassing STP blocking.',
        descriptionBn: '৪টি আলাদা ১ গিগাবিট তারকে একসাথে বেঁধে ৪ গিগাবিটের একটি সুপার-লিংক তৈরির কৌশল যা এসটিপি ব্লকিং এড়িয়ে চলে।'
      },
      keyConcepts: ['Link Aggregation Control Protocol (LACP)', 'Port-Channel Logical Interface', 'Load-Balancing Hash Algorithms (L2, L3, L4)', 'Active vs Passive Modes', 'STP Loop Immunity'],
      summaryEn: 'Multiplying inter-switch backbone throughput and achieving instant hardware link resilience without Spanning Tree blocking links.',
      summaryBn: 'সুইচগুলোর মাঝখানে তারের স্পিড বহুগুণ বাড়ানো এবং কোনো একটি তার ছিঁড়ে গেলেও সংযোগ সচল রাখার কৌশল।'
    },
    {
      id: 'vpn-ipsec-and-ssl-tls',
      titleEn: 'Virtual Private Networks (VPNs): Site-to-Site IPsec & Remote Access SSL',
      titleBn: 'ভার্চুয়াল প্রাইভেট নেটওয়ার্ক (VPN): সাইট-টু-সাইট IPsec ও রিমোট অ্যাক্সেস SSL',
      durationMinutes: 40,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'IPsec Site-to-Site tunnel: IKEv2 Phase 1 (Diffie-Hellman Key Exchange over UDP 500) creates secure management tunnel -> Phase 2 negotiates ESP encryption (AES-256-GCM) -> Original IP packet encapsulated inside new IPsec header -> Traverses public Internet safely.',
        descriptionBn: 'পাবলিক ইন্টারনেটের খোলা তারের ওপর দিয়ে এনক্রিপ্টেড টানেল (IPsec) বানিয়ে দুটি অফিসের অভ্যন্তরীণ নেটওয়ার্ক জোড়া লাগানোর অ্যানিমেশন।'
      },
      keyConcepts: ['Internet Key Exchange (IKEv1 / IKEv2)', 'Encapsulating Security Payload (ESP)', 'Diffie-Hellman Key Agreement', 'Site-to-Site vs Remote Access (SSL/TLS)', 'Split Tunneling vs Full Tunneling'],
      summaryEn: 'Extending private corporate LANs securely across the insecure public Internet through military-grade encryption.',
      summaryBn: 'ইন্টারনেটের ভেতর দিয়ে সম্পূর্ণ নিরাপদ গোপন সুড়ঙ্গ বানিয়ে দূরবর্তী ব্রাঞ্চ ও কর্মীদের যুক্ত করার প্রযুক্তি।'
    },
    {
      id: 'quality-of-service-qos-traffic-shaping',
      titleEn: 'Quality of Service (QoS): Classification, Marking, Queuing, and Policing',
      titleBn: 'কোয়ালিটি অব সার্ভিস (QoS): ক্লাসিফিকেশন, মার্কিং, কিউইং ও পলিসিং',
      durationMinutes: 35,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'QoS pipeline under network congestion: Packet Ingress -> Classification (VoIP detected) -> Marking (DSCP EF 46) -> Strict Priority Queue (VoIP sent first with 0 jitter) -> Best Effort Queue (File downloads throttled/buffered without starving).',
        descriptionBn: 'নেটওয়ার্কে জ্যাম লাগলে কীভাবে ভয়েস বা ভিডিও কল সবার আগে অগ্রাধিকার পায় এবং ফাইল ডাউনলোডের স্পিড সাময়িক কমিয়ে কল ক্লিয়ার রাখা হয়।'
      },
      keyConcepts: ['Differentiated Services Code Point (DSCP)', 'Class of Service (CoS Layer 2)', 'Low Latency Queuing (LLQ / Priority Queue)', 'Traffic Policing (Hard drop) vs Traffic Shaping (Buffer delay)'],
      summaryEn: 'Guaranteeing deterministic latency, bandwidth, and zero jitter for real-time voice and video during network congestion.',
      summaryBn: 'নেটওয়ার্কে ট্রাফিক জ্যাম থাকা সত্ত্বেও গুরুত্বপূর্ণ কাজের জন্য ইন্টারনেট গতি নিশ্চিত করার ব্যবস্থাপনা।'
    },
    {
      id: 'software-defined-networking-sdn',
      titleEn: 'Software-Defined Networking (SDN) Fundamentals & OpenFlow',
      titleBn: 'সফটওয়্যার-ডিফাইন্ড নেটওয়ার্কিং (SDN) এবং ওপেনফ্লো (OpenFlow)',
      durationMinutes: 35,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'SDN 3-Tier Architecture: Application Plane (Business apps, firewall orchestration) -> Northbound REST APIs -> Control Plane (Centralized SDN Controller: OpenDaylight, Cisco DNA Center) -> Southbound APIs (OpenFlow, NETCONF) -> Data Plane (Whitebox dumb forwarding switches).',
        descriptionBn: 'রাউটার ও সুইচের মস্তিষ্ক (কন্ট্রোল প্লেন) আলাদা করে এক কেন্দ্রীয় সার্ভার বা সফটওয়্যার দিয়ে পুরো নেটওয়ার্ক নিয়ন্ত্রণের রূপরেখা।'
      },
      keyConcepts: ['Decoupling Control Plane from Data Plane', 'Centralized Network Intelligence', 'Northbound APIs vs Southbound APIs', 'OpenFlow & NETCONF/YANG', 'Network Programmability & Automation'],
      summaryEn: 'The modern paradigm shifting network management from individual box-by-box CLI typing to centralized software orchestration.',
      summaryBn: 'প্রতিটি সুইচে গিয়ে গিয়ে কাজ করার দিন শেষ করে সফটওয়্যার ও কোডিং দিয়ে একসাথে পুরো নেটওয়ার্ক চালানোর ভবিষ্যৎ প্রযুক্তি।'
    },
    {
      id: 'network-virtualization-vxlan-nfv',
      titleEn: 'Network Virtualization, Overlay Networks, and VXLAN (RFC 7348)',
      titleBn: 'নেটওয়ার্ক ভার্চুয়ালাইজেশন, ওভারলে নেটওয়ার্ক এবং VXLAN (RFC 7348)',
      durationMinutes: 35,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'VXLAN packet encapsulation: Original L2 VM Ethernet frame wrapped in 8-byte VXLAN header (24-bit VNI = 16 million virtual segments, blowing past the 4096 VLAN limit) -> encapsulated inside UDP packet (port 4789) -> routed seamlessly across standard Layer 3 IP Underlay spine-leaf fabric.',
        descriptionBn: 'ক্লাউড ডেটা সেন্টারে ৪০০০ ভি-ল্যানের সীমাবদ্ধতা ভেঙে ১ কোটি ৬০ লাখ ভার্চুয়াল নেটওয়ার্ক তৈরির ভিএক্স-ল্যান (VXLAN) টেকনোলজি।'
      },
      keyConcepts: ['Underlay vs Overlay Network', 'VXLAN Network Identifier (24-bit VNI)', 'VTEP (VXLAN Tunnel End Point)', 'UDP Port 4789 Encapsulation', 'Network Functions Virtualization (NFV)'],
      summaryEn: 'How multi-tenant hyper-scale cloud data centers stretch Layer 2 broadcast domains across Layer 3 routed spine-and-leaf fabrics.',
      summaryBn: 'গুগল, অ্যামাজন ও মাইক্রোসফটের মতো বিশাল ক্লাউড ডেটা সেন্টার কীভাবে ভার্চুয়াল নেটওয়ার্ক পরিচালনা করে।'
    },
    {
      id: 'cloud-networking-vpc-architecture',
      titleEn: 'Cloud Networking Architecture: AWS/GCP VPC, Subnets, Gateways, and Peering',
      titleBn: 'ক্লাউড নেটওয়ার্কিং আর্কিটেকচার: ভিপিসি (VPC), সাবনেট, গেটওয়ে এবং পিয়ারিং',
      durationMinutes: 40,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Enterprise Cloud VPC Architecture: Virtual Private Cloud (10.0.0.0/16) -> Public Subnet (Web tier connected to Internet Gateway) -> Private Subnet (Database tier connected via NAT Gateway) -> Transit Gateway routing to on-premise office via 10Gbps Direct Connect / Interconnect.',
        descriptionBn: 'ক্লাউডে নিজস্ব ভার্চুয়াল নেটওয়ার্ক (VPC) তৈরি, পাবলিক ও প্রাইভেট সাবনেট ভাগ করা, ক্লাউড ন্যাট গেটওয়ে এবং অন-প্রিমিস অফিসের সাথে সরাসরি সংযোগ।'
      },
      keyConcepts: ['Virtual Private Cloud (VPC)', 'Public Subnet vs Private Subnet', 'Internet Gateway (IGW) vs NAT Gateway', 'VPC Peering & Transit Gateway', 'Dedicated Cloud Interconnect (Direct Connect / ExpressRoute)'],
      summaryEn: 'Architecting secure, isolated virtual cloud infrastructure and interconnecting enterprise on-premises networks to public clouds.',
      summaryBn: 'ক্লাউড কম্পিউটিংয়ে কর্পোরেট নেটওয়ার্কের কাঠামো তৈরি এবং স্থানীয় অফিসের সাথে হাইব্রিড ক্লাউড কানেকশন।'
    },
    {
      id: 'capacity-planning-disaster-recovery',
      titleEn: 'Enterprise Capacity Planning, SLA, and Disaster Recovery (DR)',
      titleBn: 'এন্টারপ্রাইজ ক্যাপাসিটি প্ল্যানিং, SLA এবং ডিজাস্টার রিকভারি (DR)',
      durationMinutes: 30,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Active-Active Dual Data Center Disaster Recovery: Primary Data Center (Dhaka) synchronously replicating storage via dark fiber to DR Data Center (Chittagong). Simulates total metropolitan blackout: Global Server Load Balancer (GSLB) reroutes traffic with RPO = 0 seconds, RTO < 30 seconds.',
        descriptionBn: 'এক শহরের ডেটা সেন্টার ভূমিকম্প বা আগুনে পুড়ে গেলেও দ্বিতীয় শহরের ব্যাকআপ ডেটা সেন্টার দিয়ে কয়েক সেকেন্ডে সার্ভিস চালু রাখার রূপরেখা।'
      },
      keyConcepts: ['Recovery Point Objective (RPO)', 'Recovery Time Objective (RTO)', 'Service Level Agreement (SLA)', 'Mean Time Between Failures (MTBF) & MTTR', 'Global Server Load Balancing (GSLB)'],
      summaryEn: 'Engineering resilient, highly available networks that guarantee business survival through catastrophic physical disasters.',
      summaryBn: 'যেকোনো প্রাকৃতিক দুর্যোগ বা দুর্ঘটনায় প্রতিষ্ঠানের শত কোটি টাকার ডেটা ও সার্ভিস সচল রাখার পেশাদার রূপরেখা।'
    }
  ]
};
