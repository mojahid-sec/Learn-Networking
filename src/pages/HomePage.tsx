import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { LearningOverview } from '../components/home/LearningOverview';
import { RoadmapSection } from '../components/home/RoadmapSection';
import { LabsSection } from '../components/home/LabsSection';
import { VisualSection } from '../components/home/VisualSection';
import { AboutPreviewSection } from '../components/home/AboutPreviewSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <LearningOverview />
      <RoadmapSection />
      <LabsSection />
      <VisualSection />
      <AboutPreviewSection />
    </div>
  );
};
