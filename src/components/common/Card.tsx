import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true, onClick }) => {
  const hoverEffect = hover ? 'hover:shadow-lg' : '';
  const clickableClass = onClick ? 'cursor-pointer' : '';
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-md ${hoverEffect} ${clickableClass} transition-shadow duration-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;