import React from "react";
import logo from "../public/images/logo-1.png";
import Image from "next/image";
import Link from "next/link";

const navMenu = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "Contact Us",
  },
];

const Navbar = () => {
  return (
    <>
      <header className="py-7">
        {/* <div className="container px-4 mx-auto"> */}
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src={logo}
                width={157}
                height={30}
                alt="Campus cart logo"
              />
            </Link>
          </div>
          <div>
            <ul>
              {navMenu.map((item, idx) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* </div> */}
      </header>
    </>
  );
};

export default Navbar;
