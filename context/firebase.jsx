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
    apiKey: "AIzaSyDht0p-heHVypJpB33nPBOpgorM2f-WD1Q",
    authDomain: "cearguide.firebaseapp.com",
    projectId: "cearguide",
    storageBucket: "cearguide.firebasestorage.app",
    messagingSenderId: "899224717476",
    appId: "1:899224717476:web:68314a37824cb611a5fe31",
    measurementId: "G-D8VLEBQV8T"
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
