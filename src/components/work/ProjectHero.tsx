import React from 'react';
import type { Project } from '../../types';

interface ProjectHeroProps {
  project: Project;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ project }) => {
  const getCategoryInfo = (category: string) => {
    const categoryMap = {
      'education': { 
        icon: '📚', 
        color: 'bg-blue-500', 
        name: 'Education',
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-600'
      },
      'disaster-relief': { 
        icon: '🚨', 
        color: 'bg-red-500', 
        name: 'Disaster Relief',
        bgColor: 'bg-red-100',
        textColor: 'text-red-600'
      },
      'sports': { 
        icon: '⚽', 
        color: 'bg-green-500', 
        name: 'Sports',
        bgColor: 'bg-green-100',
        textColor: 'text-green-600'
      },
      'food-distribution': { 
        icon: '🍽️', 
        color: 'bg-orange-500', 
        name: 'Food Security',
        bgColor: 'bg-orange-100',
        textColor: 'text-orange-600'
      }
    };
    return categoryMap[category as keyof typeof categoryMap] || categoryMap.education;
  };

  const categoryInfo = getCategoryInfo(project.category);
  const statusColors = {
    'planning': 'bg-yellow-100 text-yellow-700',
    'active': 'bg-green-100 text-green-700',
    'completed': 'bg-blue-100 text-blue-700',
    'on-hold': 'bg-gray-100 text-gray-700'
  };

  return (
    <section className="relative text-white overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={project.featured_image || '/api/placeholder/1200/600'}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-8 bg-orange-300 origin-bottom"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-16px)`,
                left: '50%',
                bottom: '50%',
                marginLeft: '-2px'
              }}
            />
          ))}
          <div className="absolute inset-0 bg-orange-300 rounded-full w-6 h-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="absolute bottom-20 left-20 text-6xl opacity-30">{categoryInfo.icon}</div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-orange-300 rounded-full mr-2"></span>
              Home / Our Work / {categoryInfo.name} / {project.title}
            </span>
          </nav>

          {/* Project Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`${categoryInfo.color} text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg`}>
              <span className="mr-2">{categoryInfo.icon}</span>
              {categoryInfo.name}
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold capitalize ${statusColors[project.status as keyof typeof statusColors]}`}>
              {project.status.replace('-', ' ')}
            </span>
            {project.location && (
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {project.location}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {project.title}
          </h1>
          <div className="w-24 h-1 bg-yellow-300 rounded-full mb-8"></div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.beneficiaries > 0 && (
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">
                  {project.beneficiaries.toLocaleString()}
                </div>
                <div className="text-blue-100 text-sm">People Impacted</div>
              </div>
            )}
            {project.budget && (
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">
                  ${project.budget.toLocaleString()}
                </div>
                <div className="text-blue-100 text-sm">Project Budget</div>
              </div>
            )}
            {project.start_date && (
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">
                  {new Date(project.start_date).getFullYear()}
                </div>
                <div className="text-blue-100 text-sm">Started</div>
              </div>
            )}
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">
                {project.status === 'completed' ? '100%' : 'Ongoing'}
              </div>
              <div className="text-blue-100 text-sm">Progress</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;