import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SignInButton from './components/SignInButton';
import SignUpButton from './components/SignUpButton';
import SearchOutput from './components/SearchOutput';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

const App = () => {
    const [results, setResults] = useState([]);
    return (
      <Router>
        <div className="overall">
            <div className="header-group">
                <div className="logo">BruinBytes</div>
                <SearchBar setResults={setResults} />
                <SignInButton />
                <SignUpButton />
            </div>
            <Routes>
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/" element={<SearchOutput results={results} />} />
              </Routes>
            <SearchOutput results={results} />
            <div className="image-group">
                <img src="" alt="Description" className="restaurant1" />
            </div>
        </div>
      </Router>
    );
};

export default App;