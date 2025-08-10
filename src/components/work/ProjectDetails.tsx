import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import type { Project } from '../../types';

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const statusColors = {
    'planning': { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: '📋' },
    'active': { bg: 'bg-green-100', text: 'text-green-700', icon: '🚀' },
    'completed': { bg: 'bg-blue-100', text: 'text-blue-700', icon: '✅' },
    'on-hold': { bg: 'bg-gray-100', text: 'text-gray-700', icon: '⏸️' }
  };

  const statusInfo = statusColors[project.status as keyof typeof statusColors];

  return (
    <div className="space-y-8 sticky top-8">
      {/* Project Details Card */}
      <Card className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-3">📊</span>
          Project Details
        </h3>
        
        <div className="space-y-6">
          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">Status</label>
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${statusInfo.bg} ${statusInfo.text}`}>
              <span className="mr-2">{statusInfo.icon}</span>
              {project.status.replace('-', ' ').toUpperCase()}
            </div>
          </div>

          {/* Location */}
          {project.location && (
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Location</label>
              <div className="flex items-center text-gray-900">
                <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {project.location}
              </div>
            </div>
          )}

          {/* Timeline */}
          {project.start_date && (
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Timeline</label>
              <div className="space-y-2">
                <div className="flex items-center text-gray-900">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Started: {formatDate(project.start_date)}
                </div>
                {project.end_date && (
                  <div className="flex items-center text-gray-900">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {project.status === 'completed' ? 'Completed' : 'Expected'}: {formatDate(project.end_date)}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Budget */}
          {project.budget && (
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Project Budget</label>
              <div className="flex items-center text-gray-900">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                ${project.budget.toLocaleString()}
              </div>
            </div>
          )}

          {/* Beneficiaries */}
          {project.beneficiaries > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">People Impacted</label>
              <div className="flex items-center text-gray-900">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                {project.beneficiaries.toLocaleString()} people
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Support This Project Card */}
      <Card className="p-8 bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl border border-orange-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💝</span>
          Support This Project
        </h3>
        <p className="text-gray-600 mb-6">
          Help us continue making a difference in this community. Your support directly impacts lives.
        </p>
        <div className="space-y-4">
          <Button 
            variant="primary" 
            size="lg" 
            className="w-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            ❤️ Donate Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
          >
            📧 Get Updates
          </Button>
        </div>
      </Card>

      {/* Share Project Card */}
      <Card className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Share This Project</h3>
        <div className="flex space-x-3">
          <button className="flex-1 bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors">
            <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
          <button className="flex-1 bg-blue-400 text-white p-3 rounded-xl hover:bg-blue-500 transition-colors">
            <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </button>
          <button className="flex-1 bg-blue-700 text-white p-3 rounded-xl hover:bg-blue-800 transition-colors">
            <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ProjectDetails;