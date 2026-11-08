import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Terminal, 
  Play, 
  Clock, 
  CheckCircle2,
  ChevronRight,
  Shield,
  Layers
} from 'lucide-react';
import { labsData } from '../data/labsData';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';

export const LabsPage: React.FC = () => {
  const { t } = useLanguage();
  const { isLabCompleted, toggleLabCompletion } = useProgress();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Basic Networking',
    'IP Addressing',
    'Windows Networking',
    'Linux & Kali Linux',
    'Routing & Switching',
    'Network Analysis (Wireshark)'
  ];

  const filteredLabs = selectedCategory === 'All'
    ? labsData
    : labsData.filter(lab => lab.category === selectedCategory);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/50 px-3 py-1 text-xs font-semibold text-emerald-300 mb-3">
          <Terminal className="h-3.5 w-3.5" />
          <span>{t('Hands-On Networking Lab Manual', 'হাতে-কলমে নেটওয়ার্কিং ল্যাব ম্যানুয়াল')}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t('Practical Networking Labs & Sandboxes', 'প্র্যাকটিক্যাল নেটওয়ার্কিং ল্যাব ও স্যান্ডবক্স')}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
          {t(
            'Complete step-by-step practical networking experiments: LAN configuration, IP subnetting, Windows & Linux/Kali CLI diagnostics, switch CAM learning, and Wireshark TCP packet analysis.',
            'ধাপে ধাপে বাস্তব নেটওয়ার্কিং ল্যাব: ল্যান সেটআপ, সাবনেটিং, উইন্ডোজ ও লিনাক্স/কালি টার্মিনাল ডায়াগনস্টিকস, সুইচ ম্যাক লার্নিং এবং ওয়্যারশার্ক টিসিপি প্যাকেট বিশ্লেষণ।'
          )}
        </p>

        {/* Category Filter Tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat === 'All' ? t('All Labs (6)', 'সকল ল্যাব (৬)') : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Labs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLabs.map((lab) => {
          const completed = isLabCompleted(lab.id);
          const firstCommand = lab.steps[0]?.commandSnippet?.split('\n')[0] || '';
          const skills = lab.learningObjectives.slice(0, 3).map(o => o.en);

          return (
            <div
              key={lab.id}
              className={`rounded-2xl border p-6 backdrop-blur-sm transition-all flex flex-col justify-between ${
                completed
                  ? 'border-emerald-500/40 bg-slate-900/90 shadow-lg shadow-emerald-950/20'
                  : 'border-slate-800 bg-slate-900/60 hover:border-emerald-500/50 hover:bg-slate-900/80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-md bg-emerald-950/80 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 border border-emerald-800/60">
                    {lab.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      lab.difficulty === 'Beginner' ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/50' :
                      lab.difficulty === 'Intermediate' ? 'bg-amber-950 text-amber-300 border border-amber-800/50' :
                      'bg-purple-950 text-purple-300 border border-purple-800/50'
                    }`}>
                      {lab.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400 font-mono-code">
                      <Clock className="h-3 w-3 text-slate-500" />
                      {lab.timeEstimate}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {t(lab.titleEn, lab.titleBn)}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {t(lab.descEn, lab.descBn)}
                </p>

                {/* Command Preview */}
                {firstCommand && (
                  <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-2.5 font-mono-code text-[11px] text-cyan-300 flex items-center justify-between overflow-hidden">
                    <span className="truncate">$ {firstCommand}</span>
                    <span className="text-[10px] uppercase text-slate-500 shrink-0 ml-2">Terminal</span>
                  </div>
                )}

                {/* Skills tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-slate-800/70 px-2 py-0.5 text-[10px] text-slate-300 border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => toggleLabCompletion(lab.id)}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
                >
                  <CheckCircle2 className={`h-4 w-4 ${completed ? 'text-emerald-400' : 'text-slate-600'}`} />
                  <span className={completed ? 'text-emerald-400 font-semibold' : 'text-slate-500'}>
                    {completed ? t('Completed', 'সম্পন্ন') : t('Mark Done', 'সম্পন্ন করুন')}
                  </span>
                </button>

                <Link
                  to={`/labs/${lab.id}`}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/30 hover:text-white transition-all shadow-sm"
                >
                  <Play className="h-3 w-3 fill-current" />
                  <span>{t('Launch Lab Manual', 'ল্যাব ম্যানুয়াল খুলুন')}</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

