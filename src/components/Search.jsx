import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // Імпорт іконки з бібліотеки react-icons
import {Icon, Input} from 'semantic-ui-react'

import '../styles/Search.css';
import loginForm from "./LoginForm";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchField, setIsSearchField] = useState(false)

    const performSearch = (e) => {
        e.stopPropagation();
        console.log(`Ваш пошук: ${searchQuery}`);
    };

    document.addEventListener('click', () => {
        setIsSearchField(false);
    })
    return (
        <div className="search-container">
            <div className="search-input">
                <div className="search-field" onClick={performSearch}>

                    <Input
                        icon={<Icon name='search' inverted circular link />}
                        placeholder='Search...'
                    />

                </div>
            </div>
            {/* Відображення результатів пошуку */}
            <ul>
                {searchResults.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
