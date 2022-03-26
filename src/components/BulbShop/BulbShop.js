import React, { useEffect, useState } from 'react';
import BulbCard from '../BulbCard/BulbCard';
import './BulbShop.css'

const BulbShop = () => {
    const [lights, setLights] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLights(data))
    }, [])

    return (
        <div className='light-container'>
            <div className='show-light-card'>
                {
                    lights.map(light => <BulbCard
                        key={light}
                        light={light}
                    ></BulbCard>)
                }
            </div>
            <div className='show-light-name'>
                <h1> Show light name</h1>
            </div>
        </div>
    );
};

export default BulbShop;