import firebase from "firebase/app";
import "firebase/auth";
import { firebaseImpl } from "../lib/firebase";

const providers = {
  Facebook: new firebase.auth.FacebookAuthProvider(),
  Email: new firebase.auth.EmailAuthProvider()
};

export function LoginFunc(method, callback, callbackError) {
  if (method === "Anonymously") {
    firebase
      .auth()
      .signInAnonymously()
      .then(result => handleLogin(method, result))
      .catch(function(error) {
        console.log(error);
      });
  } else
    firebase
      .auth()
      .signInWithPopup(providers[method])
      .then(result => handleLogin(method, result))
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        callbackError({ errorCode, errorMessage, email, credential });
      });
}

const handleLogin = (method, result) => {
  if (method != "Anonymously")
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;

  // The signed-in user info.
  var user = result.user;
  console.log(user);
  callback(user);
};
