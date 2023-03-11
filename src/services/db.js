import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

let db = false;

export const getDb = () => {
    if(!db){
        const firebaseConfig = {
            apiKey: process.env.REACT_APP_apiKey,
            authDomain: "theinventiongroup-ecbd3.firebaseapp.com",
            projectId: "theinventiongroup-ecbd3",
            storageBucket: "theinventiongroup-ecbd3.appspot.com",
            messagingSenderId: "787217068811",
            appId: "1:787217068811:web:81bc037c3d5a1b68d1e80e",
            measurementId: "G-ED68HTFNRF"
        }

        const app = initializeApp(firebaseConfig)

        db = getFirestore(app)
    }

    return db
}