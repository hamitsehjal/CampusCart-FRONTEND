// src/components/stores.jsx

/** 
Stores Components - Renders Stores 
*/
import { useRouter } from 'next/router';
import Image from 'next/image'
export default function Stores(props) {
  const router = useRouter();
  return (<>
    {props.Error ? (<h2>Error Occurred while fetching stores</h2>
    ) : props.isLoading ? (<h2>Loading Stores</h2>
    ) : (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2 font-noto_serif'>
        {
          props.data.stores.map((store) => {
            return <div
              key={store._id}
              onClick={() => router.push({
                pathname: `/products`,
                query: { storeId: store._id }
              })}
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
  </>)
}
