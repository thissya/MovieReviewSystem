// filepath: e:\Movie Review System\Client\src\firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWeb3ktXlZZtdA5pzo_w6-V8HurABCDak",
    authDomain: "moviereviewsystemsmt.firebaseapp.com",
    projectId: "moviereviewsystemsmt",
    storageBucket: "moviereviewsystemsmt.appspot.com",
    messagingSenderId: "666302042564",
    appId: "1:666302042564:web:c186810670b05209b8d491",
    measurementId: "G-7Z5M9E3103",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();