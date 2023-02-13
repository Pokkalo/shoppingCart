import React,{useState,useEffect,useContext} from 'react'
import { Form, Button, } from 'react-bootstrap'
import { useNavigate, } from 'react-router-dom';


import { auth } from '../firebase-config';
import {
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
  const [logged, setLogged] = useState(false)
  
  const nav = useNavigate()

  let userData = []

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if(user){
        setUser(currentUser);
      }else{
        setUser(null)
      }
      setState(!false)
    });
  }, [state == true, logged == true])
 

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
      setUser(user)
      setLogged(true)
      userData = user
    } catch (error) {
      console.log(error.message);
      setErrorMess(error.message)
      setLogged(false)
    } 
  };

  function nextPage (){
    nav("./UserPage")
  }
  

  const logout = async () => {
    await signOut(auth)
    nextPage();
  };

  function printing(e){
    e.preventDefault();
    console.log(user.email)
    // for(let data of user){
    //   console.log(typeof data)
      
    // }
  }


  return (
    
    <div className=' --screen-size --pageSpace d-flex flex-column justify-content-center align-items-center '>
      <img src="./imgs/happy_elderly.png" className='--account-image_style w-100' alt="" />
      {logged || user? null : 
      <div className='jumbotron d-flex flex-column justify-content-center align-items-center m-0 p-5 position-absolute'>
      { state !== false ? <h2>Please login your account</h2>: <h2>Welcome back!! </h2> }
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
      }

      {logged || user? <div className='jumbotron d-flex flex-column justify-content-center align-items-center m-0 p-5 position-absolute --login-hidden-element'>
      <h2>Welcome back!! <br /> {user.email}</h2>
      <hr className=''/>
      
      <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Text className="">
            <h2>{userData.email}</h2>
          </Form.Text>
        </Form.Group>

        <Button variant="dark" type="submit" onClick={logout}>
          Logout
        </Button>
        <Button variant="dark" type="submit" onClick={printing}>
          console
        </Button>
      </Form>
      </div> : null}
    </div>
  )
}

export default Account