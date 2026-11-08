export type DifficultyTier = 'Beginner' | 'Elementary' | 'Intermediate' | 'Advanced';

export type VisualType = 
  | 'Interactive Diagram' 
  | 'Animated Packet Flow' 
  | 'Topology View' 
  | 'Live Calculation Matrix' 
  | 'Protocol State Graph' 
  | 'CLI Simulator';

export interface VisualPlan {
  visualType: VisualType;
  descriptionEn: string;
  descriptionBn: string;
}

export interface CurriculumTopic {
  id: string;
  titleEn: string;
  titleBn: string;
  durationMinutes: number;
  difficulty: DifficultyTier;
  visualPlan: VisualPlan;
  keyConcepts: string[];
  summaryEn: string;
  summaryBn: string;
}

export interface CurriculumModule {
  id: string;
  levelNumber: number; // 1 to 12
  tier: DifficultyTier;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  estimatedHours: number;
  iconName: string;
  prerequisites: string[];
  relatedLabs: string[];
  topics: CurriculumTopic[];
}

export interface LevelGroup {
  levelNumber: number;
  tier: DifficultyTier;
  titleEn: string;
  titleBn: string;
  descriptionEn: string;
  descriptionBn: string;
  modules: CurriculumModule[];
}
