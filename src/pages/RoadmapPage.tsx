import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Layers, 
  Clock, 
  BookOpen, 
  Terminal, 
  ArrowRight, 
  ChevronDown,
  ChevronUp,
  Search,
  Sparkles,
  Wifi,
  GitBranch,
  Shield,
  Activity,
  Server,
  Cpu,
  Monitor,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import { 
  ALL_CURRICULUM_MODULES, 
  CURRICULUM_TIERS, 
  CurriculumModule, 
  DifficultyTier,
  getCurriculumStats
} from '../data/curriculum';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';

export const RoadmapPage: React.FC = () => {
  const { t } = useLanguage();
  const { isLessonCompleted } = useProgress();
  const stats = useMemo(() => getCurriculumStats(), []);

  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedLevels, setExpandedLevels] = useState<Record<string, boolean>>({
    'level-01-fundamentals': true,
    'level-02-devices-media': false,
  });

  const toggleLevel = (id: string) => {
    setExpandedLevels(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    ALL_CURRICULUM_MODULES.forEach(m => { allExpanded[m.id] = true; });
    setExpandedLevels(allExpanded);
  };

  const collapseAll = () => {
    setExpandedLevels({});
  };

  // Filter modules based on tier selection and search query
  const filteredModules = useMemo(() => {
    return ALL_CURRICULUM_MODULES.filter((module) => {
      const matchesTier = selectedTier === 'All' || module.tier === selectedTier;
      if (!matchesTier) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchModule = 
        module.titleEn.toLowerCase().includes(q) ||
        module.titleBn.toLowerCase().includes(q) ||
        module.descEn.toLowerCase().includes(q) ||
        module.descBn.toLowerCase().includes(q);

      const matchTopic = module.topics.some(
        (t) =>
          t.titleEn.toLowerCase().includes(q) ||
          t.titleBn.toLowerCase().includes(q) ||
          t.summaryEn.toLowerCase().includes(q) ||
          t.summaryBn.toLowerCase().includes(q) ||
          t.keyConcepts.some((k) => k.toLowerCase().includes(q)) ||
          t.visualPlan.visualType.toLowerCase().includes(q)
      );

      return matchModule || matchTopic;
    });
  }, [selectedTier, searchQuery]);

  const renderModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="h-5 w-5 text-cyan-400" />;
      case 'Server': return <Server className="h-5 w-5 text-blue-400" />;
      case 'GitBranch': return <GitBranch className="h-5 w-5 text-indigo-400" />;
      case 'Wifi': return <Wifi className="h-5 w-5 text-sky-400" />;
      case 'Terminal': return <Terminal className="h-5 w-5 text-emerald-400" />;
      case 'Shield': return <Shield className="h-5 w-5 text-amber-400" />;
      case 'Layers': return <Layers className="h-5 w-5 text-purple-400" />;
      default: return <Compass className="h-5 w-5 text-cyan-400" />;
    }
  };

  const getTierColorClass = (tier: DifficultyTier) => {
    switch (tier) {
      case 'Beginner':
        return 'text-emerald-400 border-emerald-800/60 bg-emerald-950/60';
      case 'Elementary':
        return 'text-blue-400 border-blue-800/60 bg-blue-950/60';
      case 'Intermediate':
        return 'text-purple-400 border-purple-800/60 bg-purple-950/60';
      case 'Advanced':
        return 'text-amber-400 border-amber-800/60 bg-amber-950/60';
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-4 py-1.5 text-xs font-semibold text-cyan-300 mb-4">
          <Compass className="h-4 w-4" />
          <span>{t('NETCORE 12-Level Engineering Curriculum', 'নেটকোর ১২-লেভেল ইঞ্জিনিয়ারিং কারিকুলাম')}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {t('Complete Computer Networking Roadmap', 'সম্পূর্ণ কম্পিউটার নেটওয়ার্কিং লার্নিং রোডম্যাপ')}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
          {t(
            'From physical signals and cables to enterprise routing, Wi-Fi propagation, packet forensics, and cloud VPC architectures. Built for dedicated students, engineers, and self-learners.',
            'ফিজিক্যাল সিগন্যাল ও ক্যাবল থেকে শুরু করে এন্টারপ্রাইজ রাউটিং, ওয়াই-ফাই তরঙ্গ, প্যাকেট ফরেনসিক্স এবং ক্লাউড ভিপিসি আর্কিটেকচার পর্যন্ত পূর্ণাঙ্গ শিক্ষামূলক রোডম্যাপ।'
          )}
        </p>

        {/* Global Stats Counter */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3.5 backdrop-blur-sm">
            <span className="block text-2xl font-extrabold text-cyan-400 font-mono-code">12</span>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{t('Levels', 'লেভেল')}</span>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3.5 backdrop-blur-sm">
            <span className="block text-2xl font-extrabold text-blue-400 font-mono-code">{stats.totalTopics}+</span>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{t('Topics', 'টপিক')}</span>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3.5 backdrop-blur-sm">
            <span className="block text-2xl font-extrabold text-emerald-400 font-mono-code">{stats.totalEstimatedHours}h</span>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{t('Curriculum', 'সময়')}</span>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3.5 backdrop-blur-sm">
            <span className="block text-2xl font-extrabold text-amber-400 font-mono-code">100%</span>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{t('Visual Plans', 'ভিজ্যুয়াল প্ল্যান')}</span>
          </div>
        </div>

        {/* Tier Group Filter Pills */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setSelectedTier('All')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedTier === 'All'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25 font-bold'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            {t('All 12 Levels', 'সকল ১২টি লেভেল')}
          </button>
          {CURRICULUM_TIERS.map((tier) => (
            <button
              key={tier.tier}
              type="button"
              onClick={() => setSelectedTier(tier.tier)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedTier === tier.tier
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25 font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {t(tier.titleEn.split(':')[0], tier.titleBn.split(':')[0])}
            </button>
          ))}
        </div>

        {/* Search Bar & Controls */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('Search topics: OSPF, BGP, Subnetting, Wireshark, VLAN...', 'টপিক খুঁজুন: OSPF, BGP, Subnetting, Wireshark...')}
              className="w-full rounded-xl border border-slate-800 bg-slate-900/90 pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={expandAll}
              className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors"
            >
              {t('Expand All', 'সব প্রসারিত করুন')}
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors"
            >
              {t('Collapse All', 'সব সংকুচিত করুন')}
            </button>
          </div>
        </div>
      </div>

      {/* Levels Timeline List */}
      <div className="space-y-6 max-w-5xl mx-auto">
        {filteredModules.length > 0 ? (
          filteredModules.map((module) => {
            const isExpanded = !!expandedLevels[module.id];
            const completedInThisModule = module.topics.filter(t => isLessonCompleted(t.id)).length;

            return (
              <div
                key={module.id}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm transition-all overflow-hidden hover:border-slate-700"
              >
                {/* Module Header Bar */}
                <div 
                  onClick={() => toggleLevel(module.id)}
                  className="p-6 sm:p-7 cursor-pointer select-none flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:bg-slate-900/90 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-950/80 border border-cyan-800/60 font-mono-code font-bold text-cyan-400 text-lg">
                      {module.levelNumber < 10 ? `0${module.levelNumber}` : module.levelNumber}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${getTierColorClass(module.tier)}`}>
                          {module.tier} Tier
                        </span>
                        <span className="text-xs text-slate-500">•</span>
                        <span className="text-xs text-slate-400 font-mono-code">{module.estimatedHours} Hours</span>
                        <span className="text-xs text-slate-500">•</span>
                        <span className="text-xs text-cyan-400 font-medium">{module.topics.length} {t('Topics', 'টি পাঠ')}</span>
                        {completedInThisModule > 0 && (
                          <>
                            <span className="text-xs text-slate-500">•</span>
                            <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              {completedInThisModule}/{module.topics.length} {t('Done', 'সম্পন্ন')}
                            </span>
                          </>
                        )}
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {t(module.titleEn, module.titleBn)}
                      </h2>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                        {t(module.descEn, module.descBn)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                    <button
                      type="button"
                      aria-label={isExpanded ? 'Collapse module' : 'Expand module'}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Collapsible Topics Syllabus */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/40">
                    <div className="flex items-center justify-between mb-4 mt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {t('Comprehensive Topic Syllabus & Visual Plans:', 'সম্পূর্ণ সিলেবাস ও ভিজ্যুয়াল লার্নিং প্ল্যান:')}
                      </span>
                      <Link
                        to={`/lessons?module=${module.id}`}
                        className="text-xs font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{t('Browse Module Lessons', 'মডিউলের সমস্ত লেসন')}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>

                    <div className="space-y-3">
                      {module.topics.map((topic, index) => {
                        const completed = isLessonCompleted(topic.id);

                        return (
                          <div
                            key={`${module.id}-${topic.id}`}
                            className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 transition-all hover:border-cyan-500/40 hover:bg-slate-900/90"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                              <div className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-[11px] font-mono-code font-bold text-slate-400 border border-slate-700 mt-0.5">
                                  {index + 1}
                                </span>
                                <div>
                                  <div className="flex items-center gap-2 flex-wrap mb-1">
                                    <h3 className="text-sm font-bold text-white">
                                      {t(topic.titleEn, topic.titleBn)}
                                    </h3>
                                    <span className="text-xs text-slate-500">•</span>
                                    <span className="text-[11px] text-slate-400 font-mono-code">
                                      {topic.durationMinutes} mins
                                    </span>
                                    <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[10px] text-cyan-300 font-medium border border-slate-700">
                                      {topic.difficulty}
                                    </span>
                                  </div>

                                  <div className="text-xs text-cyan-300 font-bangla mb-2">
                                    {topic.titleBn}
                                  </div>

                                  <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                                    {t(topic.summaryEn, topic.summaryBn)}
                                  </p>

                                  {/* Visual Learning Plan Badge */}
                                  <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-cyan-950/40 border border-cyan-800/50 px-3 py-1.5 text-xs text-cyan-300">
                                    <Sparkles className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                                    <span className="font-semibold text-cyan-200">
                                      {topic.visualPlan.visualType}:
                                    </span>
                                    <span className="text-slate-300 text-[11px]">
                                      {t(topic.visualPlan.descriptionEn, topic.visualPlan.descriptionBn)}
                                    </span>
                                  </div>

                                  {/* Key Concepts Tags */}
                                  <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
                                    {topic.keyConcepts.map((concept, i) => (
                                      <span
                                        key={i}
                                        className="rounded-md bg-slate-950 px-2 py-0.5 text-[10px] text-slate-400 border border-slate-800 font-mono-code"
                                      >
                                        {concept}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                                {completed && (
                                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 mr-1">
                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                    {t('Completed', 'সম্পন্ন')}
                                  </span>
                                )}

                                <Link
                                  to={`/lessons/${topic.id}`}
                                  className="inline-flex items-center gap-1 rounded-xl bg-cyan-500/20 border border-cyan-500/40 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/30 hover:text-white transition-all"
                                >
                                  <span>{t('Study', 'পড়ুন')}</span>
                                  <ArrowRight className="h-3 w-3" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-12 text-center">
            <p className="text-sm text-slate-400">
              {t('No curriculum topics found matching your search criteria.', 'আপনার অনুসন্ধানের সাথে মেলে এমন কোনো কারিকুলাম পাওয়া যায়নি।')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
