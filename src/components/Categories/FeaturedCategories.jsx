import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedCategories.css';

const FeaturedCategories = () => {
  const categories = [
    {
      id: 16,
      name: "Red Stone Gold Ring",
      originalPrice: 650,
      rating: 5,
      image: "/ragipanis imgs/rings/ring51.jpg",
      category: "Rings",
      link: '/shop/rings'
    },
    {
      id: 38,
      name: "Gold Bracelet",
      rating: 4.9,
      image: "/ragipanis imgs/bracelets/bracelet1.1.jpg",
      category: "Bracelets",
      link: '/shop/bracelets'
    },
    {
      id: 88,
      name: "Minimalist Gold Necklace",
      rating: 4,
      image: "/ragipanis imgs/Necklaces/necklace32.1.jpg",
      category: "Necklaces",
      link: '/shop/Necklaces'
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