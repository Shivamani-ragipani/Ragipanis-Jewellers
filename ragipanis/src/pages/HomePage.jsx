import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import FeaturedProducts from '../components/Products/FeaturedProducts';
import LatestProducts from '../components/Products/LatestProducts';
import Testimonials from '../components/Testimonials/Testimonials';
import FeaturedCategories from '../components/Categories/FeaturedCategories';
import BlogSection from '../components/Blog/BlogSection';
import BrandSlider from '../components/BrandSlider/BrandSlider';
import ServiceFeatures from '../pages/ServiceFeatures';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSlider />
      
      <ServiceFeatures />
      
      <section className="featured-categories section">
        <div className="container">
          <h2 className="section-title">Featured Categories</h2>
          <p className="section-subtitle">Browse our featured categories of the month</p>
          <FeaturedCategories />
        </div>
      </section>
      
      <section className="latest-products section">
        <div className="container">
          <h2 className="section-title">Latest Products</h2>
          <p className="section-subtitle">Browse our latest products</p>
          <LatestProducts />
        </div>
      </section>
      
      <section className="featured-products section bg-light">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Discover our most popular jewelry pieces</p>
          <FeaturedProducts />
        </div>
      </section>
      
      <section className="special-offer section">
        <div className="container">
          <div className="special-offer-grid">
            <div className="special-offer-item">
              <div className="special-offer-content">
                <span className="special-tag">NEW THIS WEEK</span>
                <h3>Women's Rose Gold Necklace</h3>
                <p>Exquisite craftsmanship for the discerning woman</p>
                <Link to="/shop/necklaces" className="btn btn-secondary">SHOP NOW</Link>
              </div>
              <div className="special-offer-image">
                <img src="/Newthisweek1.jpeg" alt="Rose Gold Necklace" />
              </div>
            </div>
            <div className="special-offer-item">
              <div className="special-offer-content">
                <span className="special-tag">BEST SELLER</span>
                <h3>Rose Gold Ring For Women</h3>
                <p>Elegant design with premium craftsmanship</p>
                <Link to="/shop/rings" className="btn btn-secondary">SHOP NOW</Link>
              </div>
              <div className="special-offer-image">
                <img src="/newthisweek2.jpeg" alt="Rose Gold Ring" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="featured-product section">
        <div className="container">
          <div className="featured-product-banner">
            <div className="featured-product-content">
              <span className="featured-tag">TOP PICKS & TRENDING</span>
              <h2>Drop Cut Blue Necklace With Earrings Set</h2>
              <p>Stunning blue gemstones set in elegant rose gold settings</p>
              <Link to="/shop/necklaces/blue-set" className="btn btn-primary">SHOP NOW</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <Testimonials />
        </div>
      </section>
      
      <section className="featured-bracelet section">
        <div className="container">
          <div className="featured-bracelet-banner">
            <div className="featured-bracelet-content">
              <span className="featured-tag">EXCLUSIVE PRODUCT</span>
              <h2>Rose Gold With Diamond Hotell Bracelet</h2>
              <p>Luxurious bracelet with premium diamonds and rose gold finish</p>
              <Link to="/shop/bracelets/diamond-hotell" className="btn btn-primary">SHOP NOW</Link>
            </div>
            <div className="featured-bracelet-image">
              <img src="/images/diamond-bracelet.jpg" alt="Diamond Bracelet" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="blog-section section">
        <div className="container">
          <h2 className="section-title">Our Latest Blog</h2>
          <p className="section-subtitle">Read our latest news and articles</p>
          <BlogSection />
        </div>
      </section>
      
      <section className="brands-section section">
        <div className="container">
          <BrandSlider />
        </div>
      </section>
    </div>
  );
};

export default HomePage;