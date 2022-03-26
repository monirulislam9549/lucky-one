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
            <button className='btn-transport'>
                <p>Transport</p>
            </button>
        </div>
    );
};

export default BulbCard;