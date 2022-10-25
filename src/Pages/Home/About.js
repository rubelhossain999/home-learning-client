import React from 'react';

const About = () => {
    return (
        <div className='dark:bg-slate-600'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:w-4/5 bg-white dark:bg-slate-600  md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Learn at home, you can
                                <br className="hidden md:block" />
                                learn with{' '}
                                <span className="relative px-1">
                                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                                    <span className="relative inline-block text-deep-purple-accent-400">
                                        attention.
                                    </span>
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 dark:text-white md:text-lg">
                                Learning RH is always with you whenever you need it. You can see your desired teacher and subject within the phone. You can study anytime you need, thus improving your education life. Learning RH is always by your side.
                            </p>
                        </div>
                        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        Free Online Course
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        You can easily learn free from our website without any exchange of money. Free course unfortunately can't communicate directly with any teacher, for that you have to be a premium member.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        Premium Online Course
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        Premium online courses are available on our website. Using which you can easily do any class at home anytime. You can talk directly to the teacher if necessary.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src="https://i.ibb.co/CBdHjCT/class-1.jpg" alt="study"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;