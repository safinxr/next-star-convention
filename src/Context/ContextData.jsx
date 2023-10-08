import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from '../Firebase/firebase.config';

export const ContextAuth = createContext(null)

const ContextData = ({ children }) => {
    const [user, setUser]= useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, [])


    const emailPassSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const upProfile = (name) => {
        return updateProfile(auth.currentUser, { displayName: name })
    }



    const emailPassSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const globalData = {
        emailPassSignUp,
        emailPassSignIn,
        upProfile,
        user,


    }
    return (
        <ContextAuth.Provider value={globalData}>
            {children}
        </ContextAuth.Provider>
    );
};

export default ContextData;