import React from 'react';
import { useRelatedProjects } from '../../hooks/useProjects';
import type { Project } from '../../types';
import Card from '../common/Card';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

interface RelatedProjectsProps {
  currentProject: Project;
}

const RelatedProjects: React.FC<RelatedProjectsProps> = ({ currentProject }) => {
  const { projects, loading } = useRelatedProjects(currentProject.category, currentProject.id);
  const navigate = useNavigate();

  const getCategoryInfo = (category: string) => {
    const categoryMap = {
      'education': { icon: '📚', color: 'bg-blue-500', name: 'Education' },
      'disaster-relief': { icon: '🚨', color: 'bg-red-500', name: 'Disaster Relief' },
      'sports': { icon: '⚽', color: 'bg-green-500', name: 'Sports' },
      'food-distribution': { icon: '🍽️', color: 'bg-orange-500', name: 'Food Security' }
    };
    return categoryMap[category as keyof typeof categoryMap] || categoryMap.education;
  };

  if (loading || projects.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-6 py-3 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-6 shadow-sm">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Related Projects
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              More Projects
              <span className="block bg-gradient-to-r from-blue-600 via-orange-500 to-green-600 bg-clip-text text-transparent mt-2">
                Making Impact
              </span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.slice(0, 3).map((project) => {
              const categoryInfo = getCategoryInfo(project.category);
              
              return (
                <Card 
                  key={project.id} 
                  className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => navigate(`/work/${project.slug}`)}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.featured_image || '/api/placeholder/400/300'}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`${categoryInfo.color} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center shadow-lg`}>
                        <span className="mr-2">{categoryInfo.icon}</span>
                        {categoryInfo.name}
                      </span>
                    </div>
                    
                    {/* Location */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center text-sm">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {project.location || 'Multiple Locations'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {project.beneficiaries > 0 && (
                          <span>{project.beneficiaries.toLocaleString()} impacted</span>
                        )}
                      </div>
                      <span className="text-orange-600 font-medium text-sm group-hover:underline">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center">
            <Button 
              variant="primary" 
              size="lg" 
              className="shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={() => navigate('/work')}
            >
              🌟 View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;