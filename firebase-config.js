// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk-n02q6hW_41tCnLw4oaYYjEh3codxcw",
  authDomain: "runit-91e6f.firebaseapp.com",
  projectId: "runit-91e6f",
  storageBucket: "runit-91e6f.firebasestorage.app",
  messagingSenderId: "1098137720623",
  appId: "1:1098137720623:web:48a6cb82eb37a08fd6b3da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
