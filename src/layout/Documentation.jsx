import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { Link, Outlet } from 'react-router-dom';

const Documentation = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button absolute top-5 right-4 lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className=" p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {/* Dashboard links */}
                    <li className="px-4 py-3 border-b border-gray-300">
                        <Link to="/documentation" className="block font-semibold hover:text-blue-600">Dashboard</Link>
                    </li>
                    {/* Users box */}
                    <div className="collapse border-b border-gray-300 dropdwndetails">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title">
                            <p className="flex justify-between"><span className="flex items-center gap-2 font-semibold">Forms</span> <FaAngleDown /></p>
                        </div>
                        <div className="collapse-content ml-6">
                            <ul className="space-y-3 ullist">
                                <li className="mb-2"><Link to="/documentation/forms">Input</Link></li>
                            </ul>
                        </div>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default Documentation;
