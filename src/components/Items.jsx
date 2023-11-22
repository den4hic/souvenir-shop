import React from 'react';
import Product from "./Product";

import '../styles/Product.css';

const Items = () => {
    return (
        <div className="item-container">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
};

export default Items;
