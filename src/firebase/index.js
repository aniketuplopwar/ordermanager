import firebase from 'firebase'
import '@firebase/firestore';
import FIREBASE_CONFIG from './configuration';
firebase.initializeApp(FIREBASE_CONFIG);
const store = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export {
    store,
    provider,
    auth
}