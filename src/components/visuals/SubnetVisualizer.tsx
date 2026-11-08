import React, { useState } from 'react';
import { 
  Binary, 
  RotateCcw, 
  Sliders, 
  CheckCircle2, 
  HelpCircle,
  Hash,
  Layers
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  isValidIpv4, 
  ipToBinary, 
  getSubnetMaskFromCidr, 
  getSubnetCapacity, 
  getIpClass 
} from '../../utils/networkUtils';

export const SubnetVisualizer: React.FC = () => {
  const { t } = useLanguage();
  const [ipInput, setIpInput] = useState('192.168.10.75');
  const [cidr, setCidr] = useState(26);

  const isValid = isValidIpv4(ipInput);
  const subnetMask = getSubnetMaskFromCidr(cidr);
  const { totalHosts, usableHosts } = getSubnetCapacity(cidr);
  const ipClass = getIpClass(ipInput);
  const binaryIp = isValid ? ipToBinary(ipInput) : '';
  const binaryMask = getSubnetMaskFromCidr(cidr);
  const binaryMaskOctets = ipToBinary(binaryMask);

  // Calculate Network Address & Broadcast Address
  const calculateNetworkDetails = () => {
    if (!isValid) return { net: 'Invalid', bcast: 'Invalid', first: 'Invalid', last: 'Invalid' };
    const octets = ipInput.split('.').map(Number);
    const maskOctets = subnetMask.split('.').map(Number);
    
    const netOctets = octets.map((o, idx) => o & maskOctets[idx]);
    const bcastOctets = octets.map((o, idx) => o | (~maskOctets[idx] & 255));
    
    const net = netOctets.join('.');
    const bcast = bcastOctets.join('.');
    
    const firstOctets = [...netOctets];
    firstOctets[3] += 1;
    const lastOctets = [...bcastOctets];
    lastOctets[3] -= 1;

    return {
      net,
      bcast,
      first: firstOctets.join('.'),
      last: lastOctets.join('.')
    };
  };

  const details = calculateNetworkDetails();

  return (
    <div className="rounded-3xl border border-teal-500/30 bg-slate-950 p-6 sm:p-8 backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-950/80 border border-teal-800/60 px-3 py-1 text-xs font-semibold text-teal-300 mb-2">
            <Binary className="h-3.5 w-3.5 text-teal-400" />
            <span>{t('Bit-Level Subnet Architecture', 'বিট-লেভেল সাবনেট আর্কিটেকচার')}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {t('Interactive 32-Bit IPv4 & CIDR Subnet Calculator', 'ইন্টারেক্টিভ ৩২-বিট আইপিভি৪ এবং সিআইডিআর সাবনেট ক্যালকুলেটর')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t(
              'Visualize how subnet masks split 32 binary bits into Network Bits (Prefix) and Host Bits.',
              'সাবনেট মাস্ক কীভাবে ৩২টি বাইনারি বিটকে নেটওয়ার্ক বিট এবং হোস্ট বিটে বিভক্ত করে তা সরাসরি দেখুন।'
            )}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setIpInput('192.168.10.75');
            setCidr(26);
          }}
          className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>{t('Reset Example', 'রিসেট')}</span>
        </button>
      </div>

      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            {t('IPv4 Dotted Decimal Address:', 'আইপিভি৪ অ্যাড্রেস:')}
          </label>
          <input
            type="text"
            value={ipInput}
            onChange={(e) => setIpInput(e.target.value.trim())}
            placeholder="192.168.1.1"
            className={`w-full rounded-xl border bg-slate-900/90 px-4 py-2.5 font-mono-code text-sm text-white focus:outline-none transition-colors ${
              isValid ? 'border-slate-800 focus:border-teal-500' : 'border-rose-500/80 focus:border-rose-500'
            }`}
          />
          {!isValid && (
            <span className="text-[11px] text-rose-400 mt-1 block">
              {t('Please enter a valid IPv4 address (e.g. 192.168.1.1)', 'সঠিক আইপিভি৪ অ্যাড্রেস লিখুন (যেমন 192.168.1.1)')}
            </span>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {t('CIDR Prefix Mask (/):', 'সিআইডিআর প্রিফিক্স মাস্ক (/):')}
            </label>
            <span className="text-xs font-mono-code font-bold text-teal-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              /{cidr} ({subnetMask})
            </span>
          </div>
          <input
            type="range"
            min="8"
            max="30"
            value={cidr}
            onChange={(e) => setCidr(Number(e.target.value))}
            className="w-full accent-teal-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono-code mt-1">
            <span>/8 (Class A)</span>
            <span>/16 (Class B)</span>
            <span>/24 (Class C)</span>
            <span>/30 (P2P Link)</span>
          </div>
        </div>
      </div>

      {/* 32-Bit Binary Breakdown Visual */}
      <div className="my-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 font-mono-code">
        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
          {t('32-Bit Binary Bit Partitioning:', '৩২-বিট বাইনারি বিভাজন (নেটওয়ার্ক বনাম হোস্ট বিট):')}
        </span>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="h-3 w-3 rounded bg-emerald-500 inline-block" />
            <span className="text-emerald-300 font-bold">{cidr} Network Bits</span>
          </div>
          <span className="text-slate-600">•</span>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="h-3 w-3 rounded bg-cyan-500 inline-block" />
            <span className="text-cyan-300 font-bold">{32 - cidr} Host Bits</span>
          </div>
        </div>

        {/* Binary Bits Display */}
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 text-xs sm:text-sm tracking-wider overflow-x-auto leading-relaxed">
          {binaryIp ? (
            binaryIp.split('').map((char, index) => {
              if (char === '.') {
                return <span key={index} className="text-slate-600 font-bold mx-1">.</span>;
              }
              // Calculate bit position excluding dots
              const bitIndex = binaryIp.slice(0, index).replace(/\./g, '').length;
              const isNetworkBit = bitIndex < cidr;

              return (
                <span
                  key={index}
                  className={`inline-block font-bold px-0.5 ${
                    isNetworkBit ? 'text-emerald-400 bg-emerald-950/40' : 'text-cyan-400 bg-cyan-950/40'
                  }`}
                >
                  {char}
                </span>
              );
            })
          ) : (
            <span className="text-slate-500">Invalid IP</span>
          )}
        </div>
      </div>

      {/* Computed Subnet Parameters Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-code text-xs">
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-500 block uppercase">Network Address</span>
          <span className="text-emerald-300 font-bold text-sm">{details.net}</span>
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-500 block uppercase">Broadcast Address</span>
          <span className="text-amber-300 font-bold text-sm">{details.bcast}</span>
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-500 block uppercase">Usable Host Range</span>
          <span className="text-cyan-300 font-bold truncate block">{details.first} - {details.last}</span>
        </div>
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-500 block uppercase">Usable Hosts (2^H - 2)</span>
          <span className="text-teal-300 font-bold text-sm">{usableHosts.toLocaleString()} Hosts</span>
        </div>
      </div>
    </div>
  );
};
