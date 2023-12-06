import React, { createContext, useState, useEffect } from 'react';
import { auth } from'../firebase';
import {signOut } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("Sign out successful");
        }).catch((error) => console.log(error));
    };

    return (
        <AuthContext.Provider value={{ currentUser, userSignOut }}>
            {children}
        </AuthContext.Provider>
    );
};
