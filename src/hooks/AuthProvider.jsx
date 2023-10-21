import React, { useState, useEffect, useContext, createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { app } from './firebase';

export const AuthContext = createContext(null);

const auth = getAuth(app)

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(currentUser);

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut();
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        setCurrentUser,
        signup,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {/* {!loading && children} */}
            {loading ? <div className='w-full h-[80vh] flex items-center justify-center'><h1 className='text-4xl'>Loading</h1></div> : children}
        </AuthContext.Provider>
    );
}
