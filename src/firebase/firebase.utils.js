import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
  apiKey: "AIzaSyDjnIBN8Bj9O_1SNW6LWZuFC6eOlj537bc",
  authDomain: "crwn-db-da265.firebaseapp.com",
  databaseURL: "https://crwn-db-da265.firebaseio.com",
  projectId: "crwn-db-da265",
  storageBucket: "crwn-db-da265.appspot.com",
  messagingSenderId: "485376215986",
  appId: "1:485376215986:web:61846c2b3b7f4b24c372ab"
};

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
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;