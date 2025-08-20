import React from 'react';
import Card from '../common/Card';
import { useContent } from '../../hooks/useContent';

const MissionVisionSection: React.FC = () => {
  const { content, loading, error } = useContent('mission_vision');

  // Default content as fallback
  const defaultContent = {
    mission: {
      title: "Our Mission",
      description: "To empower communities through comprehensive programs in education, disaster relief, sports development, and food security, creating lasting positive change and building resilient societies.",
      points: [
        "Provide quality education to underserved communities",
        "Deliver rapid and effective disaster relief",
        "Promote youth development through sports",
        "Ensure food security for vulnerable populations"
      ]
    },
    vision: {
      title: "Our Vision",
      description: "A world where every community has access to quality education, disaster preparedness, recreational opportunities, and food security, enabling all individuals to reach their full potential.",
      highlights: [
        { icon: "🌍", title: "Global Impact", subtitle: "Worldwide reach" },
        { icon: "🤝", title: "Community Focus", subtitle: "Local partnerships" },
        { icon: "💡", title: "Innovation", subtitle: "Creative solutions" },
        { icon: "🌱", title: "Sustainability", subtitle: "Long-term impact" }
      ]
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse bg-white rounded-2xl p-8 shadow-lg">
                  <div className="bg-gray-200 h-8 w-48 rounded mb-8"></div>
                  <div className="space-y-4 mb-8">
                    <div className="bg-gray-200 h-4 w-full rounded"></div>
                    <div className="bg-gray-200 h-4 w-5/6 rounded"></div>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((j) => (
                      <div key={j} className="bg-gray-200 h-4 w-4/5 rounded"></div>
                    ))}
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
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600">Error loading mission & vision: {error}</p>
        </div>
      </section>
    );
  }

  const missionVisionData = content?.metadata || defaultContent;
  const mission = missionVisionData.mission || defaultContent.mission;
  const vision = missionVisionData.vision || defaultContent.vision;

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100 to-transparent rounded-2xl opacity-50"></div>
              
              <div className="flex items-center mb-8 relative z-10">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mr-6 shadow-md">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {mission.title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 relative z-10">
                {mission.description}
              </p>
              
              {mission.points && (
                <ul className="space-y-4 text-gray-600 relative z-10">
                  {mission.points.map((point: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-orange-700 text-sm">✓</span>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>

            {/* Vision */}
            <Card className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200 to-transparent rounded-2xl opacity-50"></div>
              
              <div className="flex items-center mb-8 relative z-10">
                <div className="w-16 h-16 bg-orange-200 rounded-2xl flex items-center justify-center mr-6 shadow-md">
                  <span className="text-3xl">👁️</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {vision.title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 relative z-10">
                {vision.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {vision.highlights.map((highlight: any, index: number) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100">
                    <div className="text-3xl mb-3">{highlight.icon}</div>
                    <div className="font-semibold text-gray-900 mb-1">{highlight.title}</div>
                    <div className="text-sm text-gray-600">{highlight.subtitle}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;