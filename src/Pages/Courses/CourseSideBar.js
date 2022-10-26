import React from 'react';
import { Link } from 'react-router-dom';
import PSDtoPrint from '../PSDtoPrint/PSDtoPrint';
import CourseCart from './CourseCart';

const CourseSideBar = () => {
    return (
        <section className="dark:bg-gray-800 bg-gray-600 dark:text-gray-100">
            <div className="container flex flex-col lg:p-12 mx-auto lg:flex-row">
                <div className="rounded-xl w-full lg:w-1/5 md:p-8 lg:p-12 text-black font-semibold text-xl bg-slate-300">
                    <h2 className='text-xl font-extrabold bg-slate-600 text-white p-2 rounded-lg '>Our All Courses</h2>
                    <nav className='mt-5'>
                        <li><Link to='/'>Physics</Link></li>
                        <li><Link to='/'>Math</Link></li>
                        <li><Link to='/'>English</Link></li>
                        <li><Link to='/'>Bangla</Link></li>
                        <li><Link to='/'>Chemistry </Link></li>
                        <li><Link to='/'>Computer</Link></li>
                    </nav>
                    <div className='text-center'>
                        <PSDtoPrint></PSDtoPrint>
                    </div>
                </div>
                <div className="lg:w-4/5 md:p-8 lg:p-12">
                    <CourseCart></CourseCart>
                </div>
            </div>
        </section>
    );
};

export default CourseSideBar;