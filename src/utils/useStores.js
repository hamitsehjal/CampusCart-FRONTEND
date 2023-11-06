import useSWR from "swr";
export default function useStores(category = 'all', options = {}) {
  const { data, error, isLoading } = useSWR(
    [`${process.env.NEXT_PUBLIC_BACKEND_API}/public/stores?category=${category}`, options]
  );

  return {
    storesData: data,
    storesError: error,
    storesLoading: isLoading,
  }

}

