import React, { useState, useEffect } from "react";
import Image from "next/image";
import { addItem, removeItem } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from "store/cartSelector";
const ProductsModal = ({ selectedProduct, closeModal }) => {
  const dispatch = useDispatch();
  const [addToCartClicked, setAddToCartClicked] = useState(false);

  const itemsInCart = useSelector(selectCartItems);

  useEffect(() => {
    setAddToCartClicked(itemsInCart.some((item) => item.id === selectedProduct._id));
  }, [itemsInCart]);
  // Handle add to Cart Option
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  }

  // Handle remvoe from Cart Option
  const handleRemoveFromCart = (value) => {
    console.log(`Remove from Cart!! for id: ${value}`);
    dispatch(removeItem(value));
  }
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
            {!addToCartClicked && <button
              onClick={() => handleAddToCart({
                id: selectedProduct._id,
                name: selectedProduct.name,
                quantity: 1,
                price: selectedProduct.price,
                image: selectedProduct.imageUrl,
              })}
              className="bg-gray-300 hover:bg-gray-200 text-campus-text py-1 px-2 rounded"
            >
              Add to Cart!!
            </button>}
            {
              addToCartClicked && <button
                onClick={() => handleRemoveFromCart(selectedProduct._id)}
                className="bg-gray-300 hover:bg-gray-200 text-campus-text py-1 px-2 rounded"
              >
                Remove from Cart!!
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsModal;
