import React, { useState, useMemo } from 'react';
import GalleryFilter from '../components/gallery/GalleryFilter';
import ImageGallery from '../components/gallery/ImageGallery';
// import VideoGallery from '../components/gallery/VideoGallery';

interface GalleryImage {
  id: number;
  src: string;
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  date: string;
  location: string;
}

interface GalleryVideo {
  id: number;
  src: string;
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  date: string;
  location: string;
  duration: string;
}

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  // Mock data - will be replaced with API data later
  const images: GalleryImage[] = [
    {
      id: 1,
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "New School Opening Ceremony",
      description: "Celebrating the opening of our 15th school in rural communities, providing education to 300+ children.",
      category: "education",
      date: "2024-03-15",
      location: "Rural Village, State A"
    },
    {
      id: 2,
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Emergency Relief Distribution",
      description: "Distributing emergency supplies to flood-affected families during the monsoon crisis.",
      category: "disaster-relief",
      date: "2024-02-28",
      location: "Flood-affected District"
    },
    {
      id: 3,
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Youth Football Championship",
      description: "Annual football tournament bringing together young athletes from 20 different communities.",
      category: "sports",
      date: "2024-01-20",
      location: "City Sports Complex"
    },
    {
      id: 4,
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Community Kitchen Launch",
      description: "Opening of our new community kitchen serving 500 meals daily to families in need.",
      category: "food-distribution",
      date: "2024-02-10",
      location: "Urban Community Center"
    },
    {
      id: 5,
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Teacher Training Workshop",
      description: "Training session for 50 local teachers on modern teaching methodologies and digital literacy.",
      category: "education",
      date: "2024-01-05",
      location: "Training Center"
    },
    {
      id: 6,
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Disaster Preparedness Drill",
      description: "Community-wide disaster preparedness exercise involving 1000+ residents.",
      category: "disaster-relief",
      date: "2023-12-15",
      location: "Multiple Communities"
    },
    {
      id: 7,
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Girls Cricket Team Victory",
      description: "Our girls cricket team celebrating their victory in the inter-district championship.",
      category: "sports",
      date: "2024-01-30",
      location: "District Stadium"
    },
    {
      id: 8,
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Mobile Food Distribution",
      description: "Reaching remote villages with our mobile food distribution program during harsh winter months.",
      category: "food-distribution",
      date: "2023-12-20",
      location: "Remote Mountain Villages"
    },
    {
      id: 9,
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Digital Literacy Class",
      description: "Adult education program teaching computer skills to rural women entrepreneurs.",
      category: "education",
      date: "2024-02-15",
      location: "Community Learning Center"
    },
    {
      id: 10,
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Earthquake Relief Camp",
      description: "Setting up temporary shelters and medical camps after the recent earthquake.",
      category: "disaster-relief",
      date: "2024-01-10",
      location: "Earthquake-affected Region"
    },
    {
      id: 11,
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Swimming Training Program",
      description: "Teaching swimming skills to children from coastal communities for water safety.",
      category: "sports",
      date: "2024-03-05",
      location: "Coastal Community Pool"
    },
    {
      id: 12,
      src: "/api/placeholder/800/600",
      thumbnail: "/api/placeholder/400/300",
      title: "Nutrition Awareness Campaign",
      description: "Community workshop on nutrition and healthy eating habits for mothers and children.",
      category: "food-distribution",
      date: "2024-02-25",
      location: "Health Center"
    }
  ];

  const videos: GalleryVideo[] = [
    {
      id: 1,
      src: "/api/placeholder/video.mp4",
      thumbnail: "/api/placeholder/400/300",
      title: "School Construction Time-lapse",
      description: "Watch the complete construction of our rural school from foundation to completion in just 3 minutes.",
      category: "education",
      date: "2024-03-01",
      location: "Rural Village, State A",
      duration: "3:24"
    },
    {
      id: 2,
      src: "/api/placeholder/video.mp4",
      thumbnail: "/api/placeholder/400/300",
      title: "Flood Relief Operations",
      description: "Documentary showcasing our emergency response team's efforts during the recent flood crisis.",
      category: "disaster-relief",
      date: "2024-02-20",
      location: "Flood-affected Areas",
      duration: "5:17"
    },
    {
      id: 3,
      src: "/api/placeholder/video.mp4",
      thumbnail: "/api/placeholder/400/300",
      title: "Girls Football Team Journey",
      description: "Follow the inspiring journey of our girls football team from local matches to regional championships.",
      category: "sports",
      date: "2024-01-15",
      location: "Various Locations",
      duration: "4:32"
    },
    {
      id: 4,
      src: "/api/placeholder/video.mp4",
      thumbnail: "/api/placeholder/400/300",
      title: "Community Kitchen Impact",
      description: "See how our community kitchen program is transforming lives and ensuring food security.",
      category: "food-distribution",
      date: "2024-02-05",
      location: "Urban Centers",
      duration: "2:45"
    },
    {
      id: 5,
      src: "/api/placeholder/video.mp4",
      thumbnail: "/api/placeholder/400/300",
      title: "Teacher Training Success Stories",
      description: "Hear from teachers who have transformed their classrooms through our training programs.",
      category: "education",
      date: "2024-01-25",
      location: "Multiple Schools",
      duration: "6:12"
    },
    {
      id: 6,
      src: "/api/placeholder/video.mp4",
      thumbnail: "/api/placeholder/400/300",
      title: "Emergency Response Training",
      description: "Behind the scenes look at how we train our disaster response volunteers.",
      category: "disaster-relief",
      date: "2024-01-08",
      location: "Training Facility",
      duration: "4:55"
    },
    {
      id: 7,
      src: "/api/placeholder/video.mp4",
      thumbnail: "/api/placeholder/400/300",
      title: "Youth Sports Festival Highlights",
      description: "Best moments from our annual multi-sport festival featuring 500+ young athletes.",
      category: "sports",
      date: "2023-12-30",
      location: "Sports Complex",
      duration: "7:20"
    },
    {
      id: 8,
      src: "/api/placeholder/video.mp4",
      thumbnail: "/api/placeholder/400/300",
      title: "Farm to Table Initiative",
      description: "How we're connecting local farmers with our food distribution network for fresh, healthy meals.",
      category: "food-distribution",
      date: "2024-02-12",
      location: "Rural Farming Communities",
      duration: "5:33"
    }
  ];

  const categories = [
    {
      id: 'all',
      name: 'All',
      icon: '🖼️',
      count: activeTab === 'photos' ? images.length : videos.length
    },
    {
      id: 'education',
      name: 'Education',
      icon: '📚',
      count: activeTab === 'photos' 
        ? images.filter(item => item.category === 'education').length
        : videos.filter(item => item.category === 'education').length
    },
    {
      id: 'disaster-relief',
      name: 'Disaster Relief',
      icon: '🚨',
      count: activeTab === 'photos'
        ? images.filter(item => item.category === 'disaster-relief').length
        : videos.filter(item => item.category === 'disaster-relief').length
    },
    {
      id: 'sports',
      name: 'Sports',
      icon: '⚽',
      count: activeTab === 'photos'
        ? images.filter(item => item.category === 'sports').length
        : videos.filter(item => item.category === 'sports').length
    },
    {
      id: 'food-distribution',
      name: 'Food Distribution',
      icon: '🍽️',
      count: activeTab === 'photos'
        ? images.filter(item => item.category === 'food-distribution').length
        : videos.filter(item => item.category === 'food-distribution').length
    }
  ];

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') {
      return images;
    }
    return images.filter(image => image.category === activeCategory);
  }, [activeCategory, images]);

  // const filteredVideos = useMemo(() => {
  //   if (activeCategory === 'all') {
  //     return videos;
  //   }
  //   return videos.filter(video => video.category === activeCategory);
  // }, [activeCategory, videos]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleTabChange = (tab: 'photos' | 'videos') => {
    setActiveTab(tab);
    setActiveCategory('all'); // Reset category when switching tabs
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Explore our visual journey through photos and videos showcasing our impact 
            in communities worldwide. See the faces behind our mission and the lives we've touched.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{images.length}</div>
              <div className="text-gray-600">Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">{videos.length}</div>
              <div className="text-gray-600">Videos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
              <div className="text-gray-600">Program Areas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <GalleryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          {/* {activeTab === 'photos' ? ( */}
            <ImageGallery images={filteredImages} category={activeCategory} />
          {/* ) : ( */}
            {/* // <VideoGallery videos={filteredVideos} category={activeCategory} /> */}
          {/* )} */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Be Part of Our Story?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join us in creating more moments worth capturing. Your support helps us continue 
            making a difference in communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Volunteer With Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Donate Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;