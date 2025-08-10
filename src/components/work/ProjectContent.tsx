import React from 'react';
import type { Project } from '../../types';

interface ProjectContentProps {
  project: Project;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  return (
    <section className="space-y-8">
      <div>
        <span className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6 shadow-sm">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          Project Overview
        </span>
        
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          About This
          <span className="block bg-gradient-to-r from-blue-600 via-orange-500 to-green-600 bg-clip-text text-transparent mt-1">
            Project
          </span>
        </h2>
        <div className="w-16 h-1 bg-blue-500 rounded-full mb-8"></div>
      </div>

      <div className="prose prose-lg max-w-none">
        {project.content_body ? (
          <div 
            className="text-gray-700 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: project.content_body }}
          />
        ) : (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl">
              {project.description}
            </p>
            <p>
              This project is part of our ongoing commitment to create positive change in communities 
              through sustainable and impactful initiatives. We work closely with local partners and 
              community leaders to ensure our programs meet the specific needs of each area we serve.
            </p>
            <p>
              Our approach focuses on long-term sustainability and community empowerment, ensuring 
              that the benefits of our work continue long after the project completion.
            </p>
          </div>
        )}
      </div>

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Tags</h3>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectContent;