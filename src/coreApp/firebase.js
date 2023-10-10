import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, logEvent as firebaseLogEvent } from "firebase/analytics";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUlaEZuirgv3JKydlBqHsEFidYPORCH78",
  authDomain: "musicbooking-82ed3.firebaseapp.com",
  projectId: "musicbooking-82ed3",
  storageBucket: "musicbooking-82ed3.appspot.com",
  messagingSenderId: "631168247975",
  appId: "1:631168247975:web:ab162412c63a21aec59382",
  measurementId: "G-2YT15KKS9F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

// Initialize Analytics
const analytics = getAnalytics(app);

const functionsInstance = getFunctions(app);
if (window.location.hostname === "localhost") {
  connectFunctionsEmulator(functionsInstance, "localhost", 5001);
}

// Adjusted logEvent function to use the initialized analytics object
const logEvent = (eventName, eventParams) => {
  firebaseLogEvent(analytics, eventName, eventParams);
};

export {
  app,
  auth,
  logEvent,
  firestore,
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
};
