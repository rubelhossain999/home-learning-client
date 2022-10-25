import React from 'react';
import { Link } from 'react-router-dom';
import Courses from '../Courses/Courses';
import About from './About';
import Banner from './Banner';

const Home = () => {
    return (
        <>
            <Banner />
            <div className='dark:bg-slate-600'>
                <div>
                    <div>
                        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                            <div className="container p-6 mx-auto space-y-8">
                                <div className="space-y-2 text-center">
                                    <h2 className="text-3xl font-bold text-black dark:text-white">Our Premium Online Course</h2>
                                    <p className="font-serif text-sm dark:text-gray-400">Select the course you want to view the course details, then purchase.</p>
                                </div>
                                <Courses></Courses>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <About />
        </>
    );
};

export default Home;