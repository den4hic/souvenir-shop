import React from 'react';

import '../styles/Main.css';
import ImageSlider from "./ImageSlider";
import Content from "./Content";

const Main = ({changeToWishList, addToCartList, wishlist, products}) => {
    return (
        <main className="main-container">
            <div className="main">
                <ImageSlider/>
                <Content changeToWishList={changeToWishList} addToCartList={addToCartList} wishlist={wishlist} products={products}/>
            </div>
        </main>
    );
};

export default Main;
