// This is the Navbar Component of CampusCart
import { useState } from "react";
import {
  RiShoppingBasket2Line,
  RiMenuLine,
  RiCloseCircleLine,
  RiLoginBoxLine,
  RiBodyScanLine,
} from "react-icons/ri";
import Link from "next/link";

import { readToken, removeToken } from "lib/authenticate";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const token = readToken();

  function logout() {
    removeToken();
    router.push('/');
  }
  return (
    <nav className="bg-campus-red flex flex-col">
      <div className="flex flex-row justify-between p-4 md:p-2  text-campus-background">
        {/* Logo  */}
        <div>
          <Link
            className="flex flex-row gap-x-2 items-center justify-start text-2xl"
            href="#"
          >
            <RiShoppingBasket2Line className="h-10  md:h-10 lg:h-16 w-10 md:w-10 lg:w-16 text-campus-background" />
            <span className="text-lg md:text-2xl font-noto_serif">
              CampusCart
            </span>
          </Link>
        </div>
        {/* Home 
            Contact US  */}
        <div className="hidden lg:flex flex-row gap-x-4 items-center justify-start text-xl">
          <Link href="/" className="font-noto_serif">
            Home
          </Link>
          <Link href="/stores" className="font-noto_serif">
            Stores
          </Link>
          <Link href="#" className="font-noto_serif">
            Contact Us
          </Link>
        </div>

        {/* Log In 
            Sign Up  */}
        <div className="hidden lg:flex flex-row gap-x-4 items-center justify-end text-xl">
          {!token &&
            <Link
              className="px-4 py-2 font-noto_serif text-sm bg-campus-text text-campus-background rounded-3xl hover:bg-campus-background hover:text-campus-text"
              href="/login"
            >
              Login
            </Link>}
          {!token && <Link
            className="px-4 py-2 bg-campus-text font-noto_serif text-sm text-campus-background rounded-3xl hover:bg-campus-background hover:text-campus-text"
            href="/user-register"
          >
            Sign Up
          </Link>}
          {token && <Link
            className="px-4 py-2 bg-campus-text font-noto_serif text-sm text-campus-background rounded-3xl hover:bg-campus-background hover:text-campus-text"
            onClick={logout}
            href="/"
          >
            Log out
          </Link>}
          {token && <Link
            className="px-4 py-2 bg-campus-text font-noto_serif text-sm text-campus-background rounded-3xl hover:bg-campus-background hover:text-campus-text"

            href="/cart"
          >
            Cart
          </Link>}
        </div>
        {/* Mobile navigation */}
        <div className="lg:hidden flex flex-col items-center justify-center text-xl">
          <button onClick={toggleMenu}>
            {!isOpen ? (
              <RiMenuLine className="h-6 w-6" />
            ) : (
              <RiCloseCircleLine className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="grid grid-cols-2 lg:hidden gap-2 p-4 text-campus-background font-noto_serif">
          {/* Links */}
          <div className="flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/stores">Stores</Link>
            <Link href="#">Contact Us</Link>
          </div>
          {/* Buttons */}
          <div className="flex flex-col gap-2 justify-end p-2">
            {!token && <Link className="flex flex-row gap-2 items-center" href="/login">
              <RiLoginBoxLine className="h-6 w-6" />
              <span className="text-sm">Login</span>
            </Link>}
            {!token && <Link
              className="flex flex-row gap-2 items-center"
              href="/user-register"
            >
              <RiBodyScanLine className="h-6 w-6" />
              <span className="text-sm">Sign Up</span>
            </Link>}
            {token && <Link
              className="flex flex-row gap-2 items-center"
              onClick={logout}
              href="/"

            >
              <RiLoginBoxLine className="h-6 w-6" />
              <span className="text-sm">Log out</span>
            </Link>}
          </div>
        </div>
      )}
    </nav>
  );
}