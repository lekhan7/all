import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp, getApps, getApp } from "firebase/app"; // Import getApps and getApp to check for initialized apps
import {
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPhoneNumber
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyByXbCxiAO6KWfanOLU4uW0aIhG__Imopc",
    authDomain: "bbbi-3b82f.firebaseapp.com",
    projectId: "bbbi-3b82f",
    storageBucket: "bbbi-3b82f.firebasestorage.app",
    messagingSenderId: "714220477205",
    appId: "1:714220477205:web:2b00a85878d1cce103671c",
    measurementId: "G-L6ZQXLGVM0"
};

// Initialize Firebase only once
const firebaseApp = initializeApp(firebaseConfig) ;
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe(); 
    }, []);

    const signupUserWithEmailAndPassword = async (email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            console.log('User created:', result.user);
        } catch (error) {
            console.error('Error creating user:', error.message);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(firebaseAuth, googleProvider);
            console.log('Google user signed in:', result.user);
        } catch (error) {
            console.error('Error signing in with Google:', error.message);
        }
    };

    const signInWithPhoneNumber = async () => {
        try {
            const result = await signInWithPhoneNumber(firebaseAuth, "+1234567890");
            console.log('Phone user signed in:', result.user);
        } catch (error) {
            console.error('Error signing in with Phone:', error.message);
        }
    };

    const signInUserWithEmailAndPassword = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
            console.log('User signed in:', result.user);
        } catch (error) {
            console.error('Error signing in with email and password:', error.message);
        }
    };

    const signOutUser = async () => {
        try {
            await signOut(firebaseAuth);
            console.log('User signed out');
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };

    const isLoggedIn = user ? true : false;

    return (
        <FirebaseContext.Provider value={{
            signupUserWithEmailAndPassword,
            signOutUser,
            isLoggedIn,
            signInWithGoogle,
            signInUserWithEmailAndPassword,
            user,
            loading,
            signInWithPhoneNumber
        }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};
