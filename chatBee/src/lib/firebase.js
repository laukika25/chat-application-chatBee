import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
authDomain: "reactchat-5fb2d.firebaseapp.com",
  projectId: "reactchat-5fb2d",
  storageBucket: "reactchat-5fb2d.appspot.com",
  messagingSenderId: "828510901766",
  appId: "1:828510901766:web:866f1b0a8483c2e8ce9587"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)