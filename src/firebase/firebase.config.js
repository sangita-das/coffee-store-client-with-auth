// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJQ6PKDhMZ16d3AEA0XGXDmOSOhwgrP_Q",
  authDomain: "coffee-store-a24f9.firebaseapp.com",
  projectId: "coffee-store-a24f9",
  storageBucket: "coffee-store-a24f9.appspot.com",
  messagingSenderId: "93278886215",
  appId: "1:93278886215:web:6c152e393e96676c799462"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;