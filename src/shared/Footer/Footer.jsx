import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Us */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-white text-lg font-semibold mb-2">About Component Forge</h2>
                        <p className="text-gray-300">With Component Forge, you can easily generate high-quality UI components such as inputs, buttons, forms, login forms, registration forms, and more. Our user-friendly interface and extensive customization options make it simple to tailor components to your specific project requirements.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-2">Quick Links</h2>
                        <ul>
                            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                        </ul>
                    </div>
                    {/* Contact Us */}
                    <div>
                        <h2 className="text-white text-lg font-semibold mb-2">Contact Us</h2>
                        <p className="text-gray-300">Email: info@techzaint.com</p>
                        <p className="text-gray-300">Phone: +123456789</p>
                    </div>
                </div>
            </div>
            {/* Bottom Footer Section */}
            <div className="mt-8 border-t border-gray-700 max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-300 text-center md:text-left">&copy; {new Date().getFullYear()} Tech Zaint. All rights reserved.</p>
                <div className="mt-4 md:mt-0">
                    <a href="#" className="text-gray-300 hover:text-white mr-4">Privacy Policy</a>
                    <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
