// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMy_Rd72-OGbOg8ZiYRnJ1Tg0I-viGXzA",
    authDomain: "assignmentindex.firebaseapp.com",
    projectId: "assignmentindex",
    storageBucket: "assignmentindex.appspot.com",
    messagingSenderId: "436777522346",
    appId: "1:436777522346:web:f669448a47f29520e06cd3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)