import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import { useContent } from '../../hooks/useContent';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const HeroSection: React.FC = () => {
  const { content, loading, error } = useContent('hero_section');
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  // Default background images (fallback)
  const defaultImages = [
    '/4.jpg',
    '/5.jpg',
  ];

  const backgroundImages = content?.metadata?.background_images || defaultImages;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-red-600">Error loading content: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative text-white section-padding overflow-hidden min-h-screen flex items-center">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((image: string, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-orange-900/80"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {content?.title || 'Lighting the Way to a Brighter Tomorrow'}
            </h1>
            <div className="w-24 h-1 bg-yellow-300 mx-auto rounded-full mb-6"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            {content?.content || 'Join Bright Path Foundation in our mission to create lasting positive change through education, disaster relief, youth sports, and food security programs worldwide.'}
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button variant="secondary" size="lg" className="min-w-48" onClick={() => navigate(ROUTES.WORK)}>
                  🌟 Get Involved
                </Button>
                <Button variant="outline-orange" size="lg" className="min-w-48 text-white border-white hover:bg-white hover:text-orange-600" onClick={() => navigate(ROUTES.ABOUT)}>
                  📖 Our Story
                </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {backgroundImages.map((_:any, index:number) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-300 scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length)}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;