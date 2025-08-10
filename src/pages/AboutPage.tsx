import React from 'react';
import MissionVisionSection from '../components/about/MissionVisionSection';
import TeamSection from '../components/about/TeamSection';
import StorySection from '../components/about/StorySection';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
        <MissionVisionSection />
        <StorySection />
        <TeamSection />
    </div>
  );
};

export default AboutPage;