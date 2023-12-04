import React, { useState, useEffect } from 'react';
import WheelComponent from 'react-wheel-of-prizes';

async function getRestaurants() {
    try {
        const response = await fetch('http://127.0.0.1:5001/ucla-dining-crud-api/us-central1/app/api/names');
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

function SpinTheWheel() {
    const [restaurantList, setRestaurantList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getList = async () => {
            setRestaurantList(await getRestaurants());
            setLoading(false);
        };
        getList();
    }, []);

    const result = (pick) => {
        console.log(pick);
    };

    if (!loading) {
        return (
            <div className="wheel-overall">
                <h1 className="wheel-text">Where will you eat today?</h1>
                <WheelComponent
                    segColors={["#F2A900"]}
                    primaryColor="#2774AE"
                    contrastColor="#FFFFFF"
                    size={250}
                    fontFamily="Monospace"
                    segments={restaurantList}
                    onFinished={result}
                    buttonText="Spin Me"
                    isOnlyOnce={false}
                />
            </div>
        );
    } else {
        return null;
    }
}

export default SpinTheWheel;
