import React from 'react';
import type { Project } from '../../types';

interface ProjectImpactProps {
  project: Project;
}

const ProjectImpact: React.FC<ProjectImpactProps> = ({ project }) => {
  // Parse impact metrics from JSONB
  const impactMetrics = project.impact_metrics || {};
  
  const getImpactData = () => {
    const metrics = [];
    
    if (impactMetrics.literacy_improvement) {
      metrics.push({
        icon: '📚',
        value: impactMetrics.literacy_improvement,
        label: 'Literacy Improvement',
        color: 'text-blue-600'
      });
    }
    
    if (impactMetrics.response_time) {
      metrics.push({
        icon: '⚡',
        value: impactMetrics.response_time,
        label: 'Response Time',
        color: 'text-red-600'
      });
    }
    
    if (impactMetrics.youth_engagement) {
      metrics.push({
        icon: '⚽',
        value: impactMetrics.youth_engagement,
        label: 'Youth Engagement',
        color: 'text-green-600'
      });
    }
    
    if (impactMetrics.meals_served) {
      metrics.push({
        icon: '🍽️',
        value: impactMetrics.meals_served,
        label: 'Meals Served',
        color: 'text-orange-600'
      });
    }

    // Add default metrics if none exist
    if (metrics.length === 0) {
      metrics.push(
        {
          icon: '👥',
          value: project.beneficiaries?.toLocaleString() || '0',
          label: 'People Impacted',
          color: 'text-blue-600'
        },
        {
          icon: '🎯',
          value: project.status === 'completed' ? '100%' : 'Ongoing',
          label: 'Progress',
          color: 'text-green-600'
        }
      );
    }
    
    return metrics;
  };

  const impactData = getImpactData();

  return (
    <section className="space-y-8">
      <div>
        <span className="inline-flex items-center px-6 py-3 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6 shadow-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Project Impact
        </span>
        
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Measuring Our
          <span className="block bg-gradient-to-r from-blue-600 via-orange-500 to-green-600 bg-clip-text text-transparent mt-1">
            Impact
          </span>
        </h2>
        <div className="w-16 h-1 bg-green-500 rounded-full mb-8"></div>
      </div>

      {/* Impact Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {impactData.map((metric, index) => (
          <div 
            key={index}
            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-100 to-transparent rounded-2xl opacity-50"></div>
            
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <span className="text-2xl">{metric.icon}</span>
              </div>
              <div className={`text-3xl font-bold mb-2 ${metric.color} group-hover:scale-105 transition-transform duration-300`}>
                {metric.value}
              </div>
              <div className="text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Impact Story */}
      <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 border border-orange-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">📈</span>
          Impact Story
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          {project.status === 'completed' 
            ? `This project has successfully completed its mission, creating lasting positive change in ${project.location || 'the community'}. The impact continues to benefit ${project.beneficiaries?.toLocaleString() || 'many'} people and their families.`
            : `This ongoing project continues to make a difference in ${project.location || 'the community'}. We're working closely with local partners to ensure sustainable impact that will benefit ${project.beneficiaries?.toLocaleString() || 'many'} people for years to come.`
          }
        </p>
        
        {project.status === 'active' && (
          <div className="bg-white rounded-xl p-6 border border-orange-200">
            <h4 className="font-semibold text-gray-900 mb-3">Current Progress</h4>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div 
                className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-500"
                style={{ width: '75%' }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>75% Complete</span>
              <span>On Track</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectImpact;