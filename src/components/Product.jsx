import React from 'react';
import '../styles/Product.css';
import {Button, Icon} from "semantic-ui-react";

const Product = () => {
    return (
        <div className="item-block">
            <div className="item-img">
                <img className="image" src="/assets/images/products/1_product.jpg" alt="No data"/>
                <Icon className="wish-btn" circular inverted color='teal' name='like' size="large" />
            </div>
            <div className="item-info">
                <h2>Назва</h2>
                <p>Деякий короткий опис товару, що продається</p>
                <div className="buy-container">
                    <b className="price">2500 грн.</b>
                    <Button color="yellow" circular icon='shop' size="big" />
                </div>
            </div>
        </div>
    );
};

export default Product;
