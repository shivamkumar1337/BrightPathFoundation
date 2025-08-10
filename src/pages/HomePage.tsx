import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import FeaturedWork from '../components/home/FeaturedWork';
import StatsSection from '../components/home/StatsSection';
// import TestimonialsSection from '../components/home/TestimonialsSection';
import CallToAction from '../components/home/CallToAction';
// import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedWork />
        <StatsSection />
        {/* <TestimonialsSection /> */}
        <CallToAction />
      </main>
    </div>
  );
};

export default HomePage;