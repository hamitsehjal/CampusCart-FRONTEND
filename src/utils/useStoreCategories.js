import useSWR from "swr";

export default function useStoreCategories(options = {}) {
    const { data, isLoading, error } = useSWR(
        [`${process.env.NEXT_PUBLIC_BACKEND_API}/public/store-categories`, options],
        {
            revalidateIfStale: false,
            revalidateOnReconnect: false,
            revalidateOnFocus: false,
        });

    return {
        storeCategoriesData: data,
        storeCategoriesLoading: isLoading,
        storeCategoriesError: error,
    }

}