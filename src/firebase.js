// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi7xyJKnx6lHO54DflXe-_CwRtWUmwaes",
  authDomain: "e-clone-ea21a.firebaseapp.com",
  databaseURL:
    "https://e-clone-ea21a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "e-clone-ea21a",
  storageBucket: "e-clone-ea21a.firebasestorage.app",
  messagingSenderId: "278006934721",
  appId: "1:278006934721:web:185f517aa03fdb5150f840",
  measurementId: "G-52X18T1R4Y",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
