import React from "react";
import Link from "next/link"; 
import { TrackingDetails } from "./order-confirmation/trackingDetails";
import { Services } from "./order-confirmation/services";

const OrderConfirmation = () => {
  return (   
    <>
    <main className="py-10 px-10 bg-white">
      <h1 className="text-4xl font-bold mb-2 font-noto_serif">Thank You Ema for shopping with Us!</h1>
      <h4 className="mb-4 font-bold"> Your order has been placed successfully!</h4>
      <div className=' grid-col-2 sm:grid sm:grid-cols-3 flex flex-col w-full gap-x-10'>
        <div className='col-span-2'>
          
          <TrackingDetails />
        </div>
        <div className='col sm:py-0 py-4'>
          <Services />
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <Link href="/">
          <h4 className="bg-white text-black shadow-black border-2 px-4 py-2 rounded-lg w-full mt-4 text-center font-semibold xl:text-lg lg:text-base text-sm hover:shadow-md">
            Back to Home
          </h4>   
        </Link>
        <Link href="/">
          <h4 className="bg-white text-black shadow-black border-2 px-4 py-2 rounded-lg w-full mt-4 text-center font-semibold xl:text-lg lg:text-base text-sm hover:shadow-md">
            Order More
          </h4>   
        </Link>
      </div>
    </main>
    </>
  );
};

export default OrderConfirmation;