import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAFxBzF39fiX5EGQAv76oNCt_X0OsNwepg",
        authDomain: "ecommerce-react-a27ac.firebaseapp.com",
    databaseURL: "https://ecommerce-react-a27ac.firebaseio.com",
    projectId: "ecommerce-react-a27ac",
    storageBucket: "ecommerce-react-a27ac.appspot.com",
    messagingSenderId: "536224327573",
    appId: "1:536224327573:web:8287db601feff3b6b0f89c",
    measurementId: "G-84NWCJEVGB"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

