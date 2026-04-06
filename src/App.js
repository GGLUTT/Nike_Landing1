import React from 'react';
import './App.css';
import Header from './components/Header';
import VideoHero from './components/VideoHero';
import ProductCarousel from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import LatestCollection from './components/LatestCollection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <VideoHero />
      <ProductCarousel />
      <ProductShowcase />
      <LatestCollection />
      <Footer />
    </div>
  );
}

export default App;
