import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../pages/ProductCard.jsx';

const LatestProducts = () => {
  const products = [
   {
      id: 1,
      name: "Hollow Parrot Model Jhumka with Tower Attachment",
      price: 53000,
      rating: 4.5,
      image: "/ragipanis imgs/earrings/earring1.jpg",
      category: "Earrings",
      isNew: true,
      isSale: false,
      },
    {
      id: 2,
        name: "Royal Blue Sapphire Gold Bracelet",
        price: 68900,
        rating: 4,
        image: "/ragipanis imgs/bracelets/bracelet1.jpg",
        category: "Bracelets",
        isNew: true,
        isSale: false,
    },
    {
      id: 3,
      name: "Celestial Nakshatra Necklace",
      price: 132000,
      originalPrice: 180,
      rating: 4,
      image: "/ragipanis imgs/Necklaces/necklace1.jpg",
      category: "Necklaces",
      isNew: true,
      isSale: false,
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