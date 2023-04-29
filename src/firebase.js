import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMx_cesOAptM5xFndJlUzlXSeiK1Q3ScY",
  authDomain: "to-do-crud-25a6b.firebaseapp.com",
  projectId: "to-do-crud-25a6b",
  storageBucket: "to-do-crud-25a6b.appspot.com",
  messagingSenderId: "223968666444",
  appId: "1:223968666444:web:c7c82f080ce66d4f7125e9",
  measurementId: "G-H91RDH4L7Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };