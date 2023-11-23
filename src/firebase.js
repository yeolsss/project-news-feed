// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBio91Wjfmc8EarY3UlNE-RuDTDxlkTUOc",
  authDomain: "team-newsfeed.firebaseapp.com",
  projectId: "team-newsfeed",
  storageBucket: "team-newsfeed.appspot.com",
  messagingSenderId: "23732683867",
  appId: "1:23732683867:web:9c67bb9146bc0eda4b2b7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
