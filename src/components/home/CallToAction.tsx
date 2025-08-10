import React from 'react';
import Button from '../common/Button';
import { useContent } from '../../hooks/useContent';

const CallToAction: React.FC = () => {
  const { content, loading, error } = useContent('cta');

  // Default actions as fallback
  const defaultActions = [
    {
      icon: "💝",
      title: "Make a Donation",
      description: "Your financial support directly funds our programs and helps us reach more communities in need.",
      highlight: "Starting from $25",
      color: "bg-red-500",
      iconBg: "bg-red-100",
      textColor: "text-red-600"
    },
    {
      icon: "🤝",
      title: "Volunteer Your Time",
      description: "Share your skills and passion with our communities. From teaching to building, every skill matters.",
      highlight: "Flexible schedules available",
      color: "bg-blue-500",
      iconBg: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      icon: "📢",
      title: "Spread the Word",
      description: "Help us reach more people who want to make a difference. Share our mission with your network.",
      highlight: "Social media toolkit provided",
      color: "bg-green-500",
      iconBg: "bg-green-100",
      textColor: "text-green-600"
    }
  ];

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="animate-pulse">
                <div className="bg-gray-200 h-8 w-64 rounded mx-auto mb-4"></div>
                <div className="bg-gray-300 h-12 w-full max-w-2xl rounded mx-auto mb-6"></div>
                <div className="bg-gray-200 h-6 w-full max-w-3xl rounded mx-auto"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse bg-white rounded-2xl p-8 shadow-lg">
                  <div className="bg-gray-200 w-20 h-20 rounded-2xl mb-6 mx-auto"></div>
                  <div className="bg-gray-200 h-6 w-32 rounded mx-auto mb-4"></div>
                  <div className="space-y-2">
                    <div className="bg-gray-200 h-4 w-full rounded"></div>
                    <div className="bg-gray-200 h-4 w-4/5 rounded mx-auto"></div>
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
          <p className="text-red-600">Error loading call to action: {error}</p>
        </div>
      </section>
    );
  }

  // Use database content or fallback to defaults
  const actions = content?.metadata?.actions || defaultActions;
  const title = content?.title || 'Ready to Light Up Someone\'s Path?';
  const description = content?.content || 'Join thousands of changemakers who are helping us create brighter futures. Every contribution, every volunteer hour, every shared story makes a difference.';

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-12 bg-orange-400 origin-bottom"
              style={{
                transform: `rotate(${i * 22.5}deg) translateY(-24px)`,
                left: '50%',
                bottom: '50%',
                marginLeft: '-2px'
              }}
            />
          ))}
          <div className="absolute inset-0 bg-orange-400 rounded-full w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="absolute bottom-20 left-20 text-8xl opacity-30">
          🤝
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-6 py-3 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-6 shadow-sm">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Get Involved Today
            </span>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {title.includes('Light Up') ? (
                <>
                  {title.split('Light Up')[0]}
                  <span className="block bg-gradient-to-r from-blue-600 via-orange-500 to-green-600 bg-clip-text text-transparent mt-2">
                    Light Up Someone's Path?
                  </span>
                </>
              ) : (
                <>
                  {title}
                  <span className="block bg-gradient-to-r from-blue-600 via-orange-500 to-green-600 bg-clip-text text-transparent mt-2">
                    Someone's Path?
                  </span>
                </>
              )}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Ways to Help Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {actions.map((action: any, index: number) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100 to-transparent rounded-2xl opacity-50"></div>
                
                {/* Icon */}
                <div className={`relative w-20 h-20 ${action.iconBg || 'bg-gray-100'} rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <span className="relative z-10">{action.icon}</span>
                </div>
                
                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className={`text-2xl font-bold mb-4 ${action.textColor || 'text-gray-700'} group-hover:text-orange-600 transition-colors duration-300`}>
                    {action.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {action.description}
                  </p>
                  <div className="text-orange-600 font-semibold bg-orange-50 px-4 py-2 rounded-full inline-block">
                    {action.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="text-center mb-12">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                variant="primary" 
                size="lg" 
                className="min-w-48 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                // onClick={() => navigate(ROUTES.DONATE)}
              >
                ❤️ Donate Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="min-w-48 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 transition-all duration-300"
                // onClick={() => navigate(ROUTES.VOLUNTEER)}
              >
                🌟 Become a Volunteer
              </Button>
            </div>
          </div>
          
          {/* Trust Message */}
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-lg text-gray-700 font-medium mb-6">
                🔒 <strong>100% Secure</strong> • <strong>Tax Deductible</strong> • <strong>Transparent Impact Reporting</strong>
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Charity Navigator 4-Star Rating
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  GuideStar Gold Seal
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  85% Direct Program Funding
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;