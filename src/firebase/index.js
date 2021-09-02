// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmT6R2ck5Zxxgd5wtD01e_cgY0g23c60w",
  authDomain: "king-toots.firebaseapp.com",
  projectId: "king-toots",
  storageBucket: "king-toots.appspot.com",
  messagingSenderId: "951033717775",
  appId: "1:951033717775:web:48e2bdb34cb41140872f7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebaseConfig.firestore(app);
}
