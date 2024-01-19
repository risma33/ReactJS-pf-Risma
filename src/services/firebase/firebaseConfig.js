
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC41YwgPqntJJ3ANQiahWopcapy47n8DKw",
  authDomain: "reactjs-pf-risma.firebaseapp.com",
  projectId: "reactjs-pf-risma",
  storageBucket: "reactjs-pf-risma.appspot.com",
  messagingSenderId: "835576023315",
  appId: "1:835576023315:web:4d3b6e32069bb923dc72e6"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)