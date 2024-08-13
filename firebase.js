// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2_7guQ6cuPjB3X-bn1mxNvi0XinVhes0",
  authDomain: "reacts-note.firebaseapp.com",
  projectId: "reacts-note",
  storageBucket: "reacts-note.appspot.com",
  messagingSenderId: "435714986064",
  appId: "1:435714986064:web:97f5dd14c317fd6aba4155"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")