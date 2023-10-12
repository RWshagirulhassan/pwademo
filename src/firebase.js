import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXSEoZfWkTj78bOnR1lR2-1Cc5J9P7E14",
  authDomain: "demopwa-3b561.firebaseapp.com",
  projectId: "demopwa-3b561",
  storageBucket: "demopwa-3b561.appspot.com",
  messagingSenderId: "610785593275",
  appId: "1:610785593275:web:9ff80a30819874eea8a69e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
