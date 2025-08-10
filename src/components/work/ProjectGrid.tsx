import React from 'react';
import ProjectCard from './ProjectCard';
import LoadingSpinner from '../common/LoadingSpinner';

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

interface ProjectGridProps {
  projects: Project[];
  loading?: boolean;
  category: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, loading, category }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <LoadingSpinner size="lg" />
        <span className="ml-3 text-gray-600">Loading projects...</span>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">📋</div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
        <p className="text-gray-600">
          {category === 'all' 
            ? "We don't have any projects to display at the moment."
            : `No projects found in the ${category} category.`
          }
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;