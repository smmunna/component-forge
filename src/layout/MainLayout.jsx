import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar'
import Footer from '../shared/Footer/Footer'

const MainLayout = () => {
    return (
        <div>
            {/* Include your Header/Navbar at the Top  */}
            <Navbar />
            <Outlet />
            <Footer/>
            {/* Include your Footer after outlet  */}
            <ScrollRestoration />
        </div>
    );
};

export default MainLayout;