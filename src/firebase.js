// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpWu1UeEzUTfHqldyRcaayp2BoG2_BKbM",
  authDomain: "hotflix-auth.firebaseapp.com",
  projectId: "hotflix-auth",
  storageBucket: "hotflix-auth.appspot.com",
  messagingSenderId: "366473849210",
  appId: "1:366473849210:web:8b01377ab3302b33b74ec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};