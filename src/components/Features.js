import React, { useState, useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      id: 1,
      icon: '🚀',
      title: 'Advanced Cushioning',
      description: 'Revolutionary Air Max technology provides superior comfort and impact protection for all-day wear.',
      color: '#ff6b6b'
    },
    {
      id: 2,
      icon: '💨',
      title: 'Breathable Design',
      description: 'Engineered mesh upper ensures optimal airflow, keeping your feet cool and dry during intense activities.',
      color: '#4ecdc4'
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Lightweight Performance',
      description: 'Ultra-lightweight materials deliver exceptional performance without compromising on durability.',
      color: '#feca57'
    },
    {
      id: 4,
      icon: '🎯',
      title: 'Precision Fit',
      description: 'Adaptive lacing system and ergonomic design provide a personalized, secure fit for every foot shape.',
      color: '#45b7d1'
    }
  ];

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
    <section className="features" ref={sectionRef}>
      <div className="features-container">
        <div className={`features-header ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <h2 className="section-title">Why Choose Nike?</h2>
          <p className="section-subtitle">Experience the perfect blend of innovation, style, and performance</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className={`feature-card ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
            >
              <div className="feature-icon" style={{background: `linear-gradient(135deg, ${feature.color}, ${feature.color}88)`}}>
                <span>{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-line" style={{background: feature.color}}></div>
            </div>
          ))}
        </div>

        <div className={`cta-section ${isVisible ? 'animate-fadeInUp' : ''}`} style={{animationDelay: '0.6s'}}>
          <h3>Ready to Experience the Difference?</h3>
          <button className="cta-button">
            Explore Our Technology
            <span className="button-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;