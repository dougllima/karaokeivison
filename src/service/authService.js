import firebase from "firebase/app";
import "firebase/auth";
import firebaseImpl from "../lib/firebase";

export default class authService {
  provider = new firebaseImpl.auth.FacebookAuthProvider();

  Login(callback, callbackError) {
    firebase
      .auth()
      .signInWithPopup(this.provider)
      .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        callback(user);
      })
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
}
