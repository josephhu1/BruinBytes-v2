import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import '../pages/styles.css';

const SignInButton = ({ history }) => {
    const { currentUser, userSignOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/SignIn');
    };
    return (
        <div className="sign-in-button">
            {currentUser ? (
                <>
                    <button className="sign-out-text">Hi, {currentUser.displayName}!</button>
                    <button className="sign-out-text" onClick={userSignOut}>Sign Out</button>
                </>
            ) : (
                <button className="sign-out-text" onClick={handleSignInClick}>
                    Sign In
                </button>
            )}
        </div>
    );
};

export default SignInButton;