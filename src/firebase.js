// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// 🔑 Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsHgxJ0vGU8pS6G11sxhc4GjoduRBb5hs",
  authDomain: "filipinoemigrantsdb-fc7b1.firebaseapp.com",
  projectId: "filipinoemigrantsdb-fc7b1",
  storageBucket: "filipinoemigrantsdb-fc7b1.firebasestorage.app",
  messagingSenderId: "308895962405",
  appId: "1:308895962405:web:792aec6be7bb32fe1976cc",
  measurementId: "G-0NTF2E84ZF"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Firestore database
export const db = getFirestore(app);

// ✅ Authentication (optional)
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// ✅ Analytics (optional)
export const analytics = getAnalytics(app);
