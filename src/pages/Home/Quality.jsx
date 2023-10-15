// This is the Homepage of CampusCart
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HomePageImage } from '../../../public' 


export const Quality = () => {
  return (
       <section className='pt-10'>
        
           <div className='grid py-3.5 gap-x-3 gap-y-4 sm:grid-cols-2 grid-cols-1'>
		        <div className='flex items-center justify-center'>
                            <Image                            
                            className="xl:w-[20rem] sm:m-0  lg:w-[15rem] md:w-[15rem] sm:w-[10rem] w-[9rem]"        
                            src={HomePageImage.groceryBag}        
                            alt="banner"        
                            width={1500}        
                            height={1500} />    
                </div>
                <div className='flex md:max-w-none false max-w-[32rem] items-center justify-center px-10'>
                    <div className='lg:space-y-8 space-y-4'>
                        <div className='md:space-y-2.5 sm:space-y-1.5  space-y-2.5 w-11/12'>
                            <h1 className='pb-0 md:text-2xl text-xl font-semibold capitalize xl:tracking-wide'>
                                Discover the Finest Selection of Nutrient-Rich, Fresh Groceries
                            </h1>
                            <p className='lg:text-base text-gray-700 md:text-sm sm:text-xs text-sm'>
                                At our grocery website, we are committed to providing you with the highest quality, healthiest, and freshest grocery items available from top stores. Here's why our products stand out:
                            </p>
                        </div>
                        <div className='lg:space-y-6 sm:space-y-4 space-y-5'>
                            {/* List of Qualities */}
                            <ul className='md:space-y-4 sm:space-y-2 space-y-2.5'>
                                {['Premium Organic and Natural Selection', 'Unparalleled Customer Satisfaction Guarantee', 'Select grocery from the top grocery stores', 'User-Friendly Shopping'].map((quality, i) => (
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
                        </div>
                    </div>   
                </div>
            </div>
        </section>
    )
}
