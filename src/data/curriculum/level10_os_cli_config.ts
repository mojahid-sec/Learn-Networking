import { CurriculumModule } from './types';

export const level10Module: CurriculumModule = {
  id: 'level-10-os-cli-config',
  levelNumber: 10,
  tier: 'Advanced',
  titleEn: 'LEVEL 10 — Windows and Linux Network Configuration & CLI',
  titleBn: 'লেভেল ১০ — উইন্ডোজ ও লিনাক্স নেটওয়ার্ক কনফিগারেশন এবং সিএলআই (CLI)',
  descEn: 'Comprehensive hands-on command-line administration for both Windows (CMD, PowerShell) and Linux/Kali Linux systems: IP addressing, routing tables, DNS resolution, socket inspection, packet capture, and configuration files.',
  descBn: 'উইন্ডোজ (সিএমডি, পাওয়ারশেল) ও লিনাক্স/কালি লিনাক্স অপারেটিং সিস্টেমে কমান্ড লাইনের মাধ্যমে আইপি কনফিগারেশন, রাউটিং টেবিল পরিবর্তন, ডিএনএস কোয়েরি, সকেট স্ট্যাটিস্টিক্স এবং প্যাকেট বিশ্লেষণের গভীর ব্যবহারিক জ্ঞান।',
  estimatedHours: 20,
  iconName: 'Terminal',
  prerequisites: ['level-04-ip-subnetting', 'level-05-protocols-ports'],
  relatedLabs: [],
  topics: [
    {
      id: 'os-tcp-ip-kernel-architecture',
      titleEn: 'Operating System TCP/IP Stack & Kernel Sockets Architecture',
      titleBn: 'অপারেটিং সিস্টেম টিসিপি/আইপি স্ট্যাক এবং কার্নেল সকেট আর্কিটেকচার',
      durationMinutes: 25,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'OS Kernel diagram: User Space (Browser, Curl, SSH) -> System Call (socket(), connect()) -> OS Kernel Space (TCP/UDP Layer -> IP Layer -> Netfilter/Firewall) -> Network Device Driver -> Physical NIC ring buffers.',
        descriptionBn: 'ইউজার সফটওয়্যার থেকে সিস্টেম কলের মাধ্যমে অপারেটিং সিস্টেম কার্নেলের টিসিপি/আইপি স্ট্যাক ও এনআইসি হার্ডওয়্যারে ডেটা পৌঁছানোর স্তরবিন্যাস।'
      },
      keyConcepts: ['Socket Descriptors', 'User Space vs Kernel Space', 'Network Driver Interrupts (NAPI)', 'Ring Buffers (RX/TX FIFO)'],
      summaryEn: 'How modern operating systems process network packets between hardware drivers and user-space applications.',
      summaryBn: 'অপারেটিং সিস্টেম কার্নেল কীভাবে ব্যাকগ্রাউন্ডে নেটওয়ার্ক ডেটা হ্যান্ডেল করে অ্যাপ্লিকেশনগুলোর সাথে যুক্ত করে।'
    },
    {
      id: 'windows-cmd-diagnostics-ipconfig-ping',
      titleEn: 'Windows Network Diagnostics: ipconfig, ping, tracert, pathping',
      titleBn: 'উইন্ডোজ নেটওয়ার্ক ডায়াগনস্টিকস: ipconfig, ping, tracert ও pathping',
      durationMinutes: 35,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'CLI Simulator',
        descriptionEn: 'Interactive terminal emulator running: ipconfig /all (inspect MAC, DHCP lease, DNS servers); ipconfig /flushdns; ping -t -l 1472 8.8.8.8 (testing MTU & latency); tracert 1.1.1.1 (hop-by-hop ICMP TTL decrement).',
        descriptionBn: 'উইন্ডোজ সিএমডিতে কমান্ড চালিয়ে আইপি দেখা, ক্যাশ ডিএনএস মোছা, পিং দিয়ে লেটেন্সি ও এমটিইউ মাপা এবং ট্রেসার্ট দিয়ে প্রতি হপ পরিদর্শনের ডেমো।'
      },
      keyConcepts: ['ipconfig /all /release /renew /flushdns', 'ICMP Echo Request/Reply (ping)', 'TTL Expiration in Transit (tracert)', 'Pathping Statistical Loss Analysis'],
      summaryEn: 'The core essential command-line suite every IT technician and network administrator uses on Windows workstations.',
      summaryBn: 'উইন্ডোজে নেটওয়ার্কের প্রাথমিক সমস্যা খুঁজে বের করার প্রধান ও জরুরি কমান্ডগুলো।'
    },
    {
      id: 'windows-cmd-netstat-arp-route',
      titleEn: 'Windows Sockets & Routing: netstat, arp, and route print',
      titleBn: 'উইন্ডোজ সকেট ও রাউটিং: netstat, arp এবং route print',
      durationMinutes: 30,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'CLI Simulator',
        descriptionEn: 'Terminal emulator executing: netstat -ano | findstr :80 (reveals PID holding port); arp -a (inspecting L2 MAC cache); route print / route add 10.0.0.0 mask 255.0.0.0 192.168.1.254 metric 5 (manipulating Windows routing table).',
        descriptionBn: 'কোন পোর্ট কোন সফটওয়্যার ব্যবহার করছে তা বের করা (netstat), ম্যাক টেবিল দেখা (arp) এবং পিসিতে নতুন রাউট যোগ করার ব্যবহারিক কমান্ড।'
      },
      keyConcepts: ['netstat -ano (Listening Ports & PID)', 'arp -a & arp -d * (ARP Cache Management)', 'route print, route add, route delete', 'Persistent Routes (-p flag)'],
      summaryEn: 'Inspecting active TCP connections, local ARP mapping, and directly editing the host routing table in Windows.',
      summaryBn: 'উইন্ডোজ পিসির পোর্ট ট্রাফিক, ম্যাক ক্যাশ এবং লোকাল রাউটিং টেবিল নিয়ন্ত্রণ।'
    },
    {
      id: 'windows-powershell-modern-networking',
      titleEn: 'Modern Windows Networking with PowerShell Cmdlets',
      titleBn: 'পাওয়ারশেল সিএমডিলেটস দিয়ে আধুনিক উইন্ডোজ নেটওয়ার্কিং',
      durationMinutes: 30,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'CLI Simulator',
        descriptionEn: 'PowerShell console demonstrating: Test-NetConnection -ComputerName google.com -Port 443 (TCP port ping & path tracing); Get-NetIPAddress -InterfaceAlias "Ethernet"; Resolve-DnsName -Name cloudflare.com -Type AAAA; Get-NetRoute.',
        descriptionBn: 'পুরোনো সিএমডির বদলে আধুনিক পাওয়ারশেল দিয়ে নির্দিষ্ট পোর্টে ফায়ারওয়াল বা কানেক্টিভিটি টেস্ট এবং আইপি ও ডিএনএস তদন্ত।'
      },
      keyConcepts: ['Test-NetConnection (TNC)', 'Resolve-DnsName', 'Get-NetIPAddress & New-NetIPAddress', 'Get-NetRoute & New-NetRoute', 'Automation & Scripting'],
      summaryEn: 'Harnessing modern PowerShell cmdlets for robust automated network testing, port probing, and adapter provisioning.',
      summaryBn: 'আধুনিক উইন্ডোজ সিস্টেমে স্ক্রিপ্ট ও কমান্ডের মাধ্যমে অটোমেটেড নেটওয়ার্ক টেস্ট ও কনফিগারেশন।'
    },
    {
      id: 'linux-network-interfaces-ip-suite',
      titleEn: 'Linux Network Architecture & Modern "ip" Command Suite',
      titleBn: 'লিনাক্স নেটওয়ার্ক আর্কিটেকচার এবং আধুনিক "ip" কমান্ড স্যুট',
      durationMinutes: 35,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'CLI Simulator',
        descriptionEn: 'Linux bash console running modern iproute2: ip link show (interface state); ip addr add 192.168.5.10/24 dev eth0; ip link set eth0 up; ip route show; ip route add default via 192.168.5.1; ip neigh show (ARP cache).',
        descriptionBn: 'পুরোনো ifconfig-এর বদলে আধুনিক লিনাক্সে ip addr, ip route, ip link ও ip neigh দিয়ে আইপি ও রাউট সেট করার সম্পূর্ণ গাইড।'
      },
      keyConcepts: ['Deprecated ifconfig vs iproute2', 'ip addr (IP management)', 'ip link (L2 state & MTU)', 'ip route (Routing table management)', 'ip neigh (ARP neighbor table)'],
      summaryEn: 'Replacing legacy ifconfig with the modern, powerful Linux iproute2 framework used in servers and cloud VMs.',
      summaryBn: 'আধুনিক লিনাক্স সার্ভার ও ক্লাউড ভার্চুয়াল মেশিনে আইপি ও রাউটিং কনফিগারেশনের মূল হাতিয়ার।'
    },
    {
      id: 'linux-socket-statistics-ss-dig-curl',
      titleEn: 'Linux Diagnostics: ss, dig, host, and curl',
      titleBn: 'লিনাক্স ডায়াগনস্টিকস: ss, dig, host এবং curl',
      durationMinutes: 35,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'CLI Simulator',
        descriptionEn: 'Linux terminal inspecting live traffic: ss -tulnp (view listening TCP/UDP sockets with process names); dig +trace example.com (traces full 4-tier DNS resolution path); curl -Iv https://example.com (inspects TLS handshake, HTTP status headers, and timing metrics).',
        descriptionBn: 'লিনাক্সে পোর্ট কোন প্রসেস ধরে রেখেছে তা দেখা (ss), ডিএনএস রুট থেকে ট্রেস করা (dig) এবং ওয়েব কানেকশন হেডার পরীক্ষা (curl)।'
      },
      keyConcepts: ['Socket Statistics (ss -tulnp)', 'dig +trace & dig +short', 'curl -Iv & curl -w timing metrics', 'DNS Hierarchy Verification'],
      summaryEn: 'High-precision troubleshooting tools for inspecting open server ports, deep DNS delegation, and HTTP transactions.',
      summaryBn: 'লিনাক্স সার্ভারের পোর্ট স্ট্যাটাস, ডিএনএস কোয়েরি এবং ওয়েবসাইট রেসপন্স টাইম পুঙ্খানুপুঙ্খ পরীক্ষা।'
    },
    {
      id: 'linux-configuration-files-netplan-nmcli',
      titleEn: 'Linux Configuration Files: /etc/hosts, resolv.conf, Netplan, and nmcli',
      titleBn: 'লিনাক্স কনফিগারেশন ফাইল: hosts, resolv.conf, Netplan এবং nmcli',
      durationMinutes: 35,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'Interactive Diagram',
        descriptionEn: 'Visual layout of Linux configuration files: /etc/hosts (local overrides) -> /etc/resolv.conf (nameservers) -> Ubuntu Netplan YAML syntax (/etc/netplan/01-netcfg.yaml) -> applying with "netplan apply" -> NetworkManager CLI (nmcli con show).',
        descriptionBn: 'উবুন্টু নেটপ্ল্যান ইয়ামল (YAML) ফাইল এবং নেটওয়ার্ক ম্যানেজার nmcli দিয়ে সার্ভারে স্থায়ী আইপি ও ডিএনএস বসানোর পদ্ধতি।'
      },
      keyConcepts: ['/etc/hosts & /etc/resolv.conf', 'Netplan YAML Formatting & Indentation', 'NetworkManager & nmcli / nmtui', 'Systemd-resolved Service Management'],
      summaryEn: 'Mastering persistent static IP, gateway, and DNS configuration on Ubuntu, Debian, RHEL, and CentOS systems.',
      summaryBn: 'লিনাক্স সার্ভার রিবুট হলেও আইপি ও গেটওয়ে ঠিক রাখার স্থায়ী কনফিগারেশন পদ্ধতি।'
    },
    {
      id: 'kali-linux-networking-diagnostics',
      titleEn: 'Kali Linux Networking: Diagnostic Commands, Packet Inspection, and MTR',
      titleBn: 'কালি লিনাক্স নেটওয়ার্কিং: ডায়াগনস্টিক কমান্ড, প্যাকেট ইনস্পেকশন ও MTR',
      durationMinutes: 40,
      difficulty: 'Advanced',
      visualPlan: {
        visualType: 'CLI Simulator',
        descriptionEn: 'Kali Linux terminal demonstrating standard networking analysis: tcpdump -nn -i eth0 port 80 or port 53 (live packet sniffing for debugging); mtr --report 8.8.8.8 (continuous real-time path latency and packet loss); verifying interface MTU and fragmentation with ping -M do -s 1472.',
        descriptionBn: 'কালি লিনাক্সে টিসিপিডাম্প দিয়ে লাইভ প্যাকেট দেখা, এমটিআর (MTR) দিয়ে প্রতিটি রাউটারের প্যাকেট লস পরিমাপ এবং এমটিইউ সাইজ যাচাই।'
      },
      keyConcepts: ['tcpdump Syntax & Berkeley Packet Filters (BPF)', 'My Traceroute (MTR) Live Latency Profiling', 'MTU & DF-bit Fragmentation Diagnostics', 'Standard Network Analysis in Kali'],
      summaryEn: 'Utilizing Kali Linux strictly as a world-class network diagnostics and packet inspection workstation.',
      summaryBn: 'কালি লিনাক্সকে একটি পেশাদার নেটওয়ার্ক ট্রাবলশুটিং ও প্যাকেট অ্যানালাইসিস ওয়ার্কস্টেশন হিসেবে ব্যবহারের উপায়।'
    }
  ]
};
