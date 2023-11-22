import React from 'react';
import Items from "./Items";
import ItemsFilter from "./ItemsFilter";

import '../styles/Content.css';
import {Pagination} from "semantic-ui-react";

const Content = () => {
    return (
        <div className="content-container">
            <h1>Асортимент</h1>
            <ItemsFilter/>
            <Items/>
            <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={10}
            />
        </div>
    );
};

export default Content;
