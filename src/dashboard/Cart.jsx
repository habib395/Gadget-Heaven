import React, { useEffect, useState } from 'react';
import { BiCurrentLocation } from "react-icons/bi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { getAllFavorites } from '../utils';
import { useNavigate } from 'react-router-dom';
import payment from '../../assets/Group.png'

const Cart = ({computer, handleRemoved}) => {

  const [common, setCommon] = useState([])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
      const favorites = getAllFavorites()
      setCommon(favorites)
  }, [])


    const handleSort = (sortBy) =>{
      const sorted = [...common].sort((a, b) => b.price - a.price)
      setCommon(sorted)
    }

    const handlePurchase = () =>{
      setIsModalOpen(true)
    }

    const handleModalClose = () =>{
      localStorage.clear()
      setCommon([])
      setIsModalOpen(false)
      navigate('/')
    }

    const totalPrice = common.reduce((total, player) => total + player.price, 0)




    return (
        <div>
            <div className='w-5/6 mx-auto'>
                <div className='sm:flex justify-between items-center py-10'>
                <div><h2 className="text-2xl font-semibold">Cart</h2></div>
                   <div className='flex gap-3 items-center'>
                    <h2 className='btn btn-outline rounded-full'>Total Cost : ${totalPrice}</h2>
                    <button onClick={() => handleSort('price')} className='btn bg-transparent btn-outline  rounded-full text-base text-[#9538E2]'>Sort By Price<BiCurrentLocation /></button>
                    <button onClick={handlePurchase} disabled={totalPrice === 0} className={`btn ${totalPrice === 0 ? "btn-disabled" : "btn active bg-[#9538E2] rounded-full font-bold text-white"}`}>Purchase</button>
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

   {isModalOpen && (
    <div className='modal modal-open'>
      <div className='modal-box text-center'>
        <div className='inline-block'>
        <img src={payment} alt="" />
        </div>
        <h3 className='font-bold text-lg'>Payment Successfully!</h3>
        <p className='py-4'>
          Thank you for purchasing. <br />
          Total :  {totalPrice}
        </p>
        <div className='modal-action justify-center'>
          <button className='btn btn-primary' onClick={handleModalClose}>
          Close
          </button>

        </div>

      </div>

    </div>
   )}
</div>
    );
};

export default Cart;
