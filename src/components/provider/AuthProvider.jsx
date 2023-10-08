/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth ,createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext =createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const createUser=(email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut =() =>{
        return signOut(auth)
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,createUser =>
            {console.log("user in authstate",createUser);
        setUser(createUser)});
        return() => {
            unsubscribe();
        }
    },[]);
   
    const authinfo ={
            user,
            createUser,logOut,signIn,
     }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;