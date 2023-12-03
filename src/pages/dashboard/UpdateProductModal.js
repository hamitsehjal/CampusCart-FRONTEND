import React from "react";

//UPDATE FORM
const UpdateProductModal = ({ isUpdateModalOpen, closeUpdateModal }) => {
  return (
    <div>
      {isUpdateModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md flex relative">
            <button
              onClick={closeUpdateModal}
              className="text-2xl absolute top-2 right-2 text-gray-600 cursor-pointer"
            >
              &times;
            </button>
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

export default UpdateProductModal;
