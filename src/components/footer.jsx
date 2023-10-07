// This is the Footer Component of CampusCart
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
export default function Footer() {
    return (
        <div className=" bg-campus-red flex flex-col text-campus-background p-2 md:p-4 lg:p-10">
            {/* Helpful Links and Resources*/}
            <div className="grid grid-cols-2 gap-2 md:gap-4 justify-items-stretch">
                <div className="flex flex-col md:flex-row ">

                    {/* Quick Links */}
                    <div className='flex-1'>
                        <ul>
                            <li>Why CampusCart?</li>
                            <li>FAQ</li>
                            <li>Become a Partner</li>
                            <li>Log In</li>
                            <li>Sign Up</li>
                            <li>Stores</li>
                            <li>Media & Community</li>
                        </ul>
                    </div>
                    {/* Legal and Compliance */}
                    <div className='flex-1 mt-2 md:mt-0'>
                        <ul>
                            <li>Terms of Service</li>
                            <li>Accessibility Policy</li>
                            <li>Account Security</li>
                            <li>Rewards Condition</li>
                        </ul>
                    </div>
                </div>
                {/* Social Links */}
                <div className='flex flex-col md:justify-between text-center'>
                    <div>
                        <p>Invite Friends, Get $5</p>
                    </div>
                    <div>
                        <ul>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>YouTube</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='my-1 md:hidden' />
            <div className="flex flex-row justify-center">
                {/*Copyright  */}
                <div>
                    <p>&copy; CampusCart 2023 All Rights Reserved</p>
                </div>
            </div>
        </div>)
}