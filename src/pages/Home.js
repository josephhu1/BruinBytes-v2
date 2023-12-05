import bcafe from "../ucla-dining-images/bcafe.jpg"
import bplate from "../ucla-dining-images/bplate.jpeg"
import cafe1919 from "../ucla-dining-images/cafe1919.jpg"
import deneve from "../ucla-dining-images/de-neve.webp"
import epicuria from "../ucla-dining-images/epicuria.jpg"
import feast from "../ucla-dining-images/feast.jpeg"
import rende from "../ucla-dining-images/rende.jpg"
import drey from "../ucla-dining-images/the-drey.webp"
import study from "../ucla-dining-images/thestudy.webp"
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SignInButton from '../components/SignInButton';
import SearchOutput from '../components/SearchOutput';
import './design.css';
import { ImageSlider } from "../components/ImageSlider"
import SignUpButton from '../components/SignUpButton';
import SpinTheWheel from '../components/SpinButton';
/*import SignIn from './components/auth/SignIn'; RESOLVE PATH */
/*import SignUp from './components/auth/SignUp'; RESOLVE PATH */

const IMAGES = [rende, bcafe, epicuria, bplate, drey, study, feast, deneve, cafe1919]

const Home = () => {
    const [results, setResults] = useState([]);
    return (
        <div className="overall">
            <div className="header-group">
                <div className="logo">BruinBytes</div>
                <SearchBar setResults={setResults} />
                <SpinTheWheel />
                <SignInButton />
                <SignUpButton />
            </div>
            <SearchOutput results={results} />
            <div style= {{ 
            maxWidth: "1500px", 
            width: "85%", 
            aspectRatio: "10.5 / 6", 
            margin: "0 auto"}}>
                <ImageSlider imageUrls={IMAGES} />
            </div>
        </div>
    );
};

export default Home;