import React from 'react';
import './BulbCard.css';

const BulbCard = (props) => {

    const { name, img, price, id } = props.light

    return (
        <div className='picture'>
            <img src={img} alt="" />
            <div className='light-info'>
                <p className='light-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Light ID: {id}</p>
            </div>
            <button onClick={() => props.addToCart(props.light)} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default BulbCard;