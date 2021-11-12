import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";

import initializeAuthentication from "../Firebase/Firebase.init";
import axios from 'axios';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password, name, history, img, location) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name, photoURL: img };
                setUser(newUser);
                // save user to mongo db 
                saveUserPost(email, name);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: img
                }).then(() => {
                    const destination = location?.state?.from || '/';
                    history.replace(destination);
                }).catch((error) => {
                });
                // history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUserPut(user.email, user.displayName);
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }
    const saveUserPost = (email, displayName) => {
        const user = { email, displayName };
        axios.post('https://obscure-depths-70319.herokuapp.com/users', user)

            .then()
    }
    const saveUserPut = (email, displayName) => {
        const user = { email, displayName };
        axios.put('https://obscure-depths-70319.herokuapp.com/users', user)

            .then()
    }
    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
    useEffect(() => {
        axios.get(`https://obscure-depths-70319.herokuapp.com/users/${user.email}`)


            .then(res => setAdmin(res.data.admin))
    }, [user.email])
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
        admin
    }
};

export default useFirebase;