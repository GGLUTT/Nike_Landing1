import React, { useState, useEffect, useRef } from 'react';
import './Products.css';
import dnImage from '../img/dn.png';
import shoxImage from '../img/shox.png';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const products = [
    {
      id: 1,
      name: 'Nike Air Max DN',
      category: 'running',
      price: '$120',
      image: dnImage,
      colors: ['#ff6b6b', '#4ecdc4', '#45b7d1'],
      rating: 4.8
    },
    {
      id: 2,
      name: 'Nike Shox R4',
      category: 'lifestyle',
      price: '$150',
      image: shoxImage,
      colors: ['#96ceb4', '#feca57', '#ff9ff3'],
      rating: 4.9
    },
    {
      id: 3,
      name: 'Nike Air Force 1',
      category: 'basketball',
      price: '$90',
      image: dnImage,
      colors: ['#ffffff', '#000000', '#ff6b6b'],
      rating: 4.7
    },
    {
      id: 4,
      name: 'Nike React Infinity',
      category: 'running',
      price: '$160',
      image: shoxImage,
      colors: ['#45b7d1', '#96ceb4', '#feca57'],
      rating: 4.6
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'running', name: 'Running' },
    { id: 'basketball', name: 'Basketball' },
    { id: 'lifestyle', name: 'Lifestyle' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="products" ref={sectionRef}>
      <div className="products-container">
        <div className={`products-header ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Discover our latest collection of premium sneakers</p>
        </div>

        <div className={`category-filter ${isVisible ? 'animate-fadeInUp' : ''}`} style={{animationDelay: '0.2s'}}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`product-card ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{animationDelay: `${0.4 + index * 0.1}s`}}
            >
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-overlay">
                  <button className="quick-view-btn">Quick View</button>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>★</span>
                  ))}
                  <span className="rating-text">({product.rating})</span>
                </div>
                <div className="product-colors">
                  {product.colors.map((color, i) => (
                    <div key={i} className="color-option" style={{backgroundColor: color}}></div>
                  ))}
                </div>
                <div className="product-price">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;