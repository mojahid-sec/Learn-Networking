import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Terminal, 
  Award, 
  Flame, 
  TrendingUp,
  Layers
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';

export const LearningOverview: React.FC = () => {
  const { 
    totalModulesCount, 
    totalLessonsCount, 
    completedLessons, 
    completedLabs, 
    totalLabsCount,
    overallProgressPercentage 
  } = useProgress();
  const { t } = useLanguage();

  const metrics = [
    {
      labelEn: 'Total Modules',
      labelBn: 'মোট মডিউল',
      value: totalModulesCount,
      subEn: 'From Basics to Advanced',
      subBn: 'বেসিক থেকে অ্যাডভান্সড',
      icon: Layers,
      color: 'text-cyan-400 bg-cyan-950/40 border-cyan-800/40',
    },
    {
      labelEn: 'Total Lessons',
      labelBn: 'মোট লেসন',
      value: totalLessonsCount,
      subEn: 'Bilingual Deep Dives',
      subBn: 'দ্বিভাষিক বিস্তারিত লেসন',
      icon: BookOpen,
      color: 'text-blue-400 bg-blue-950/40 border-blue-800/40',
    },
    {
      labelEn: 'Completed Lessons',
      labelBn: 'সম্পন্ন লেসন',
      value: completedLessons.length,
      subEn: `${completedLessons.length} of ${totalLessonsCount} completed`,
      subBn: `${totalLessonsCount} টির মধ্যে ${completedLessons.length} সম্পন্ন`,
      icon: CheckCircle2,
      color: 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40',
    },
    {
      labelEn: 'Completed Labs',
      labelBn: 'সম্পন্ন ল্যাব',
      value: completedLabs.length,
      subEn: `${completedLabs.length} of ${totalLabsCount} practical labs`,
      subBn: `${totalLabsCount} টির মধ্যে ${completedLabs.length} ল্যাব সম্পন্ন`,
      icon: Terminal,
      color: 'text-amber-400 bg-amber-950/40 border-amber-800/40',
    },
  ];

  return (
    <section className="py-12 border-y border-slate-800/80 bg-slate-900/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>{t('Curriculum & Student Metrics', 'পাঠ্যক্রম ও শিক্ষার্থী অগ্রগতি')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t('Curriculum & Learning Overview', 'পাঠ্যক্রম ও শেখার অগ্রগতি')}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs text-slate-400 block">{t('Your Learning Progress', 'আপনার শেখার অগ্রগতি')}</span>
              <span className="text-xl font-extrabold text-cyan-400 font-mono-code">{overallProgressPercentage}%</span>
            </div>
            <div className="h-10 w-32 rounded-xl bg-slate-800/90 p-1.5 border border-slate-700/80 flex items-center">
              <div 
                className="h-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-sm transition-all duration-500"
                style={{ width: `${overallProgressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-900/80"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    {t(m.labelEn, m.labelBn)}
                  </span>
                  <div className={`p-2 rounded-xl border ${m.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white font-mono-code">
                    {m.value}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  {t(m.subEn, m.subBn)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
