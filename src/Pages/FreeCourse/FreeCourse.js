import React from 'react';
import CourseCart from '../Courses/CourseCart';

const FreeCourse = () => {
    return (
        <div className='bg-slate-600'>
            <div className='mx-auto sm:max-w-xl md:max-w-full lg:w-4/5 pt-32 pb-32'>
            <h2 className="text-3xl font-bold dark:text-white pb-10 text-slate-50 text-center">Our Free Online Course</h2>
                <CourseCart></CourseCart>
            </div>
        </div>
    );
};

export default FreeCourse;