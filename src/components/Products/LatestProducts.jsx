import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../pages/ProductCard';

const LatestProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Yellow Gold & Diamond Ring',
      price: 599.99,
      rating: 5,
      image: '/featured1.2.jpeg',
      category: 'Rings',
      isNew: true,
      isSale: false
    },
    {
      id: 2,
      name: 'Infinity Diamond Bracelet',
      price: 399.99,
      rating: 4,
      image: '/featured2.1.jpeg',
      category: 'Bracelets',
      isNew: true,
      isSale: false
    },
    {
      id: 3,
      name: 'Radiant Diamond Pendant',
      price: 299.99,
      rating: 5,
      image: '/featured3.1.jpeg',
      category: 'Pendants',
      isNew: true,
      isSale: false
    }
  ];
  
  return (
    <div className="latest-products">
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;