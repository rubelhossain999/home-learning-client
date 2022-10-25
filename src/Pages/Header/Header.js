import React from 'react';
import { Link } from 'react-router-dom';
import DarkIcon from './DarkIcon';

const Header = () => {

    // const handleDark = () => {
    //     setTheme(theme === "dark" ? "light": "dark");
    // };
    return (
        <div className='bg-white dark:bg-slate-600'>
            <div className="navbar lg:w-4/5 m-auto p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Mobile Menu</Link></li>
                        </ul>
                    </div>
                    {/* Logo */}
                    <Link to='/'><img src='https://i.ibb.co/TvNRSr4/Logo.png' alt='logo' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal dark:text-white text-black font-medium text-base p-0">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Courses</Link></li>
                        <li><Link to="/">Free Course</Link></li>
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">Blog</Link></li>
                    </ul>
                </div>
                <DarkIcon />
            </div>
        </div>
    );
};

export default Header;