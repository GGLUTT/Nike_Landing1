import React, { useState, useEffect, useRef } from 'react';
import './LatestCollection.css';

const LatestCollection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section className="latest-collection" ref={sectionRef}>
      <div className="collection-container">
        <div className={`collection-header ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <h2 className="collection-title">Discover the Latest Nike</h2>
          <p className="collection-subtitle">
            Elevate Your Style and Performance with Nike's Cutting-Edge Sneaker Collection. Featuring the<br />
            Latest Technologies and Designs, Our Sneakers are Engineered to Provide Unparalleled Comfort,<br />
            Durability, and Athletic Inspiration
          </p>
        </div>

        <div className={`action-buttons ${isVisible ? 'animate-fadeInUp' : ''}`} style={{animationDelay: '0.2s'}}>
          <button className="action-btn primary">Shop Now</button>
          <button className="action-btn secondary">Learn More</button>
          <button className="action-btn tertiary">Explore More</button>
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;