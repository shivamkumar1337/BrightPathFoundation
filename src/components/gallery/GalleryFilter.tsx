// components/gallery/GalleryFilter.tsx
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
}

const GalleryFilter: React.FC<GalleryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  return (
    <div className="mb-8">
      {/* Category Filter */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Photo Gallery</h3>
        <p className="text-gray-600 mb-6">Browse our collection of impactful moments</p>
        
        {/* Desktop Filter */}
        <div className="hidden md:flex justify-center flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200 hover:border-orange-200'
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
            className="w-full max-w-xs px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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