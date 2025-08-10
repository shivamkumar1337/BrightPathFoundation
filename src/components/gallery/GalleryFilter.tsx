import React from 'react';

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface GalleryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  activeTab: 'photos' | 'videos';
  onTabChange: (tab: 'photos' | 'videos') => void;
}

const GalleryFilter: React.FC<GalleryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  activeTab,
  onTabChange
}) => {
  return (
    <div className="mb-8">
      {/* Tab Switcher */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => onTabChange('photos')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'photos'
                ? 'bg-white text-blue-600 shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            📷 Photos
          </button>
          <button
            onClick={() => onTabChange('videos')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'videos'
                ? 'bg-white text-blue-600 shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🎥 Videos
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h3>
        
        {/* Desktop Filter */}
        <div className="hidden md:flex justify-center flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeCategory === category.id
                  ? 'bg-white bg-opacity-20 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Filter */}
        <div className="md:hidden">
          <select
            value={activeCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full max-w-xs px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.icon} {category.name} ({category.count})
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default GalleryFilter;