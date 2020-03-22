import React from 'react';
import { UserContext } from '../../App';
import { useContext } from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const user = useContext(UserContext);
    console.log(user);
    const totalprice= cart.reduce((total, prd) => total + prd.price, 0)
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>total price: {totalprice}</p>
            <br/>
            {
                props.children
            }
            <p>{user}</p>
        </div>
    );
};

export default Cart;