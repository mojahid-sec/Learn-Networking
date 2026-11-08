import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  Filter,
  Sparkles
} from 'lucide-react';
import { modulesData } from '../data/modulesData';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';

export const LessonsPage: React.FC = () => {
  const { t } = useLanguage();
  const { isLessonCompleted } = useProgress();
  const [searchParams] = useSearchParams();
  const selectedModuleParam = searchParams.get('module');

  const [searchQuery, setSearchQuery] = useState('');
  const [activeModuleFilter, setActiveModuleFilter] = useState<string>(selectedModuleParam || 'all');

  // Collect lessons with module metadata
  const allLessons = modulesData.flatMap(m => 
    m.lessons.map(l => ({ ...l, moduleTitleEn: m.titleEn, moduleTitleBn: m.titleBn }))
  );

  const filteredLessons = allLessons.filter(lesson => {
    const matchesModule = activeModuleFilter === 'all' || lesson.moduleId === activeModuleFilter;
    const matchesSearch = 
      lesson.topicNameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.topicNameBn.includes(searchQuery) ||
      lesson.definitionEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesModule && matchesSearch;
  });

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-3 py-1 text-xs font-semibold text-cyan-300 mb-3">
          <BookOpen className="h-3.5 w-3.5" />
          <span>{t('Bilingual Curriculum Archive', 'দ্বিভাষিক পাঠ্যক্রম সংগ্রহ')}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t('Complete Computer Networking Lessons', 'কম্পিউটার নেটওয়ার্কিংয়ের সমস্ত লেসনসমূহ')}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
          {t(
            'Explore lessons written with the 10-point bilingual standard: English definitions, natural Bangla explanations, technical terms, and real-life examples.',
            '১০-দফা দ্বিভাষিক মানদণ্ডে রচিত লেসন: ইংরেজি সংজ্ঞা, সহজ বাংলা ব্যাখ্যা, পারিভাষিক শব্দ এবং বাস্তব জীবনের উদাহরণ।'
          )}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('Search topics or terms...', 'বিষয় বা পরিভাষা খুঁজুন...')}
            className="w-full rounded-xl border border-slate-800 bg-slate-900/90 pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          />
        </div>

        {/* Module select dropdown */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="h-4 w-4 text-slate-400 shrink-0" />
          <select
            value={activeModuleFilter}
            onChange={(e) => setActiveModuleFilter(e.target.value)}
            aria-label="Filter lessons by module"
            className="rounded-xl border border-slate-800 bg-slate-900/90 px-3 py-2 text-xs text-slate-200 focus:border-cyan-500 focus:outline-none"
          >
            <option value="all">{t('All Modules', 'সকল মডিউল')}</option>
            {modulesData.map(m => (
              <option key={m.id} value={m.id}>
                {m.order}. {t(m.titleEn, m.titleBn)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Lessons List Grid */}
      {filteredLessons.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLessons.map(lesson => {
            const completed = isLessonCompleted(lesson.id);

            return (
              <div
                key={lesson.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-slate-900/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-md bg-cyan-950/80 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-400 border border-cyan-800/60">
                      {lesson.level}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400 font-mono-code">
                      <Clock className="h-3 w-3 text-slate-500" />
                      {lesson.durationMinutes} mins
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {t(lesson.topicNameEn, lesson.topicNameBn)}
                  </h3>

                  <div className="mt-2 text-xs text-cyan-300 font-bangla font-medium">
                    {lesson.topicNameBn}
                  </div>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {t(lesson.definitionEn, lesson.meaningBn)}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs">
                    {completed ? (
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                        <CheckCircle2 className="h-4 w-4" />
                        {t('Completed', 'সম্পন্ন')}
                      </span>
                    ) : (
                      <span className="text-slate-500">
                        {t('Not Started', 'শুরু হয়নি')}
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/lessons/${lesson.id}`}
                    className="inline-flex items-center gap-1 rounded-lg bg-cyan-500/20 border border-cyan-500/40 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/30 hover:text-white transition-all"
                  >
                    <span>{t('Open Lesson', 'লেসন পড়ুন')}</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-12 text-center">
          <p className="text-sm text-slate-400">
            {t('No lessons found matching your search.', 'আপনার অনুসন্ধানের সাথে মেলে এমন কোনো লেসন পাওয়া যায়নি।')}
          </p>
        </div>
      )}
    </div>
  );
};
