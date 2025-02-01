import { createContext, useContext, useState,useEffect } from "react"
import { initializeApp } from "firebase/app"
import { createUserWithEmailAndPassword,signOut, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage"
const FirebaseContexct = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyD3d_8M10HKYUvBuSxI15eW8LTKrME6XF0",
    authDomain: "dockstore-194b4.firebaseapp.com",
    projectId: "dockstore-194b4",
    storageBucket: "dockstore-194b4.firebasestorage.app",
    messagingSenderId: "343200555253",
    appId: "1:343200555253:web:2663e8fa1b9a68d8cee5bc",
    measurementId: "G-14TVLMSC6L"
};
export const useFirebase = () => useContext(FirebaseContexct);
const firebaseapp = initializeApp(firebaseConfig)
const firebaseauth = getAuth(firebaseapp)
const firestore = getFirestore(firebaseapp)
const googleprovider = new GoogleAuthProvider();
export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(firebaseauth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }, [])
    const signupuserWithEmailandPassword = (email, password) => {
        createUserWithEmailAndPassword(firebaseauth, email, password);
    }
    const siginwithgoogle = () => {
        signInWithPopup(firebaseauth, googleprovider)
    }
    const signInuserWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(firebaseauth, email, password)
    }
    const signoutuser = () => {
     signOut(firebaseauth)
    }
const islogedin = user ? true : false;
    return <FirebaseContexct.Provider value={{ signupuserWithEmailandPassword,signoutuser,islogedin,siginwithgoogle, signInuserWithEmailAndPassword }}>{props.children}</FirebaseContexct.Provider>
};



