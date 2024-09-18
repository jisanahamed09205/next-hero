'use client'

import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-lg font-bold">
                    Logo
                </div>
                
                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6 text-white">
                    <li className="hover:text-gray-300 cursor-pointer">Home</li>
                    <li className="hover:text-gray-300 cursor-pointer">About</li>
                    <li className="hover:text-gray-300 cursor-pointer">Services</li>
                    <li className="hover:text-gray-300 cursor-pointer">Contact</li>
                </ul>

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