import React, { useState } from 'react';

const CartProduct = ({ product, index, handleChangeCart}) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;

        if (newQuantity === 0) {
            handleChangeCart(product, false);
        }

        setQuantity(newQuantity);
    };

    const calculateTotalPrice = () => {
        if (product) {
            return product.price * quantity;
        }
        return 0;
    };

    return (
        quantity !== 0 && (
            <div className="product" key={index}>
                <img src={`/assets/images/products/${product.image}`} alt={product.name} className="product-image" />
                <div className="product-details">
                    <h3>{product.name}</h3>
                    <p>Ціна: ${product.price}</p>
                    <div className="quantity-controls">
                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>
                    <p>Загальна ціна: ${calculateTotalPrice()}</p>
                </div>
            </div>
        )
    );
};

export default CartProduct;
