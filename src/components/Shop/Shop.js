import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
const Shop = () => {
    const first10= fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (prod) =>{
       // console.log('product added', prod);
        const newCart = [...cart, prod];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === prod.key);
        const count = sameProduct.length;
        addToDatabaseCart(prod.key, count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(pd =><Product 
                            key = {pd.key}
                            showAddToCart = {true}
                            handleAddProduct = {handleAddProduct}
                            prod={pd}
                            ></Product>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="main-button">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;



