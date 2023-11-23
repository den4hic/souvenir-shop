import React, {useMemo, useState} from 'react';
import Product from "./Product";

import '../styles/Product.css';

const Items = ({changeToWishList, addToCartList, products, wishlist, activePage}) => {
    const [pageProducts, setPageProducts] = useState([])

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
                <Product key={product.id} product={product} onChangeToWishlist={handleChangeToWishList} onAddToCartlist={handleAddToCartlist} wishList={wishlist}/>
            ))}
        </div>
    );
};

export default Items;
