import React, { useState } from "react";
import { useRouter } from 'next/router';
import DashboardHeader from "./DashboardHeader";
import AddProductModal from "./AddProductModal";
import ProductList from "./ProductList";
import { getToken } from "lib/authenticate";
import UpdateProductModal from "./UpdateProductModal";
import { useProductCategories, useProducts } from "../../utils"
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

  const [category, setCategory] = useState('all');

  // Extract the Product Details 
  const { productsData, productsError, productsLoading } = useProducts(storeId, category, options);
  console.log(`StoreId received: ${storeId}; Options: ${JSON.stringify(options.headers, null, 2)}`);
  console.log(`Products Data: ${productsData}`)


  // Extract the Product Categories 
  //const { productCategoriesData, productCategoriesError, productsCategoriesLoading } = useProductCategories(options);

  //console.log(productCategoriesData.categories)
  // const categories = productCategoriesData.categories;
  // const categories = productCategoriesData.categories;




  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const clearFormData = {
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
  const handleDelete = (productId) => {
    console.log(`Deleting product with ID: ${productId}`);
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
        isUpdateModalOpen={isUpdateModalOpen}
        closeUpdateModal={closeUpdateModal}
      />
    </div>
  );
};


export default Dashboard;

