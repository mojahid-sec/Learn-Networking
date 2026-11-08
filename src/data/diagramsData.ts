export interface DiagramItem {
  id: string;
  titleEn: string;
  titleBn: string;
  category: 'Models' | 'Devices' | 'Protocols' | 'Topologies' | 'Addressing' | 'Architecture';
  type: 'Interactive SVG' | 'Animated Flow' | 'Topology View' | 'Live Simulator';
  descEn: string;
  descBn: string;
  nodesCount: number;
  featured: boolean;
}

export const diagramsData: DiagramItem[] = [
  {
    id: 'diag-osi-layers',
    titleEn: 'OSI 7-Layer Protocol Encapsulation & Decapsulation',
    titleBn: 'ওএসআই ৭-লেয়ার প্রোটোকল এনক্যাপসুলেশন ও ডিক্যাপসুলেশন পাইপলাইন',
    category: 'Models',
    type: 'Interactive SVG',
    descEn: 'Interactive vertical model from Layer 7 (Application) down to Layer 1 (Physical Bits) showing header additions, trailers, and PDU transformations.',
    descBn: 'লেয়ার ৭ থেকে লেয়ার ১ পর্যন্ত প্রতিটি ধাপে কীভাবে হেডার ও ট্রেলার যুক্ত হয়ে ডেটা বিটে রূপান্তরিত হয় তার সম্পূর্ণ চিত্র।',
    nodesCount: 7,
    featured: true
  },
  {
    id: 'diag-tcp-ip-model',
    titleEn: 'TCP/IP 4-Layer Stack vs OSI 7-Layer Architecture',
    titleBn: 'টিসিপি/আইপি ৪-লেয়ার মডেল বনাম ওএসআই ৭-লেয়ার তুলনা',
    category: 'Models',
    type: 'Interactive SVG',
    descEn: 'Side-by-side mapping between the DoD TCP/IP model (Application, Transport, Internet, Network Access) and the ISO OSI 7-Layer framework.',
    descBn: 'টিসিপি/আইপি ৪টি লেয়ার এবং ওএসআই ৭টি লেয়ারের মধ্যকার সরাসরি সংযোগ ও প্রোটোকল ম্যাপিং ডায়াগ্রাম।',
    nodesCount: 11,
    featured: true
  },
  {
    id: 'diag-topologies',
    titleEn: 'Network Topologies: Bus, Star, Ring, Mesh, Tree, and Hybrid',
    titleBn: 'নেটওয়ার্ক টপোলজি: বাস, স্টার, রিং, মেশ, ট্রি এবং হাইব্রিড আর্কিটেকচার',
    category: 'Topologies',
    type: 'Topology View',
    descEn: 'Interactive structural layout switcher examining single points of failure, cabling requirements, and data propagation across all 6 physical network topologies.',
    descBn: 'বাস, স্টার, রিং, মেশ, ট্রি ও হাইব্রিড টপোলজির গঠন, ডেটা প্রবাহের গতি এবং ক্যাবলিং সুবিধার ইন্টারেক্টিভ তুলনা।',
    nodesCount: 16,
    featured: true
  },
  {
    id: 'diag-router-forwarding',
    titleEn: 'Router Packet Forwarding & Routing Table Decision',
    titleBn: 'রাউটার প্যাকেট ফরওয়ার্ডিং ও রাউটিং টেবিল সিদ্ধান্ত প্রক্রিয়া',
    category: 'Devices',
    type: 'Live Simulator',
    descEn: 'Visualizes an incoming IP packet, destination IP extraction, Longest Prefix Match (LPM), TTL decrement (64 to 63), MAC rewrite, and egress forwarding.',
    descBn: 'ইনকামিং আইপি প্যাকেট গ্রহণ, গন্তব্য আইপি যাচাই, রাউটিং টেবিলে সঠিক রুট খুঁজে বের করা এবং আউটগোয়িং পোর্টে প্যাকেট পাঠানোর দৃশ্যমান অ্যানিমেশন।',
    nodesCount: 5,
    featured: true
  },
  {
    id: 'diag-switch-learning',
    titleEn: 'Ethernet Switch MAC Table Learning & Collision Domains',
    titleBn: 'ইথারনেট সুইচ ম্যাক টেবিল লার্নিং ও কলিশন ডোমেইন',
    category: 'Devices',
    type: 'Live Simulator',
    descEn: 'Interactive CAM table learning demonstration showing how switches inspect source MACs, forward known unicasts, and isolate collision domains.',
    descBn: 'সুইচে সংযুক্ত ৪টি কম্পিউটারের মধ্যে ডেটা ফ্রেম আদান-প্রদান এবং কীভাবে পোর্ট ভিত্তিক ম্যাক অ্যাড্রেস সংরক্ষিত হয় তার ভিজ্যুয়াল উপস্থাপনা।',
    nodesCount: 6,
    featured: true
  },
  {
    id: 'diag-dns-flow',
    titleEn: 'DNS Resolution Chain (Recursive & Iterative)',
    titleBn: 'ডিএনএস রেজোলিউশন চেইন (রিকার্সিভ ও ইটারেটিভ কুয়েরি)',
    category: 'Protocols',
    type: 'Live Simulator',
    descEn: 'Follow an interactive packet from browser stub resolver to recursive resolver, Root (.), TLD (.org), and Authoritative server with TTL caching.',
    descBn: 'ব্রাউজার থেকে শুরু করে রুট সার্ভার, টিএলডি সার্ভার হয়ে ফাইনাল অথরিটেটিভ সার্ভার থেকে আইপি উদ্ধারের সমগ্র প্রবাহ।',
    nodesCount: 6,
    featured: true
  },
  {
    id: 'diag-dhcp-dora',
    titleEn: 'DHCP 4-Way DORA Handshake (Discover, Offer, Request, Ack)',
    titleBn: 'ডিএইচসিপি ৪-ধাপ DORA হ্যান্ডশেক প্রক্রিয়া',
    category: 'Protocols',
    type: 'Live Simulator',
    descEn: 'Broadcast Discover (0.0.0.0 to 255.255.255.255), Unicast Offer, Request, and final Acknowledgement assigning IP, Subnet, and Gateway.',
    descBn: 'নতুন ডিভাইস যুক্ত হলে স্বয়ংক্রিয়ভাবে কীভাবে আইপি অ্যাড্রেস, সাবনেট মাস্ক এবং গেটওয়ে বরাদ্দ হয় তার ৪টি সুনির্দিষ্ট ধাপ।',
    nodesCount: 4,
    featured: true
  },
  {
    id: 'diag-tcp-handshake',
    titleEn: 'TCP 3-Way Handshake (SYN, SYN-ACK, ACK) & Teardown',
    titleBn: 'টিসিপি ৩-ওয়ে হ্যান্ডশেক ও ৪-ধাপ টিয়ারডাউন প্রোটোকল',
    category: 'Protocols',
    type: 'Live Simulator',
    descEn: 'Step-by-step TCP transport layer connection establishment showing sequence numbers, acknowledgement tracking, and FIN/ACK teardown.',
    descBn: 'ক্লায়েন্ট ও সার্ভারের মধ্যে নিরাপদ ও নির্ভরযোগ্য সংযোগ স্থাপন, সিকোয়েন্স নম্বর সিনক্রোনাইজেশন এবং সংযোগ সমাপ্তি।',
    nodesCount: 2,
    featured: true
  },
  {
    id: 'diag-subnet-anatomy',
    titleEn: 'IPv4 32-Bit Subnet Anatomy: Network vs Host Boundary',
    titleBn: 'আইপিভি৪ ৩২-বিট সাবনেট অ্যানাটমি: নেটওয়ার্ক ও হোস্ট সীমানা',
    category: 'Addressing',
    type: 'Live Simulator',
    descEn: 'Interactive bit-level visual slider showing how shifting the CIDR boundary changes the number of subnets versus usable hosts.',
    descBn: '৩২টি বিটের মধ্যে কোনগুলো নেটওয়ার্ক এবং কোনগুলো হোস্টের জন্য নির্ধারিত, তা স্লাইডারের মাধ্যমে পরিবর্তন করে দেখার ভিজ্যুয়াল চার্ট।',
    nodesCount: 32,
    featured: true
  },
  {
    id: 'diag-vlan-segmentation',
    titleEn: 'IEEE 802.1Q VLAN Tagging & Broadcast Domain Isolation',
    titleBn: 'আইইইই ৮০২.১কিউ ভি-ল্যান ট্যাগিং ও ব্রডকাস্ট ডোমেইন বিভাজন',
    category: 'Architecture',
    type: 'Interactive SVG',
    descEn: 'Visualizes how a single physical switch divides into isolated virtual local area networks (VLAN 10 Engineering vs VLAN 20 Finance) with 802.1Q trunking.',
    descBn: 'একটি ফিজিক্যাল সুইচকে লজিক্যালি একাধিক ভার্চুয়াল নেটওয়ার্কে ভাগ করে সিকিউরিটি ও ব্রডকাস্ট কমানোর চিত্র।',
    nodesCount: 8,
    featured: false
  },
  {
    id: 'diag-packet-transmission',
    titleEn: 'End-to-End Packet Encapsulation & Hop-by-Hop Transmission',
    titleBn: 'এন্ড-টু-এন্ড প্যাকেট এনক্যাপসুলেশন ও হপ-বাই-হপ ডেটা ট্রান্সমিশন',
    category: 'Architecture',
    type: 'Animated Flow',
    descEn: 'Traces data from PC-1 -> Switch -> Router-A -> Internet -> Router-B -> Switch -> Web Server, highlighting constant Layer 3 IPs vs changing Layer 2 MACs.',
    descBn: 'একটি কম্পিউটার থেকে সার্ভারে ডেটা যাওয়ার সময় কীভাবে আইপি অপরিবর্তিত থাকে কিন্তু প্রতি হপে ম্যাক অ্যাড্রেস বদলে যায় তার চিত্র।',
    nodesCount: 7,
    featured: false
  }
];
