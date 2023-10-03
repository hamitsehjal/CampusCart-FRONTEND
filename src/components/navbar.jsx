// This is the Navbar Component of CampusCart
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
export default function Navbar() {
    return (
        <div className='mx-auto'>

            <nav className="flex  flex-row justify-around ">
                {/* Logo  */}
                <div className="basis-2/5 flex flex-row gap-x-2 items-center justify-start text-2xl">
                    <ShoppingCartIcon className="h-16 w-16 text-red-700" />
                    <span className="text-3xl">CampusCart</span>
                </div>

                {/* Home 
            Contact US  */}
                <div className="basis-1/4 flex flex-row gap-x-4 items-center justify-start text-xl">
                    <a href='#'>Home</a>
                    <a href='#'>Contact Us</a>
                </div>

                {/* Log In 
            Sign Up  */}
                <div className="basis-1/4 flex flex-row gap-x-4 items-center justify-end text-xl">
                    <a href='#'>Log In</a>
                    <a href='#'>Sign Up</a>
                </div>

            </nav>
        </div>

    )
}