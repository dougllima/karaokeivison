import firebase from "firebase";

var config = {
  apiKey: "AIzaSyA0e_TzAHGSCrfOKsifN4npgLHkdUmT0PM",
  authDomain: "karaokeivison.firebaseapp.com",
  databaseURL: "https://karaokeivison.firebaseio.com",
  projectId: "karaokeivison",
  storageBucket: "karaokeivison.appspot.com",
  messagingSenderId: "989829462430"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
