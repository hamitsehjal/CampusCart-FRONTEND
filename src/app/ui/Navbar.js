import React from 'react';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { HiBars3 } from 'react-icons/hi2';
import { GrClose } from 'react-icons/gr';
import { BiChevronRight } from 'react-icons/bi';

const navMenu = [
  {
    href: '#',
    label: 'Home',
  },
  {
    href: '#',
    label: 'Contact Us',
  },
];

const Navbar = () => {
  //   const [navOpen, setNavOpen] = useState(false);

  //   const mobileHandler = () => {
  //     setNavOpen(!navOpen);
  //   };

  return (
    <>
      <header className="py-7">
        <div className="container px-4 mx-auto bg-red-700">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <Image src={logo} width={157} height={30} alt="Campus cart logo" />
              </Link>
            </div>
            <div className="hidden lg:block text-white">
              <ul className="flex space-x-7">
                {navMenu.map((item, idx) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex space-x-7">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 border rounded-lg hidden lg:inline-block"
              />

              <Link
                href="#"
                className="px-4 py-2 bg-primary2 text-white rounded-lg hidden lg:inline-block"
              >
                Search
              </Link>
            </div>
            <div className="flex space-x-7">
              <Link
                href="#"
                className="px-4 py-2 bg-primary2 text-white rounded-lg hidden lg:inline-block"
              >
                Sign Up
              </Link>

              <Link
                href="#"
                className="px-4 py-2 bg-primary2 text-white rounded-lg hidden lg:inline-block"
              >
                Log In
              </Link>

              <button className="block lg:hidden">
                <HiBars3 className="text-3xl" />
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </header>
      {/* Mobile/Tablet
      <div className={navOpen ? 'py-0' : ''}>
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={mobileHandler}
        ></div>

        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button className="flex items-center space-x-3">
              <GrClose />
              <span>Close</span>
            </button>
          </div>
          <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
            <ul className="block mb-7">
              {navMenu.map((item, idx) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:Opacity-100 group-hover:left-3">
                      <BiChevronRight className="text-xl" />
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 py-2 border rounded-lg lg:inline-block"
                />
              </li>
              <li>
                <Link
                  href="#"
                  className="px-10 py-2 mt-2 bg-primary2 text-white rounded-lg lg:inline-block"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-11 py-2 mt-2 bg-primary2 text-white rounded-lg hidden lg:inline-block"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-10 py-2 mt-2 bg-primary2 text-white rounded-lg hidden lg:inline-block"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
