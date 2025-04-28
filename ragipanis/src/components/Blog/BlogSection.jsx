import React from 'react';
import { Link } from 'react-router-dom';
import './BlogSection.css';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Store & Take Care of Your Jewelry Will Last A Lifetime',
      image: '/images/blog-1.jpg',
      date: 'March 15, 2023',
      author: 'Admin',
      excerpt: 'Learn the best practices for storing and maintaining your precious jewelry to ensure it lasts for generations.'
    },
    {
      id: 2,
      title: 'A Jewelry Shopping Guide and How to Choose Jewelry That Suits You',
      image: '/images/blog-2.jpg',
      date: 'April 22, 2023',
      author: 'Admin',
      excerpt: 'Discover how to select jewelry pieces that complement your style, personality, and occasion.'
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Selecting Wedding Rings for Women',
      image: '/images/blog-3.jpg',
      date: 'May 10, 2023',
      author: 'Admin',
      excerpt: 'Everything you need to know about choosing the perfect wedding ring that symbolizes your love and commitment.'
    }
  ];
  
  return (
    <div className="blog-section">
      <div className="blog-grid">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-card">
            <div className="blog-image">
              <Link to={`/blog/${post.id}`}>
                <img src={post.image || "/placeholder.svg"} alt={post.title} />
              </Link>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-author">By {post.author}</span>
              </div>
              <h3 className="blog-title">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more">READ MORE</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;