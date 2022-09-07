// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDa2ILM45BBm9ONWjfqrnwm2knP14yy8w",
  authDomain: "book-e1a92.firebaseapp.com",
  projectId: "book-e1a92",
  storageBucket: "book-e1a92.appspot.com",
  messagingSenderId: "924648213043",
  appId: "1:924648213043:web:b33a9692c3157ba97bb146",
  measurementId: "G-KQ7E226L7W"
};

// Initialize Firebase

const auth = getAuth(app) ;
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app)

export {auth,database}