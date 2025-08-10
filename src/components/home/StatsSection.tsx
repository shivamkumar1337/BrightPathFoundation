import React from 'react';
import { useContent } from '../../hooks/useContent';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const StatsSection: React.FC = () => {
  const { content, loading, error } = useContent('stats');
  const navigate = useNavigate();

  // Default stats as fallback
  const defaultStats = [
    { 
      number: "15+", 
      label: "Years of Impact", 
      icon: "✨",
      description: "Dedicated service to building brighter futures",
      color: "text-orange-500"
    },
    { 
      number: "10,000+", 
      label: "Lives Transformed", 
      icon: "❤️",
      description: "Individuals directly impacted by our programs",
      color: "text-blue-500"
    },
    { 
      number: "75+", 
      label: "Communities Served", 
      icon: "🏘️",
      description: "Villages and neighborhoods we call home",
      color: "text-green-500"
    },
    { 
      number: "150+", 
      label: "Active Projects", 
      icon: "🎯",
      description: "Successful initiatives across all program areas",
      color: "text-purple-500"
    }
  ];

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-r from-orange-500 via-blue-600 to-green-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="animate-pulse">
                <div className="bg-white/20 h-8 w-64 rounded mx-auto mb-4"></div>
                <div className="bg-white/20 h-12 w-96 rounded mx-auto mb-6"></div>
                <div className="bg-white/10 h-6 w-full max-w-3xl rounded mx-auto"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center animate-pulse bg-white/10 rounded-2xl p-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4"></div>
                  <div className="bg-white/20 h-8 w-24 rounded mx-auto mb-2"></div>
                  <div className="bg-white/10 h-4 w-32 rounded mx-auto mb-2"></div>
                  <div className="bg-white/10 h-3 w-full rounded"></div>
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
      <section className="py-20 bg-gradient-to-r from-orange-500 via-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">Error loading statistics: {error}</p>
        </div>
      </section>
    );
  }

  // Use database content or fallback to defaults
  const stats = content?.metadata?.stats || defaultStats;
  const title = content?.title || 'Our Impact Shines Bright';

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-blue-600 to-green-600 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-8 bg-white origin-bottom"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-16px)`,
                left: '50%',
                bottom: '50%',
                marginLeft: '-2px'
              }}
            />
          ))}
          <div className="absolute inset-0 bg-white rounded-full w-6 h-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-white rounded-full opacity-30 animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-6 py-3 bg-white/20 text-white rounded-full text-sm font-bold mb-6 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
              Impact by the Numbers
            </span>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              {title.includes('Bright') ? (
                <>
                  {title.split('Bright')[0]}
                  <span className="text-yellow-300">Bright</span>
                  {title.split('Bright')[1]}
                </>
              ) : (
                title
              )}
            </h2>
            <div className="w-24 h-1 bg-yellow-300 mx-auto rounded-full mb-8"></div>
            
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Every number tells a story of hope, transformation, and the incredible power 
              of communities working together toward a brighter tomorrow.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat: any, index: number) => (
              <div 
                key={index} 
                className="group relative bg-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <span className="text-4xl relative z-10">{stat.icon}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center relative z-10">
                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold mb-3 text-yellow-300 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-xl font-semibold text-white mb-4">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-white/80 text-sm leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
              <p className="text-xl text-white/90 font-medium mb-6">
                Together, we're not just changing numbers – we're changing lives, one bright path at a time.
              </p>
              <button 
                onClick={() => navigate(ROUTES.ABOUT)}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                Join Our Mission 🤝
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;