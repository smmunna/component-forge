import React, { useState } from 'react';
import { TabPanel } from 'react-tabs';
import CodeEditorx from '../../../../components/CodeEditorx/CodeEditorx';
import TabsPanel from '../../../../components/TabsPanel/TabsPanel';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    const tabs = [
        { label: 'Preview' },
        { label: 'React' }
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const navLink = (
        <div className="hidden md:flex">
            <Link to="#" className="text-white ">Home</Link>
            <Link to="#" className="ml-4 text-white hover:text-gray-300">Documentation</Link>
            <div className="relative ml-4">
                <button
                    className="text-white hover:text-gray-300 focus:outline-none"
                    onClick={toggleDropdown}
                >
                    Dropdown
                </button>
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10">
                        <Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Documentation 1</Link>
                        <Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Documentation 2</Link>
                        <Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Documentation 3</Link>
                    </div>
                )}
            </div>
            <Link to="#" className="ml-4 text-white hover:text-gray-300">About</Link>
        </div>
    );

    return (
        <div className='p-5'>
            <h2 className="text-3xl font-bold mb-8 text-center">Navabr 1</h2>
            <TabsPanel tabs={tabs}>
                <TabPanel>
                    <nav className="bg-gray-800 p-4"> {/* Set a higher z-index here */}
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
                            <div id="mobile-menu" className="md:hidden fixed inset-0 bg-slate-800 bg-opacity-100 z-50"> {/* Set a higher z-index here */}
                                <div className="flex justify-end p-4">
                                    <button id="close-menu-btn" className="text-white focus:outline-none" onClick={closeMobileMenu}>
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex flex-col items-end justify-start h-full pr-12">
                                    <Link to="/" className="text-white mb-4">Home</Link>
                                    <div className="relative">
                                        <button
                                            className="text-white hover:text-gray-300 focus:outline-none"
                                            onClick={toggleDropdown}
                                        >
                                            Documentation
                                        </button>
                                        {isOpen && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10">
                                                <Link to="/documentation/1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Documentation 1</Link>
                                                <Link to="/documentation/2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Documentation 2</Link>
                                                <Link to="/documentation/3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Documentation 3</Link>
                                            </div>
                                        )}
                                    </div>
                                    <Link to="#" className="text-white hover:text-gray-300 mt-2">About</Link>
                                </div>
                            </div>
                        )}
                    </nav>
                </TabPanel>

                {/* For React */}
                <TabPanel>
                    <CodeEditorx
                        title="React"
                        code={`
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [isOpen, setIsOpen] = useState(false);

const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
};

const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
};

const toggleDropdown = () => {
    setIsOpen(!isOpen);
};

const navLink = (
<div className="hidden md:flex">
<Link to="/" className="text-white ">Home</Link>
<Link to="/documentation" className="ml-4 text-white hover:text-gray-300">Documentation</Link>
<div className="relative ml-4">
    <button
        className="text-white hover:text-gray-300 focus:outline-none"
        onClick={toggleDropdown}
    >
        Dropdown
    </button>
    {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10">
            <Link to="/documentation/1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Documentation 1</Link>
            <Link to="/documentation/2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Documentation 2</Link>
            <Link to="/documentation/3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Documentation 3</Link>
        </div>
    )}
</div>
<Link to="#" className="ml-4 text-white hover:text-gray-300">About</Link>
</div>
);

return (
<nav className="bg-gray-800 p-4"> {/* Set a higher z-index here */}
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
<div id="mobile-menu" className="md:hidden fixed inset-0 bg-slate-800 bg-opacity-100 z-50"> {/* Set a higher z-index here */}
<div className="flex justify-end p-4">
<button id="close-menu-btn" className="text-white focus:outline-none" onClick={closeMobileMenu}>
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
    </svg>
</button>
</div>
<div className="flex flex-col items-end justify-start h-full pr-12">
<Link to="/" className="text-white mb-4">Home</Link>
<div className="relative">
    <button
        className="text-white hover:text-gray-300 focus:outline-none"
        onClick={toggleDropdown}
    >
        Documentation
    </button>
    {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10">
            <Link to="/documentation/1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Documentation 1</Link>
            <Link to="/documentation/2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Documentation 2</Link>
            <Link to="/documentation/3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Documentation 3</Link>
        </div>
    )}
</div>
<Link to="#" className="text-white hover:text-gray-300 mt-2">About</Link>
</div>
</div>
)}
</nav>
);
}

export default Navbar;

                    `}
                    />
                </TabPanel>

            </TabsPanel>
        </div>
    );
};

export default Navbar2;

