import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCABkovo-4WI5_LlXO7agDVYumZNDN1iKc",
  authDomain: "buyme-db.firebaseapp.com",
  projectId: "buyme-db",
  storageBucket: "buyme-db.appspot.com",
  messagingSenderId: "146728115253",
  appId: "1:146728115253:web:012703f7defaaddf9ea57c",
  measurementId: "G-HDR9YBR3CN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;