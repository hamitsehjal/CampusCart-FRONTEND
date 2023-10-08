// This is the Navbar Component of CampusCart
import { useState } from 'react';
import { RiShoppingBasket2Line, RiMenuLine, RiCloseCircleLine } from 'react-icons/ri'
import Link from 'next/link';
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className=' bg-campus-red'>
            <nav className='flex flex-col'>
                <div className="flex flex-row justify-between p-4 md:p-2  text-campus-background">
                    {/* Logo  */}
                    <div>
                        <Link className="flex flex-row gap-x-2 items-center justify-start text-2xl" href='#'>
                            <RiShoppingBasket2Line className="h-6  md:h-10 lg:h-16 w-6 md:w-10 lg:w-16 text-campus-background" />
                            <span className="text-xl md:text-2xl font-noto_serif">CampusCart</span>
                        </Link>
                    </div>
                    {/* Home 
            Contact US  */}
                    <div className="hidden lg:flex flex-row gap-x-4 items-center justify-start text-xl">
                        <Link href='#' className='font-noto_serif'>Home</Link>
                        <Link href='#' className='font-noto_serif'>Benefits</Link>
                        <Link href='#' className='font-noto_serif'>Contact Us</Link>
                    </div>

                    {/* Log In 
            Sign Up  */}
                    <div className="hidden lg:flex flex-row gap-x-4 items-center justify-end text-xl">
                        <Link className='px-4 py-2 font-noto_serif text-sm bg-campus-text text-campus-background rounded-3xl hover:bg-campus-background hover:text-campus-text' href='#'>Log In</Link>
                        <Link className='px-4 py-2 bg-campus-text font-noto_serif text-sm text-campus-background rounded-3xl hover:bg-campus-background hover:text-campus-text' href='#'>Sign Up</Link>
                    </div>
                    {/* Mobile navigation */}
                    <div className='lg:hidden flex flex-col items-center justify-center text-xl'>
                        <button onClick={toggleMenu}>
                            {!isOpen ?
                                <RiMenuLine className='h-6 w-6' /> : <RiCloseCircleLine className='h-6 w-6' />
                            }

                        </button>
                    </div>

                </div>
                {isOpen && <div className='flex flex-col gap-2 items-center text-campus-background text-lg font-noto_serif'>
                    <Link href='#'>Home</Link>
                    <Link href='#'>Benefits</Link>
                    <Link href='#'>Contact Us</Link>
                    <Link className='px-4 py-2 bg-campus-text text-sm text-campus-background rounded-3xl hover:bg-campus-background hover:text-campus-text' href='#'>Log In</Link>
                    <Link className='px-4 py-2 mb-2 bg-campus-text text-sm text-campus-background rounded-3xl hover:bg-campus-background hover:text-campus-text' href='#'>Sign Up</Link>
                </div>}
            </nav>

        </div>

    )
}