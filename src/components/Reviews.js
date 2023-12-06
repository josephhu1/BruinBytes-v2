import React from 'react';
import StarRating from './StarRating';

export const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-3 mb-2">
      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div className="col" key={index}>
            <div className="card text-white bg-primary mb-3" style={{ maxWidth: '300px' }}>
              <div className="card-header d-flex justify-content-between">
                <span>{review.username}</span>
                <span><StarRating rating={review.rating} /></span>
              </div>
              <div className="card-body">
                <p className="card-text">{review.review}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default Reviews;
