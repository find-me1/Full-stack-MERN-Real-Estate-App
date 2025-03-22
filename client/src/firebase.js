// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2a3aa.firebaseapp.com",
  projectId: "mern-estate-2a3aa",
  storageBucket: "mern-estate-2a3aa.firebasestorage.app",
  messagingSenderId: "513928996582",
  appId: "1:513928996582:web:084a9e88db082d2b297d27",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
