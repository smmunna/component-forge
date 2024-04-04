import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navLink = (
        <div className="hidden md:flex">
            <Link to="/" className="text-white ">Home</Link>
            <Link to="/documentation" className="ml-4 text-white hover:text-gray-300">Documentation</Link>
            <Link to="#" className="ml-4 text-white hover:text-gray-300">About</Link>
        </div>
    );

    return (
        <nav className="bg-gray-800 p-4 fixed top-0 w-full z-50"> {/* Set a higher z-index here */}
            <div className="max-w-7xl mx-auto flex justify-between items-center relative"> {/* Set relative positioning */}
                {/* Brand name */}
                <Link to="/" className="text-white text-2xl font-semibold">Component Forge</Link>

                <div className="md:hidden">
                    {/* Hamburger menu button for mobile */}
                    <button id="mobile-menu-btn" className="text-white focus:outline-none" onClick={toggleMobileMenu}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path id="menu-icon" strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                {navLink}
            </div>
            {/* Mobile menu modal */}
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-80 z-50"> {/* Set a higher z-index here */}
                    <div className="flex justify-end p-4">
                        <button id="close-menu-btn" className="text-white focus:outline-none" onClick={closeMobileMenu}>
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full">
                        <Link to="/" className="text-white   mb-4">Home</Link>
                        <Link to="/documentation" className="text-white hover:text-gray-300">Documentation</Link>
                        <Link to="#" className="text-white hover:text-gray-300 mt-2">About</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
