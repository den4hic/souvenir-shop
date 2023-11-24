import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";


const Home = ({ changeToWishList, addToCartList, wishlistItems: wishlist, handleSearch, products}) => {

    return (
        <div>
            <Header handleSearch={handleSearch}/>
            <Main changeToWishList={changeToWishList} addToCartList={addToCartList} wishlist={wishlist} products={products}/>
            <Footer/>
        </div>
    );
};

export default Home;
