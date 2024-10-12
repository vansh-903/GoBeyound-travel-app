// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAAXAyyt_iFpMIxHKOQXif6nVkJOFjlQTI",
  authDomain: "travel-app-8e961.firebaseapp.com",
  projectId: "travel-app-8e961",
  storageBucket: "travel-app-8e961.appspot.com",
  messagingSenderId: "649909402448",
  appId: "1:649909402448:web:3f1aa6cf63527f520b8a55",
  databaseURL: 'https://travel-app-8e961-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db,app };