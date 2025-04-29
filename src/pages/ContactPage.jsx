import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

import { FaLocationArrow, FaPhone, FaMailBulk, FaClock} from "react-icons/fa"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          {/* <div className="breadcrumb">
            <Link to="/">Home</Link> / Contact Us
          </div> */}
          <h1>Contact Us</h1>
        </div>
      </div>
      
      <div className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90510355335!2d78.24323639274958!3d17.41260863669482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1742830237690!5m2!1sen!2sin"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Store Location"
              ></iframe>
            </div>
            
            <div className="contact-form-container">
              <div className="contact-form-content">
                <h2>Get In Touch With Us</h2>
                <p>If you wish to directly reach us, Please fill out the form below.</p>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Your email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your message (optional)</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message} 
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="contact-info-boxes">
            <div className="contact-info-box">
              <div className="icon">
                {/* <i className="icon-location"></i> */}
                <FaLocationArrow />
              </div>
              <div className="content">
                <h4>Hyderabad</h4>
                <p>Telangana, India</p>
              </div>
            </div>
            
            <div className="contact-info-box">
              <div className="icon">
                {/* <i className="icon-phone"></i> */}
                <FaPhone />
              </div>
              <div className="content">
                <h4>Call us :</h4>
                <p>+91 XXXXXXXXXX</p>
              </div>
            </div>
            
            <div className="contact-info-box">
              <div className="icon">
                {/* <i className="icon-email"></i> */}
                <FaMailBulk />
              </div>
              <div className="content">
                <h4>Mail us :</h4>
                <p>shivamaniragipani@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-info-box">
              <div className="icon">
                {/* <i className="icon-clock"></i> */}
                <FaClock />
              </div>
              <div className="content">
                <h4>Open time :</h4>
                <p>10:00AM - 6:00PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;