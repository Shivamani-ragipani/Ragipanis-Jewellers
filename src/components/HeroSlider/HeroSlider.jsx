import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      tag: 'NEW TREND & PROMOTIONS',
      title: 'Woman in Golden Rings And Necklaces',
      subtitle: 'Exquisite products for the dynamic urban lifestyle',
      image: '/banner4.png',
      link: '/shop/Necklaces'
    },
    {
      id: 2,
      tag: 'SPECIAL COLLECTION',
      title: 'Elegant Diamond Jewelry Collection',
      subtitle: 'Timeless beauty with exceptional craftsmanship',
      image: '/banner1.png',
      link: '/shop'
    },
    {
      id: 3,
      tag: 'LIMITED EDITION',
      title: 'Luxury Wedding Collection',
      subtitle: 'Make your special day even more memorable',
      image: '/banner3.png',
      link: '/shop'
    },
    {
      id: 4,
      tag: 'LIMITED EDITION',
      title: 'Luxury Wedding Collection',
      subtitle: 'Make your special day even more memorable',
      image: '/banner2.png',
      link: '/shop'
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  const goToSlide = (index) => {
    setActiveSlide(index);
  };
  
  const nextSlide = () => {
    setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  return (
    <div className="hero-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="container">
              <div className="slide-content">
                <span className="slide-tag">{slide.tag}</span>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <Link to={slide.link} className="btn btn-primary">SHOP NOW</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="slider-controls">
        <button className="slider-arrow prev" onClick={prevSlide}>
          <i className="icon-arrow-left"></i>
        </button>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button 
              key={index} 
              className={`slider-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        <button className="slider-arrow next" onClick={nextSlide}>
          <i className="icon-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;