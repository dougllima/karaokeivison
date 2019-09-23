import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var config = {
  apiKey: "AIzaSyA0e_TzAHGSCrfOKsifN4npgLHkdUmT0PM",
  authDomain: "karaokeivison.firebaseapp.com",
  databaseURL: "https://karaokeivison.firebaseio.com",
  projectId: "karaokeivison",
  storageBucket: "karaokeivison.appspot.com",
  messagingSenderId: "989829462430"
};

let firebaseImpl;

if (!firebase.apps.length) firebaseImpl = firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
