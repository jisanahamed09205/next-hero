'use client'

import Link from 'next/link';
import {usePathname, useRouter} from "next/navigation";
import React from 'react';

const Navbar = () => {

    const router = useRouter();
    const pathName = usePathname();

    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Blogs',
            path: '/blogs'
        },
        {
            title: 'Service',
            path: '/service'
        },
        {
            title: 'Contact',
            path: '/contact'
        }
    ]

    const handler = () =>{
        router.push('/login')
    };

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-lg font-bold">
                    Next Hero
                </div>
                
                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6 text-white">
                    {
                        links?.map((link)=><li key={link.path} className={`${pathName === link.path && "text-gray-300"} hover:text-gray-300 cursor-pointer`}><Link href={link.path}>{link.title}</Link></li>)
                    }
                    {/* <li className="hover:text-gray-300 cursor-pointer"><Link href={'/'}>Home</Link></li>
                    <li className="hover:text-gray-300 cursor-pointer"><Link href={'/about'}>About</Link></li>
                    <li className="hover:text-gray-300 cursor-pointer"><Link href={'/service'}>Service</Link></li>
                    <li className="hover:text-gray-300 cursor-pointer"><Link href={'/contact'}>Contact</Link></li> */}
                </ul>
                <button onClick={handler} className="bg-white p-1 px-2 rounded-2xl font-bold">Login</button>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-white">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;