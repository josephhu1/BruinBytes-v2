import { useState } from "react";
import '../design.css';

/*
Search Bar Functionality:
*/
export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState('');

    const fetchInfo = (searchVal) => {
        const api = "http://127.0.0.1:5001/ucla-dining-crud-api/us-central1/app/api/search";
        fetch(api)
            .then(response => response.json())
            .then(data => filterSearch(data, searchVal))
            .then(filteredResults => setResults(filteredResults))
            .catch(error => console.error(error));
    };

    const configureChange = (value) => {
        setInput(value);
        fetchInfo(value);
    };

    return (
        <div className="search-bar">
            <input
                placeholder="Search BruinBytes..."
                className="search-input"
                value={input}
                onChange={(e) => configureChange(e.target.value)}
            />
        </div>
    );
};

/*
Helper function:
*/
const filterSearch = (data, searchVal) => {
    if (!searchVal) {
        return [];
    }
    return data.filter(user => {
        const userName = user && user.name ? user.name.toLowerCase() : '';
        return userName.includes(searchVal.toLowerCase());
    });
};

export default SearchBar;