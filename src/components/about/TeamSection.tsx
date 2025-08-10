import React from 'react';
import Card from '../common/Card';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  expertise: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Executive Director",
      bio: "With over 15 years of experience in international development, Sarah leads our organization with passion and vision.",
      image: "/api/placeholder/300/300",
      expertise: ["Leadership", "Strategic Planning", "International Development"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@brightpath.org"
      }
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      position: "Program Director",
      bio: "Dr. Chen oversees all our field programs and ensures quality implementation across all our initiatives.",
      image: "/api/placeholder/300/300",
      expertise: ["Program Management", "Field Operations", "Community Development"],
      social: {
        linkedin: "#",
        email: "michael@brightpath.org"
      }
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      position: "Education Coordinator",
      bio: "Maria brings 12 years of educational expertise to our literacy and school development programs.",
      image: "/api/placeholder/300/300",
      expertise: ["Education", "Curriculum Development", "Teacher Training"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "maria@brightpath.org"
      }
    },
    {
      id: 4,
      name: "James Wilson",
      position: "Emergency Response Manager",
      bio: "James coordinates our disaster relief efforts and emergency response operations worldwide.",
      image: "/api/placeholder/300/300",
      expertise: ["Emergency Management", "Logistics", "Crisis Response"],
      social: {
        linkedin: "#",
        email: "james@brightpath.org"
      }
    }
  ];

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
              Meet the People
              <span className="block bg-gradient-to-r from-blue-600 via-orange-500 to-green-600 bg-clip-text text-transparent mt-2">
                Behind Our Mission
              </span>
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our dedicated team of professionals brings together diverse expertise and shared commitment 
              to making a positive impact in communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-100 to-transparent rounded-2xl opacity-50"></div>
                
                <div className="p-8 text-center relative z-10">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-2xl mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 w-24 h-24 mx-auto border-2 border-orange-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-100 transition-all duration-300 hover:scale-110"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-100 transition-all duration-300 hover:scale-110"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-green-600 hover:bg-green-100 transition-all duration-300 hover:scale-110"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </a>
                    )}
                  </div>
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