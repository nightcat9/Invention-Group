// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIM2LrJzi7b7i1V-2fxzlxxIf__3W8O9c",
  authDomain: "theinventiongroup-ecbd3.firebaseapp.com",
  projectId: "theinventiongroup-ecbd3",
  storageBucket: "theinventiongroup-ecbd3.appspot.com",
  messagingSenderId: "787217068811",
  appId: "1:787217068811:web:81bc037c3d5a1b68d1e80e",
  measurementId: "G-ED68HTFNRF"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
//export const db = getDatabase(app);
export const firestore = getFirestore(app);


