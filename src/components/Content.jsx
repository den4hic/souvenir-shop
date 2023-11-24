import React, {useEffect, useState} from 'react';
import Items from "./Items";
import ItemsFilter from "./ItemsFilter";

import '../styles/Content.css';
import {Pagination} from "semantic-ui-react";

const Content = ({changeToWishList, addToCartList, wishlist, products}) => {
    const [activePage, setActivePage] = useState(1);

    const handlePaginationChange = (e, { activePage }) => setActivePage(activePage);

    return (
        <div className="content-container">
            <h1>Асортимент</h1>
            <ItemsFilter/>
            <Items changeToWishList={changeToWishList} addToCartList={addToCartList} products={products} wishlist={wishlist} activePage={activePage}/>
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
        </div>
    );
};

export default Content;
