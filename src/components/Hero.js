import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import dnImage from '../img/dn.png';
import shoxImage from '../img/shox.png';
import jordan1Image from '../img/jordan1.png';
import jordan4Image from '../img/jordan4.png';

const ProductCarousel = () => {
  const [active, setActive] = useState(0);
  const [calculation, setCalculation] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const shoes = [
    {
      id: 1,
      name: 'Nike Air Max DN',
      image: dnImage,
      price: '$120',
      category: 'Air Max',
      description: 'Experience the future of footwear with innovative Air Max technology that delivers unparalleled comfort and style.',
      color: '#81baa0'
    },
    {
      id: 2,
      name: 'Nike Shox R4',
      image: shoxImage,
      price: '$150',
      category: 'Shox',
      description: 'Revolutionary Shox technology provides responsive cushioning and energy return for your most demanding activities.',
      color: '#659cdf'
    },
    {
      id: 3,
      name: 'Air Jordan 1 Retro',
      image: jordan1Image,
      price: '$170',
      category: 'Jordan',
      description: 'The iconic silhouette that started it all. Classic design meets modern comfort in this timeless basketball legend.',
      color: '#e74c3c'
    },
    {
      id: 4,
      name: 'Air Jordan 4 Retro',
      image: jordan4Image,
      price: '$200',
      category: 'Jordan',
      description: 'Premium craftsmanship and innovative design come together in this legendary basketball shoe that redefined the game.',
      color: '#f39c12'
    }
  ];

  const handleViewDetails = (shoe) => {
    alert(`Product: ${shoe.name}\nPrice: ${shoe.price}\nCategory: ${shoe.category}\n\n${shoe.description}`);
  };

  const startAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  const setSlider = () => {
    if (carouselRef.current) {
      carouselRef.current.style.setProperty('--calculation', calculation);
    }
    startAutoPlay();
  };

  const handleNext = () => {
    setActive(prev => prev + 1 > shoes.length - 1 ? 0 : prev + 1);
    setCalculation(1);
  };

  const handlePrev = () => {
    setActive(prev => prev - 1 < 0 ? shoes.length - 1 : prev - 1);
    setCalculation(-1);
  };

  const handleDotClick = (index) => {
    setActive(index);
    setCalculation(index > active ? 1 : -1);
  };

  useEffect(() => {
    setSlider();
  }, [active]);

  useEffect(() => {
    startAutoPlay();
    setIsLoaded(true);
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  return (
    <section className={`product-carousel ${isLoaded ? 'loaded' : ''}`} id="products">
      <div className="carousel" ref={carouselRef}>
        {/* Animated Background */}
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="list">
          {shoes.map((shoe, index) => (
            <div
              key={shoe.id}
              className={`item ${index === active ? 'active' : ''}`}
              style={{ '--accent-color': shoe.color }}
            >
              <figure>
                <img src={shoe.image} alt={shoe.name} />
                <div className="image-glow" style={{ background: `radial-gradient(circle, ${shoe.color}40, transparent 70%)` }}></div>
              </figure>
              <div className="content">
                <div className="category">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  {shoe.category}
                </div>
                <h2>
                  {shoe.name.split(' ').map((word, i) => (
                    <span key={i} className="word" style={{ animationDelay: `${i * 0.1}s` }}>
                      {word}{' '}
                    </span>
                  ))}
                </h2>
                <div className="description">
                  <p>{shoe.description}</p>
                  <div className="price-container">
                    <span className="price-label">Price</span>
                    <div className="price">{shoe.price}</div>
                  </div>
                </div>
                <div className="more">
                  <button className="btn-primary" onClick={() => handleViewDetails(shoe)}>
                    <span>View Details</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="btn-secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
                    </svg>
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button onClick={handlePrev} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={handleNext} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="indicators">
          <div className="number-container">
            <div className="number">0{active + 1}</div>
            <div className="total">/ 0{shoes.length}</div>
          </div>
          <ul>
            {shoes.map((_, index) => (
              <li
                key={index}
                className={index === active ? 'active' : ''}
                onClick={() => handleDotClick(index)}
              >
                <span className="dot-fill"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll Down</div>
          <div className="scroll-line">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;