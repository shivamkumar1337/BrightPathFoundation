import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryFilter from '../components/work/CategoryFilter';
import ProjectGrid from '../components/work/ProjectGrid';
import { useAllProjects } from '../hooks/useProjects';

const WorkPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterLoading, setFilterLoading] = useState(false);
  
  // Fetch all projects from database
  const { projects, loading, error } = useAllProjects();

  // Set active category based on URL parameter
  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory('all');
    }
  }, [category]);

  const categories = useMemo(() => [
    {
      id: 'all',
      name: 'All Programs',
      icon: '🤝',
      color: 'bg-gray-600',
      count: projects.length
    },
    {
      id: 'education',
      name: 'Education',
      icon: '📚',
      color: 'bg-blue-600',
      count: projects.filter(p => p.category === 'education').length
    },
    {
      id: 'disaster-relief',
      name: 'Disaster Relief',
      icon: '🚨',
      color: 'bg-red-600',
      count: projects.filter(p => p.category === 'disaster-relief').length
    },
    {
      id: 'sports',
      name: 'Sports',
      icon: '⚽',
      color: 'bg-green-600',
      count: projects.filter(p => p.category === 'sports').length
    },
    {
      id: 'food-distribution',
      name: 'Food Distribution',
      icon: '🍽️',
      color: 'bg-orange-600',
      count: projects.filter(p => p.category === 'food-distribution').length
    }
  ], [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory, projects]);

  const handleCategoryChange = (categoryId: string) => {
    setFilterLoading(true);
    setActiveCategory(categoryId);
    
    // Update URL without page reload
    const newUrl = categoryId === 'all' ? '/work' : `/work/${categoryId}`;
    window.history.pushState({}, '', newUrl);
    
    // Simulate loading delay for smooth UX
    setTimeout(() => {
      setFilterLoading(false);
    }, 300);
  };

  // Loading state for initial data fetch
  if (loading) {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-orange-100">
              Discover our comprehensive programs making a real difference in education, 
              disaster relief, sports development, and food security across communities worldwide.
            </p>
          </div>
        </section>

        {/* Loading Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="animate-pulse text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="w-16 h-16 bg-gray-200 rounded-2xl mx-auto mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-16 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-24 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Loading Projects */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="animate-pulse mb-12">
              <div className="flex flex-wrap justify-center gap-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="h-12 bg-gray-200 rounded-full w-32"></div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="animate-pulse bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
                    <div className="space-y-2 mb-4">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    </div>
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-orange-100">
              Discover our comprehensive programs making a real difference in communities worldwide.
            </p>
          </div>
        </section>

        {/* Error State */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-6">⚠️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Unable to Load Projects</h2>
              <p className="text-gray-600 mb-6">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
              >
                Try Again
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
          
          <ProjectGrid
            projects={filteredProjects}
            loading={filterLoading}
            category={activeCategory}
          />
        </div>
      </section>
    </div>
  );
};

export default WorkPage;