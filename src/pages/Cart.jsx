import React, { useEffect, useState } from 'react';
import '../styles/Cart.css';
import Header from '../components/Header';
import CartProduct from '../components/CartProduct';

const Cart = ({ cartlistItems: products, handleChangeCart }) => {
    const [finalPrice, setFinalPrice] = useState(0);

    useEffect(() => {
        let totalPrice = 0;
        products.forEach((product) => {
            totalPrice += product.price;
        });
        setFinalPrice(totalPrice);
    }, [products]);

    const handleBuy = () => {
        console.log('Куплено!');
    };

    const changePrice = (product, quantityNew, change) => {
        const oldPrice = product.price * (quantityNew - change);
        const newPrice = product.price * quantityNew;
        const newFinalPrice = finalPrice + newPrice - oldPrice;

        setFinalPrice(newFinalPrice);
    };

    return (
        <div>
            <Header />
            <div className="cart-container">
                <h2 className="cart-text">Кошик</h2>
                {products.length === 0 && <h3 className="cart-text">Кошик пустий</h3>}
                <div className="products-container">
                    {products.map((product, index) => (
                        <CartProduct
                            key={index}
                            product={product}
                            index={index}
                            handleChangeCart={handleChangeCart}
                            changePrice={changePrice}
                        />
                    ))}
                </div>

                {products.length !== 0 && <div className="cart-buy-container">
                    <h2>Ціна замовлення: {finalPrice}</h2>

                    <button className="buy-button" onClick={handleBuy}>
                        Buy
                    </button>
                </div> }
            </div>
        </div>
    );
};

export default Cart;
