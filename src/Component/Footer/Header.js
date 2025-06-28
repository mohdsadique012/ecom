// Header.tsx
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';

const Header = () => {
    return (
        <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-md w-full z-10">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo Name */}
                <div className="text-xl font-bold text-red-800">
                    <a href="/">SKYMATES </a> {/* Replace with your brand name */}
                </div>

                {/* Search Bar */}
                <div className="flex items-center w-1/2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <button className="ml-2 p-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition duration-300">
                        <AiOutlineSearch />
                    </button>
                </div>

                {/* Icons for Signup and Cart */}
                <div className="flex items-center space-x-6 max-md:hidden">
                    <a href="/#" className="text-gray-800 hover:text-pink-500 transition duration-300">
                        <AiOutlineUser size={24} />
                    </a>
                    <a href="/#" className="text-gray-800 hover:text-pink-500 transition duration-300">
                        <FiShoppingCart size={24} />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
