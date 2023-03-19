import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzN5bQlQ4LkTgk-46KqpLHlRkSbIP4kxg",
  authDomain: "react-29600.firebaseapp.com",
  projectId: "react-29600",
  storageBucket: "react-29600.appspot.com",
  messagingSenderId: "737801305668",
  appId: "1:737801305668:web:19531b06c2fa11d4d50611",
  measurementId: "G-H5WJ1QD73L"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

