/** 
* Hook for fetching Products from Backend
* 1. Receives storeId as parameters
* 2. Make SWR request to URL: "/private/products/:storedId"
* 3. Return Object containing data, error, and isLoading values
*/

import useSWR from 'swr';

export default function useProducts(id = storeId, options = {}) {
  const { data, error, isLoading } = useSWR([`${process.env.NEXT_PUBLIC_BACKEND_API}/private/products/:${id}`, options]);

  return {
    productsData: data,
    productsError: error,
    productsLoading: isLoading,
  }
}