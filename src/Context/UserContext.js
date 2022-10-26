import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    // 1. User Registration
    const userRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // 2. User Login Form
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // 3. User LogOut
    const userLogOut = () => {
        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }

    }, []);

    const authContent = { user, userRegistration, userLogin, userLogOut }
    return (
        <AuthContext.Provider value={authContent}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;