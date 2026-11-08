export interface StepByStepItem {
  step: number;
  titleEn: string;
  titleBn: string;
  detailEn: string;
  detailBn: string;
}

export interface TechnicalTermItem {
  term: string;
  banglaMeaning: string;
  explanationEn: string;
  explanationBn: string;
}

export interface AdvantageDisadvantageItem {
  en: string;
  bn: string;
}

export interface TechnologyComparisonItem {
  techA: string;
  techB: string;
  criteria: string;
  diffEn: string;
  diffBn: string;
}

export interface PracticalCommandItem {
  titleEn: string;
  titleBn: string;
  command: string;
  explanationEn: string;
  explanationBn: string;
  expectedOutput?: string;
}

export interface CommonMistakeItem {
  mistakeEn: string;
  mistakeBn: string;
  correctionEn: string;
  correctionBn: string;
}

export interface QuizQuestionItem {
  questionEn: string;
  questionBn: string;
  options: string[];
  correctIndex: number;
  explanationEn: string;
  explanationBn: string;
}

export interface PracticeQuestionItem {
  questionEn: string;
  questionBn: string;
  scenarioEn: string;
  scenarioBn: string;
}

export interface DetailedLessonData {
  id: string;
  moduleId: string;
  moduleTitleEn: string;
  moduleTitleBn: string;
  levelNumber: number;
  difficulty: 'Beginner' | 'Elementary' | 'Intermediate' | 'Advanced';
  durationMinutes: number;
  
  // 1. Topic Title
  topicTitleEn: string;
  topicTitleBn: string;

  // 2 & 3. Definition & Meaning
  englishDefinition: string;
  banglaMeaning: string;

  // 4 & 5. Detailed Explanations
  englishExplanation: string;
  banglaExplanation: string;

  // 6. Why This Technology Is Needed
  whyNeededEn: string;
  whyNeededBn: string;

  // 7. Where It Is Used
  whereUsedEn: string;
  whereUsedBn: string;

  // 8. How It Works
  howItWorksEn: string;
  howItWorksBn: string;

  // 9. Internal Working Process
  internalMechanismEn: string;
  internalMechanismBn: string;

  // 10. Step-by-Step Explanation
  stepByStep: StepByStepItem[];

  // 11. Real-Life Examples & Analogies
  realLifeExample: {
    en: string;
    bn: string;
  };

  // 12. Technical Terms
  technicalTerms: TechnicalTermItem[];

  // 13. Advantages
  advantages: AdvantageDisadvantageItem[];

  // 14. Disadvantages & Limitations
  disadvantages: AdvantageDisadvantageItem[];

  // 15. Comparison With Related Technologies
  comparison: TechnologyComparisonItem[];

  // 16. Practical Examples & Commands
  practicalCommands: PracticalCommandItem[];

  // 17. Common Mistakes
  commonMistakes: CommonMistakeItem[];

  // 18. Important Notes & Tips
  importantNotes: { en: string; bn: string }[];

  // 19. Knowledge Check (Interactive Quiz)
  knowledgeCheck: QuizQuestionItem[];

  // 20. Practice Questions & Scenario Challenges
  practiceQuestions: PracticeQuestionItem[];

  // Interactive Simulator Hook
  interactiveSimulator?: 'router' | 'switch' | 'dns' | 'dhcp' | 'tcp' | 'subnet' | 'generic';
}
