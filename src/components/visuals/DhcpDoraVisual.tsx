import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Server, 
  Laptop, 
  Wifi, 
  CheckCircle2, 
  Send,
  Radio
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const DhcpDoraVisual: React.FC = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      stage: 'D',
      titleEn: 'Step 1: DHCP DISCOVER (Broadcast)',
      titleBn: 'ধাপ ১: ডিএইচসিপি ডিসকভার (ব্রডকাস্ট)',
      descEn: 'A newly powered-on computer has no IP address. It broadcasts a DHCP Discover packet to 255.255.255.255 on UDP Port 67 searching for any active DHCP servers on the local LAN.',
      descBn: 'নতুন অন হওয়া কম্পিউটারটির কোনো আইপি নেই। এটি লোকাল নেটওয়ার্কে কোনো ডিএইচসিপি সার্ভার আছে কি না জানতে ২৫৫.২৫৫.২৫৫.২৫৫ ঠিকানায় ব্রডকাস্ট পাঠায়।',
      srcIp: '0.0.0.0:68',
      dstIp: '255.255.255.255:67 (Broadcast)',
      srcMac: 'AA:AA:AA:11:22:33 (Client)',
      dstMac: 'FF:FF:FF:FF:FF:FF (Broadcast)',
      messageType: 'DHCP DISCOVER',
      payload: 'Client MAC: AA:AA:AA:11:22:33, Requesting IPv4 Lease'
    },
    {
      stage: 'O',
      titleEn: 'Step 2: DHCP OFFER (Unicast / Broadcast)',
      titleBn: 'ধাপ ২: ডিএইচসিপি অফার (সার্ভার অফার)',
      descEn: 'The DHCP Server reserves an available IP from its pool (192.168.1.50) and responds with a DHCP Offer including Subnet Mask, Default Gateway, DNS Servers, and Lease Duration.',
      descBn: 'ডিএইচসিপি সার্ভার তার পুল থেকে একটি ফাঁকা আইপি (192.168.1.50) নির্দিষ্ট করে এবং সাবনেট মাস্ক, গেটওয়ে ও ডিএনএস ঠিকানাসহ অফার পাঠায়।',
      srcIp: '192.168.1.1:67 (DHCP Server)',
      dstIp: '192.168.1.50:68 (or 255.255.255.255)',
      srcMac: '00:11:22:33:44:01 (Server)',
      dstMac: 'AA:AA:AA:11:22:33 (Client)',
      messageType: 'DHCP OFFER',
      payload: 'Offered IP: 192.168.1.50, Mask: /24, GW: 192.168.1.1, DNS: 8.8.8.8'
    },
    {
      stage: 'R',
      titleEn: 'Step 3: DHCP REQUEST (Client Selection)',
      titleBn: 'ধাপ ৩: ডিএইচসিপি রিকোয়েস্ট (অফার গ্রহণ)',
      descEn: 'Client accepts the offer by broadcasting a DHCP Request. This confirms acceptance with Server R1 and signals any other DHCP servers to release their reserved offers back to the pool.',
      descBn: 'ক্লায়েন্ট অফারটি গ্রহণ করে রিকোয়েস্ট পাঠায়। এর মাধ্যমে সার্ভারকে নিশ্চিত করা হয় এবং অন্য কোনো সার্ভার অফার দিয়ে থাকলে তা বাতিল হয়ে পুলে ফেরত যায়।',
      srcIp: '0.0.0.0:68',
      dstIp: '255.255.255.255:67 (Broadcast)',
      srcMac: 'AA:AA:AA:11:22:33',
      dstMac: 'FF:FF:FF:FF:FF:FF',
      messageType: 'DHCP REQUEST',
      payload: 'Accepted Server IP: 192.168.1.1, Requested IP: 192.168.1.50'
    },
    {
      stage: 'A',
      titleEn: 'Step 4: DHCP ACKNOWLEDGMENT (Binding Committed)',
      titleBn: 'ধাপ ৪: ডিএইচসিপি অ্যাকনলেজমেন্ট (আইপি নিশ্চিতকরণ)',
      descEn: 'Server commits the binding to its active database (MAC AA:AA:AA:11:22:33 -> 192.168.1.50, Lease: 24h) and sends DHCP ACK. The client binds the parameters to its network adapter.',
      descBn: 'সার্ভার তার ডেটাবেসে আইপি বরাদ্দ নিশ্চিত করে অ্যাকনলেজ (ACK) পাঠায়। ক্লায়েন্ট তার নেটওয়ার্ক ইন্টারফেসে আইপি বসিয়ে সচল হয়ে ওঠে।',
      srcIp: '192.168.1.1:67',
      dstIp: '192.168.1.50:68',
      srcMac: '00:11:22:33:44:01',
      dstMac: 'AA:AA:AA:11:22:33',
      messageType: 'DHCP ACK',
      payload: 'Lease Finalized: 86,400s (24 Hours). Configuration Active.'
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
    <div className="rounded-3xl border border-emerald-500/30 bg-slate-950 p-6 sm:p-8 backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-950/80 border border-emerald-800/60 px-3 py-1 text-xs font-semibold text-emerald-300 mb-2">
            <Radio className="h-3.5 w-3.5 text-emerald-400" />
            <span>{t('Automated IP Provisioning', 'অটোমেটেড আইপি প্রভিশনিং ইঞ্জিন')}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {t('The 4-Step DHCP DORA Protocol Engine', 'ডিএইচসিপি ৪-ধাপ ডোরা (DORA) প্রটোকল ইঞ্জিন')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t(
              'Discover, Offer, Request, and Acknowledgment: How unconfigured hosts obtain IP addresses automatically.',
              'ডিসকভার, অফার, রিকোয়েস্ট এবং অ্যাকনলেজ: নতুন কম্পিউটার কীভাবে স্বয়ংক্রিয়ভাবে আইপি পায়।'
            )}
          </p>
        </div>

        <div className="flex items-center gap-1.5 font-mono-code font-bold">
          {['D', 'O', 'R', 'A'].map((char, idx) => (
            <span
              key={char}
              className={`flex h-8 w-8 items-center justify-center rounded-xl border text-sm transition-all ${
                currentStep === idx
                  ? 'border-emerald-400 bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                  : currentStep > idx
                  ? 'border-emerald-800 bg-emerald-950 text-emerald-400'
                  : 'border-slate-800 bg-slate-900 text-slate-500'
              }`}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Visual Communication Stage */}
      <div className="my-8 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Client Node */}
          <div className={`p-5 rounded-2xl border w-full sm:w-64 transition-all ${
            ['D', 'R'].includes(step.stage)
              ? 'border-cyan-400 bg-cyan-950/50 shadow-lg ring-2 ring-cyan-500/30'
              : 'border-slate-800 bg-slate-950/80'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <Laptop className="h-6 w-6 text-cyan-400" />
              <div>
                <h4 className="text-sm font-bold text-white">Client Workstation</h4>
                <span className="text-[11px] text-cyan-300 font-mono-code">
                  {currentStep === 3 ? '192.168.1.50 (Bound)' : '0.0.0.0 (Unconfigured)'}
                </span>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 font-mono-code pt-2 border-t border-slate-800">
              MAC: AA:AA:AA:11:22:33
            </div>
          </div>

          {/* Direction Arrow & Message */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-xs font-mono-code font-bold text-emerald-400 bg-slate-950 px-3 py-1 rounded-full border border-emerald-800/60 mb-2">
              {step.messageType}
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono-code">
              {['D', 'R'].includes(step.stage) ? (
                <>
                  <span>Client</span>
                  <ChevronRight className="h-4 w-4 text-emerald-400 animate-pulse" />
                  <span>Server</span>
                </>
              ) : (
                <>
                  <span>Server</span>
                  <ChevronLeft className="h-4 w-4 text-emerald-400 animate-pulse" />
                  <span>Client</span>
                </>
              )}
            </div>
          </div>

          {/* DHCP Server Node */}
          <div className={`p-5 rounded-2xl border w-full sm:w-64 transition-all ${
            ['O', 'A'].includes(step.stage)
              ? 'border-emerald-400 bg-emerald-950/50 shadow-lg ring-2 ring-emerald-500/30'
              : 'border-slate-800 bg-slate-950/80'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <Server className="h-6 w-6 text-emerald-400" />
              <div>
                <h4 className="text-sm font-bold text-white">DHCP Server</h4>
                <span className="text-[11px] text-emerald-300 font-mono-code">192.168.1.1 (Router R1)</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 font-mono-code pt-2 border-t border-slate-800">
              Pool: 192.168.1.50 - .200
            </div>
          </div>
        </div>
      </div>

      {/* Step Description */}
      <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/50 to-teal-950/40 p-5 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs">
            {step.stage}
          </span>
          <h4 className="text-base font-bold text-white">
            {t(step.titleEn, step.titleBn)}
          </h4>
        </div>
        <p className="text-sm text-slate-200 leading-relaxed">
          {t(step.descEn, step.descBn)}
        </p>
      </div>

      {/* Packet Wire Payload Box */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 mb-6 font-mono-code text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase">Layer 3 IP Addresses</span>
            <span className="text-cyan-300 font-bold">Src: {step.srcIp}</span>
            <span className="text-emerald-300 font-bold block">Dst: {step.dstIp}</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase">Layer 2 MAC Addresses</span>
            <span className="text-slate-300 font-bold">Src: {step.srcMac}</span>
            <span className="text-purple-300 font-bold block">Dst: {step.dstMac}</span>
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-500 block uppercase mb-1">DHCP Options / Payload Data</span>
          <span className="text-amber-300 font-semibold">{step.payload}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white disabled:opacity-40 transition-all"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>{t('Previous', 'পূর্ববর্তী')}</span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
            disabled={currentStep === steps.length - 1}
            className="inline-flex items-center gap-1 rounded-xl bg-emerald-500 text-slate-950 px-4 py-2 text-xs font-bold hover:bg-emerald-400 disabled:opacity-40 transition-all shadow-md shadow-emerald-500/20"
          >
            <span>{t('Next Step', 'পরবর্তী ধাপ')}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-800/60 bg-emerald-950/60 px-3.5 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-900/60 transition-all"
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
