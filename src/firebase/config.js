// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvxaBnzBgAzH89znxVfl7J7xmlLNXOWCE",
  authDomain: "juegos-arkham.firebaseapp.com",
  projectId: "juegos-arkham",
  storageBucket: "juegos-arkham.appspot.com",
  messagingSenderId: "491008597990",
  appId: "1:491008597990:web:2c2f5c9c1b643116374027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);