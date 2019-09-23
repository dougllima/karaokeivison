import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Modal, Paper } from "@material-ui/core";

import firebase from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  }
}));

const LoginMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <React.Fragment>
      <Button color="inherit" onClick={e => setAnchorEl(e.currentTarget)}>
        Login
      </Button>
      <Modal
        className={classes.modal}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <Paper className={classes.paper}>
          <StyledFirebaseAuth
            uiConfig={{
              signInFlow: "popup",
              signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
              ],
              callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                  var user = authResult.user;
                  console.log(user);
                  // var credential = authResult.credential;
                  // var isNewUser = authResult.additionalUserInfo.isNewUser;
                  // var providerId = authResult.additionalUserInfo.providerId;
                  // var operationType = authResult.operationType;

                  setAnchorEl(null);
                  // Do something with the returned AuthResult.
                  // Return type determines whether we continue the redirect automatically
                  // or whether we leave that to developer to handle.
                  return false;
                },
                signInFailure: function(error) {
                  // Some unrecoverable error occurred during sign-in.
                  // Return a promise when error handling is completed and FirebaseUI
                  // will reset, clearing any UI. This commonly occurs for error code
                  // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
                  // occurs. Check below for more details on this.
                  // return handleUIError(error);
                  console.log(error);
                },
                uiShown: function() {
                  // The widget is rendered.
                }
              }
            }}
            firebaseAuth={firebase.auth()}
          />
        </Paper>
      </Modal>
    </React.Fragment>
  );
};

export default LoginMenu;
