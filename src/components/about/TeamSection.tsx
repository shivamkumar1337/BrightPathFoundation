import React from 'react';
import Card from '../common/Card';
import { useTeam } from '../../hooks/useTeam';
import type { TeamMember } from '../../types/database';

const TeamSection: React.FC = () => {
  const { team, loading, error } = useTeam();

  // Default team members as fallback
  const defaultTeamMembers: Partial<TeamMember>[] = [
    {
      name: "Sarah Johnson",
      position: "Executive Director",
      bio: "With over 15 years of experience in international development, Sarah leads our organization with passion and vision for creating lasting positive change in communities worldwide.",
      photo_url: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Michael Chen",
      position: "Program Director",
      bio: "Dr. Chen oversees all our field programs and ensures quality implementation across all our initiatives, bringing expertise in community development and program management.",
      photo_url: "/api/placeholder/300/300"
    },
    {
      name: "Maria Rodriguez",
      position: "Education Coordinator",
      bio: "Maria brings 12 years of educational expertise to our literacy and school development programs, focusing on curriculum development and teacher training initiatives.",
      photo_url: "/api/placeholder/300/300"
    },
    {
      name: "James Wilson",
      position: "Emergency Response Manager",
      bio: "James coordinates our disaster relief efforts and emergency response operations worldwide, ensuring rapid and effective assistance to communities in crisis.",
      photo_url: "/api/placeholder/300/300"
    }
  ];

  // Loading state
  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="animate-pulse">
                <div className="bg-gray-200 h-8 w-64 rounded-full mx-auto mb-6"></div>
                <div className="bg-gray-300 h-12 w-96 rounded mx-auto mb-8"></div>
                <div className="bg-gray-200 h-1 w-24 rounded-full mx-auto mb-8"></div>
                <div className="bg-gray-200 h-6 w-2/3 rounded mx-auto"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="animate-pulse bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-24 h-24 bg-gray-200 rounded-2xl mx-auto mb-6"></div>
                  <div className="bg-gray-200 h-6 w-32 rounded mx-auto mb-2"></div>
                  <div className="bg-gray-200 h-4 w-24 rounded mx-auto mb-4"></div>
                  <div className="space-y-2">
                    <div className="bg-gray-200 h-3 w-full rounded"></div>
                    <div className="bg-gray-200 h-3 w-4/5 rounded mx-auto"></div>
                    <div className="bg-gray-200 h-3 w-3/4 rounded mx-auto"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Determine which team data to use
  const teamMembers = team.length > 0 ? team : defaultTeamMembers;
  const isUsingFallback = team.length === 0;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-6 py-3 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Our Leadership Team
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-blue-600 via-orange-500 to-green-600 bg-clip-text text-transparent mt-2">
               Meet the People Behind Our Mission
              </span>
            </h2>
          </div>
          {/* Error/Fallback Notice */}
          {error && isUsingFallback && (
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-700 rounded-lg">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Unable to load current team data - Showing sample team information
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.id || `fallback-${index}`} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-100 to-transparent rounded-2xl opacity-50"></div>
                
                <div className="p-8 text-center relative z-10">
                  <div className="relative mb-6">
                    <img
                      src={member.photo_url || "/api/placeholder/300/300"}
                      alt={member.name || "Team Member"}
                      className="w-24 h-24 rounded-2xl mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/api/placeholder/300/300";
                      }}
                    />
                    <div className="absolute inset-0 w-24 h-24 mx-auto border-2 border-orange-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;