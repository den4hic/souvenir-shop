import React from 'react';
import Header from "../components/Header";
import Items from "../components/Items";

import '../styles/WishList.css';

const WishList = ({wishlistItems, handleSearch}) => {
    return (
        <div>
            <Header handleSearch={handleSearch}/>
            <div className="wishlist-text">
                <h1>Список бажань</h1>
                {wishlistItems.length === 0 && <h3>Список бажань порожній</h3>}
            </div>
            <div className="wishlist-container">
                <Items products={wishlistItems}/>
            </div>
        </div>
    );
};

export default WishList;
