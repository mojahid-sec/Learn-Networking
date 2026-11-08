import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, ArrowRight, Play, CheckCircle, Cpu, Clock } from 'lucide-react';
import { labsData } from '../../data/labsData';
import { useLanguage } from '../../context/LanguageContext';
import { useProgress } from '../../context/ProgressContext';

export const LabsSection: React.FC = () => {
  const { t } = useLanguage();
  const { isLabCompleted } = useProgress();

  return (
    <section className="py-20 border-t border-slate-800/80 bg-slate-950/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <Terminal className="h-4 w-4" />
              <span>{t('Hands-On Engineering', 'হাতে-কলমে ইঞ্জিনিয়ারিং')}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              {t('Interactive Practical Labs', 'ইন্টারেক্টিভ প্র্যাকটিক্যাল ল্যাবস')}
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
              {t(
                'Gain muscle memory with realistic simulations. Inspect switch frame switching, calculate subnets live, and trace TCP handshakes.',
                'বাস্তব সিমুলেশনের মাধ্যমে শিখুন। সুইচের ফ্রেম ফরোয়ার্ডিং পরীক্ষা করুন, লাইভ সাবনেট হিসাব করুন এবং টিসিপি ৩-ওয়ে হ্যান্ডশেক পর্যবেক্ষণ করুন।'
              )}
            </p>
          </div>

          <Link
            to="/labs"
            className="inline-flex items-center gap-2 self-start rounded-xl border border-emerald-500/40 bg-emerald-950/40 px-5 py-2.5 text-sm font-semibold text-emerald-300 hover:bg-emerald-900/60 hover:text-white transition-all"
          >
            <span>{t('Browse All Labs', 'সকল ল্যাব দেখুন')}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labsData.slice(0, 3).map((lab) => {
            const completed = isLabCompleted(lab.id);

            return (
              <div
                key={lab.id}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-900/90 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-md bg-emerald-950/80 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 border border-emerald-800/60">
                      {lab.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400 font-mono-code">
                      <Clock className="h-3.5 w-3.5 text-slate-500" />
                      {lab.timeEstimate}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {t(lab.titleEn, lab.titleBn)}
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                    {t(lab.descEn, lab.descBn)}
                  </p>

                  {/* CLI Command Preview snippet */}
                  {lab.steps[0]?.commandSnippet && (
                    <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-2.5 font-mono-code text-[11px] text-cyan-300 flex items-center justify-between">
                      <span className="truncate">$ {lab.steps[0].commandSnippet.split('\n')[0]}</span>
                      <span className="text-[10px] uppercase text-slate-500 tracking-wider">CLI</span>
                    </div>
                  )}

                  {/* Key Skills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {lab.learningObjectives.slice(0, 3).map((obj, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium text-slate-300 border border-slate-700/50"
                      >
                        {obj.en}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    {completed ? (
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                        <CheckCircle className="h-4 w-4" />
                        {t('Completed', 'সম্পন্ন')}
                      </span>
                    ) : (
                      <span className="text-slate-500">
                        {t('Not Started', 'শুরু হয়নি')}
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/labs/${lab.id}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/30 hover:text-white transition-all"
                  >
                    <Play className="h-3 w-3 fill-current" />
                    <span>{t('Launch Lab', 'ল্যাব চালু করুন')}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
