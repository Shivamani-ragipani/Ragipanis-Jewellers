import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Shiva Reddy',
      role: 'Regular Customer',
      image: '/my-avatar.png',
      text: '"Ragipanis Product is Consistently Delivers Exceptional quality and service. Their attention to detail and commitment to customer satisfaction is unmatched in the industry."'
    },
    {
      id: 2,
      name: 'Dhanalaxmi Reddy',
      role: 'Verified Buyer',
      image: '/avatar-2.png',
      text: '"Great Product! Price Matches Perfect! Their jewelry pieces are not only beautiful but also durable and exactly as described. The customer service team was incredibly helpful."'
    },
    {
      id: 3,
      name: 'Swetha Chary',
      role: 'Loyal Customer',
      image: '/avatar-3.png',
      text: '"Impressive Quality & Excellent Service! I\'ve been shopping with Ragipanis for years and have never been disappointed. Their products are stunning and the service is always top-notch."'
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const goToSlide = (index) => {
    setActiveSlide(index);
  };
  
  return (
    <div className="testimonials-slider">
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={`testimonial-slide ${index === activeSlide ? 'active' : ''}`}
          >
            <div className="testimonial-content">
              <div className="testimonial-text">{testimonial.text}</div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button 
            key={index} 
            className={`testimonial-dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;