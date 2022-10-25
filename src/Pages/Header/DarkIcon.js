import React from 'react';
import { Link } from 'react-router-dom';
import Dark from './Dark';


const DarkIcon = () => {
    const [colorTheme, setTheme] = Dark();
    return (
        <div className="navbar-end">
            <div className='flex px-4 md:hidden sm:hidden'>
                <div className='px-4'>
                    <Link className='px-4' to='/login'>Login</Link>
                    <Link to='/login'>Registration</Link>
                </div>
                <div>
                    Profile
                </div>
            </div>
            <div onClick={ () => setTheme(colorTheme)} className='dark:bg-black'>
                {colorTheme === "light" ? <Link className='bg-slate-400 dark:bg-slate-300 dark:text-slate-900 text-black font-bold p-2 rounded-md'>Light</Link>
                :
                <Link className='bg-black dark:bg-slate-500 dark:text-slate-100 font-bold p-2 rounded-md'>Dark</Link>
                }

            </div>
        </div>

    );
};

export default DarkIcon;