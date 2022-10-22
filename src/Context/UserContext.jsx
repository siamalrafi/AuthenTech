import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.init';


export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState({});



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const nameUpdate = (name) => {
        return updateProfile(auth.currentUser, name);
    }





    const authInfo = { createUser, nameUpdate }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;