import React, { useState } from "react";
import ProductCard from "./ProductsCard";
import ProductModal from "./ProductsModal";

const ProductsAll = (props) => {
  const [selectedProduct, setSelectedProduct] = useState(null);


  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {props.Error ? (
        <h2>Error Occurred while fetching stores</h2>
      ) : props.isLoading ? (
        <h2>Loading Stores</h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-5 font-noto_serif">
          {props.data.products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              openModal={openModal}

            />
          ))
          }
        </div>
      )}

      {selectedProduct && (
        <ProductModal
          selectedProduct={selectedProduct}
          closeModal={closeModal}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          quantity={quantities}
        />
      )}
    </>
  );
};

export default ProductsAll;