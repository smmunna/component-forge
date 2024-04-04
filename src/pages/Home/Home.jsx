import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen max-w-[1200px] mx-auto mt-20">
            {/* Header */}

            {/* Hero section */}
            <section className="py-16 bg-blue-500 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="text-5xl font-bold mb-6">Build Stunning Components</h2>
                        <p className="text-lg mb-8">Create beautiful UIs with ease using our comprehensive library of Tailwind CSS components.</p>
                        <Link to="/documentation" className="inline-block bg-white text-blue-500 font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-blue-400 hover:text-white transition duration-300">Explore Components</Link>
                    </div>
                </div>
            </section>


            {/* Features section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
                            <p className="text-gray-700">Our components are designed to be fully responsive, ensuring a consistent experience across all devices.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Easy Customization</h3>
                            <p className="text-gray-700">Tailwind CSS makes it easy to customize the appearance of components to match your brand's style.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Fast Development</h3>
                            <p className="text-gray-700">Save time by using our pre-built components and focus on building great user experiences.</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
