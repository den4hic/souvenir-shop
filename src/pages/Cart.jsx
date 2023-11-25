import React, { useState } from 'react';

import '../styles/Cart.css';
import Header from "../components/Header";
import CartProduct from "../components/CartProduct";

const Cart = ({ cartlistItems: products, handleChangeCart }) => {
    const [cartProducts, setCartProducts] = useState(products);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);


    const handleBuy = () => {
        console.log('Куплено!');
    };

    return (

        <div>
            <Header/>
            <div className="cart-container">
                <h2>Кошик</h2>
                {cartProducts.length === 0 && (<h3>Кошик пустий</h3>)}
                <div className="products-container">
                    {cartProducts.map((product, index) => (
                        <CartProduct product={product} index={index} handleChangeCart={handleChangeCart}/>
                    ))}
                </div>

                <button className="buy-button" onClick={handleBuy}>
                    Buy
                </button>
            </div>
        </div>
    );
};

export default Cart;
