import React from 'react';
import { Link } from 'react-router-dom';
import CourseCart from './CourseCart';

const CourseSideBar = () => {
    return (
        <div className='grid grid-rows-5 grid-flow-col gap-4 mx-auto sm:max-w-xl md:max-w-full lg:w-4/5'>
            <div className='row-span-1'>
                <h1>Sidebar</h1>
                <h1>Sidebar</h1>
                <h1>Sidebar</h1>
                <h1>Sidebar</h1>
                <h1>Sidebar</h1>
                <h1>Sidebar</h1>
                <h1>Sidebar</h1>
                <h1>Sidebar</h1>
            </div>
            <div className='col-span-4'>
                <CourseCart></CourseCart>
            </div>
        </div>
    );
};

export default CourseSideBar;