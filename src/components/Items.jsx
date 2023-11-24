import React, {useEffect, useMemo, useState} from 'react';
import Product from "./Product";

import '../styles/Product.css';

const Items = ({changeToWishList, addToCartList, products, activePage}) => {
    const [pageProducts, setPageProducts] = useState([]);
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        let storedArray = localStorage.getItem('wishlist');
        if (storedArray) {
            let parsedArray = JSON.parse(storedArray);
            setWishlist(parsedArray);
        }
    }, [])
    const handleChangeToWishList = (product, flag) => {
        changeToWishList(product, flag);
    };

    const handleAddToCartlist = (product) => {
      addToCartList(product);
    };

    useMemo(() => {
        setPageProducts(products.slice((activePage - 1) * 10, (activePage - 1) * 10 + 10));
    }, [activePage, products])

    return (
        <div className="item-container">
            {pageProducts
                .map((product) => (
                <Product key={product.id} product={product} onChangeToWishlist={handleChangeToWishList} onAddToCartlist={handleAddToCartlist} wishlist={wishlist}/>
            ))}
        </div>
    );
};

export default Items;
