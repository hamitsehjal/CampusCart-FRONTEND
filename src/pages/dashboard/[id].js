import React, { useState } from "react";
import { useRouter } from 'next/router';
import DashboardHeader from "./DashboardHeader";
import AddProductModal from "./AddProductModal";
import ProductList from "./ProductList";
import { getToken } from "lib/authenticate";
import UpdateProductModal from "./UpdateProductModal";
import { useProductCategories, useProducts } from "../../utils"
import { deleteProduct } from "lib/inventory";
const Dashboard = () => {
  const router = useRouter()
  // Extract the StoreId 
  const storeId = router.query.id;



  // configure options for private access 
  const options = {
    headers: {
      'Authorization': `Bearer ${getToken('store')}`,
      'Content-Type': `application/json`,
    }
  }

  // const [category, setCategory] = useState('all');

  // Extract the Product Details 
  const { productsData, productsError, productsLoading } = useProducts(storeId, "all", options);




  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const clearFormData = {
    name: "",
    price: 0,
    quantity: 0,
    category: "",
    description: "",
    profile: null,
  };
  const [formData, setFormData] = useState(clearFormData);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profile: file,
    });
  };
  const removeProfile = () => {
    setFormData({
      ...formData,
      profile: null,
    });
  };

  // OPEN UPDATE MODAL
  const openUpdateModal = (product) => {
    setSelectedProduct(product);
    setUpdateModalOpen(true);
  };

  // CLOSE UPDATE MODAL
  const closeUpdateModal = () => {
    setSelectedProduct(null);
    setUpdateModalOpen(false);
  };

  // OPEN ADD MODAL
  const openAddModal = () => {
    setAddModalOpen(true);
  };

  // CLOSE ADD MODAL
  const closeAddModal = () => {
    setAddModalOpen(false);
  };

  // TODO: DELETE PRODUCT
  const handleDelete = async (productId) => {
    console.log(`Deleting product with ID: ${productId}`);
    try {
      await deleteProduct(productId);
      window.location.reload();
    } catch (err) {
      console.log(`Error Occurred while deleting Product`);
    }
  };

  if (productsLoading) {
    // Render loading state
    return <p>Loading...</p>;
  }

  if (productsError) {
    // Render error state
    return <p>Error: {productsError.message}</p>;
  }

  // return <h1>Hello</h1>
  return (
    <div className="container mx-auto mt-8 mb-8">
      <DashboardHeader openAddModal={openAddModal} />
      <AddProductModal
        isAddModalOpen={isAddModalOpen}
        closeAddModal={closeAddModal}
        formData={formData}
        setFormData={setFormData}
        clearFormData={clearFormData}
        handleImageChange={handleImageChange}
        removeProfile={removeProfile}
        dummyProducts={productsData}
      />
      <ProductList
        dummyProducts={productsData}
        openUpdateModal={openUpdateModal}
        handleDelete={handleDelete}
      />
      <UpdateProductModal
        formData={formData}
        setFormData={setFormData}
        clearFormData={clearFormData}
        isUpdateModalOpen={isUpdateModalOpen}
        openUpdateModal={openUpdateModal}
        closeUpdateModal={closeUpdateModal}
      />
    </div>
  );
};


export default Dashboard;

