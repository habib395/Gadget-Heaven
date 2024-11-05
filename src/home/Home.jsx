import React from 'react';
import Banner from '../Banner';
import Heading from '../Heading';

const Home = () => {
    return (
        <div className='bg-[#9538E2] py-20 mb-52 rounded-lg w-11/12 mx-auto text-center'>
            {/* heading */}
            <Heading title='Upgrade Your Tech Accessorize with Gadget Heaven Accessories' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Heading>
            {/* banner */}
            <Banner></Banner>
        </div>
        
    );
};

export default Home;