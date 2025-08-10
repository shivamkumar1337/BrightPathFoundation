import React from 'react';

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Programs</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our diverse range of programs making a difference in communities worldwide.
        </p>
      </div>

      {/* Desktop Filter */}
      <div className="hidden md:flex justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? `${category.color} text-white shadow-lg transform scale-105`
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <span className="text-xl mr-3">{category.icon}</span>
            <div className="text-left">
              <div className="font-semibold">{category.name}</div>
              <div className={`text-sm ${
                activeCategory === category.id ? 'text-white opacity-90' : 'text-gray-500'
              }`}>
                {category.count} projects
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Mobile Filter */}
      <div className="md:hidden">
        <select
          value={activeCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.icon} {category.name} ({category.count} projects)
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategoryFilter;