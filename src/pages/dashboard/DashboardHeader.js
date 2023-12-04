import React from "react";
import { useState } from 'react';
import useProductCategories from 'utils/useProductCategories';
import Category from '@/components/category';
import { getToken } from "lib/authenticate";
//SEARCH AND ADD A NEW PRODUCT
const DashboardHeader = ({ openAddModal }) => {

  // Configure Options object for private Access
  const options = {
    headers: {
      'Authorization': `Bearer ${getToken('store')}`,
      'Content-Type': `application/json`,
    }
  }

  const [category, setCategory] = useState('all');
  // Extract the product Categories Details
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
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center justify-center">
        {/* <input
          type="text"
          placeholder="Search..."
          className="p-3 border rounded w-90 mr-4 ml-28"
          style={{ width: "600px" }}
        />
        <button className="bg-campus-red text-white p-3 rounded hover:bg-campus-accent mr-10">
          Search
        </button> */}
        {/* Products Categories */}
        <Category
          category={category}
          setCategory={setCategory}
          data={productCategoriesData}
          error={productCategoriesError}
          isLoading={productCategoriesLoading}
        />
      </div>
      <div className="mr-4">
        <button
          onClick={openAddModal}
          className="bg-blue-500 text-white p-3 rounded hover:bg-blue-700"
        >
          Add a new product
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
