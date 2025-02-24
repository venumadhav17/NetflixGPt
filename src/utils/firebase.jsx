// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHEAz2JRg6Q7PvdKBAnGNeoX3F4SvhGUk",
  authDomain: "netflixgpt-db77c.firebaseapp.com",
  projectId: "netflixgpt-db77c",
  storageBucket: "netflixgpt-db77c.firebasestorage.app",
  messagingSenderId: "295951026938",
  appId: "1:295951026938:web:1188a585741fd0a8e65743",
  measurementId: "G-ZT59CLQ3D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
