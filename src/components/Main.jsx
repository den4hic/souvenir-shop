import React from 'react';

import '../styles/Main.css';
import ImageSlider from "./ImageSlider";
import Content from "./Content";

const Main = ({changeToWishList, addToCartList, wishlist, products, handleChangeCategory, handleSort, handlePopular}) => {
    return (
        <main className="main-container">
            <div className="main">
                <ImageSlider/>
                <Content changeToWishList={changeToWishList} addToCartList={addToCartList} wishlist={wishlist} products={products} handleChangeCategory={handleChangeCategory} handleSort={handleSort} handlePopular={handlePopular}/>
            </div>
        </main>
    );
};

export default Main;
