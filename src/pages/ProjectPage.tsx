import React from 'react';
import { useParams } from 'react-router-dom';
import { useProject } from '../hooks/useProjects';
import ProjectHero from '../components/work/ProjectHero';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ProjectContent from '../components/work/ProjectContent';
import ProjectGallery from '../components/work/ProjectGallery';
import ProjectImpact from '../components/work/ProjectImpact';
import ProjectDetails from '../components/work/ProjectDetails';
import RelatedProjects from '../components/work/RelatedProjects';

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { project, loading, error } = useProject(slug);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <button 
            onClick={() => window.history.back()}
            className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <ProjectHero project={project} />
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              <ProjectContent project={project} />
              {project.gallery_images && project.gallery_images.length > 0 && (
                <ProjectGallery images={project.gallery_images} title={project.title} />
              )}
              <ProjectImpact project={project} />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ProjectDetails project={project} />
            </div>
          </div>
        </div>
      </div>
      
      <RelatedProjects currentProject={project} />
    </div>
  );
};

export default ProjectPage;