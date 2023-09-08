/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import {createUserWithEmailAndPassword,  getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"
import { useEffect } from 'react';
import { useState } from 'react';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, photo,email,Bio,teamName) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
          email,
          Bio,
          teamName,
          

        })
      }
   useEffect(()=>{
        const unSubscribed =  onAuthStateChanged(auth, loggedUser =>{
        // console.log('loggedIn User inside auth state observer', loggedUser);
        setUser(loggedUser);
        setLoading(false)
    })
    return ()=>{
        unSubscribed();
    }
   },[])
    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }
    return (
        <div>
          <AuthContext.Provider value ={authInfo}>
            {children}
            </AuthContext.Provider>  
        </div>
    );
};

export default AuthProvider;