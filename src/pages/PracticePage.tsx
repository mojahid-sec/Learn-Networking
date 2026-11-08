import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Award, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw,
  Terminal,
  Layers,
  Wrench,
  AlertCircle,
  Filter
} from 'lucide-react';
import { quizQuestions, QuizQuestion } from '../data/quizData';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';

export const PracticePage: React.FC = () => {
  const { t } = useLanguage();
  const { recordQuizScore, quizScores } = useProgress();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({});
  const [shortAnswers, setShortAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const categories = ['All', 'Fundamentals', 'IP & Subnetting', 'Commands', 'Troubleshooting', 'Scenarios'];

  const filteredQuestions = selectedCategory === 'All'
    ? quizQuestions
    : quizQuestions.filter(q => q.category === selectedCategory);

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    if (showResults) return;
    setSelectedOptions(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleShortAnswerChange = (questionId: string, value: string) => {
    if (showResults) return;
    setShortAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const isQuestionAnswered = (q: QuizQuestion) => {
    if (q.type === 'short-answer') {
      return (shortAnswers[q.id]?.trim() || '').length > 0;
    }
    return selectedOptions[q.id] !== undefined;
  };

  const isQuestionCorrect = (q: QuizQuestion) => {
    if (q.type === 'short-answer') {
      const userVal = (shortAnswers[q.id] || '').trim().toLowerCase();
      return (q.acceptedAnswers || []).some(ans => ans.toLowerCase() === userVal);
    }
    const selected = selectedOptions[q.id];
    return selected !== undefined && q.options && q.options[selected]?.isCorrect === true;
  };

  const calculateScore = () => {
    let score = 0;
    filteredQuestions.forEach(q => {
      if (isQuestionCorrect(q)) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    setShowResults(true);
    recordQuizScore(`quiz-${selectedCategory.toLowerCase()}`, score, filteredQuestions.length);
  };

  const handleReset = () => {
    setSelectedOptions({});
    setShortAnswers({});
    setShowResults(false);
  };

  const totalAnswered = filteredQuestions.filter(isQuestionAnswered).length;
  const score = calculateScore();
  const percentage = filteredQuestions.length > 0 ? Math.round((score / filteredQuestions.length) * 100) : 0;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-3">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>{t('Public Self-Assessment Engine', 'উন্মুক্ত স্ব-মূল্যায়ন ইঞ্জিন')}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t('Computer Networking Practice Quizzes', 'কম্পিউটার নেটওয়ার্কিং প্র্যাকটিস কুইজ')}
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
          {t(
            'Test your mastery across switching, routing logic, subnetting math, CLI diagnostics, and real-world troubleshooting scenarios. Attempt questions first before viewing the evaluated breakdown.',
            'সুইচিং, রাউটিং লজিক, সাবনেটিং গণিত, কমান্ড লাইন ডায়াগনস্টিকস এবং বাস্তব ট্রাবলশুটিং বিষয়ে আপনার দক্ষতা যাচাই করুন।'
          )}
        </p>

        {/* Filter categories */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                handleReset();
              }}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat === 'All' ? t('All Questions', 'সকল প্রশ্ন') : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q, qIndex) => {
          const isAnswered = isQuestionAnswered(q);
          const isCorrect = isQuestionCorrect(q);

          return (
            <div
              key={q.id}
              className={`rounded-3xl border p-6 sm:p-8 backdrop-blur-sm transition-all ${
                showResults
                  ? isCorrect
                    ? 'border-emerald-500/40 bg-slate-900/80 shadow-md shadow-emerald-950/30'
                    : 'border-rose-500/40 bg-slate-900/80 shadow-md shadow-rose-950/30'
                  : 'border-slate-800 bg-slate-900/60'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-cyan-950 text-cyan-400 font-mono-code text-xs font-bold border border-cyan-800">
                    {qIndex + 1 < 10 ? `0${qIndex + 1}` : qIndex + 1}
                  </span>
                  <span className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[10px] font-mono-code text-cyan-300 border border-slate-700/60 uppercase">
                    {q.type} • {q.category}
                  </span>
                </div>

                {showResults && (
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg ${
                    isCorrect
                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800'
                      : 'bg-rose-950/80 text-rose-400 border border-rose-800'
                  }`}>
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>{t('Correct', 'সঠিক')}</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-3.5 w-3.5" />
                        <span>{t('Incorrect', 'ভুল')}</span>
                      </>
                    )}
                  </span>
                )}
              </div>

              {/* Question Text */}
              <h3 className="text-sm sm:text-base font-bold text-white leading-relaxed">
                {t(q.questionEn, q.questionBn)}
              </h3>

              {/* Render Question Inputs */}
              {q.type === 'short-answer' ? (
                /* Short-answer input box */
                <div className="mt-5 space-y-2">
                  <label className="text-xs font-medium text-slate-400 block">
                    {t('Type your answer below:', 'নিচে আপনার উত্তর লিখুন:')}
                  </label>
                  <input
                    type="text"
                    disabled={showResults}
                    value={shortAnswers[q.id] || ''}
                    onChange={(e) => handleShortAnswerChange(q.id, e.target.value)}
                    placeholder={q.placeholder || 'e.g. /26'}
                    className={`w-full rounded-xl border bg-slate-950 px-4 py-3 font-mono-code text-xs text-white focus:outline-none ${
                      showResults
                        ? isCorrect
                          ? 'border-emerald-500 text-emerald-300'
                          : 'border-rose-500 text-rose-300'
                        : 'border-slate-800 focus:border-cyan-500'
                    }`}
                  />
                  {showResults && !isCorrect && (
                    <span className="text-[11px] text-amber-400 block mt-1">
                      {t('Accepted Answer: ', 'সঠিক উত্তর: ')} <strong className="font-mono-code">{q.acceptedAnswers?.join(' or ')}</strong>
                    </span>
                  )}
                </div>
              ) : (
                /* Multiple Choice & True/False Options */
                <div className="space-y-2 mt-5">
                  {q.options?.map((opt, optIndex) => {
                    const isSelected = selectedOptions[q.id] === optIndex;
                    let optionStyle = 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-700 hover:bg-slate-900/50';

                    if (showResults) {
                      if (opt.isCorrect) {
                        optionStyle = 'border-emerald-500/80 bg-emerald-950/40 text-emerald-300 font-semibold';
                      } else if (isSelected && !opt.isCorrect) {
                        optionStyle = 'border-rose-500/80 bg-rose-950/40 text-rose-300';
                      } else {
                        optionStyle = 'border-slate-800/60 bg-slate-950/40 text-slate-500 opacity-60';
                      }
                    } else if (isSelected) {
                      optionStyle = 'border-cyan-500 bg-cyan-950/40 text-white font-medium ring-1 ring-cyan-500/50';
                    }

                    return (
                      <button
                        key={optIndex}
                        type="button"
                        disabled={showResults}
                        onClick={() => handleSelectOption(q.id, optIndex)}
                        className={`w-full text-left rounded-xl border p-3.5 text-xs transition-all flex items-center justify-between ${optionStyle}`}
                      >
                        <span className="leading-snug">{t(opt.textEn, opt.textBn)}</span>
                        {showResults && opt.isCorrect && (
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 ml-2" />
                        )}
                        {showResults && isSelected && !opt.isCorrect && (
                          <XCircle className="h-4 w-4 text-rose-400 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Post-submission Evaluation & Bilingual Explanations */}
              {showResults && (
                <div className="mt-5 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-1.5 leading-relaxed">
                  <span className="text-cyan-400 font-bold block uppercase tracking-wider text-[10px]">
                    {t('Technical Explanation:', 'কারিগরি ব্যাখ্যা:')}
                  </span>
                  <p>{t(q.explanationEn, q.explanationBn)}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div>
          {showResults ? (
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-cyan-400 shrink-0" />
              <div>
                <span className="text-base font-extrabold text-white block">
                  {t('Your Score:', 'আপনার ফলাফল:')} <span className="text-cyan-400 font-mono-code">{score}</span> / {filteredQuestions.length} ({percentage}%)
                </span>
                <span className="text-xs text-slate-400">
                  {percentage >= 70
                    ? t('Mastery achieved! Results saved in your browser progress.', 'দুর্দান্ত! আপনার ফলাফল ব্রাউজার লোকাল স্টোরেজে সংরক্ষিত হয়েছে।')
                    : t('Review the explanations above and retake to improve.', 'উপরের ব্যাখ্যাগুলো পড়ে পুনরায় চেষ্টা করুন।')}
                </span>
              </div>
            </div>
          ) : (
            <div>
              <span className="text-xs font-semibold text-slate-300 block">
                {totalAnswered} / {filteredQuestions.length} {t('questions answered', 'টি প্রশ্নের উত্তর দেওয়া হয়েছে')}
              </span>
              <span className="text-[11px] text-slate-500">
                {t('Attempt all questions before submitting for evaluation.', 'ফলাফল দেখতে প্রশ্নের উত্তর সিলেক্ট বা টাইপ করুন।')}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {showResults ? (
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-semibold text-white hover:bg-slate-700 transition-all"
            >
              <RotateCcw className="h-4 w-4" />
              <span>{t('Retake Quiz', 'পুনরায় কুইজ দিন')}</span>
            </button>
          ) : (
            <button
              type="button"
              disabled={totalAnswered === 0}
              onClick={handleSubmit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 disabled:opacity-50 transition-all shadow-md shadow-cyan-500/20"
            >
              <span>{t('Submit Answers', 'উত্তর জমা দিন')}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
