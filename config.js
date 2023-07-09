
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCDDs6pEl8T4G3wy1egsQnXpm1hQXST38A",
  authDomain: "hack4bengal-b09b8.firebaseapp.com",
  projectId: "hack4bengal-b09b8",
  storageBucket: "hack4bengal-b09b8.appspot.com",
  messagingSenderId: "829869398648",
  appId: "1:829869398648:web:603a198c6e109df2f06b8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);