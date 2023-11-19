// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD84WOtqfR9RvZBK9kvZAiAzUVb-CCVilY",
  authDomain: "netflixgpt-efeb8.firebaseapp.com",
  projectId: "netflixgpt-efeb8",
  storageBucket: "netflixgpt-efeb8.appspot.com",
  messagingSenderId: "703551682702",
  appId: "1:703551682702:web:d0545d567399b2b92971df",
  measurementId: "G-7KCZK40NJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);