import React, {useEffect, useState} from 'react';
import {Icon, Input} from 'semantic-ui-react'

import '../styles/Search.css';

const Search = ({handleSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchField, setIsSearchField] = useState(false)

    useEffect(() => {
        if(handleSearch) {
            handleSearch("");
        }
    }, []);

    const performSearch = (e, data) => {
        e.stopPropagation();
        if(data !== undefined) {
            handleSearch(data.value);
        } else {
            handleSearch("");
        }
    };

    return (
        <div className="search-container">
            <div className="search-input">
                <div className="search-field">
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
