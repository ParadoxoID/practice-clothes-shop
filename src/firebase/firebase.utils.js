import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCe5xo8ztEv8QmKQlS5JHllOa05FNNeyqg',
  authDomain: 'clothes-store-f0f31.firebaseapp.com',
  projectId: 'clothes-store-f0f31',
  storageBucket: 'clothes-store-f0f31.appspot.com',
  messagingSenderId: '693003612021',
  appId: '1:693003612021:web:59fa465db076411036ed3c'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//! firestore === db
// Разные источники обзывают их по разному.
export const db = getFirestore(app);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// export default firebase;