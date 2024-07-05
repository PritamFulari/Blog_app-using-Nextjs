import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAAy_cQoIBexW4GgWPyo6RhUkkbqZ3W_Og",
    authDomain: "blog-app-837fc.firebaseapp.com",
    projectId: "blog-app-837fc",
    storageBucket: "blog-app-837fc.appspot.com",
    messagingSenderId: "185241066910",
    appId: "1:185241066910:web:91ce7a778265f901a54a8f"
  };
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


