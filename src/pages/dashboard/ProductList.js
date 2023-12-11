// ProductList.js
import React from "react";
import Image from "next/image";

const ProductList = ({ dummyProducts, openUpdateModal, handleDelete }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {dummyProducts.products.map((product) => (
        <div key={product._id} className="mb-4">
          <div
            className="p-4 bg-white rounded-md shadow-lg overflow-hidden transition duration-300 transform hover:scale-105 cursor-pointer flex"
          >
            <div className="flex-grow">
              <div className="text-xl font-semibold text-campus-text mb-2 font-noto_serif">
                {product.name}
              </div>
              <div className="text-campus-text text-sm mb-2 font-noto_serif">{product.category}</div>
              <div className="text-xl text-campus-text font-semibold text-green-600 font-noto_serif">${product.price}</div>
              <div className="text-xl font-semibold text-campus-text font-noto_serif">{product.description}</div>
              <div className="flex mt-4">
                <button
                  onClick={() => openUpdateModal(product)}
                  className="bg-campus-blue text-white p-2 rounded mr-2 hover:bg-campus-blue-accent"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-campus-red text-white p-2 rounded hover:bg-campus-accent"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="ml-4">
              <Image
                src={product.imageUrl}
                alt={`${product.name} Image`}
                style={{ width: '200px', height: '180px' }}
                width='200'
                height='300'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
