// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADkTo8Du0tfHXxdjwuGYfXhiIVrM_Yx_s",
  authDomain: "yahya-syabani-ecommerce.firebaseapp.com",
  projectId: "yahya-syabani-ecommerce",
  storageBucket: "yahya-syabani-ecommerce.appspot.com",
  messagingSenderId: "190656333765",
  appId: "1:190656333765:web:d22641e1c4b6571ad5edac",
  measurementId: "G-BJ56PKB506",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
