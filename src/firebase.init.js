// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDha4uKPRXERY6ysN2pCsOQBdBHCJEIXd4",
  authDomain: "phone-corner.firebaseapp.com",
  projectId: "phone-corner",
  storageBucket: "phone-corner.appspot.com",
  messagingSenderId: "1026852117667",
  appId: "1:1026852117667:web:cc4396d9f0ed7c7c59f316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = new getAuth(app);
export default auth;