import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const CourseCart = () => {
    const { name } = useContext(AuthContext);
    console.log(name);


    return (
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col bg-slate-500 shadow rounded dark:bg-gray-900">
                <a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co/4KWF39x/Physics-0.jpg" />
                </a>
                <div className="flex flex-col flex-1 p-6">
                    <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                    <a rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline text-white dark:text-violet-400">Convenire</a>
                    <h3 className="flex-1 py-2 text-white text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                    <div className="flex mb-2 flex-wrap text-white justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <button className='btn dark:bg-slate-300 dark:text-black hover:bg-slate-700'> Buy Now</button>
                        <h4 className='text-3xl'>$ 45</h4>
                    </div>
                    <div className="border-t flex flex-wrap text-white justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <span>Teacher: Rubel R.H</span>
                        <span>Class: 54</span>
                    </div>
                </div>
            </article>
            <article className="flex flex-col bg-slate-500 shadow rounded dark:bg-gray-900">
                <a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co/4KWF39x/Physics-0.jpg" />
                </a>
                <div className="flex flex-col flex-1 p-6">
                    <Link rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                    <a rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline text-white dark:text-violet-400">Convenire</a>
                    <h3 className="flex-1 py-2 text-white text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                    <div className="flex mb-2 flex-wrap text-white justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <button className='btn dark:bg-slate-300 dark:text-black hover:bg-slate-700'> Buy Now</button>
                        <h4 className='text-3xl'>$ 45</h4>
                    </div>
                    <div className="border-t flex flex-wrap text-white justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <span>Teacher: Rubel R.H</span>
                        <span>Class: 54</span>
                    </div>
                </div>
            </article>
            <article className="flex flex-col bg-slate-500 shadow rounded dark:bg-gray-900">
                <a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co/4KWF39x/Physics-0.jpg" />
                </a>
                <div className="flex flex-col flex-1 p-6">
                    <a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum"></a>
                    <a rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline text-white dark:text-violet-400">Convenire</a>
                    <h3 className="flex-1 py-2 text-white text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                    <div className="flex mb-2 flex-wrap text-white justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <button className='btn dark:bg-slate-300 dark:text-black hover:bg-slate-700'> Buy Now</button>
                        <h4 className='text-3xl'>$ 45</h4>
                    </div>
                    <div className="border-t flex flex-wrap text-white justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <span>Teacher: Rubel R.H</span>
                        <span>Class: 54</span>
                    </div>
                </div>
            </article>
            <article className="flex flex-col bg-slate-500 shadow rounded dark:bg-gray-900">
                <a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co/4KWF39x/Physics-0.jpg" />
                </a>
                <div className="flex flex-col flex-1 p-6">
                    <a rel="noopener noreferrer" href="/" className="text-xs tracking-wider uppercase hover:underline text-white dark:text-violet-400">Convenire</a>
                    <h3 className="flex-1 py-2 text-white text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                    <div className="flex mb-2 flex-wrap text-white justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <button className='btn dark:bg-slate-300 dark:text-black hover:bg-slate-700'> Buy Now</button>
                        <h4 className='text-3xl'>$ 45</h4>
                    </div>
                    <div className="border-t flex flex-wrap text-white justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <span>Teacher: Rubel R.H</span>
                        <span>Class: 54</span>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default CourseCart;