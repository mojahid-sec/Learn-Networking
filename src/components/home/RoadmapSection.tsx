import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, CheckCircle2, ChevronRight, Layers, Clock, BookOpen } from 'lucide-react';
import { modulesData } from '../../data/modulesData';
import { useLanguage } from '../../context/LanguageContext';

export const RoadmapSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              <Compass className="h-4 w-4" />
              <span>{t('Structured Curriculum', 'সুসংগঠিত পাঠ্যক্রম')}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              {t('Complete Networking Learning Roadmap', 'কম্পিউটার নেটওয়ার্কিং লার্নিং রোডম্যাপ')}
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
              {t(
                'A rigorous, step-by-step engineering pathway from raw transmission physics to enterprise routing and packet analysis.',
                'ফিজিক্যাল ট্রান্সমিশন লেভেল থেকে শুরু করে এন্টারপ্রাইজ রাউটিং ও প্যাকেট অ্যানালাইসিস পর্যন্ত ধাপে ধাপে শেখার পূর্ণাঙ্গ রোডম্যাপ।'
              )}
            </p>
          </div>

          <Link
            to="/roadmap"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-cyan-500/40 bg-cyan-950/40 px-5 py-2.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-900/60 hover:text-white transition-all"
          >
            <span>{t('View Full Roadmap', 'সম্পূর্ণ রোডম্যাপ দেখুন')}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Roadmap Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modulesData.slice(0, 6).map((module) => {
            const levelColor = 
              module.level === 'Beginner' 
                ? 'text-emerald-400 bg-emerald-950/60 border-emerald-800/40' 
                : module.level === 'Intermediate'
                ? 'text-cyan-400 bg-cyan-950/60 border-cyan-800/40'
                : 'text-purple-400 bg-purple-950/60 border-purple-800/40';

            return (
              <div
                key={module.id}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800 text-xs font-bold text-cyan-400 font-mono-code border border-slate-700">
                      {module.order < 10 ? `0${module.order}` : module.order}
                    </span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold border ${levelColor}`}>
                      {module.level}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {t(module.titleEn, module.titleBn)}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {t(module.descEn, module.descBn)}
                  </p>

                  {/* Topics Pills */}
                  <div className="mt-4 pt-4 border-t border-slate-800/70">
                    <span className="text-[11px] font-medium text-slate-500 block mb-2">
                      {t('Key Topics:', 'প্রধান বিষয়সমূহ:')}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {module.topicsCovered.slice(0, 3).map((topic, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-300 border border-slate-700/60"
                        >
                          {topic}
                        </span>
                      ))}
                      {module.topicsCovered.length > 3 && (
                        <span className="rounded-md bg-slate-800/40 px-1.5 py-0.5 text-[10px] text-slate-500">
                          +{module.topicsCovered.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer metadata */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-mono-code">
                      <BookOpen className="h-3.5 w-3.5 text-slate-500" />
                      {module.lessonsCount} {t('Lessons', 'লেসন')}
                    </span>
                    <span className="flex items-center gap-1 font-mono-code">
                      <Clock className="h-3.5 w-3.5 text-slate-500" />
                      {module.durationHours}h
                    </span>
                  </div>

                  <Link
                    to={`/lessons?module=${module.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform"
                  >
                    <span>{t('Start', 'শুরু')}</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Full Roadmap */}
        <div className="mt-12 text-center">
          <Link
            to="/roadmap"
            className="inline-flex items-center gap-2 rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/80 to-blue-950/80 px-6 py-3 text-sm font-bold text-cyan-300 hover:text-white hover:border-cyan-400 transition-all shadow-lg shadow-cyan-950/40"
          >
            <span>{t('Explore All 12 Progressive Engineering Levels', '১২টি প্রোগ্রেসিভ ইঞ্জিনিয়ারিং লেভেল অন্বেষণ করুন')}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
