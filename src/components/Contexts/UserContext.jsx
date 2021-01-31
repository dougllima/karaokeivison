import React, { useEffect } from 'react';

import firebase from 'firebase';

import { getProfile, saveProfile } from '../../service/userService';

export const UserContext = React.createContext({});

export const UserProvider = props => {
  const [user, setUser] = React.useState(null);
  const [profile, setProfile] = React.useState(null);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {})
      .catch(error => {});
  };

  useEffect(() => {
    if (user) {
      getProfile(user).then(snapshot => {
        setProfile({ ...snapshot });
      });
    } else setProfile(null);
  }, [user]);

  useEffect(() => {
    if (profile) {
      saveProfile(profile);
    }
  }, [profile]);

  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged(user => {
      setUser(user || null);
    });

    return () => {
      unsub();
    };
  });

  return (
    <UserContext.Provider
      value={{ user, setUser, profile, setProfile, logout }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
