/** 
props object will contain `data`,`error`,'isLoading' values
*/
import Image from "next/image";
import React, { useState } from "react";
export default function ProductsAll(props) {
  const [quantities, setQuantities] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  //Increase Quantity
  const increaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  //Decrease Quantity
  const decreaseQuantity = (productId) => {
    setQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[productId] || 0) - 1;
      return {
        ...prevQuantities,
        [productId]: newQuantity >= 0 ? newQuantity : 0,
      };
    });
  };

  //Open Modal Window when pressed on the product's picture
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  //Close Modal Window when pressed X
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
          {props.data.products.map((product) => {
            return (
              <div
                key={product._id}
                className="p-4 w-full mx-auto bg-white rounded-md shadow-lg overflow-hidden transition duration-300 transform hover:scale-105 cursor-pointer"
              >
                {/*OPEN MODAL WHEN PRESSED ON PICTURE*/}
                <div
                  className="relative mb-4"
                  onClick={() => openModal(product)}
                >
                  {/*IMAGE*/}
                  <Image
                    src={product.imageUrl}
                    alt={`${product.name} Logo`}
                    width={80}
                    height={60}
                  />
                </div>
                {/*PRODUCT NAME*/}
                <div>
                  <div className="text-xl font-semibold text-campus-text mb-2 font-noto_serif">
                    {product.name}
                  </div>
                  {/*PRODUCT CATEGORY*/}
                  <div className=" text-campus-text text-sm mb-4 font-noto_serif">
                    {product.category}
                  </div>
                </div>
                {/*PRODUCT PRICE*/}
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold text-green-600 font-noto_serif">
                    ${product.price}
                  </div>
                  {/*DECREASE QUANTITY BUTTON*/}
                  <div className="flex items-center">
                    <button
                      onClick={() => decreaseQuantity(product._id)}
                      className="bg-gray-300 hover:bg-gray-200 text-campus-text py-1 px-2 rounded"
                    >
                      -
                    </button>
                    {/*INCREASE QUANTITY BUTTON*/}
                    <span className="mx-2 font-semibold">
                      {quantities[product._id] || 0}
                    </span>
                    <button
                      onClick={() => increaseQuantity(product._id)}
                      className="bg-campus-red hover:bg-campus-accent text-white py-1 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/*MODAL WINDOW*/}
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md w-4/5 h-4/5 flex relative">
            {/*LEFT SIDE OF THE MODAL WINDOW IS A PICTURE*/}
            <div className="w-1/2">
              <div className="relative h-20 w-20">
                <Image
                  src={selectedProduct.imageUrl}
                  alt={`${selectedProduct.name} Logo`}
                  width={80}
                  height={60}
                />
              </div>
            </div>

            {/*RIGTH SIDE OF MODAL WINDOW IS PRODUCTS INFO AND CLOSE BUTTON*/}

            <div className="w-1/2 pl-4">
              {/*CLOSE BUTTON*/}
              <button
                onClick={closeModal}
                className="text-2xl absolute top-2 right-2 text-gray-600 cursor-pointer"
              >
                &times;
              </button>
              {/*MODAL WINDOW - NAME*/}
              <h2 className="text-2xl font-semibold text-campus-text font-noto_serif mt-4 mb-2">
                {selectedProduct.name}
              </h2>
              {/*MODAL WINDOW - CATEGORY*/}
              <p className="text-xl text-campus-text font-noto_serif mt-4 mb-2">
                {selectedProduct.category}
              </p>
              {/*MODAL WINDOW - PRICE*/}
              <p className="text-green-600 font-noto_serif mt-4 mb-2">
                ${selectedProduct.price}
              </p>
              {/*MODAL WINDOW - INCREASE AND DECREASE QUANTITY BUTTON*/}
              <div className="mt-10">
                <button
                  onClick={() => decreaseQuantity(selectedProduct._id)}
                  className="bg-gray-300 hover:bg-gray-200 text-campus-text py-1 px-2 rounded "
                >
                  -
                </button>
                <span className="mx-2 font-semibold">
                  {quantities[selectedProduct._id] || 0}
                </span>
                <button
                  onClick={() => increaseQuantity(selectedProduct._id)}
                  className="bg-campus-red hover:bg-campus-accent text-white py-1 px-2 rounded "
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
