import React, { useState } from 'react';
import { 
  Workflow, 
  Layers, 
  Server, 
  Cpu, 
  Play, 
  Sparkles,
  CheckCircle2,
  Network
} from 'lucide-react';
import { diagramsData, DiagramItem } from '../data/diagramsData';
import { useLanguage } from '../context/LanguageContext';
import { RouterForwardingVisual } from '../components/visuals/RouterForwardingVisual';
import { SwitchMacLearningVisual } from '../components/visuals/SwitchMacLearningVisual';
import { DnsResolutionVisual } from '../components/visuals/DnsResolutionVisual';
import { DhcpDoraVisual } from '../components/visuals/DhcpDoraVisual';
import { TcpHandshakeVisual } from '../components/visuals/TcpHandshakeVisual';
import { SubnetVisualizer } from '../components/visuals/SubnetVisualizer';
import { TopologiesVisual } from '../components/visuals/TopologiesVisual';
import { OsiTcpIpComparisonVisual } from '../components/visuals/OsiTcpIpComparisonVisual';
import { VlanSegmentationVisual } from '../components/visuals/VlanSegmentationVisual';
import { PacketTransmissionVisual } from '../components/visuals/PacketTransmissionVisual';

export const DiagramsPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeDiagramId, setActiveDiagramId] = useState<string>(diagramsData[0].id);

  const categories = ['All', 'Models', 'Topologies', 'Devices', 'Protocols', 'Addressing', 'Architecture'];

  const filteredDiagrams = selectedCategory === 'All'
    ? diagramsData
    : diagramsData.filter(d => d.category === selectedCategory);

  const activeDiagram: DiagramItem = diagramsData.find(d => d.id === activeDiagramId) || diagramsData[0];

  const renderActiveVisual = () => {
    switch (activeDiagram.id) {
      case 'diag-osi-layers':
        return (
          <div className="w-full max-w-2xl space-y-2">
            {[
              { layer: 7, name: 'Application', pdu: 'Data', protocols: 'HTTP, DNS, DHCP, SSH', color: 'border-purple-500/40 bg-purple-950/20 text-purple-300' },
              { layer: 6, name: 'Presentation', pdu: 'Data', protocols: 'SSL/TLS, JPEG, ASCII', color: 'border-indigo-500/40 bg-indigo-950/20 text-indigo-300' },
              { layer: 5, name: 'Session', pdu: 'Data', protocols: 'RPC, NetBIOS, Sockets', color: 'border-blue-500/40 bg-blue-950/20 text-blue-300' },
              { layer: 4, name: 'Transport', pdu: 'Segment', protocols: 'TCP (Reliable), UDP (Fast)', color: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300' },
              { layer: 3, name: 'Network', pdu: 'Packet', protocols: 'IPv4, IPv6, ICMP, Routing', color: 'border-teal-500/40 bg-teal-950/20 text-teal-300' },
              { layer: 2, name: 'Data Link', pdu: 'Frame', protocols: 'Ethernet MAC (802.3), Switches', color: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300' },
              { layer: 1, name: 'Physical', pdu: 'Bits (0s/1s)', protocols: 'RJ45 Cables, Fiber, Voltages', color: 'border-amber-500/40 bg-amber-950/20 text-amber-300' },
            ].map(l => (
              <div key={l.layer} className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-mono-code ${l.color}`}>
                <span className="font-bold">Layer {l.layer}: {l.name}</span>
                <span className="text-[11px] text-slate-300">PDU: {l.pdu}</span>
                <span className="text-[11px] text-slate-400 hidden sm:inline">{l.protocols}</span>
              </div>
            ))}
          </div>
        );
      case 'diag-tcp-ip-model':
        return <OsiTcpIpComparisonVisual />;
      case 'diag-topologies':
        return <TopologiesVisual />;
      case 'diag-router-forwarding':
        return <RouterForwardingVisual />;
      case 'diag-switch-learning':
        return <SwitchMacLearningVisual />;
      case 'diag-dns-flow':
        return <DnsResolutionVisual />;
      case 'diag-dhcp-dora':
        return <DhcpDoraVisual />;
      case 'diag-tcp-handshake':
        return <TcpHandshakeVisual />;
      case 'diag-subnet-anatomy':
        return <SubnetVisualizer />;
      case 'diag-vlan-segmentation':
        return <VlanSegmentationVisual />;
      case 'diag-packet-transmission':
        return <PacketTransmissionVisual />;
      default:
        return <TopologiesVisual />;
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-3 py-1 text-xs font-semibold text-cyan-300 mb-3">
          <Workflow className="h-3.5 w-3.5" />
          <span>{t('Interactive Visual Learning Suite', 'ইন্টারেক্টিভ ভিজ্যুয়াল লার্নিং স্যুট')}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t('Interactive Network Topologies & Architecture Diagrams', 'ইন্টারেক্টিভ নেটওয়ার্ক টপোলজি ও আর্কিটেকচার ডায়াগ্রাম')}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
          {t(
            'Explore accurate, interactive architectural network diagrams: OSI & TCP/IP stacks, Bus/Star/Ring/Mesh topologies, router forwarding, switch CAM learning, DNS chains, DHCP DORA, TCP handshakes, VLANs, and end-to-end packet transmission.',
            'নির্ভুল আর্কিটেকচারাল ডায়াগ্রামের মাধ্যমে শিখুন: ওএসআই ও টিসিপি/আইপি স্ট্যাক, ৬টি টপোলজি, রাউটার প্যাকেট ফরোয়ার্ডিং, সুইচ ম্যাক লার্নিং, ডিএনএস, ডিএইচসিপি, টিসিপি ৩-ওয়ে হ্যান্ডশেক এবং ভি-ল্যান।'
          )}
        </p>

        {/* Filter categories */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat === 'All' ? t('All Diagrams (11)', 'সকল ডায়াগ্রাম (১১)') : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Diagram Viewer Showcase */}
      <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 sm:p-8 backdrop-blur-md mb-12 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-cyan-950/80 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-400 border border-cyan-800/60 uppercase">
                {activeDiagram.category}
              </span>
              <span className="rounded-md bg-slate-900 px-2 py-0.5 text-[10px] font-mono-code text-slate-400 border border-slate-800">
                {activeDiagram.type}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
              {t(activeDiagram.titleEn, activeDiagram.titleBn)}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {t(activeDiagram.descEn, activeDiagram.descBn)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-code text-cyan-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              {activeDiagram.nodesCount} Network Entities
            </span>
          </div>
        </div>

        {/* Dynamic Topology Graphic Canvas */}
        <div className="relative rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 flex items-center justify-center overflow-hidden">
          {renderActiveVisual()}
        </div>
      </div>

      {/* Grid of Diagrams */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDiagrams.map((diag) => {
          const isSelected = diag.id === activeDiagramId;

          return (
            <div
              key={diag.id}
              onClick={() => {
                setActiveDiagramId(diag.id);
                window.scrollTo({ top: 120, behavior: 'smooth' });
              }}
              className={`rounded-2xl border p-6 backdrop-blur-sm cursor-pointer transition-all ${
                isSelected
                  ? 'border-cyan-500 bg-slate-900 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-500/50'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900/80'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-cyan-300 font-mono-code">
                  {diag.category}
                </span>
                <span className="text-[11px] text-slate-500">
                  {diag.type}
                </span>
              </div>

              <h3 className="text-base font-bold text-white">
                {t(diag.titleEn, diag.titleBn)}
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-3">
                {t(diag.descEn, diag.descBn)}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono-code">
                  {diag.nodesCount} Nodes
                </span>
                <span className={`font-semibold ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`}>
                  {isSelected ? t('Viewing Live', 'চলমান ভিউ') : t('Select to View', 'দেখুন')} &rarr;
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
