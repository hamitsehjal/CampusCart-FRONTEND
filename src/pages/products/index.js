// src/pages/products/index.js

//Main Page
import React from 'react';
import Navbar from "./navbar";
import Footer from "./footer";
import ProductsPage from './ProductsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductsPage />
      <Footer />
    </div>
  );
}

export default App;
