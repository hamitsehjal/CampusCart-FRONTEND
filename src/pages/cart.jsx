import React, { useState } from 'react';
import { CartDummyImages } from "../../public";
import Image from 'next/image';
const Cart = () => {

  const [quantities, setQuantities] = useState([0, 0, 0]);


  const incrementQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decrementQuantity = (index) => {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };


  return (
   
    <div class="h-screen bg-gray-100 pt-20">
    <h1 class="text-2xl text-campus-text font-cinzel mb-6 text-center">Cart Items</h1>
    <div class="mx-auto max-w-screen-lg justify-start md:flex md:space-x-4">
      <div class="rounded-lg md:w-2/3 overflow-y-auto max-h-[70vh]">
      <div class="h-50 w-100 mr-1 shadow-md justify-between mb-6 rounded-lg bg-white p-6  sm:flex sm:justify-start "> 
        <Image
              src={CartDummyImages.strawberry} 
              alt="Strawberry Image"
              width={140}        
              height={140}
        />
        <div class="sm:flex sm:w-full sm:justify-between">
            <div class= "font-noto_serif font-medium">
              <h2 class="text-lg font-cinzel font-bold">Strawberry 1LB</h2>
              <p class="text-sm font-noto_serif">CAD$ 3.10</p>
            </div>

              <div class="flex items-center border-gray-100">
                <button
                    onClick={() => decrementQuantity(0)}
                    className="mr-1 cursor-pointer bg-gray-200 rounded-full py-1 px-3 duration-100 hover:bg-campus-blue hover:text-white"
                  >
                    -
                  </button>
                  <input
                    className="h-6 w-10 border rounded-full bg-white text-center text-xs"
                    type="number"
                    value={quantities[0]}
                    min="0"
                  />
                  <button
                    onClick={() => incrementQuantity(0)}
                    className="ml-1 cursor-pointer bg-gray-300 rounded-full py-1 px-3 duration-100 hover:bg-campus-blue hover:text-white"
                  >
                    +
                  </button>
                  <div>
                    <button
                        className="bg-gray-200 rounded-full py-0 px-2 ml-2 text-black font-bold cursor-pointer hover:bg-campus-red hover:text-white"
                    >
                    x
                    </button>
                  </div>
              </div>
              
          </div>
        </div>


       <div class="h-50 w-100 mr-1 shadow-md justify-between mb-6 rounded-lg bg-white p-6  sm:flex sm:justify-start "> 
        <Image
              src={CartDummyImages.avacado} 
              alt="Avacado Image"
              width={140}        
              height={140}
        />
        <div class="sm:flex sm:w-full sm:justify-between">
            <div class= "font-noto_serif font-medium">
              <h2 class="text-lg font-cinzel font-bold">Avacado Bag</h2>
              <p class="text-sm font-noto_serif">CAD$ 2.15</p>
            </div>

              <div class="flex items-center border-gray-100">
                <button
                    onClick={() => decrementQuantity(1)}
                    className="mr-1 cursor-pointer bg-gray-200 rounded-full py-1 px-3 duration-100 hover:bg-campus-blue hover:text-white"
                  >
                    -
                  </button>
                  <input
                    className="h-6 w-10 border rounded-full bg-white text-center text-xs"
                    type="number"
                    value={quantities[1]}
                    min="0"
                  />
                  <button
                    onClick={() => incrementQuantity(1)}
                    className="ml-1 cursor-pointer bg-gray-300 rounded-full py-1 px-3 duration-100 hover:bg-campus-blue hover:text-white"
                  >
                    +
                  </button>
                  <div>
                    <button
                        className="bg-gray-200 rounded-full py-0 px-2 ml-2 text-black font-bold cursor-pointer hover:bg-campus-red hover:text-white"
                    >
                    x
                    </button>
                  </div>
              </div>
              
          </div>
        </div>

        <div class="h-50 w-100 mr-1 shadow-md justify-between mb-6 rounded-lg bg-white p-6  sm:flex sm:justify-start "> 
        <Image
              src={CartDummyImages.onion} 
              alt="Onion Image"
              width={140}        
              height={140}
        />
        <div class="sm:flex sm:w-full sm:justify-between">
            <div class= "font-noto_serif font-medium">
              <h2 class="text-lg font-cinzel font-bold">Onion</h2>
              <p class="text-sm font-noto_serif">CAD$ 0.58</p>
            </div>

              <div class="flex items-center border-gray-100">
                <button
                    onClick={() => decrementQuantity(2)}
                    className="mr-1 cursor-pointer bg-gray-200 rounded-full py-1 px-3 duration-100 hover:bg-campus-blue hover:text-white"
                  >
                    -
                  </button>
                  <input
                    className="h-6 w-10 border rounded-full bg-white text-center text-xs"
                    type="number"
                    value={quantities[2]}
                    min="0"
                  />
                  <button
                    onClick={() => incrementQuantity(2)}
                    className="ml-1 cursor-pointer bg-gray-300 rounded-full py-1 px-3 duration-100 hover:bg-campus-blue hover:text-white"
                  >
                    +
                  </button>
                  <div>
                    <button
                        className="bg-gray-200 rounded-full py-0 px-2 ml-2 text-black font-bold cursor-pointer hover:bg-campus-red hover:text-white"
                    >
                    x
                    </button>
                  </div>
              </div>
              
          </div>
        </div>
      </div>

      <div class="shadow-md mt-0 md:w-1/3 h-full rounded-lg border bg-white p-8">
        <div class="flex justify-between">
          <p class="font-noto_serif font-medium text-black">Subtotal</p>
          <p class="font-noto_serif font-medium text-black">CAD$10.00</p>
        </div>
        <div class="flex justify-between">
          <p class="font-noto_serif font-medium text-black">Tax</p>
          <p class="font-noto_serif font-medium text-black">CAD$0.13</p>
        </div>
        <hr class="my-3" />
        <div class="flex justify-between">
          <p class="font-cinzel font-medium text-black text-lg">Total</p>
          <div class="my-3">
            <p class="mb-1 text-lg font-cinzel font-bold text-black">CAD$10.13</p>
            <p class="text-sm font-noto_serif font-medium text-black">including Tax</p>
          </div>
        </div>
        <button class="font-noto_serif font-medium text-white mt-3 w-full rounded-full bg-campus-red py-2 hover:bg-campus-accent">Check out</button>
      </div>
    </div>
  </div>
  )
}

export default Cart;
