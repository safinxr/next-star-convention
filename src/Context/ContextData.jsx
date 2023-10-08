import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import auth from '../Firebase/firebase.config';

export const ContextAuth = createContext(null)

const ContextData = ({ children }) => {
    const emailPassSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const upProfile = (name) => {
        return updateProfile(auth.currentUser, {displayName: name})
    }

    const googleSignIn =(provider)=>{
        

    }


    const emailPassSignIn = (email, password) => {

    }

    const globalData = {
        emailPassSignUp,
        emailPassSignIn,
        upProfile,
        googleSignIn,
        
        
    }
    return (
        <ContextAuth.Provider value={globalData}>
            {children}
        </ContextAuth.Provider>
    );
};

export default ContextData;