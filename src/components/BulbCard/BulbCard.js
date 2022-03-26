import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BulbCard.css';

const BulbCard = ({ light, addToCart }) => {

    const { name, img, price, id } = light

    return (
        <div className='picture'>
            <img src={img} alt="" />
            <div className='light-info'>
                <p className='light-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Light ID: {id}</p>
            </div>
            <button onClick={() => addToCart(light)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default BulbCard;