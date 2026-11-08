import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  Layers, 
  Cpu, 
  Server, 
  CheckCircle2,
  Share2,
  Workflow
} from 'lucide-react';
import { diagramsData } from '../../data/diagramsData';
import { useLanguage } from '../../context/LanguageContext';

export const VisualSection: React.FC = () => {
  const { t } = useLanguage();
  const [packetStep, setPacketStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Steps for mini-interactive router forwarding preview
  const steps = [
    {
      step: 1,
      titleEn: 'Packet Ingress on Interface eth0',
      titleBn: 'eth0 ইন্টারফেসে ইনকামিং প্যাকেট গ্রহণ',
      detailEn: 'Incoming Ethernet Frame received. CRC checksum validated. Layer 2 header stripped. Destination IP extracted: 192.168.20.45.',
      detailBn: 'ইথারনেট ফ্রেম গৃহীত হয়েছে। সিআরসি চেকসাম সঠিক প্রমাণিত হয়েছে। লেয়ার ২ হেডার সরিয়ে ডেস্টিনেশন আইপি ১৯২.১৬৮.২০.৪৫ পাওয়া গেছে।',
      activeNode: 'ingress',
    },
    {
      step: 2,
      titleEn: 'FIB / Routing Table Lookup (LPM)',
      titleBn: 'রাউটিং টেবিল লুকআপ (লঙ্গেস্ট প্রিফিক্স ম্যাচ)',
      detailEn: 'Router matches destination IP against prefix 192.168.20.0/24 with Next-Hop 10.0.0.2 via eth1. TTL decremented from 64 to 63.',
      detailBn: 'রাউটার প্রিফিক্স ১৯২.১৬৮.২০.০/২৪ এর সাথে ম্যাচ করেছে। নেক্সট-হপ ১০.০.০.২ (ইন্টারফেস eth1)। টিটিএল ৬৪ থেকে হ্রাস পেয়ে ৬৩ হয়েছে।',
      activeNode: 'engine',
    },
    {
      step: 3,
      titleEn: 'ARP Resolution & Layer 2 Framing',
      titleBn: 'এআরপি রেজোলিউশন ও নতুন লেয়ার ২ ফ্রেম তৈরি',
      detailEn: 'Router queries ARP cache for Next-Hop 10.0.0.2 MAC address. New Source MAC (Router eth1) and Target MAC encapsulated.',
      detailBn: 'রাউটার এআরপি ক্যাশ থেকে নেক্সট-হপের ম্যাক অ্যাড্রেস সংগ্রহ করে নতুন সোর্স ও ডেস্টিনেশন ম্যাক হেডার যুক্ত করেছে।',
      activeNode: 'arp',
    },
    {
      step: 4,
      titleEn: 'Egress Forwarding to Next-Hop',
      titleBn: 'আউটগোয়িং ইন্টারফেসে প্যাকেট প্রেরণ সম্পন্ন',
      detailEn: 'Packet successfully transmitted out of eth1 onto destination link with zero collisions.',
      detailBn: 'প্যাকেট সফলভাবে eth1 দিয়ে পরবর্তী নোডে যাত্রা করেছে। সম্পূর্ণ ডেটা অটুট রয়েছে।',
      activeNode: 'egress',
    },
  ];

  const handleNextStep = () => {
    setPacketStep((prev) => (prev < 4 ? prev + 1 : 1));
  };

  const handleReset = () => {
    setPacketStep(1);
  };

  return (
    <section className="py-20 relative bg-slate-900/30 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              <Workflow className="h-4 w-4" />
              <span>{t('Visual-First Networking', 'ভিজ্যুয়াল-ফার্স্ট নেটওয়ার্কিং')}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              {t('Interactive Topology & Packet Flow Engine', 'ইন্টারেক্টিভ টপোলজি ও প্যাকেট ফ্লো ইঞ্জিন')}
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
              {t(
                'No dry textbook memorization. Watch packets physically move, headers transform, and devices update state in real time.',
                'কোনো মুখস্থ বিদ্যা নয়। প্যাকেট কীভাবে এক নোড থেকে অন্য নোডে যায়, কীভাবে হেডার এনক্যাপসুলেশন ঘটে তা স্বচক্ষে দেখুন।'
              )}
            </p>
          </div>

          <Link
            to="/diagrams"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-cyan-500/40 bg-cyan-950/40 px-5 py-2.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-900/60 hover:text-white transition-all"
          >
            <span>{t('Explore All Diagrams', 'সকল ডায়াগ্রাম দেখুন')}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Live Interactive Diagram Sandbox */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 lg:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
          {/* Top Bar of Sandbox */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping" />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {t('Live Packet Simulator: Router Ingress & Forwarding Cycle', 'লাইভ প্যাকেট সিমুলেটর: রাউটার ইনগ্রেস ও ফরওয়ার্ডিং চক্র')}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono-code">
                Packet: [Src: 10.1.1.5] &rarr; [Dst: 192.168.20.45] | Protocol: TCP:443 (HTTPS)
              </p>
            </div>

            {/* Stepper Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>{t('Reset', 'রিসেট')}</span>
              </button>

              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 px-4 py-1.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition-colors shadow-sm shadow-cyan-500/20"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>{t('Step Forward', 'পরবর্তী ধাপ')} ({packetStep}/4)</span>
              </button>
            </div>
          </div>

          {/* Visual SVG Network Topology Canvas */}
          <div className="py-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Node 1: Ingress */}
              <div 
                className={`rounded-2xl border p-4 transition-all duration-300 ${
                  packetStep >= 1 
                    ? 'border-cyan-500/60 bg-cyan-950/20 shadow-md shadow-cyan-500/10' 
                    : 'border-slate-800 bg-slate-900/40 opacity-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                    Step 1
                  </span>
                  <Server className="h-4 w-4 text-cyan-400" />
                </div>
                <h4 className="text-sm font-bold text-white">Interface eth0 Ingress</h4>
                <p className="mt-1 text-[11px] text-slate-400">
                  CRC verified, strip L2 Ethernet frame, inspect IPv4 header.
                </p>
                <div className="mt-3 text-[10px] font-mono-code text-cyan-400 bg-slate-900/90 rounded p-1.5 border border-slate-800">
                  TTL: 64 &rarr; Valid Checksum
                </div>
              </div>

              {/* Node 2: Routing Table Lookup */}
              <div 
                className={`rounded-2xl border p-4 transition-all duration-300 ${
                  packetStep >= 2 
                    ? 'border-blue-500/60 bg-blue-950/20 shadow-md shadow-blue-500/10' 
                    : 'border-slate-800 bg-slate-900/40 opacity-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-slate-800 text-blue-300">
                    Step 2
                  </span>
                  <Cpu className="h-4 w-4 text-blue-400" />
                </div>
                <h4 className="text-sm font-bold text-white">Routing Engine (LPM)</h4>
                <p className="mt-1 text-[11px] text-slate-400">
                  Match 192.168.20.0/24 in FIB. Egress determined: eth1.
                </p>
                <div className="mt-3 text-[10px] font-mono-code text-blue-400 bg-slate-900/90 rounded p-1.5 border border-slate-800">
                  TTL: 64 - 1 = 63
                </div>
              </div>

              {/* Node 3: ARP Cache */}
              <div 
                className={`rounded-2xl border p-4 transition-all duration-300 ${
                  packetStep >= 3 
                    ? 'border-indigo-500/60 bg-indigo-950/20 shadow-md shadow-indigo-500/10' 
                    : 'border-slate-800 bg-slate-900/40 opacity-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-slate-800 text-indigo-300">
                    Step 3
                  </span>
                  <Layers className="h-4 w-4 text-indigo-400" />
                </div>
                <h4 className="text-sm font-bold text-white">ARP Cache Lookup</h4>
                <p className="mt-1 text-[11px] text-slate-400">
                  Resolve Next-Hop MAC address: 00:1A:2B:3C:4D:5E.
                </p>
                <div className="mt-3 text-[10px] font-mono-code text-indigo-400 bg-slate-900/90 rounded p-1.5 border border-slate-800">
                  New L2 Frame Attached
                </div>
              </div>

              {/* Node 4: Egress Forwarding */}
              <div 
                className={`rounded-2xl border p-4 transition-all duration-300 ${
                  packetStep >= 4 
                    ? 'border-emerald-500/60 bg-emerald-950/20 shadow-md shadow-emerald-500/10' 
                    : 'border-slate-800 bg-slate-900/40 opacity-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-slate-800 text-emerald-300">
                    Step 4
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                </div>
                <h4 className="text-sm font-bold text-white">Egress on eth1</h4>
                <p className="mt-1 text-[11px] text-slate-400">
                  Signal placed on wire to Next-Hop router/switch gateway.
                </p>
                <div className="mt-3 text-[10px] font-mono-code text-emerald-400 bg-slate-900/90 rounded p-1.5 border border-slate-800">
                  Status: Forwarded OK
                </div>
              </div>
            </div>

            {/* Current Step Description Card */}
            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-slate-950 text-xs font-bold font-mono-code">
                  {packetStep}
                </span>
                <div>
                  <h5 className="text-sm font-bold text-white">
                    {t(steps[packetStep - 1].titleEn, steps[packetStep - 1].titleBn)}
                  </h5>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    {t(steps[packetStep - 1].detailEn, steps[packetStep - 1].detailBn)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
