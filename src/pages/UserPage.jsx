import React,{useState,useEffect,useContext} from 'react'
import { Form, Button, } from 'react-bootstrap'

import { auth } from '../firebase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";




const UserPage = () => {



  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className=' --screen-size --pageSpace d-flex flex-column justify-content-center align-items-center mainbg'>
    <div className='login-box d-flex flex-column justify-content-center align-items-center m-0 p-5 position-absolute'>
    <hr className=''/>
    
    <h2>Please wait...</h2>
    

      {/* <Button variant="dark" type="submit" onClick={logout}>
        Sign Out
      </Button> */}

    </div>
  </div>
  )
}

export default UserPage