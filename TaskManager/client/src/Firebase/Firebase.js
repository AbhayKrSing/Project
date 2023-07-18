import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnoasEKNk-CtwFawWeoZQT-41RnuvWvOw",
    authDomain: "taskmini-dev.firebaseapp.com",
    projectId: "taskmini-dev",
    storageBucket: "taskmini-dev.appspot.com",
    messagingSenderId: "203133692064",
    appId: "1:203133692064:web:69b0273115e5bfc05a01c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const CreateUserWithEmailAndPassword = createUserWithEmailAndPassword;
export const SignInWithEmailAndPassword = signInWithEmailAndPassword
export const OnAuthStateChanged = onAuthStateChanged