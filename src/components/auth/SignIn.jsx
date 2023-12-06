import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast.success("Success! Redirecting to homepage...");
                setTimeout(() => navigate("/"), 2000);
            })
            .catch((error) => {
                toast.error("Login failed. Please try again.");
            });
    };
    const navigateToSignUp = () => {
        navigate('/SignUp');
    }
    return (
        <div className="LoginPage">
            <ToastContainer />
            <div className="auth-form-container">
                <h2>Log In</h2>
                <form className="login-form" onSubmit={signIn}>
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
                    <button type="submit">Log In</button>
                </form>
                <button onClick={navigateToSignUp} className="signup-link">
                    Don't have an account? Create one!
                </button>
            </div>

        </div>
    );
};

export default SignIn;
