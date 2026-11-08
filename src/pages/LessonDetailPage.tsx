import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Layers, 
  Sparkles, 
  Terminal, 
  Activity, 
  Lightbulb, 
  Workflow, 
  AlertTriangle, 
  Cpu, 
  ShieldCheck, 
  HelpCircle,
  TrendingUp,
  MapPin,
  Scale,
  FileQuestion,
  Info,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { getDetailedLessonById } from '../data/lessons';
import { RouterForwardingVisual } from '../components/visuals/RouterForwardingVisual';
import { SwitchMacLearningVisual } from '../components/visuals/SwitchMacLearningVisual';
import { DnsResolutionVisual } from '../components/visuals/DnsResolutionVisual';
import { DhcpDoraVisual } from '../components/visuals/DhcpDoraVisual';
import { TcpHandshakeVisual } from '../components/visuals/TcpHandshakeVisual';
import { SubnetVisualizer } from '../components/visuals/SubnetVisualizer';
import { KnowledgeCheckSection } from '../components/lessons/KnowledgeCheckSection';

export const LessonDetailPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { t } = useLanguage();
  const { isLessonCompleted, toggleLessonCompletion } = useProgress();

  const lesson = useMemo(() => {
    return getDetailedLessonById(lessonId || 'routing-fundamentals');
  }, [lessonId]);

  const completed = isLessonCompleted(lesson.id);

  const renderSimulator = () => {
    switch (lesson.interactiveSimulator) {
      case 'router':
        return <RouterForwardingVisual />;
      case 'switch':
        return <SwitchMacLearningVisual />;
      case 'dns':
        return <DnsResolutionVisual />;
      case 'dhcp':
        return <DhcpDoraVisual />;
      case 'tcp':
        return <TcpHandshakeVisual />;
      case 'subnet':
        return <SubnetVisualizer />;
      default:
        return null;
    }
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Top Navigation & Completion Bar */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
        <Link
          to="/lessons"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{t('Back to Lessons Directory', 'সকল লেসনে ফিরে যান')}</span>
        </Link>

        {/* Completion Toggle */}
        <button
          type="button"
          onClick={() => toggleLessonCompletion(lesson.id)}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
            completed
              ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/30'
              : 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-white'
          }`}
        >
          <CheckCircle2 className={`h-4 w-4 ${completed ? 'text-emerald-400' : 'text-slate-500'}`} />
          <span>{completed ? t('Completed', 'সম্পন্ন হয়েছে') : t('Mark as Complete', 'সম্পন্ন হিসেবে চিহ্নিত করুন')}</span>
        </button>
      </div>

      {/* 1. TOPIC TITLE IN ENGLISH & BANGLA */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold mb-2 flex-wrap">
          <span className="rounded-md bg-cyan-950/80 px-2.5 py-0.5 border border-cyan-800/60 font-mono-code">
            {lesson.moduleTitleEn}
          </span>
          <span>•</span>
          <span className="font-mono-code text-slate-400">{lesson.durationMinutes} mins</span>
          <span>•</span>
          <span className="text-slate-400 font-mono-code">{lesson.difficulty} Level</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {lesson.topicTitleEn}
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold text-cyan-300 font-bangla mt-2 leading-relaxed">
          {lesson.topicTitleBn}
        </h2>
      </div>

      {/* INTERACTIVE VISUAL SIMULATOR (IF APPLICABLE) */}
      {lesson.interactiveSimulator && (
        <div className="mb-12">
          {renderSimulator()}
        </div>
      )}

      {/* 2 & 3. DEFINITIONS (ENGLISH DEFINITION + BANGLA MEANING) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* 2. English Definition */}
        <div className="rounded-2xl border border-cyan-800/50 bg-slate-900/80 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
            <BookOpen className="h-4 w-4" />
            <span>2. English Definition</span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            {lesson.englishDefinition}
          </p>
        </div>

        {/* 3. Bangla Meaning */}
        <div className="rounded-2xl border border-blue-800/50 bg-slate-900/80 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            <Sparkles className="h-4 w-4" />
            <span>৩. বাংলা অর্থ ও মূল ধারণা</span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-bangla font-medium">
            {lesson.banglaMeaning}
          </p>
        </div>
      </div>

      {/* 4 & 5. DETAILED TECHNICAL EXPLANATIONS (ENGLISH & BANGLA) */}
      <div className="space-y-6 mb-10">
        {/* 4. English Explanation */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span>4. Detailed Technical Explanation</span>
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {lesson.englishExplanation}
          </p>
        </div>

        {/* 5. Bangla Explanation */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="font-bangla">৫. বিস্তারিত বাংলা বিশ্লেষণ ও বিশদ ব্যাখ্যা</span>
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-bangla">
            {lesson.banglaExplanation}
          </p>
        </div>
      </div>

      {/* 6 & 7. WHY THIS TECHNOLOGY IS NEEDED & WHERE IT IS USED */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* 6. Why Needed */}
        <div className="rounded-2xl border border-amber-800/40 bg-slate-900/70 p-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <HelpCircle className="h-4 w-4" />
            <span>6. Why This Technology Is Needed (কেন প্রয়োজন)</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-2">
            {lesson.whyNeededEn}
          </p>
          <p className="text-xs text-amber-200/90 leading-relaxed font-bangla">
            {lesson.whyNeededBn}
          </p>
        </div>

        {/* 7. Where It Is Used */}
        <div className="rounded-2xl border border-indigo-800/40 bg-slate-900/70 p-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
            <MapPin className="h-4 w-4" />
            <span>7. Where It Is Used (বাস্তব ব্যবহার ক্ষেত্র)</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-2">
            {lesson.whereUsedEn}
          </p>
          <p className="text-xs text-indigo-200/90 leading-relaxed font-bangla">
            {lesson.whereUsedBn}
          </p>
        </div>
      </div>

      {/* 8 & 9. HOW IT WORKS & INTERNAL WORKING MECHANISM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* 8. How It Works */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
            <Activity className="h-4 w-4" />
            <span>8. How It Works (কার্যপ্রণালী)</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-2">
            {lesson.howItWorksEn}
          </p>
          <p className="text-xs text-cyan-200/90 leading-relaxed font-bangla">
            {lesson.howItWorksBn}
          </p>
        </div>

        {/* 9. Internal Working Process */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
            <Cpu className="h-4 w-4" />
            <span>9. Internal Mechanism (অভ্যন্তরীণ মেকানিজম)</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed mb-2">
            {lesson.internalMechanismEn}
          </p>
          <p className="text-xs text-emerald-200/90 leading-relaxed font-bangla">
            {lesson.internalMechanismBn}
          </p>
        </div>
      </div>

      {/* 10. STEP-BY-STEP EXPLANATION */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 mb-10">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
          <Workflow className="h-4 w-4" />
          <span>10. Step-by-Step Working Process (ধাপে ধাপে কাজের প্রক্রিয়া)</span>
        </div>

        <div className="space-y-4">
          {lesson.stepByStep.map((step) => (
            <div key={step.step} className="flex items-start gap-4 rounded-xl border border-slate-800/80 bg-slate-950 p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-950 text-emerald-400 text-xs font-bold font-mono-code border border-emerald-800/60 mt-0.5">
                0{step.step}
              </span>
              <div>
                <h4 className="text-xs font-bold text-white">
                  {t(step.titleEn, step.titleBn)}
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {t(step.detailEn, step.detailBn)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 11. REAL-LIFE EXAMPLES & ANALOGIES */}
      <div className="rounded-2xl border border-amber-800/40 bg-amber-950/20 p-6 mb-10">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
          <Lightbulb className="h-4 w-4" />
          <span>11. Real-Life Analogy (বাস্তব জীবনের উদাহরণ ও রূপক)</span>
        </div>
        <p className="text-sm text-slate-200 leading-relaxed">
          {t(lesson.realLifeExample.en, lesson.realLifeExample.bn)}
        </p>
      </div>

      {/* 12. TECHNICAL TERMS WITH BANGLA MEANINGS */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 mb-10">
        <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
          <Layers className="h-4 w-4" />
          <span>12. Technical Terms & Bangla Meanings (গুরুত্বপূর্ণ পারিভাষিক শব্দ)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {lesson.technicalTerms.map((term, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
              <span className="text-xs font-bold text-white block">{term.term}</span>
              <span className="text-xs text-cyan-300 font-bangla block mt-1">{term.banglaMeaning}</span>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                {t(term.explanationEn, term.explanationBn)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 13 & 14. ADVANTAGES & DISADVANTAGES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* 13. Advantages */}
        <div className="rounded-2xl border border-emerald-800/40 bg-slate-900/70 p-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>13. Key Advantages (সুবিধাসমূহ)</span>
          </h3>
          <ul className="space-y-2.5">
            {lesson.advantages.map((adv, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>{t(adv.en, adv.bn)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 14. Disadvantages */}
        <div className="rounded-2xl border border-rose-800/40 bg-slate-900/70 p-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>14. Disadvantages & Trade-Offs (সীমাবদ্ধতা)</span>
          </h3>
          <ul className="space-y-2.5">
            {lesson.disadvantages.map((dis, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                <span className="text-rose-400 mt-0.5">•</span>
                <span>{t(dis.en, dis.bn)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 15. COMPARISON WITH RELATED TECHNOLOGIES */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 mb-10">
        <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
          <Scale className="h-4 w-4" />
          <span>15. Comparison With Related Technologies (তুলনামূলক বিশ্লেষণ)</span>
        </h3>

        <div className="space-y-3">
          {lesson.comparison.map((comp, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-800/80 bg-slate-950">
              <div className="flex items-center gap-2 mb-2 font-mono-code text-xs">
                <span className="text-cyan-300 font-bold">{comp.techA}</span>
                <span className="text-slate-500">vs</span>
                <span className="text-emerald-300 font-bold">{comp.techB}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">Criteria: {comp.criteria}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t(comp.diffEn, comp.diffBn)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 16. PRACTICAL EXAMPLES & CLI VERIFICATION */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 mb-10">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4">
          <Terminal className="h-4 w-4" />
          <span>16. Practical Implementation & CLI Verification (ব্যবহারিক কমান্ড)</span>
        </div>

        <div className="space-y-4">
          {lesson.practicalCommands.map((ex, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-xs font-bold text-slate-200">
                {t(ex.titleEn, ex.titleBn)}
              </h4>
              <pre className="rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono-code text-xs text-cyan-300 overflow-x-auto">
                <code>{ex.command}</code>
              </pre>
              {ex.expectedOutput && (
                <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-3 font-mono-code text-[11px] text-slate-400">
                  <span className="text-[10px] text-slate-500 block uppercase mb-1">Expected Output:</span>
                  <pre>{ex.expectedOutput}</pre>
                </div>
              )}
              <p className="text-xs text-slate-400 leading-relaxed">
                {t(ex.explanationEn, ex.explanationBn)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 17 & 18. COMMON MISTAKES & IMPORTANT NOTES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* 17. Common Mistakes */}
        <div className="rounded-2xl border border-amber-800/40 bg-slate-900/70 p-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>17. Common Student Mistakes (সাধারণ ভুলভ্রান্তি)</span>
          </h3>
          <div className="space-y-3">
            {lesson.commonMistakes.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800/60">
                <span className="text-xs text-rose-300 font-semibold block mb-1">
                  ✗ {t(m.mistakeEn, m.mistakeBn)}
                </span>
                <span className="text-xs text-emerald-300 block">
                  ✓ {t(m.correctionEn, m.correctionBn)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 18. Important Notes & Tips */}
        <div className="rounded-2xl border border-cyan-800/40 bg-slate-900/70 p-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
            <Info className="h-4 w-4" />
            <span>18. Important Notes & Pro-Tips (জরুরি নোট)</span>
          </h3>
          <ul className="space-y-2.5">
            {lesson.importantNotes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                <span className="text-cyan-400 mt-0.5">•</span>
                <span>{t(note.en, note.bn)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 19. KNOWLEDGE CHECK (INTERACTIVE QUIZ) */}
      <KnowledgeCheckSection
        questions={lesson.knowledgeCheck}
        topicTitleEn={lesson.topicTitleEn}
      />

      {/* 20. PRACTICE QUESTIONS & SCENARIO CHALLENGES */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 mb-12">
        <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
          <FileQuestion className="h-4 w-4" />
          <span>20. Practice Questions & Real-World Challenges (বাস্তব অনুশীলন)</span>
        </h3>

        <div className="space-y-4">
          {lesson.practiceQuestions.map((pq, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-950">
              <h4 className="text-xs font-bold text-white mb-2">
                {t(pq.questionEn, pq.questionBn)}
              </h4>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs text-cyan-300 leading-relaxed font-mono-code">
                <span className="text-[10px] text-slate-500 block uppercase mb-1">Expert Solution Analysis:</span>
                {t(pq.scenarioEn, pq.scenarioBn)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Completion Action */}
      <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          to="/lessons"
          className="text-xs font-semibold text-slate-400 hover:text-white"
        >
          &larr; {t('All Lessons Directory', 'সকল লেসন ডিরেক্টরি')}
        </Link>

        <button
          type="button"
          onClick={() => toggleLessonCompletion(lesson.id)}
          className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-bold transition-all ${
            completed
              ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300'
              : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-md shadow-cyan-500/20'
          }`}
        >
          <CheckCircle2 className="h-4 w-4" />
          <span>
            {completed
              ? t('Lesson Completed!', 'লেসন সম্পন্ন হয়েছে!')
              : t('Mark as Completed & Continue', 'সম্পন্ন হিসেবে চিহ্নিত করে এগিয়ে যান')}
          </span>
        </button>
      </div>
    </div>
  );
};
