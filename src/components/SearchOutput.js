import React from "react";
import "../pages/design.css";

import { useNavigate } from 'react-router-dom';

/*
List of search results
*/
export const SearchOutput = ({results}) => {
    return (
        <div className="all-results">
            {results.map(result => <SomeResult result={result} key={result.id} />)}
        </div>
    );
}

/*
For each search result
*/
const SomeResult = ({result}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/reviews/${result.name.replace(/\s/g, '')}`);
        /* alert(`Need to implement page for: ${result.name}`); */
    };

    return (
        <div className="one-search-result" onClick={handleClick}>
            {result.name}
        </div>
    );
}

export default SearchOutput;