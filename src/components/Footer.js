import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector('.footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' }
  ];

  return (
    <footer className={`footer ${isVisible ? 'footer-visible' : ''}`}>
      <div className="footer-container">
        {/* Main Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">NIKE</span>
              <div className="logo-swoosh"></div>
            </div>
            <p className="brand-tagline">Just Do It</p>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3 className="newsletter-title">Stay Updated</h3>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <div className="input-container">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  {isSubscribed ? '✓' : '→'}
                </button>
              </div>
              {isSubscribed && (
                <div className="success-message">
                  Thank you for subscribing!
                </div>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Nike, Inc. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy</a>
              <a href="#" className="footer-link">Terms</a>
              <a href="#" className="footer-link">Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Element */}
      <div className="floating-swoosh"></div>
    </footer>
  );
};

export default Footer;