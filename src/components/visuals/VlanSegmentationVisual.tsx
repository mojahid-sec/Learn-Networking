import React, { useState } from 'react';
import { Network, Laptop, Server, Radio, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const VlanSegmentationVisual: React.FC = () => {
  const { t } = useLanguage();
  const [activeTraffic, setActiveTraffic] = useState<'vlan10' | 'vlan20' | 'cross'>('vlan10');

  return (
    <div className="space-y-6">
      {/* Selector */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTraffic('vlan10')}
          className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
            activeTraffic === 'vlan10'
              ? 'bg-blue-500 text-slate-950 font-bold'
              : 'bg-slate-950 border border-slate-800 text-slate-300'
          }`}
        >
          {t('Broadcast in VLAN 10 (Engineering)', 'ভি-ল্যান ১০ (ইঞ্জিনিয়ারিং) ব্রডকাস্ট')}
        </button>

        <button
          type="button"
          onClick={() => setActiveTraffic('vlan20')}
          className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
            activeTraffic === 'vlan20'
              ? 'bg-purple-500 text-slate-950 font-bold'
              : 'bg-slate-950 border border-slate-800 text-slate-300'
          }`}
        >
          {t('Broadcast in VLAN 20 (Finance)', 'ভি-ল্যান ২০ (ফিন্যান্স) ব্রডকাস্ট')}
        </button>

        <button
          type="button"
          onClick={() => setActiveTraffic('cross')}
          className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
            activeTraffic === 'cross'
              ? 'bg-rose-500 text-slate-950 font-bold'
              : 'bg-slate-950 border border-slate-800 text-slate-300'
          }`}
        >
          {t('Cross-VLAN Traffic (Blocked at L2)', 'ভিন্ন ভি-ল্যানে সরাসরি ট্রাফিক (ব্লক্ড)')}
        </button>
      </div>

      {/* Visual Canvas */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 flex flex-col items-center justify-center min-h-[300px]">
        {/* Switch Card */}
        <div className="p-4 rounded-2xl border-2 border-emerald-500/80 bg-slate-900 w-full max-w-lg mb-8 text-center shadow-lg">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-bold text-white">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Network className="h-4 w-4" />
              <span>Managed Switch (IEEE 802.1Q Active)</span>
            </span>
            <span className="text-[10px] text-cyan-300 font-mono-code">2 Isolated Broadcast Domains</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className={`p-2.5 rounded-xl border ${activeTraffic === 'vlan10' ? 'border-blue-400 bg-blue-950/40 text-blue-200' : 'border-slate-800 bg-slate-950 text-slate-400'}`}>
              <span className="text-[11px] font-bold block">VLAN 10 Ports: Fa0/1, Fa0/2</span>
              <span className="text-[9px] font-mono-code">Subnet: 192.168.10.0/24</span>
            </div>
            <div className={`p-2.5 rounded-xl border ${activeTraffic === 'vlan20' ? 'border-purple-400 bg-purple-950/40 text-purple-200' : 'border-slate-800 bg-slate-950 text-slate-400'}`}>
              <span className="text-[11px] font-bold block">VLAN 20 Ports: Fa0/3, Fa0/4</span>
              <span className="text-[9px] font-mono-code">Subnet: 192.168.20.0/24</span>
            </div>
          </div>
        </div>

        {/* Connected Hosts Grid */}
        <div className="w-full max-w-lg grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className={`p-3 rounded-xl border flex flex-col items-center text-center ${activeTraffic === 'vlan10' ? 'border-blue-400 bg-blue-950/40' : 'border-slate-800 bg-slate-900/60'}`}>
            <Laptop className="h-5 w-5 text-blue-400" />
            <span className="text-[11px] font-bold text-white mt-1">PC-A (Eng)</span>
            <span className="text-[9px] font-mono-code text-blue-300">192.168.10.11</span>
          </div>

          <div className={`p-3 rounded-xl border flex flex-col items-center text-center ${activeTraffic === 'vlan10' ? 'border-blue-400 bg-blue-950/40' : 'border-slate-800 bg-slate-900/60'}`}>
            <Laptop className="h-5 w-5 text-blue-400" />
            <span className="text-[11px] font-bold text-white mt-1">PC-B (Eng)</span>
            <span className="text-[9px] font-mono-code text-blue-300">192.168.10.12</span>
          </div>

          <div className={`p-3 rounded-xl border flex flex-col items-center text-center ${activeTraffic === 'vlan20' ? 'border-purple-400 bg-purple-950/40' : 'border-slate-800 bg-slate-900/60'}`}>
            <Laptop className="h-5 w-5 text-purple-400" />
            <span className="text-[11px] font-bold text-white mt-1">PC-C (Fin)</span>
            <span className="text-[9px] font-mono-code text-purple-300">192.168.20.21</span>
          </div>

          <div className={`p-3 rounded-xl border flex flex-col items-center text-center ${activeTraffic === 'vlan20' ? 'border-purple-400 bg-purple-950/40' : 'border-slate-800 bg-slate-900/60'}`}>
            <Laptop className="h-5 w-5 text-purple-400" />
            <span className="text-[11px] font-bold text-white mt-1">PC-D (Fin)</span>
            <span className="text-[9px] font-mono-code text-purple-300">192.168.20.22</span>
          </div>
        </div>
      </div>

      {/* Explanation Banner */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 text-xs text-slate-300 leading-relaxed font-mono-code">
        {activeTraffic === 'vlan10' && (
          <p className="text-blue-300">
            [VLAN 10 BROADCAST] Switch receives ARP/Broadcast on Fa0/1. Forwards ONLY to Fa0/2. VLAN 20 ports (Fa0/3, Fa0/4) NEVER receive this broadcast.
          </p>
        )}
        {activeTraffic === 'vlan20' && (
          <p className="text-purple-300">
            [VLAN 20 BROADCAST] Switch receives frame on Fa0/3. Forwards ONLY to Fa0/4. Zero leakage into VLAN 10.
          </p>
        )}
        {activeTraffic === 'cross' && (
          <p className="text-rose-300">
            [CROSS-VLAN ATTEMPT] PC-A tries to directly reach PC-C without a router. BLOCKED by switch Layer 2 isolation. Requires Layer 3 Router-on-a-Stick or Multi-Layer Switch SVI!
          </p>
        )}
      </div>
    </div>
  );
};
