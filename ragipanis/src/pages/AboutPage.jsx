import React from 'react';
import { Link } from 'react-router-dom';
import { FaGem, FaAward, FaHandshake, FaHeart, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="about-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>About Us</span>
          </div>
          <h1>Our Story</h1>
        </div>
      </div>

   { /* Introduction Section */}
        <section className="about-intro">
          <div className="container">
            <div className="intro-content">
            <div className="intro-text">
              <h2>Ragipani's Jewellers</h2>
              <p>
                Welcome to Ragipani's Jewellers, a name synonymous with trust and tradition since the 1990s. 
                Our journey began in the vibrant neighborhood of Chikkadpally, where we earned the love and 
                loyalty of our customers through our exquisite craftsmanship and dedication to quality. 
                Over the years, we have grown and evolved, relocating to Chaitanya Puri to better serve 
                our patrons while continuing to uphold the values that define us.
              </p>
              <p>
                At Ragipani's Jewellers, we take pride in offering a diverse collection of timeless designs 
                crafted with precision and care. Whether you're celebrating a milestone or looking for a 
                cherished keepsake, our creations are designed to make every moment special. With a legacy 
                built on excellence and a commitment to innovation, we invite you to be a part of our story 
                and discover the perfect piece that resonates with your unique journey.
              </p>
            </div>
            <div className="intro-image">
              <img src="/jewellery_sample_logo.webp" alt="Ragipani's Jewellers Storefront" />
            </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaGem />
              </div>
              <h3>Quality Craftsmanship</h3>
              <p>
                We meticulously handcraft each piece using traditional techniques passed down 
                through generations, ensuring exceptional quality and attention to detail.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h3>Ethical Sourcing</h3>
              <p>
                We are committed to responsible sourcing practices, ensuring all our gemstones 
                and precious metals are conflict-free and ethically obtained.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaHeart />
              </div>
              <h3>Customer Relationship</h3>
              <p>
                We build lasting relationships with our clients, providing personalized service 
                and guidance to help you find or create the perfect piece for every occasion.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaAward />
              </div>
              <h3>Excellence</h3>
              <p>
                We strive for excellence in everything we do, from design and craftsmanship to 
                customer service and after-sales support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="about-process">
        <div className="container">
          <h2 className="section-title">Our Craftsmanship Process</h2>
          <div className="process-content">
            <div className="process-image">
              <img src="/jewellery_craftsmanShip.png" alt="Jewelry Craftsmanship" />
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Design</h3>
                  <p>
                    Our designers draw inspiration from art, architecture, nature, and cultural 
                    heritage to create unique designs that balance timeless elegance with 
                    contemporary sensibilities.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Material Selection</h3>
                  <p>
                    We carefully select the finest materials – from ethically sourced diamonds 
                    and gemstones to premium precious metals – ensuring each component meets 
                    our exacting standards.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>Crafting</h3>
                  <p>
                    Our master artisans combine traditional techniques with modern technology 
                    to bring designs to life, paying meticulous attention to every detail.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h3>Quality Assurance</h3>
                  <p>
                    Each piece undergoes rigorous quality checks to ensure it meets our 
                    standards for craftsmanship, durability, and beauty before it reaches you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="about-team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/Venkatesh_ragipani.png" alt="Venkatesh Ragipani" />
                <div className="member-social">
                  <a href="#" className="social-link"><FaInstagram /></a>
                  <a href="#" className="social-link"><FaFacebookF /></a>
                  <a href="#" className="social-link"><FaLinkedinIn /></a>
                </div>
              </div>
              <h3>Venkatesh Ragipani</h3>
              <p className="member-title">Founder & Creative Director</p>
              <p className="member-bio">
                With over 30 years of experience in fine jewelry design, Emily founded 
                Elegance Jewels with a vision to create pieces that celebrate life's 
                special moments.
              </p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src="/Shivamani.jpg" alt="Shivamani ragipani" />
                <div className="member-social">
                  <a href="#" className="social-link"><FaInstagram /></a>
                  <a href="#" className="social-link"><FaTwitter /></a>
                  <a href="#" className="social-link"><FaLinkedinIn /></a>
                </div>
              </div>
              <h3>Shivamani Ragipani</h3>
              <p className="member-title">Co-Founder and Lead Designer</p>
              <p className="member-bio">
                Shivamani brings a contemporary perspective to traditional jewelry design, 
                creating pieces that blend classic elegance with modern sensibilities.
              </p>
            </div>

            {/* <div className="team-member">
              <div className="member-image">
                <img src="/images/about/craftsman.jpg" alt="Robert Patel" />
                <div className="member-social">
                  <a href="#" className="social-link"><FaInstagram /></a>
                  <a href="#" className="social-link"><FaFacebookF /></a>
                  <a href="#" className="social-link"><FaLinkedinIn /></a>
                </div>
              </div>
              <h3>Robert Patel</h3>
              <p className="member-title">Master Craftsman</p>
              <p className="member-bio">
                With decades of experience, Robert leads our workshop, ensuring each piece 
                meets our exacting standards for craftsmanship and quality.
              </p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src="/images/about/gemologist.jpg" alt="Sophia Martinez" />
                <div className="member-social">
                  <a href="#" className="social-link"><FaInstagram /></a>
                  <a href="#" className="social-link"><FaTwitter /></a>
                  <a href="#" className="social-link"><FaLinkedinIn /></a>
                </div>
              </div>
              <h3>Sophia Martinez</h3>
              <p className="member-title">Gemologist</p>
              <p className="member-bio">
                Sophia's expertise in gemology ensures we source only the finest stones, 
                with a particular focus on ethical and sustainable practices.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="about-milestones">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1995</div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>
                  Elegance Jewels was founded in a small workshop with a commitment to 
                  exceptional craftsmanship and design.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2003</div>
              <div className="timeline-content">
                <h3>First Flagship Store</h3>
                <p>
                  We opened our first flagship store, creating a space where clients could 
                  experience our jewelry in an elegant setting.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h3>International Recognition</h3>
                <p>
                  Our commitment to excellence was recognized with our first international 
                  design award, establishing our reputation globally.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Ethical Sourcing Initiative</h3>
                <p>
                  We launched our comprehensive ethical sourcing initiative, ensuring all 
                  our materials meet the highest standards of responsibility.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Digital Transformation</h3>
                <p>
                  We embraced the digital age, launching our online store to bring the 
                  Elegance Jewels experience to clients worldwide.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">Today</div>
              <div className="timeline-content">
                <h3>Continuing Our Legacy</h3>
                <p>
                  We continue to grow while staying true to our founding principles of 
                  quality, craftsmanship, and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="about-visit">
        <div className="container">
          <div className="visit-content">
            <div className="visit-text">
              <h2>Visit Our Showroom</h2>
              <p>
                We invite you to experience Elegance Jewels in person. Visit our showroom 
                to explore our collections, meet our team, and discover the perfect piece 
                for your special moment.
              </p>
              <div className="visit-info">
                <div className="info-item">
                  <h3>Address</h3>
                  <p>123 Luxury Lane</p>
                  <p>Diamond District</p>
                  <p>New York, NY 10001</p>
                </div>
                <div className="info-item">
                  <h3>Hours</h3>
                  <p>Monday - Friday: 10am - 7pm</p>
                  <p>Saturday: 10am - 6pm</p>
                  <p>Sunday: 12pm - 5pm</p>
                </div>
                <div className="info-item">
                  <h3>Contact</h3>
                  <p>Phone: (212) 555-7890</p>
                  <p>Email: info@elegancejewels.com</p>
                </div>
              </div>
              <Link to="/contact" className="contact-btn">Contact Us</Link>
            </div>
            <div className="visit-image">
              <img src="/images/about/showroom.jpg" alt="Elegance Jewels Showroom" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;