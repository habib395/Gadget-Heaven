import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Cards from '../Cards';

const CoffeeCard = () => {
    const data = useLoaderData()
    const { Category } = useParams()
    const [computers, setComputers] = useState([])

    useEffect(() => {
        if(Category){
            const filterByCategory = [...data].filter(computer => computer.category === Category)
        setComputers(filterByCategory)
        }else{
            setComputers(data)
        }
    }, [Category, data])

    return (
        <>
        <div className='grid col-span-3 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>{
        computers.map(item =><Cards key={item.product_id} item={item}></Cards>)
        }
        </div>
        </>
    );
};

export default CoffeeCard;