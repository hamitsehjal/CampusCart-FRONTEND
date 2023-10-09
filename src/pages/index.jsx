// This is the Homepage of CampusCart
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HomePageImage } from '../../public'



export default function Homepage() {
  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[550px] top-[70%] -translate-y-[70%] space-y-2 lg:space-y-4 bg-[#ffffffa5] sm:bg-transparent p-4 sm:p-0 rounded-lg ">
        <h1 className="text-campus-accent text-4xl lg:text-[70px] font-bold leading-[1.2]">
          Bring the Store to your Doors
        </h1>
        <h3 className="text-black font-bold text-[24px] lg:text-[48px] leading-[1.2]">Best Groceries app ever. Pick your desired groceries from the menu.</h3>

        <div className="bg-campus-accent text-white text-[24px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-campus-secondary">
          Join Now
        </div>
      </div>

      <Image
        className="w-[100%] h-[400px] md:h-auto object-cover object-right md:object-left-bottom opacity-30"
        src={HomePageImage.grocery1}
        alt="banner"
        width={2000}
        height={2000}
      />
    </div>
    
    
  );
}

    