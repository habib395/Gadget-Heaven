import React from 'react';

const Cart = ({ }) => {
    return (
        <div>
            <div>  
        <div className='container mx-auto'>
    <div>
      <div className='flex justify-between py-4'>
        <h2 className='font-bold text-xl'>sujon</h2>
      </div>
    </div>
      <div className="container mx-auto grid grid-cols-1 gap-4">
        {
            player.map(item => (
                <div key={item.product_id} className="border card card-side bg-base-100">
            <figure>
              <img className="border object-fill h-32 w-32 m-4 rounded-lg"
             src={item.image}
             alt="Movie" />
            </figure>
            <div className="card-body">
            <div className='flex justify-between items-center'>
            <div>
            <p className="text-xl font-bold">{item.product_title}</p>
            </div>
           <button onClick={()=> playerRemoved(item.product_id)} className="btn bg-transparent">
           <i className="fa-solid fa-trash"></i>
           </button>
           
           </div>
            </div>
         </div>
          ))
        }

      </div>
      
        <div className='flex font-bold text-xl  px-4 py-6  my-6'>           
        <button onClick={()=>handleIsActiveStatus("Available")} className= {`${isActive.cart? " btn bg-[#E7FE29]": " btn bg-[#E7FE29]"}`}>Add More Player</button>
        </div>
    </div>
            </div>
        </div>
    );
};

export default Cart;