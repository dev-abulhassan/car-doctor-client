import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

const NavBar = () => {
   const navItem = <>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/'}>About</Link></li>
      <li><Link to={'/'}>Services</Link></li>
      <li><Link to={'/'}>Blog</Link></li>
      <li><Link to={'/'}>Contact</Link></li>

   </>
   return (
      <div className="navbar bg-base-100 my-5">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {navItem}
               </ul>

            </div>
            <Link to={'/'}>
               <img src={logo} alt="" />
            </Link>
         </div>


         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {navItem}
            </ul>
         </div>

         <div className="navbar-end">
            <Link to={'/'} class="relative inline-flex items-center justify-start  border-2 border-[#FF3811]  px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
               <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#FF3811] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
               <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Appointment</span>
            </Link>
         </div>
      </div>
   );
};

export default NavBar;