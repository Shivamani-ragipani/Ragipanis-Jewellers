import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';
import ProductCard from '../../pages/ProductCard.jsx';

const FeaturedProducts = () => {
  const products = [
    {
      id: 4,
    name: "Engagement Wedding Ring",
    price: 31999,
    originalPrice: 370,
    rating: 4,
    image: "/ragipanis imgs/rings/ring1.jpg",
    category: "Rings",
    metal: "White Gold",
    stone: "Topaz",
    carat: "18KT",
    weight: 6,
    isNew: true,
    isSale: true,
    },
    {
      id: 127,
      name: "Lord Venkateshwara Ring",
      price: 49999,
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
    name: "Womens Gold Necklace",
    price: 89990,
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
      price: 58300,
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
      id: 40,
        name: "Delicate Amethyst Gold Bracelet",
        price: 74200,
        rating: 4.2,
        image: "/ragipanis imgs/bracelets/bracelet17.jpg",
        category: "Bracelets",
      isNew: true,
      isSale: false
    },
    {
      id: 91,
    name: "Gold Flower Choker Necklace",
    price: 115000,
    rating: 5,
    image: "/ragipanis imgs/Necklaces/necklace16.1.jpg",
    category: "Necklaces",
      isNew: false,
      isSale: false
    },
    {
      id: 7,
      name: 'Elegant Teardrop Earrings & Bangles',
      price: 80000,
      salePrice: 69999,
      rating: 5,
      image: '/featured4.jpeg',
      category: 'Earrings',
      isNew: false,
      isSale: true
    },
    {
      id: 127,
    name: "Gold Diamond Flower Engagement Ring",
    price: 26500,
    rating: 5,
    image: "/ragipanis imgs/rings/ring359.jpg",
    category: "Rings",
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