import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  RotateCcw,
  Award
} from 'lucide-react';
import { QuizQuestionItem } from '../../types/lessonTypes';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
  questions: QuizQuestionItem[];
  topicTitleEn: string;
}

export const KnowledgeCheckSection: React.FC<Props> = ({ questions, topicTitleEn }) => {
  const { t } = useLanguage();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (submitted) return; // Prevent changing after submission
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const allAnswered = Object.keys(selectedAnswers).length === questions.length;
  const score = calculateScore();

  return (
    <div className="rounded-3xl border border-cyan-500/30 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-sm mb-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
            <HelpCircle className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {t('19. Knowledge Check & Concept Verification', '১৯. জ্ঞান যাচাই ও ধারণা নিশ্চিতকরণ')}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {t(
                'Test your deep understanding before completing the lesson. Answers are revealed after submission.',
                'লেসন শেষ করার পূর্বে নিজের ধারণা যাচাই করুন। উত্তর সাবমিট করার পর ব্যাখ্যা প্রদর্শিত হবে।'
              )}
            </p>
          </div>
        </div>

        {submitted && (
          <div className="flex items-center gap-2 self-start sm:self-auto rounded-xl bg-cyan-950/80 border border-cyan-800/60 px-4 py-2">
            <Award className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-bold font-mono-code text-white">
              {t('Score:', 'স্কোর:')} {score} / {questions.length}
            </span>
          </div>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-8 my-8">
        {questions.map((q, qIndex) => {
          const selectedOption = selectedAnswers[qIndex];
          const isCorrect = selectedOption === q.correctIndex;

          return (
            <div 
              key={qIndex} 
              className={`p-5 rounded-2xl border transition-all ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-800/80 bg-emerald-950/20'
                    : 'border-rose-800/80 bg-rose-950/20'
                  : 'border-slate-800/80 bg-slate-950/60'
              }`}
            >
              {/* Question Text */}
              <div className="flex items-start gap-3 mb-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-xs font-mono-code font-bold text-cyan-400 border border-slate-700 mt-0.5">
                  0{qIndex + 1}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white leading-relaxed">
                    {t(q.questionEn, q.questionBn)}
                  </h4>
                  <div className="text-xs text-cyan-300/80 font-bangla mt-1">
                    {q.questionBn}
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-2.5 pl-9">
                {q.options.map((opt, optIndex) => {
                  const isThisSelected = selectedOption === optIndex;
                  const isThisTheCorrectAnswer = q.correctIndex === optIndex;

                  let optionStyle = 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700';

                  if (submitted) {
                    if (isThisTheCorrectAnswer) {
                      optionStyle = 'border-emerald-500/80 bg-emerald-950/60 text-emerald-200 font-semibold';
                    } else if (isThisSelected) {
                      optionStyle = 'border-rose-500/80 bg-rose-950/60 text-rose-200';
                    } else {
                      optionStyle = 'border-slate-800/40 bg-slate-950/40 text-slate-500 opacity-60';
                    }
                  } else if (isThisSelected) {
                    optionStyle = 'border-cyan-500 bg-cyan-950/60 text-cyan-200 shadow-sm ring-1 ring-cyan-500/30';
                  }

                  return (
                    <button
                      key={optIndex}
                      type="button"
                      disabled={submitted}
                      onClick={() => handleSelect(qIndex, optIndex)}
                      className={`text-left p-3.5 rounded-xl border text-xs transition-all flex items-center justify-between ${optionStyle}`}
                    >
                      <span className="leading-relaxed">{opt}</span>
                      {submitted && isThisTheCorrectAnswer && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 ml-2" />
                      )}
                      {submitted && isThisSelected && !isThisTheCorrectAnswer && (
                        <XCircle className="h-4 w-4 text-rose-400 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Submitted Feedback Explanation */}
              {submitted && (
                <div className="mt-4 pt-4 border-t border-slate-800/80 pl-9">
                  <div className="rounded-xl bg-slate-900/90 p-3.5 border border-slate-800">
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                      {t('Technical Explanation & Reasoning:', 'কারিগরি ব্যাখ্যা ও সঠিক সমাধান:')}
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed mb-1.5">
                      {q.explanationEn}
                    </p>
                    <p className="text-xs text-cyan-200 leading-relaxed font-bangla">
                      {q.explanationBn}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        {!submitted ? (
          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 text-slate-950 px-6 py-2.5 text-xs font-bold hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-cyan-500/25"
          >
            <span>{t('Submit Answers & Check', 'উত্তর জমা দিন ও যাচাই করুন')}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>{t('Retake Quiz', 'পুনরায় চেষ্টা করুন')}</span>
          </button>
        )}

        <span className="text-xs text-slate-500">
          {Object.keys(selectedAnswers).length} / {questions.length} {t('answered', 'টি উত্তর দেওয়া হয়েছে')}
        </span>
      </div>
    </div>
  );
};
