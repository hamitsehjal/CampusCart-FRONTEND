import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HomePageImage } from '../../../public';

export const PartnerSection = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulating a delay of 2 seconds for demonstration purposes
    const timeout = setTimeout(() => {
      setContentLoaded(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={`pt-10 ${contentLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className='grid py-3.5 gap-x-3 gap-y-4 sm:grid-cols-2 grid-cols-1'>
        <div className='flex items-center justify-center'>
          <Image
            className="xl:w-[20rem] sm:m-0 lg:w-[15rem] md:w-[15rem] sm:w-[15rem] w-[9rem] transition-opacity opacity-0 duration-[2s]"
            src={HomePageImage.store}
            alt="banner"
            width={1500}
            height={1500}
            onLoadingComplete={(image) => {
              image.classList.remove("opacity-0");
              setContentLoaded(true);
            }}
          />
        </div>
        <div className='flex md:max-w-none false max-w-[32rem] items-center justify-center px-10'>
          <div className='lg:space-y-8 space-y-4'>
            <div className='md:space-y-2.5 sm:space-y-1.5 space-y-2.5 w-11/12'>
              <h1 className='pb-0 md:text-2xl text-xl font-semibold capitalize xl:tracking-wide'>
                Become A Partner
              </h1>
              <p className='lg:text-base text-gray-700 md:text-sm sm:text-xs text-sm'>
                Elevate your business by partnering with us.
              </p>
            </div>
            <div className='lg:space-y-6 sm:space-y-4 space-y-5'>
              {/* List of Qualities */}
              <ul className='md:space-y-4 sm:space-y-2 space-y-2.5'>
                {['Expand your reach with our e-commerce grocery partnership opportunities.', 'Join forces for mutual growth and success in the online market.', 'Collaborate with us to offer diverse products and reach new customers.', 'Unlock synergies by becoming a partner and boosting your business.'].map((quality, i) => (
                  <li key={i} className='space-x-2 p-0'>
                    <Image className='inline-block lg:w-6 w-4 my-auto'
                      src={HomePageImage.rightTick}
                      loading='lazy'
                      width={24}
                      height={24}
                      alt={quality} />
                    <span className='inline-block lg:text-base md:text-sm sm:text-xs text-sm font-semibold'>{quality}</span>
                  </li>
                ))}
              </ul>
              <div className='flex space-x-5'>
                <Link href='/partner-register' className='bg-green-600 text-white rounded-lg py-4 px-5 duration-300 transition-all ease-in-out hover:bg-blue-500 hover:shadow-lg inline-block relative top-0 hover:-top-1'>
                  Become A Partner
                </Link>
                <Link href='/dashboard' className='bg-green-600 text-white rounded-lg py-4 px-5 duration-300 transition-all ease-in-out hover:bg-blue-500 hover:shadow-lg inline-block relative top-0 hover:-top-1'>
                  Log in to my Store
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
