// // App.js

import React, { useState } from 'react';
import Header from '../components/navbar';
import Footer from '../components/Footer';
import styles from "../style/ProductCard.module.css";

export default function ProductsPage() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpandCard = (productId) => {
    if (expandedCard === productId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(productId);
    }
  };


  // You can fetch your product data from an API or use local data here
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      description: "Description for Product 1",
      image: "product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 9.99,
      description: "Description for Product 2",
      image: "product2.jpg",
    },

    {
      id: 3,
      name: "Product 3",
      price: 10.99,
      description: "Description for Product 3",
      image: "product3.jpg",
    },

    {
      id: 4,
      name: "Product 4",
      price: 10.99,
      description: "Description for Product 4",
      image: "product4.jpg",
    },

    {
      id: 5,
      name: "Product 5",
      price: 10.99,
      description: "Description for Product 5",
      image: "product5.jpg",
    },

    {
      id: 6,
      name: "Product 6",
      price: 10.99,
      description: "Description for Product 6",
      image: "product6.jpg",
    },

    {
      id: 7,
      name: "Product 7",
      price: 10.99,
      description: "Description for Product 7",
      image: "product7.jpg",
    },

    {
      id: 8,
      name: "Product 8",
      price: 10.99,
      description: "Description for Product 8",
      image: "product8.jpg",
    },
    // Add more product objects as needed
  ];

  return (
    <div className={`bg-gray-100 ${styles.backgroundImage}`}>
      
      <Header />

      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ${styles.productGrid}`}>
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-lg shadow-md p-4 ${styles.productCard} ${
              expandedCard === product.id ? styles.expanded : ''
            }`}
          >
            <div
              onClick={() => toggleExpandCard(product.id)}
              className={styles.productCardInner}
            >
              <div className={styles.productIcon}>
              <svg width="70" height="63" viewBox="0 0 70 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="35" cy="31.5" rx="35" ry="31.5" fill="#31A812" />
                  <path d="M34.88 43.96C34 44.04 33.2267 44.08 32.56 44.08C31.92 44.08 31.3467 44.0267 30.84 43.92C30.4667 41.9467 30.28 40.3733 30.28 39.2C30.28 38 30.2933 36.7867 30.32 35.56L23.24 35.4C23.1333 34.8933 23.08 34.3467 23.08 33.76C23.08 33.1733 23.12 32.5733 23.2 31.96C25.28 31.5867 27.0667 31.4 28.56 31.4H30.4L30.56 23.52C31.0667 23.4133 31.64 23.36 32.28 23.36C32.9467 23.36 33.72 23.4 34.6 23.48C34.9467 25.4267 35.12 27.1333 35.12 28.6V31.52L42.4 31.68C42.5067 32.1867 42.56 32.7467 42.56 33.36C42.56 33.9467 42.52 34.52 42.44 35.08C40.36 35.48 38.84 35.68 37.88 35.68C36.92 35.68 35.96 35.6667 35 35.64L34.88 43.96Z" fill="black" />
                </svg>
              </div>
              <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
              </div>
              <div className={styles.productDetailsContainer}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                <p className={styles.productPrice}>${product.price}</p>
                {/* Add to Cart button */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />

    </div>
  );
}
