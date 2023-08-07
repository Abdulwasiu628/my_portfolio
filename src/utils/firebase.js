import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjwqUTQZBms2ZzHKkfq4lgq8JKo5d6pkA",
  authDomain: "my-portfolio-319c3.firebaseapp.com",
  projectId: "my-portfolio-319c3",
  storageBucket:  "my-portfolio-319c3.appspot.com",
  messagingSenderId: "255770281762",
  appId: "1:255770281762:web:a27949fd67c7d25f5f877b"
  // measurementId: "G-FT3HYB90DP",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const firestore = getFirestore(app);

