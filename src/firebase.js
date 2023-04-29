import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVcE9GYGrHTuzkDA4zl8brIgUHDkY5l-E",
    authDomain: "crud-firebase-2f892.firebaseapp.com",
    databaseURL: "https://crud-firebase-2f892-default-rtdb.firebaseio.com",
    projectId: "crud-firebase-2f892",
    storageBucket: "crud-firebase-2f892.appspot.com",
    messagingSenderId: "854498088236",
    appId: "1:854498088236:web:a7eb95c0e4ad5114bf4889"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };