import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Terminal, 
  CheckCircle2, 
  Layers, 
  Copy,
  Check,
  AlertTriangle,
  HelpCircle,
  Network,
  Server,
  Laptop,
  ChevronDown,
  ChevronUp,
  Play,
  RotateCcw,
  Info,
  ShieldCheck,
  Wrench,
  BookOpen,
  Sliders,
  Sparkles
} from 'lucide-react';
import { labsData, DetailedLab } from '../data/labsData';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { SubnetVisualizer } from '../components/visuals/SubnetVisualizer';
import { SwitchMacLearningVisual } from '../components/visuals/SwitchMacLearningVisual';
import { TcpHandshakeVisual } from '../components/visuals/TcpHandshakeVisual';
import { RouterForwardingVisual } from '../components/visuals/RouterForwardingVisual';

export const LabDetailPage: React.FC = () => {
  const { labId } = useParams<{ labId: string }>();
  const { t } = useLanguage();
  const { isLabCompleted, toggleLabCompletion } = useProgress();

  const lab: DetailedLab = labsData.find(l => l.id === labId) || labsData[0];
  const completed = isLabCompleted(lab.id);

  // UI state
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [activeStepTab, setActiveStepTab] = useState<number>(0);

  // Simulated Terminal Runner State
  const [terminalInput, setTerminalInput] = useState<string>('');
  const [terminalHistory, setTerminalHistory] = useState<{ command: string; output: string }[]>([
    {
      command: lab.steps[0]?.commandSnippet?.split('\n')[0] || 'help',
      output: lab.steps[0]?.expectedOutput || 'Ready for command execution.'
    }
  ]);

  const handleCopyCommand = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleRunCommand = (cmd: string, expectedOut?: string) => {
    const output = expectedOut || `Command executed: ${cmd}\n[Simulated status: Success (Exit Code 0)]`;
    setTerminalHistory(prev => [...prev.slice(-4), { command: cmd, output }]);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const trimmed = terminalInput.trim();
    // Look for a matching step command
    const matchedStep = lab.steps.find(s => 
      s.commandSnippet && s.commandSnippet.toLowerCase().includes(trimmed.toLowerCase())
    );

    const out = matchedStep?.expectedOutput || 
      `netcore-cli: simulated execution of '${trimmed}'\nInterface active. Status 200 OK. Packets processed: 4. Round-trip min/avg/max = 0.8/1.2/1.5 ms.`;
    
    setTerminalHistory(prev => [...prev.slice(-4), { command: trimmed, output: out }]);
    setTerminalInput('');
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
      {/* SECTION 1 & TOP NAV: Back Button & Completion Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <Link
          to="/labs"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{t('Back to Practical Labs Manual', 'সকল ল্যাব ম্যানুয়ালে ফিরে যান')}</span>
        </Link>

        {/* Section 14: Top Completion Button */}
        <button
          type="button"
          onClick={() => toggleLabCompletion(lab.id)}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all shadow-sm ${
            completed
              ? 'bg-emerald-500/20 border border-emerald-500/60 text-emerald-300 shadow-emerald-950/40'
              : 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-white'
          }`}
        >
          <CheckCircle2 className={`h-4 w-4 ${completed ? 'text-emerald-400' : 'text-slate-500'}`} />
          <span>
            {completed
              ? t('14. Lab Completed (Click to Toggle)', '১৪. ল্যাব সম্পন্ন হয়েছে (পরিবর্তন করতে ক্লিক করুন)')
              : t('14. Mark Lab as Complete', '১৪. ল্যাব সম্পন্ন হিসেবে চিহ্নিত করুন')}
          </span>
        </button>
      </div>

      {/* SECTION 1 & 2: Lab Title, Category Badge, Difficulty & Time Estimate */}
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          <span className="rounded-lg bg-emerald-950/80 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-800/60 flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5" />
            <span>1. {lab.category}</span>
          </span>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${
            lab.difficulty === 'Beginner' ? 'bg-cyan-950/80 text-cyan-300 border-cyan-800/60' :
            lab.difficulty === 'Intermediate' ? 'bg-amber-950/80 text-amber-300 border-amber-800/60' :
            'bg-purple-950/80 text-purple-300 border-purple-800/60'
          }`}>
            2. {lab.difficulty} Level
          </span>
          <span className="rounded-lg bg-slate-950 px-3 py-1 text-xs font-mono-code text-slate-400 border border-slate-800">
            Est. Time: {lab.timeEstimate}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {t(lab.titleEn, lab.titleBn)}
        </h1>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-3xl">
          {t(lab.descEn, lab.descBn)}
        </p>
      </div>

      {/* SECTION 3, 4, 5: Objectives, Tools & Prerequisites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Section 3: Learning Objectives */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 md:col-span-1">
          <div className="flex items-center gap-2 text-emerald-400 mb-3">
            <CheckCircle2 className="h-4 w-4" />
            <h3 className="text-xs font-bold uppercase tracking-wider">
              {t('3. Learning Objectives', '৩. ল্যাবের উদ্দেশ্য')}
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-300">
            {lab.learningObjectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>{t(obj.en, obj.bn)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Required Tools */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 md:col-span-1">
          <div className="flex items-center gap-2 text-cyan-400 mb-3">
            <Wrench className="h-4 w-4" />
            <h3 className="text-xs font-bold uppercase tracking-wider">
              {t('4. Required Tools', '৪. প্রয়োজনীয় টুলস ও সফটওয়্যার')}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {lab.requiredTools.map((tool, i) => (
              <span
                key={i}
                className="rounded-lg bg-slate-950 px-2.5 py-1 text-xs font-mono-code text-cyan-300 border border-slate-800"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Section 5: Required Knowledge & Prerequisites */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 md:col-span-1">
          <div className="flex items-center gap-2 text-amber-400 mb-3">
            <BookOpen className="h-4 w-4" />
            <h3 className="text-xs font-bold uppercase tracking-wider">
              {t('5. Prerequisites', '৫. প্রয়োজনীয় পূর্বজ্ঞান')}
            </h3>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {lab.requiredKnowledge.map((kn, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">✓</span>
                <span>{t(kn.en, kn.bn)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SECTION 6: Network Topology Diagram Card */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2.5">
            <Network className="h-5 w-5 text-emerald-400" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                {t('6. Network Topology Architecture', '৬. নেটওয়ার্ক টপোলজি ডায়াগ্রাম')}
              </h2>
              <span className="text-xs text-slate-400">
                {t('Type: ', 'ধরন: ')} <strong className="text-emerald-300">{lab.topology.type}</strong>
              </span>
            </div>
          </div>
          <span className="text-xs font-mono-code text-slate-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 self-start sm:self-auto">
            {lab.topology.nodes.length} Network Nodes
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          {t(lab.topology.descriptionEn, lab.topology.descriptionBn)}
        </p>

        {/* Visual Topology Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
          {lab.topology.nodes.map((node, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 flex items-center gap-3"
            >
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                {node.role.toLowerCase().includes('switch') ? (
                  <Network className="h-5 w-5" />
                ) : node.role.toLowerCase().includes('router') ? (
                  <Layers className="h-5 w-5" />
                ) : node.role.toLowerCase().includes('server') ? (
                  <Server className="h-5 w-5" />
                ) : (
                  <Laptop className="h-5 w-5" />
                )}
              </div>
              <div className="min-w-0">
                <span className="text-xs font-bold text-white block truncate">{node.name}</span>
                <span className="text-[11px] font-mono-code text-cyan-400 block truncate">{node.ip}</span>
                <span className="text-[10px] text-slate-400 block truncate">{node.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EMBEDDED INTERACTIVE SIMULATOR (Subnet, Switch CAM, TCP Handshake, or Router) */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex items-center gap-2 pb-4 border-b border-slate-800 mb-6">
          <Sparkles className="h-5 w-5 text-emerald-400" />
          <h2 className="text-base sm:text-lg font-bold text-white">
            {t('Interactive Lab Sandbox & Live Simulator', 'ইন্টারেক্টিভ ল্যাব স্যান্ডবক্স ও লাইভ সিমুলেটর')}
          </h2>
        </div>

        {lab.id === 'lab-subnet-calculator' || lab.interactiveTool === 'subnet-calc' ? (
          <SubnetVisualizer />
        ) : lab.id === 'lab-switch-mac' || lab.interactiveTool === 'switch-cam' ? (
          <SwitchMacLearningVisual />
        ) : lab.id === 'lab-tcp-handshake' ? (
          <TcpHandshakeVisual />
        ) : lab.category === 'Routing & Switching' ? (
          <RouterForwardingVisual />
        ) : (
          /* Interactive CLI Sandbox for Windows & Linux Commands */
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                <Terminal className="h-4 w-4" />
                {t('Live Terminal Emulator (Type or Click Commands)', 'লাইভ টার্মিনাল এমুলেটর (টাইপ করুন বা কমান্ড সিলেক্ট করুন)')}
              </span>
              <button
                type="button"
                onClick={() => setTerminalHistory([])}
                className="text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1"
              >
                <RotateCcw className="h-3 w-3" />
                <span>{t('Clear Console', 'কনসোল পরিষ্কার')}</span>
              </button>
            </div>

            {/* Quick action command pills */}
            <div className="flex flex-wrap gap-2">
              {lab.steps.map((st, i) => {
                const cmd = st.commandSnippet?.split('\n')[0] || '';
                if (!cmd) return null;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleRunCommand(cmd, st.expectedOutput)}
                    className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 font-mono-code text-xs text-cyan-300 hover:border-emerald-500 hover:text-white transition-all flex items-center gap-1.5"
                  >
                    <Play className="h-3 w-3 text-emerald-400 fill-current" />
                    <span>Run: {cmd.slice(0, 32)}...</span>
                  </button>
                );
              })}
            </div>

            {/* Terminal Window Chrome */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl font-mono-code text-xs">
              <div className="bg-slate-900/90 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-[11px] text-slate-400 ml-2">netcore@lab-environment:~</span>
                </div>
                <span className="text-[10px] text-slate-500 uppercase">CLI V3.2</span>
              </div>

              <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <span className="text-emerald-400">$</span>
                      <span className="font-bold">{item.command}</span>
                    </div>
                    <pre className="text-slate-300 whitespace-pre-wrap pl-4 border-l border-slate-800 text-[11px] leading-relaxed">
                      {item.output}
                    </pre>
                  </div>
                ))}
              </div>

              {/* Terminal Form Input */}
              <form onSubmit={handleTerminalSubmit} className="p-3 bg-slate-900/50 border-t border-slate-800 flex items-center gap-2">
                <span className="text-emerald-400 font-bold">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder={t('Type a command (e.g. ping 192.168.1.20, ipconfig, ss -tulnp) and press Enter...', 'কমান্ড লিখে এন্টার চাপুন...')}
                  className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none text-xs"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-[11px] font-semibold text-emerald-300 hover:bg-emerald-500/30"
                >
                  {t('Execute', 'রান')}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* SECTIONS 7, 8, 9, 10: Step-by-Step Instructions, Commands, Expected Output & Explanations */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
          <Terminal className="h-5 w-5 text-emerald-400" />
          <h2 className="text-lg font-bold text-white">
            {t('7. Step-by-Step Practical Procedures & Commands', '৭. ধাপে ধাপে প্র্যাকটিক্যাল নির্দেশনা ও কমান্ড')}
          </h2>
        </div>

        {/* Step Navigation Tabs if multiple */}
        {lab.steps.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {lab.steps.map((st, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStepTab(i)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  activeStepTab === i
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Step {st.stepNumber}: {t(st.titleEn.slice(0, 24), st.titleBn.slice(0, 24))}...
              </button>
            ))}
          </div>
        )}

        {/* Render Step Cards */}
        {lab.steps.map((step, idx) => {
          // If multiple steps, only show active tab or all if only 1
          if (lab.steps.length > 1 && activeStepTab !== idx) return null;

          return (
            <div
              key={idx}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-md space-y-6"
            >
              {/* Step Header */}
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 font-extrabold border border-emerald-500/40 text-sm">
                  {step.stepNumber}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {t(step.titleEn, step.titleBn)}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {t(step.instructionsEn, step.instructionsBn)}
                  </p>
                </div>
              </div>

              {/* Section 8: Command Snippet & Option Breakdown */}
              {step.commandSnippet && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-cyan-400">
                      {t('8. Command to Execute:', '৮. যে কমান্ডটি টার্মিনালে চালাবেন:')}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopyCommand(step.commandSnippet!, idx)}
                      className="inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 text-xs transition-colors"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-emerald-400">{t('Copied!', 'কপি হয়েছে!')}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>{t('Copy Command', 'কমান্ড কপি')}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Command box */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono-code text-xs text-emerald-300 overflow-x-auto">
                    <code>{step.commandSnippet}</code>
                  </div>

                  {/* Command Options Explanation Breakdown */}
                  {step.commandOptionsExplanation && step.commandOptionsExplanation.length > 0 && (
                    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        {t('Command Flags & Parameter Breakdown:', 'কমান্ডের অপশন ও প্যারামিটারের ব্যাখ্যা:')}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.commandOptionsExplanation.map((opt, oIdx) => (
                          <div
                            key={oIdx}
                            className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5 flex items-start gap-2 text-xs"
                          >
                            <span className="rounded bg-cyan-950 px-2 py-0.5 font-mono-code font-bold text-cyan-300 border border-cyan-800/60 shrink-0">
                              {opt.option}
                            </span>
                            <span className="text-slate-300 text-[11px] leading-tight">
                              {t(opt.purposeEn, opt.purposeBn)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Section 9: Expected Terminal Output */}
              {step.expectedOutput && (
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-emerald-400 block">
                    {t('9. Expected Terminal Output:', '৯. টার্মিনালের সম্ভাব্য সঠিক আউটপুট:')}
                  </span>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono-code text-xs text-slate-200 overflow-x-auto leading-relaxed shadow-inner">
                    <pre className="whitespace-pre">{step.expectedOutput}</pre>
                  </div>
                </div>
              )}

              {/* Section 10: Explanation of Output */}
              {(step.outputExplanationEn || step.outputExplanationBn) && (
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-4 flex items-start gap-3">
                  <Info className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-1">
                      {t('10. Technical Explanation of Output:', '১০. আউটপুটের কারিগরি ব্যাখ্যা:')}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {t(step.outputExplanationEn || '', step.outputExplanationBn || '')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* SECTION 11: Troubleshooting Guide */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex items-center gap-2 pb-4 border-b border-slate-800 mb-6">
          <AlertTriangle className="h-5 w-5 text-amber-400" />
          <h2 className="text-base sm:text-lg font-bold text-white">
            {t('11. Troubleshooting & Failure Diagnostic Guide', '১১. ট্রাবলশুটিং ও সম্ভাব্য সমস্যার সমাধান')}
          </h2>
        </div>

        <div className="space-y-4">
          {lab.troubleshooting.map((tb, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-2"
            >
              <div className="flex items-start gap-2.5">
                <span className="rounded bg-rose-950/80 px-2 py-0.5 text-[10px] font-bold text-rose-300 border border-rose-800/60 uppercase shrink-0 mt-0.5">
                  Symptom
                </span>
                <span className="text-xs sm:text-sm font-semibold text-rose-200">
                  {t(tb.symptomEn, tb.symptomBn)}
                </span>
              </div>
              <div className="flex items-start gap-2.5 pl-2 pt-1 border-l-2 border-emerald-500/40">
                <span className="rounded bg-emerald-950/80 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-800/60 uppercase shrink-0 mt-0.5">
                  Resolution
                </span>
                <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t(tb.resolutionEn, tb.resolutionBn)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 12: Common Mistakes & Traps */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex items-center gap-2 pb-4 border-b border-slate-800 mb-6">
          <ShieldCheck className="h-5 w-5 text-rose-400" />
          <h2 className="text-base sm:text-lg font-bold text-white">
            {t('12. Common Traps & Mistakes to Avoid', '১২. শিক্ষার্থীদের সচরাচর ভুল ও সতর্কবার্তা')}
          </h2>
        </div>

        <div className="space-y-4">
          {lab.commonMistakes.map((cm, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-2"
            >
              <div className="flex items-start gap-2">
                <span className="text-rose-400 font-bold text-sm">✗</span>
                <span className="text-xs sm:text-sm text-rose-300 font-medium">
                  {t(cm.mistakeEn, cm.mistakeBn)}
                </span>
              </div>
              <div className="flex items-start gap-2 pl-4 text-xs sm:text-sm text-emerald-300">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="leading-relaxed">
                  {t(cm.correctionEn, cm.correctionBn)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 13: Practice Challenge */}
      <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/30 via-slate-900/80 to-slate-950 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex items-center gap-2 pb-4 border-b border-indigo-500/20 mb-6">
          <HelpCircle className="h-5 w-5 text-indigo-400" />
          <h2 className="text-base sm:text-lg font-bold text-white">
            {t('13. Practice Challenge & Engineering Scenario', '১৩. ব্যবহারিক চ্যালেঞ্জ ও সমস্যা সমাধান')}
          </h2>
        </div>

        <p className="text-sm text-indigo-100 leading-relaxed font-medium mb-4">
          {t(lab.practiceChallenge.challengeEn, lab.practiceChallenge.challengeBn)}
        </p>

        {/* Expandable Hint */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setShowHint(!showHint)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            {showHint ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            <span>{showHint ? t('Hide Hint', 'ইঙ্গিত লুকান') : t('Need a Hint? (Click to reveal)', 'ইঙ্গিত প্রয়োজন? (ক্লিক করুন)')}</span>
          </button>

          {showHint && (
            <div className="mt-3 rounded-2xl border border-indigo-500/30 bg-indigo-950/40 p-4 text-xs text-indigo-200 leading-relaxed">
              <strong>{t('Hint: ', 'ইঙ্গিত: ')}</strong>
              {t(lab.practiceChallenge.hintEn, lab.practiceChallenge.hintBn)}
            </div>
          )}
        </div>
      </div>

      {/* SECTION 14: Final Lab Completion Checkbox */}
      <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 p-6 sm:p-8 text-center space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-white">
          {completed
            ? t('You have completed this practical networking lab!', 'আপনি সফলভাবে এই প্র্যাকটিক্যাল ল্যাবটি সম্পন্ন করেছেন!')
            : t('Finished with the steps and verified the outputs?', 'সবগুলো ধাপ সম্পন্ন করেছেন এবং আউটপুট মিলিয়ে দেখেছেন?')}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          {t(
            'Marking this lab as complete updates your overall progress dashboard and records your hands-on mastery in your browser.',
            'ল্যাব সম্পন্ন হিসেবে চিহ্নিত করলে আপনার সামগ্রিক অগ্রগতি ড্যাশবোর্ডে যোগ হবে।'
          )}
        </p>

        <button
          type="button"
          onClick={() => toggleLabCompletion(lab.id)}
          className={`inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-bold transition-all shadow-lg ${
            completed
              ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/30 hover:bg-emerald-400'
              : 'bg-emerald-500/20 border border-emerald-500/60 text-emerald-300 hover:bg-emerald-500/30'
          }`}
        >
          <CheckCircle2 className="h-5 w-5 fill-current" />
          <span>
            {completed
              ? t('14. Lab Completed — Great Work!', '১৪. ল্যাব সম্পন্ন — চমৎকার কাজ!')
              : t('14. Mark Lab as Completed', '১৪. ল্যাব সম্পন্ন হিসেবে চিহ্নিত করুন')}
          </span>
        </button>
      </div>
    </div>
  );
};
