import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaStarHalf, FaHeart, FaShoppingCart, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // In a real app, this would be an API call
    // Simulating product data fetch
    setTimeout(() => {
      const productData = [
        {
          id: 1,
          name: 'Beautiful Diamond Stud Earle Earring Rose Gold',
          price: { min: 210, max: 350 },
          rating: 4.5,
          image: '/featured1.jpeg',
          images: [
            '/featured1.jpeg',
            '/featured1.jpeg',
            '/featured1.jpeg',
          ],
          category: 'Earrings',
          metal: 'Rose Gold',
          stone: 'Diamond',
          carat: '18KT',
          isNew: false,
          isSale: false,
          discount: 0,
          description: 'These beautiful diamond stud earrings are crafted in rose gold with a secure backing. Perfect for everyday wear or special occasions.',
          details: {
            weight: '2.5g',
            dimensions: '0.5 x 0.5 x 0.3 inches',
            materials: 'Rose Gold, Diamond',
            sku: 'ERG-001',
          },
          reviews: [
            { id: 1, author: 'Sarah M.', rating: 5, date: '2023-05-15', text: 'Absolutely beautiful earrings! They sparkle so nicely and are comfortable to wear all day.' },
            { id: 2, author: 'Jessica T.', rating: 4, date: '2023-04-22', text: 'Great quality and beautiful design. Slightly smaller than I expected but still lovely.' },
          ]
        },
        // More products would be here...
        {
          id: 2,
          name: 'Beautiful Diamond Romee Earring Rose Gold',
          price: { min: 149, max: 320 },
          rating: 5,
          image: '/images/products/earring-2.jpg',
          images: [
            '/images/products/earring-2.jpg',
            '/images/products/earring-2-alt.jpg',
            '/images/products/earring-2-alt2.jpg',
          ],
          category: 'Earrings',
          metal: 'Rose Gold',
          stone: 'Diamond',
          carat: '22KT',
          isNew: false,
          isSale: false,
          discount: 0,
          description: 'The Romee earrings feature a delicate diamond arrangement in premium rose gold, designed to add elegance to any outfit.',
          details: {
            weight: '3g',
            dimensions: '0.6 x 0.6 x 0.4 inches',
            materials: 'Rose Gold, Diamond',
            sku: 'ERG-002',
          },
          reviews: [
            { id: 1, author: 'Emily R.', rating: 5, date: '2023-06-10', text: 'These earrings are stunning! The diamonds catch the light beautifully.' },
            { id: 2, author: 'Michelle K.', rating: 5, date: '2023-05-28', text: 'Perfect size and weight. Very comfortable to wear and I get compliments every time.' },
          ]
        },
        // Add more products here...
      ];
      
      // Find the product with the matching ID
      const foundProduct = productData.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
      
      // Get related products (same category)
      if (foundProduct) {
        const related = productData
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
      
      setLoading(false);
    }, 500);
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    if (product) {
      alert(`Added ${quantity} ${product.name} to cart!`);
      // In a real app, dispatch to cart state/API
    }
  };

  const addToWishlist = () => {
    if (product) {
      alert(`Added ${product.name} to wishlist!`);
      // In a real app, dispatch to wishlist state/API
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="star filled" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalf key={i} className="star filled" />);
      } else {
        stars.push(<FaStar key={i} className="star" />);
      }
    }

    return stars;
  };

  if (loading) {
    return (
      <div className="product-loading">
        <div className="container">
          <div className="loading-spinner"></div>
          <p>Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h2>Product Not Found</h2>
          <p>Sorry, the product you are looking for does not exist.</p>
          <Link to="/shop" className="back-to-shop">Back to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-container">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / 
            <Link to="/shop">Shop</Link> / 
            <Link to={`/shop/${product.category.toLowerCase()}`}>{product.category}</Link> / 
            <span>{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="product-detail container">
        <div className="product-gallery">
          <div className="main-image">
            <img 
              src={product.images ? product.images[selectedImage] : product.image} 
              alt={product.name} 
            />
            {product.isSale && (
              <div className="product-badge sale">
                <span>{product.discount}%</span>
              </div>
            )}
            {product.isNew && (
              <div className="product-badge new">
                <span>NEW</span>
              </div>
            )}
          </div>
          {product.images && product.images.length > 1 && (
            <div className="thumbnail-images">
              {product.images.map((img, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={img || "/placeholder.svg"} alt={`${product.name} - view ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-meta">
            <div className="product-rating">
              <div className="stars">
                {renderStars(product.rating)}
              </div>
              <span className="review-count">
                ({product.reviews ? product.reviews.length : 0} Reviews)
              </span>
            </div>
            
            <div className="product-price">
              {product.price.min === product.price.max ? (
                <>
                  {product.originalPrice && (
                    <span className="old-price">${product.originalPrice}</span>
                  )}
                  <span className="current-price">${product.price.min}</span>
                </>
              ) : (
                <span className="price-range">${product.price.min} – ${product.price.max}</span>
              )}
            </div>
          </div>
          
          <div className="product-short-description">
            <p>{product.description}</p>
          </div>
          
          <div className="product-attributes">
            <div className="attribute">
              <span className="attribute-label">Category:</span>
              <span className="attribute-value">{product.category}</span>
            </div>
            <div className="attribute">
              <span className="attribute-label">Metal:</span>
              <span className="attribute-value">{product.metal}</span>
            </div>
            <div className="attribute">
              <span className="attribute-label">Stone:</span>
              <span className="attribute-value">{product.stone}</span>
            </div>
            <div className="attribute">
              <span className="attribute-label">Carat:</span>
              <span className="attribute-value">{product.carat}</span>
            </div>
          </div>
          
          <div className="product-actions">
            <div className="quantity-selector">
              <button className="quantity-btn minus" onClick={decreaseQuantity}>-</button>
              <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={handleQuantityChange} 
                className="quantity-input"
              />
              <button className="quantity-btn plus" onClick={increaseQuantity}>+</button>
            </div>
            
            <button className="add-to-cart-btn" onClick={addToCart}>
              <FaShoppingCart /> Add to Cart
            </button>
            
            <button className="wishlist-btn" onClick={addToWishlist}>
              <FaHeart /> Add to Wishlist
            </button>
          </div>
          
          <div className="product-share">
            <span>Share:</span>
            <div className="social-icons">
              <a href="#" className="social-icon facebook"><FaFacebookF /></a>
              <a href="#" className="social-icon twitter"><FaTwitter /></a>
              <a href="#" className="social-icon pinterest"><FaPinterestP /></a>
              <a href="#" className="social-icon instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="product-tabs container">
        <div className="tabs-header">
          <button 
            className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Additional Information
          </button>
          <button 
            className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({product.reviews ? product.reviews.length : 0})
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'description' && (
            <div className="description-tab">
              <p>{product.description}</p>
              <p>This exquisite piece is meticulously crafted to perfection, showcasing the finest materials and expert craftsmanship. Each detail has been carefully considered to create a piece that is not only beautiful but also durable and comfortable to wear.</p>
              <p>Whether you're looking for something special for yourself or a meaningful gift for someone you love, this piece is sure to delight with its timeless elegance and quality.</p>
            </div>
          )}
          
          {activeTab === 'details' && (
            <div className="details-tab">
              <table className="details-table">
                <tbody>
                  <tr>
                    <th>Weight</th>
                    <td>{product.details?.weight || 'N/A'}</td>
                  </tr>
                  <tr>
                    <th>Dimensions</th>
                    <td>{product.details?.dimensions || 'N/A'}</td>
                  </tr>
                  <tr>
                    <th>Materials</th>
                    <td>{product.details?.materials || 'N/A'}</td>
                  </tr>
                  <tr>
                    <th>SKU</th>
                    <td>{product.details?.sku || 'N/A'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className="reviews-tab">
              {product.reviews && product.reviews.length > 0 ? (
                <div className="reviews-list">
                  {product.reviews.map(review => (
                    <div key={review.id} className="review-item">
                      <div className="review-header">
                        <div className="reviewer-info">
                          <h4>{review.author}</h4>
                          <div className="review-date">{review.date}</div>
                        </div>
                        <div className="review-rating">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <div className="review-content">
                        <p>{review.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-reviews">There are no reviews yet.</p>
              )}
              
              <div className="add-review">
                <h3>Add a Review</h3>
                <form className="review-form">
                  <div className="form-group">
                    <label>Your Rating</label>
                    <div className="rating-selector">
                      <div className="stars">
                        {[1, 2, 3, 4, 5].map(star => (
                          <FaStar key={star} className="star" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="review-text">Your Review</label>
                    <textarea id="review-text" rows="5" required></textarea>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="reviewer-name">Name</label>
                      <input type="text" id="reviewer-name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="reviewer-email">Email</label>
                      <input type="email" id="reviewer-email" required />
                    </div>
                  </div>
                  <button type="submit" className="submit-review-btn">Submit Review</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="related-products container">
          <h2 className="section-title">Related Products</h2>
          <div className="products-grid">
            {relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="product-card">
                <Link to={`/product/${relatedProduct.id}`} className="product-link">
                  <div className="product-image">
                    <img src={relatedProduct.image || "/placeholder.svg"} alt={relatedProduct.name} />
                    
                    {relatedProduct.isSale && (
                      <div className="product-badge sale">
                        <span>{relatedProduct.discount}%</span>
                      </div>
                    )}
                    
                    {relatedProduct.isNew && (
                      <div className="product-badge new">
                        <span>NEW</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="product-info">
                    <div className="product-category">{relatedProduct.category}</div>
                    <h3 className="product-name">{relatedProduct.name}</h3>
                    
                    <div className="product-rating">
                      <div className="stars">
                        {renderStars(relatedProduct.rating)}
                      </div>
                    </div>
                    
                    <div className="product-price">
                      {relatedProduct.price.min === relatedProduct.price.max ? (
                        <>
                          {relatedProduct.originalPrice && (
                            <span className="old-price">${relatedProduct.originalPrice}</span>
                          )}
                          <span className="current-price">${relatedProduct.price.min}</span>
                        </>
                      ) : (
                        <span className="price-range">${relatedProduct.price.min} – ${relatedProduct.price.max}</span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;