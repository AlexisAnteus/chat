import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBP1_hTfGOJE4ZIhbef6x5jIzkbBJsRKlQ",
    authDomain: "reactchat-bf633.firebaseapp.com",
    projectId: "reactchat-bf633",
    storageBucket: "reactchat-bf633.appspot.com",
    messagingSenderId: "105510015183",
    appId: "1:105510015183:web:cb439573a87c2c497127ba"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()