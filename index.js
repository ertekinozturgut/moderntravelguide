import firebase from "firebase/app";
import "firebase/database";
//const initializeApp = require('firebase/app');
//const getAnalytics = require('firebase/analytics');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFJ30EJvxJ7aUkLpEwOgc5au41dIIbZMw",
    authDomain: "modern-traveler.firebaseapp.com",
    projectId: "modern-traveler",
    storageBucket: "modern-traveler.appspot.com",
    messagingSenderId: "867829782611",
    appId: "1:867829782611:web:764669f741296cbcda8ea6",
    measurementId: "G-7P77ZX74FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

