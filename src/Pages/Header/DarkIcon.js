import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import Dark from './Dark';


const DarkIcon = () => {
    const { user, userLogOut } = useContext(AuthContext);


    const handleLogOut = () =>{
        userLogOut()
        .then(() => {})
        .catch(error => console.error(error))
    }

    const [colorTheme, setTheme] = Dark();
    return (
        <div className="navbar-end">
            <div className='grid grid-cols-2 items-center justify-center px-4 invisible lg:visible'>
                <div className='px-4'>
                    {user?.uid ?
                        <div onClick={handleLogOut} className='font-bold text-base text-black dark:text-white'>
                            <Link to='/registration'>LogOut</Link>
                        </div>
                        :
                        <div className='font-bold text-base dark:text-white text-black'>
                            <Link className='px-4' to='/login'>Login</Link>
                            <Link to='/registration'>Registration</Link>
                        </div>
                    }


                </div>
                {user?.uid ?
                    <div className='w-9'>
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex flex-wrap gap-x-2 gap-y-2">
                                <div className="relative flex-shrink-0">
                                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                                    <Link to='/profile'><img src="https://i.ibb.co/K26C1bK/rubel.jpg" alt="Rubel" className="w-12 h-12 border rounded-full dark:bg-gray-500 border-slate-900" /></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    :
                    ''
                }
            </div >
            <div onClick={() => setTheme(colorTheme)}>
                {colorTheme === "light" ? <FontAwesomeIcon className='text-3xl text-white dark:bg-slate-600 cursor-pointer' icon={faLightbulb}></FontAwesomeIcon>
                    :
                    <FontAwesomeIcon className='text-3xl text-black cursor-pointer' icon={faMoon}></FontAwesomeIcon>
                }

            </div>
        </div >

    );
};

export default DarkIcon;