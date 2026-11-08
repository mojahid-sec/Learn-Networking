import React, { useState } from 'react';
import { Network, Laptop, Server, AlertTriangle, CheckCircle2, Shield, Radio, Cpu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const TopologiesVisual: React.FC = () => {
  const { t } = useLanguage();
  const [selectedTopology, setSelectedTopology] = useState<'star' | 'bus' | 'ring' | 'mesh' | 'tree' | 'hybrid'>('star');
  const [failedNode, setFailedNode] = useState<number | null>(null);

  const topologies = [
    {
      id: 'star',
      nameEn: 'Star Topology',
      nameBn: 'স্টার টপোলজি',
      descEn: 'All nodes connect to a central switch/hub. If one cable fails, only that device disconnects. Central switch failure halts the network.',
      descBn: 'সকল কম্পিউটার একটি কেন্দ্রীয় সুইচ বা হাবের সাথে সরাসরি যুক্ত থাকে। একটি ক্যাবল ছিঁড়ে গেলেও বাকি নেটওয়ার্ক চালু থাকে।'
    },
    {
      id: 'bus',
      nameEn: 'Bus Topology',
      nameBn: 'বাস টপোলজি',
      descEn: 'All devices share a single backbone coaxial cable with terminators at both ends. If the backbone breaks, the entire network goes down.',
      descBn: 'একটিমাত্র মূল ব্যাকবোন তারের সাথে সকল ডিভাইস যুক্ত থাকে। মূল ব্যাকবোন ক্যাবল কেটে গেলে সম্পূর্ণ নেটওয়ার্ক অচল হয়ে যায়।'
    },
    {
      id: 'ring',
      nameEn: 'Ring Topology',
      nameBn: 'রিং টপোলজি',
      descEn: 'Devices connect in a circular loop. Data travels in a single direction (unidirectional token passing). A break in the ring collapses communication unless dual-ring is used.',
      descBn: 'প্রতিটি কম্পিউটার বৃত্তাকারে তার পাশাপাশি থাকা দুটি ডিভাইসের সাথে যুক্ত থাকে। টোকেন পাসিংয়ের মাধ্যমে একমুখী ডেটা প্রবাহিত হয়।'
    },
    {
      id: 'mesh',
      nameEn: 'Full Mesh Topology',
      nameBn: 'মেশ টপোলজি',
      descEn: 'Every node connects directly to every other node (Formula: N*(N-1)/2 cables). Provides maximum redundancy and zero single point of failure.',
      descBn: 'প্রতিটি কম্পিউটার অন্য সকল কম্পিউটারের সাথে পৃথক পৃথক ক্যাবল দিয়ে সরাসরি যুক্ত থাকে। সর্বোচ্চ নির্ভরযোগ্যতা নিশ্চিত করে।'
    },
    {
      id: 'tree',
      nameEn: 'Tree (Hierarchical) Topology',
      nameBn: 'ট্রি (হায়ারার্কিক্যাল) টপোলজি',
      descEn: 'Combines multiple star topologies connected to a central root bus or core switch. Used in modern enterprise campus networks.',
      descBn: 'একাধিক স্টার টপোলজি যখন গাছের ডালপালার মতো একটি প্রধান রুট সুইচের সাথে শাখা-প্রশাখায় যুক্ত থাকে।'
    },
    {
      id: 'hybrid',
      nameEn: 'Hybrid Topology',
      nameBn: 'হাইব্রিড টপোলজি',
      descEn: 'Combination of two or more distinct topologies (e.g. Star-Ring or Star-Bus) tailored for organizational requirements.',
      descBn: 'দুই বা ততোধিক ভিন্নধর্মী টপোলজির সমন্বয়ে গঠিত মিশ্র নেটওয়ার্ক ব্যবস্থা।'
    }
  ];

  const current = topologies.find(tp => tp.id === selectedTopology) || topologies[0];

  return (
    <div className="space-y-6">
      {/* Topology selector pills */}
      <div className="flex flex-wrap gap-2">
        {topologies.map(tp => (
          <button
            key={tp.id}
            type="button"
            onClick={() => {
              setSelectedTopology(tp.id as any);
              setFailedNode(null);
            }}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
              selectedTopology === tp.id
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
            }`}
          >
            {t(tp.nameEn, tp.nameBn)}
          </button>
        ))}
      </div>

      {/* Description card */}
      <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-4">
        <h4 className="text-sm font-bold text-cyan-300 mb-1">
          {t(current.nameEn, current.nameBn)}
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          {t(current.descEn, current.descBn)}
        </p>
      </div>

      {/* Interactive Topology Visual Canvas */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 flex flex-col items-center justify-center min-h-[320px] relative overflow-hidden">
        {selectedTopology === 'star' && (
          <div className="relative w-full max-w-md h-64 flex items-center justify-center">
            {/* Center Switch */}
            <div className="z-10 flex flex-col items-center">
              <div className="h-16 w-16 rounded-2xl bg-cyan-500/20 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Network className="h-8 w-8" />
              </div>
              <span className="text-[11px] font-bold text-white mt-1">Central Switch</span>
              <span className="text-[9px] text-cyan-400 font-mono-code">Star Hub</span>
            </div>

            {/* Surrounding Nodes */}
            {[
              { pos: 'top-2 left-1/2 -translate-x-1/2', name: 'PC-1', ip: '192.168.1.11', id: 1 },
              { pos: 'bottom-2 left-1/2 -translate-x-1/2', name: 'PC-2', ip: '192.168.1.12', id: 2 },
              { pos: 'left-4 top-1/2 -translate-y-1/2', name: 'PC-3', ip: '192.168.1.13', id: 3 },
              { pos: 'right-4 top-1/2 -translate-y-1/2', name: 'Server', ip: '192.168.1.50', id: 4 }
            ].map((node) => {
              const isDead = failedNode === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setFailedNode(isDead ? null : node.id)}
                  className={`absolute ${node.pos} flex flex-col items-center p-2 rounded-xl border transition-all ${
                    isDead
                      ? 'border-rose-500/80 bg-rose-950/40 text-rose-300'
                      : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-cyan-500'
                  }`}
                  title="Click to simulate cable cut"
                >
                  <Laptop className={`h-6 w-6 ${isDead ? 'text-rose-400' : 'text-slate-300'}`} />
                  <span className="text-[10px] font-bold text-white">{node.name}</span>
                  <span className="text-[9px] font-mono-code text-slate-400">{isDead ? 'DISCONNECTED' : node.ip}</span>
                </button>
              );
            })}
          </div>
        )}

        {selectedTopology === 'bus' && (
          <div className="w-full max-w-lg py-6 flex flex-col items-center">
            {/* Bus backbone cable */}
            <div className="w-full h-2.5 bg-gradient-to-r from-amber-500 via-cyan-400 to-amber-500 rounded relative flex items-center justify-between px-2">
              <span className="absolute -left-3 -top-2 text-[9px] font-bold text-amber-400 bg-slate-900 border border-amber-500/50 px-1 rounded">50Ω Term</span>
              <span className="absolute -right-3 -top-2 text-[9px] font-bold text-amber-400 bg-slate-900 border border-amber-500/50 px-1 rounded">50Ω Term</span>
            </div>
            <span className="text-[10px] text-cyan-400 font-mono-code mt-2">Shared Coaxial Trunk Cable (10BASE2 / 10BASE5)</span>

            {/* Drop lines to workstations */}
            <div className="w-full grid grid-cols-4 gap-4 mt-6">
              {[1, 2, 3, 4].map((id) => (
                <div key={id} className="flex flex-col items-center">
                  <div className="h-6 w-0.5 bg-slate-600 mb-1" />
                  <div className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 flex flex-col items-center text-center">
                    <Laptop className="h-5 w-5 text-cyan-400" />
                    <span className="text-[10px] font-bold text-white mt-1">Node {id}</span>
                    <span className="text-[8px] text-slate-400 font-mono-code">T-Connector</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTopology === 'ring' && (
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-cyan-500/40 animate-spin" style={{ animationDuration: '30s' }} />
            <div className="z-10 text-center">
              <span className="text-xs font-bold text-cyan-300 block">Token Passing</span>
              <span className="text-[10px] text-slate-400 block">Unidirectional</span>
            </div>

            {[
              { pos: 'top-0 left-1/2 -translate-x-1/2', name: 'Node 1' },
              { pos: 'right-0 top-1/2 -translate-y-1/2', name: 'Node 2' },
              { pos: 'bottom-0 left-1/2 -translate-x-1/2', name: 'Node 3' },
              { pos: 'left-0 top-1/2 -translate-y-1/2', name: 'Node 4' },
            ].map((node, i) => (
              <div key={i} className={`absolute ${node.pos} p-2 rounded-xl border border-slate-800 bg-slate-900 flex flex-col items-center`}>
                <Laptop className="h-5 w-5 text-cyan-400" />
                <span className="text-[10px] font-bold text-white">{node.name}</span>
              </div>
            ))}
          </div>
        )}

        {selectedTopology === 'mesh' && (
          <div className="w-full max-w-sm py-4 text-center">
            <div className="grid grid-cols-2 gap-8 p-4 rounded-2xl border border-purple-500/30 bg-purple-950/20">
              {['Server A', 'Server B', 'Server C', 'Server D'].map((name, i) => (
                <div key={i} className="p-3 rounded-xl border border-purple-500/40 bg-slate-900 flex flex-col items-center">
                  <Server className="h-6 w-6 text-purple-400" />
                  <span className="text-[11px] font-bold text-white mt-1">{name}</span>
                  <span className="text-[9px] text-purple-300 font-mono-code">3 Direct Links</span>
                </div>
              ))}
            </div>
            <span className="text-[11px] text-purple-300 font-mono-code mt-3 block">
              Total Links = N*(N-1)/2 = 4*3/2 = 6 Dedicated Physical Links
            </span>
          </div>
        )}

        {selectedTopology === 'tree' && (
          <div className="w-full max-w-md py-4 flex flex-col items-center space-y-4">
            <div className="p-3 rounded-xl border-2 border-emerald-500 bg-emerald-950/40 flex flex-col items-center">
              <Cpu className="h-6 w-6 text-emerald-400" />
              <span className="text-xs font-bold text-white">Root Core Switch</span>
            </div>
            <div className="grid grid-cols-2 gap-8 w-full">
              <div className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 flex flex-col items-center">
                <Network className="h-5 w-5 text-cyan-400" />
                <span className="text-[10px] font-bold text-white">Distribution SW 1</span>
              </div>
              <div className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 flex flex-col items-center">
                <Network className="h-5 w-5 text-cyan-400" />
                <span className="text-[10px] font-bold text-white">Distribution SW 2</span>
              </div>
            </div>
          </div>
        )}

        {selectedTopology === 'hybrid' && (
          <div className="w-full max-w-md p-4 text-center space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-cyan-500/40 bg-slate-900 text-left">
                <span className="text-xs font-bold text-cyan-300 block">Sub-Network 1: Star</span>
                <span className="text-[10px] text-slate-400">Headquarters Floor 1</span>
              </div>
              <div className="p-4 rounded-xl border border-purple-500/40 bg-slate-900 text-left">
                <span className="text-xs font-bold text-purple-300 block">Sub-Network 2: Ring</span>
                <span className="text-[10px] text-slate-400">Production Assembly Line</span>
              </div>
            </div>
            <span className="text-xs text-slate-300 font-mono-code block">
              Connected via Inter-Building Optical Backbone
            </span>
          </div>
        )}
      </div>

      <div className="text-center text-xs text-slate-400">
        {t('💡 Tip: In Star topology, click any workstation to simulate single cable disconnect and verify resilience.', '💡 টিপ: স্টার টপোলজিতে যেকোনো কম্পিউটারে ক্লিক করে ক্যাবল বিচ্ছিন্ন করে স্থিতিস্থাপকতা পরীক্ষা করুন।')}
      </div>
    </div>
  );
};
