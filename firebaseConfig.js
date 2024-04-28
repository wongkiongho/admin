// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFAs5FAushtnOmttaYMmJ0Kk09wzbPRrI",
  authDomain: "admin-6e2fb.firebaseapp.com",
  projectId: "admin-6e2fb",
  storageBucket: "admin-6e2fb.appspot.com",
  messagingSenderId: "324915407706",
  appId: "1:324915407706:web:3d0a2dc8510047ae622163",
  measurementId: "G-TXW87WJZC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);