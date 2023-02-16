// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmwQ3oHied0yIh3DpUs3pu-28MSO31luY",
  authDomain: "todoeiei.firebaseapp.com",
  projectId: "todoeiei",
  storageBucket: "todoeiei.appspot.com",
  messagingSenderId: "242539301411",
  appId: "1:242539301411:web:e68760f881149cbb7d3f96",
  measurementId: "G-T29LRE1RJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app