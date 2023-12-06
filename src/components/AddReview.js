import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const AddReview = ( { restaurantID, newReview, setNewReview } ) => {
    const [name, setName] = useState("")
    const [reviewText, setReviewText] = useState("")    
    const [rating, setRating] = useState("Rating")

    const submitReview = async (e) => {
        e.preventDefault();
        console.log(restaurantID)
        console.log(name)
        console.log(rating)
        console.log(reviewText)
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
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-1">
              <form>
                <div className="form-row align-items-center justify-content-center">
                <div className="form-group col-md-6 d-flex flex-column align-items-center">
                    <label
                    htmlFor="name"
                    className="d-block text-center mb-3"
                    style={{ fontFamily: 'Sans-Serif', fontSize: '20px' }}
                    >
                    Name
                    </label>
                    <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="name"
                    type="text"
                    className="form-control"
                    style={{ border: '3px solid orange', fontFamily: 'sans-serif', marginBottom: '30px', width: '100%', minWidth: '150px' }}
                    />
                </div>
                <div className="form-group col-md-6 d-flex flex-column align-items-center">
                    <label htmlFor="rating">Rating</label>
                    <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    id="rating"
                    className="custom-select"
                    style={{ marginBottom: '20px' }}
                    >
                    <option disabled>Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group col-md-6 d-flex flex-column align-items-center mt-3">
                    <label
                    htmlFor="Review"
                    className="d-block text-center mb-1"
                    style={{ fontFamily: 'Sans-Serif', fontSize: '20px' }}
                    >
                    Review
                    </label>
                    <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    id="Review"
                    className="form-control"
                    style={{ border: '3px solid orange', marginBottom: '20px', width: '100%', minWidth: '1000px' }}
                    ></textarea>
                </div>
                <div className="form-group col-md-6 d-flex justify-content-center align-items-center mt-3">
                    <button
                    type="submit"
                    onClick={submitReview}
                    className="btn btn-primary"
                    style={{ marginBottom: '20px' }}
                    >
                    Submit
                    </button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
      


}

export default AddReview