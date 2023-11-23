import React from 'react';

import '../styles/Main.css';
import ImageSlider from "./ImageSlider";
import Content from "./Content";

const Main = ({changeToWishList, addToCartList, wishlist}) => {
    return (
        <main className="main-container">
            <div className="main">
                <ImageSlider/>
                <Content changeToWishList={changeToWishList} addToCartList={addToCartList} wishlist={wishlist}/>
            </div>
        </main>
    );
};

export default Main;
