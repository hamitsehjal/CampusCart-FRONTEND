// This is the Homepage of CampusCart
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HomePageImage, StoreImages, CategoriesImages } from '../../public'
import { RiStore3Fill } from 'react-icons/ri'
import { FaMapLocationDot } from 'react-icons/fa6'
import { VscFeedback } from 'react-icons/vsc'



export default function Homepage() {
  return (
    
    <><div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[550px] top-[70%] -translate-y-[70%] space-y-2 lg:space-y-4 bg-[#ffffffa5] sm:bg-transparent p-4 sm:p-0 rounded-lg ">
        <h1 className="text-campus-accent text-4xl lg:text-[70px] font-bold leading-[1.2] font-cinzel">
          Bring the Store to your Doors
        </h1>
        <h3 className="text-black font-bold text-[24px] lg:text-[48px] leading-[1.2] font-noto_serif">Best Groceries app ever. Pick your desired groceries from the menu.</h3>

        <div className="bg-campus-accent text-white text-[24px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-campus-secondary">
          Sign Up Now
        </div>
      </div>

      <Image
        className="w-[100%] h-[400px] md:h-auto object-cover object-right md:object-left-bottom"
        src={HomePageImage.grocery1}
        alt="banner"
        width={2000}
        height={2000} />
    </div>
    
    <div className="mx-auto py-10 flex-row">
        <p className=" text-3xl lg:text-5xl font-cinzel font-semibold text-campus-text text-center mt-3">
          Top Stores
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2 py-20 px-10">
          <div className="flex flex-col gap-5 items-center py-4">
            <Image src={StoreImages.SevenEleven} alt="v1" width={100} height={100} className='hover:cursor-pointer'/>
            <div className="text-3xl font-bold text-campus-text  border-black rounded-xl hover:cursor-pointer">
               7 Eleven
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center py-4">
            <Image src={StoreImages.Costco} alt="v1" width={100} height={100} className='hover:cursor-pointer'/>
            <div className="text-3xl font-bold text-campus-text  border-black rounded-xl hover:cursor-pointer">
               Costco
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center py-4">
            <Image src={StoreImages.DollarTree} alt="v1" width={100} height={100} className='hover:cursor-pointer'/>
            <div className="text-3xl font-bold text-campus-text  border-black rounded-xl hover:cursor-pointer">
               Dollar Tree
            </div>           
          </div>
        </div>
      </div>

    <div className="mx-auto py-10 flex-row">
        <div className=" text-3xl lg:text-5xl font-cinzel font-semibold text-campus-text text-center mt-3">
          Things to Know
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2 py-20 px-10">
          {/* Become A Partner */}
          <div className="flex flex-col gap-5 items-center py-4">
            <div>
              <Link className="flex flex-row gap-x-2 items-center justify-start text-2xl hover:cursor-pointer" href=''>                        
                <div>
                  <RiStore3Fill className="h-20  md:h-20 lg:h-20 w-20 md:w-20 lg:w-20 text-campus-secondary" />
                </div>
              </Link>
            </div>
            <div className="text-3xl font-bold text-campus-text  border-black rounded-xl hover:cursor-pointer">
               Become Partner
            </div>
          </div>
          {/* Pick Up Location*/}
          <div className="flex flex-col gap-5 items-center py-4">
            <div>
              <Link className="flex flex-row gap-x-2 items-center justify-start text-2xl hover:cursor-pointer" href=''>                        
                <div>
                  <FaMapLocationDot className="h-20  md:h-20 lg:h-20 w-20 md:w-20 lg:w-20 text-campus-secondary" />
                </div>
              </Link>
            </div>
            <div className="text-3xl font-bold text-campus-text  border-black rounded-xl hover:cursor-pointer">
               Pick Up Locations
            </div>
          </div>
          {/* Review */}
          <div className="flex flex-col gap-5 items-center py-4">
            <div>
              <Link className="flex flex-row gap-x-2 items-center justify-start text-2xl hover:cursor-pointer" href=''>                        
                <div>
                  <VscFeedback className="h-20  md:h-20 lg:h-20 w-20 md:w-20 lg:w-20 text-campus-secondary" />
                </div>
              </Link>
            </div>
            <div className="text-3xl font-bold text-campus-text  border-black rounded-xl hover:cursor-pointer">
               Reviews
            </div>
          </div>
        </div>
      </div>
      </>    
  );
}

