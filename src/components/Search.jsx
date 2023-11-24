import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // Імпорт іконки з бібліотеки react-icons
import {Icon, Input} from 'semantic-ui-react'

import '../styles/Search.css';
import loginForm from "./LoginForm";

const Search = ({handleSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchField, setIsSearchField] = useState(false)

    const performSearch = (e, data) => {
        e.stopPropagation();
        if(data !== undefined) {
            handleSearch(data.value);
        } else {
            handleSearch("");
        }
    };

    // document.addEventListener('click', () => {
    //     setIsSearchField(false);
    // })
    return (
        <div className="search-container">
            <div className="search-input">
                <div className="search-field" onClick={performSearch}>
                    <Input
                        onChange={performSearch}
                        icon={<Icon onClick={()=>{
                            console.log(1)}} name='search' inverted circular link />}
                        placeholder='Search...'
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;
