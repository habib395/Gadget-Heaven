import React, { useEffect, useState } from 'react';
import { BiCurrentLocation } from "react-icons/bi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { useLoaderData } from 'react-router-dom';
import { getAllFavorites } from '../utils';

const Cart = ({computer, handleRemoved}) => {

  const [common, setCommon] = useState([])

  useEffect(() => {
      const favorites = getAllFavorites()
      setCommon(favorites)
  }, [])


    // const {birds, setBirds} = useState(computer)
    const handleSort = (sortBy) =>{
      const sorted = [...common].sort((a, b) => b.price - a.price)
      setCommon(sorted)
    }
    return (
        <div>
            <div className='w-5/6 mx-auto'>
                <div className='flex justify-between items-center py-10'>
                <div><h2 className="text-2xl font-semibold">Cart</h2></div>
                   <div className='flex gap-3 items-center'>
                    <h2>Total Cost: </h2>
                    <button onClick={() => handleSort('price')} className='btn bg-transparent btn-outline  rounded-full text-base text-[#9538E2]'>Sort By Price<BiCurrentLocation /></button>
                    <button className='btn active bg-[#9538E2] rounded-full font-bold text-white'>Purchase</button>
                   </div>
                </div>
                <div>
                <div className="container mx-auto grid grid-cols-1 gap-4">
        {
          common.map(player => (
         <div key={player.product_id} className="border card card-side bg-base-100">
            <figure>
              <img className="border object-fill h-32 w-32 m-4 rounded-lg"
             src={player.product_image}
             alt="Movie" />
            </figure>
            <div className="card-body">
            <div className='flex justify-between items-center'>
            <div>
            <p className="text-xl font-bold">{player.product_title}</p>
            <p>{player.description}</p>
            <p className="font-bold">
              Price : ${player.price}
            </p>
            <button className="btn rounded-full px-4 bg-[#9538E2] my-2 ">Add To Card</button>
            </div>
           <button onClick={() =>handleRemoved(player.product_id)} className="btn text-xl border-hidden bg-transparent">
           <FontAwesomeIcon icon={faCircleXmark} />
           </button>           
           </div>
            </div>
         </div>
          ))
        }
      </div>
     </div>
   </div>
</div>
    );
};

export default Cart;
