import React, { useState, useEffect, useRef } from 'react';
import './ProductShowcase.css';
import dnImage from '../img/dn.png';
import shoxImage from '../img/shox.png';
import jordan1Image from '../img/jordan1.png';
import jordan4Image from '../img/jordan4.png';
import jordan4NewImage from '../img/jordan4_new.png';

const ProductShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);

  const products = [
    { 
      id: 1, 
      image: dnImage, 
      name: 'Nike Air Max DN', 
      price: '$120',
      category: 'air-max'
    },
    { 
      id: 2, 
      image: shoxImage, 
      name: 'Nike Shox R4', 
      price: '$150',
      category: 'shox'
    },
    { 
      id: 3, 
      image: jordan1Image, 
      name: 'Air Jordan 1 Retro', 
      price: '$170',
      category: 'jordan'
    },
    { 
      id: 4, 
      image: jordan4Image, 
      name: 'Air Jordan 4 Retro', 
      price: '$200',
      category: 'jordan'
    },
    { 
      id: 5, 
      image: jordan4NewImage, 
      name: 'Air Jordan 4 New', 
      price: '$220',
      category: 'jordan'
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'air-max', name: 'Air Max' },
    { id: 'jordan', name: 'Jordan' },
    { id: 'shox', name: 'Shox' }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

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
    <section className="product-showcase" ref={sectionRef}>
      <div className="showcase-container">
        <div className={`showcase-header ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <h2 className="showcase-title">Our Collection</h2>
          <p className="showcase-subtitle">
            Discover premium footwear designed for performance and style
          </p>
        </div>

        <div className={`category-filter ${isVisible ? 'animate-fadeInUp' : ''}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`product-item ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
            >
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-overlay">
                  <button className="quick-view-btn">View Details</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;