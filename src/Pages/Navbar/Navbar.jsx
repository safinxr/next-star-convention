import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLink = <>
        <li className='ms-2 text-base font-medium'><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-white text-first-color" : "text-white"
            }
        >
            Home
        </NavLink></li>
        <li className='ms-2 text-base font-medium'><NavLink
            to="/aboutus"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-white text-first-color" : "text-white"
            }
        >
            About us
        </NavLink></li>
        <li className='ms-2 text-base font-medium'><NavLink
            to="/singup"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-white text-first-color" : "text-white"
            }
        >
            Sing up
        </NavLink></li>
        <li className='ms-2 text-base font-medium'><NavLink
            to="/singin"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-white text-first-color " : "text-white"
            }
        >
            Sing in
        </NavLink></li>


    </>
    return (
        <nav className='bg-gradient-to-r from-first-color to-third-color'>
            <div className="navbar max-w-7xl mx-auto px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link className='text-2xl font-bold text-white flex items-center' to='/'><img className='mr-1' src="https://i.ibb.co/qkCQNdQ/web-logo.png" alt="" /> NEXTSTAR CONVENTION</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;