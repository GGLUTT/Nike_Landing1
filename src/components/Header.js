import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="logo">
            <span className="brand-name">Nike</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                <span>Home</span>
                <div className="nav-underline"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#products" className="nav-link">
                <span>Products</span>
                <div className="nav-underline"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <span>About</span>
                <div className="nav-underline"></div>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <span>Contact</span>
                <div className="nav-underline"></div>
              </a>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="nav-actions">
            <button className="search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="cart-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 16.1 19 15 19H9C7.9 19 7 18.1 7 17V13H17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="cart-count">2</span>
            </button>
            <button className="cta-btn">
              <span>Shop Now</span>
              <div className="btn-glow"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-menu">
            <li><a href="#home" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="#products" onClick={toggleMobileMenu}>Products</a></li>
            <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
          </ul>
          <div className="mobile-actions">
            <button className="mobile-cta-btn">Shop Now</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;