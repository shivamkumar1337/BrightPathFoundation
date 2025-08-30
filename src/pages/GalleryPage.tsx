import React, { useState, useMemo } from 'react';
import GalleryFilter from '../components/gallery/GalleryFilter';
import ImageGallery from '../components/gallery/ImageGallery';
import { useGallery } from '../hooks/useGallery';

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { images, loading, error } = useGallery();

  const categories = useMemo(() => [
    {
      id: 'all',
      name: 'All',
      icon: '🖼️',
      count: images.length
    },
    {
      id: 'education',
      name: 'Education',
      icon: '📚',
      count: images.filter(item => item.category === 'education').length
    },
    {
      id: 'disaster-relief',
      name: 'Disaster Relief',
      icon: '🚨',
      count: images.filter(item => item.category === 'disaster-relief').length
    },
    {
      id: 'sports',
      name: 'Sports',
      icon: '⚽',
      count: images.filter(item => item.category === 'sports').length
    },
    {
      id: 'food-distribution',
      name: 'Food Distribution',
      icon: '🍽️',
      count: images.filter(item => item.category === 'food-distribution').length
    },
    {
      id: 'events',
      name: 'Events',
      icon: '🎉',
      count: images.filter(item => item.category === 'events').length
    },
    {
      id: 'team',
      name: 'Team',
      icon: '👥',
      count: images.filter(item => item.category === 'team').length
    },
    {
      id: 'general',
      name: 'General',
      icon: '📸',
      count: images.filter(item => item.category === 'general').length
    }
  ], [images]);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') {
      return images;
    }
    return images.filter(image => image.category === activeCategory);
  }, [activeCategory, images]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-orange-100">
              Explore our visual journey through photos showcasing our impact 
              in communities worldwide. See the faces behind our mission and the lives we've touched.
            </p>
          </div>
        </section>

        {/* Loading Stats */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="h-8 bg-gray-200 rounded w-16 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Loading Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="animate-pulse mb-8">
              <div className="flex justify-center flex-wrap gap-3 mb-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="h-10 bg-gray-200 rounded-full w-24"></div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="animate-pulse bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="flex justify-between">
                      <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                    </div>
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
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-orange-100">
              Explore our visual journey through photos showcasing our impact in communities worldwide.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-6">⚠️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Unable to Load Gallery</h2>
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

  // const stats = {
  //   totalImages: images.length,
  //   categories: categories.filter(cat => cat.id !== 'all' && cat.count > 0).length,
  //   locations: [...new Set(images.map(img => img.location).filter(Boolean))].length,
  //   featuredImages: images.filter(img => img.is_featured).length
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Stats Section
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">{stats.totalImages}</div>
              <div className="text-gray-600">Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.categories}</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.locations}</div>
              <div className="text-gray-600">Locations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{stats.featuredImages}</div>
              <div className="text-gray-600">Featured</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <GalleryFilter
            categories={categories.filter(cat => cat.count > 0)} // Only show categories with images
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          <ImageGallery images={filteredImages} category={activeCategory} />
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Be Part of Our Story?</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Join us in creating more moments worth capturing. Your support helps us continue 
            making a difference in communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Volunteer With Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default GalleryPage;