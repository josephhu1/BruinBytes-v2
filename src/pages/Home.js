import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SignInButton from '../components/SignInButton';
import SearchOutput from '../components/SearchOutput';
import './design.css';

const Home = () => {
    const [results, setResults] = useState([]);
    return (
        <div className="overall">
            <div className="header-group">
                <div className="logo">BruinBytes</div>
                <SearchBar setResults={setResults} />
                <SignInButton />
            </div>
            <SearchOutput results={results} />
            <div className="image-group">
                <img src="" alt="Description" className="restaurant1" />
            </div>
        </div>
    );
};

export default Home;