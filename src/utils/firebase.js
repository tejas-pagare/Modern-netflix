// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD97PVS65TxV56FIgqWi_zXD4NqjYoGsqc",
  authDomain: "my-netflix-d1434.firebaseapp.com",
  projectId: "my-netflix-d1434",
  storageBucket: "my-netflix-d1434.appspot.com",
  messagingSenderId: "241134895009",
  appId: "1:241134895009:web:9e9943c59bc87869c4d5e0",
  measurementId: "G-QN811JZMYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();