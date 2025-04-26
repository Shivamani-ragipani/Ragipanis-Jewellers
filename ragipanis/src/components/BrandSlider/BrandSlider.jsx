import React from 'react';
import './BrandSlider.css';

const BrandSlider = () => {
  const brands = [
    { id: 1, name: 'Aurea', logo: '/images/brand-1.png' },
    { id: 2, name: 'LVM', logo: '/images/brand-2.png' },
    { id: 3, name: 'Swarovski', logo: '/images/brand-3.png' },
    { id: 4, name: 'Tiffany', logo: '/images/brand-4.png' },
    { id: 5, name: 'Howard\'s', logo: '/images/brand-5.png' }
  ];
  
  return (
    <div className="brand-slider">
      <div className="brands-container">
        {brands.map(brand => (
          <div key={brand.id} className="brand-item">
            <img src={brand.logo || "/placeholder.svg"} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;