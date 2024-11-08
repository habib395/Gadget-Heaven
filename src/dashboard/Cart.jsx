import React from 'react';
import { BiCurrentLocation } from "react-icons/bi";
const Cart = () => {

    return (
        <div>
            <div className='w-5/6 mx-auto'>
                <div className='flex justify-between items-center py-10'>
                <div><h2>Cart</h2></div>
                   <div className='flex gap-3 items-center'>
                    <h2>Total Cost: </h2>
                    <button className='btn bg-transparent btn-outline  rounded-full text-base text-[#9538E2]'>Sort By Price<BiCurrentLocation /></button>
                    <button className='btn active bg-[#9538E2] rounded-full font-bold text-white'>Purchase</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
