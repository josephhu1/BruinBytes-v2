import { useState, useEffect } from "react"
import {ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from "lucide-react"
import "../pages/design.css"

export function ImageSlider({ imageUrls}) {
    const [imageIndex, setImageIndex] = useState(0)
    const [restaurantInfo, setRestaurantInfo] = useState(null);

    useEffect(() => {
        fetchRestaurantInfo(imageIndex);
    }, [imageIndex]);

    async function fetchRestaurantInfo(index) {
        try {
            const response = await fetch(`http://127.0.0.1:5001/ucla-dining-crud-api/us-central1/app/api/read/${index}`);
            if (response.ok) {
                const data = await response.json();
                setRestaurantInfo(data); // Update the state with restaurant info
            } else {
                throw new Error('Failed to fetch');
            }
        } catch (error) {
            console.log(index)
            console.error(error);
            // Handle error or set default info
            setRestaurantInfo(null);
        }
    }

    function showNextImage() {
        setImageIndex(index => {
            if (index === imageUrls.length-1 ) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0 ) return imageUrls.length-1
            return index - 1
        })
    }

    return (
    <>
    <div style={ {width: "100%", height: "100%", position: "relative"}}>
        <div style={{width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
            {imageUrls.map(url => (
                <img 
                key={url} 
                src={url} 
                className="img-slider-img" 
                style ={{ translate: `${-100 * imageIndex}%` }}
                />
            ))}
        </div>
            {/* Display restaurant information */}
            {restaurantInfo && (
                <div className="restaurant-info">
                    <h3>{restaurantInfo.name}</h3>
                    {/* Display other restaurant information here */}
                    <p>{restaurantInfo.description}</p>
                    <p>{restaurantInfo.address}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        <button onClick={showPrevImage} className="img-slider-btn" style={{ left: 0 }}> 
            <ArrowBigLeft/> 
        </button>
        <button onClick={showNextImage} className="img-slider-btn" style={{ right: 0 }}> 
            <ArrowBigRight/> 
        </button>
        <div style={{
        position: "absolute",
        bottom: "0.5rem",
        left: "50%",
        translate: "-50%",
        display: "flex",
        gap: ".3rem"
    }}>
        {imageUrls.map((_, index) => (
            <button 
                key={index} 
                className="img-slider-bot-btn" 
                onClick={() => setImageIndex(index)}
            >
                {index === imageIndex ? <CircleDot className="custom-circle-dot-class"/> : <Circle className="custom-circle-class" />}
            </button>
        ))}
    </div>
    </div>
    </>
    )
}
//npm i lucide-react