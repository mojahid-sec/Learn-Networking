import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, 
  ArrowRight, 
  Terminal, 
  BookOpen, 
  CheckCircle, 
  Sparkles,
  Layers,
  Activity
} from 'lucide-react';
import { TumbleDeckPlaceholder } from './TumbleDeckPlaceholder';
import { useLanguage } from '../../context/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-14 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top badge */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-4 py-1.5 text-xs font-semibold text-cyan-300 shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>{t('Strictly Focused on Computer Networking', 'শুধুমাত্র কম্পিউটার নেটওয়ার্কিং শিক্ষার জন্য নিবেদিত')}</span>
            <span className="rounded bg-cyan-500/20 px-2 py-0.5 text-[10px] text-cyan-200">
              {t('English + Bangla', 'ইংরেজি + বাংলা')}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="mt-6 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t(
              'Master Computer Networking with Deep Visual Understanding',
              'কম্পিউটার নেটওয়ার্কিংয়ের গভীরে প্রবেশ করুন বাস্তব ভিজ্যুয়াল লার্নিংয়ের মাধ্যমে'
            )}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            {t(
              'From physical cables to dynamic routing and packet switching. Learn how routers choose paths, switches populate CAM tables, and protocols transport packets across the globe.',
              'ফিজিক্যাল ক্যাবল থেকে শুরু করে ডাইনামিক রাউটিং ও প্যাকেট সুইচিং। জানুন কীভাবে রাউটার পথ বেছে নেয়, সুইচ ম্যাক অ্যাড্রেস টেবিল তৈরি করে এবং প্রোটোকল কীভাবে বিশ্বজুড়ে ডেটা পরিবহন করে।'
            )}
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <BookOpen className="h-4 w-4" />
              <span>{t('Explore Learning Roadmap', 'লার্নিং রোডম্যাপ দেখুন')}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/labs"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 shadow-md backdrop-blur-md transition-all hover:border-cyan-500/50 hover:bg-slate-800 hover:text-white hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <Terminal className="h-4 w-4 text-cyan-400" />
              <span>{t('Hands-on Practical Labs', 'প্র্যাকটিক্যাল ল্যাবসমূহ')}</span>
            </Link>
          </div>

          {/* Feature Highlights Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-cyan-400" />
              {t('Visual Packet Flows', 'ভিজ্যুয়াল প্যাকেট ফ্লো')}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-cyan-400" />
              {t('Bilingual (English + Bangla)', 'দ্বিভাষিক (ইংরেজি + বাংলা)')}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-cyan-400" />
              {t('Zero Hacking/Distractions', 'কোনো বিভ্রান্তিকর কনটেন্ট নেই')}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-cyan-400" />
              {t('Real CLI & Diagrams', 'বাস্তব সিএলআই ও ডায়াগ্রাম')}
            </span>
          </div>
        </div>

        {/* Hero Section: Tumble Deck Showcase Component Slot */}
        <div className="mt-12 sm:mt-16">
          <TumbleDeckPlaceholder />
        </div>
      </div>
    </section>
  );
};
