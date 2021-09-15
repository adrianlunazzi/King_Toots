import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  getDocs,
  where,
  query,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";

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

export const allCategories = (Category) => {
  const q = collection(db, "products");
  const q2 = query(q, where("Category", "==", Category));
  const q3 = getDocs(q2);
  return q3;
};
export const productDetail = (id) => {
  const q = doc(db, "products", id);
  const q2 = getDoc(q);
  return q2;
};

export const addOrder = (cart, totalCart, buyer, date) => {
  const orderTotal = addDoc(collection(db, "orders"), {
    cart: cart,
    totalcart: totalCart,
    buyer: buyer,
    date: date,
  });
  return orderTotal;
};
