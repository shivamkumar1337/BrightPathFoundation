import React from 'react';

interface Stat {
  category: string;
  icon: string;
  projects: number;
  beneficiaries: number;
  color: string;
}

const StatsOverview: React.FC = () => {
  const stats: Stat[] = [
    {
      category: 'Education',
      icon: '📚',
      projects: 25,
      beneficiaries: 5000,
      color: 'bg-blue-500'
    },
    {
      category: 'Disaster Relief',
      icon: '🚨',
      projects: 15,
      beneficiaries: 3000,
      color: 'bg-red-500'
    },
    {
      category: 'Sports',
      icon: '⚽',
      projects: 12,
      beneficiaries: 1500,
      color: 'bg-green-500'
    },
    {
      category: 'Food Distribution',
      icon: '🍽️',
      projects: 18,
      beneficiaries: 4500,
      color: 'bg-orange-500'
    }
  ];

  const totalProjects = stats.reduce((sum, stat) => sum + stat.projects, 0);
  const totalBeneficiaries = stats.reduce((sum, stat) => sum + stat.beneficiaries, 0);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact Across Programs</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            See how we're making a difference across all our program areas
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">{totalProjects}</div>
            <div className="text-xl text-blue-100">Total Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">{totalBeneficiaries.toLocaleString()}</div>
            <div className="text-xl text-blue-100">Lives Impacted</div>
          </div>
        </div>

        {/* Category Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-lg p-6 text-center backdrop-blur-sm">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{stat.category}</h3>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{stat.projects}</div>
                <div className="text-sm text-blue-100">Projects</div>
                <div className="text-xl font-semibold">{stat.beneficiaries.toLocaleString()}</div>
                <div className="text-sm text-blue-100">Beneficiaries</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsOverview;