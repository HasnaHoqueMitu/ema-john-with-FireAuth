import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] =useState([]);

    useEffect(()=>{
        //cart
        const savedcart = getDatabaseCart();
        const productkeys = Object.keys(savedcart);
        
        const catProducts = productkeys.map ( key => {
            const product = fakeData.find( pd => pd.key ===key);
            product.quantity = savedcart[key];
            return product;
        });

        setCart(catProducts);
    },[])
    return (
        <div>
            <h1>Cart Items: {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem 
                    key = {pd.key}
                    product = {pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;