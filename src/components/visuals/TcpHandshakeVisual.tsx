import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Server, 
  Laptop, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const TcpHandshakeVisual: React.FC = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      titleEn: 'Step 1: TCP SYN (Synchronize)',
      titleBn: 'ধাপ ১: টিসিপি সিন (SYN) — সংযোগের প্রস্তাব',
      descEn: 'Client initiates connection by generating a random Initial Sequence Number (ISN Client = 1000). It sets the SYN flag = 1 in the TCP header and sends the segment to Server Port 443.',
      descBn: 'ক্লায়েন্ট একটি র‍্যান্ডম ইনিশিয়াল সিকোয়েন্স নাম্বার (ISN = 1000) তৈরি করে এবং SYN ফ্ল্যাগ ১ করে সার্ভারের ৪৪৩ পোর্টে পাঠায়।',
      direction: 'right',
      flags: ['SYN = 1', 'ACK = 0'],
      seq: 1000,
      ack: 0,
      clientState: 'SYN-SENT',
      serverState: 'LISTEN',
      segmentType: 'SYN Segment'
    },
    {
      titleEn: 'Step 2: TCP SYN-ACK (Synchronize + Acknowledge)',
      titleBn: 'ধাপ ২: টিসিপি সিন-অ্যাক (SYN-ACK) — সার্ভারের স্বীকৃতি ও পাল্টা প্রস্তাব',
      descEn: 'Server allocates TCB buffers. It acknowledges Client ISN by setting Ack = 1001 (1000 + 1) and generates its own random Server ISN = 5000 with SYN=1 and ACK=1.',
      descBn: 'সার্ভার ক্লায়েন্টের প্রস্তাব স্বীকার করে Ack = 1001 বানায় এবং নিজের জন্য নতুন সিকোয়েন্স seq = 5000 তৈরি করে SYN ও ACK উভয় ফ্ল্যাগ ১ করে পাঠায়।',
      direction: 'left',
      flags: ['SYN = 1', 'ACK = 1'],
      seq: 5000,
      ack: 1001,
      clientState: 'SYN-SENT',
      serverState: 'SYN-RECEIVED',
      segmentType: 'SYN-ACK Segment'
    },
    {
      titleEn: 'Step 3: TCP ACK (Final Acknowledgment)',
      titleBn: 'ধাপ ৩: টিসিপি অ্যাক (ACK) — সংযোগ সম্পূর্ণ প্রতিষ্ঠিত',
      descEn: 'Client acknowledges Server ISN by sending Ack = 5001 with ACK=1 and Seq = 1001. Both sockets now transition into ESTABLISHED state. Two-way reliable pipe is ready!',
      descBn: 'ক্লায়েন্ট সার্ভারের সিকোয়েন্সকে স্বীকৃতি দিয়ে Ack = 5001 পাঠায়। উভয় প্রান্তে সংযোগ ESTABLISHED হয়ে যায় এবং ডেটা পাঠানোর পথ উন্মুক্ত হয়।',
      direction: 'right',
      flags: ['SYN = 0', 'ACK = 1'],
      seq: 1001,
      ack: 5001,
      clientState: 'ESTABLISHED',
      serverState: 'ESTABLISHED',
      segmentType: 'ACK Segment (Handshake Complete)'
    },
    {
      titleEn: 'Step 4: Reliable Data Transfer & Sliding Window',
      titleBn: 'ধাপ ৪: নির্ভরযোগ্য ডেটা আদান-প্রদান ও উইন্ডো সাইজ',
      descEn: 'Client transmits 500 bytes of HTTP payload (Seq: 1001 to 1500). Server receives and confirms delivery by returning Ack = 1501. If packet drops, timer triggers Retransmission.',
      descBn: 'ক্লায়েন্ট ৫০০ বাইট ওয়েব ডেটা পাঠায় (seq: 1001-1500)। সার্ভার তা গ্রহণ করে Ack = 1501 ফেরত দেয়। কোনো প্যাকেট হারালে স্বয়ংক্রিয় রিট্রান্সমিশন ঘটে।',
      direction: 'right',
      flags: ['PSH = 1', 'ACK = 1'],
      seq: 1001,
      ack: 5001,
      clientState: 'ESTABLISHED (Sending Data)',
      serverState: 'ESTABLISHED (Receiving Data)',
      segmentType: 'Data Segment (500 Bytes Payload)'
    },
    {
      titleEn: 'Step 5: Connection Teardown (FIN / ACK)',
      titleBn: 'ধাপ ৫: সংযোগ সমাপ্তি (FIN / ACK ৪-ধাপ টিয়ারডাউন)',
      descEn: 'When data exchange ends, Client sends FIN flag to close transmission. Server sends ACK, then sends its own FIN flag. Client sends final ACK, closing the TCP socket safely.',
      descBn: 'কাজ শেষ হলে ক্লায়েন্ট FIN পাঠিয়ে সমাপ্তি জানায়। সার্ভার ACK ও পাল্টা FIN পাঠায়। ক্লায়েন্ট চূড়ান্ত ACK পাঠানোর পর উভয় সকেট নিরাপদে বন্ধ হয়ে যায়।',
      direction: 'left',
      flags: ['FIN = 1', 'ACK = 1'],
      seq: 1501,
      ack: 5001,
      clientState: 'TIME-WAIT',
      serverState: 'CLOSED',
      segmentType: 'FIN-ACK Teardown'
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
    <div className="rounded-3xl border border-indigo-500/30 bg-slate-950 p-6 sm:p-8 backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-950/80 border border-indigo-800/60 px-3 py-1 text-xs font-semibold text-indigo-300 mb-2">
            <Activity className="h-3.5 w-3.5 text-indigo-400" />
            <span>{t('Reliable Transport Simulator', 'রিলায়াবল ট্রান্সপোর্ট সিমুলেটর')}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {t('TCP 3-Way Handshake & Reliable Flow Engine', 'টিসিপি ৩-ওয়ে হ্যান্ডশেক এবং নির্ভরযোগ্য ডেটা ফ্লো')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t(
              'Sequence Numbers (SEQ), Acknowledgment Numbers (ACK), SYN/FIN Flags, and Socket State Transitions.',
              'সিকোয়েন্স নাম্বার, অ্যাকনলেজমেন্ট নাম্বার, সিন ও ফিন ফ্ল্যাগ এবং সকেট স্টেট পরিবর্তনের দৃশ্যমান ডেমো।'
            )}
          </p>
        </div>

        <span className="rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs font-mono-code font-bold text-indigo-400 self-start sm:self-auto">
          {currentStep + 1} / {steps.length}
        </span>
      </div>

      {/* Visual Socket Stage */}
      <div className="my-8 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Client Node */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/80 w-full sm:w-64">
            <div className="flex items-center gap-3 mb-2">
              <Laptop className="h-6 w-6 text-cyan-400" />
              <div>
                <h4 className="text-sm font-bold text-white">Client Socket</h4>
                <span className="text-[11px] text-cyan-300 font-mono-code">10.0.0.5:49152</span>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[10px] text-slate-400 uppercase">Socket State:</span>
              <span className="text-xs font-mono-code font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
                {step.clientState}
              </span>
            </div>
          </div>

          {/* In-Flight Segment Visual */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <span className="text-xs font-mono-code font-bold text-indigo-300 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-700/60 mb-2">
              {step.segmentType}
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-mono-code">
              {step.direction === 'right' ? (
                <>
                  <span>Client</span>
                  <ChevronRight className="h-4 w-4 text-indigo-400 animate-pulse" />
                  <span>Server</span>
                </>
              ) : (
                <>
                  <span>Server</span>
                  <ChevronLeft className="h-4 w-4 text-indigo-400 animate-pulse" />
                  <span>Client</span>
                </>
              )}
            </div>
          </div>

          {/* Server Node */}
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/80 w-full sm:w-64">
            <div className="flex items-center gap-3 mb-2">
              <Server className="h-6 w-6 text-indigo-400" />
              <div>
                <h4 className="text-sm font-bold text-white">Server Socket</h4>
                <span className="text-[11px] text-indigo-300 font-mono-code">93.184.216.34:443</span>
              </div>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[10px] text-slate-400 uppercase">Socket State:</span>
              <span className="text-xs font-mono-code font-bold text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/50">
                {step.serverState}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Step Description */}
      <div className="rounded-2xl border border-indigo-500/40 bg-gradient-to-r from-indigo-950/50 to-purple-950/40 p-5 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-500 text-slate-950 font-bold text-xs">
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

      {/* TCP Segment Fields Breakdown */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 mb-6 font-mono-code text-xs">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase">Sequence (SEQ)</span>
            <span className="text-cyan-300 font-bold text-sm">{step.seq}</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-500 block uppercase">Acknowledgment (ACK)</span>
            <span className="text-emerald-300 font-bold text-sm">{step.ack === 0 ? 'None' : step.ack}</span>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 col-span-2">
            <span className="text-[10px] text-slate-500 block uppercase mb-1">Active Control Flags</span>
            <div className="flex items-center gap-2">
              {step.flags.map((flag, idx) => (
                <span key={idx} className="bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800/60 font-bold">
                  {flag}
                </span>
              ))}
            </div>
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
            className="inline-flex items-center gap-1 rounded-xl bg-indigo-500 text-slate-950 px-4 py-2 text-xs font-bold hover:bg-indigo-400 disabled:opacity-40 transition-all shadow-md shadow-indigo-500/20"
          >
            <span>{t('Next Step', 'পরবর্তী ধাপ')}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-800/60 bg-indigo-950/60 px-3.5 py-2 text-xs font-semibold text-indigo-300 hover:bg-indigo-900/60 transition-all"
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
