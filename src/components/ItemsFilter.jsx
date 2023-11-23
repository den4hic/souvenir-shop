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

    const sortOptions = [
        { key: 'default', value: 'default', text: 'Сортування за замовчуванням' },
        { key: 'price_asc', value: 'price_asc', text: 'Сортування за ціною (зростання)' },
        { key: 'price_desc', value: 'price_desc', text: 'Сортування за ціною (спадання)' },
        { key: 'new', value: 'new', text: 'Сортування за новизною' },
    ]
    return (
        <div className="filter-container">
            <form className="filter-form" action="">
                <div className="discount">
                    <b>Знижка</b>
                    <Radio toggle/>
                </div>
                <Select placeholder='Оберіть категорію' options={countryOptions}/>
                <Select placeholder='Сортування за замовчуванням' options={sortOptions}/>
            </form>
        </div>
    );
};

export default ItemsFilter;
