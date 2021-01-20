import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyALx8lTgkF7pcERAWyGHeqYvt8AS-uBfcw',
  authDomain: 'react-e-commerce-db-67efb.firebaseapp.com',
  databaseURL: 'https://react-e-commerce-db-67efb.firebaseio.com',
  projectId: 'react-e-commerce-db-67efb',
  storageBucket: 'react-e-commerce-db-67efb.appspot.com',
  messagingSenderId: '57826735813',
  appId: '1:57826735813:web:4452ffccabf01ee0f2e2ac',
  measurementId: 'G-KW3L7BNRGE',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  /* 
    Use user auth object to querry our db for a document reference object that was assigned 
    by our authentication library which is kept on the firebase console. 
  */
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  /*
    A "snapShot" is a reference object given by firebase.
    Even absent a user object in the db. Firebase will always return a "snapShot" object
    to use for checking if a user exists with "!snapShot.exists".
   */
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const getUserCartRef = async (userId) => {
  const cartsRef = firestore.collection('carts').where('userId', '==', userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection('carts').doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
};

// This function is to programmatically add data to firebase db.
/*
  export const addCollectionAndDocuments = async (
    collectionKey, 
    objectsToAdd
  ) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    return await batch.commit();
  };
*/

// Pull and convert data from firebase db
export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
