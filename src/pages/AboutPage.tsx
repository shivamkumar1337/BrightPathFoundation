import React from 'react';
import MissionVisionSection from '../components/about/MissionVisionSection';
import TeamSection from '../components/about/TeamSection';
import AboutSection from '../components/home/AboutSection';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
        <AboutSection />
        <MissionVisionSection />
        <TeamSection />
    </div>
  );
};

export default AboutPage;