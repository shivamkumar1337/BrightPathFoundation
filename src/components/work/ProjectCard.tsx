import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  beneficiaries: number;
  location: string;
  status: 'active' | 'completed' | 'planned';
  budget?: number;
  startDate?: string;
  endDate?: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'planned':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryInfo = (category: string) => {
    const categoryMap = {
      'education': { icon: '📚', color: 'bg-blue-600' },
      'disaster-relief': { icon: '🚨', color: 'bg-red-600' },
      'sports': { icon: '⚽', color: 'bg-green-600' },
      'food-distribution': { icon: '🍽️', color: 'bg-orange-600' }
    };
    return categoryMap[category as keyof typeof categoryMap] || { icon: '🤝', color: 'bg-gray-600' };
  };

  const categoryInfo = getCategoryInfo(project.category);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          <span className={`${categoryInfo.color} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center w-fit`}>
            <span className="mr-1">{categoryInfo.icon}</span>
            {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize w-fit ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        {project.budget && (
          <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
            ${project.budget.toLocaleString()}
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{project.description}</p>
        
        <div className="space-y-2 mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {project.location}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            {project.beneficiaries.toLocaleString()} beneficiaries
          </div>
          {(project.startDate || project.endDate) && (
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {formatDate(project.startDate)} - {formatDate(project.endDate) || 'Ongoing'}
            </div>
          )}
        </div>

        {/* Tags */}
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        <Button variant="outline" size="sm" className="w-full mt-auto">
          Learn More
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;