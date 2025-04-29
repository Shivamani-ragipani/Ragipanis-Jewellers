import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';
import ProductCard from '../../pages/ProductCard.jsx';

const FeaturedProducts = () => {
  const products = [
    {
      id: 4,
    name: "Blue Topaz Diamond Engagement Wedding Ring",
    price: 20000,
    originalPrice: 370,
    rating: 4,
    image: "/ragipanis imgs/rings/ring1.jpg",
    category: "Rings",
    metal: "White Gold",
    stone: "Topaz",
    carat: "18KT",
    isNew: true,
    isSale: true,
    },
    {
      id: 127,
      name: "Diamond Halo Engagement Ring",
      price: 32000,
      rating: 5,
      image: "/ragipanis imgs/rings/ring3.jpg",
      category: "Rings",
      metal: "White Gold",
      stone: "Diamond",
      carat: "22KT",
      isNew: true,
      isSale: true,
    },
    {
      id: 87,
    name: "Rose Gold Heart Pendant Necklace",
    price: 19000,
    rating: 4.5,
    image: "/ragipanis imgs/Necklaces/necklace12.1.jpg",
    category: "Necklaces",
    metal: "Rose Gold",
    stone: "Diamond",
    carat: "18KT",
    isNew: true,
    isSale: true,
    },
    {
      id: 39,
      name: "Vintage Opal Gold Bracelet",
      price: 14999,
      rating: 4.6,
      image: "/ragipanis imgs/bracelets/bracelet9.jpg",
      category: "Bracelets",
      metal: "Yellow Gold",
      stone: "Opal",
      carat: "22KT",
      isNew: false,
      isSale: true,
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