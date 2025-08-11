import React from 'react';
// import Button from '../common/Button';
import { useContent } from '../../hooks/useContent';
// import { ROUTES } from '../../utils/routes';
// import { useNavigate } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const { content, loading, error } = useContent('about_preview');
  // const navigate = useNavigate();

  // Default features as fallback
  const defaultFeatures = [
    {
      icon: "📚",
      title: "Education",
      description: "Building schools, training teachers, and providing educational resources to unlock potential in underserved communities.",
      color: "bg-blue-500",
      iconBg: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      icon: "🚨",
      title: "Disaster Relief",
      description: "Rapid emergency response and long-term recovery support for communities affected by natural disasters.",
      color: "bg-red-500",
      iconBg: "bg-red-100",
      textColor: "text-red-600"
    },
    {
      icon: "⚽",
      title: "Youth Sports",
      description: "Empowering young people through sports programs that build character, leadership, and healthy lifestyles.",
      color: "bg-green-500",
      iconBg: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      icon: "🍽️",
      title: "Food Security",
      description: "Ensuring access to nutritious meals and supporting sustainable food systems in vulnerable communities.",
      color: "bg-orange-500",
      iconBg: "bg-orange-100",
      textColor: "text-orange-600"
    }
  ];

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Loading skeleton */}
            <div className="space-y-8">
              <div className="animate-pulse">
                <div className="bg-gray-200 h-8 w-64 rounded mb-4"></div>
                <div className="bg-gray-300 h-12 w-full rounded mb-6"></div>
                <div className="space-y-4">
                  <div className="bg-gray-200 h-4 w-full rounded"></div>
                  <div className="bg-gray-200 h-4 w-5/6 rounded"></div>
                  <div className="bg-gray-200 h-4 w-4/5 rounded"></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse bg-white rounded-2xl p-8 shadow-lg">
                  <div className="bg-gray-200 w-20 h-20 rounded-2xl mb-6"></div>
                  <div className="bg-gray-200 h-6 w-24 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="bg-gray-200 h-3 w-full rounded"></div>
                    <div className="bg-gray-200 h-3 w-4/5 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600">Error loading about section: {error}</p>
        </div>
      </section>
    );
  }

  // Use database content or fallback to defaults
  const features = content?.metadata?.programs || defaultFeatures;
  const title = content?.title || '';
  const description = content?.subtitle||"";
  const subdiscription = content?.content||"";
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center px-6 py-3 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-6 shadow-sm">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                About us
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                {title.split(' ').slice(0, 3).join(' ')}
                <span className="block bg-gradient-to-r from-blue-600 via-orange-500 to-green-600 bg-clip-text text-transparent mt-2">
                  {title.split(' ').slice(3).join(' ')}
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl text-gray-800 font-medium">
                {description}
              </p>
              <p className="text-lg text-gray-600">
                {subdiscription}
              </p>
            </div>
            
          </div>

          {/* Right Content - Enhanced Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature: any, index: number) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl p-8 shadow-lg  border border-gray-100"
                // style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100 to-transparent rounded-2xl opacity-50"></div>
                
                {/* Icon */}
                <div className={`relative w-20 h-20 ${feature.iconBg || 'bg-gray-100'} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-md`}>
                  <span className="relative z-10">{feature.icon}</span>
                  <div className={`absolute inset-0 ${feature.color || 'bg-gray-500'} rounded-2xl opacity-0`}></div>
                </div>
                
                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className={`text-2xl font-bold mb-4 ${feature.textColor || 'text-gray-700'}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;