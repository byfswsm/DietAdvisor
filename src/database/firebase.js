// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCMKeW61Pviq1x1DUIwBlBxrrpeeBpUiEc",
  authDomain: "diet-advisor-4cc61.firebaseapp.com",
  projectId: "diet-advisor-4cc61",
  storageBucket: "diet-advisor-4cc61.appspot.com",
  messagingSenderId: "745014827406",
  appId: "1:745014827406:web:ff9517a6f9f243b7a1acdf",
  measurementId: "G-KTD9C98CJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            localStorage.setItem("userName", result.user.displayName);
            localStorage.setItem("userPhoto", result.user.photoURL);
        })
        .then(() => {
            window.location.reload(false);
        })
        .catch((err) => {
            console.log(err); 
        })
};

export const signOutWithGoogle = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userPhoto");
    signOut(auth)
        .then(() => {
            window.location.reload(false);
        })
}