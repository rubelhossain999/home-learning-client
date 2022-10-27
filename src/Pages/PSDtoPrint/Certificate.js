import React, { useContext, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { AuthContext } from '../../Context/UserContext';

const Certificate = () => {
    const componentRef = useRef();
    const { user } = useContext(AuthContext);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-date',
        onAfterPrint: () => alert("Print Success!")

    });


    return (
        <div>
            {user?.uid ?
                <h2 className='text-green-400 mb-2'><b>Status:</b> User Verified</h2>
                :
                <h2 className='text-red-500 mb-2'><b>Status:</b> User Unverified</h2>
            }
            <div ref={componentRef} style={{ width: '100%', height: "auto" }}>
                <div className='lg:hidden xl:hidden md:hidden sm:hidden 2xl:hidden'>
                    <div className='text-center mt-10'>
                        <b>Name:</b> {user?.displayName} <br />
                        <b>Email:</b> {user?.email}<br />
                        <b>ID:</b> {user?.uid}
                    </div>

                </div>
            </div>
            <div className='text-center lg:text-left mt-2'>
                <button onClick={handlePrint} className='btn  bg-violet-400 text-black hover:bg-slate-300'>Get Certificate</button>
            </div>
        </div>
    );
};

export default Certificate;