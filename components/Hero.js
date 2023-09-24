import Image from 'next/image';
import React from 'react';
import Background from '../public/images/grocery-cart.jpg';

const Hero = () => {
  return (
    // <div className="bg-cover bg-[url('${Background}')] h-screen bg-no-repeat bg-center"></div>
    <div className="bg-cover h-screen bg-no-repeat bg-center bg-fixed flex items-center relative">
      <Image src={Background} alt="Grocery bag" />
      <div>
        <span className="absolute inset-0 bg-black">Hello</span>
      </div>
    </div>
  );
};

export default Hero;
