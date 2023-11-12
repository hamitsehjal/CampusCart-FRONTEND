import React from 'react'
import Link from "next/link"; 
import { RiCustomerService2Fill} from "react-icons/ri";

export const Services = () => {
  return (
    <div className='bg-gray-50 px-8 py-5 border-2 border-gray-400 rounded-lg shadow-black w-full'>
        <div className=' sm:grid sm:grid-cols-2 flex flex-col xl:w-full'>
            <div className='col col-span-2 xl:text-lg lg:text-base text-sm font-semibold my-auto text-center'>
                Have a Questions ?
            </div>
            <div className='col-span-2'>
                <Link href="/">
                    <h4 className="bg-yellow-500 text-black border-2 px-4 py-2 rounded-lg w-full mt-4 text-center font-semibold xl:text-lg lg:text-base text-sm hover:shadow-md">
                        Track Order
                    </h4>   
                </Link>
            </div>
            <div className='col-span-2'>
                <Link href="/">
                    <h4 className="bg-white text-black shadow-black border-2 px-4 py-2 rounded-lg w-full mt-4 text-center font-semibold xl:text-lg lg:text-base text-sm hover:shadow-md">
                        Cancel Order
                    </h4>   
                </Link>
            </div>
            <div className='col-span-2'>
                <Link href="/">
                    <h4 className="bg-white text-black shadow-black border-2 px-4 py-2 rounded-lg w-full mt-4 text-center font-semibold xl:text-lg lg:text-base text-sm hover:shadow-md">
                        Go Bck to Stores
                    </h4>   
                </Link>
            </div>
            <div className='col-span-2'>
                <Link href="/">
                    <h4 className="bg-white text-black shadow-black border-2 px-4 py-2 rounded-lg w-full mt-4 text-center font-semibold xl:text-lg lg:text-base text-sm hover:shadow-md">
                        Contact Us
                    </h4>   
                </Link>
            </div>
        </div>
    </div>
  )
}
