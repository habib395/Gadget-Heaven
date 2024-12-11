import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Cards from '../Cards';

const CoffeeCard = () => {
    const data = useLoaderData()
    const { Category } = useParams()
    const [computers, setComputers] = useState([])


    useEffect(() => {
        if(Category === "All Products"){
                setComputers(data)
        }else if(!Category){
            setComputers(data.slice(0, 9))
        }
        else if(Category === "Others"){
            setComputers([])
            
        }else{
            const filterByCategory = [...data].filter(computer => computer.category === Category)
        setComputers(filterByCategory)
        }
    }, [Category, data])

    return (
        <> 


        <div className='grid col-span-3 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                computers.length > 0 ? (
                    computers.map(item => <Cards key={item.product_id} item={item}></Cards>)
                ) : (
                <div className='w-1/2 mx-auto sm:text-5xl text-center bg-[#9538E2] py-14 sm:py-10 rounded-full my-10'>
                    {
                        Category === "Others" ? "No Data Found." : "No items found."
                    }
                </div>
                )
            }
        </div>
        </>
    );
};

export default CoffeeCard;