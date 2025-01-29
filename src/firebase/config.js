// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB2eK4Vc1A9FM_M0mCMq9_wWM628w3YfIQ",
  authDomain: "journal-federico-isa.firebaseapp.com",
  projectId: "journal-federico-isa",
  storageBucket: "journal-federico-isa.firebasestorage.app",
  messagingSenderId: "645183602723",
  appId: "1:645183602723:web:1aa455eb5bd8658eabb196",
  measurementId: "G-YMYMBWBMKX"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );