import React from 'react';
import './CategorySelection.css';

const categories = ['Sports', 'Technology', 'Politics', 'Health', 'Business'];

const CategorySelection = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="category-selection">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
