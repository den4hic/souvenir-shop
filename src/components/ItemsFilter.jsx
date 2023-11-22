import React from 'react';
import {Radio, Select} from "semantic-ui-react";

import '../styles/ItemsFilter.css'

const ItemsFilter = () => {
    const countryOptions = [
        { key: 'all', value: 'all', text: 'Усі' },
        { key: 'clothes', value: 'clothes', text: 'Одежа' },
        { key: 'sweets', value: 'sweets', text: 'Солодощі' },
        { key: 'decoration', value: 'decoration', text: 'Декор' },
    ]
    return (
        <div className="filter-container">
            <form className="filter-form" action="">
                <div className="discount">
                    <b>Знижка</b>
                    <Radio toggle/>
                </div>
                <Select placeholder='Оберіть категорію' options={countryOptions}/>
            </form>
        </div>
    );
};

export default ItemsFilter;
