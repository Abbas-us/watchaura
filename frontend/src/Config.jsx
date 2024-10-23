// Config.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDf-NsCMV-uaf0XhQ7noblaqLClMy_8pMY",
  authDomain: "finalproject-c9898.firebaseapp.com",
  projectId: "finalproject-c9898",
  storageBucket: "finalproject-c9898.appspot.com",
  messagingSenderId: "318745683098",
  appId: "1:318745683098:web:c2ff013d6e84587ee2ab23",
  measurementId: "G-V1SZSKM7EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the initialized services
export { auth, db, storage };
