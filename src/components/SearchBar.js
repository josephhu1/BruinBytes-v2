import React from 'react';
import '../index.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search BruinBytes..." className="search-input" />
        </div>
    );
};

export default SearchBar;
