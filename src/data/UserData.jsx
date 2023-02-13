
import { createContext, useContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged} from 'firebase/auth'
import { auth } from '../firebase-config'

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [logged, setLogged] = useState(false)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscrible = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
            if(currentUser !== null)
                {
                setLogged(true)
                console.log("I am true")
                }
            else{
                setLogged(false)
                console.log("I am false")
            }
        });
        return () => {
            unsubscrible();
        }
    }, []);

    return (
        <UserContext.Provider value={{createUser, logout, signIn, user, logged}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}