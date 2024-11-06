import React from 'react';
import { TbXboxX } from "react-icons/tb";

const Cart = ({ items, setComputer}) => {
    const {product_id, product_title, product_image, category, price, description,Specification, brand } = items

    const playerRemoved = product_id => {
        const removedPlayer = items.find( player => player.product_id === product_id)
        const updatePlayer = items.filter(player => player.product_id !== product_id)
        setComputer(updatePlayer)
      }
    return (
            <div className='w-3/4 mx-auto'>  
     <div className='py-4'>
        <div key={items.product_id} className="border card card-side bg-base-100">
        <figure>
              <img className="border object-fill h-32 w-32 m-4 rounded-lg"
             src={items.product_image}
             alt="Movie" />
            </figure>
            <div className="card-body">
            <div className='flex justify-between items-center'>
            <div>
            <p className="text-xl font-bold py-2">{items.product_title}</p>
            <p className="text-base font-thin">{items.description}</p>
            <p className="text-lg font-semibold py-2">Price :${items.price}</p>
            </div>
           <button onClick={()=> playerRemoved(items.product_id)} className="btn bg-transparent">
           <TbXboxX />
           </button>
           </div>
            </div>
         </div> 
      </div>
    </div>
    );
};

export default Cart;