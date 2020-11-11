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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
