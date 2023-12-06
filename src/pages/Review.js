import React, { useState, useEffect } from 'react';
import {StarRating} from '../components/StarRating'
import { Reviews } from '../components/Reviews'
import { AddReview } from '../components/AddReview'
import { useParams } from 'react-router-dom';


import './styles.css';

function Review( ) {
  const { id } = useParams()
  const [reviewsData, setReviewsData] = useState([]);
  const [restaurantName, setRestaurantName] = useState("")
  const [newReview, setNewReview] = useState(false)
  const [averageRating, setAverageRating] = useState(0)

  
  useEffect(() => {
    fetchReviews(id)
    fetchAverageRating(id)
    fetchName(id)
  }, [id, newReview]);

  async function fetchName(restaurantID) {
    try {
        const response = await fetch(`http://127.0.0.1:5001/ucla-dining-crud-api/us-central1/app/api/search/${id}`);
        if (response.ok) {
            const data = await response.json();
            console.log("Name: ", data)
            setRestaurantName(data); // Update the state with restaurant 
        } else {
            throw new Error('Failed to fetch');
        }
    } catch (error) {
        console.error(error);
        // Handle error or set default info
        setReviewsData(null);
    }
}
  async function fetchReviews(restaurantID) {
      try {
          const response = await fetch(`http://127.0.0.1:5001/ucla-dining-crud-api/us-central1/app/api/read/reviews/${id}`);
          if (response.ok) {
              const data = await response.json();
              setReviewsData(data); // Update the state with restaurant 
          } else {
              throw new Error('Failed to fetch');
          }
      } catch (error) {
          console.error(error);
          // Handle error or set default info
          setReviewsData(null);
      }
  }

  async function fetchAverageRating(id) {
    console.log(id)
    try {
      const response = await fetch(`http://127.0.0.1:5001/ucla-dining-crud-api/us-central1/app/api/read/rating/${id}`); // Replace YOUR_BACKEND_URL with your actual backend URL
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setAverageRating(data.averageRating);
      } else {
        throw new Error('Failed to fetch average rating');
      }
    } catch (error) {
      console.error(error);
      setAverageRating(0); // Set default rating if there's an error
    }
  }

  return(
    <div>
      <h1 className="text-center display-1">{restaurantName.name}</h1>
      <div className="text-center"> {/* Container for centering */}
      <StarRating rating={averageRating} />
      <span className="text-warning ml-1">{averageRating}</span>
      </div>
      <div className="mt-3">
      <Reviews reviews={reviewsData}/>
      </div> 
      <AddReview restaurantID={id} newReview={newReview} setNewReview={setNewReview} /> 
    </div>
  )
}

export default Review;
