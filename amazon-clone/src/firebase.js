import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaSOChIUSxN05buJql2ycaWHNLJRfOBlE",
  authDomain: "e-commerce-fd54a.firebaseapp.com",
  projectId: "e-commerce-fd54a",
  storageBucket: "e-commerce-fd54a.appspot.com",
  messagingSenderId: "39486902566",
  appId: "1:39486902566:web:fbf9454a95863e2101b1e7"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };