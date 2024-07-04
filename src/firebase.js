import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyAbPzbK1bIsp98lrwZ8wJ-yChrEThoEyf8",
    authDomain: "js-projektas.firebaseapp.com",
    projectId: "js-projektas",
    storageBucket: "js-projektas.appspot.com",
    messagingSenderId: "804224253192",
    appId: "1:804224253192:web:7b4b08aa35a942135a00bd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, collection, addDoc, getDocs, db, deleteDoc, doc };