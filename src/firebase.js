// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqHpPR_6GmEtAdLig3BZOwB6rqbVudiAA",
  authDomain: "master-gutters-be1e2.firebaseapp.com",
  projectId: "master-gutters-be1e2",
  storageBucket: "master-gutters-be1e2.appspot.com",
  messagingSenderId: "259984631613",
  appId: "1:259984631613:web:1706b9f43355f6f087c754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;