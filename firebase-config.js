// RunItUp-main/firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
  writeBatch,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// YOUR WEB APP'S FIREBASE CONFIGURATION (PASTE IT HERE!)
// This config should be copied directly from the Firebase Console (from Part 1, Step 3 above)
const firebaseConfig = {
  apiKey: "AIzaSyDk-n02q6hW_41tCnLw4oaYYjEh3codxcw",
  authDomain: "runit-91e6f.firebaseapp.com",
  projectId: "runit-91e6f",
  storageBucket: "runit-91e6f.firebasestorage.app",
  messagingSenderId: "1098137720623",
  appId: "1:1098137720623:web:48a6cb82eb37a08fd6b3da",
  measurementId: "G-4S4YFS4LZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services and export them
export const auth = getAuth(app);
export const db = getFirestore(app);
export {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
  writeBatch,
  getDoc,
};
