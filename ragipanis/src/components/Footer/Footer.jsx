import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Subscribe To Our Newsletter</h3>
              <p>Subscribe to our latest newsletter to get news about special discounts.</p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Email" />
              <button className="btn btn-primary">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-main">
        <div className="container">
          <div className="footer-widgets">
            <div className="footer-widget about-widget">
              <h4>About Our Store</h4>
              <p>Welcome to our store, where we pride ourselves on providing exceptional products and unparalleled customer service our store style, and innovation.</p>
              <div className="app-downloads">
                <Link to="#"><img src="/images/app-store.png" alt="App Store" /></Link>
                <Link to="#"><img src="/images/google-play.png" alt="Google Play" /></Link>
              </div>
            </div>
            
            <div className="footer-widget">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/shipping">Shipping</Link></li>
                <li><Link to="/sitemap">Sitemap</Link></li>
                <li><Link to="/faqs">FAQs</Link></li>
                <li><Link to="/store">Store Us</Link></li>
                <li><Link to="/about">About Us</Link></li>
              </ul>
            </div>
            
            <div className="footer-widget">
              <h4>Services</h4>
              <ul>
                <li><Link to="/order-status">Order Status</Link></li>
                <li><Link to="/terms">Terms Conditions</Link></li>
                <li><Link to="/sellers">Policy For Sellers</Link></li>
                <li><Link to="/buyers">Policy For Buyers</Link></li>
                <li><Link to="/shipping-refund">Shipping & Refund</Link></li>
                <li><Link to="/wholesale">Wholesale Policy</Link></li>
              </ul>
            </div>
            
            <div className="footer-widget">
              <h4>Your Account</h4>
              <ul>
                <li><Link to="/checkout">Checkout</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/delivery">Delivery</Link></li>
                <li><Link to="/sitemap">Sitemap</Link></li>
              </ul>
            </div>
            
            <div className="footer-widget contact-widget">
              <h4>Contact Us</h4>
              <ul className="contact-info">
                <li>
                  <i className="icon-location"></i>
                  <p>ChaitanyaPuri, Hyderabad, Telangana, India</p>
                </li>
                <li>
                  <i className="icon-phone"></i>
                  <p>+91 XXXXXXXXX</p>
                </li>
                <li>
                  <i className="icon-phone"></i>
                  <p>+91 XXXXXXXXX</p>
                </li>
                <li>
                  <i className="icon-email"></i>
                  <p>shivamaniragipani@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="social-links">
              <Link to="#"><i className="icon-facebook"></i></Link>
              <Link to="#"><i className="icon-twitter"></i></Link>
              <Link to="#"><i className="icon-instagram"></i></Link>
              <Link to="#"><i className="icon-pinterest"></i></Link>
              <Link to="#"><i className="icon-google"></i></Link>
            </div>
            <div className="copyright">
              <p>© 2025 Ragipani's Jewellers by Venkatesh Chary</p>
            </div>
            <div className="payment-methods">
              <img src="#" alt="Payment Methods" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;