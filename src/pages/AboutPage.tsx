import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Github, 
  ExternalLink, 
  Award, 
  Network, 
  ShieldCheck, 
  Terminal, 
  CheckCircle2,
  Cpu,
  Sparkles,
  Layers,
  FlaskConical,
  Compass
} from 'lucide-react';
import { authorInfo } from '../data/authorData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();
  const { currentThemeConfig } = useTheme();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      {/* ========================================================
          LARGE PREMIUM DEVELOPER PROFILE (2-COLUMN HERO ON DESKTOP)
          ======================================================== */}
      <section 
        className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-10 lg:p-12 backdrop-blur-md relative overflow-hidden shadow-2xl transition-all"
        style={{
          boxShadow: `0 20px 50px -15px ${currentThemeConfig.accentHex}15`
        }}
      >
        {/* Dynamic theme accent ambient glow */}
        <div 
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: currentThemeConfig.accentHex }}
        />
        <div 
          className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: currentThemeConfig.accentHex }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Large, Authentic Developer Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
              {/* Glowing Frame Accent */}
              <div 
                className="absolute -inset-1.5 rounded-[28px] opacity-40 blur-md transition duration-500 group-hover:opacity-75"
                style={{
                  background: `linear-gradient(135deg, ${currentThemeConfig.accentHex}, transparent 70%)`
                }}
              />

              {/* Portrait Container */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-slate-700/80 bg-slate-950 shadow-2xl">
                <img
                  src={authorInfo.photoUrl}
                  alt={authorInfo.name}
                  className="w-full h-auto object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="eager"
                  style={{
                    aspectRatio: '2/3',
                    objectPosition: 'center top'
                  }}
                />

                {/* Subtle bottom glass badge overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pt-12 pb-4 px-4 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-lg text-[11px] font-semibold text-slate-200">
                    <Sparkles className="h-3 w-3 text-cyan-400" />
                    <span>{t('Original Verified Creator', 'যাচাইকৃত মূল নির্মাতা')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Brand Info, Academic Credentials & Direct Links */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Developer & Founder Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div 
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
                style={{
                  borderColor: `${currentThemeConfig.accentHex}60`,
                  backgroundColor: `${currentThemeConfig.accentHex}18`,
                  color: currentThemeConfig.accentHex
                }}
              >
                <Award className="h-4 w-4" />
                <span>{t(authorInfo.role, authorInfo.roleBn)}</span>
              </div>

              <div className="rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-xs font-mono-code text-slate-400">
                NETCORE Engine v2.4
              </div>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {authorInfo.name}
              </h1>
              <div className="text-lg sm:text-xl font-bold text-cyan-300 font-bangla mt-1">
                {authorInfo.nameBn}
              </div>
            </div>

            {/* Academic Credentials (Department & Polytechnic Institute) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/90 bg-slate-950/70">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-950/80 border border-cyan-800/40 text-cyan-400">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    {t('Department', 'বিভাগ')}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate">
                    {t(authorInfo.department, authorInfo.departmentBn)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/90 bg-slate-950/70">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-950/80 border border-blue-800/40 text-blue-400">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    {t('Institution', 'প্রতিষ্ঠান')}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate">
                    {t(authorInfo.institution, authorInfo.institutionBn)}
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Biography */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
              {t(authorInfo.bioEn, authorInfo.bioBn)}
            </p>

            {/* Quick Stats Pill Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-950/60 text-center">
                <div className="text-base sm:text-lg font-black text-cyan-400 font-mono-code">12</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{t('Curriculum Levels', 'কোর্স লেভেল')}</div>
              </div>
              <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-950/60 text-center">
                <div className="text-base sm:text-lg font-black text-cyan-400 font-mono-code">6</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{t('Practical Labs', 'ব্যবহারিক ল্যাব')}</div>
              </div>
              <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-950/60 text-center">
                <div className="text-base sm:text-lg font-black text-cyan-400 font-mono-code">11</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{t('Visual Diagrams', 'ভিজ্যুয়াল ডায়াগ্রাম')}</div>
              </div>
            </div>

            {/* Interactive Actions & GitHub Link */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4">
              <a
                href={`https://github.com/${authorInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800 border border-slate-700 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-slate-700 hover:border-cyan-500/50 transition-all shadow-md group"
              >
                <Github className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>GitHub: <strong className="text-cyan-300">@{authorInfo.github}</strong></span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400 ml-1" />
              </a>

              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>{t('100% Dedicated to Computer Networking', 'শতভাগ কম্পিউটার নেটওয়ার্কিং নিবেদিত')}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          PHILOSOPHY & EDUCATIONAL ARCHITECTURE
          ======================================================== */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <Compass className="h-5 w-5" />
            <h2 className="text-base sm:text-lg font-bold text-white">
              {t('Educational Purpose & Mission', 'শিক্ষামূলক লক্ষ্য ও উদ্দেশ্য')}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t(
              'NETCORE was created from the conviction that computer networking education should be transparent, visual, and accessible. Rather than forcing students to memorize complex RFC acronyms, NETCORE focuses on the mechanical truth of how packets travel across physical copper, fiber, and silicon chips.',
              'নেটকোর প্রতিষ্ঠার মূল উদ্দেশ্য হলো কম্পিউটার নেটওয়ার্কিং শিক্ষাকে স্বচ্ছ, ভিজ্যুয়াল এবং সহজলভ্য করা। জটিল আরএফসি কিংবা মুখস্থ বিদ্যার পরিবর্তে নেটকোর গুরুত্ব দেয় ফিজিক্যাল কপার ক্যাবল, ফাইবার অপটিক এবং সিলিকন চিপের মধ্য দিয়ে ডেটা প্যাকেট কীভাবে প্রবাহিত হয় তার বাস্তব কার্যপ্রণালী প্রদর্শনের উপর।'
            )}
          </p>
        </div>

        {/* Boundary Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-blue-400">
            <Cpu className="h-5 w-5" />
            <h2 className="text-base sm:text-lg font-bold text-white">
              {t('Dedicated Networking Focus', 'একনিষ্ঠ নেটওয়ার্কিং ফোকাস')}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t(
              'Unlike generic portals, NETCORE does not mix unrelated hacking or cybersecurity noise into foundational networking. It focuses exclusively on networking engineering: routing protocols, switching mechanics, IP subnetting math, TCP transport reliability, and diagnostic command line tools.',
              'অন্যান্য গতানুগতিক সাইটের মতো নেটকোর অপ্রয়োজনীয় হ্যাকিং বা বিভ্রান্তিকর বিষয় দিয়ে মূল পাঠ্যক্রমকে জটিল করে না। এটি শতভাগ নিবেদিত কম্পিউটার নেটওয়ার্কিং ইঞ্জিনিয়ারিংয়ের উপর: রাউটিং প্রোটোকল, সুইচিং মেকানিজম, আইপি সাবনেটিং গণিত, টিসিপি ট্রান্সপোর্ট ও কমান্ড লাইন ডায়াগনস্টিকস।'
            )}
          </p>
        </div>
      </section>

      {/* ========================================================
          SPECIALIZATIONS & ENGINEERING EXPERTISE
          ======================================================== */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-6 flex items-center gap-2">
          <Terminal className="h-4 w-4" />
          <span>{t('Areas of Core Specialization', 'বিশেষ দক্ষতা ও গবেষণার ক্ষেত্রসমূহ')}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {authorInfo.specializations.map((spec, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4 transition-colors hover:border-slate-700">
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white">{spec.en}</h4>
                <p className="text-xs text-cyan-300 font-bangla mt-1">{spec.bn}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
