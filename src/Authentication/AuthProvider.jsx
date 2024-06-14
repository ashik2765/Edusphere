import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const Auth = getAuth(app);
export default function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(Auth, googleProvider);
    };
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    };
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    };
    const logOut = async () => {
        return await signOut(Auth).then(() => setUser(null))
    };
    const updateUserProfile = (name, photo) => {
        return updateProfile(Auth.currentUser, {
            displayName: name, photoURL: photo
        });
    };

    useEffect(() => {
        const unscubcribe = onAuthStateChanged(Auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            } else {
                setLoading(false);
            }
        });
        return () => {
            return unscubcribe();
        };
    }, []);

    const authInfo = { Auth, user, googleSignIn, createUser, logIn, logOut, loading, updateUserProfile };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    )
}
