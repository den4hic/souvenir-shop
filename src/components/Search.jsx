import React, {useEffect, useState} from 'react';
import {Icon, Input} from 'semantic-ui-react'

import '../styles/Search.css';

const Search = ({handleSearch}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
    }, []);

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
                        size={windowWidth < 764 ? "mini" : "large"}
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
