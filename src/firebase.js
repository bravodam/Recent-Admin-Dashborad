
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDqFLiC8lAjG7g18_EjFvQVHFuNAujamro",
  authDomain: "admin-ad6ee.firebaseapp.com",
  projectId: "admin-ad6ee",
  storageBucket: "admin-ad6ee.appspot.com",
  messagingSenderId: "892825657220",
  appId: "1:892825657220:web:8dbce642fe710465e687d1",
  measurementId: "G-FWSBD58MKS"
};

const app = initializeApp(firebaseConfig);
export  const auth = getAuth();
export const db = getFirestore(app)
export const storage = getStorage(app)