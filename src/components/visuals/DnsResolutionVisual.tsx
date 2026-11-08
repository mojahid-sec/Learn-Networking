import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Globe, 
  Server, 
  Laptop, 
  Database, 
  CheckCircle2, 
  Search,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const DnsResolutionVisual: React.FC = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      titleEn: 'Step 1: User Requests Domain in Browser',
      titleBn: 'ধাপ ১: ব্রাউজারে ডোমেইন টাইপ ও লোকাল ক্যাশ চেক',
      descEn: 'User requests "www.example.com". The browser checks its internal cache, OS DNS cache, and local /etc/hosts file. If not found (cache miss), it triggers a DNS lookup.',
      descBn: 'ব্যবহারকারী ব্রাউজারে www.example.com লেখেন। ব্রাউজার প্রথমে নিজের ক্যাশ, উইন্ডোজ/লিনাক্স ক্যাশ ও হোস্ট ফাইল পরীক্ষা করে। ক্যাশে না পেলে ডিএনএস রিকোয়েস্ট শুরু হয়।',
      activeActor: 'client',
      query: 'Query: www.example.com (Type A)',
      response: 'Local Cache Miss',
      dnsServer: 'Local Host Resolver'
    },
    {
      titleEn: 'Step 2: Recursive Query to Local Resolver',
      titleBn: 'ধাপ ২: রিকার্সিভ রিজলভারে কোয়েরি প্রেরণ',
      descEn: 'Host sends a recursive query to configured DNS Resolver (e.g., 8.8.8.8 Google or 1.1.1.1 Cloudflare). In recursive mode, the resolver takes full responsibility for finding the answer.',
      descBn: 'কম্পিউটার তার নির্ধারিত ডিএনএস সার্ভারে (যেমন 8.8.8.8) রিকার্সিভ কোয়েরি পাঠায়। এর মানে রিজলভার নিজ দায়িত্বে উত্তর এনে দেবে।',
      activeActor: 'resolver',
      query: 'Standard Recursive Query (UDP 53)',
      response: 'Query Accepted, Initiating Iterative Chain',
      dnsServer: 'Recursive Resolver (8.8.8.8)'
    },
    {
      titleEn: 'Step 3: Resolver Queries Root Name Server (.)',
      titleBn: 'ধাপ ৩: রুট নেম সার্ভার (.) কে জিজ্ঞাসা',
      descEn: 'The resolver queries one of the 13 global Root Name Server clusters (A-M.root-servers.net). The Root does not know example.com, but delegates to the .com TLD servers.',
      descBn: 'রিজলভার বিশ্বের ১৩টি রুট নেম সার্ভারের একটিতে নক করে। রুট সার্ভার ডোমেইন না জানলেও বলে: ".com টিএলডি সার্ভারে খোঁজ নাও"।',
      activeActor: 'root',
      query: 'Where is www.example.com?',
      response: 'Referral to .com TLD Name Servers (a.gtld-servers.net)',
      dnsServer: 'Root Server (. root-servers.net)'
    },
    {
      titleEn: 'Step 4: Resolver Queries .com TLD Server',
      titleBn: 'ধাপ ৪: .com টপ লেভেল ডোমেইন (TLD) সার্ভারে অনুসন্ধান',
      descEn: 'The resolver queries the .com TLD nameserver. The TLD server knows which authoritative servers manage example.com, and returns NS records pointing to ns1.example.com.',
      descBn: 'রিজলভার .com সার্ভারে প্রশ্ন করে। TLD সার্ভার জানিয়ে দেয়: "example.com ডোমেইনের অথরিটেটিভ সার্ভার হলো ns1.example.com"।',
      activeActor: 'tld',
      query: 'Where is example.com?',
      response: 'Referral to NS: ns1.example.com (Glue IP: 198.51.100.53)',
      dnsServer: '.com TLD Server (Verisign)'
    },
    {
      titleEn: 'Step 5: Resolver Queries Authoritative Server',
      titleBn: 'ধাপ ৫: অথরিটেটিভ নেম সার্ভার থেকে চূড়ান্ত উত্তর',
      descEn: 'The resolver queries the Authoritative Name Server (ns1.example.com). This server holds the master DNS zone files and returns the authoritative IPv4 A record: 93.184.216.34 with TTL 300s.',
      descBn: 'রিজলভার মূল অথরিটেটিভ সার্ভারকে জিজ্ঞাসা করে। এই সার্ভার আসল রেকর্ড সংরক্ষণ করে এবং নিশ্চিত A রেকর্ড আইপি 93.184.216.34 ফেরত দেয়।',
      activeActor: 'authoritative',
      query: 'A Record for www.example.com?',
      response: 'Answer: 93.184.216.34 (TTL: 300 seconds)',
      dnsServer: 'Authoritative Server (ns1.example.com)'
    },
    {
      titleEn: 'Step 6: Resolver Caches & Returns IP to Client',
      titleBn: 'ধাপ ৬: রিজলভার ক্যাশ সংরক্ষণ ও ক্লায়েন্টকে আইপি প্রদান',
      descEn: 'Resolver stores the A record in its cache for 300 seconds (so future users get instant answers) and forwards the IP address back to the student\'s computer.',
      descBn: 'রিজলভার আগামী ৩০০ সেকেন্ডের জন্য নিজের মেমরিতে রেকর্ডটি ক্যাশ করে রাখে এবং ব্যবহারকারীর কম্পিউটারে আইপি প্রদান করে।',
      activeActor: 'resolver',
      query: 'DNS Response to Client',
      response: 'Resolved: 93.184.216.34',
      dnsServer: 'Recursive Resolver (8.8.8.8)'
    },
    {
      titleEn: 'Step 7: Browser Connects to Target IP over TCP',
      titleBn: 'ধাপ ৭: প্রাপ্ত আইপিতে ব্রাউজারের সরাসরি টিসিপি সংযোগ',
      descEn: 'DNS resolution is complete! The browser immediately initiates TCP 3-Way Handshake with 93.184.216.34:443 to load the website content over TLS/HTTPS.',
      descBn: 'ডিএনএস রেজোলিউশন সফল! ব্রাউজার এবার সরাসরি 93.184.216.34 আইপির ৪৪৩ পোর্টে টিসিপি হ্যান্ডশেক ও ওয়েব রিকোয়েস্ট পাঠায়।',
      activeActor: 'client',
      query: 'TCP SYN -> 93.184.216.34:443',
      response: 'HTTP/2 Web Application Rendered',
      dnsServer: 'Direct IP Communication'
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
    <div className="rounded-3xl border border-blue-500/30 bg-slate-950 p-6 sm:p-8 backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-950/80 border border-blue-800/60 px-3 py-1 text-xs font-semibold text-blue-300 mb-2">
            <Globe className="h-3.5 w-3.5 text-blue-400" />
            <span>{t('Hierarchical DNS Engine', 'হায়ারারকিক্যাল ডিএনএস রেজোলিউশন ইঞ্জিন')}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {t('The Complete DNS Resolution Lifecycle', 'ডিএনএস রেজোলিউশনের পূর্ণাঙ্গ ৮-ধাপ কার্যপ্রণালী')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t(
              'Trace how domain names resolve through Root, TLD, and Authoritative servers.',
              'ব্রাউজার থেকে শুরু করে রুট, টিএলডি ও অথরিটেটিভ সার্ভার হয়ে কীভাবে আইপি পাওয়া যায় তা দেখুন।'
            )}
          </p>
        </div>

        <span className="rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs font-mono-code font-bold text-blue-400 self-start sm:self-auto">
          {currentStep + 1} / {steps.length}
        </span>
      </div>

      {/* DNS Hierarchy Map Visual Stage */}
      <div className="my-8 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Client Node */}
          <div className={`p-4 rounded-xl border transition-all ${
            step.activeActor === 'client'
              ? 'border-cyan-400 bg-cyan-950/50 shadow-md ring-2 ring-cyan-500/30'
              : 'border-slate-800 bg-slate-950/70'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <Laptop className="h-5 w-5 text-cyan-400" />
              <span className="text-xs font-bold text-white">Client Browser</span>
            </div>
            <p className="text-[11px] text-slate-400">Local OS DNS Stub Resolver</p>
          </div>

          {/* Recursive Resolver Node */}
          <div className={`p-4 rounded-xl border transition-all ${
            step.activeActor === 'resolver'
              ? 'border-blue-400 bg-blue-950/50 shadow-md ring-2 ring-blue-500/30'
              : 'border-slate-800 bg-slate-950/70'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <Server className="h-5 w-5 text-blue-400" />
              <span className="text-xs font-bold text-white">Recursive Resolver</span>
            </div>
            <p className="text-[11px] text-slate-400">8.8.8.8 / 1.1.1.1 (ISP/Public)</p>
          </div>

          {/* Root & TLD Servers */}
          <div className={`p-4 rounded-xl border transition-all ${
            ['root', 'tld'].includes(step.activeActor)
              ? 'border-purple-400 bg-purple-950/50 shadow-md ring-2 ring-purple-500/30'
              : 'border-slate-800 bg-slate-950/70'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <Globe className="h-5 w-5 text-purple-400" />
              <span className="text-xs font-bold text-white">Root (.) & TLD (.com)</span>
            </div>
            <p className="text-[11px] text-slate-400">13 Global Roots & Registry</p>
          </div>

          {/* Authoritative Server Node */}
          <div className={`p-4 rounded-xl border transition-all ${
            step.activeActor === 'authoritative'
              ? 'border-emerald-400 bg-emerald-950/50 shadow-md ring-2 ring-emerald-500/30'
              : 'border-slate-800 bg-slate-950/70'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <Database className="h-5 w-5 text-emerald-400" />
              <span className="text-xs font-bold text-white">Authoritative Server</span>
            </div>
            <p className="text-[11px] text-slate-400">ns1.example.com (Zone File)</p>
          </div>
        </div>
      </div>

      {/* Step Description */}
      <div className="rounded-2xl border border-blue-500/40 bg-gradient-to-r from-blue-950/50 to-indigo-950/40 p-5 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-500 text-slate-950 font-bold text-xs">
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

      {/* DNS Packet Telemetry Box */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 mb-6 font-mono-code text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase">Server Handshake</span>
            <span className="text-cyan-300 font-bold">{step.dnsServer}</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase">Query Sent</span>
            <span className="text-amber-300 font-bold truncate block">{step.query}</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase">Response Received</span>
            <span className="text-emerald-300 font-bold truncate block">{step.response}</span>
          </div>
        </div>
      </div>

      {/* Simulator Controls */}
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
            className="inline-flex items-center gap-1 rounded-xl bg-blue-500 text-slate-950 px-4 py-2 text-xs font-bold hover:bg-blue-400 disabled:opacity-40 transition-all shadow-md shadow-blue-500/20"
          >
            <span>{t('Next Step', 'পরবর্তী ধাপ')}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-blue-800/60 bg-blue-950/60 px-3.5 py-2 text-xs font-semibold text-blue-300 hover:bg-blue-900/60 transition-all"
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
