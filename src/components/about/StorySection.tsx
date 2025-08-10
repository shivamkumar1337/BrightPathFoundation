import React from 'react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const StorySection: React.FC = () => {
  const navigate = useNavigate();
  
  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "Started with a small team of 5 volunteers in a single community",
      icon: "🌱",
      color: "bg-green-500"
    },
    {
      year: "2013",
      title: "First Major Project",
      description: "Built our first school serving 200 children in rural areas",
      icon: "📚",
      color: "bg-blue-500"
    },
    {
      year: "2016",
      title: "Disaster Response",
      description: "Launched emergency response program during major flood crisis",
      icon: "🚨",
      color: "bg-red-500"
    },
    {
      year: "2018",
      title: "Sports Initiative",
      description: "Introduced youth sports programs in 10 communities",
      icon: "⚽",
      color: "bg-green-500"
    },
    {
      year: "2020",
      title: "Food Security",
      description: "Started community kitchen program during pandemic",
      icon: "🍽️",
      color: "bg-orange-500"
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Now serving 75+ communities across multiple countries",
      icon: "🌍",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Story Content */}
            <div>
              <span className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6 shadow-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Our Journey
              </span>
              
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Our Story of
                <span className="block bg-gradient-to-r from-blue-600 via-orange-500 to-green-600 bg-clip-text text-transparent mt-2">
                  Impact & Growth
                </span>
              </h2>
              <div className="w-24 h-1 bg-blue-500 rounded-full mb-8"></div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl text-gray-800 font-medium">
                  What started as a small group of passionate volunteers in 2010 has grown into a 
                  global organization making a real difference in communities worldwide.
                </p>
                <p>
                  Our journey began when our founder, inspired by the resilience of a flood-affected 
                  community, decided to take action. From providing immediate relief to building 
                  long-term solutions, we've learned that sustainable change comes from working 
                  alongside communities, not just for them.
                </p>
                <p>
                  Today, we're proud to have impacted over 10,000 lives through our comprehensive 
                  programs in education, disaster relief, sports development, and food security. 
                  But our story is just beginning.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={() => navigate('/story')}
                >
                  📖 Read Our Full Story
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50"
                  onClick={() => navigate('/impact')}
                >
                  📊 View Impact Report
                </Button>
              </div>
            </div>

            {/* Enhanced Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-orange-500 to-green-500 rounded-full"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start group">
                    <div className={`absolute left-4 w-8 h-8 ${milestone.color} rounded-full flex items-center justify-center text-white text-lg shadow-lg group-hover:scale-125 transition-transform duration-300 border-4 border-white`}>
                      <span className="text-sm">{milestone.icon}</span>
                    </div>
                    <div className="ml-20 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mr-4">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;