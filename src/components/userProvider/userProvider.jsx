/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const UserProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({ name: "Sk" });
  const [loading, setLoading] = useState(true);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // creactUser
  const creactUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubcriber = onAuthStateChanged(auth, (currentuser) => {
      console.log(currentuser);

      setUser(currentuser);

      setLoading(false);
    });
    return () => unSubcriber;
  }, []);
  const UpdateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  const logIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authinfo = {
    user,
    creactUser,
    logOut,
    UpdateUser,
    loading,
    logIn,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default UserProvider;
