import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/design.css';

const SpinButton = ({ history }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/SpinTheWheel');
    };
    return (
        <div className="spin-the-wheel-button">
            <button className="spin-the-wheel-text" onClick={handleClick}>
            Pick My Plate
                </button>
        </div>
    );
};

export default SpinButton;