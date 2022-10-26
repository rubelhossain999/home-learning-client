import React from 'react';

const Banner = () => {
    return (
        <div className="relative">
            <img
                src="https://i.ibb.co/23YFx3s/Untitled-design-3.jpg"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-50">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-full lg:mt-16 mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h1 className="mb-5 text-5xl lg:text-8xl font-bold text-white">HOME</h1>
                            <h1 className="mb-5 text-5xl lg:text-8xl font-bold text-white">LEARNING RH</h1>
                            <p className="max-w-xl mb-4 text-base lg:text-2xl text-white md:text-lg">
                                Learn for free from the comfort of your own <br />
                                Home whilst receiving unlimited tutor support online.
                            </p>
                            <button className='btn font-semibold lg:mb-20 text-sm text-white'>START A FREE COURSE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;