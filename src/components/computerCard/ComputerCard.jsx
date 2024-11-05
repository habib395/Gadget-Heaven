import React, { useEffect, useState } from 'react';
import Computer from '../computer/Computer';

const ComputerCard = () => {

    const [computers, setComputer] = useState([])

    useEffect(()=>{
        fetch('./computer.json')
        .then(res => res.json())
        .then(data => setComputer(data))
    }
        ,[])
    return (
        <div className='w-4/5 mx-auto'>
            <h2 className='text-3xl text-center font-semibold py-10'>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-1'>
                <h2>Habib</h2>
                </div>
            <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                computers.map(computer => <Computer computer={computer} key={computer.product_id}></Computer>
                )
            }
            </div>
            </div>
        </div>
    );
};

export default ComputerCard;