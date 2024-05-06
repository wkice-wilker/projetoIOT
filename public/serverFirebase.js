// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCErjagOsGJU4wbwz3NKcVZ06JDFTk-lCU",
  authDomain: "aquasense-pi6.firebaseapp.com",
  projectId: "aquasense-pi6",
  storageBucket: "aquasense-pi6.appspot.com",
  messagingSenderId: "297868725687",
  appId: "1:297868725687:web:7eaf0bff0edb44ba0f2c32",
  measurementId: "G-L7EY6DCGN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

