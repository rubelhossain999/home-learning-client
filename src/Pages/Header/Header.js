import React from 'react';
import { Link } from 'react-router-dom';
import DarkIcon from './DarkIcon';
import MobileMenu from './MobileMenu';

const Header = () => {
    return (
        <div className='bg-white dark:bg-slate-600 sticky top-0 z-40'>
            <div className="navbar lg:w-4/5 m-auto p-5">
                <div className="navbar-start">
                    <MobileMenu></MobileMenu>
                    {/* Logo */}
                    <Link to='/'><img src='https://i.ibb.co/TvNRSr4/Logo.png' alt='logo' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal dark:text-white text-black font-medium text-base p-0">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/">Free Course</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <DarkIcon />
            </div>
        </div>
    );
};

export default Header;