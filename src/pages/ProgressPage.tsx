import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  CheckCircle2, 
  Terminal, 
  BookOpen, 
  Award, 
  RotateCcw, 
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { useLanguage } from '../context/LanguageContext';

export const ProgressPage: React.FC = () => {
  const { 
    completedLessons, 
    completedLabs, 
    quizScores,
    totalLessonsCount, 
    totalLabsCount,
    overallProgressPercentage, 
    resetProgress 
  } = useProgress();
  const { t } = useLanguage();

  const totalQuizzesPassed = Object.values(quizScores).filter(q => q.percent >= 70).length;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-3 py-1 text-xs font-semibold text-cyan-300 mb-3">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>{t('Local Student Progress Dashboard', 'শিক্ষার্থীর লোকাল প্রগ্রেস ড্যাশবোর্ড')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('My Learning Progress', 'আমার শেখার অগ্রগতি')}
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            {t(
              'Your completed modules, lessons, practical engineering labs, and quiz scores are tracked and saved in your own browser using LocalStorage. Each visitor has independent, private progress.',
              'আপনার সম্পন্ন করা লেসন, প্র্যাকটিক্যাল ল্যাব এবং কুইজের ফলাফল সম্পূর্ণ ব্যক্তিগতভাবে আপনার ব্রাউজারের লোকাল স্টোরেজে সংরক্ষিত থাকে।'
            )}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            if (confirm(t('Are you sure you want to reset your learning progress in this browser?', 'আপনি কি সত্যিই আপনার অগ্রগতি রিসেট করতে চান?'))) {
              resetProgress();
            }
          }}
          className="inline-flex items-center gap-1.5 self-start rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-400 hover:text-rose-400 hover:border-rose-900 transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>{t('Reset Progress', 'প্রগ্রেস রিসেট')}</span>
        </button>
      </div>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Overall Percentage */}
        <div className="rounded-2xl border border-cyan-800/40 bg-slate-900/80 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-slate-400">{t('Overall Completion', 'সামগ্রিক সমাপ্তি')}</span>
            <Award className="h-5 w-5 text-cyan-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-white font-mono-code">
              {overallProgressPercentage}%
            </span>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
              style={{ width: `${overallProgressPercentage}%` }}
            />
          </div>
        </div>

        {/* Card 2: Lessons Completed */}
        <div className="rounded-2xl border border-blue-800/40 bg-slate-900/80 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-slate-400">{t('Lessons Completed', 'সম্পন্ন লেসন')}</span>
            <BookOpen className="h-5 w-5 text-blue-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-white font-mono-code">
              {completedLessons.length}
            </span>
            <span className="text-xs text-slate-500 font-mono-code">/ {totalLessonsCount}</span>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            {totalLessonsCount - completedLessons.length} {t('lessons remaining', 'টি লেসন বাকি রয়েছে')}
          </p>
        </div>

        {/* Card 3: Labs Completed */}
        <div className="rounded-2xl border border-emerald-800/40 bg-slate-900/80 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-slate-400">{t('Practical Labs Passed', 'সম্পন্ন প্র্যাকটিক্যাল ল্যাব')}</span>
            <Terminal className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-white font-mono-code">
              {completedLabs.length}
            </span>
            <span className="text-xs text-slate-500 font-mono-code">/ {totalLabsCount}</span>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            {completedLabs.length > 0 ? t('Hands-on labs verified', 'হাতে-কলমে ল্যাব যাচাইকৃত') : t('Start your first lab today', 'আজই প্রথম ল্যাব শুরু করুন')}
          </p>
        </div>

        {/* Card 4: Quizzes Passed */}
        <div className="rounded-2xl border border-purple-800/40 bg-slate-900/80 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-slate-400">{t('Quizzes Passed', 'উত্তীর্ণ কুইজ')}</span>
            <HelpCircle className="h-5 w-5 text-purple-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-white font-mono-code">
              {totalQuizzesPassed}
            </span>
            <span className="text-xs text-slate-500 font-mono-code">Passed</span>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            {Object.keys(quizScores).length} {t('quizzes attempted', 'টি কুইজ পরীক্ষা দেওয়া হয়েছে')}
          </p>
        </div>
      </div>

      {/* Detailed breakdown 3-column list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Completed Lessons */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-400" />
              <span>{t('Completed Lessons Record', 'সম্পন্ন লেসনের তালিকা')}</span>
            </h2>

            {completedLessons.length > 0 ? (
              <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {completedLessons.map((id) => (
                  <div key={id} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs">
                    <span className="text-slate-200 font-medium font-mono-code truncate">{id}</span>
                    <span className="text-emerald-400 text-[10px] font-semibold shrink-0 ml-2">{t('Verified', 'যাচাইকৃত')}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">
                {t('No lessons completed yet. Head over to the lessons directory to begin!', 'এখনও কোনো লেসন সম্পন্ন হয়নি। শুরু করতে লেসন ডিরেক্টরি দেখুন!')}
              </p>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800">
            <Link to="/lessons" className="text-xs text-cyan-400 hover:underline inline-flex items-center gap-1 font-semibold">
              <span>{t('Go to Lessons', 'লেসন ডিরেক্টরি')}</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Completed Labs */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <Terminal className="h-4 w-4 text-emerald-400" />
              <span>{t('Completed Practical Labs', 'সম্পন্ন প্র্যাকটিক্যাল ল্যাব')}</span>
            </h2>

            {completedLabs.length > 0 ? (
              <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {completedLabs.map((id) => (
                  <div key={id} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs">
                    <span className="text-slate-200 font-medium font-mono-code truncate">{id}</span>
                    <span className="text-emerald-400 text-[10px] font-semibold shrink-0 ml-2">{t('Simulated', 'সিমুলেটেড')}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">
                {t('No practical labs completed yet. Try the switch or subnet simulator!', 'এখনও কোনো ল্যাব সম্পন্ন হয়নি। সুইচ বা সাবনেট সিমুলেটর চেষ্টা করুন!')}
              </p>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800">
            <Link to="/labs" className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1 font-semibold">
              <span>{t('Go to Practical Labs', 'প্র্যাকটিক্যাল ল্যাব ডিরেক্টরি')}</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Quiz Assessment Record */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-purple-400" />
              <span>{t('Quiz Assessment Records', 'কুইজ মূল্যায়নের ইতিহাস')}</span>
            </h2>

            {Object.keys(quizScores).length > 0 ? (
              <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {Object.entries(quizScores).map(([key, record]) => (
                  <div key={key} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs flex items-center justify-between">
                    <div>
                      <span className="text-white font-bold block font-mono-code uppercase text-[11px]">{key}</span>
                      <span className="text-[10px] text-slate-500">{record.date}</span>
                    </div>
                    <span className={`text-[11px] font-bold font-mono-code px-2 py-0.5 rounded ${
                      record.percent >= 70
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60'
                        : 'bg-amber-950 text-amber-400 border border-amber-800/60'
                    }`}>
                      {record.score}/{record.total} ({record.percent}%)
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">
                {t('No quizzes attempted yet. Test your knowledge in the Quizzes section!', 'এখনও কোনো কুইজ সম্পন্ন হয়নি। কুইজ বিভাগে আপনার জ্ঞান যাচাই করুন!')}
              </p>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800">
            <Link to="/quizzes" className="text-xs text-purple-400 hover:underline inline-flex items-center gap-1 font-semibold">
              <span>{t('Go to Quizzes', 'কুইজ সেকশন')}</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
