// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6jXp0PEwNnA71wlTHIllGrQF95nnzwZs",
  authDomain: "notime-authentication-60aee.firebaseapp.com",
  projectId: "notime-authentication-60aee",
  storageBucket: "notime-authentication-60aee.appspot.com",
  messagingSenderId: "23079490872",
  appId: "1:23079490872:web:c897e9c72b9ff0f9841dcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

