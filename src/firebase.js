
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
import { getDatabase } from "@firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAhbn1p4Le-1l4AtryR3gRMh_uWfBl2mm4",
  authDomain: "barbar-landing.firebaseapp.com",
  projectId: "barbar-landing",
  storageBucket: "barbar-landing.appspot.com",
  messagingSenderId: "396352477548",
  appId: "1:396352477548:web:f34fff593df8101f65bb49",
  measurementId: "G-NWZLRVCEQP"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
export  const firestore = getFirestore()
export const db = getDatabase(firebase);
