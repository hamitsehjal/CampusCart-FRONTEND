// src/pages/products/index.js

//Main Page
import React from 'react';
import Navbar from "./navbar";
import Footer from "./footer";
import ProductCard from './components/ProductCard';
import Testimonials from './components/Testimonials';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductCard />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
