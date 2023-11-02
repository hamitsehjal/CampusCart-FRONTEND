// src/pages/stores/index.js
import Image from 'next/image'
import { getToken } from 'lib/authenticate';
import { useRouter } from 'next/router';
import { useStores } from 'utils';
export default function Stores() {
    const router = useRouter();
    const options = {
        headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
        }
    }
    const { storesData, storesError, storesLoading } = useStores(options);



    return (
        <div className="bg-campus-background p-4 md:p-8 lg:p-10">
            <h1 className="text-2xl md:text-3xl font-noto_serif ">Stores to help you save</h1>
            {/* Store Categories */}
            {/* <div className='flex flex-wrap space-x-2 font-noto_serif'>

            </div> */}
            {/* Stores */}
            {storesError ? (<h2>Error Occurred</h2>
            ) : storesLoading ? (<h2>Loading Data</h2>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2 font-noto_serif'>
                    {
                        storesData.stores.map((store) => {
                            return <div
                                key={store._id}
                                onClick={() => router.push(`/products/${store._id}`)}
                                className="p-2 w-full  mx-auto bg-campus-background rounded-xl shadow-lg flex  items-center space-x-4" >
                                <div className="shrink-0">
                                    <Image
                                        src={store.imageUrl}
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
                        })
                    }

                </div>)}
        </div >)

}