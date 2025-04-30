import React, { useState, useEffect } from "react";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import Shop from "../Shop/Shop.jsx";
import "./Header.css";

import {
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaStar,
  FaUser,
} from "react-icons/fa";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Update cart and wishlist counts from localStorage or state management
    const storedWishlistCount = JSON.parse(localStorage.getItem("wishlistCount")) || 0;
    const storedCartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;
    setWishlistCount(storedWishlistCount);
    setCartCount(storedCartCount);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleCartUpdate = () => {
      const updatedCartCount = JSON.parse(localStorage.getItem("cartCount")) || 0;
      setCartCount(updatedCartCount);
    };
  
    // ✅ Listen for custom event
    window.addEventListener("cartCountUpdated", handleCartUpdate);
  
    return () => window.removeEventListener("cartCountUpdated", handleCartUpdate);
  }, []);


  useEffect(() => {
    const handleWishlistUpdate = () => {
      const updatedWishlistCount = JSON.parse(localStorage.getItem("wishlistCount")) || 0;
      setWishlistCount(updatedWishlistCount);
    };
  
    // ✅ Listen for custom event
    window.addEventListener("wishlistCountUpdated", handleWishlistUpdate);
  
    return () => window.removeEventListener("wishlistCountUpdated", handleWishlistUpdate);
  }, []);
  
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      {/* Will Add this at end of the project */}
      {/* <div className="top-bar">
        <div className="container">
          <p className="free-shipping">Free shipping world wide for all orders over $199 <Link to="/shop">Shop Now</Link></p>
          <div className="top-links">
            <Link to="/about">About Us</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/faqs">FAQs</Link>
          </div>
        </div>
      </div>
       */}

      <div className="main-header">
        <div className="container">
          <div className="logo">
            <Link to="/">Ragipani's</Link>
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <NavLink to="/" end>
                  HOME
                </NavLink>
              </li>
              <li className="has-dropdown">
                <NavLink to="/shop">SHOP</NavLink>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <div className="dropdown-column">
                      <h4>Shop Categories</h4>
                      <ul>
                        <li>
                          <Link to="/shop/Rings">Rings</Link>
                        </li>
                        <li>
                          <Link to="/shop/Necklaces">Necklaces</Link>
                        </li>
                        <li>
                          <Link to="/shop/Earrings">Earrings</Link>
                        </li>
                        <li>
                          <Link to="/shop/Bracelets">Bracelets</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-column">
                      <h4>Collections</h4>
                      <ul>
                        <li>
                          <Link to="/shop">Gold Collection</Link>
                        </li>
                        <li>
                          <Link to="/shop">Diamond Collection</Link>
                        </li>
                        <li>
                          <Link to="/shop">Wedding Collection</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li className="has-dropdown">
                <NavLink to="/categories">CATEGORIES <span className="badge">NEW</span></NavLink>
                <div className="dropdown-menu">
                  <ul>
                    <li><Link to="/categories/gold">Gold Jewelry</Link></li>
                    <li><Link to="/categories/diamond">Diamond Jewelry</Link></li>
                    <li><Link to="/categories/silver">Silver Jewelry</Link></li>
                  </ul>
                </div>
              </li> */}

              {/* Hiding the Product Details from Nav Bar */}
              {/* <li className="has-dropdown">
                <NavLink to="/products">PRODUCTS <span className="badge">HOT</span></NavLink>
                <div className="dropdown-menu">
                  <ul>
                    <li><Link to="/products/featured">Featured Products</Link></li>
                    <li><Link to="/products/bestsellers">Best Sellers</Link></li>
                    <li><Link to="/products/new">New Arrivals</Link></li>
                  </ul>
                </div>
              </li> */}

              {/* Hiding Top deals Details at Present */}
              {/* <li className="has-dropdown">
                      <NavLink to="/deals">TOP DEALS</NavLink>
                      <div className="dropdown-menu">
                        <ul>
                        <li><Link to="/deals/clearance">Clearance</Link></li>
                        <li><Link to="/deals/sale">Sale Items</Link></li>
                        </ul>
                      </div>
                      </li> */}

              <li className="has-dropdown">
                <NavLink to="/blog">BLOG</NavLink>
              </li>

              <li className="has-dropdown">
                <NavLink to="/about">ABOUT US</NavLink>
              </li>

              <li className="has-dropdown">
                <NavLink to="/contact">CONTACT US</NavLink>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button
              className="search-toggle"
              onClick={() => alert("Search functionality coming soon!")}
            >
              {/* <i className="icon-search"></i> */}
              <FaSearch />
            </button>
            <Link to="/account" className="account-link">
              {/* <i className="icon-user"></i> */}
              <FaUser />
            </Link>
            <Link to="/wishlist" className="wishlist-link">
              <FaHeart />
              {/* <i className="icon-heart"></i> */}
              {wishlistCount > 0 && (
                <span className="count">{wishlistCount}</span>
              )}
            </Link>
            <Link to="/cart" className="cart-link">
              {/* <i className="icon-cart"></i> */}
              <FaShoppingCart />
              {cartCount > 0 && <span className="count">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
