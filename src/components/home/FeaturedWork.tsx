import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { useFeaturedProjects } from '../../hooks/useProjects';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const FeaturedWork: React.FC = () => {
  const { projects, loading, error } = useFeaturedProjects();
  const navigate = useNavigate();

  const getCategoryInfo = (category: string) => {
    const categoryMap = {
      'education': { 
        icon: '📚', 
        color: 'bg-blue-500', 
        name: 'Education',
      },
      'disaster-relief': { 
        icon: '🚨', 
        color: 'bg-red-500', 
        name: 'Disaster Relief',
      },
      'sports': { 
        icon: '⚽', 
        color: 'bg-green-500', 
        name: 'Sports',
      },
      'food-distribution': { 
        icon: '🍽️', 
        color: 'bg-orange-500', 
        name: 'Food Security',
      }
    };
    return categoryMap[category as keyof typeof categoryMap] || categoryMap.education;
  };

  const handleProjectClick = (slug: string | undefined) => {
    if (!slug) return;
    navigate(`/work/project/${slug}`);
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loading Our Work...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-300 h-64 rounded-t-lg mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600">Error loading projects: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8  bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <span className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Our Work
          </span> */}
          <h2 className="flex flex-row justify-center text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bright Paths We've 
            <span className="block bg-gradient-to-r px-4 from-blue-600 via-orange-500 to-green-600 bg-clip-text text-transparent">
              Created Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we're lighting the way to brighter futures across our four core program areas, 
            creating lasting positive change in communities worldwide.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => {
            const categoryInfo = getCategoryInfo(project.category);
            const impactText = project.impact_metrics?.literacy_improvement || 
                             project.impact_metrics?.response_time || 
                             project.impact_metrics?.youth_engagement || 
                             project.impact_metrics?.meals_served || 
                             'Positive Impact';
            
            return (
              <Card 
                key={project.id} 
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => handleProjectClick(project.slug)}
              >
                <div className="relative overflow-hidden h-64">
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
                  
                  {/* Impact Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {impactText}
                    </span>
                  </div>

                  {/* Bottom Stats */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {project.location || 'Multiple Locations'}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        {project.beneficiaries.toLocaleString()} impacted
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Click indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-medium group-hover:underline">
                      Learn More →
                    </span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-500">
                      Click to view details
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`h-1 ${categoryInfo.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to See More Impact?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Explore our complete portfolio of projects and discover how we're making a difference.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => navigate(ROUTES.WORK)}
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;