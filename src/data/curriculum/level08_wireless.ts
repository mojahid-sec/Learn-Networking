import { CurriculumModule } from './types';

export const level08Module: CurriculumModule = {
  id: 'level-08-wireless',
  levelNumber: 8,
  tier: 'Intermediate',
  titleEn: 'LEVEL 08 — Wireless Networking (Wi-Fi & RF)',
  titleBn: 'লেভেল ০৮ — ওয়্যারলেস নেটওয়ার্কিং (ওয়াই-ফাই এবং আরএফ)',
  descEn: 'Radio frequency propagation, IEEE 802.11 standards from Wi-Fi 4 to Wi-Fi 7, 2.4/5/6 GHz frequency bands, CSMA/CA collision avoidance, enterprise WLC/CAPWAP architecture, WPA2/WPA3 security, and RF troubleshooting.',
  descBn: 'রেডিও ফ্রিকোয়েন্সি তরঙ্গ, ওয়াই-ফাই ৪ থেকে ওয়াই-ফাই ৭ (৮০২.১১) স্ট্যান্ডার্ড, ২.৪/৫/৬ গিগাহার্টজ ব্যান্ড, সিএসএমএ/সিএ কলিশন অ্যাভয়ডেন্স, এন্টারপ্রাইজ ডব্লিউএলসি কাঠামো, ডব্লিউপিএ২/৩ নিরাপত্তা এবং আরএফ ট্রাবলশুটিং।',
  estimatedHours: 15,
  iconName: 'Wifi',
  prerequisites: ['level-01-fundamentals', 'level-02-devices-media'],
  relatedLabs: [],
  topics: [
    {
      id: 'wireless-fundamentals-rf',
      titleEn: 'Wireless Networking Fundamentals & Radio Frequency (RF)',
      titleBn: 'ওয়্যারলেস নেটওয়ার্কিং ফান্ডামেন্টালস এবং রেডিও ফ্রিকোয়েন্সি (RF)',
      durationMinutes: 25,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'RF wave characteristics: Wavelength, Frequency, Amplitude, Phase, and Free Space Path Loss (FSPL) attenuation through air, drywall, brick, and concrete.',
        descriptionBn: 'রেডিও তরঙ্গের দৈর্ঘ্য, কম্পাঙ্ক, শক্তি এবং বাতাস ও দেয়াল ভেদ করার সময় সিগন্যাল ক্ষয়ের (অ্যাটেনিউয়েশন) দৃশ্যমান চিত্র।'
      },
      keyConcepts: ['Electromagnetic Spectrum', 'RF Attenuation & Absorption', 'Signal Reflection & Refraction', 'dBm and RSSI'],
      summaryEn: 'How physical radio waves carry digital bits across open air without cables.',
      summaryBn: 'বাতাসের মধ্য দিয়ে রেডিও তরঙ্গের সাহায্যে ডেটা বিট স্থানান্তরের বিজ্ঞান ও নীতি।'
    },
    {
      id: 'wifi-architecture-components',
      titleEn: 'Wi-Fi Architecture & Topologies: STA, AP, BSS, ESS, and DS',
      titleBn: 'ওয়াই-ফাই আর্কিটেকচার এবং উপাদানসমূহ: STA, AP, BSS, ESS ও DS',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Wi-Fi architecture layout: Wireless Stations (STAs) connected to Access Points forming Basic Service Sets (BSS), linked by an Ethernet Distribution System (DS) into an Extended Service Set (ESS).',
        descriptionBn: 'বেসিক সার্ভিস সেট (বিএসএস), ডিস্ট্রিবিউশন সুইচ সিস্টেম এবং এক্সটেন্ডেড সার্ভিস সেট (ইএসএস)-এর পূর্ণাঙ্গ আর্কিটেকচার ম্যাপ।'
      },
      keyConcepts: ['Wireless Station (STA)', 'Basic Service Set (BSS)', 'Extended Service Set (ESS)', 'Distribution System (DS)'],
      summaryEn: 'The structural components defined by IEEE 802.11 that construct modern campus Wi-Fi networks.',
      summaryBn: 'ওয়াই-ফাই নেটওয়ার্কের অভ্যন্তরীণ সংগঠন ও সংযোগ কাঠামো।'
    },
    {
      id: 'ieee-80211-standards-evolution',
      titleEn: 'IEEE 802.11 Standards Evolution: Wi-Fi 4 to Wi-Fi 7',
      titleBn: 'আইইইই ৮০২.১১ স্ট্যান্ডার্ডের বিবর্তন: ওয়াই-ফাই ৪ থেকে ওয়াই-ফাই ৭',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Comparison matrix of 802.11b (11 Mbps) -> 802.11g (54 Mbps) -> 802.11n (Wi-Fi 4, 600 Mbps) -> 802.11ac (Wi-Fi 5, 6.9 Gbps) -> 802.11ax (Wi-Fi 6/6E, 9.6 Gbps, OFDMA) -> 802.11be (Wi-Fi 7, 46 Gbps, 320 MHz, MLO).',
        descriptionBn: 'ওয়াই-ফাই প্রযুক্তির বিভিন্ন জেনারেশন, সর্বোচ্চ স্পিড, ব্যবহৃত স্পেকট্রাম এবং মডুলেশন প্রযুক্তির পূর্ণাঙ্গ চার্ট।'
      },
      keyConcepts: ['MIMO & Multi-User MIMO', 'OFDMA Subcarriers', 'Multi-Link Operation (MLO)', '4096-QAM Modulation'],
      summaryEn: 'Chronological progression of wireless throughput from early 11 Mbps to ultra-fast 46 Gbps Wi-Fi 7.',
      summaryBn: 'গত দুই দশকে ওয়াই-ফাই প্রযুক্তির গতি ও দক্ষতার বৈপ্লবিক উন্নতির ইতিহাস ও স্ট্যান্ডার্ড।'
    },
    {
      id: 'frequency-bands-and-channels',
      titleEn: 'Frequency Bands (2.4 GHz vs 5 GHz vs 6 GHz) and Channel Widths',
      titleBn: 'ফ্রিকোয়েন্সি ব্যান্ড (২.৪ গিগাহার্টজ বনাম ৫ বনাম ৬ গিগাহার্টজ) ও চ্যানেল উইডথ',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Spectral width comparison: 2.4 GHz (Long range, 3 non-overlapping channels 1, 6, 11) vs 5 GHz (Faster, 24 non-overlapping channels, DFS) vs 6 GHz (Ultra-wide, pristine 1200 MHz spectrum with 320 MHz channels).',
        descriptionBn: '২.৪ গিগাহার্টজ (দূরপাল্লার সিগন্যাল), ৫ গিগাহার্টজ (দ্রুতগতি) এবং ৬ গিগাহার্টজ (সর্বোচ্চ ব্যান্ডউইথ) ব্যান্ডের তুলনা ও চ্যানেল বিভাজন।'
      },
      keyConcepts: ['Non-Overlapping Channels (1, 6, 11)', 'Dynamic Frequency Selection (DFS)', 'Channel Bonding (20/40/80/160/320 MHz)', 'Interference vs Range Trade-off'],
      summaryEn: 'Balancing physical obstacle penetration, range, and raw throughput across the three Wi-Fi radio spectra.',
      summaryBn: 'দূরত্ব, দেয়াল ভেদ করার ক্ষমতা এবং স্পিডের ভিত্তিতে সঠিক ফ্রিকোয়েন্সি ও চ্যানেল নির্ধারণ।'
    },
    {
      id: 'ssid-bssid-essid-identifiers',
      titleEn: 'SSID, BSSID, and ESSID Identifiers',
      titleBn: 'এসএসআইডি, বিএসএসআইডি এবং ইএসএসআইডি পরিচয়',
      durationMinutes: 20,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Network diagram showing single human-readable SSID "Campus-WiFi" broadcast by 3 different APs, each having a unique 48-bit MAC address BSSID (e.g. 00:11:22:33:44:01, :02, :03).',
        descriptionBn: 'একটি এসএসআইডি নামের অধীনে কীভাবে প্রতিটি অ্যাক্সেস পয়েন্টের নিজস্ব ইউনিক ম্যাক অ্যাড্রেস (BSSID) কাজ করে।'
      },
      keyConcepts: ['Service Set Identifier (SSID)', 'Basic Service Set Identifier (BSSID - MAC)', 'Beacon Frames', 'Hidden SSIDs (Security Fallacy)'],
      summaryEn: 'How wireless devices discover, display, and distinguish between radio broadcast sources.',
      summaryBn: 'ডিভাইসগুলো কীভাবে ওয়াই-ফাই নেটওয়ার্ক খুঁজে পায় এবং নির্দিষ্ট টাওয়ার বা পোর্টের সাথে যুক্ত হয়।'
    },
    {
      id: 'autonomous-vs-lightweight-ap-wlc',
      titleEn: 'Autonomous APs vs Lightweight APs with Wireless LAN Controllers (WLC)',
      titleBn: 'অটোনোমাস এপি বনাম লাইটওয়েট এপি ও ডব্লিউএলসি (WLC) আর্কিটেকচার',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Enterprise network showing 50 Lightweight APs (LAP) controlled centrally by a Cisco Wireless LAN Controller via CAPWAP tunnels (UDP 5246 Control, UDP 5247 Data) vs individual uncoordinated home APs.',
        descriptionBn: 'শত শত লাইটওয়েট এপিকে সেন্ট্রাল ডব্লিউএলসি এবং ক্যাপওয়াপ টানেলের মাধ্যমে এক জায়গা থেকে পরিচালনার এন্টারপ্রাইজ সিস্টেম।'
      },
      keyConcepts: ['Autonomous / Fat AP', 'Lightweight AP (LAP)', 'Wireless LAN Controller (WLC)', 'CAPWAP Protocol (UDP 5246/5247)', 'Centralized RF Management'],
      summaryEn: 'Scaling Wi-Fi from single-router homes to thousand-device enterprise office buildings and campuses.',
      summaryBn: 'বড় প্রতিষ্ঠানে শত শত ওয়াই-ফাই রাউটার একযোগে কেন্দ্রীয়ভাবে নিয়ন্ত্রণ করার প্রযুক্তি।'
    },
    {
      id: 'csma-ca-and-rts-cts',
      titleEn: 'CSMA/CA Collision Avoidance & RTS/CTS Handshake',
      titleBn: 'সিএসএমএ/সিএ কলিশন পরিহার এবং আরটিএস/সিটিএস মেকানিজম',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Two wireless stations out of range of each other ("Hidden Node Problem"). STA-A sends Request to Send (RTS) -> AP broadcasts Clear to Send (CTS) with Network Allocation Vector (NAV) duration timer -> STA-A transmits without collision from STA-B.',
        descriptionBn: 'হিডেন নোড সমস্যা সমাধান: স্টেশন ও অ্যাক্সেস পয়েন্টের মধ্যে আরটিএস ও সিটিএস মেসেজ বিনিময়ের মাধ্যমে সংঘর্ষ এড়ানোর প্রক্রিয়া।'
      },
      keyConcepts: ['Collision Avoidance vs Detection', 'Network Allocation Vector (NAV)', 'Hidden Node Problem', 'RTS/CTS Handshake', 'Half-Duplex Nature of Wi-Fi'],
      summaryEn: 'Why wireless radios cannot detect collisions while transmitting and how CSMA/CA arbitrates airtime fairly.',
      summaryBn: 'বাতাসে কলিশন শনাক্ত করা অসম্ভব হওয়ায় ওয়াই-ফাই কীভাবে হিসাব করে সংঘর্ষ এড়িয়ে চলে।'
    },
    {
      id: 'wireless-roaming-standards',
      titleEn: 'Seamless Wireless Roaming (802.11k, 802.11v, 802.11r)',
      titleBn: 'সীমলেস ওয়্যারলেস রোমিং (৮০২.১১k, ৮০২.১১v, ৮০২.১১r)',
      durationMinutes: 25,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Animated Packet Flow',
        descriptionEn: 'Smartphone walking down office corridor: 802.11k provides neighbor AP list -> 802.11v steers client to optimal AP -> 802.11r Fast BSS Transition completes crypto handshake in <50ms without dropping VoIP call.',
        descriptionBn: 'হাঁটাহাঁটির সময় ভয়েস কল না কেটে কীভাবে মিলি-সেকেন্ডে ফোন এক রাউটার থেকে অন্য রাউটারে স্থানান্তর (রোমিং) হয়।'
      },
      keyConcepts: ['Neighbor Reporting (802.11k)', 'BSS Transition Management (802.11v)', 'Fast BSS Transition (802.11r FT)', 'Zero-Packet-Drop VoIP Handoff'],
      summaryEn: 'How mobile devices smoothly transition between access points without disconnecting active video or voice sessions.',
      summaryBn: 'চলন্ত অবস্থায় ইন্টারনেট সংযোগ অক্ষুণ্ণ রেখে স্বয়ংক্রিয়ভাবে সেরা রাউটারে যুক্ত হওয়ার প্রযুক্তি।'
    },
    {
      id: 'wifi-security-wpa2-wpa3',
      titleEn: 'Wi-Fi Security Protocols: WEP, WPA2-Personal/Enterprise, and WPA3-SAE',
      titleBn: 'ওয়াই-ফাই সিকিউরিটি প্রোটোকল: WEP, WPA2 এবং আধুনিক WPA3-SAE',
      durationMinutes: 35,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Protocol State Graph',
        descriptionEn: 'Cryptographic handshake comparison: WPA2 4-Way Handshake (vulnerable to offline dictionary attacks) vs WPA3 Simultaneous Authentication of Equals (SAE Dragonfly handshake with Forward Secrecy) and 802.1X Enterprise RADIUS.',
        descriptionBn: 'ডব্লিউপিএ২ ফোর-ওয়ে হ্যান্ডশেক বনাম আধুনিক ডব্লিউপিএ৩ ড্রাগনফ্লাই হ্যান্ডশেকের নিরাপত্তা ও রেডিয়াস সার্ভার প্রমাণীকরণ।'
      },
      keyConcepts: ['WPA2-PSK 4-Way Handshake', 'WPA3 Simultaneous Authentication of Equals (SAE)', '802.1X / EAP Enterprise Authentication', 'RADIUS Authentication Server', 'Opportunistic Wireless Encryption (OWE)'],
      summaryEn: 'Securing the open airwaves against eavesdropping, dictionary attacks, and unauthorized network association.',
      summaryBn: 'খোলা বাতাসে ওয়াই-ফাই সিগন্যালকে হ্যাকিং ও অনধিকার প্রবেশ থেকে রক্ষা করার এনক্রিপশন প্রোটোকল।'
    },
    {
      id: 'wireless-troubleshooting-rf',
      titleEn: 'Wireless Troubleshooting: Interference, Dead Zones, and Channel Overlap',
      titleBn: 'ওয়্যারলেস ট্রাবলশুটিং: ইন্টারফেয়ারেন্স, ডেড জোন এবং চ্যানেল ওভারল্যাপ',
      durationMinutes: 30,
      difficulty: 'Intermediate',
      visualPlan: {
        visualType: 'Topology View',
        descriptionEn: 'Wi-Fi Heatmap diagnosing RF problems: Co-Channel Interference (CCI) between neighboring APs on channel 6, Non-Wi-Fi Interference from microwave ovens / Bluetooth, and dead zones caused by reinforced concrete elevator shafts.',
        descriptionBn: 'ওয়াই-ফাই হিটম্যাপে ইন্টারফেয়ারেন্স শনাক্তকরণ, চ্যানেল ওভারল্যাপ দূরীকরণ এবং দুর্বল কভারেজ সমাধান।'
      },
      keyConcepts: ['Co-Channel Interference (CCI)', 'Adjacent Channel Interference (ACI)', 'Signal-to-Noise Ratio (SNR)', 'Wi-Fi Heatmap Site Survey', 'Antenna Radiation Patterns'],
      summaryEn: 'Diagnosing sluggish speeds, intermittent drops, and dead spots across wireless deployments.',
      summaryBn: 'বাস্তব জীবনে ওয়াই-ফাই সিগন্যালের দুর্বলতা, ড্রপ হওয়া এবং স্পিড কমার কারণ ও সমাধান।'
    }
  ]
};
