// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "
  AIzaSyDXCLH2nDGxuQatFQ9jqM-zGXzYZz4vzK8",
  authDomain: "instagram-nextjs-cdd8c.firebaseapp.com",
  projectId: "instagram-nextjs-cdd8c",
  storageBucket: "instagram-nextjs-cdd8c.appspot.com",
  messagingSenderId: "1080686897363",
  appId: "1:1080686897363:web:f0a96bb39080cc613b0c26"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
