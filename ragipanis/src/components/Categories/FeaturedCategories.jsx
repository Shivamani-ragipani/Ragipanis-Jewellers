import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedCategories.css';

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Yellow Gold & Diamond Ring',
      image: '/Featured1.jpeg',
      link: '/shop/rings'
    },
    {
      id: 2,
      name: 'Infinity Diamond Bracelet',
      image: '/Featured2.1.jpeg',
      link: '/shop/bracelets'
    },
    {
      id: 3,
      name: 'Radiant Diamond Pendant',
      image: '/featured3.jpeg',
      link: '/shop/pendants'
    }
  ];
  
  return (
    <div className="featured-categories">
      <div className="categories-grid">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <div className="category-image">
              <img src={category.image || "/placeholder.svg"} alt={category.name} />
            </div>
            <div className="category-content">
              <h3>{category.name}</h3>
              <Link to={category.link} className="btn btn-secondary">SHOP NOW</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;