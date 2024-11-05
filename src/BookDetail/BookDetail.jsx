import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const {product_id} = useParams()
    const data = useLoaderData()
    const id = parseInt(product_id)

    const computer = data.find(computer => computer.product_id === product_id)

    

    return (
        <div>
            <h2>BookId : {product_id}</h2>
        </div>
    );
};

export default BookDetail;