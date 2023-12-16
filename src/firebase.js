
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAfdzYDkxDQEBPJf7R-RcQZfjfLtnm_h1E",
  authDomain: "total-reef-377517.firebaseapp.com",
  projectId: "total-reef-377517",
  storageBucket: "total-reef-377517.appspot.com",
  messagingSenderId: "654376945500",
  appId: "1:654376945500:web:add281f14d115467b26399"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);