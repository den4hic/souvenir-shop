import React, {useEffect, useState} from 'react';
import Items from "./Items";
import ItemsFilter from "./ItemsFilter";

import '../styles/Content.css';
import {Pagination} from "semantic-ui-react";

const Content = ({changeToWishList, handleChangeCart, cartlist, wishlist, products, handleChangeCategory, handleSort, handlePopular}) => {
    const [activePage, setActivePage] = useState(1);

    const handlePaginationChange = (e, { activePage }) => setActivePage(activePage);

    return (
        <div>
            {products.length === 0
            ? (
                <div className="not-found-content-container">
                    <h1>Товарів не знайдено</h1>
                </div>
                )
            : <div className="content-container">
                    <h1>Асортимент</h1>
                    <ItemsFilter handleChangeCategory={handleChangeCategory} handleSort={handleSort} handlePopular={handlePopular}/>
                    <Items changeToWishList={changeToWishList} handleChangeCart={handleChangeCart} products={products} cartlist={cartlist} wishlist={wishlist} activePage={activePage}/>
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={products.length / 10}
                        onPageChange={handlePaginationChange}
                    />
                </div>}
        </div>
    );
};

export default Content;
