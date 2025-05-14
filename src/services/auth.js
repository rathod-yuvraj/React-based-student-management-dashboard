// src/services/auth.js
import { initializeApp } from "firebase/app";
import {

  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";


const firebaseConfig = {

  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID

  apiKey: "AIzaSyBzGoab14E5WUdrjsQFdrJEyE5qR60_Bik",
  authDomain: "studenttrack-965dd.firebaseapp.com",

  projectId: "studenttrack-965dd",
  storageBucket: "studenttrack-965dd.firebasestorage.app",
  messagingSenderId: "1092962855016",
  appId: "1:1092962855016:web:c0b83cd84f0e03ba43f3dd",
  measurementId: "G-GC2V874W77"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged  // Export this
};