import React from 'react';

import '../styles/Main.css';
import ImageSlider from "./ImageSlider";
import Content from "./Content";

const Main = ({changeToWishList, handleChangeCart, cartlist ,wishlist, products, handleChangeCategory, handleSort, handlePopular}) => {
    const slides = ["1_slide.jpg", "2_slide.jpg", "3_slide.jpg", "4_slide.jpg", "5_slide.jpg"];
    return (
        <main className="main-container">
            <div className="main">
                <ImageSlider slides={slides}/>
                <Content changeToWishList={changeToWishList} handleChangeCart={handleChangeCart} cartlist={cartlist} wishlist={wishlist} products={products} handleChangeCategory={handleChangeCategory} handleSort={handleSort} handlePopular={handlePopular}/>
            </div>
        </main>
    );
};

export default Main;
