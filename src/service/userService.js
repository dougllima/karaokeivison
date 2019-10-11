import { firestore } from "../lib/firebase";

export const getProfile = user => {
  return firestore
    .collection(`usuários`)
    .doc(user.uid)
    .get()
    .then(snapshot => {
      if (snapshot.exists) return snapshot.data();
      else saveProfile({ id: user.uid });
    })
    .catch(error => {
      console.log(error);
    });
};

export const saveProfile = profile => {
  return firestore
    .collection(`usuários`)
    .doc(profile.id)
    .set(profile, { merge: true })
    .then(function() {})
    .catch(function(error) {
      console.log("Errou feio, errou rude", error);
    });
};
