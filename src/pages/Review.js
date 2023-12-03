import React, { useState } from 'react';
/* import ReactDOM from 'react-dom'; */
/* import logo from './logo.svg'; */
/* import './App.css'; */
import './styles.css';
import SubmitReview from '../components/SubmitReview';


import { AiFillStar, AiOutlineStar} from "react-icons/ai";

function Review() {
  const [number, setNumber] = useState(0);

  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  

  const handleText = () => {
    switch(number){
      case 0:
        return 'Evaluate';
      case 1:
        return 'Dissatisfaction';
      case 2:
        return 'Not fine';
      
      case 3:
        return 'Fine';

      case 4:
        return 'Good';

      case 5:
        return 'Excellent';

      default:
        return 'Evaluate';

    }
  }


  return (
    <div className="App">
      <div className="popup">
        <h1 style={{ color: 'orange' }}>Restaurant Detail</h1>

      
        
        <div className="content">
          <div className="product">
              
              { <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fconferences.ucla.edu%2Fa-history-of-ucla-logos%2F&psig=AOvVaw0GXoJSRQS5hBb8Xh6-NqDU&ust=1701045073967000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCKjP4ey04IIDFQAAAAAdAAAAABAE"} alt="Logo"/> }
              <div className="restaurant-container">
                <div className="restaurant-box">
                  <h2>Restaurant Name1</h2>
                 <p>Name: Ryan - Rating: 5</p>
                 <p>Comment: Excellent Restaurant</p>

                </div>

                <div className="restaurant-box">
                  <h2>Restaurant Name2</h2>
                  <p>Name: Sam - Rating: 3</p>
                  <p>Comment: Cheap but not good</p>

                </div>
                <div className="restaurant-box">
                  <h2>Restaurant Name3</h2>
                  <p>Name: Mel - Rating: 2</p>
                  <p>Comment: Not clean</p>

                </div>  
              </div>
          </div>

          
      </div>

        <div>
          <h1>{handleText()}</h1>
          {Array(5).fill().map((_,index)=>
            number >= index +1 ?(

            <AiFillStar style = {{color:'orange' }} 
            onClick={()=>setNumber(index+1) }/>
            

            ): (

            <AiOutlineStar style={{color:'orange'}} 
            onClick={()=>setNumber(index+1) }/>
            )
          

          )}

          
          
          
        </div>

        <div>

        <input 
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          /> 

        </div>

        <textarea placeholder="Enter Comment..."> </textarea>

        
        <button>Submit</button>
        {/*<SubmitReview />*/}

      </div>
      
    </div>
  );
}

export default Review;
