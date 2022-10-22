import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({ children }) => {
    const googelProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const nameUpdate = (name) => {
        return updateProfile(auth.currentUser, { displayName: name });
    }
    const varifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    // google sign in 
    const googleSignIn = () => {
        return signInWithPopup(auth, googelProvider)
    }

    //sign out
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        nameUpdate,
        varifyEmail,
        googleSignIn,
        logOut
    }

    useEffect(() => {
        const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscibe();
        }
    }, [])



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;