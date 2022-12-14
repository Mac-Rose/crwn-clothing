import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyC7dIgICho9XTbdxM7VmJ7lCts6iEQyoj4",
  authDomain: "crwn-db-92c00.firebaseapp.com",
  projectId: "crwn-db-92c00",
  storageBucket: "crwn-db-92c00.appspot.com",
  messagingSenderId: "308790666221",
  appId: "1:308790666221:web:193a1afc0e87cf11693de4",
  measurementId: "G-RKWB2PD7DY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
