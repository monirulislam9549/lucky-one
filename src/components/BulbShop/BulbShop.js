import React, { useEffect, useState } from 'react';
import BulbCard from '../BulbCard/BulbCard';
import './BulbShop.css'

const BulbShop = () => {
    const [lights, setLights] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLights(data))
    }, [])

    const addToCart = (light) => {
        console.log(light.name);
        const newLightCart = [...cart, light]
        setCart(newLightCart)
    }

    return (
        <div className='light-container'>
            <div className='show-light-card'>
                {
                    lights.map(light => <BulbCard
                        key={light.id}
                        light={light}
                        addToCart={addToCart}
                    ></BulbCard>)
                }
            </div>
            <div className='show-light-name'>
                <h1> Selected Light Items</h1>
                <p>Selected Light Name :{cart.name}</p>
            </div>
        </div>
    );
};

export default BulbShop;