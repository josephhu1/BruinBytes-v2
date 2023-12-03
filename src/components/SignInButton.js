import React from 'react';
import { useNavigate } from 'react-router-dom';
/* import '../design.css'; */
import '../pages/design.css';

const SignInButton = ({ history }) => {
    const navigate = useNavigate();
    const handleSignInClick = () => {
        navigate('/SignIn');
    };
    return (
        <div className="sign-in-button">
            <button className="sign-in-text" onClick={handleSignInClick}>
                Sign In
                </button>
        </div>
    );
};

export default SignInButton;