import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { useFeaturedProjects } from '../../hooks/useProjects';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const FeaturedWork: React.FC = () => {
  const { projects, loading, error } = useFeaturedProjects();
  const navigate = useNavigate();

  // const getStatusColor = (status: string) => {
  //   switch (status) {
  //     case 'active':
  //       return 'bg-green-100 text-green-800';
  //     case 'completed':
  //       return 'bg-blue-100 text-blue-800';
  //     case 'planning':
  //       return 'bg-orange-100 text-orange-800';
  //     case 'on-hold':
  //       return 'bg-gray-100 text-gray-800';
  //     default:
  //       return 'bg-gray-100 text-gray-800';
  //   }
  // };

  // const formatNumber = (num: number) => {
  //   if (num >= 1000000) {
  //     return `${(num / 1000000).toFixed(1)}M`;
  //   } else if (num >= 1000) {
  //     return `${(num / 1000).toFixed(1)}K`;
  //   }
  //   return num.toString();
  // };

  // const formatCurrency = (amount: number) => {
  //   if (amount >= 1000000) {
  //     return `$${(amount / 1000000).toFixed(1)}M`;
  //   } else if (amount >= 1000) {
  //     return `$${(amount / 1000).toFixed(0)}K`;
  //   }
  //   return `$${amount.toLocaleString()}`;
  // };

  // const formatDate = (dateString: string) => {
  //   return new Date(dateString).toLocaleDateString('en-US', {
  //     year: 'numeric',
  //     month: 'short'
  //   });
  // };

  const getCategoryName = (cat: string) => {
    const categoryNames: { [key: string]: string } = {
      'education': 'Education',
      'disaster-relief': 'Disaster Relief',
      'sports': 'Sports',
      'food-distribution': 'Food Distribution'
    };
    return categoryNames[cat] || cat;
  };

  const handleProjectClick = (slug: string | undefined) => {
    if (!slug) return;
    navigate(`/work/project/${slug}`);
  };

  if (loading) {
    return (
      <section className="py-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loading Our Work...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  </div>
                  <div className="h-10 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600">Error loading projects: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleProjectClick(project.slug)}
            >
              <div className="relative">
                <img
                  src={project.featured_image || "/api/placeholder/400/250"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/api/placeholder/400/250";
                  }}
                />
                {/* <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                  </span>
                </div> */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                    {getCategoryName(project.category)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-1">📍</span>
                  <span>{project.location}</span>
                </div> */}

                {/* <div className="flex justify-between items-center mb-4"> */}
                  {/* <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">
                      {formatNumber(project.beneficiaries)}
                    </div>
                    <div className="text-xs text-gray-500">Beneficiaries</div>
                  </div> */}
                  {/* {project.budget && (
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">
                        {formatCurrency(project.budget)}
                      </div>
                      <div className="text-xs text-gray-500">Budget</div>
                    </div>
                  )} */}
                  {/* {project.start_date && (
                    <div className="text-center">
                      <div className="text-sm font-bold text-blue-600">
                        {formatDate(project.start_date)}
                      </div>
                      <div className="text-xs text-gray-500">Started</div>
                    </div>
                  )}
                </div> */}

                {/* {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{project.tags.length - 2} more
                      </span>
                    )}
                  </div>
                )} */}

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </Card>
          ))}
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