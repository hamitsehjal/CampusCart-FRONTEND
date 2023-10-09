// This is the Footer Component of CampusCart
import Link from 'next/link';
import { RiInstagramFill, RiTwitterXFill, RiFacebookCircleFill, RiYoutubeFill } from 'react-icons/ri'
export default function Footer() {
    return (
        <div className=" bg-campus-red flex flex-col text-campus-background text-lg font-noto_serif p-2 md:p-4 lg:p-10">
            {/* Helpful Links and Resources*/}
            <div className="grid grid-cols-2 gap-2 md:gap-4 justify-items-stretch">
                <div className="flex flex-col md:flex-row ">

                    {/* Quick Links */}
                    <div className='flex-1'>
                        <div className='flex flex-col gap-2'>
                            <Link href='#'>Why CampusCart?</Link>
                            <Link href='#'>FAQ</Link>
                            <Link href='#'>Become a Partner</Link>
                            <Link href='#'>Log In</Link>
                            <Link href='#'>Sign Up</Link>
                            <Link href='/stores'>Stores</Link>
                            <Link href='#'>Media & Community</Link>
                        </div>
                    </div>
                    {/* Legal and Compliance */}
                    <div className='flex-1 mt-4 pt-2 md:mt-0 md:pt-0'>
                        <div className='flex flex-col gap-2 text-xs md:text-lg'>
                            <Link href='#'>Terms of Service</Link>
                            <Link href='#'>Accessibility Policy</Link>
                            <Link href='#'>Account Security</Link>
                            <Link href='#'>Rewards Condition</Link>
                        </div>
                    </div>
                </div>
                {/* Social Links */}
                <div className='flex flex-col  md:justify-between text-center'>
                    <div>
                        <p>Invite Friends, Get $5</p>
                    </div>
                    <div className='flex flex-col gap-2 mt-2 md:mt-0 items-center'>
                        <Link href='#'>
                            <RiTwitterXFill className='h-6 w-6 ' />
                        </Link>
                        <Link href='#'>
                            <RiInstagramFill className='h-6 w-6 ' />
                        </Link>
                        <Link href='#'>
                            <RiFacebookCircleFill className='h-6 w-6 ' />
                        </Link>
                        <Link href='#'>
                            <RiYoutubeFill className='h-6 w-6 ' />
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='my-2' />
            <div className="flex flex-row justify-center">
                {/*Copyright  */}
                <div>
                    <p>&copy; CampusCart 2023 All Rights Reserved</p>
                </div>
            </div>
        </div>)
}