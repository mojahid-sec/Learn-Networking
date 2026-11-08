import React, { useState } from 'react';
import { Layers, ArrowRight, ShieldCheck, CheckCircle2, Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const OsiTcpIpComparisonVisual: React.FC = () => {
  const { t } = useLanguage();
  const [selectedMapping, setSelectedMapping] = useState<number | null>(null);

  const mappings = [
    {
      osiLayers: ['Layer 7: Application', 'Layer 6: Presentation', 'Layer 5: Session'],
      tcpLayer: 'Application Layer',
      pdu: 'Data / Messages',
      protocols: 'HTTP/HTTPS, DNS, DHCP, SSH, FTP, SMTP',
      descEn: 'TCP/IP combines OSI Layers 5, 6, and 7 into a single unified Application layer handled directly in user-space software.',
      descBn: 'টিসিপি/আইপি মডেলে ওএসআই-এর ৫, ৬ এবং ৭ লেয়ারকে একত্রিত করে একটি একক অ্যাপ্লিকেশান লেয়ারে রাখা হয়েছে।'
    },
    {
      osiLayers: ['Layer 4: Transport'],
      tcpLayer: 'Transport (Host-to-Host) Layer',
      pdu: 'Segments (TCP) / Datagrams (UDP)',
      protocols: 'TCP, UDP, SCTP, QUIC',
      descEn: 'Handles end-to-end process communication, port multiplexing, TCP 3-way handshakes, error recovery, and flow control.',
      descBn: 'পোর্ট নাম্বারের মাধ্যমে প্রসেস-টু-প্রসেস সংযোগ, নির্ভরযোগ্যতা ও এরর চেক নিশ্চিত করে।'
    },
    {
      osiLayers: ['Layer 3: Network'],
      tcpLayer: 'Internet Layer',
      pdu: 'Packets',
      protocols: 'IPv4, IPv6, ICMP, ARP, OSPF, BGP',
      descEn: 'Logical addressing and best-path routing across distinct autonomous systems and wide-area networks.',
      descBn: 'লজিক্যাল আইপি অ্যাড্রেসিং এবং এক নেটওয়ার্ক থেকে অন্য নেটওয়ার্কে প্যাকেট রাউটিং করার কাজ করে।'
    },
    {
      osiLayers: ['Layer 2: Data Link', 'Layer 1: Physical'],
      tcpLayer: 'Network Access (Link) Layer',
      pdu: 'Frames (L2) & Bits (L1)',
      protocols: 'Ethernet (802.3), Wi-Fi (802.11), MAC Addresses, RJ45, Fiber Optic',
      descEn: 'Hardware addressing (48-bit MAC), framing, CRC checksums, and physical bit transmission over copper or light pulses.',
      descBn: 'ম্যাক অ্যাড্রেস, সুইচিং ফ্রেম এবং ফিজিক্যাল ক্যাবলের মাধ্যমে বিট (০ ও ১) প্রেরণের হার্ডওয়্যার স্তর।'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-xs text-slate-300 leading-relaxed">
        {t(
          'Compare the theoretical 7-Layer OSI Reference Model (ISO) with the operational 4-Layer TCP/IP Stack (DoD/IETF) used across the global Internet:',
          'ইন্টারনেটের মূল ভিত্তি টিসিপি/আইপি ৪-লেয়ার আর্কিটেকচার এবং ওএসআই ৭-লেয়ার তাত্ত্বিক কাঠামোর মধ্যকার সরাসরি ম্যাপিং তুলনা:'
        )}
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column: OSI 7-Layer Model */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-cyan-400 font-bold text-xs uppercase tracking-wider">
            <Layers className="h-4 w-4" />
            <span>ISO OSI 7-Layer Model</span>
          </div>

          {[
            { l: 7, name: 'Application', pdu: 'Data', color: 'border-purple-500/40 bg-purple-950/20 text-purple-300' },
            { l: 6, name: 'Presentation', pdu: 'Data', color: 'border-indigo-500/40 bg-indigo-950/20 text-indigo-300' },
            { l: 5, name: 'Session', pdu: 'Data', color: 'border-blue-500/40 bg-blue-950/20 text-blue-300' },
            { l: 4, name: 'Transport', pdu: 'Segment', color: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300' },
            { l: 3, name: 'Network', pdu: 'Packet', color: 'border-teal-500/40 bg-teal-950/20 text-teal-300' },
            { l: 2, name: 'Data Link', pdu: 'Frame', color: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300' },
            { l: 1, name: 'Physical', pdu: 'Bits', color: 'border-amber-500/40 bg-amber-950/20 text-amber-300' },
          ].map(layer => (
            <div
              key={layer.l}
              className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-mono-code ${layer.color}`}
            >
              <span className="font-bold">L{layer.l}: {layer.name}</span>
              <span className="text-[10px] opacity-80">PDU: {layer.pdu}</span>
            </div>
          ))}
        </div>

        {/* Right Column: TCP/IP 4-Layer Model */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <Layers className="h-4 w-4" />
            <span>DoD / IETF TCP/IP 4-Layer Stack</span>
          </div>

          {mappings.map((m, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMapping(selectedMapping === idx ? null : idx)}
              className={`p-3 rounded-xl border cursor-pointer transition-all ${
                selectedMapping === idx
                  ? 'border-emerald-400 bg-emerald-950/40 shadow-md ring-1 ring-emerald-500'
                  : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                <span className="text-emerald-300">{m.tcpLayer}</span>
                <span className="text-[10px] text-cyan-400 font-mono-code">{m.pdu}</span>
              </div>
              <div className="text-[11px] text-slate-400 truncate">
                Mapped: {m.osiLayers.join(' + ')}
              </div>
              <div className="text-[10px] text-emerald-400/90 font-mono-code mt-1">
                {m.protocols}
              </div>

              {selectedMapping === idx && (
                <div className="mt-3 pt-2 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
                  <p>{t(m.descEn, m.descBn)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
