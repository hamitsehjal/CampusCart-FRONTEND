// This is the Homepage of CampusCart
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HomePageImage, StoreImages, CategoriesImages } from '../../../public'


export const Hero = () => {
  return (
       <section style={{ backgroundImage: `url(${HomePageImage.grocery1})`, backgroundSize: 'cover' }} className='pt-10 bg-green-300/10'>
        
           <div className='px-10 xl:px-20 lg:px-20 md:px-20 sm:grid sm:grid-cols-2 flex flex-col gap-x-5 sm:px-20'>
                {/* Text */}
                <div className='col pt-3.5 flex items-center'>
                    <div className='xl:space-y-7 lg:space-y-5 md:space-y-4 sm:space-y-4 space-y-5 w-11/12 sm:tracking-normal tracking-wide'>
                        {/* title */}
                        <h1 className='xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl text-3xl font-bold capitalize xl:tracking-wide'>
                            Bring the Store <br />
                            <div className='xl:my-2.5 lg:my-1.5 sm:my-0 md:my-0.5 my-1'>
                                <span className='text-green-500'>
                                        to your doors
                                </span>
                            </div>
                                
                        </h1>
                        {/* description */}
                        <p className='lg:text-[20px] md:text-sm sm:text-xs text-sm'>
                            Best Groceries app ever. Pick your desired groceries from the menu.
                        </p>
                        <div className='flex space-x-5'>
                            <Link href='../user-register' className='bg-green-600 text-white rounded-lg py-4 px-5 duration-300 transition-all ease-in-out hover:bg-blue-500 hover:shadow-lg inline-block relative top-0 hover:-top-1'>
                                Sign Up Now
                            </Link>
                        </div>
                    </div>
                </div>
                 <div className='col xl:py-5 xl:px-10 py-5 px-5'>
                            <Image                            
                            className="xl:w-[25rem] lg:w-[20rem] md:w-[15rem] ms-auto sm:w-[15rem] w-[10rem]"        
                            src={HomePageImage.grocery2}        
                            alt="banner"        
                            width={2000}        
                            height={2000} />    
                </div>
            </div>
        </section>
    )
}
