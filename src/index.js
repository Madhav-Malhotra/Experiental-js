import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkVLWc30wD640m3xeyFWQgx3s-lo_S5UA",
  authDomain: "experiential-ly.firebaseapp.com",
  projectId: "experiential-ly",
  storageBucket: "experiential-ly.appspot.com",
  messagingSenderId: "67933253872",
  appId: "1:67933253872:web:87a16fca23f8b8bd861235",
  measurementId: "G-Z2S08FLN32"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
