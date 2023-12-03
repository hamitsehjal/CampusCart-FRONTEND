import React from "react";
import { useProductCategories } from "utils";
import Image from "next/image";
import { getToken } from "lib/authenticate";
const AddProductModal = ({ isAddModalOpen, closeAddModal, formData, handleImageChange, removeProfile, dummyProducts }) => {

  // configure options for private access 
  const options = {
    headers: {
      'Authorization': `Bearer ${getToken('store')}`,
      'Content-Type': `application/json`,
    }
  }
  // Extract the Product Categories 
  const { productCategoriesData, productCategoriesError, productCategoriesLoading } = useProductCategories(options);

  if (productCategoriesLoading) {
    // Render loading state
    return <p>Loading...</p>;
  }

  if (productCategoriesError) {
    // Render error state
    return <p>Error: {productCategoriesError.message}</p>;
  }

  return (
    <div>
      {isAddModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md flex relative" style={{ maxHeight: "80vh", overflowY: "auto" }}>
            <button
              onClick={closeAddModal}
              className="text-2xl absolute top-2 right-2 text-gray-600 cursor-pointer"
            >
              &times;
            </button>
            <form className="flex flex-col items-center">
              {formData.profile && (
                <div className="mt-5 text-center">
                  {/*Display Profile Picture*/}
                  <div className="flex justify-center items-center">
                    <Image
                      src={URL.createObjectURL(formData.profile)}
                      alt="Profile Preview"
                      className="object-cover "
                      width={200}
                      height={200}
                    />
                  </div>
                  {/*Remove Button*/}
                  <button
                    onClick={removeProfile}
                    className="text-sm font-noto_serif text-white bg-campus-red hover:bg-campus-accent py-1 px-2 mt-2 mb-2 rounded-md cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              )}
              {/*Upload Profile Picture*/}
              <input
                type="file"
                name="profile"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-2"
              />
              {/*Input fields*/}
              <div>
                <label className="block text-sm text-campus-text font-medium">Product Name:</label>
                <input
                  type="text"
                  className="mt-1 p-2 border rounded"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-campus-text font-medium">Category:</label>
                <select
                  className="mt-1 p-2 border rounded"
                >
                  {productCategoriesData.categories.map((category) => (
                    <option key={category._id} value={category.name.toLowerCase()}>
                      {category.name}
                    </option>
                  ))}
                </select>
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
                className="mt-4 bg-campus-blue text-white p-2 rounded hover:bg-campus-blue-accent "
                onClick={() => {
                  closeAddModal();
                }}
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProductModal;
