import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStarHalfStroke as solidStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

export const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      //console.log("HELLO")
      stars.push(<FontAwesomeIcon icon={solidStar} key={i} className="fa-icon text-warning"/>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      console.log(i)
      console.log("HALF STAR: ",rating)
      stars.push(<FontAwesomeIcon icon={solidStarHalf} key={i} className="fa-icon half-star text-warning" />);
    } else {
      //console.log("HELLO3")
      stars.push(<FontAwesomeIcon icon={regularStar} key={i} className="fa-icon text-warning" />);
    }
  }
  return <>{stars}</>;
};

export default StarRating;
