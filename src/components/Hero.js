import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import dnImage from '../img/dn.png';
import shoxImage from '../img/shox.png';
import jordan1Image from '../img/jordan1.png';
import jordan4Image from '../img/jordan4.png';

const Hero = () => {
  const [active, setActive] = useState(0);
  const [calculation, setCalculation] = useState(1);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const shoes = [
    {
      id: 1,
      name: 'Nike Air Max DN',
      image: dnImage,
      price: '$120',
      category: 'Air Max',
      description: 'Experience the future of footwear with innovative Air Max technology that delivers unparalleled comfort and style.'
    },
    {
      id: 2,
      name: 'Nike Shox R4',
      image: shoxImage,
      price: '$150',
      category: 'Shox',
      description: 'Revolutionary Shox technology provides responsive cushioning and energy return for your most demanding activities.'
    },
    {
      id: 3,
      name: 'Air Jordan 1 Retro',
      image: jordan1Image,
      price: '$170',
      category: 'Jordan',
      description: 'The iconic silhouette that started it all. Classic design meets modern comfort in this timeless basketball legend.'
    },
    {
      id: 4,
      name: 'Air Jordan 4 Retro',
      image: jordan4Image,
      price: '$200',
      category: 'Jordan',
      description: 'Premium craftsmanship and innovative design come together in this legendary basketball shoe that redefined the game.'
    }
  ];

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
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  return (
    <section className="hero">
      <div className="carousel" ref={carouselRef}>
        <div className="list">
          {shoes.map((shoe, index) => (
            <div key={shoe.id} className={`item ${index === active ? 'active' : ''}`}>
              <figure>
                <img src={shoe.image} alt={shoe.name} />
              </figure>
              <div className="content">
                <div className="category">{shoe.category}</div>
                <h2>{shoe.name}</h2>
                <div className="description">
                  <p>{shoe.description}</p>
                  <div className="price">{shoe.price}</div>
                </div>
                <div className="more">
                  <button>Shop Now</button>
                  <button><i>▶</i> Watch Video</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button onClick={handlePrev}>‹</button>
          <button onClick={handleNext}>›</button>
        </div>

        <div className="indicators">
          <div className="number">0{active + 1}</div>
          <ul>
            {shoes.map((_, index) => (
              <li 
                key={index} 
                className={index === active ? 'active' : ''}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;