// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqGd_OH9245Trb2ffnSwHoYEYWsWib8PA",
  authDomain: "vastralay-fe9f4.firebaseapp.com",
  projectId: "vastralay-fe9f4",
  storageBucket: "vastralay-fe9f4.appspot.com",
  messagingSenderId: "190674918396",
  appId: "1:190674918396:web:49cedb47caa353ed327079",
  measurementId: "G-2K4TFE6GFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);