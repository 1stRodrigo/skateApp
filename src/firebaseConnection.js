import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDyq33vPmvp8wjU5-ausyx9mPpZfDlWpHA",
  authDomain: "skateapp-fec81.firebaseapp.com",
  databaseURL: "https://skateapp-fec81-default-rtdb.firebaseio.com",
  projectId: "skateapp-fec81",
  storageBucket: "skateapp-fec81.appspot.com",
  messagingSenderId: "350856204932",
  appId: "1:350856204932:web:bfb9e3af0119aeb9b5a8d1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };