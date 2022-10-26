import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <div onClick={() => setTheme(colorTheme)}>
                {colorTheme === "light" ? <FontAwesomeIcon className='text-3xl dark:bg-slate-600 cursor-pointer' icon={faLightbulb}></FontAwesomeIcon>
                    :
                    <FontAwesomeIcon className='text-3xl cursor-pointer' icon={faMoon}></FontAwesomeIcon>
                }

            </div>
        </div>

    );
};

export default DarkIcon;