import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAQu7cMJdAvrSM809LBcSXNPhCAH0oIwEw",
    authDomain: "login-form-31099.firebaseapp.com",
    projectId: "login-form-31099",
    storageBucket: "login-form-31099.appspot.com",
    messagingSenderId: "286741604099",
    appId: "1:286741604099:web:d89b353d08eb2ee036eb36"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);