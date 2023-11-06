// src/pages/stores/index.js
import { useState } from 'react';
import { getToken } from 'lib/authenticate';
import { useStores, useStoreCategories } from 'utils';
import Category from '@/components/category';
import Stores from '@/components/stores';
export default function StoresPage() {
  const [category, setCategory] = useState('all');
  const options = {
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    }
  }
  const { storesData, storesError, storesLoading } = useStores(category);

  const { storeCategoriesData, storeCategoriesLoading, storeCategoriesError } = useStoreCategories();


  return (
    <div className="bg-campus-background p-4 md:p-8 lg:p-10">
      <h1 className="text-2xl md:text-3xl font-noto_serif ">Stores to help you save</h1>
      {/* Store Categories */}
      <Category
        category={category}
        setCategory={setCategory}
        data={storeCategoriesData}
        error={storeCategoriesError}
        isLoading={storeCategoriesLoading}
      />
      {/* Stores */}
      <Stores
        data={storesData}
        error={storesError}
        isLoading={storesLoading}
      />
    </div >)

}