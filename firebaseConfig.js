// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDxzCquK6eaR93BAZfaWJ-5eDHv2PlOrCw",
    authDomain: "argenstore-afeb4.firebaseapp.com",
    databaseURL: "https://argenstore-afeb4-default-rtdb.firebaseio.com",
    projectId: "argenstore-afeb4",
    storageBucket: "argenstore-afeb4.appspot.com",
    messagingSenderId: "564082422321",
    appId: "1:564082422321:web:64529d6f05e5211d2a1b10"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)