import React, { createContext } from 'react';
import {createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../Firebase/firebase.config';

export const ContextAuth = createContext(null)

const ContextData = ({children}) => {
    const emailPassSignUp=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailPassSignIn =(email, password)=>{
        
    }

    const globalData = {
        emailPassSignUp,
        emailPassSignIn
    }
    return (
        <ContextAuth.Provider value={globalData}>
            {children}
        </ContextAuth.Provider>
    );
};

export default ContextData;