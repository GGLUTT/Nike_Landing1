import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import LatestCollection from './components/LatestCollection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductShowcase />
      <LatestCollection />
      <Footer />
    </div>
  );
}

export default App;