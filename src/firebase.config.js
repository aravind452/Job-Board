// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT71CG_4-Y1aQg14muwaPkBoUM8_tw1Y8",
  authDomain: "online-job-board-aaff8.firebaseapp.com",
  projectId: "online-job-board-aaff8",
  storageBucket: "online-job-board-aaff8.appspot.com",
  messagingSenderId: "926417520147",
  appId: "1:926417520147:web:3e2831c7602a1f9aaee1e6",
  measurementId: "G-7VCWW99415",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
