'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice";
import { selectCartItems } from '../../store/cartSelector';
const ProductsCard = ({ product, openModal }) => {
  const [addToCartClicked, setAddToCardClicked] = useState(false);

  const itemsInCart = useSelector(selectCartItems);
  useEffect(() => {
    setAddToCardClicked(itemsInCart.some(item => item.id === product._id))
  }, [itemsInCart]);
  const dispatch = useDispatch();
  // Handle add to Cart Option
  const handleAddToCart = (value) => {
    console.log("Add to Cart Clicked!!")
    dispatch(addItem(value));
  }

  // Handle remvoe from Cart Option
  const handleRemoveFromCart = (value) => {
    console.log(`Remove from Cart!! for id: ${value}`);
    dispatch(removeItem(value));
  }
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
          {!addToCartClicked && < button
            onClick={() => handleAddToCart({
              id: product._id,
              name: product.name,
              quantity: 1,
              price: product.price,
              image: product.imageUrl,
            })}
            className="bg-gray-300 hover:bg-gray-200 text-campus-text py-1 px-2 rounded"
          >
            Add to Cart!!
          </button>
          }
          {addToCartClicked && <button
            onClick={() => handleRemoveFromCart(product._id)}
            className="bg-gray-300 hover:bg-gray-200 text-campus-text py-1 px-2 rounded"
          >
            Remove from Cart
          </button>}

        </div>
      </div>
    </div>)
};

export default ProductsCard;