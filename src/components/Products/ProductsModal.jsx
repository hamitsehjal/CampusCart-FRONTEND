import React from "react";
import Image from "next/image";

const ProductsModal = ({ selectedProduct, closeModal, decreaseQuantity, increaseQuantity, quantity }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md w-4/5 h-4/5 flex relative">
        {/*LEFT SIDE OF THE MODAL WINDOW IS A PICTURE*/}
        <div className="w-1/2">
          <div className="relative h-20 w-20">
            <Image src={selectedProduct.imageUrl} alt={`${selectedProduct.name} Logo`} width={80} height={60} />
          </div>
        </div>

        {/*RIGTH SIDE OF MODAL WINDOW IS PRODUCTS INFO AND CLOSE BUTTON*/}
        <div className="w-1/2 pl-4">
          {/*CLOSE BUTTON*/}
          <button onClick={closeModal} className="text-2xl absolute top-2 right-2 text-gray-600 cursor-pointer">
            &times;
          </button>
          {/*MODAL WINDOW - NAME*/}
          <h2 className="text-2xl font-semibold text-campus-text font-noto_serif mt-4 mb-2">
            {selectedProduct.name}
          </h2>
          {/*MODAL WINDOW - CATEGORY*/}
          <p className="text-xl text-campus-text font-noto_serif mt-4 mb-2">{selectedProduct.category}</p>
          {/*MODAL WINDOW - PRICE*/}
          <p className="text-green-600 font-noto_serif mt-4 mb-2">${selectedProduct.price}</p>
          {/*MODAL WINDOW - INCREASE AND DECREASE QUANTITY BUTTON*/}
          <div className="mt-10">
            <button
              onClick={() => decreaseQuantity(selectedProduct._id)}
              className="bg-gray-300 hover:bg-gray-200 text-campus-text py-1 px-2 rounded"
            >
              -
            </button>
            <span className="mx-2 font-semibold">{quantity[selectedProduct._id] || 0}</span>
            <button
              onClick={() => increaseQuantity(selectedProduct._id)}
              className="bg-campus-red hover:bg-campus-accent text-white py-1 px-2 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsModal;
