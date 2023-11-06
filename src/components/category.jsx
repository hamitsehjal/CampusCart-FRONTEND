/** 
- Categories Components
- Renders categories for filtering stores, products, etc

*/
import { CategoriesImages } from '../../public';
import Image from 'next/image';
export default function Category(props) {
  return (<>
    {props.error ? (<h2>Error Occurred when fetching Categories</h2>) :
      props.isLoading ? (<h2>Loading Categories</h2>) : (
        <div className='flex flex-wrap space-x-2 font-noto_serif'>
          <div
            onClick={() => props.setCategory('all')}
            className='flex flex-col p-2 max-w-xs items-center'>
            <div className="shrink-0 bg-slate-200 rounded-xl shadow-lg">
              <Image
                src={CategoriesImages.grocery}
                alt="All"
                width={50} height={50} />
            </div>
            <div className=" text-slate-500 text-sm">
              All
            </div>
          </div>
          {
            props.data.categories.map((category) => {
              return <div
                key={category._id}
                onClick={() => props.setCategory(category.name)}
                className='flex flex-col p-2 max-w-xs items-center'>
                <div className="shrink-0 bg-slate-200 rounded-xl shadow-lg">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    width={50} height={50} />
                </div>
                <div className=" text-slate-500 text-sm">
                  {category.name}
                </div>
              </div>
            })
          }
        </div>
      )

    }
  </>)
}