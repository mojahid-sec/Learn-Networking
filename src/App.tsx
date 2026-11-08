import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ProgressProvider } from './context/ProgressContext';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { RoadmapPage } from './pages/RoadmapPage';
import { LessonsPage } from './pages/LessonsPage';
import { LessonDetailPage } from './pages/LessonDetailPage';
import { LabsPage } from './pages/LabsPage';
import { LabDetailPage } from './pages/LabDetailPage';
import { DiagramsPage } from './pages/DiagramsPage';
import { PracticePage } from './pages/PracticePage';
import { ProgressPage } from './pages/ProgressPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProgressProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="roadmap" element={<RoadmapPage />} />
                <Route path="courses" element={<RoadmapPage />} />
                <Route path="lessons" element={<LessonsPage />} />
                <Route path="lessons/:lessonId" element={<LessonDetailPage />} />
                <Route path="labs" element={<LabsPage />} />
                <Route path="labs/:labId" element={<LabDetailPage />} />
                <Route path="diagrams" element={<DiagramsPage />} />
                <Route path="practice" element={<PracticePage />} />
                <Route path="quizzes" element={<PracticePage />} />
                <Route path="progress" element={<ProgressPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ProgressProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
