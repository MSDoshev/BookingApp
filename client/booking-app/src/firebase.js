// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  browserLocalPersistence,
  setPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoBz8zpOMvEOlVckam1xDQX4dbkMllPFs",
  authDomain: "bookingapp-effea.firebaseapp.com",
  databaseURL:
    "https://bookingapp-effea-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookingapp-effea",
  storageBucket: "bookingapp-effea.appspot.com",
  messagingSenderId: "629485352111",
  appId: "1:629485352111:web:ad29e990a28463f1ab105a",
  measurementId: "G-2YK7DBRM4K",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set persistence globally
setPersistence(auth, browserLocalPersistence);

auth.onAuthStateChanged(() => {});
