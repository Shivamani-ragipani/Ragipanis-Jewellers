import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';
import ProductCard from '../../pages/ProductCard';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Real Diamond Jewelry Gold Plated',
      price: 499.99,
      salePrice: 399.99,
      rating: 5,
      image: '/featured1.jpeg',
      category: 'Rings',
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: 'Fire Stone Ring 18K Yellow Gold',
      price: 599.99,
      rating: 4,
      image: '/featured1.2.jpeg',
      category: 'Rings',
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: 'Bridal Set with 3 pcs Rose Gold',
      price: 799.99,
      salePrice: 699.99,
      rating: 5,
      image: '/featured3.1.jpeg',
      category: 'Bridal Sets',
      isNew: true,
      isSale: true
    },
    {
      id: 4,
      name: 'Casual Diamond Wedding Ring Yellow',
      price: 349.99,
      rating: 4,
      image: '/featured3.jpeg',
      category: 'Rings',
      isNew: false,
      isSale: false
    },
    {
      id: 5,
      name: 'Infinity Diamond Bracelet',
      price: 299.99,
      rating: 5,
      image: '/featured2.jpeg',
      category: 'Bracelets',
      isNew: true,
      isSale: false
    },
    {
      id: 6,
      name: 'Radiant Diamond Pendant',
      price: 249.99,
      rating: 4,
      image: '/Newthisweek1.jpeg',
      category: 'Pendants',
      isNew: false,
      isSale: false
    },
    {
      id: 7,
      name: 'Elegant Teardrop Earrings',
      price: 199.99,
      salePrice: 159.99,
      rating: 5,
      image: '/featured4.jpeg',
      category: 'Earrings',
      isNew: false,
      isSale: true
    },
    {
      id: 8,
      name: 'Vintage Rose Gold Ring',
      price: 349.99,
      rating: 4,
      image: '/featured1.jpeg',
      category: 'Rings',
      isNew: true,
      isSale: false
    }
  ];
  
  return (
    <div className="featured-products">
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="view-all-container">
        <Link to="/shop" className="btn btn-secondary">VIEW ALL PRODUCTS</Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;