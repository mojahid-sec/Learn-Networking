import React, { useState } from 'react';
import { 
  Server, 
  Laptop, 
  Play, 
  RotateCcw, 
  Layers, 
  CheckCircle2, 
  AlertTriangle,
  Info,
  Radio
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface CamEntry {
  vlan: number;
  mac: string;
  type: 'DYNAMIC' | 'STATIC';
  port: string;
  host: string;
}

export const SwitchMacLearningVisual: React.FC = () => {
  const { t } = useLanguage();

  const [camTable, setCamTable] = useState<CamEntry[]>([
    { vlan: 1, mac: '00:11:22:AA:01:01', type: 'DYNAMIC', port: 'Fa0/1', host: 'PC-1' },
    { vlan: 1, mac: '00:11:22:AA:01:02', type: 'DYNAMIC', port: 'Fa0/2', host: 'PC-2' },
  ]);

  const [actionLog, setActionLog] = useState<string[]>([
    'Switch Cisco Catalyst 2960 boot complete. CAM Table initialized with Ports Fa0/1 and Fa0/2 populated.'
  ]);

  const [currentVlan, setCurrentVlan] = useState<number>(1);
  const [activePort, setActivePort] = useState<string | null>(null);

  const simulateFrame = (
    srcPort: string, 
    srcMac: string, 
    srcHost: string, 
    dstMac: string, 
    isBroadcast = false,
    frameVlan = 1
  ) => {
    setActivePort(srcPort);
    const newLogs: string[] = [];

    // Step 1: Learning Phase from Source MAC
    const existingIndex = camTable.findIndex(e => e.mac === srcMac);
    let updatedCam = [...camTable];

    if (existingIndex === -1) {
      updatedCam.push({
        vlan: frameVlan,
        mac: srcMac,
        type: 'DYNAMIC',
        port: srcPort,
        host: srcHost
      });
      newLogs.push(`[1. LEARN] Ingress frame on ${srcPort}: Learned Source MAC ${srcMac} belongs to ${srcHost} in VLAN ${frameVlan}. CAM Table entry added.`);
    } else {
      newLogs.push(`[1. REFRESH] Ingress frame on ${srcPort}: Verified ${srcMac} on ${srcPort}. Refreshed 300-second aging timer.`);
    }

    // Step 2: Forwarding Decision Phase from Destination MAC
    if (isBroadcast || dstMac === 'FF:FF:FF:FF:FF:FF') {
      newLogs.push(`[2. BROADCAST] Destination MAC is FF:FF:FF:FF:FF:FF. Flooding frame to all ports in VLAN ${frameVlan} EXCEPT ingress port ${srcPort}.`);
    } else {
      const targetEntry = updatedCam.find(e => e.mac === dstMac && e.vlan === frameVlan);
      if (targetEntry) {
        if (targetEntry.port === srcPort) {
          newLogs.push(`[2. FILTER] Destination MAC ${dstMac} resides on the same ingress port ${srcPort}. Frame silently filtered (dropped) to prevent duplicate reflections.`);
        } else {
          newLogs.push(`[2. FORWARD] Found ${dstMac} on port ${targetEntry.port}. Unicast frame forwarded directly out port ${targetEntry.port} at wire speed.`);
        }
      } else {
        newLogs.push(`[2. FLOOD] Unknown Unicast! Destination ${dstMac} is not yet in CAM Table. Flooding frame out all ports in VLAN ${frameVlan} except ${srcPort}.`);
      }
    }

    setCamTable(updatedCam);
    setActionLog(prev => [...newLogs, ...prev].slice(0, 10));
    setTimeout(() => setActivePort(null), 1200);
  };

  const clearCam = () => {
    setCamTable([]);
    setActionLog(['CAM Table cleared. Switch will now flood all incoming unicast frames until sources speak.']);
  };

  return (
    <div className="rounded-3xl border border-sky-500/30 bg-slate-950 p-6 sm:p-8 backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-950/80 border border-sky-800/60 px-3 py-1 text-xs font-semibold text-sky-300 mb-2">
            <Server className="h-3.5 w-3.5 text-sky-400" />
            <span>{t('Layer 2 Switching Engine', 'লেয়ার ২ সুইচিং মেকানিজম')}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {t('MAC Address Learning & CAM Table Engine', 'ম্যাক অ্যাড্রেস লার্নিং ও সিএএম (CAM) টেবিল ইঞ্জিন')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t(
              'Interactive demonstration: Learn from Source MAC, Forward Known Unicast, Flood Unknown Unicast, and Filter.',
              'সুইচের লার্ন, ফরওয়ার্ড, ফ্লাড ও ফিল্টারের বাস্তব কার্যপ্রণালী নিজেই ক্লিক করে পরীক্ষা করুন।'
            )}
          </p>
        </div>

        <button
          type="button"
          onClick={clearCam}
          className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>{t('Flush CAM Table', 'টেবিল ফাঁকা করুন')}</span>
        </button>
      </div>

      {/* Switch Hardware Representation */}
      <div className="my-8 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Server className="h-5 w-5 text-sky-400" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Cisco 4-Port FastEthernet Switch</span>
          </div>
          <span className="text-xs text-sky-300 font-mono-code bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
            Aging Timer: 300s
          </span>
        </div>

        {/* 4 Interactive Ports */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { port: 'Fa0/1', host: 'PC-1', mac: '00:11:22:AA:01:01', ip: '192.168.1.10', vlan: 1 },
            { port: 'Fa0/2', host: 'PC-2', mac: '00:11:22:AA:01:02', ip: '192.168.1.20', vlan: 1 },
            { port: 'Fa0/3', host: 'PC-3', mac: '00:11:22:AA:01:03', ip: '192.168.1.30', vlan: 1 },
            { port: 'Fa0/4', host: 'Server', mac: '00:11:22:AA:01:99', ip: '192.168.1.254', vlan: 1 },
          ].map((node) => {
            const isEntryLearned = camTable.some(e => e.mac === node.mac);
            const isPulsing = activePort === node.port;

            return (
              <div
                key={node.port}
                className={`p-4 rounded-xl border transition-all ${
                  isPulsing
                    ? 'border-sky-400 bg-sky-950/60 shadow-lg ring-2 ring-sky-500/40'
                    : isEntryLearned
                    ? 'border-slate-800 bg-slate-950/80'
                    : 'border-slate-800/40 bg-slate-950/40 opacity-70'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono-code font-bold text-sky-400">{node.port}</span>
                  <span className={`h-2.5 w-2.5 rounded-full ${isEntryLearned ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                </div>
                <h5 className="text-xs font-bold text-white">{node.host}</h5>
                <span className="text-[10px] text-slate-400 font-mono-code block mt-0.5">{node.ip}</span>
                <span className="text-[9px] text-slate-500 font-mono-code truncate block mt-1">{node.mac}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Frame Trigger Simulation Buttons */}
      <div className="mb-6">
        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
          {t('Trigger Simulated Ethernet Frames:', 'সিমুলেটেড ইথারনেট ফ্রেম পাঠান:')}
        </span>
        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => simulateFrame('Fa0/1', '00:11:22:AA:01:01', 'PC-1', '00:11:22:AA:01:02')}
            className="rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:border-sky-500 hover:text-white transition-all"
          >
            PC-1 ➔ PC-2 (Known Unicast)
          </button>
          <button
            type="button"
            onClick={() => simulateFrame('Fa0/3', '00:11:22:AA:01:03', 'PC-3', '00:11:22:AA:01:99')}
            className="rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:border-sky-500 hover:text-white transition-all"
          >
            PC-3 ➔ Server (Learn PC-3 + Flood)
          </button>
          <button
            type="button"
            onClick={() => simulateFrame('Fa0/1', '00:11:22:AA:01:01', 'PC-1', 'FF:FF:FF:FF:FF:FF', true)}
            className="rounded-xl border border-amber-800/60 bg-amber-950/40 px-3.5 py-2 text-xs font-semibold text-amber-300 hover:bg-amber-950/70 transition-all"
          >
            PC-1 ➔ Broadcast (ARP Request)
          </button>
        </div>
      </div>

      {/* Live CAM Table Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-mono-code text-xs">
        {/* Table View */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              $ show mac address-table
            </span>
            <span className="text-[11px] text-sky-400">{camTable.length} Entries</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px]">
              <thead>
                <tr className="text-slate-500 border-b border-slate-800 pb-1">
                  <th className="py-1">VLAN</th>
                  <th className="py-1">MAC Address</th>
                  <th className="py-1">Type</th>
                  <th className="py-1">Port</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {camTable.length > 0 ? (
                  camTable.map((entry, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 text-slate-300">
                      <td className="py-1.5 text-cyan-400">{entry.vlan}</td>
                      <td className="py-1.5 font-bold text-white">{entry.mac}</td>
                      <td className="py-1.5 text-slate-400">{entry.type}</td>
                      <td className="py-1.5 text-emerald-400">{entry.port}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-3 text-center text-slate-500">
                      CAM Table Empty
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Log View */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3 pb-2 border-b border-slate-800">
            Switch ASIC Operational Log
          </span>
          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1 text-[11px]">
            {actionLog.map((log, index) => (
              <div key={index} className="p-2 rounded-lg bg-slate-950 border border-slate-800/60 text-slate-300 leading-relaxed">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
