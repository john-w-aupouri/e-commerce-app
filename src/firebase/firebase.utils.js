import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyALx8lTgkF7pcERAWyGHeqYvt8AS-uBfcw",
  authDomain: "react-e-commerce-db-67efb.firebaseapp.com",
  databaseURL: "https://react-e-commerce-db-67efb.firebaseio.com",
  projectId: "react-e-commerce-db-67efb",
  storageBucket: "react-e-commerce-db-67efb.appspot.com",
  messagingSenderId: "57826735813",
  appId: "1:57826735813:web:4452ffccabf01ee0f2e2ac",
  measurementId: "G-KW3L7BNRGE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
