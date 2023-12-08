import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useState } from 'react'
import { AuthContext } from './AuthContext'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddReview = ( { restaurantID, newReview, setNewReview } ) => {
    const { currentUser } = useContext(AuthContext);
    const [name, setName] = useState("")
    const [reviewText, setReviewText] = useState("")    
    const [rating, setRating] = useState("Rating")

    const submitReview = async (e) => {
        e.preventDefault();
        if (!currentUser) {
            toast.error("You must be logged in to post a review.");
            return;
        }
        if (!name.trim() || !rating || rating === "Rating" || !reviewText.trim()) {
            toast.error("Please fill out all fields before submitting your review.");
            return;
        }
     
        try {
            const response = await fetch(`http://127.0.0.1:5001/ucla-dining-crud-api/us-central1/app/api/create/review/${restaurantID}`, {
                headers: {
                    'Content-Type': 'application/json' // Specify content type as JSON
                },
                method: 'POST',
                body: JSON.stringify({
                    restaurantID: restaurantID,
                    username: name,
                    rating: rating,
                    review: reviewText
                })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Call setNewReview to trigger an update in the Review component
            setNewReview(!newReview);
            // Clear the form after successful submission
            setName("");
            setReviewText("");
            setRating("Rating");
        } catch (error) {
            console.error('Error submitting review:', error);
            // Handle error scenarios here
        }
    };


    return (
        <div className="container d-flex align-items-center justify-content-center mt-3">
        <div className="mb-2">
          <ToastContainer />
          <form className="ml-1 text-center">
            <div className="form-row d-flex align-items-center justify-content-center">
              <div className="form-group col-5 d-flex flex-column">
                <label htmlFor="name" style={{ color: 'white' }} className="text-center">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Enter your name..."
                  type="text"
                  className="form-control text-center mt-2"
                  style = {{border: '3px solid black'}}
                />
              </div>
              <div className="form-group col-2 ml-2 d-flex flex-column">
                <label htmlFor="rating" style={{ color: 'white' }} className="text-center">
                  Rating
                </label>
                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  id="rating"
                  className="custom-select ml-4"
                  style = {{ marginLeft: "20px",  border: '3px solid black'}}
                >
                  <option disabled>Rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
      
            <div className="form-group text-center">
              <label htmlFor="Review" style={{ color: 'white' }}>
                Review
              </label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                id="Review"
                className="text-center form-control"
                style={{
                  border: '3px solid black',
                  marginBottom: '20px',
                  width: '100%',
                  minWidth: '1000px',
                }}
                placeholder='Enter your review...'
              ></textarea>
            </div>
      
            <div className="text-center">
              <button
                type="submit"
                onClick={submitReview}
                className="btn btn-primary btn-md"
                style={{ width: '200px' }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      );
    };
    
    export default AddReview;