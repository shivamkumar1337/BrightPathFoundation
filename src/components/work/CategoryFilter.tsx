// components/work/CategoryFilter.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    onCategoryChange(categoryId);
    
    // Navigate to the appropriate URL
    if (categoryId === 'all') {
      navigate('/work');
    } else {
      navigate(`/work/${categoryId}`);
    }
  };

  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category.id
                ? `${category.color} text-white shadow-lg`
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
            }`}
          >
            <span className="text-xl mr-3">{category.icon}</span>
            <span>{category.name}</span>
            <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
              activeCategory === category.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;