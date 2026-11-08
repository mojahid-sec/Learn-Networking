export interface QuizQuestion {
  id: string;
  type: 'mcq' | 'true-false' | 'short-answer' | 'scenario' | 'command' | 'subnetting' | 'troubleshooting';
  category: 'Fundamentals' | 'IP & Subnetting' | 'Commands' | 'Troubleshooting' | 'Scenarios';
  questionEn: string;
  questionBn: string;
  scenarioContextEn?: string;
  scenarioContextBn?: string;
  options?: { textEn: string; textBn: string; isCorrect: boolean }[];
  acceptedAnswers?: string[]; // for short-answer
  placeholder?: string;
  explanationEn: string;
  explanationBn: string;
}

export const quizQuestions: QuizQuestion[] = [
  // 1. MULTIPLE CHOICE
  {
    id: 'q-mcq-1',
    type: 'mcq',
    category: 'Fundamentals',
    questionEn: 'Which networking device operates primarily at Layer 2 to inspect and forward Ethernet MAC frames without collision?',
    questionBn: 'কোন নেটওয়ার্কিং ডিভাইসটি প্রধানত লেয়ার ২-এ কাজ করে ইথারনেট ম্যাক ফ্রেম নিরীক্ষণ ও ফরওয়ার্ড করে?',
    options: [
      { textEn: 'Hub (Layer 1 multiport repeater)', textBn: 'হাব (লেয়ার ১ মাল্টিপোর্ট রিপিটার)', isCorrect: false },
      { textEn: 'Layer 2 Managed Switch', textBn: 'লেয়ার ২ ম্যানেজড সুইচ', isCorrect: true },
      { textEn: 'Passive Repeater', textBn: 'প্যাসিভ রিপিটার', isCorrect: false },
      { textEn: 'Modem', textBn: 'মডেম', isCorrect: false },
    ],
    explanationEn: 'Switches operate at OSI Layer 2 (Data Link) and inspect incoming frame Source MAC addresses to populate a CAM table, forwarding unicasts directly to dedicated ports.',
    explanationBn: 'সুইচ ওএসআই লেয়ার ২-এ কাজ করে এবং ফ্রেমের সোর্স ম্যাক দেখে সিএএম টেবিল তৈরি করে প্রতিটি ফ্রেম নির্দিষ্ট পোর্টে পাঠায়।'
  },
  // 2. TRUE / FALSE
  {
    id: 'q-tf-1',
    type: 'true-false',
    category: 'Fundamentals',
    questionEn: 'True or False: An Ethernet switch learns host MAC addresses from the DESTINATION MAC address field of an incoming frame.',
    questionBn: 'সত্য নাকি মিথ্যা: একটি ইথারনেট সুইচ ইনকামিং ফ্রেমের DESTINATION MAC অ্যাড্রেস দেখে ম্যাক শেখে।',
    options: [
      { textEn: 'True', textBn: 'সত্য (True)', isCorrect: false },
      { textEn: 'False (It learns from SOURCE MAC)', textBn: 'মিথ্যা (এটি SOURCE MAC দেখে শেখে)', isCorrect: true }
    ],
    explanationEn: 'False! Switches learn port-to-device mapping exclusively from the SOURCE MAC address of incoming frames. The destination MAC is used only for forwarding decisions.',
    explanationBn: 'মিথ্যা! সুইচ কেবল ইনকামিং ফ্রেমের SOURCE MAC দেখে শেখে যে কোন ডিভাইসের ম্যাক কোন পোর্টে যুক্ত। ডেস্টিনেশন ম্যাক কেবল কোথায় পাঠাতে হবে তা নির্ধারণে ব্যবহৃত হয়।'
  },
  // 3. SHORT ANSWER
  {
    id: 'q-short-1',
    type: 'short-answer',
    category: 'IP & Subnetting',
    questionEn: 'What is the CIDR prefix slash notation for the subnet mask 255.255.255.192? (e.g. /24, /26, /28)',
    questionBn: 'সাবনেট মাস্ক 255.255.255.192 এর জন্য সিআইডিআর প্রিফিক্স স্লাশ নোটেশন কত? (যেমন /২৪, /২৬)',
    acceptedAnswers: ['/26', '26'],
    placeholder: 'e.g. /26',
    explanationEn: '255.255.255.192 has 8 + 8 + 8 + 2 = 26 contiguous binary 1s (11111111.11111111.11111111.11000000), which equals /26.',
    explanationBn: '২৫৫.২৫৫.২৫৫.১৯২ মাস্কে ৮ + ৮ + ৮ + ২ = ২৬টি বাইনারি ১ রয়েছে, সুতরাং এর প্রিফিক্স হলো /২৬।'
  },
  // 4. SUBNETTING MATH
  {
    id: 'q-subnet-1',
    type: 'subnetting',
    category: 'IP & Subnetting',
    questionEn: 'How many usable host IP addresses are available in a /28 IPv4 subnet?',
    questionBn: 'একটি /28 আইপিভি৪ সাবনেটে মোট কতটি ব্যবহারযোগ্য হোস্ট আইপি থাকে?',
    options: [
      { textEn: '16 hosts', textBn: '১৬ টি', isCorrect: false },
      { textEn: '14 usable hosts (2^4 - 2)', textBn: '১৪ টি ব্যবহারযোগ্য হোস্ট (২^৪ - ২)', isCorrect: true },
      { textEn: '30 hosts', textBn: '৩০ টি', isCorrect: false },
      { textEn: '6 hosts', textBn: '৬ টি', isCorrect: false }
    ],
    explanationEn: 'Total host bits = 32 - 28 = 4 bits. Total IP addresses = 2^4 = 16. Subtract 2 (one for Network ID, one for Broadcast), yielding 14 usable host IPs.',
    explanationBn: 'হোস্ট বিট = ৩২ - ২৮ = ৪টি। মোট আইপি = ২^৪ = ১৬টি। নেটওয়ার্ক ও ব্রডকাস্টের জন্য ২টি বাদ দিলে ব্যবহারযোগ্য আইপি থাকে ১৪টি।'
  },
  // 5. COMMAND-BASED
  {
    id: 'q-cmd-1',
    type: 'command',
    category: 'Commands',
    questionEn: 'Which modern Linux / Kali CLI command displays active TCP and UDP listening sockets along with process names and PIDs?',
    questionBn: 'কোন আধুনিক লিনাক্স কমান্ডটি সক্রিয় টিসিপি ও ইউডিপি লিসেনিং সকেট প্রসেস নামসহ প্রদর্শন করে?',
    options: [
      { textEn: 'ifconfig -a', textBn: 'ifconfig -a', isCorrect: false },
      { textEn: 'ss -tulnp', textBn: 'ss -tulnp', isCorrect: true },
      { textEn: 'ping -c 4 localhost', textBn: 'ping -c 4 localhost', isCorrect: false },
      { textEn: 'traceroute -n 8.8.8.8', textBn: 'traceroute -n 8.8.8.8', isCorrect: false }
    ],
    explanationEn: 'The modern iproute2 tool "ss" with flags -t (TCP), -u (UDP), -l (Listening), -n (Numeric), and -p (Processes) inspects active socket statistics.',
    explanationBn: 'আধুনিক লিনাক্সে "ss -tulnp" কমান্ডের মাধ্যমে টিসিপি ও ইউডিপির সকল লিসেনিং পোর্ট এবং সংশ্লিষ্ট প্রসেস নাম স্পষ্টভাবে দেখা যায়।'
  },
  // 6. SCENARIO-BASED
  {
    id: 'q-scenario-1',
    type: 'scenario',
    category: 'Scenarios',
    questionEn: 'A company needs to divide 192.168.1.0/24 into 4 subnets with at least 50 host machines per department. Which CIDR mask must be applied?',
    questionBn: 'একটি কোম্পানিকে ১৯২.১৬৮.১.০/২৪ ব্লক থেকে ৪টি সাবনেট বানাতে হবে এবং প্রতি বিভাগে কমপক্ষে ৫০টি কম্পিউটার বসবে। কোন মাস্ক নির্বাচন করবেন?',
    options: [
      { textEn: '/25 (2 subnets of 126 hosts each)', textBn: '/২৫ (২টি সাবনেট, প্রতিটি ১২৬ হোস্ট)', isCorrect: false },
      { textEn: '/26 (4 subnets of 62 usable hosts each)', textBn: '/২৬ (৪টি সাবনেট, প্রতিটি ৬২ ব্যবহারযোগ্য হোস্ট)', isCorrect: true },
      { textEn: '/27 (8 subnets of 30 usable hosts each)', textBn: '/২৭ (৮টি সাবনেট, প্রতিটি ৩০ হোস্ট)', isCorrect: false },
      { textEn: '/30 (64 subnets of 2 hosts each)', textBn: '/৩০ (৬৪টি সাবনেট, প্রতিটি ২ হোস্ট)', isCorrect: false }
    ],
    explanationEn: 'Borrowing 2 bits (/26) creates 2^2 = 4 subnets. Each /26 subnet provides 2^6 - 2 = 62 usable host addresses, satisfying the 50 hosts requirement.',
    explanationBn: '২ বিট ধার নিলে ২^২ = ৪টি সাবনেট তৈরি হয়। প্রতিটি /২৬ সাবনেটে ২^৬ - ২ = ৬২টি কম্পিউটার বসানো যায়, যা ৫০টির চাহিদার চেয়ে বেশি।'
  },
  // 7. TROUBLESHOOTING
  {
    id: 'q-trouble-1',
    type: 'troubleshooting',
    category: 'Troubleshooting',
    questionEn: 'PC-A (192.168.1.10/24) can ping PC-B (192.168.1.20/24) on the same local switch, but cannot reach Google DNS (8.8.8.8). What is the root cause?',
    questionBn: 'পিসি-এ লোকাল সুইচে পিসি-বি কে পিং করতে পারছে, কিন্তু গুগলের ৮.৮.৮.৮ এ পিং যাচ্ছে না। মূল কারণ কী?',
    options: [
      { textEn: 'Defective Cat6 patch cable on PC-A', textBn: 'পিসি-এ এর ক্যাট-৬ ক্যাবল ত্রুটিযুক্ত', isCorrect: false },
      { textEn: 'Missing or misconfigured Default Gateway on PC-A', textBn: 'পিসি-এ তে ডিফল্ট গেটওয়ে দেওয়া হয়নি বা ভুল বসানো হয়েছে', isCorrect: true },
      { textEn: 'PC-A has an invalid MAC address', textBn: 'পিসি-এ এর ম্যাক অ্যাড্রেস ভুল', isCorrect: false },
      { textEn: 'The local switch CAM table is corrupted', textBn: 'সুইচের সিএএম টেবিল নষ্ট হয়ে গেছে', isCorrect: false }
    ],
    explanationEn: 'Local communication succeeds without a router. To reach remote public networks (8.8.8.8), the host MUST have a valid Default Gateway IP address configured to forward non-local packets.',
    explanationBn: 'একই লোকাল নেটওয়ার্কে কথা বলতে রাউটার লাগে না। কিন্তু ইন্টারনেটের ৮.৮.৮.৮ এ যেতে হলে পিসির নেটওয়ার্ক সেটিংসে অবশ্যই রাউটারের ডিফল্ট গেটওয়ে আইপি থাকতে হবে।'
  },
  // 8. TRUE / FALSE 2
  {
    id: 'q-tf-2',
    type: 'true-false',
    category: 'Fundamentals',
    questionEn: 'True or False: In TCP communication, the SYN flag is used only during connection establishment and is not present in standard data transfer packets.',
    questionBn: 'সত্য নাকি মিথ্যা: টিসিপি সংযোগে SYN ফ্ল্যাগ কেবল হ্যান্ডশেক করার সময় ব্যবহৃত হয় এবং নিয়মিত ডেটা প্যাকেটে থাকে না।',
    options: [
      { textEn: 'True', textBn: 'সত্য (True)', isCorrect: true },
      { textEn: 'False', textBn: 'মিথ্যা (False)', isCorrect: false }
    ],
    explanationEn: 'True! The SYN (Synchronize Sequence Numbers) flag is set only in the first two packets of the TCP 3-way handshake (SYN and SYN-ACK). Once ESTABLISHED, data packets carry ACK or PSH flags.',
    explanationBn: 'সত্য! টিসিপির SYN ফ্ল্যাগ কেবল শুরুর ৩-ওয়ে হ্যান্ডশেকে (SYN ও SYN-ACK) ব্যবহৃত হয়। সংযোগ স্থাপিত হয়ে গেলে নিয়মিত ডেটা প্যাকেটে ACK বা PSH ফ্ল্যাগ থাকে।'
  }
];
