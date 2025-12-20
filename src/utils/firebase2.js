// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase2/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkffvyHE8UJeOzv2Uk0p3oOMyq9hf67Nc",
  authDomain: "netflix-gpt-ed325.firebaseapp.com",
  projectId: "netflix-gpt-ed325",
  storageBucket: "netflix-gpt-ed325.firebasestorage.app",
  messagingSenderId: "124832168704",
  appId: "1:124832168704:web:78f1a7675f157f9cb511e5",
  measurementId: "G-7ZDKSZMHJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();