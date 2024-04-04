import React, { useState } from 'react';
import { TabPanel } from 'react-tabs';
import CodeEditorx from '../../../../components/CodeEditorx/CodeEditorx';
import TabsPanel from '../../../../components/TabsPanel/TabsPanel';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    const tabs = [
        { label: 'Preview' },
        { label: 'HTML' },
        { label: 'JS' },
        { label: 'React' }
    ];

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

                </TabPanel>
                <TabPanel>
                    <CodeEditorx
                        title="Table HTML"
                        code={`
<nav class="bg-gray-800 p-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center">
            <a href="#" class="text-white font-semibold text-lg">Home</a>
            <a href="#" class="ml-4 text-white hover:text-gray-300">Documentation</a>
            <a href="#" class="ml-4 text-white hover:text-gray-300">About</a>
        </div>
        <div class="md:hidden">
            {/* <!-- Hamburger menu button for mobile --> */}
            <button id="mobile-menu-btn" class="text-white focus:outline-none">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path id="menu-icon" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </div>
    {/* <!-- Mobile menu modal --> */}
    <div id="mobile-menu" class="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 hidden">
        <div class="flex justify-end p-4">
            <button id="close-menu-btn" class="text-white focus:outline-none">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        <div class="flex flex-col items-center justify-center h-full">
            <a href="#" class="text-white font-semibold text-lg mb-4">Home</a>
            <a href="#" class="text-white hover:text-gray-300">Documentation</a>
            <a href="#" class="text-white hover:text-gray-300 mt-2">About</a>
        </div>
    </div>
</nav>
            `}
                    />
                </TabPanel>
                <TabPanel>
                    <CodeEditorx
                        title="JS"
                        code={`
<script>
document.addEventListener('DOMContentLoaded', function () {
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');

mobileMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
    // Toggle hamburger menu icon
    const menuIcon = document.getElementById('menu-icon');
    menuIcon.classList.toggle('hidden');
});

closeMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.add('hidden');
    // Show hamburger menu icon
    const menuIcon = document.getElementById('menu-icon');
    menuIcon.classList.remove('hidden');
});
});
</script>

            `}
                    />
                </TabPanel>

                {/* For React */}
                <TabPanel>
                    <CodeEditorx
                        title="React"
                        code={`
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
<nav className="bg-gray-800 p-4"> {/* Fixed at top add these: fixed top-0 w-full z-50 */}
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

                    `}
                    />
                </TabPanel>

            </TabsPanel>
        </div>
    );
};

export default Navbar1;

