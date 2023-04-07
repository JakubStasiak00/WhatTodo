// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL6T2dfzayLNleEcceFIHU2OaXDGn74QA",
  authDomain: "what-todo-32ecc.firebaseapp.com",
  projectId: "what-todo-32ecc",
  storageBucket: "what-todo-32ecc.appspot.com",
  messagingSenderId: "782848182938",
  appId: "1:782848182938:web:ec8b241cf3cc9b201ead23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };