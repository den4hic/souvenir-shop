import React, {useState} from 'react';
import {Radio, Select} from "semantic-ui-react";

import '../styles/ItemsFilter.css'

const ItemsFilter = ({handleChangeCategory, handleSort, handlePopular}) => {
    const [sortOption, setSortOption] = useState("");
    const [onlyPopular, setOnlyPopular] = useState(false);

    const categoryOptions = [
        { key: 'all', value: 'all', text: 'Усі' },
        { key: 'clothes', value: 'clothes', text: 'Одежа' },
        { key: 'dishes', value: 'dishes', text: 'Посуд' },
        { key: 'decoration', value: 'decoration', text: 'Декор' },
        { key: 'plant', value: 'plant', text: 'Рослина' },
    ]

    const sortOptions = [
        { key: 'default', value: 'default', text: 'Сортування за замовчуванням' },
        { key: 'price_asc', value: 'price_asc', text: 'Сортування за ціною (зростання)' },
        { key: 'price_desc', value: 'price_desc', text: 'Сортування за ціною (спадання)' },
        { key: 'lang', value: 'lang', text: 'Сортування за абеткою' },
    ]

    function changeCategory(e, data) {
        handleChangeCategory(data.value);
        setSortOption("default");
        setOnlyPopular(false);
    }

    function changeSort(e, data) {
        setSortOption(data.value);
        handleSort(data.value);
    }

    function changePopular(e, data) {
        setOnlyPopular(data.checked);
        handlePopular(data.checked);
    }

    return (
        <div className="filter-container">
            <form className="filter-form" action="">
                <div className="discount">
                    <b>Популярне</b>
                    <Radio onChange={changePopular} checked={onlyPopular} toggle/>
                </div>
                <Select onChange={changeCategory} placeholder='Оберіть категорію' options={categoryOptions}/>
                <Select onChange={changeSort} value={sortOption} placeholder='Сортування за замовчуванням' options={sortOptions}/>
            </form>
        </div>
    );
};

export default ItemsFilter;
