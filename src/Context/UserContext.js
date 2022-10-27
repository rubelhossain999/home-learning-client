import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    // Data Fatch From URL
    useEffect(() => {
        fetch('https://home-learning-rh-rubelhossain999.vercel.app/courses/')
        .then( result => result.json())
        .then(data => setData(data))
    }, []);

    // 1. User Registration
    const userRegistration = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // 2. User Login Form
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // 3. User LogOut
    const userLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // 4. Update User Profile
    const updateUser = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    // 5. Verify Email Address
    const VerifyUserEmail = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    }

    // 6. Google Login System
    const googleLoginPop = (provider) => {
        return signInWithPopup(auth, provider);
    }
    // 7. Google Login System
    const gitHubLoginprovider = (provider) => {
        setUser(user);
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser === null || currentUser.emailVerified) {

                setUser(currentUser);
            }
            setLoading(false);

        })

        return () => {
            unsubscribe();
        }

    }, []);

    const authContent =
    {
        user,
        userRegistration,
        userLogin,
        userLogOut,
        loading,
        updateUser,
        VerifyUserEmail,
        setLoading,
        googleLoginPop,
        gitHubLoginprovider,
        data
    }
    return (
        <AuthContext.Provider value={authContent}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;