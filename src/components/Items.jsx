import React, {useEffect, useMemo, useState} from 'react';
import Product from "./Product";

import '../styles/Product.css';

const Items = ({changeToWishList, handleChangeCart, products, activePage}) => {
    const [pageProducts, setPageProducts] = useState([]);
    const [wishlist, setWishlist] = useState([])
    const [cartlist, setCartList] = useState([])

    useEffect(() => {
        let storedArrayWish = localStorage.getItem('wishlist');
        if (storedArrayWish) {
            let parsedArray = JSON.parse(storedArrayWish);
            setWishlist(parsedArray);
        }
        let storedArrayCart = localStorage.getItem('cartlist');
        if (storedArrayCart) {
            let parsedArray = JSON.parse(storedArrayCart);
            setCartList(parsedArray);
        }
    }, [])
    const handleChangeToWishList = (product, flag) => {
        changeToWishList(product, flag);
    };

    const changeToCartlist = (product, flag) => {
        handleChangeCart(product, flag);
    };

    useMemo(() => {
        setPageProducts(products.slice((activePage - 1) * 10, (activePage - 1) * 10 + 10));
    }, [activePage, products])

    return (
        <div className="item-container">
            {pageProducts
                .map((product) => (
                <Product key={product.id} product={product} onChangeToWishlist={handleChangeToWishList} onChangeToCartlist={changeToCartlist} wishlist={wishlist} cartlist={cartlist}/>
            ))}
        </div>
    );
};

export default Items;
