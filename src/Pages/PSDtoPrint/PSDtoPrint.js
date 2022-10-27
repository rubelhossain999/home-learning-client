import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Data from './Data';

const PSDtoPrint = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-date',
        onAfterPrint: () => alert("Print Success!")

    });


    return (
        <div className='mt-10'>
            <div ref={componentRef} style={{ width: '100%', height: "auto" }}>
                <div className='lg:hidden xl:hidden md:hidden sm:hidden 2xl:hidden'>
                    <Data></Data>
                </div>
            </div>
            <button onClick={handlePrint} className='btn mt-12 text-white bg-red-400 border-none'>PDF Prit Here</button>
        </div>
    );
};

export default PSDtoPrint;