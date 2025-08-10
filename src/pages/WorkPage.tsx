import React, { useState, useMemo } from 'react';
// import Navigation from '../components/layout/Navigation';
// import Footer from '../components/layout/Footer';
import CategoryFilter from '../components/work/CategoryFilter';
import ProjectGrid from '../components/work/ProjectGrid';
import StatsOverview from '../components/work/StatsOverview';

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

const WorkPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(false);

  // Mock data - will be replaced with API data later
  const projects: Project[] = [
    {
      id: 1,
      title: "Rural School Development Program",
      category: "education",
      description: "Building and renovating schools in rural areas to provide quality education for underprivileged children. This comprehensive program includes infrastructure development, teacher training, and educational material provision.",
      image: "/api/placeholder/400/250",
      beneficiaries: 500,
      location: "Rural Villages, State A",
      status: "active",
      budget: 75000,
      startDate: "2024-01-15",
      endDate: "2024-12-31",
      tags: ["Infrastructure", "Teacher Training", "Rural Development"]
    },
    {
      id: 2,
      title: "Emergency Flood Relief Operations",
      category: "disaster-relief",
      description: "Providing immediate assistance and long-term recovery support to flood-affected communities including emergency supplies, temporary shelter, and rehabilitation programs.",
      image: "/api/placeholder/400/250",
      beneficiaries: 1200,
      location: "Flood-affected Districts",
      status: "completed",
      budget: 120000,
      startDate: "2023-08-01",
      endDate: "2024-02-28",
      tags: ["Emergency Response", "Rehabilitation", "Community Support"]
    },
    {
      id: 3,
      title: "Youth Sports Development Initiative",
      category: "sports",
      description: "Developing youth through sports activities, building character and promoting healthy lifestyles while providing opportunities for talented athletes to excel.",
      image: "/api/placeholder/400/250",
      beneficiaries: 300,
      location: "Urban Communities, City B",
      status: "active",
      budget: 45000,
      startDate: "2024-03-01",
      tags: ["Youth Development", "Health", "Character Building"]
    },
    {
      id: 4,
      title: "Community Kitchen Network",
      category: "food-distribution",
      description: "Providing nutritious meals to families in need and supporting food security in underserved areas through a network of community kitchens and food distribution centers.",
      image: "/api/placeholder/400/250",
      beneficiaries: 800,
      location: "Multiple City Centers",
      status: "active",
      budget: 60000,
      startDate: "2023-11-01",
      tags: ["Nutrition", "Food Security", "Community Support"]
    },
    {
      id: 5,
      title: "Digital Literacy Program",
      category: "education",
      description: "Teaching digital skills and computer literacy to adults and children in underserved communities to bridge the digital divide and create new opportunities.",
      image: "/api/placeholder/400/250",
      beneficiaries: 250,
      location: "Rural and Urban Areas",
      status: "planned",
      budget: 35000,
      startDate: "2024-06-01",
      tags: ["Digital Skills", "Technology", "Adult Education"]
    },
    {
      id: 6,
      title: "Earthquake Response Team",
      category: "disaster-relief",
      description: "Rapid response team for earthquake emergencies providing search and rescue operations, medical aid, and emergency supplies to affected populations.",
      image: "/api/placeholder/400/250",
      beneficiaries: 2000,
      location: "Earthquake-prone Regions",
      status: "active",
      budget: 150000,
      startDate: "2024-01-01",
      tags: ["Emergency Response", "Search & Rescue", "Medical Aid"]
    },
    {
      id: 7,
      title: "Girls Football League",
      category: "sports",
      description: "Empowering young girls through football, promoting gender equality in sports while building confidence, leadership skills, and physical fitness.",
      image: "/api/placeholder/400/250",
      beneficiaries: 150,
      location: "Schools and Communities",
      status: "active",
      budget: 25000,
      startDate: "2024-02-15",
      tags: ["Girls Empowerment", "Gender Equality", "Leadership"]
    },
    {
      id: 8,
      title: "Mobile Food Pantry",
      category: "food-distribution",
      description: "Mobile food distribution service reaching remote and underserved areas where traditional food banks cannot operate effectively.",
      image: "/api/placeholder/400/250",
      beneficiaries: 600,
      location: "Remote Rural Areas",
      status: "completed",
      budget: 40000,
      startDate: "2023-06-01",
      endDate: "2024-01-31",
      tags: ["Mobile Service", "Remote Areas", "Food Access"]
    }
  ];

  const categories = [
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
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory, projects]);

  const handleCategoryChange = (categoryId: string) => {
    setLoading(true);
    setActiveCategory(categoryId);
    
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Discover our comprehensive programs making a real difference in education, 
              disaster relief, sports development, and food security across communities worldwide.
            </p>
          </div>
        </section>

        <StatsOverview />

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
              loading={loading}
              category={activeCategory}
            />
          </div>
        </section>
    </div>
  );
};

export default WorkPage;