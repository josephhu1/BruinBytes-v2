import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState}  from "react";
import { auth } from "../../firebase";
import { Form, Button, Card } from 'react-bootstrap'

const SignUp  = () => {
    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="sign-in-container">
            <form onSubmit={signUp}>
                <h1>Sign Up</h1>
                <input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;

