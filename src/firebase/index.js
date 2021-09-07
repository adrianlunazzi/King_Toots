import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore";
import { collection, getDocs, where, query, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmT6R2ck5Zxxgd5wtD01e_cgY0g23c60w",
  authDomain: "king-toots.firebaseapp.com",
  projectId: "king-toots",
  storageBucket: "king-toots.appspot.com",
  messagingSenderId: "951033717775",
  appId: "1:951033717775:web:48e2bdb34cb41140872f7a",
};

initializeApp(firebaseConfig);
const db = getFirestore();

export const allItems = () => {
  const query = getDocs(collection(db, "products"));
  return query;
};
