// This is the Homepage of CampusCart
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HomePageImage, StoreImages, CategoriesImages } from '../../public'



export default function Homepage() {
  return (
    
    <><div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[550px] top-[70%] -translate-y-[70%] space-y-2 lg:space-y-4 bg-[#ffffffa5] sm:bg-transparent p-4 sm:p-0 rounded-lg ">
        <h1 className="text-campus-accent text-4xl lg:text-[70px] font-bold leading-[1.2] font-cinzel">
          Bring the Store to your Doors
        </h1>
        <h3 className="text-black font-bold text-[24px] lg:text-[48px] leading-[1.2] font-noto_serif">Best Groceries app ever. Pick your desired groceries from the menu.</h3>

        <div className="bg-campus-accent text-white text-[24px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-campus-secondary">
          Join Now
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16 py-20">
          <div className="flex flex-col gap-5 items-center">
            <Image src={StoreImages.SevenEleven} alt="v1" width={100} height={100} />
            <div className="text-3xl font-bold text-campus-text  border-black rounded-xl">
               7 Eleven
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <Image src={StoreImages.Costco} alt="v1" width={100} height={100} />
            <div className="text-3xl font-bold text-campus-text  border-black rounded-xl">
               Costco
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <Image src={StoreImages.DollarTree} alt="v1" width={100} height={100} />
            <div className="text-3xl font-bold text-campus-text  border-black rounded-xl">
               Dollar Tree
            </div>           
          </div>
          <div className="flex flex-col gap-5 items-center">
            <Image src={StoreImages.IndianMart} alt="v1" width={100} height={100} />
            <div className="text-3xl font-bold text-campus-text  border-black rounded-xl">
               Indian Market
            </div>           
          </div>
        </div>
      </div></>
    
  );
}

    