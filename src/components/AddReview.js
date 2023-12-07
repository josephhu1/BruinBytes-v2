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
        <div className="mb-2">
            <ToastContainer />
            <form action="">
                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        id="name" 
                        placeholder="name" 
                        type="text" 
                        className="form-control"
                        />
                    </div>
                    <div className = "form-group col-4">
                        <label htmlFor="rating">Rating</label>
                        <select
                        value={rating}
                        onChange={e => setRating(e.target.value)}
                        id="rating" 
                        className="custom-select"
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
                <div className="form-group">
                    <label htmlFor="Review">Review</label>
                    <textarea 
                    value={reviewText}
                    onChange={e => setReviewText(e.target.value)}
                    id="Review" 
                    className="form-control"
                    ></textarea>
                </div>
                <button
                type="submit"
                onClick={submitReview}
                className= "btn btn-primary"
                //disabled={!currentUser}
                >
                    Submit
                    </button>
            </form>
        </div>
    )
}

export default AddReview