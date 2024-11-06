import React, { useEffect, useState } from 'react';
import { getAllFavorites } from '../utils';
import Cart from './Cart';


const Dashboard = () => {

    const [computer, setComputer] = useState([])

    useEffect(() => {
        const favorites = getAllFavorites()
        setComputer(favorites)
    }, [])

    // no-1
    const [isActive, setIsActive] = useState({
        cart : true,
        status : "Available"
      }
      )
    const handleIsActiveStatus = (status) =>{
        if(status == "Available"){
          setIsActive({
            cart : true,
            status : "Available"
          })}
           else{
            setIsActive({
              cart:false,
              status :"selected"
            })
          }     
      }

      
    return (
        <div>
            <div>
            <div className='bg-[#9538E2] py-10 text-center'>
            <div className='w-full mx-auto'>
            <div className='flex flex-col w-full justify-center items-center text-white'>
            <h2 className='text-xl w-full mx-auto md:text-2xl lg:text-5xl font-semibold mb-4'>Dashboard</h2>
            </div>
            <p className='text-sm md:text-base w-1/2 mx-auto text-center font-thin text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='flex gap-10 items-center justify-center mt-4'>
            <button onClick={()=>handleIsActiveStatus("Available")} className= {`${isActive.cart? " btn active px-10  rounded-full text-base text-[#9538E2]": " btn btn-outline"}`}> Cart </button>
            <button onClick={()=>handleIsActiveStatus("Selected")} className= {`${isActive.cart? " btn btn-outline": " btn active px-10 bg-white rounded-full font-bold text-[#9538E2]"}`}>Wishlist</button>
            </div>
        </div>
        <div className='grid grid-cols-1'>
        {
            computer.map(items =><Cart key={items.product_id} items={items} setComputer={setComputer}></Cart>
            )
        }
        </div>
            </div>
        </div>
    );
};

export default Dashboard;

// {isActive.cart?<Available isActive={isActive} players={players} addPlayerSelected={addPlayerSelected} handleIsActiveStatus={handleIsActiveStatus} selectPlayers={selectPlayers}></Available>:<Selected selectPlayers={selectPlayers} playerRemoved={playerRemoved} isActive={isActive} handleIsActiveStatus={handleIsActiveStatus}