import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from '../Firebase/firebase.config';

export const ContextAuth = createContext(null)

const ContextData = ({ children }) => {
    const [user, setUser]= useState(null)
    const [shortLoading, setShortLoading] =useState(true)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                setShortLoading(false);
        });
        return()=>{
            unSubscribe();
        }
    }, [])


    const emailPassSignUp = (email, password) => {
        setShortLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const upProfile = (name) => {
        setShortLoading(true)
        return updateProfile(auth.currentUser, { displayName: name })
    }



    const emailPassSignIn = (email, password) => {
        setShortLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const setLoading = (x) => {
        setShortLoading(x)
    }

    const globalData = {
        emailPassSignUp,
        emailPassSignIn,
        upProfile,
        shortLoading, 
        setLoading,
        user,


    }
    return (
        <ContextAuth.Provider value={globalData}>
            {children}
        </ContextAuth.Provider>
    );
};

export default ContextData;