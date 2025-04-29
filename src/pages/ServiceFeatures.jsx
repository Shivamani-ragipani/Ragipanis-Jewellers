import React from 'react';
import './ServiceFeatures.css';

import { FaHeart, FaSearch, FaShoppingCart, FaStar, FaStarHalf } from "react-icons/fa"

const ServiceFeatures = () => {
  const features = [
    {
      id: 1,
      icon: 'icon-shipping',
      title: 'Worldwide Shipping',
      description: 'Delivery within 5-7 days'
    },
    {
      id: 2,
      icon: 'icon-return',
      title: 'Money Back Guarantee',
      description: 'Returns within 30 days'
    },
    {
      id: 3,
      icon: 'icon-support',
      title: 'Online Support 24/7',
      description: 'Dedicated support team'
    },
    {
      id: 4,
      icon: 'icon-payment',
      title: 'Secure Payment Service',
      description: 'Multiple payment methods'
    }
  ];
  
  return (
    <div className="service-features">
      <div className="container">
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-item">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;