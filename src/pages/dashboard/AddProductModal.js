import React from "react";
import { useProductCategories } from "utils";
import Image from "next/image";
import { getToken } from "lib/authenticate";
import { addProduct } from "lib/inventory";
const AddProductModal = ({ isAddModalOpen, closeAddModal, formData, setFormData, clearFormData, handleImageChange, removeProfile }) => {

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
  async function handleSubmit(e) {
    e.preventDefault();
    closeAddModal();
    console.log("Form Submitted: ", formData)

    try {
      let form = new FormData();
      for (const key in formData) {
        if (key === 'price') {
          form.append(key, parseFloat(formData[key]))
        }
        else if (key === 'quantity') {
          form.append(key, parseInt(formData[key]));
        }
        else {
          form.append(key, formData[key]);
        }
      }

      await addProduct(form)
    } catch (err) {
      console.log(err);
    }
    /**
         * When you try to console.log a FormData object in JavaScript, you might notice that it appears empty. This is because the FormData object does not have a standard method for serializing and displaying its content directly via console.log. The data inside a FormData object is meant to be sent as a part of a form submission using the XMLHttpRequest or fetch API.
         * If you want to inspect the content of a FormData object, you'll need to iterate through its entries using the FormData.entries() method. 
         * 
         */
    setFormData(clearFormData)

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
            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit}
            >
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
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                  }}
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-campus-text font-medium">Category:</label>
                <select
                  className="mt-1 p-2 border rounded"
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  {productCategoriesData.categories.map((category) => (
                    <option key={category._id} value={category.name}>
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
                  onChange={(e) => {
                    setFormData({ ...formData, price: e.target.value })
                  }}
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-campus-text font-medium">Quantity:</label>
                <input
                  type="number"
                  step="1"
                  className="mt-1 p-2 border rounded"
                  onChange={(e) => {
                    setFormData({ ...formData, quantity: e.target.value })
                  }}
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-campus-text font-medium">Description:</label>
                <textarea
                  className="mt-1 p-2 border rounded"
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <button
                type="button"
                className="mt-4 bg-campus-blue text-white p-2 rounded hover:bg-campus-blue-accent "
                onClick={handleSubmit}
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
