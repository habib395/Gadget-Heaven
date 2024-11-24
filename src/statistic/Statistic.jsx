import React from 'react';
import Chart from '../LineCha/Chart';
import { Helmet } from 'react-helmet';

const Statistic = () => {
    return (
        <div>
            <Helmet>
            <title>Statistic | Gadget Heaven</title>
        </Helmet>
             <div className='bg-[#9538E2] py-10 text-center'>
            <div className='w-full mx-auto'>
            <div className='flex flex-col w-full justify-center items-center text-white'>
            <h2 className='text-xl w-full mx-auto md:text-2xl lg:text-5xl font-semibold mb-4'>Statistics</h2>
            </div>
            <p className='text-sm md:text-base w-1/2 mx-auto text-center font-thin text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
        </div>
        <div className='w-5/6 mx-auto mt-10'>
            <div className='flex flex-col w-full'>
            <h2 className='text-xl w-full mx-auto md:text-2xl lg:text-3xl font-semibold mb-4'>Statistics</h2>
            <Chart></Chart>
            </div>
            </div>
        <div>

        </div>
        </div>


    );
};

export default Statistic;