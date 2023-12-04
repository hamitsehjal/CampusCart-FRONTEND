import React from "react";
import { getToken } from "lib/authenticate";
import { useProductCategories } from "utils";
import { updateProduct } from "lib/inventory";

//UPDATE FORM
const UpdateProductModal = ({ isUpdateModalOpen, closeUpdateModal, formData, setFormData, clearFormData, openUpdateModal }) => {

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
    closeUpdateModal();
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

      await updateProduct(form)
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
      {isUpdateModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md flex relative">
            <button
              onClick={closeUpdateModal}
              className="text-2xl absolute top-2 right-2 text-gray-600 cursor-pointer"
            >
              &times;
            </button>
            <form
              className="flex flex-col items-center"
            >
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
              {/* Category */}
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
