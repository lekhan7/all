import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { 
  createUserWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithPopup, 
  getAuth, 
  signInWithEmailAndPassword 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyATsmJj6ejndE9pNj4F7A_FyjxWOD40hqo",
  authDomain: "sporld.firebaseapp.com",
  projectId: "sporld",
  storageBucket: "sporld.firebasestorage.app",
  messagingSenderId: "695036651578",
  appId: "1:695036651578:web:b2bbe094d54b71015ded03",
  measurementId: "G-2RFJBCWX61"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // State to handle loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false); // Stop loading once auth state is determined
    });

    return () => unsubscribe(); // Cleanup listener on unmount
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
      user, // Passing user state for easier access in other components
      loading // Passing loading state for better UX
    }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
