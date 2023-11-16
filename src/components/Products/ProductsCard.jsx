'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, incrementQuantity, decrementQuantity } from "../../store/cartSlice";
import { selectCartItems, selectCartItemById } from '../../store/cartSelector';

const ProductsCard = ({ product, openModal }) => {
  const [addToCartClicked, setAddToCardClicked] = useState(false);
  const [addToWishlistClicked, setAddToWishlistClicked] = useState(false);
  const itemsInCart = useSelector(selectCartItems);
  const currentItem = useSelector((state) => selectCartItemById(state, product._id));
  useEffect(() => {
    setAddToCardClicked(itemsInCart.some(item => item.id === product._id));

  }, [itemsInCart]);
  const dispatch = useDispatch();

  // Handle add to Cart Option
  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product._id,
        name: product.name,
        description: product.description,
        quantity: 1,
        price: product.price,
        image: product.imageUrl,
      })
    );
    setAddToCardClicked(true);
  };

  // Handle remvoe from Cart Option
  const handleRemoveFromCart = () => {
    dispatch(removeItem(product._id));
    setAddToCardClicked(false);
  };

  //ADD TO WISH LIST 
  const handleAddToWishlist = () => {
    // Add logic to handle adding/removing the product to/from the wishlist
    console.log("Toggled Wishlist!");
    setAddToWishlistClicked((prev) => !prev);
  };

  return (
    <div
      key={product._id}
      className="p-4 w-full mx-auto bg-white rounded-md shadow-lg overflow-hidden transition duration-300 transform hover:scale-105 cursor-pointer"
    >

      {/*OPEN MODAL WHEN PRESSED ON PICTURE*/}
      <div className="relative mb-4" onClick={() => openModal(product)}>
        {/*IMAGE*/}
        <Image src={product.imageUrl} alt={`${product.name} Logo`} width={80} height={60} />
      </div>
      {/* ADD TO WISHLIST BUTTON */}
      <button
        onClick={handleAddToWishlist}
        className={`text-sm absolute top-2 right-2 py-1 px-2 rounded ${addToWishlistClicked
          ? 'bg-purple-300 text-campus-text'
          : 'bg-purple-100 hover:bg-purple-300 text-campus-text'
          }`}
      >
        {addToWishlistClicked ? 'Added' : 'Add to Wishlist'}
      </button>
      {/*PRODUCT NAME*/}
      <div>
        <div className="text-xl font-semibold text-campus-text mb-2 font-noto_serif">
          {product.name}
        </div>
        {/*PRODUCT CATEGORY*/}
        <div className=" text-campus-text text-sm mb-4 font-noto_serif">{product.category}</div>
      </div>
      {/*PRODUCT PRICE*/}
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold text-green-600 font-noto_serif">${product.price}</div>
        <div className="flex items-center">
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
                onClick={() => dispatch(decrementQuantity(product._id))}
                className="bg-gray-200 hover:bg-gray-300 text-campus-text py-1 px-2 rounded"
              >
                -
              </button>
              <span className="mx-2">{currentItem.quantity}</span>
              <button
                onClick={() => dispatch(incrementQuantity(product._id))}
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
    </div>)
};

export default ProductsCard;