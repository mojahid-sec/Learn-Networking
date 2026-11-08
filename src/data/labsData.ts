export interface LabStep {
  stepNumber: number;
  titleEn: string;
  titleBn: string;
  instructionsEn: string;
  instructionsBn: string;
  commandSnippet?: string;
  commandOptionsExplanation?: { option: string; purposeEn: string; purposeBn: string }[];
  expectedOutput?: string;
  outputExplanationEn?: string;
  outputExplanationBn?: string;
}

export interface DetailedLab {
  // 1. Lab Title
  id: string;
  titleEn: string;
  titleBn: string;
  category: 
    | 'Basic Networking'
    | 'IP Addressing'
    | 'Windows Networking'
    | 'Linux & Kali Linux'
    | 'Routing & Switching'
    | 'Network Analysis (Wireshark)';
  
  // 2. Difficulty Level
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeEstimate: string;
  descEn: string;
  descBn: string;

  // 3. Learning Objectives
  learningObjectives: { en: string; bn: string }[];

  // 4. Required Tools
  requiredTools: string[];

  // 5. Required Knowledge & Prerequisites
  requiredKnowledge: { en: string; bn: string }[];

  // 6. Network Topology Diagram Specification
  topology: {
    type: 'Point-to-Point' | 'Star LAN' | 'Three-Tier Campus' | 'Router-to-ISP' | 'Multi-VLAN Switched';
    descriptionEn: string;
    descriptionBn: string;
    nodes: { name: string; ip: string; role: string }[];
  };

  // 7, 8, 9, 10. Step-by-Step Instructions, Commands, Expected Output & Explanation
  steps: LabStep[];

  // 11. Troubleshooting
  troubleshooting: { symptomEn: string; symptomBn: string; resolutionEn: string; resolutionBn: string }[];

  // 12. Common Mistakes
  commonMistakes: { mistakeEn: string; mistakeBn: string; correctionEn: string; correctionBn: string }[];

  // 13. Practice Challenge
  practiceChallenge: { challengeEn: string; challengeBn: string; hintEn: string; hintBn: string };

  // Interactive Sandbox Hook (optional embedded simulation tool)
  interactiveTool?: 'subnet-calc' | 'switch-cam' | 'packet-tracer' | 'cli-terminal';
}

export const labsData: DetailedLab[] = [
  // 1. BASIC NETWORKING LAB
  {
    id: 'lab-basic-lan-ping',
    titleEn: 'Basic LAN Setup & End-to-End ICMP Connectivity Verification',
    titleBn: 'বেসিক লোকাল এরিয়া নেটওয়ার্ক (LAN) তৈরি ও পিং দিয়ে সংযোগ পরীক্ষা',
    category: 'Basic Networking',
    difficulty: 'Beginner',
    timeEstimate: '20 mins',
    descEn: 'Connect two workstations directly or through a switch, configure static IPv4 addresses in the same subnet, and verify Layer 3 connectivity using ping.',
    descBn: 'দুটি কম্পিউটারকে ক্যাবল বা সুইচের মাধ্যমে যুক্ত করে একই সাবনেটের আইপি বসানো এবং পিং কমান্ড দিয়ে শতভাগ সংযোগ নিশ্চিত করার মৌলিক ল্যাব।',
    learningObjectives: [
      { en: 'Understand physical Ethernet network interface configuration', bn: 'ইথারনেট নেটওয়ার্ক ইন্টারফেস কনফিগারেশন বোঝা' },
      { en: 'Assign compliant static IPv4 addresses within the same broadcast domain', bn: 'একই ব্রডকাস্ট ডোমেইনে সঠিক আইপিভি৪ অ্যাড্রেস নির্ধারণ' },
      { en: 'Diagnose Layer 1-3 connectivity using ICMP Echo Request and Echo Reply', bn: 'আইসিএমপি পিং কমান্ড দিয়ে লেয়ার ১ থেকে ৩ এর ত্রুটি নির্ণয়' }
    ],
    requiredTools: ['Windows Command Prompt / Linux Bash', 'Cisco Packet Tracer (or 2 physical PCs + Cat6 UTP cable)'],
    requiredKnowledge: [
      { en: 'Understanding of IPv4 dotted decimal notation and /24 subnet masks', bn: 'আইপিভি৪ অ্যাড্রেস এবং /২৪ সাবনেট মাস্কের মৌলিক জ্ঞান' }
    ],
    topology: {
      type: 'Point-to-Point',
      descriptionEn: 'PC-A (192.168.1.10/24) connected via Cat6 RJ45 patch cable to Switch Port Fa0/1; PC-B (192.168.1.20/24) connected to Switch Port Fa0/2.',
      descriptionBn: 'পিসি-এ (192.168.1.10) সুইচের Fa0/1 পোর্টে এবং পিসি-বি (192.168.1.20) সুইচের Fa0/2 পোর্টে ক্যাবল দিয়ে যুক্ত।',
      nodes: [
        { name: 'PC-A', ip: '192.168.1.10/24', role: 'Workstation 1' },
        { name: 'Switch-1', ip: 'Unmanaged Layer 2', role: 'Ethernet Switch' },
        { name: 'PC-B', ip: '192.168.1.20/24', role: 'Workstation 2' }
      ]
    },
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Verify Network Interface Configuration on PC-A',
        titleBn: 'পিসি-এ তে নেটওয়ার্ক ইন্টারফেস ও আইপি নিশ্চিত করা',
        instructionsEn: 'Open terminal and display active network adapters to confirm IP 192.168.1.10 is assigned to the interface.',
        instructionsBn: 'কমান্ড প্রম্পট বা টার্মিনাল খুলে আইপি ঠিকমতো বসেছে কি না তা যাচাই করুন।',
        commandSnippet: 'ipconfig /all  # On Windows\n# Or on Linux / Kali:\nip addr show dev eth0',
        commandOptionsExplanation: [
          { option: '/all', purposeEn: 'Shows complete network adapter details including MAC address and DHCP status.', purposeBn: 'ম্যাক অ্যাড্রেস ও ডিএইচসিপি স্ট্যাটাসসহ পূর্ণাঙ্গ বিবরণ প্রদর্শন করে।' }
        ],
        expectedOutput: 'Ethernet adapter Ethernet0:\n   IPv4 Address. . . . . . . . . . . : 192.168.1.10\n   Subnet Mask . . . . . . . . . . . : 255.255.255.0\n   Default Gateway . . . . . . . . . : 192.168.1.1',
        outputExplanationEn: 'Confirms that PC-A has IP 192.168.1.10 with a /24 (255.255.255.0) subnet mask.',
        outputExplanationBn: 'নিশ্চিত করে যে পিসি-এ তে /২৪ সাবনেট মাস্কসহ আইপি 192.168.1.10 সক্রিয় রয়েছে।'
      },
      {
        stepNumber: 2,
        titleEn: 'Execute ICMP Echo Request (Ping) to PC-B',
        titleBn: 'পিসি-বি কে উদ্দেশ্য করে পিং পাঠানো',
        instructionsEn: 'Transmit 4 ICMP Echo Request packets to PC-B (192.168.1.20) to test round-trip time and packet loss.',
        instructionsBn: 'পিসি-বি (192.168.1.20) এর দিকে ৪টি আইসিএমপি প্যাকেট পাঠিয়ে রেসপন্স টাইম ও কোনো প্যাকেট লস আছে কি না দেখুন।',
        commandSnippet: 'ping 192.168.1.20',
        commandOptionsExplanation: [
          { option: '-c 4 (Linux)', purposeEn: 'Limits packet count to 4 (Windows defaults to 4 automatically).', purposeBn: 'প্যাকেট সংখ্যা ৪টিতে সীমাবদ্ধ রাখে।' }
        ],
        expectedOutput: 'Pinging 192.168.1.20 with 32 bytes of data:\nReply from 192.168.1.20: bytes=32 time<1ms TTL=128\nReply from 192.168.1.20: bytes=32 time<1ms TTL=128\nReply from 192.168.1.20: bytes=32 time<1ms TTL=128\nReply from 192.168.1.20: bytes=32 time<1ms TTL=128\n\nPing statistics for 192.168.1.20:\n    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)',
        outputExplanationEn: '4 successful replies received in <1ms with 0% packet loss. Confirms Layer 1 physical cable, Layer 2 Ethernet switching, and Layer 3 IP routing are fully functional.',
        outputExplanationBn: '৪টি সফল রিপ্লাই এসেছে এবং ০% প্যাকেট লস। এর মাধ্যমে প্রমাণিত হলো ক্যাবল, সুইচ এবং আইপি কনফিগারেশন শতভাগ নির্ভুল।'
      }
    ],
    troubleshooting: [
      {
        symptomEn: '"Request timed out" when pinging PC-B',
        symptomBn: 'পিং করার পর "Request timed out" লেখা আসা',
        resolutionEn: 'Windows Defender Firewall on PC-B is blocking incoming ICMP Echo Requests by default. Turn off firewall temporarily or enable File and Printer Sharing (Echo Request ICMPv4-In).',
        resolutionBn: 'পিসি-বি এর উইন্ডোজ ফায়ারওয়াল ডিফল্টভাবে আইসিএমপি ব্লক করে রেখেছে। ফায়ারওয়ালে আইসিএমপি এলাউ করুন।'
      },
      {
        symptomEn: '"Destination host unreachable"',
        symptomBn: '"Destination host unreachable" প্রদর্শন করা',
        resolutionEn: 'PC-A and PC-B have mismatched subnet masks or are on different IP subnets (e.g. 192.168.1.10/24 vs 192.168.2.20/24) with no router.',
        resolutionBn: 'উভয় পিসিতে ভিন্ন ভিন্ন সাবনেটের আইপি বসানো হয়েছে অথচ মাঝে কোনো রাউটার নেই।'
      }
    ],
    commonMistakes: [
      {
        mistakeEn: 'Assigning the exact same IP address (192.168.1.10) to both computers.',
        mistakeBn: 'দুটি কম্পিউটারেই একই আইপি বসিয়ে দেওয়া।',
        correctionEn: 'Duplicate IP address collision triggers Gratuitous ARP error and shuts down the adapter. Each host MUST have a unique host ID!',
        correctionBn: 'এতে আইপি কনফ্লিক্ট এরর হবে। প্রতিটি পিসির আইপি অবশ্যই ইউনিক হতে হবে।'
      }
    ],
    practiceChallenge: {
      challengeEn: 'Change PC-B\'s subnet mask to 255.255.255.128 (/25) while keeping PC-A on 255.255.255.0 (/24). Can PC-A still ping PC-B? What happens if PC-B pings PC-A? Explain why.',
      challengeBn: 'পিসি-বি এর মাস্ক /২৫ করে দিন কিন্তু পিসি-এ কে /২৪ এ রাখুন। তারা কি একে অপরকে পিং করতে পারবে? কারণ বিশ্লেষণ করুন।',
      hintEn: 'Check if 192.168.1.10 falls inside PC-B\'s /25 local range (.0 to .127).',
      hintBn: 'পিসি-বি এর জন্য .০ থেকে .১২৭ হলো নিজস্ব লোকাল সাবনেট।'
    },
    interactiveTool: 'cli-terminal'
  },

  // 2. IP ADDRESSING & SUBNETTING LAB
  {
    id: 'lab-subnet-calculator',
    titleEn: 'IPv4 CIDR Subnet Calculator & Address Planner',
    titleBn: 'আইপিভি৪ সিআইডিআর সাবনেট ক্যালকুলেটর ও অ্যাড্রেস প্ল্যানার',
    category: 'IP Addressing',
    difficulty: 'Intermediate',
    timeEstimate: '25 mins',
    descEn: 'Design an enterprise IP addressing scheme: Calculate Network Address, Broadcast Address, Usable Host Range, and binary bit masks for variable prefix lengths (/24 to /30).',
    descBn: 'একটি পূর্ণাঙ্গ সাবনেট ডিজাইন ল্যাব: নেটওয়ার্ক অ্যাড্রেস, ব্রডকাস্ট অ্যাড্রেস, ব্যবহারযোগ্য আইপি রেঞ্জ এবং বাইনারি বিট মাস্ক নিখুঁতভাবে হিসাব করার বাস্তব অনুশীলন।',
    learningObjectives: [
      { en: 'Calculate network and broadcast addresses using binary bitwise ANDing', bn: 'বাইনারি এন্ড অপারেশনের মাধ্যমে নেটওয়ার্ক ও ব্রডকাস্ট বের করা' },
      { en: 'Master the 2^H - 2 usable host formula for precision sizing', bn: '২^H - ২ সূত্রের সাহায্যে নিখুঁত হোস্ট সংখ্যা নির্ধারণ' },
      { en: 'Prevent overlapping subnet errors in enterprise network design', bn: 'সাবনেট ওভারল্যাপ বা ভুল প্রতিরোধে পারদর্শী হওয়া' }
    ],
    requiredTools: ['Interactive Subnet Visualizer / ipcalc CLI utility', 'Paper and binary workspace'],
    requiredKnowledge: [
      { en: 'Binary powers of 2 (128, 64, 32, 16, 8, 4, 2, 1)', bn: '২-এর বাইনারি পাওয়ারসমূহের মান' }
    ],
    topology: {
      type: 'Star LAN',
      descriptionEn: 'Company Branch Network requiring 4 separate departmental subnets carved out of base block 192.168.10.0/24.',
      descriptionBn: '১৯২.১৬৮.১০.০/২৪ ব্লক থেকে ৪টি বিভাগের জন্য ৪টি সমান সাবনেট তৈরি।',
      nodes: [
        { name: 'Engineering', ip: '192.168.10.0/26 (62 Hosts)', role: 'Subnet 1' },
        { name: 'Finance', ip: '192.168.10.64/26 (62 Hosts)', role: 'Subnet 2' },
        { name: 'HR', ip: '192.168.10.128/26 (62 Hosts)', role: 'Subnet 3' },
        { name: 'Management', ip: '192.168.10.192/26 (62 Hosts)', role: 'Subnet 4' }
      ]
    },
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Perform CIDR Calculation for /26 Subnet',
        titleBn: '/২৬ প্রিফিক্সের জন্য সাবনেট মাস্ক ও হোস্ট সংখ্যা নির্ণয়',
        instructionsEn: 'Given 192.168.10.0/24, borrow 2 bits to create 4 subnets (/26). Calculate host bits: H = 32 - 26 = 6. Usable hosts = 2^6 - 2 = 62.',
        instructionsBn: '২৪ থেকে ২টি বিট ধার নিয়ে /২৬ সাবনেট বানান। বাকি হোস্ট বিট ৬টি। ব্যবহারযোগ্য পিসি ৬২টি।',
        commandSnippet: 'ipcalc 192.168.10.0/26',
        expectedOutput: 'Address:   192.168.10.0         11000000.10101000.00001010.00 000000\nNetmask:   255.255.255.192 = 26 11111111.11111111.11111111.11 000000\nWildcard:  0.0.0.63\n=>\nNetwork:   192.168.10.0/26\nHostMin:   192.168.10.1\nHostMax:   192.168.10.62\nBroadcast: 192.168.10.63\nHosts/Net: 62',
        outputExplanationEn: 'Displays the first subnet range (.1 to .62) with broadcast .63.',
        outputExplanationBn: 'প্রথম সাবনেটের রেঞ্জ (.১ থেকে .৬২) এবং ব্রডকাস্ট .৬৩ প্রদর্শন করে।'
      }
    ],
    troubleshooting: [
      {
        symptomEn: 'Operating system says "The combination of IP address and subnet mask is invalid"',
        symptomBn: 'আইপি ও সাবনেট মাস্ক ইনভ্যালিড এরর দেখানো',
        resolutionEn: 'You entered either the Network ID (e.g. .0 or .64) or the Broadcast IP (e.g. .63 or .127) as the host IP. Use an address within the valid usable host range.',
        resolutionBn: 'আপনি ভুল করে নেটওয়ার্ক বা ব্রডকাস্ট আইপি বসিয়েছেন। এর পরিবর্তে মধ্যবর্তী ভ্যালিড হোস্ট আইপি ব্যবহার করুন।'
      }
    ],
    commonMistakes: [
      {
        mistakeEn: 'Forgetting to subtract 2 for Network and Broadcast addresses.',
        mistakeBn: '২^H থেকে নেটওয়ার্ক ও ব্রডকাস্টের জন্য ২টি আইপি বাদ দিতে ভুলে যাওয়া।',
        correctionEn: 'Always use formula: 2^H - 2 for usable hosts!',
        correctionBn: 'সর্বদা ২^H - ২ সূত্র মনে রাখুন।'
      }
    ],
    practiceChallenge: {
      challengeEn: 'A point-to-point router WAN link requires only 2 usable IP addresses. What CIDR slash prefix should be used? What is its subnet mask?',
      challengeBn: 'দুটি রাউটারের সরাসরি তারে মাত্র ২টি আইপি প্রয়োজন। কোন সিআইডিআর প্রিফিক্স ও সাবনেট মাস্ক ব্যবহার করবেন?',
      hintEn: '2^2 - 2 = 2 usable hosts.',
      hintBn: '/৩০ প্রিফিক্স (255.255.255.252) ব্যবহার করুন।'
    },
    interactiveTool: 'subnet-calc'
  },

  // 3. WINDOWS NETWORKING LAB
  {
    id: 'lab-windows-diagnostics',
    titleEn: 'Windows Network Administration: ipconfig, ping, tracert, nslookup, route',
    titleBn: 'উইন্ডোজ নেটওয়ার্ক অ্যাডমিনিস্ট্রেশন ও ডায়াগনস্টিকস ল্যাব',
    category: 'Windows Networking',
    difficulty: 'Intermediate',
    timeEstimate: '30 mins',
    descEn: 'Master the core suite of Windows command-line networking tools: Inspect adapters with ipconfig, trace latency with pathping, resolve DNS with nslookup, and modify the routing table.',
    descBn: 'উইন্ডোজের মূল কমান্ড লাইন টুলসের ব্যবহারিক জ্ঞান: ipconfig, pathping, nslookup, arp এবং উইন্ডোজ রুট টেবিল সম্পাদনা।',
    learningObjectives: [
      { en: 'Troubleshoot DNS issues using ipconfig /flushdns and nslookup', bn: 'ডিএনএস ক্যাশ পরিষ্কার ও nslookup দিয়ে ডোমেইন তদন্ত' },
      { en: 'Trace hop-by-hop latency and packet loss using tracert and pathping', bn: 'ট্রেসার্ট দিয়ে প্রতি হপের লেটেন্সি ও সমস্যা নির্ণয়' },
      { en: 'Inspect active socket connections and listening ports with netstat -ano', bn: 'নেটস্ট্যাট দিয়ে কোন পোর্ট কোন সফটওয়্যার চালাচ্ছে তা দেখা' }
    ],
    requiredTools: ['Windows 10 / 11 Command Prompt (Admin) or PowerShell'],
    requiredKnowledge: [
      { en: 'Basic command prompt navigation and TCP/IP port concepts', bn: 'সিএমডি কমান্ড ও টিসিপি পোর্ট ধারণা' }
    ],
    topology: {
      type: 'Router-to-ISP',
      descriptionEn: 'Windows PC -> Local Gateway Router (192.168.1.1) -> ISP Gateway -> Public Internet DNS (8.8.8.8).',
      descriptionBn: 'উইন্ডোজ পিসি থেকে রাউটার হয়ে ইন্টারনেটের দিকে যাওয়ার পথ।',
      nodes: [
        { name: 'Windows Client', ip: '192.168.1.55', role: 'Local Host' },
        { name: 'Gateway', ip: '192.168.1.1', role: 'Router' },
        { name: 'Google DNS', ip: '8.8.8.8', role: 'Remote Target' }
      ]
    },
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Flush Local DNS Resolver Cache',
        titleBn: 'লোকাল ডিএনএস ক্যাশ পরিষ্কার করা',
        instructionsEn: 'Purge stale or poisoned DNS records cached on the local Windows machine.',
        instructionsBn: 'উইন্ডোজ পিসির মেমরিতে জমে থাকা পুরোনো বা ভুল ডিএনএস রেকর্ড মুছে ফেলুন।',
        commandSnippet: 'ipconfig /flushdns',
        expectedOutput: 'Windows IP Configuration\n\nSuccessfully flushed the DNS Resolver Cache.',
        outputExplanationEn: 'Confirms that the Windows DNS client service purged all cached name records.',
        outputExplanationBn: 'নিশ্চিত করে যে উইন্ডোজ সমস্ত ক্যাশ রেকর্ড সফলভাবে মুছে ফেলেছে।'
      },
      {
        stepNumber: 2,
        titleEn: 'Trace Internet Path with Tracert',
        titleBn: 'ইন্টারনেট ট্রাফিক কোন কোন রাউটার দিয়ে যাচ্ছে তা দেখা',
        instructionsEn: 'Send ICMP packets with incrementing TTL values (1, 2, 3...) to discover every intermediate router hop.',
        instructionsBn: 'টিটিএল ১, ২, ৩ বাড়িয়ে বাড়িয়ে প্রতিটি রাউটারের আইপি ও লেটেন্সি বের করুন।',
        commandSnippet: 'tracert -d 8.8.8.8',
        commandOptionsExplanation: [
          { option: '-d', purposeEn: 'Prevents tracert from resolving IP addresses to hostnames, making the trace 10x faster.', purposeBn: 'আইপি থেকে নাম রেজোলিউশন বন্ধ রেখে ট্রেসকে ১০ গুণ দ্রুত করে।' }
        ],
        expectedOutput: 'Tracing route to 8.8.8.8 over a maximum of 30 hops\n\n  1    <1 ms    <1 ms    <1 ms  192.168.1.1\n  2     4 ms     3 ms     3 ms  103.145.12.1\n  3     8 ms     7 ms     9 ms  172.16.200.5\n  4    22 ms    21 ms    22 ms  8.8.8.8\n\nTrace complete.',
        outputExplanationEn: 'Shows Hop 1 (Local Gateway: 192.168.1.1), Hop 2 (ISP Gateway), Hop 3 (Core Router), and Hop 4 (Google DNS 8.8.8.8 in 22ms).',
        outputExplanationBn: 'প্রথম হপ লোকাল গেটওয়ে, দ্বিতীয় হপ আইএসপি এবং চতুর্থ হপে গন্তব্য ৮.৮.৮.৮ এর সফল পৌঁছানো দেখায়।'
      }
    ],
    troubleshooting: [
      {
        symptomEn: 'Tracert shows "* * * Request timed out" on intermediate hops',
        symptomBn: 'ট্রেসার্টে মাঝের কোনো হপে "* * *" দেখানো',
        resolutionEn: 'Many core ISP routers configure rate-limiting or firewall rules dropping ICMP Time Exceeded packets. If later hops respond, this is normal and not an outage.',
        resolutionBn: 'অনেক আইএসপি রাউটার আইসিএমপি ড্রপ করে। পরবর্তী হপে ট্রাফিক পৌঁছালে এটি কোনো ত্রুটি নয়।'
      }
    ],
    commonMistakes: [
      {
        mistakeEn: 'Using "traceroute" on Windows CMD instead of "tracert".',
        mistakeBn: 'উইন্ডোজ সিএমডিতে tracert এর বদলে traceroute লেখা।',
        correctionEn: 'Windows uses "tracert", while Linux and macOS use "traceroute".',
        correctionBn: 'উইন্ডোজে কমান্ডটি হলো tracert, আর লিনাক্সে traceroute।'
      }
    ],
    practiceChallenge: {
      challengeEn: 'Use "netstat -ano" in PowerShell and find which Process ID (PID) is currently listening on port 80 or 443.',
      challengeBn: 'পাওয়ারশেলে netstat -ano চালিয়ে বের করুন কোন পিআইডি (PID) পোর্ট ৮০ বা ৪৪৩ ধরে রেখেছে।',
      hintEn: 'Pipe output: netstat -ano | findstr :443',
      hintBn: 'findstr দিয়ে ফিল্টার করুন।'
    },
    interactiveTool: 'cli-terminal'
  },

  // 4. LINUX & KALI LINUX NETWORKING LAB
  {
    id: 'lab-linux-kali-diagnostics',
    titleEn: 'Linux & Kali Linux Network Diagnostics: ip, ss, dig, and tcpdump',
    titleBn: 'লিনাক্স ও কালি লিনাক্স নেটওয়ার্ক ডায়াগনস্টিকস: ip, ss, dig ও tcpdump',
    category: 'Linux & Kali Linux',
    difficulty: 'Advanced',
    timeEstimate: '35 mins',
    descEn: 'Master modern Linux iproute2 tools, socket statistics, DNS troubleshooting with dig, and packet capture with tcpdump on Ubuntu/Debian/Kali Linux.',
    descBn: 'আধুনিক লিনাক্সে iproute2 স্যুট, ss সকেট স্ট্যাটিস্টিক্স, dig দিয়ে ডিএনএস তদন্ত এবং tcpdump দিয়ে সরাসরি লাইভ প্যাকেট পরিদর্শনের অ্যাডভান্সড ল্যাব।',
    learningObjectives: [
      { en: 'Replace deprecated ifconfig with modern ip addr, ip link, and ip route', bn: 'পুরোনো ifconfig পরিহার করে আধুনিক ip কমান্ড ব্যবহার' },
      { en: 'Inspect open TCP/UDP server sockets using ss -tulnp', bn: 'সার্ভারের খোলা পোর্ট ও প্রসেসের নাম পরীক্ষা' },
      { en: 'Sniff and inspect raw live network packets on wire using tcpdump with Berkeley Packet Filters (BPF)', bn: 'tcpdump দিয়ে তারের মধ্য দিয়ে যাওয়া প্যাকেট সরাসরি দেখা' }
    ],
    requiredTools: ['Ubuntu, Debian, or Kali Linux terminal', 'tcpdump & bind9-dnsutils package'],
    requiredKnowledge: [
      { en: 'Basic Linux terminal navigation and root/sudo privileges', bn: 'লিনাক্স টার্মিনাল ও সুডো পারমিশনের জ্ঞান' }
    ],
    topology: {
      type: 'Three-Tier Campus',
      descriptionEn: 'Kali Linux Workstation (eth0) sniffing local network traffic and communicating with web servers.',
      descriptionBn: 'কালি লিনাক্স ওয়ার্কস্টেশন লোকাল নেটওয়ার্কে ট্রাফিক নিরীক্ষা করছে।',
      nodes: [
        { name: 'Kali Linux', ip: '10.0.2.15/24', role: 'Security Workstation' },
        { name: 'Default Gateway', ip: '10.0.2.2', role: 'Router' }
      ]
    },
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Inspect Listening Sockets with "ss"',
        titleBn: 'সক্রিয় লিসেনিং সকেট পরীক্ষা',
        instructionsEn: 'List all active TCP and UDP listening sockets along with process names and PIDs.',
        instructionsBn: 'সিস্টেমে কোন কোন পোর্ট খোলা আছে তা প্রসেস নামসহ বের করুন।',
        commandSnippet: 'sudo ss -tulnp',
        commandOptionsExplanation: [
          { option: '-t', purposeEn: 'Display TCP sockets.', purposeBn: 'টিসিপি সকেট প্রদর্শন করে।' },
          { option: '-u', purposeEn: 'Display UDP sockets.', purposeBn: 'ইউডিপি সকেট প্রদর্শন করে।' },
          { option: '-l', purposeEn: 'Show only listening sockets.', purposeBn: 'কেবল লিসেনিং পোর্টগুলো দেখায়।' },
          { option: '-n', purposeEn: 'Do not resolve service names (show numeric ports).', purposeBn: 'পোর্টের সংখ্যা দেখায়।' },
          { option: '-p', purposeEn: 'Show process name and PID using the socket.', purposeBn: 'সংশ্লিষ্ট সফটওয়্যার বা প্রসেস নাম দেখায়।' }
        ],
        expectedOutput: 'Netid  State   Recv-Q  Send-Q   Local Address:Port   Peer Address:Port  Process\ntcp    LISTEN  0       128            0.0.0.0:22          0.0.0.0:*      users:(("sshd",pid=782,fd=3))\ntcp    LISTEN  0       511            0.0.0.0:80          0.0.0.0:*      users:(("nginx",pid=1045,fd=6))',
        outputExplanationEn: 'Shows SSH daemon listening on port 22 (PID 782) and Nginx web server listening on port 80 (PID 1045).',
        outputExplanationBn: 'দেখা যাচ্ছে এসএসএইচ পোর্ট ২২ এবং এনজিনএক্স পোর্ট ৮০ এ সক্রিয় রয়েছে।'
      },
      {
        stepNumber: 2,
        titleEn: 'Live Packet Capture with tcpdump',
        titleBn: 'tcpdump দিয়ে লাইভ প্যাকেট ক্যাপচার',
        instructionsEn: 'Capture 5 DNS queries on interface eth0 using Berkeley Packet Filter (BPF) "port 53".',
        instructionsBn: 'পোর্ট ৫৩ দিয়ে যাওয়া ৫টি ডিএনএস প্যাকেট লাইভ ক্যাপচার করুন।',
        commandSnippet: 'sudo tcpdump -nn -i eth0 -c 5 port 53',
        commandOptionsExplanation: [
          { option: '-nn', purposeEn: 'Do not resolve hostnames or port numbers (pure numeric for speed).', purposeBn: 'সংখ্যা আকারে আইপি ও পোর্ট দ্রুত দেখায়।' },
          { option: '-i eth0', purposeEn: 'Listen on interface eth0.', purposeBn: 'eth0 ইন্টারফেসে কান পেতে শোনে।' },
          { option: '-c 5', purposeEn: 'Exit after capturing 5 matching packets.', purposeBn: '৫টি প্যাকেট পাওয়ার পর বন্ধ হয়।' }
        ],
        expectedOutput: '14:22:10.105 IP 10.0.2.15.53421 > 8.8.8.8.53: 12345+ A? google.com. (28)\n14:22:10.125 IP 8.8.8.8.53 > 10.0.2.15.53421: 12345 1/0/0 A 142.250.190.46 (44)',
        outputExplanationEn: 'Shows outgoing DNS query from host to 8.8.8.8 for google.com, followed 20ms later by answer record 142.250.190.46.',
        outputExplanationBn: 'দেখা যাচ্ছে পিসি থেকে ৮.৮.৮.৮ এ google.com চাওয়া হলো এবং ২০ মিলি-সেকেন্ডে আইপি উত্তর ফেরত এলো।'
      }
    ],
    troubleshooting: [
      {
        symptomEn: 'tcpdump: eth0: That device is not up',
        symptomBn: 'ইন্টারফেস ডাউন এরর',
        resolutionEn: 'Bring the interface up using "sudo ip link set eth0 up".',
        resolutionBn: '"sudo ip link set eth0 up" কমান্ড দিয়ে পোর্ট সচল করুন।'
      }
    ],
    commonMistakes: [
      {
        mistakeEn: 'Running tcpdump without root/sudo privilege.',
        mistakeBn: 'সুডো বা রুট পারমিশন ছাড়া tcpdump চালানো।',
        correctionEn: 'Raw packet sockets (AF_PACKET) require CAP_NET_RAW / root permissions. Always prepend sudo!',
        correctionBn: 'প্যাকেট স্নিফিংয়ের জন্য সর্বদা sudo ব্যবহার করতে হবে।'
      }
    ],
    practiceChallenge: {
      challengeEn: 'Capture only HTTP GET requests on interface eth0 using tcpdump.',
      challengeBn: 'tcpdump দিয়ে শুধুমাত্র এইচটিটিপি গেট (GET) রিকোয়েস্ট ক্যাপচার করার ফিল্টার লিখুন।',
      hintEn: 'sudo tcpdump -s 0 -A -i eth0 "tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x47455420"',
      hintBn: '0x47455420 হলো ASCII কোডে "GET "।'
    },
    interactiveTool: 'cli-terminal'
  },

  // 5. ROUTING & SWITCHING LAB
  {
    id: 'lab-switch-mac',
    titleEn: 'Switch MAC Table Learning & Frame Forwarding Simulator',
    titleBn: 'সুইচ ম্যাক টেবিল লার্নিং ও ফ্রেম ফরওয়ার্ডিং সিমুলেটর',
    category: 'Routing & Switching',
    difficulty: 'Beginner',
    timeEstimate: '20 mins',
    descEn: 'Observe step-by-step how an Ethernet switch inspects source MAC addresses, populates its CAM table, and prevents network-wide broadcasting.',
    descBn: 'একটি ইথারনেট সুইচ কীভাবে ইনকামিং ফ্রেমের সোর্স ম্যাক পরীক্ষা করে নিজের টেবিল তৈরি করে এবং অপ্রয়োজনীয় ব্রডকাস্ট বন্ধ করে তা সরাসরি পর্যবেক্ষণ করুন।',
    learningObjectives: [
      { en: 'Understand the 5-step switch logic: Learn, Forward, Filter, Flood, and Age', bn: 'সুইচের ৫টি কাজের ধাপ পরিষ্কারভাবে অনুধাবন করা' },
      { en: 'Observe how switches isolate collision domains across physical ports', bn: 'সুইচ কীভাবে প্রতিটি পোর্টে কলিশন ডোমেইন আলাদা করে' },
      { en: 'Inspect and clear dynamic entries from the Cisco CAM address table', bn: 'সিএএম মেমরি টেবিল দেখা ও মুছে দেওয়া' }
    ],
    requiredTools: ['Interactive Switch Simulator / Cisco Packet Tracer'],
    requiredKnowledge: [
      { en: '48-bit hexadecimal MAC address structure (e.g. 00:11:22:AA:BB:CC)', bn: '৪৮-বিট হেক্সাডেসিমাল ম্যাক অ্যাড্রেসের গঠন' }
    ],
    topology: {
      type: 'Star LAN',
      descriptionEn: 'Cisco 2960 Switch connecting PC-1 (Fa0/1), PC-2 (Fa0/2), PC-3 (Fa0/3), and Server (Fa0/4).',
      descriptionBn: 'সিসকো সুইচে ৪টি পোর্টে ৩টি পিসি ও একটি সার্ভার যুক্ত।',
      nodes: [
        { name: 'PC-1', ip: '192.168.1.10', role: 'Port Fa0/1' },
        { name: 'PC-2', ip: '192.168.1.20', role: 'Port Fa0/2' },
        { name: 'PC-3', ip: '192.168.1.30', role: 'Port Fa0/3' },
        { name: 'Server', ip: '192.168.1.254', role: 'Port Fa0/4' }
      ]
    },
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Send Frame from PC-1 to PC-2',
        titleBn: 'পিসি-১ থেকে পিসি-২ তে ফ্রেম পাঠানো',
        instructionsEn: 'Trigger a frame. Switch inspects Source MAC of PC-1 and records entry in CAM table under Port Fa0/1.',
        instructionsBn: 'ফ্রেম পাঠান। সুইচ পিসি-১ এর সোর্স ম্যাক দেখে নিজের টেবিলে পোর্ট Fa0/1 এর বিপরীতে লিখে রাখবে।',
        commandSnippet: 'Switch# show mac address-table dynamic',
        expectedOutput: 'Vlan    Mac Address       Type        Ports\n----    -----------       --------    -----\n   1    0011.22aa.0101    DYNAMIC     Fa0/1',
        outputExplanationEn: 'The switch has learned PC-1\'s MAC address on port Fa0/1.',
        outputExplanationBn: 'সুইচ সফলভাবে পিসি-১ এর ম্যাক অ্যাড্রেস শিখে নিয়েছে।'
      }
    ],
    troubleshooting: [
      {
        symptomEn: 'Switch continuously floods unicast frames to all ports',
        symptomBn: 'সুইচ বারবার সব পোর্টে ডেটা ফ্লাড করছে',
        resolutionEn: 'CAM table memory is full (MAC flooding attack) or aging timer is set too low.',
        resolutionBn: 'মেমরি ফুল হয়ে গেছে অথবা ডিভাইসগুলো দীর্ঘদিন নিষ্ক্রিয়।'
      }
    ],
    commonMistakes: [
      {
        mistakeEn: 'Thinking switches learn from the destination MAC address.',
        mistakeBn: 'মনে করা যে সুইচ ডেস্টিনেশন ম্যাক দেখে শেখে।',
        correctionEn: 'Switches learn ONLY from the SOURCE MAC address of incoming frames!',
        correctionBn: 'সুইচ সর্বদা ইনকামিং ফ্রেমের SOURCE MAC দেখে শেখে।'
      }
    ],
    practiceChallenge: {
      challengeEn: 'Configure static MAC port security on Port Fa0/1 with maximum 1 MAC address and shutdown violation mode.',
      challengeBn: 'পোর্ট Fa0/1 এ পোর্ট সিকিউরিটি চালু করে সর্বোচ্চ ১টি ম্যাকের নিয়ম বেঁধে দিন।',
      hintEn: 'switchport port-security maximum 1; switchport port-security violation shutdown',
      hintBn: 'সিসকো আইওএস পোর্ট সিকিউরিটি কমান্ড।'
    },
    interactiveTool: 'switch-cam'
  },

  // 6. NETWORK ANALYSIS & WIRESHARK LAB
  {
    id: 'lab-tcp-handshake',
    titleEn: 'TCP 3-Way Handshake Connection & Teardown Tracer',
    titleBn: 'টিসিপি ৩-ওয়ে হ্যান্ডশেক কানেকশন ও টিয়ারডাউন ট্রেসার',
    category: 'Network Analysis (Wireshark)',
    difficulty: 'Intermediate',
    timeEstimate: '25 mins',
    descEn: 'Analyze raw packet traces in Wireshark: Dissect SYN, SYN-ACK, and ACK sequence numbers, flags, window sizes, and FIN/ACK connection closures.',
    descBn: 'ওয়্যারশার্কে র টিসিপি প্যাকেট বিশ্লেষণ: সিন, সিন-অ্যাক ও অ্যাক সিকোয়েন্স নাম্বার, ফ্ল্যাগ এবং সকেট বন্ধ করার ৪-ধাপ প্রক্রিয়া।',
    learningObjectives: [
      { en: 'Identify SYN, ACK, FIN, and RST TCP control flags in packet headers', bn: 'প্যাকেট হেডারে টিসিপি ফ্ল্যাগসমূহ শনাক্ত করা' },
      { en: 'Track 32-bit Sequence Numbers (SEQ) and Acknowledgment Numbers (ACK)', bn: 'সিকোয়েন্স ও অ্যাকনলেজমেন্ট নাম্বারের গাণিতিক পরিবর্তন ট্র্যাক করা' },
      { en: 'Diagnose packet loss through TCP Duplicate ACKs and Fast Retransmissions', bn: 'ডুপ্লিকেট অ্যাক ও রিট্রান্সমিশন দেখে নেটওয়ার্ক ল্যাগ চিহ্নিত করা' }
    ],
    requiredTools: ['Wireshark (or Interactive TCP Simulator)'],
    requiredKnowledge: [
      { en: 'Transport Layer port numbers and connection-oriented communication', bn: 'ট্রান্সপোর্ট লেয়ার পোর্ট ও টিসিপি ধারণা' }
    ],
    topology: {
      type: 'Point-to-Point',
      descriptionEn: 'Client Browser (10.0.0.5:49152) -> Web Server (93.184.216.34:443).',
      descriptionBn: 'ক্লায়েন্ট ব্রাউজার ও ওয়েব সার্ভারের মধ্যে টিসিপি সংযোগ।',
      nodes: [
        { name: 'Client PC', ip: '10.0.0.5', role: 'TCP Client' },
        { name: 'Web Server', ip: '93.184.216.34', role: 'HTTPS Server' }
      ]
    },
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Capture TCP 3-Way Handshake in Wireshark',
        titleBn: 'ওয়্যারশার্কে ৩-ওয়ে হ্যান্ডশেক ফিল্টার করা',
        instructionsEn: 'Apply Wireshark display filter "tcp.flags.syn == 1" to capture handshake negotiation.',
        instructionsBn: 'ওয়্যারশার্ক ডিসপ্লে ফিল্টারে "tcp.flags.syn == 1" লিখে হ্যান্ডশেক প্যাকেট আলাদা করুন।',
        commandSnippet: 'wireshark display filter: tcp.port == 443',
        expectedOutput: 'Packet 1: Client -> Server [SYN] Seq=0 (Relative)\nPacket 2: Server -> Client [SYN, ACK] Seq=0 Ack=1\nPacket 3: Client -> Server [ACK] Seq=1 Ack=1',
        outputExplanationEn: 'Shows SYN from client with relative Seq 0, answered by SYN-ACK with Ack 1, completed by ACK.',
        outputExplanationBn: 'ক্লায়েন্টের সিন প্রস্তাব এবং সার্ভারের স্বীকৃতির মাধ্যমে সংযোগ সফলভাবে ESTABLISHED হয়েছে।'
      }
    ],
    troubleshooting: [
      {
        symptomEn: 'Repeated TCP SYN retransmissions with no reply',
        symptomBn: 'বারবার SYN প্যাকেট রিট্রান্সমিট হওয়া কিন্তু উত্তর না আসা',
        resolutionEn: 'Remote host is down, port is closed, or a stateful firewall is dropping the SYN packet.',
        resolutionBn: 'সার্ভার বন্ধ, পোর্ট বন্ধ অথবা ফায়ারওয়াল প্যাকেটটি ড্রপ করছে।'
      }
    ],
    commonMistakes: [
      {
        mistakeEn: 'Confusing Relative Sequence Numbers (shown by Wireshark for readability) with raw 32-bit random Initial Sequence Numbers (ISN).',
        mistakeBn: 'ওয়্যারশার্কের সহজ Relative ০, ১ সিকোয়েন্সকে আসল ৩২-বিট র‍্যান্ডম সিকোয়েন্স মনে করা।',
        correctionEn: 'Wireshark normalizes sequence numbers to 0 for human readability. Uncheck "Relative Sequence Numbers" in preferences to see the actual raw 32-bit integers!',
        correctionBn: 'ওয়্যারশার্ক মানুষের সুবিধার জন্য ০ দিয়ে দেখায়। সেটিংসে গিয়ে Relative বন্ধ করলে আসল ৩২-বিট র‍্যান্ডম সংখ্যা দেখা যায়।'
      }
    ],
    practiceChallenge: {
      challengeEn: 'In Wireshark, create a display filter that isolates all TCP packets with the RST (Reset) flag set.',
      challengeBn: 'ওয়্যারশার্কে যেসকল প্যাকেটে RST (Reset) ফ্ল্যাগ আছে তা বের করার ফিল্টার লিখুন।',
      hintEn: 'tcp.flags.reset == 1',
      hintBn: 'tcp.flags.reset == 1 ব্যবহার করুন।'
    },
    interactiveTool: 'cli-terminal'
  }
];
