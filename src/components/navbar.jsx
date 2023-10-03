// This is the Navbar Component of CampusCart
import { useState } from 'react';
import { ShoppingCartIcon, Bars4Icon, XCircleIcon } from '@heroicons/react/24/outline';
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='mx-auto'>

            <nav className="flex  flex-row justify-between md:px-4 px-2 ">
                {/* Logo  */}
                <div className="flex flex-row gap-x-2 items-center justify-start text-2xl">
                    <ShoppingCartIcon className="h-6  md:h-10 lg:h-16 w-6 md:w-10 lg:w-16 text-red-700" />
                    <span className="text-xl md:text-2xl">CampusCart</span>
                </div>

                {/* Home 
            Contact US  */}
                <div className="hidden lg:flex flex-row gap-x-4 items-center justify-start text-xl">
                    <a href='#'>Home</a>
                    <a href='#'>Benefits</a>
                    <a href='#'>Contact Us</a>
                </div>

                {/* Log In 
            Sign Up  */}
                <div className="hidden lg:flex flex-row gap-x-4 items-center justify-end text-xl">
                    <a href='#'>Log In</a>
                    <a href='#'>Sign Up</a>
                </div>
                {/* hamburger Icon for Mobile navigation */}
                <div className='lg:hidden flex flex-col items-center justify-center text-xl'>
                    <button onClick={toggleMenu}>
                        {!isOpen ?
                            <Bars4Icon className='h-6 w-6' /> : <XCircleIcon className='h-6 w-6' />
                        }

                    </button>

                    {isOpen && <div className='flex flex-col items-center'>
                        <a href='#'>Home</a>
                        <a href='#'>Benefits</a>
                        <a href='#'>Contact Us</a>
                        <a href='#'>Log In</a>
                        <a href='#'>Sign Up</a>
                    </div>}
                </div>

            </nav>
        </div>

    )
}