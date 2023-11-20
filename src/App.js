import React from 'react';
import SearchBar from './components/SearchBar';
import SignInButton from './components/SignInButton';

const App = () => {
    return (
        <div>
            <div class="logo"> BruinBytes </div>
            <div class="searchbar-and-signin">
                <SearchBar />
                <SignInButton />
            </div>
        </div>
    );
};

export default App;