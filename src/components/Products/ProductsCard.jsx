import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
const ProductsCard = ({ product, openModal }) => {
  const dispatch = useDispatch();
  // Handle add to Cart Option
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
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

          <button
            onClick={handleAddToCart({
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
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;