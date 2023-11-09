/** 
props object will contain `data`,`error`,'isLoading' values
*/
import Image from 'next/image';
export default function ProductsAll(props) {
  return (<>
    {props.Error ? (<h2>Error Occurred while fetching stores</h2>
    ) : props.isLoading ? (<h2>Loading Stores</h2>
    ) : (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2 font-noto_serif'>
        {
          props.data.products.map((product) => {
            return <div
              key={product._id}
              className="p-2 w-full  mx-auto bg-campus-background rounded-xl shadow-lg flex  items-center space-x-4" >
              <div className="shrink-0">
                <Image
                  src={product.imageUrl}
                  alt={`${product.name} Logo`}
                  width={80} height={60}
                />
              </div>
              <div>
                <div className="text-xl font-medium text-campus-text  border-black rounded-xl">
                  {product.name}
                </div>
                <div className="flex flex-wrap text-slate-500 text-sm">
                  {product.category}
                </div>
              </div>
            </div>
          })
        }

      </div>)}
  </>)
}