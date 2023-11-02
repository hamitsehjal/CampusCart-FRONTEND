import useSWR from "swr";
export default function useStores(options) {
    const { data, error, isLoading } = useSWR(
        [`${process.env.NEXT_PUBLIC_BACKEND_API}/private/stores`, options],
        {
            revalidateIfStale: false,
            revalidateOnReconnect: false,
            revalidateOnFocus: false,
        });

    return {
        storesData: data,
        storesError: error,
        storesLoading: isLoading,
    }

}

