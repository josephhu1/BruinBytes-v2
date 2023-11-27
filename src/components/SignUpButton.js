import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../design.css';

const SignUpButton = ({ history }) => {
    const navigate = useNavigate();
    const handleSignInClick = () => {
        navigate('/SignUp');
    };
    return (
        <div className="sign-up-button">
            <button className="sign-up-text" onClick={handleSignInClick}>
                Sign Up
                </button>
        </div>
    );
};

export default SignUpButton;