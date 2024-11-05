import React from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <NavLink to='/'>Gadget Heaven</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/statistic'>Statistic</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            <li><NavLink to='/feedback'>Feedback</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <div className='border rounded-full p-3'> 
        <HiOutlineShoppingCart />
          </div>
          <div className='border rounded-full p-3'> 
        <FaHeart />
          </div>
        </div>
      </div>
    );
};

export default Navbar;