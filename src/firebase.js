// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN6j2PRvNxFjSsoWei9zGM0ADyezqTjpM",
  authDomain: "react-auth-tutorial-3e939.firebaseapp.com",
  projectId: "react-auth-tutorial-3e939",
  storageBucket: "react-auth-tutorial-3e939.appspot.com",
  messagingSenderId: "118054822736",
  appId: "1:118054822736:web:c8751f6d058e11e90cc255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);