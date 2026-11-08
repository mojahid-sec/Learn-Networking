import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Github, Heart, Shield, Cpu, ExternalLink, Award } from 'lucide-react';
import { authorInfo } from '../../data/authorData';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Purpose */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-600/30 text-cyan-400 border border-cyan-500/30">
                <Network className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-wider">NET<span className="text-cyan-400">CORE</span></span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {t(
                'Complete, bilingual educational platform dedicated exclusively to Computer Networking. Master packet flows, routing, switching, subnets, and protocols visually.',
                'কম্পিউটার নেটওয়ার্কিংয়ের সম্পূর্ণ ও দ্বিভাষিক শিক্ষামূলক প্ল্যাটফর্ম। প্যাকেট ফ্লো, রাউটিং, সুইচিং, সাবনেটিং এবং প্রোটোকলের গভীর জ্ঞান অর্জন করুন ভিজ্যুয়ালি।'
              )}
            </p>
            <div className="inline-flex items-center gap-2 rounded-md bg-slate-900 border border-slate-800 px-2.5 py-1 text-[11px] text-cyan-400">
              <Shield className="h-3 w-3 text-cyan-400" />
              <span>{t('Strictly Computer Networking Focus', 'শুধুমাত্র কম্পিউটার নেটওয়ার্কিং ফোকাস')}</span>
            </div>
          </div>

          {/* Quick Learning Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              {t('Curriculum & Labs', 'পাঠ্যক্রম ও ল্যাব')}
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link to="/roadmap" className="hover:text-cyan-400 transition-colors">
                  {t('Learning Roadmap (Beginner to Advanced)', 'লার্নিং রোডম্যাপ (বিগিনার টু অ্যাডভান্সড)')}
                </Link>
              </li>
              <li>
                <Link to="/lessons" className="hover:text-cyan-400 transition-colors">
                  {t('All Networking Lessons', 'সকল নেটওয়ার্কিং লেসনসমূহ')}
                </Link>
              </li>
              <li>
                <Link to="/labs" className="hover:text-cyan-400 transition-colors">
                  {t('Hands-on Practical Labs', 'হ্যান্ডস-অন প্র্যাকটিক্যাল ল্যাব')}
                </Link>
              </li>
              <li>
                <Link to="/diagrams" className="hover:text-cyan-400 transition-colors">
                  {t('Interactive Topology Diagrams', 'ইন্টারেক্টিভ টপোলজি ডায়াগ্রাম')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Networking Topics */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              {t('Core Disciplines', 'প্রধান বিষয়সমূহ')}
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                <span>OSI 7 Layers & TCP/IP Model</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                <span>IPv4 / IPv6 CIDR Subnetting</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                <span>Router Forwarding & CAM Tables</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                <span>DNS, DHCP, TCP 3-Way Handshake</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-cyan-400" />
                <span>Wireshark & Packet Flow Analysis</span>
              </li>
            </ul>
          </div>

          {/* Academic & Author Credit */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              {t('About the Project', 'প্রজেক্ট পরিচিতি')}
            </h3>
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3 space-y-1.5">
              <p className="text-xs font-bold text-white tracking-wide">
                NETCORE Open Learning
              </p>
              <p className="text-[11px] text-slate-400">
                {t(
                  'An independent academic educational platform created by MD. MOJAHIDUR RAHMAN SAJID for networking students.',
                  'নেটওয়ার্কিং শিক্ষার্থীদের জন্য মোঃ মোজাহিদুর রহমান সাজিদ কর্তৃক নির্মিত উন্মুক্ত শিক্ষামূলক প্ল্যাটফর্ম।'
                )}
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{t('View Creator & Academic Profile', 'নির্মাতা ও প্রাতিষ্ঠানিক তথ্য')}</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NETCORE. {t('All rights reserved. Dedicated to quality networking education.', 'সর্বস্বত্ব সংরক্ষিত। মানসম্মত নেটওয়ার্কিং শিক্ষার জন্য নিবেদিত।')}</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              {t('About', 'পরিচিতি')}
            </Link>
            <span>•</span>
            <Link to="/progress" className="hover:text-slate-300 transition-colors">
              {t('My Learning Progress', 'শেখার অগ্রগতি')}
            </Link>
            <span>•</span>
            <Link to="/quizzes" className="hover:text-slate-300 transition-colors">
              {t('Quizzes', 'কুইজ')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
