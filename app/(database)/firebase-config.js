import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyB11cJaXgdf8YMWoiwoT6UFiLoAAqeyGJk",
  authDomain: "chatapp-e50af.firebaseapp.com",
  projectId: "chatapp-e50af",
  storageBucket: "chatapp-e50af.appspot.com",
  messagingSenderId: "952545200156",
  appId: "1:952545200156:web:f3e3870660f39bd4ef37d9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore()

export {app, auth, db, getDocs,signInWithEmailAndPassword, collection, addDoc, getFirestore, getAuth, createUserWithEmailAndPassword }