import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();


    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                toast.success("Account successfully created! Redirecting to homepage...");
                setTimeout(() => navigate("/"), 2000);
                return updateProfile(userCredential.user, {
                    displayName: name
                });
            })
            .then(() => {
                console.log("User registered and name set");
            })
            .catch((error) => {
                toast.error("Sign up failed. Please try again. Make sure your password is at least 6 characters long.");
                console.log(error);
            });
    };

    return (
        <div className="SignUpPage">
            <ToastContainer />
            <div className="auth-form-container">
                <h2>Sign Up</h2>
                <form className="register-form" onSubmit={signUp}>
                    <label htmlFor="name">name</label>
                    <input
                        type="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
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

