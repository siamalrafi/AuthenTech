import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useState } from 'react';
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




    const authInfo = { createUser, nameUpdate, varifyEmail,googleSignIn }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;