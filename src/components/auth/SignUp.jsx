import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState}  from "react";
import { auth } from "../../firebase";

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
    <div className="SignUpPage">
        <div className="auth-form-container">
            <h2>Sign Up</h2>
            <form className="register-form" onSubmit={signUp}>
            <label htmlFor="email">email</label>
                <input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
            <label htmlFor="password">password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
    );
};

export default SignUp;

