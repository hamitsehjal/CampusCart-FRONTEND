// src/pages/products/[storeId].js
/** 
Render Products Page
- Extract the StoreId Property from router.query
- Configure options to be sent along SWR requests to custom hooks
- Configure a `state` variable using `useState` for storing `category` value
- using useProductCategories Hook, fetch the products categories available
- using useProducts Hook, fetch the products for store with `storeId` and `category`
- Render Categories Component
- Render ProductsAll Component

*/
import Category from '@/components/category';
import ProductsAll from '@/components/ProductsAll';
import { getToken } from 'lib/authenticate';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useProductCategories from 'utils/useProductCategories';
import useProducts from 'utils/useProducts';

export default function Products() {
  const router = useRouter();

  // Extract the storeId from query object
  const { storeId } = router.query;
  console.log(`StoreId received: ${storeId}`);
  // Configure Options object for private Access
  const options = {
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      'Content-Type': `application/json`,
    }
  }

  const [category, setCategory] = useState('all');
  // Extract the product Categories Details
  const { productCategoriesData, productCategoriesError, productsCategoriesLoading } = useProductCategories(options);

  // Extract the Products Details
  const { productsData, productsError, productsLoading } = useProducts(storeId, category, options);

  return (
    <div className="bg-campus-background p-4 md:p-8 lg:p-10">
      <h1 className="text-2xl md:text-3xl font-noto_serif ">Products </h1>
      {/* Products Categories */}
      <Category
        category={category}
        setCategory={setCategory}
        data={productCategoriesData}
        error={productCategoriesError}
        isLoading={productsCategoriesLoading}
      />
      {/* Products */}
      <ProductsAll
        data={productsData}
        error={productsError}
        isLoading={productsLoading}
      />
    </div >)
}