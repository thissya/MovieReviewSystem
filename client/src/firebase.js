// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWeb3ktXlZZtdA5pzo_w6-V8HurABCDak",
  authDomain: "moviereviewsystemsmt.firebaseapp.com",
  projectId: "moviereviewsystemsmt",
  storageBucket: "moviereviewsystemsmt.firebasestorage.app",
  messagingSenderId: "666302042564",
  appId: "1:666302042564:web:c186810670b05209b8d491",
  measurementId: "G-7Z5M9E3103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);