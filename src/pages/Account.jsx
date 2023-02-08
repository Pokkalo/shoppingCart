<<<<<<< HEAD
import React,{useState,useEffect} from 'react'
import { Form, Button, } from 'react-bootstrap'

import { auth } from '../firebase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";


const Account = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  const [errorMess, setErrorMess] = useState()

  const [state, setState] = useState(false)


  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if(user){
        setUser(currentUser);
      }else{
        setUser(null)
      }
      setState(!false)
    });
  }, [state == true])
 

  const login = async (e) => {
    e.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      setErrorMess('')
    } catch (error) {
      console.log(error.message);
      setErrorMess(error.message)
    }
  };

  const logout = async () => {
    await signOut(auth);
  };


  return (
    <div className=' --screen-size --pageSpace d-flex flex-column justify-content-center align-items-center '>
      <img src="./imgs/happy_elderly.png" className='--account-image_style w-100' alt="" />
      <div className='jumbotron d-flex flex-column justify-content-center align-items-center m-0 p-5 position-absolute'>
      { user === "" ? <h2>Please login your account</h2>: <h2>Welcome back!! <br /> {user.email} </h2> }
      <hr className=''/>
      
      <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event) => {
            setLoginEmail(event.target.value);
          }}/>
          <Form.Text className="text-muted">
            {errorMess === "" ?  "We'll never share your email with anyone else.": errorMess}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) => {
            setLoginPassword(event.target.value);
          }}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={login}>
          Submit
        </Button>
      </Form>
      </div>
    </div>
=======
import React from 'react'

const Account = () => {
  return (
    <div className='--pageSpace'>Account</div>
>>>>>>> 7035063ffd03d77beaf26a518790e0353b5d3784
  )
}

export default Account