import React, { useState, useEffect } from "react";
import Image from "next/image";
import { addItem, removeItem } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from "store/cartSelector";

const ProductsModal = ({ selectedProduct, closeModal }) => {
  const dispatch = useDispatch();
  const [addToCartClicked, setAddToCartClicked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const itemsInCart = useSelector(selectCartItems);
  const [addToWishlistClicked, setAddToWishlistClicked] = useState(false);

  useEffect(() => {
    setAddToCartClicked(itemsInCart.some((item) => item.id === selectedProduct._id));
  }, [itemsInCart]);

  // Handle add to Cart Option
  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: selectedProduct._id,
        name: selectedProduct.name,
        quantity: quantity,
        price: selectedProduct.price,
        image: selectedProduct.imageUrl,
      })
    );
    setAddToCartClicked(true);
  };

  // Handle remvoe from Cart Option
  const handleRemoveFromCart = (value) => {
    console.log(`Remove from Cart!! for id: ${value}`);
    dispatch(removeItem(selectedProduct._id));
    setAddToCartClicked(false);
    setQuantity(1);
  }
  
  const handleAddToWishlist = () => {
    console.log("Toggled Wishlist!");
    setAddToWishlistClicked((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md w-4/5 h-4/5 flex relative">
        {/*LEFT SIDE OF THE MODAL WINDOW IS A PICTURE*/}
        <div className="w-1/2 mt-20 mb-20">
          <div className="relative h-80">
            <Image src={selectedProduct.imageUrl} alt={`${selectedProduct.name} Logo`} layout="fill" objectFit="cover" />
          </div>
        </div>
        <button
          onClick={handleAddToWishlist}
          className={`text-m absolute top-2 right-8 py-1 px-2 rounded ${
            addToWishlistClicked
              ? 'bg-purple-300 text-campus-text'
              : 'bg-purple-100 hover:bg-purple-300 text-campus-text'
          }`}
        >
          {addToWishlistClicked ? 'Added' : 'Add to Wishlist'}
        </button>

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

          {/*MODAL WINDOW - DESCRIPTION*/}
          <div className="mt-4 p-4 border border-gray-300 rounded">
            <p className="text-m text-campus-text font-noto_serif mb-2">Description: {selectedProduct.description}</p>
          </div>
          <p className="text-green-600 font-noto_serif mt-4 mb-2">${selectedProduct.price}</p>
          {/*MODAL WINDOW - INCREASE AND DECREASE QUANTITY BUTTON*/}
          <div className="mt-10 flex items-center">
          {!addToCartClicked ? (
              <button
                onClick={handleAddToCart}
                className="bg-green-300 hover:bg-green-400 text-campus-text py-1 px-2 rounded"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1))}
                  className="bg-gray-200 hover:bg-gray-300 text-campus-text py-1 px-2 rounded"
                >
                  -
                </button>
                <span className="mx-2">{quantity}</span>
                <button
                  onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
                  className="bg-green-200 hover:bg-green-300 text-campus-text py-1 px-2 rounded"
                >
                  +
                </button>
              </div>
            )}
            {addToCartClicked && (
            <button
            onClick={handleRemoveFromCart}
            className="ml-2 bg-campus-red hover:bg-campus-accent text-white py-0.3 px-1 rounded"
          >
            Remove
          </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsModal;
