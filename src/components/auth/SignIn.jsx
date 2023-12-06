import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState}  from "react";
import { auth } from "../../firebase";

const SignIn = () => {
    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
    <div className="LoginPage">
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
        </div>
    </div>
    );
};

export default SignIn;
