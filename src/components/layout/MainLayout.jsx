import React from 'react';
import Navbar from './../Navbar';
import Footer from './../Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* dynamic section */}
            <Outlet></Outlet>
            {/* <div className='min-h-[calc(100vh-232px)]'></div> */}
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;