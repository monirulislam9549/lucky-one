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
        // console.log(light.name);
        if (cart.length < 4) {
            const newLightCart = [...cart, light]
            setCart(newLightCart)
        }

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
                <p>Selected Light Name :{cart.length}</p>
            </div>

            <div>
                <h1>Question:1 Difference between Props vs State</h1>
                <h3>Props</h3>
                <ul>
                    <li>The Data is passed from one component to another.</li>
                    <li>Cant be modified.</li>
                    <li>Props are read-only.</li>
                </ul>
                <h3>State</h3>
                <ul>
                    <li>Data is passed within the component only.</li>
                    <li>Can be modified</li>
                    <li>State is both read and write.</li>
                </ul>
                <h1>Question:2 How useState works?</h1>
                <p>useState is a Hook which variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value.</p>
                <h1>Question:3 How react works?</h1>
                <p>React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
            </div>
        </div>
    );
};

export default BulbShop;