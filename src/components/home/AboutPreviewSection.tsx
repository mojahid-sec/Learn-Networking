import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Globe2, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const AboutPreviewSection: React.FC = () => {
  const { t } = useLanguage();

  const platformPillars = [
    {
      titleEn: '100% Focused on Networking',
      titleBn: 'শতভাগ কম্পিউটার নেটওয়ার্কিং ফোকাস',
      descEn: 'Strictly engineering fundamentals: packet flows, subnetting math, routing protocols, and switching mechanics without unrelated distractions.',
      descBn: 'প্যাকেট ফ্লো, সাবনেটিং গণিত, রাউটিং প্রোটোকল ও সুইচিং মেকানিজম—কোনো অপ্রাসঙ্গিক বিষয় ছাড়া নিখুঁত পাঠ্যক্রম।',
      icon: Network,
      color: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/40',
    },
    {
      titleEn: 'Bilingual Educational Engine',
      titleBn: 'দ্বিভাষিক উন্মুক্ত শিক্ষা ব্যবস্থা',
      descEn: 'Accessible to all students with parallel English definitions, clear technical terms, and natural, easy-to-understand Bangla explanations.',
      descBn: 'আন্তর্জাতিক মানের ইংরেজি সংজ্ঞা এবং সহজবোধ্য বাংলা বিশ্লেষণের মাধ্যমে যেকোনো শিক্ষার্থীর জন্য উন্মুক্ত।',
      icon: Globe2,
      color: 'text-blue-400 bg-blue-950/60 border-blue-800/40',
    },
    {
      titleEn: 'Interactive Hands-On Sandboxes',
      titleBn: 'ইন্টারেক্টিভ ব্যবহারিক স্যান্ডবক্স',
      descEn: 'Test what you learn immediately with live subnet calculators, switch CAM table learning simulators, and command line practice.',
      descBn: 'লাইভ সাবনেট ক্যালকুলেটর, সুইচ ম্যাক টেবিল সিমুলেটর ও টার্মিনাল প্র্যাকটিসের মাধ্যমে সরাসরি প্রয়োগের সুযোগ।',
      icon: Terminal,
      color: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/40',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 p-8 sm:p-12 relative overflow-hidden backdrop-blur-md">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

          {/* Section Heading */}
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-3">
              <Users className="h-3.5 w-3.5" />
              <span>{t('Open Public Learning Community', 'উন্মুক্ত পাবলিক শিক্ষা প্ল্যাটফর্ম')}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t(
                'Built for Students, Engineers & Lifelong Learners',
                'শিক্ষার্থী, প্রকৌশলী এবং নেটওয়ার্কিং অনুরাগীদের জন্য নিবেদিত'
              )}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {t(
                'NETCORE is an open academic platform designed to make computer networking intuitive and universally accessible. Whether you are studying for polytechnic exams, university degrees, or enterprise certifications, learn the mechanical truth of how networks work.',
                'নেটকোর একটি উন্মুক্ত শিক্ষামূলক প্ল্যাটফর্ম যা কম্পিউটার নেটওয়ার্কিংকে সহজবোধ্য এবং সবার জন্য গ্রহণযোগ্য করার লক্ষ্যে তৈরি। পলিটেকনিক, বিশ্ববিদ্যালয় বা প্রফেশনাল সার্টিফিকেশন—সব স্তরের শিক্ষার্থীদের জন্য নেটওয়ার্কিংয়ের বাস্তব সত্য জানার নির্ভরযোগ্য মাধ্যম।'
              )}
            </p>
          </div>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {platformPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800/90 bg-slate-950/70 p-6 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-950"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl border mb-4 ${pillar.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {t(pillar.titleEn, pillar.titleBn)}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {t(pillar.descEn, pillar.descBn)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Call to Actions */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
              <span>{t('Free, open access for all students worldwide.', 'বিশ্বের সকল শিক্ষার্থীর জন্য সম্পূর্ণ বিনামূল্যে উন্মুক্ত।')}</span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/roadmap"
                className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition-colors shadow-md shadow-cyan-500/20"
              >
                <span>{t('Start Learning', 'শেখা শুরু করুন')}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span>{t('About the Platform & Creator', 'প্ল্যাটফর্ম ও নির্মাতা পরিচিতি')}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
