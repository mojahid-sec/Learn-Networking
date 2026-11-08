import React, { useState } from 'react';
import { Laptop, Network, Layers, Server, Globe, ArrowRight, Play, RotateCcw } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const PacketTransmissionVisual: React.FC = () => {
  const { t } = useLanguage();
  const [hopIndex, setHopIndex] = useState(0);

  const hops = [
    {
      step: 1,
      titleEn: 'Hop 1: PC-A -> Local Default Gateway Router',
      titleBn: 'হপ ১: পিসি-এ থেকে লোকাল গেটওয়ে রাউটার',
      srcIp: '192.168.1.10 (PC-A)',
      dstIp: '142.250.190.46 (Web Server)',
      srcMac: 'AA:AA:AA:11:11:11 (PC-A)',
      dstMac: 'BB:BB:BB:00:00:01 (Router G0/0)',
      explanationEn: 'PC-A determines that 142.250.190.46 is outside its local /24 subnet. It encapsulates the IP packet inside an Ethernet frame addressed to its Default Gateway\'s MAC address.',
      explanationBn: 'পিসি-এ বুঝতে পারে গন্তব্য আইপি নিজস্ব লোকাল নেটওয়ার্কে নেই। তাই ফ্রেমের ডেস্টিনেশন ম্যাক হিসেবে ডিফল্ট গেটওয়ে রাউটারের ম্যাক বসিয়ে পাঠায়।'
    },
    {
      step: 2,
      titleEn: 'Hop 2: Router R1 -> ISP Edge Router R2',
      titleBn: 'হপ ২: রাউটার ১ থেকে আইএসপি এজ রাউটার ২',
      srcIp: '192.168.1.10 (PC-A)',
      dstIp: '142.250.190.46 (Web Server)',
      srcMac: 'BB:BB:BB:00:00:02 (R1 Egress)',
      dstMac: 'CC:CC:CC:00:00:01 (R2 Ingress)',
      explanationEn: 'Router R1 strips old L2 MAC header, decrements TTL 64->63, checks routing table, and writes a NEW L2 frame with R1 egress MAC as source and R2 ingress MAC as destination. Layer 3 IPs remain 100% UNCHANGED!',
      explanationBn: 'রাউটার পুরোনো ম্যাক হেডার ফেলে দেয়, টিটিএল ১ কমায় এবং নতুন ম্যাক হেডার যুক্ত করে। লক্ষ করুন: আইপি কিন্তু একটুও পরিবর্তন হয়নি!'
    },
    {
      step: 3,
      titleEn: 'Hop 3: Final Router -> Destination Web Server',
      titleBn: 'হপ ৩: শেষ রাউটার থেকে গন্তব্য ওয়েব সার্ভার',
      srcIp: '192.168.1.10 (PC-A)',
      dstIp: '142.250.190.46 (Web Server)',
      srcMac: 'DD:DD:DD:00:00:02 (Final Router)',
      dstMac: 'EE:EE:EE:88:88:88 (Web Server NIC)',
      explanationEn: 'Final router checks its ARP cache for 142.250.190.46 and sends the frame directly onto the server\'s local switch port.',
      explanationBn: 'শেষ রাউটার তার এআরপি টেবিল থেকে সার্ভারের ম্যাক পেয়ে সরাসরি সার্ভারের এনআইসি কার্ডের দিকে ফ্রেম ডেলিভারি করে।'
    }
  ];

  const current = hops[hopIndex];

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {hops.map((h, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setHopIndex(i)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                hopIndex === i
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-950 border border-slate-800 text-slate-300'
              }`}
            >
              Hop {h.step}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setHopIndex((hopIndex + 1) % hops.length)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-cyan-300 hover:text-white"
        >
          <Play className="h-3 w-3 fill-current" />
          <span>Next Hop &rarr;</span>
        </button>
      </div>

      {/* Path Nodes Visual */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        <div className={`p-3 rounded-xl border text-center ${hopIndex === 0 ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300' : 'border-slate-800 bg-slate-900/60 text-slate-400'}`}>
          <Laptop className="h-6 w-6 mx-auto mb-1" />
          <span className="text-[11px] font-bold block">PC-A</span>
          <span className="text-[9px] font-mono-code">192.168.1.10</span>
        </div>

        <ArrowRight className={`h-4 w-4 ${hopIndex === 0 ? 'text-cyan-400 animate-pulse' : 'text-slate-600'}`} />

        <div className={`p-3 rounded-xl border text-center ${hopIndex === 1 ? 'border-blue-400 bg-blue-950/40 text-blue-300' : 'border-slate-800 bg-slate-900/60 text-slate-400'}`}>
          <Layers className="h-6 w-6 mx-auto mb-1 text-emerald-400" />
          <span className="text-[11px] font-bold block">Router R1</span>
          <span className="text-[9px] font-mono-code">Gateway</span>
        </div>

        <ArrowRight className={`h-4 w-4 ${hopIndex === 1 ? 'text-blue-400 animate-pulse' : 'text-slate-600'}`} />

        <div className={`p-3 rounded-xl border text-center ${hopIndex === 2 ? 'border-emerald-400 bg-emerald-950/40 text-emerald-300' : 'border-slate-800 bg-slate-900/60 text-slate-400'}`}>
          <Server className="h-6 w-6 mx-auto mb-1 text-purple-400" />
          <span className="text-[11px] font-bold block">Web Server</span>
          <span className="text-[9px] font-mono-code">142.250.190.46</span>
        </div>
      </div>

      {/* Packet Header Inspector */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Wire Packet Header at {current.titleEn}
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Layer 3 IP Header (CONSTANT) */}
          <div className="p-3.5 rounded-xl border border-emerald-500/40 bg-slate-950 font-mono-code text-xs">
            <span className="text-emerald-400 font-bold block mb-2">Layer 3 IP Header (End-to-End CONSTANT)</span>
            <div className="text-[11px] text-slate-300 space-y-1">
              <div>Src IP: <strong className="text-emerald-300">{current.srcIp}</strong></div>
              <div>Dst IP: <strong className="text-emerald-300">{current.dstIp}</strong></div>
            </div>
          </div>

          {/* Layer 2 MAC Header (CHANGES EVERY HOP) */}
          <div className="p-3.5 rounded-xl border border-amber-500/40 bg-slate-950 font-mono-code text-xs">
            <span className="text-amber-400 font-bold block mb-2">Layer 2 Ethernet Header (REWRITTEN EVERY HOP)</span>
            <div className="text-[11px] text-slate-300 space-y-1">
              <div>Src MAC: <strong className="text-amber-300">{current.srcMac}</strong></div>
              <div>Dst MAC: <strong className="text-amber-300">{current.dstMac}</strong></div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-200 leading-relaxed pt-2 border-t border-slate-800">
          {t(current.explanationEn, current.explanationBn)}
        </p>
      </div>
    </div>
  );
};
