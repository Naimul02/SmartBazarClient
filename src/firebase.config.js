/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1DOH4ERPID3SRjBmAwkUp1Z5XjZnO-Ws",
  authDomain: "smartbazer-d5739.firebaseapp.com",
  projectId: "smartbazer-d5739",
  storageBucket: "smartbazer-d5739.firebasestorage.app",
  messagingSenderId: "116289145943",
  appId: "1:116289145943:web:32f16ab4127c08a987e712",
  measurementId: "G-KFX0NFNTF7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
