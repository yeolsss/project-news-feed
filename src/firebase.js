// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3H7yTF3mzOa8gNX2WUzw4md_5bho9IUE",
  authDomain: "newsfeed-project-ee8ab.firebaseapp.com",
  projectId: "newsfeed-project-ee8ab",
  storageBucket: "newsfeed-project-ee8ab.appspot.com",
  messagingSenderId: "801691482353",
  appId: "1:801691482353:web:791f3605d4e7e1465d9150",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };
