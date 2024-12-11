import React, { useEffect } from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';
import '../App.css'
 
const Navbar = () => {
  const location = useLocation()
  useEffect(() =>{
    // console.log(location.pathname)
  },[location])
    return (
      <div>
        <div className={`${location.pathname === '/'? 'sm:navbar w-11/12 mx-auto active mt-3 px-10': 'navbar bg-base-100 w-11/12 mx-auto'}`}>
        <div className="navbar-start">
          <NavLink className={`${location.pathname === '/'? 'active': ''}`} to='/'>Gadget Heaven</NavLink>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu sm:menu-horizontal px-1">
            <li><NavLink className={`${location.pathname === '/'? 'active': ''}`} to='/'>Home</NavLink></li>
            <li><NavLink className="ml-3" to='/statistic'>Statistic</NavLink></li>
            <li><NavLink className="ml-3" to='/dashboard'>Dashboard</NavLink></li>
            <li><NavLink className="ml-3" to='/feedback'>Feedback</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <div className='border rounded-full p-3 bg-white text-black'> 
        <HiOutlineShoppingCart />
          </div>
          <div className='border rounded-full p-3 bg-white text-black'> 
        <FaHeart />
          </div>
        </div>
      </div>





      {/* <div className="p-2 mx-auto pt-4 w-2/3 relative py-60">
      <div className='hero mx-auto rounded-lg absolute'>
           <div className='bg-transparent rounded-lg'>
           <img className="w-full border-2 rounded-lg p-2 h-full object-cover" src="./assets/banner.jpg" alt="" />
           </div>
            </div>
      </div> */}
      </div>
      
    );
};

export default Navbar;