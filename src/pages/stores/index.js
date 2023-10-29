// src/pages/stores/index.js
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getToken } from 'lib/authenticate';
import { useRouter } from 'next/router';
export default function Stores() {
    const [stores, setStores] = useState([]);
    const [error, setError] = useState(null);
    const router = useRouter();

    // function to handle the click event 
    function handleStoreClick(storeId) {
        router.push(`/products/${storeId}`);
    }

    useEffect(() => {
        async function fetchStores() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/private/stores`, {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`,
                        'Content-Type': 'application/json',
                    }
                });
                if (!res.ok) {
                    console.error(`HTTP Error: Status: ${res.status}`);
                    setError('Failed to fetch data');
                    return
                }
                const result = await res.json();
                setStores(result.data);
            } catch (err) {
                console.error(`Error Occurred while fetching data: ${err}`);
                setError(`An Error occurred while fetching data`);
                return;
            }

        };
        fetchStores();
    }, []);
    if (!stores) return (<h2>Loading Stores!!</h2>)
    return (
        <div className="bg-campus-background p-4 md:p-8 lg:p-10">
            <h1 className="text-2xl md:text-3xl font-noto_serif ">Stores to help you save</h1>
            {/* Stores */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2 font-noto_serif'>
                {error ? (
                    <h2>Error: {error}</h2>
                ) : (
                    stores.map((store) => {
                        return <div
                            key={store._id}
                            onClick={(e) => router.push(`/products/${store._id}`)}
                            className="p-2 w-full  mx-auto bg-campus-background rounded-xl shadow-lg flex  items-center space-x-4" >
                            <div className="shrink-0">
                                <img src={store.imageUrl}
                                    alt={`${store.name} Logo`}
                                    width={80} height={60}
                                />
                            </div>
                            <div>
                                <div className="text-xl font-medium text-campus-text  border-black rounded-xl">
                                    {store.name}
                                </div>
                                <div className="flex flex-wrap text-slate-500 text-sm">
                                    {store.category.join(' ')}
                                </div>
                            </div>
                        </div>
                    }))
                }

            </div>
        </div >)

}