// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9gfESZw03bUM0W2e2xwdsp6iyvC7trnA",
  authDomain: "home-learning-rh.firebaseapp.com",
  projectId: "home-learning-rh",
  storageBucket: "home-learning-rh.appspot.com",
  messagingSenderId: "956299826059",
  appId: "1:956299826059:web:e2f96eaf0c7ddd0c32d58e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;