// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJrYQB24bBqijO20Rgi_-jhtG0EszI-EE",
    authDomain: "fitness-33e11.firebaseapp.com",
    projectId: "fitness-33e11",
    storageBucket: "fitness-33e11.appspot.com",
    messagingSenderId: "226951246145",
    appId: "1:226951246145:web:056f61664d4c758b88f1c0",
    measurementId: "G-QYJQ6122FH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);