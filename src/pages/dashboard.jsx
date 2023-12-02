// Dashboard.jsx
import React, { useState } from "react";
import { useRouter } from 'next/router';

const Dashboard = (props) => {

  
  // DUMMY PRODUCTS DATA
  const dummyProducts = [
    { _id: 1, name: "Product 1", category: "Category 1", price: 20.0, description: "any description" },
    { _id: 2, name: "Product 2", category: "Category 2", price: 30.0, description: "any description" },
    { _id: 2, name: "Product 3", category: "Category 3", price: 40.0, description: "any description" },
    { _id: 2, name: "Product 4", category: "Category 4", price: 50.0, description: "any description" },
    { _id: 2, name: "Product 5", category: "Category 5", price: 60.0, description: "any description" },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);


  // OPEN MODAL
  const openUpdateModal = (product) => {
    setSelectedProduct(product);
    setUpdateModalOpen(true);
  };

  // CLOSE MODAL
  const closeUpdateModal = () => {
    setSelectedProduct(null);
    setUpdateModalOpen(false);
  };

  // TODO: DELETE PRODUCT
  const handleDelete = (productId) => {
    console.log(`Deleting product with ID: ${productId}`);
  };

  return (
    <div className="container mx-auto mt-8 mb-8">
      {/* TOP AREA: SEARCH, SEE ALL PRODUCTS, ADD A NEW PRODUCT */}
      <div className="flex justify-between items-center mb-8">
        <div>
            {/* SEE ALL PRODUCT */}
          <button className="bg-blue-500 text-white p-2 rounded ml-4 hover:bg-blue-700">
            See all Products
          </button>
        </div>
        {/* SEARCH AREA */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded mr-2"
          />
          {/* SEARCH BUTTON */}
          <button className="bg-campus-red text-white p-2 rounded hover:bg-campus-accent">
            Search
          </button>
        </div>
        {/* ADD A NEW PRODUCT BUTTON */}
        <div className="mr-4">
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
            Add a new product
          </button>
        </div>
      </div>

      {/* PRODUCTS LIST (DUMMY FOR NOW) */}
      <div className="grid grid-cols-1 gap-4">
        {dummyProducts.map((product) => (
          <div
            key={product._id}
            className="p-4 bg-white rounded-md shadow-lg overflow-hidden transition duration-300 transform hover:scale-105 cursor-pointer"
          >
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
        ))}
      </div>

      {/* MODAL FOR UPDATE */}
      {isUpdateModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md flex relative">
            <button
              onClick={closeUpdateModal}
              className="text-2xl absolute top-2 right-2 text-gray-600 cursor-pointer"
            >
              &times;
            </button>
            {/* MODAL FORM */}
            <form className="flex flex-col items-center">
              <div>
                <label className="block text-sm text-campus-text font-medium">Product Name:</label>
                <input
                  type="text"
                  className="mt-1 p-2 border rounded"

                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-campus-text font-medium">Category:</label>
                <input
                  type="text"
                  className="mt-1 p-2 border rounded"

                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-campus-text font-medium">Price:</label>
                <input
                  type="number"
                  step="0.01"
                  className="mt-1 p-2 border rounded"

                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-campus-text font-medium">Description:</label>
                <textarea
                  className="mt-1 p-2 border rounded"

                />
              </div>
              <button
                type="button"
                className="mt-4 bg-campus-blue text-white p-2 rounded hover:bg-campus-blue-accent"
                onClick={() => {
                  closeUpdateModal();
                }}
              >
                Update Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

