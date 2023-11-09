/** 
Custom Hook for fetching Store Categories from Backend Server
1. SWR request to URL: "/private/product-categories"
2. Return object containing data,error and isLoading values
*/
import useSWR from 'swr'
export default function useProductCategories(options = {}) {
  console.log(options);
  const { data, error, isLoading } = useSWR(
    [`${process.env.NEXT_PUBLIC_BACKEND_API}/private/product-categories`, options],
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    productCategoriesData: data,
    productsCategoriesLoading: isLoading,
    productCategoriesError: error,

  }
}