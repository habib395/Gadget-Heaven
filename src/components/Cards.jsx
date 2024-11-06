import React from 'react';

const Cards = ({ item }) => {
    const {product_id, product_title, product_image, category, price, description,Specification, brand } = item;
    return (
        <div>
            {product_title}
        </div>
    );
};

export default Cards;