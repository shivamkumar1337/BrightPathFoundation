import React from 'react';
import Card from '../common/Card';

const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-6 py-3 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-6 shadow-sm">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Our Purpose & Vision
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Guided by 
              <span className="block bg-gradient-to-r from-blue-600 via-orange-500 to-green-600 bg-clip-text text-transparent mt-2">
                Purpose & Vision
              </span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-2xl opacity-50"></div>
              
              <div className="flex items-center mb-8 relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Our Mission</h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 relative z-10">
                To empower communities through comprehensive programs in education, disaster relief, 
                sports development, and food security, creating lasting positive change and building 
                resilient societies.
              </p>
              
              <ul className="space-y-4 text-gray-600 relative z-10">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                  <span>Provide quality education to underserved communities</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                  <span>Deliver rapid and effective disaster relief</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                  <span>Promote youth development through sports</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                  <span>Ensure food security for vulnerable populations</span>
                </li>
              </ul>
            </Card>

            {/* Vision */}
            <Card className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-transparent rounded-2xl opacity-50"></div>
              
              <div className="flex items-center mb-8 relative z-10">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-3xl">👁️</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Our Vision</h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 relative z-10">
                A world where every community has access to quality education, disaster preparedness, 
                recreational opportunities, and food security, enabling all individuals to reach their 
                full potential.
              </p>
              
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="text-3xl mb-3">🌍</div>
                  <div className="font-semibold text-gray-900 mb-1">Global Impact</div>
                  <div className="text-sm text-gray-600">Worldwide reach</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="text-3xl mb-3">🤝</div>
                  <div className="font-semibold text-gray-900 mb-1">Community Focus</div>
                  <div className="text-sm text-gray-600">Local partnerships</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="text-3xl mb-3">💡</div>
                  <div className="font-semibold text-gray-900 mb-1">Innovation</div>
                  <div className="text-sm text-gray-600">Creative solutions</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="text-3xl mb-3">🌱</div>
                  <div className="font-semibold text-gray-900 mb-1">Sustainability</div>
                  <div className="text-sm text-gray-600">Long-term impact</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;