// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5XU01tI5ywV7Gei7PciQR_5MPIJiO-m8",
  authDomain: "yja-registration.firebaseapp.com",
  projectId: "yja-registration",
  storageBucket: "yja-registration.appspot.com",
  messagingSenderId: "572360088150",
  appId: "1:572360088150:web:8b466b471901c28b9b79f7",
  measurementId: "G-7ZQFQLXY6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);