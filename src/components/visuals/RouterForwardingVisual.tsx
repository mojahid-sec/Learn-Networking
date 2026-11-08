import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Server, 
  Laptop, 
  Network, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Info
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const RouterForwardingVisual: React.FC = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      titleEn: 'Step 1: Host Local vs Remote Decision',
      titleBn: 'ধাপ ১: হোস্টের লোকাল বনাম রিমোট নেটওয়ার্ক যাচাই',
      descEn: 'PC-A (192.168.1.10) compares destination IP (172.16.50.100) with its local subnet mask (255.255.255.0). Since the network bits do not match, the packet must be sent to the Default Gateway (Router eth0).',
      descBn: 'পিসি-এ (192.168.1.10) গন্তব্য আইপি (172.16.50.100) এবং নিজের সাবনেট মাস্ক মিলিয়ে দেখে এটি লোকাল নেটওয়ার্কে নেই। তাই প্যাকেটটি ডিফল্ট গেটওয়েতে পাঠানোর সিদ্ধান্ত নেয়।',
      activeNode: 'pca',
      srcIp: '192.168.1.10',
      dstIp: '172.16.50.100',
      srcMac: 'AA:AA:AA:11:11:11 (PC-A)',
      dstMac: '00:11:22:AA:BB:01 (Router eth0)',
      ttl: 64,
      layer: 'Layer 3 + Layer 2 Framing'
    },
    {
      titleEn: 'Step 2: Router Ingress & De-encapsulation',
      titleBn: 'ধাপ ২: রাউটার ইনগ্রেস ও লেয়ার ২ ফ্রেম খোলা',
      descEn: 'Router receives Ethernet frame on eth0. FCS checksum is validated. Since destination MAC matches eth0, the router strips the Layer 2 header and passes the raw IPv4 packet to the routing engine.',
      descBn: 'রাউটার eth0 পোর্টে ফ্রেম গ্রহণ করে। এরর যাচাই শেষে নিজের ম্যাক হওয়ায় লেয়ার ২ ফ্রেমটি খুলে ফেলে এবং ভেতরের আইপিভি৪ প্যাকেটটি রাউটিং প্রসেসরে পাঠায়।',
      activeNode: 'router-ingress',
      srcIp: '192.168.1.10',
      dstIp: '172.16.50.100',
      srcMac: '[Stripped Frame Header]',
      dstMac: '[Stripped Frame Header]',
      ttl: 64,
      layer: 'Layer 2 De-encapsulation'
    },
    {
      titleEn: 'Step 3: Routing Table Lookup (LPM)',
      titleBn: 'ধাপ ৩: রাউটিং টেবিলে লঙ্গেস্ট প্রিফিক্স ম্যাচ সন্ধান',
      descEn: 'Router inspects destination IP 172.16.50.100. It queries the FIB table: finds route 172.16.50.0/24 matching via outgoing interface eth1 with Next-Hop 172.16.50.100 directly connected.',
      descBn: 'রাউটার গন্তব্য আইপি পরীক্ষা করে রাউটিং টেবিলে সন্ধান চালায়। 172.16.50.0/24 রুটের সাথে মিলে যাওয়ায় আউটপুট পোর্ট হিসেবে eth1 নির্ধারণ করে।',
      activeNode: 'router-engine',
      srcIp: '192.168.1.10',
      dstIp: '172.16.50.100',
      srcMac: 'None (Processing in ASIC)',
      dstMac: 'None (Processing in ASIC)',
      ttl: 64,
      layer: 'Layer 3 Forwarding Decision'
    },
    {
      titleEn: 'Step 4: TTL Decrement & Checksum Recalculation',
      titleBn: 'ধাপ ৪: টিটিএল ১ কমানো ও নতুন চেকসাম তৈরি',
      descEn: 'To prevent infinite routing loops, router decrements TTL from 64 to 63. Since TTL > 0, the packet survives. The IPv4 header checksum is instantly recalculated in hardware.',
      descBn: 'লুপে পড়ে প্যাকেট আটকে থাকা ঠেকাতে রাউটার টিটিএল ১ কমিয়ে ৬৩ করে। টিটিএল ০ না হওয়ায় প্যাকেটটি বাতিল হয় না এবং নতুন হেডার চেকসাম তৈরি হয়।',
      activeNode: 'router-ttl',
      srcIp: '192.168.1.10',
      dstIp: '172.16.50.100',
      srcMac: 'None',
      dstMac: 'None',
      ttl: 63,
      layer: 'Layer 3 Header Mutation'
    },
    {
      titleEn: 'Step 5: Layer 2 Re-encapsulation (New MAC Headers)',
      titleBn: 'ধাপ ৫: নতুন লেয়ার ২ ফ্রেম তৈরি (নতুন ম্যাক হেডার)',
      descEn: 'Crucial Concept: IP addresses NEVER change, but MAC addresses change at EVERY hop! Router encapsulates packet with Source MAC = Router eth1 (00:11:22:AA:BB:02) and Destination MAC = Server B (BB:BB:BB:22:22:22).',
      descBn: 'সবচেয়ে জরুরি নিয়ম: আইপি কখনোই পরিবর্তিত হয় না, কিন্তু প্রতি হপে ম্যাক পরিবর্তন হয়! রাউটার নতুন ফ্রেম বানিয়ে সোর্স ম্যাক দেয় নিজের eth1 এবং ডেস্টিনেশন ম্যাক দেয় সার্ভারের ম্যাক।',
      activeNode: 'router-egress',
      srcIp: '192.168.1.10',
      dstIp: '172.16.50.100',
      srcMac: '00:11:22:AA:BB:02 (Router eth1)',
      dstMac: 'BB:BB:BB:22:22:22 (Server-B)',
      ttl: 63,
      layer: 'Layer 2 Re-encapsulation'
    },
    {
      titleEn: 'Step 6: Transmission & Destination Reception',
      titleBn: 'ধাপ ৬: তারে প্রেরণ এবং সার্ভারে চূড়ান্ত গ্রহণ',
      descEn: 'The newly framed Ethernet frame is transmitted over physical cable via eth1. Server B receives the frame on its NIC, validates FCS, matches its MAC, and passes payload to the application layer.',
      descBn: 'নতুন ফ্রেমটি eth1 ইন্টারফেসের তার দিয়ে বেরিয়ে যায়। সার্ভার বি নিজের নেটওয়ার্ক কার্ডে ফ্রেমটি গ্রহণ করে এবং ওয়েব অ্যাপ্লিকেশনে ডেটা হস্তান্তর করে।',
      activeNode: 'serverb',
      srcIp: '192.168.1.10',
      dstIp: '172.16.50.100',
      srcMac: '00:11:22:AA:BB:02',
      dstMac: 'BB:BB:BB:22:22:22',
      ttl: 63,
      layer: 'Delivery Completed'
    }
  ];

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < steps.length - 1) return prev + 1;
          setIsPlaying(false);
          return prev;
        });
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  const step = steps[currentStep];

  return (
    <div className="rounded-3xl border border-cyan-500/30 bg-slate-950 p-6 sm:p-8 backdrop-blur-md">
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-950/80 border border-cyan-800/60 px-3 py-1 text-xs font-semibold text-cyan-300 mb-2">
            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
            <span>{t('Deep Packet Forwarding Simulator', 'ডিপ প্যাকেট ফরওয়ার্ডিং সিমুলেটর')}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {t('How a Router Forwards Packets Across Networks', 'রাউটার কীভাবে এক নেটওয়ার্ক থেকে অন্য নেটওয়ার্কে প্যাকেট পাঠায়')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t(
              'Observe MAC address rewrites, TTL decrements, and routing table evaluation step by step.',
              'ম্যাক অ্যাড্রেস রূপান্তর, টিটিএল ১ কমানো এবং রাউটিং টেবিল মেলানোর প্রক্রিয়া সরাসরি দেখুন।'
            )}
          </p>
        </div>

        {/* Step Counter Badge */}
        <div className="flex items-center gap-2">
          <span className="rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs font-mono-code font-bold text-cyan-400">
            {currentStep + 1} / {steps.length}
          </span>
        </div>
      </div>

      {/* Network Topology Visual Stage */}
      <div className="my-8 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Node 1: PC-A */}
          <div className={`p-5 rounded-2xl border transition-all ${
            step.activeNode === 'pca'
              ? 'border-cyan-400 bg-cyan-950/50 shadow-lg shadow-cyan-950/50 ring-2 ring-cyan-500/30'
              : 'border-slate-800 bg-slate-950/80'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <Laptop className={`h-6 w-6 ${step.activeNode === 'pca' ? 'text-cyan-300' : 'text-slate-400'}`} />
              <div>
                <h4 className="text-sm font-bold text-white">Host PC-A</h4>
                <span className="text-[11px] text-cyan-400 font-mono-code">192.168.1.10/24</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 space-y-1 font-mono-code border-t border-slate-800 pt-2">
              <div>MAC: AA:AA:AA:11:11:11</div>
              <div>Gateway: 192.168.1.1</div>
            </div>
          </div>

          {/* Node 2: Core Router */}
          <div className={`p-5 rounded-2xl border transition-all relative ${
            ['router-ingress', 'router-engine', 'router-ttl', 'router-egress'].includes(step.activeNode)
              ? 'border-amber-400 bg-amber-950/40 shadow-lg shadow-amber-950/40 ring-2 ring-amber-500/30'
              : 'border-slate-800 bg-slate-950/80'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Network className="h-6 w-6 text-amber-400" />
                <h4 className="text-sm font-bold text-white">Edge Router R1</h4>
              </div>
              <span className="text-[10px] font-mono-code bg-amber-950 px-2 py-0.5 rounded text-amber-300 border border-amber-800/60">
                L3 FIB Engine
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono-code pt-2 border-t border-slate-800">
              <div className="bg-slate-950 p-1.5 rounded">
                <span className="text-cyan-400 block font-bold">eth0 (Ingress)</span>
                <span className="text-slate-300">192.168.1.1</span>
              </div>
              <div className="bg-slate-950 p-1.5 rounded text-right">
                <span className="text-emerald-400 block font-bold">eth1 (Egress)</span>
                <span className="text-slate-300">172.16.50.1</span>
              </div>
            </div>
          </div>

          {/* Node 3: Server B */}
          <div className={`p-5 rounded-2xl border transition-all ${
            step.activeNode === 'serverb'
              ? 'border-emerald-400 bg-emerald-950/50 shadow-lg shadow-emerald-950/50 ring-2 ring-emerald-500/30'
              : 'border-slate-800 bg-slate-950/80'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <Server className={`h-6 w-6 ${step.activeNode === 'serverb' ? 'text-emerald-300' : 'text-slate-400'}`} />
              <div>
                <h4 className="text-sm font-bold text-white">Web Server B</h4>
                <span className="text-[11px] text-emerald-400 font-mono-code">172.16.50.100/24</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 space-y-1 font-mono-code border-t border-slate-800 pt-2">
              <div>MAC: BB:BB:BB:22:22:22</div>
              <div>Service: TCP Port 443 (HTTPS)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Step Explanation Callout */}
      <div className="rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/50 to-blue-950/40 p-5 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs">
            {currentStep + 1}
          </span>
          <h4 className="text-base font-bold text-white">
            {t(step.titleEn, step.titleBn)}
          </h4>
        </div>
        <p className="text-sm text-slate-200 leading-relaxed">
          {t(step.descEn, step.descBn)}
        </p>
      </div>

      {/* Live Packet Header Inspector */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 mb-6">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Info className="h-4 w-4 text-cyan-400" />
            <span>{t('Live Packet Header Inspector', 'লাইভ প্যাকেট হেডার নিরীক্ষা')}</span>
          </span>
          <span className="text-[11px] text-cyan-400 font-mono-code bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
            {step.layer}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-code text-xs">
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase">Source IP (Layer 3)</span>
            <span className="text-cyan-300 font-bold">{step.srcIp}</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase">Destination IP (Layer 3)</span>
            <span className="text-emerald-300 font-bold">{step.dstIp}</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase">Time To Live (TTL)</span>
            <span className={`font-bold ${step.ttl === 63 ? 'text-amber-400' : 'text-slate-200'}`}>
              {step.ttl} {step.ttl === 63 ? '(-1 Decr)' : ''}
            </span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase">Next-Hop MAC (Layer 2)</span>
            <span className="text-purple-300 font-bold truncate block">{step.dstMac}</span>
          </div>
        </div>
      </div>

      {/* Simulator Navigation Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>{t('Previous Step', 'পূর্ববর্তী ধাপ')}</span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
            disabled={currentStep === steps.length - 1}
            className="inline-flex items-center gap-1 rounded-xl bg-cyan-500 text-slate-950 px-4 py-2 text-xs font-bold hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-cyan-500/20"
          >
            <span>{t('Next Step', 'পরবর্তী ধাপ')}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-800/60 bg-cyan-950/60 px-3.5 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-900/60 transition-all"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            <span>{isPlaying ? t('Pause', 'থামুন') : t('Auto Play', 'অটো প্লে')}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setIsPlaying(false);
              setCurrentStep(0);
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-all"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>{t('Reset', 'রিসেট')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
