import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { HomePageImage } from '../../../public';

export const BestQuality = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulating a delay of 2 seconds for demonstration purposes
    const timeout = setTimeout(() => {
      setContentLoaded(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section style={{ backgroundImage: `url(${HomePageImage.groceryBg})`, backgroundSize: 'cover' }} className='pt-10 bg-green-100/10'>
      <div className={`grid py-3.5 gap-x-3 gap-y-4 sm:grid-cols-2 grid-cols-1 ${contentLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className='flex md:max-w-none false max-w-[32rem] items-center justify-center px-10'>
          <div className='lg:space-y-8 space-y-4'>
            <div className='md:space-y-2.5 sm:space-y-1.5 space-y-2.5 w-11/12'>
              <h1 className='pb-0 md:text-2xl text-xl font-semibold capitalize xl:tracking-wide'>
                Why We&apos;re Your Premier Choice for Grocery Shopping
              </h1>
              <p className='lg:text-base text-gray-700 md:text-sm sm:text-xs text-sm'>
                We pride ourselves on providing an extensive selection of products, ensuring you can discover all your family&apos;s food essentials.
              </p>
            </div>
            <div>
              <ul className='lg:max-w-[22rem] sm:max-w-[20rem] sm:p-0 px-1 md:space-y-2 space-y-1'>
                <li className='xl:space-x-3.5 space-x-3 flex p-0 xl:ps-3.5 md:ps-3 ps-0 rounded-md items-center xl:h-16 lg:h-14 h-12 md:hover:shadow-md  transition-all md:duration-400 duration-200'>
                  <Image className='xl:w-9 lg:w-8 w-7 my-auto'
                    src={HomePageImage.truck}
                    loading='lazy'
                    width={24}
                    height={24}
                    alt="truck" />
                  <div>
                    <span className="xl:text-lg lg:text-base text-sm font-semibold my-auto">Swift and Efficient Delivery</span>
                  </div>
                </li>
                <li className='xl:space-x-3.5 space-x-3 flex p-0 xl:ps-3.5 md:ps-3 ps-0 rounded-md items-center xl:h-16 lg:h-14 h-12 md:hover:shadow-md  transition-all md:duration-400 duration-200'>
                  <Image className='xl:w-9 lg:w-8 w-7 my-auto'
                    src={HomePageImage.location}
                    loading='lazy'
                    width={24}
                    height={24}
                    alt="truck" />
                  <div>
                    <span className="xl:text-lg lg:text-base text-sm font-semibold my-auto">Order Tracking and Management</span>
                  </div>
                </li>
                <li className='xl:space-x-3.5 space-x-3 flex p-0 xl:ps-3.5 md:ps-3 ps-0 rounded-md items-center xl:h-16 lg:h-14 h-12 md:hover:shadow-md  transition-all md:duration-400 duration-200'>
                  <Image className='xl:w-9 lg:w-8 w-7 my-auto'
                    src={HomePageImage.headphones}
                    loading='lazy'
                    width={24}
                    height={24}
                    alt="truck" />
                  <div>
                    <span className="xl:text-lg lg:text-base text-sm font-semibold my-auto">Customer Support</span>
                  </div>
                </li>
                <li className='xl:space-x-3.5 space-x-3 flex p-0 xl:ps-3.5 md:ps-3 ps-0 rounded-md items-center xl:h-16 lg:h-14 h-12 md:hover:shadow-md  transition-all md:duration-400 duration-200'>
                  <Image className='xl:w-9 lg:w-8 w-7 my-auto'
                    src={HomePageImage.price}
                    loading='lazy'
                    width={24}
                    height={24}
                    alt="truck" />

                  <div>
                    <span className="xl:text-lg lg:text-base text-sm font-semibold my-auto">Competitive Pricing</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <Image
            className="xl:w-[20rem] sm:m-0  lg:w-[15rem] md:w-[15rem] sm:w-[15rem] w-[9rem] transition-opacity opacity-0 duration-[2s]"
            src={HomePageImage.grocery3}
            alt="banner"
            width={1500}
            height={1500}
            onLoadingComplete={(image) => {
              image.classList.remove("opacity-0");
              setContentLoaded(true);
            }}
          />
        </div>
      </div>
    </section>
  )
}
