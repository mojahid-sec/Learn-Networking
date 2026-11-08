import React, { createContext, useContext, useState, useEffect } from 'react';
import { calculateProgress } from '../utils/networkUtils';
import { modulesData } from '../data/modulesData';
import { labsData } from '../data/labsData';

export interface QuizScoreRecord {
  score: number;
  total: number;
  percent: number;
  date: string;
}

interface ProgressState {
  completedLessons: string[];
  completedLabs: string[];
  quizScores: Record<string, QuizScoreRecord>;
  streakDays: number;
}

interface ProgressContextType {
  completedLessons: string[];
  completedLabs: string[];
  quizScores: Record<string, QuizScoreRecord>;
  isLessonCompleted: (id: string) => boolean;
  isLabCompleted: (id: string) => boolean;
  toggleLessonCompletion: (id: string) => void;
  toggleLabCompletion: (id: string) => void;
  recordQuizScore: (quizId: string, score: number, total: number) => void;
  totalModulesCount: number;
  totalLessonsCount: number;
  totalLabsCount: number;
  overallProgressPercentage: number;
  resetProgress: () => void;
}

const STORAGE_KEY = 'netcore_user_progress';

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ProgressState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          return {
            completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
            completedLabs: Array.isArray(parsed.completedLabs) ? parsed.completedLabs : [],
            quizScores: parsed.quizScores && typeof parsed.quizScores === 'object' ? parsed.quizScores : {},
            streakDays: typeof parsed.streakDays === 'number' ? parsed.streakDays : 0,
          };
        }
      }
    } catch {
      // fallback to safe defaults on parse error or localStorage restriction
    }
    // Default empty progress for new students and visitors, stored individually in their browser LocalStorage
    return {
      completedLessons: [],
      completedLabs: [],
      quizScores: {},
      streakDays: 0,
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const totalModulesCount = modulesData.length;
  const totalLessonsCount = modulesData.reduce((acc, m) => acc + m.lessons.length, 0);
  const totalLabsCount = labsData.length;

  const isLessonCompleted = (id: string) => state.completedLessons.includes(id);
  const isLabCompleted = (id: string) => state.completedLabs.includes(id);

  const toggleLessonCompletion = (id: string) => {
    setState(prev => {
      const exists = prev.completedLessons.includes(id);
      const updated = exists
        ? prev.completedLessons.filter(item => item !== id)
        : [...prev.completedLessons, id];
      return { ...prev, completedLessons: updated };
    });
  };

  const toggleLabCompletion = (id: string) => {
    setState(prev => {
      const exists = prev.completedLabs.includes(id);
      const updated = exists
        ? prev.completedLabs.filter(item => item !== id)
        : [...prev.completedLabs, id];
      return { ...prev, completedLabs: updated };
    });
  };

  const recordQuizScore = (quizId: string, score: number, total: number) => {
    const percent = total > 0 ? Math.round((score / total) * 100) : 0;
    setState(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [quizId]: {
          score,
          total,
          percent,
          date: new Date().toLocaleDateString()
        }
      }
    }));
  };

  const resetProgress = () => {
    setState({
      completedLessons: [],
      completedLabs: [],
      quizScores: {},
      streakDays: 0,
    });
  };

  const totalQuizzesPassed = Object.values(state.quizScores).filter(q => q.percent >= 70).length;
  const totalCompletedItems = state.completedLessons.length + state.completedLabs.length + totalQuizzesPassed;
  const totalTargetItems = totalLessonsCount + totalLabsCount + 1; // +1 for comprehensive quiz
  const overallProgressPercentage = calculateProgress(totalCompletedItems, totalTargetItems);

  return (
    <ProgressContext.Provider
      value={{
        completedLessons: state.completedLessons,
        completedLabs: state.completedLabs,
        quizScores: state.quizScores,
        isLessonCompleted,
        isLabCompleted,
        toggleLessonCompletion,
        toggleLabCompletion,
        recordQuizScore,
        totalModulesCount,
        totalLessonsCount,
        totalLabsCount,
        overallProgressPercentage,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
