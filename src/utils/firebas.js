// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOfPYCi9_gSsiualVI9_pYK7FA-34xeWo",
  authDomain: "netflixalt29.firebaseapp.com",
  projectId: "netflixalt29",
  storageBucket: "netflixalt29.appspot.com",
  messagingSenderId: "67546515979",
  appId: "1:67546515979:web:7505700abc635fc677950e",
  measurementId: "G-CNQM93XWCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

// Export the auth object as a named export
export { auth }; // Named export