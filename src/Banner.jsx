import React from 'react';

const Banner = () => {
    return (
        <div className='p-2 mx-auto pt-4 w-2/3 relative py-60'>
            <div className='hero mx-auto rounded-lg absolute'>
           <div className='bg-transparent rounded-lg'>
           <img className="w-full border-2 rounded-lg p-2 h-full object-cover" src="./assets/banner.jpg" alt="" />
           </div>
            </div>
        </div>
    );
};

export default Banner;