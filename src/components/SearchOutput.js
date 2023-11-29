import React from "react";
import "../pages/design.css";

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
    const handleClick = () => {
        alert(`Need to implement page for: ${result.name}`);
    };

    return (
        <div className="one-search-result" onClick={handleClick}>
            {result.name}
        </div>
    );
}

export default SearchOutput;