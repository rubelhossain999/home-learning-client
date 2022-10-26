import React from 'react';

const Blog = () => {
    return (
        <div className='bg-slate-600 dark:bg-gray-800'>
            <section className="dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-white mt-16">Questions Answered</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-white">Questions About The Course</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32 mb-16">
                        <div>
                            <h3 className="font-extrabold text-white">Lorem ipsum dolor sit amet.</h3>
                            <p className="mt-1 text-white dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                        </div>
                        <div>
                            <h3 className="font-extrabold text-white">Lorem ipsum dolor sit amet.</h3>
                            <p className="mt-1 text-white dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                        </div>
                        <div>
                            <h3 className="font-extrabold text-white">Lorem ipsum dolor sit amet.</h3>
                            <p className="mt-1 text-white dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                        </div>
                        <div>
                            <h3 className="font-extrabold text-white">Lorem ipsum dolor sit amet.</h3>
                            <p className="mt-1 text-white dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;