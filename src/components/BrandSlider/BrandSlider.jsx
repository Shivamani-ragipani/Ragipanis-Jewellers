import React from 'react';
import './BrandSlider.css';

import { FaHeart, FaSearch, FaShoppingCart, FaStar, FaUser, FaShippingFast } from "react-icons/fa"

const BrandSlider = () => {
  const brands = [
    { id: 1, name: 'Aurora', logo: 'brand-aurora.png' },
    { id: 2, name: 'Lotus', logo: '/Brand-lotus.jpg' },
    { id: 3, name: 'Khazana', logo: '/brand-khazana.jpg' },
    { id: 4, name: 'Joyalukkas', logo: '/brand-joyalukkas.webp' },
    { id: 5, name: 'safar', logo: '/brand-safar.png' }
  ];
  
  return (
    <div className="brand-slider">
      <div className="brands-container">
        {brands.map(brand => (
          <div key={brand.id} className="brand-item">
            <img src={brand.logo || "/placeholder.svg"} alt={brand.name} />
            <div className="brand-name">{brand.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;