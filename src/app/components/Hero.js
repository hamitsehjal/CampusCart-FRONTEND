import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const heroContent = {
  text: {
    heading: 'Bring the Store to your Doors',
    subheading: 'Best Groceries app ever. Pick your desired groceries from the menu',
  },
};

const Hero = () => {
  return (
    <section className="py-1">
      <div
        className="container px-4 mx-auto flex bg-cover bg-center h-screen w[6000px] h[3000px]"
        style={{
          backgroundImage: `url('/images/grocery-cart.jpg')`,
        }}
      >
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-9xl font-bold px-3 mx-auto text-heading mb-7 text-background">
              {heroContent.text.heading}
            </h1>
            <h3 className="text-2xl lg:text-5xl font-bold text-heading mb-7 px-3 mx-auto text-primary1">
              {heroContent.text.subheading}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
