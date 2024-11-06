import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className='w-full mx-auto'>
            <div className='flex flex-col w-full justify-center items-center text-white'>
            <h2 className='text-xl w-full mx-auto md:text-2xl lg:text-5xl font-semibold mb-4'>{title}</h2>
            </div>
            <p className='text-sm md:text-base w-1/2 mx-auto text-center font-thin text-white'>{subtitle}</p>
            <button className='btn rounded-full my-4 text-[#9538E2] font-bold text-base'>Shop Now</button>
        </div>
    );
};

export default Heading; 