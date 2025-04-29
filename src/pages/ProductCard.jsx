import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Assuming you have a CSS file for styling
// import "../../src/components/Products/FeaturedProducts.css"; 

import { FaHeart, FaSearch, FaShoppingCart, FaStar, FaStarHalf } from "react-icons/fa"
import { BsGrid, BsListUl } from "react-icons/bs"


const ProductCard = ({ product }) => {
  const { id, name, price, salePrice, rating, image, category, isNew, isSale } = product;
  
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i key={i} className={`icon-star ${i <= rating ? 'filled' : ''}`}></i>
      );
    }
    return stars;
  };
  
  return (
    <div className="product-grid">
    <div className="product-card">
      <div className="product-image">
        {/* <Link to={`/product/${id}`}>
          <img src={image || "/placeholder.svg"} alt={name} />
        </Link> */}

        <Link to='/shop'>
          <img src={image || "/placeholder.svg"} alt={name} />
        </Link> 
        
        <div className="product-badges">
          {isNew && <span className="product-badge badge-new">NEW</span>}
          {isSale && <span className="product-badge badge-sale">SALE</span>}
        </div>
        
        <div className="product-actions">
          <button className="action-btn" title="Quick View">
            <FaSearch />
            <i className="icon-eye"></i>
          </button>
          <button className="action-btn" title="Add to Wishlist">
            <FaHeart />
            {/* <i className="icon-heart"></i> */}
          </button>
          <button className="action-btn" title="Compare">
            <FaShoppingCart />
            {/* <i className="icon-compare"></i> */}
            <i className="icon-compare"></i>
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-category">{category}</div>
        <h3 className="product-name">
          {/* <Link to={`/product/${id}`}>{name}</Link> */}
          <Link to='/shop'>{name}</Link>
        </h3>
        
        <div className="product-price">
          <span className="current-price">₹{salePrice || price}</span>
          {salePrice && <span className="old-price">₹{price}</span>}
        </div>
        
        <div className="product-rating">
          {renderStars(rating)}
        </div>
        
        <button className="cart">
          <i className="icon-cart"></i> Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;