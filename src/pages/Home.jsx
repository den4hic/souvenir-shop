import React from 'react';
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = ({ changeToWishList, addToCartList, wishlistItems: wishlist }) => {
    return (
        <div>
            <Header/>
            <Main changeToWishList={changeToWishList} addToCartList={addToCartList} wishlist={wishlist}/>
            <Footer/>
        </div>
    );
};

export default Home;
