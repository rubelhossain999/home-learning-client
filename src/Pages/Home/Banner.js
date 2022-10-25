import React from 'react';

const Banner = () => {
    return (
        <>
            <div className='mx-auto sm:max-w-xl md:max-w-full lg:w-4/5'>
                <div className='absolute lg:mt-16 lg:mb-16 p-5'>
                    <h2 className='lg:font-semibold lg:text-3xl text-white'>WELCOME TO THE HOME OF</h2>
                    <h1 className='lg:font-bold lg:text-9xl text-white'>HOME</h1>
                    <h1 className='lg:font-bold lg:text-9xl  text-white'>LEARNING RH</h1>
                    <p className='lg:text-lg text-white font-medium mt-5'>Learn for free from the comfort of your own <br />
                        Home whilst receiving unlimited tutor support online.
                    </p>
                    <button className='btn font-semibold mt-5 text-sm text-white'>START A FREE COURSE</button>
                </div>
            </div>
            <div cl>
                <img src='https://i.ibb.co/23YFx3s/Untitled-design-3.jpg' alt='banner' />
            </div>
        </>
    );
};

export default Banner;