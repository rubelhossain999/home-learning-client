import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Userprofile = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const handleLogOut = () => {
        userLogOut()
            .then(() => { })
        toast.success("LogOut Success!!")
            .catch(error => console.error(error))
    }
    return (
        <>
            <div className='grid grid-cols-2 items-center justify-center px-4 invisible lg:visible'>
                <div className='px-4'>
                    {user?.uid ?
                        <div onClick={handleLogOut} className='font-bold text-base text-black dark:text-white'>
                            <Link to='/registration' className='cursor-pointer'>LogOut</Link>
                        </div>
                        :
                        <div className='font-bold text-base dark:text-white text-black'>
                            <Link className='px-4 cursor-pointer' to='/login'>Login</Link>
                            <Link to='/registration' className='cursor-pointer'>Registration</Link>
                        </div>
                    }
                </div>
                {user?.uid ?
                    <div className='w-9'>
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex flex-wrap gap-x-2 gap-y-2">
                                <div className="flex-shrink-0 relative before:z-10 before:absolute before:left-1/2 before:top-24 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:bg-violet-400 before:px-2 before:py-1.5 before:text-white before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:left-1/2 after:top-12 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:bg-violet-400 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:invisible hover:before:visible hover:after:visible" data-tip={user?.displayName ? user?.displayName : user?.email}>
                                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>

                                    {user?.photoURL ?
                                        <Link to='/profile'><img src={user?.photoURL} alt="Rubel" className="w-12 h-12 border rounded-full dark:bg-gray-500 border-slate-900" /></Link>
                                        :
                                        <Link to='/profile'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPv-L5YBJw0yQbnYEMmpbtNvaEl7n8zAckJ4X1rVm7bOrTgg9KxtVhwh4zyUiZ7QR0rPk&usqp=CAU' alt="Rubel" className="w-12 h-12 border rounded-full dark:bg-gray-500 border-slate-900" /></Link>
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    ''
                }
            </div >
        </>
    );
};

export default Userprofile;