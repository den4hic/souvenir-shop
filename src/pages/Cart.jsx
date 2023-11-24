import React from 'react';
import Header from "../components/Header";
import Items from "../components/Items";

import '../styles/Cart.css';

const Cart = ({cartlistItems, handleSearch}) => {
    return (
        <div>
            <Header handleSearch={handleSearch}/>
            <div className="cart-container">
                <Items products={cartlistItems}/>
            </div>
        </div>
    );
};

export default Cart;
