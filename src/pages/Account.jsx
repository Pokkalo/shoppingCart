import React,{useState} from 'react'
import { Form, Button, } from 'react-bootstrap'
import { useNavigate, } from 'react-router-dom';

import { signInWithGoogle } from '../firebase-config';
import { UserAuth } from '../data/UserData';
import { db } from '../firebase-config';
import { collection, doc, setDoc } from "firebase/firestore"; 

import { FcGoogle } from 'react-icons/fc'

const Account = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // const [user, setUser] = useState({});
  const [errorMess, setErrorMess] = useState("")

  const {signIn, logout, user, createUser} = UserAuth()

  const [createState, setCreateState] = useState(false)
  
  const nav = useNavigate()
  const usersRef = collection(db, "user"); 

  let userData = []

  const handleLogin = async (e) => {
    e.preventDefault()
    setErrorMess("")
    try {
      await signIn(loginEmail, loginPassword)
    } catch (error) {
      setErrorMess(error.message)
      console.log(error.message)
    }
  }

  const handleSignOut = async() =>{
    try {
      await logout()
      setCreateState(false)
      nav('/account/userpage')
      
      console.log("You are out")
    } catch (error) {
      console.log(error.message)

    }
  }

  const handleCreate = async(e) => {
    e.preventDefault();
    try {
      const newUser = await createUser(loginEmail, loginPassword)
 
      console.log("account created!")
      setCreateState(true)
      console.log(newUser.user.uid)

      await setDoc(doc(usersRef, newUser.user.uid), {
        shoppingCart: [],
        personalInfo: [],
        productOrder: []
      });

    } catch (error) {
      console.log(error.message)
      setErrorMess(error.message)
    }
  }



  return (
    
    <div className=' --screen-size --pageSpace d-flex flex-column justify-content-center align-items-center mainbg'>
      
      {user? null : 

      <div className="--account-container d-flex justify-content-center align-items-center">
      <div className='d-flex flex-column justify-content-center align-items-center m-0 p-5 login-box'>
     {createState? <h2>New Account Created!</h2> :<h2>Login</h2>}
      <hr className=''/>
      
      <Form >
        <Form.Group controlId="formBasicEmail" className='user-box'>     
          <Form.Control type="email" className='boxinput' onChange={(event) => {
            setLoginEmail(event.target.value);
          }}/> 
          <Form.Label className='user-boxlabel'>Email address</Form.Label>
          
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className='user-box'>
          
          <Form.Control type="password" className='boxinput' onChange={(event) => {
            setLoginPassword(event.target.value);
          }}/>
          <Form.Label className='user-boxlabel'>Password</Form.Label>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox" className='maincolor'>
          <Form.Check type="checkbox" label="Check me out" />
          <Form.Text className="text-muted">
            {errorMess === "" ?  "We'll never share your email with anyone else.": errorMess}
          </Form.Text>
        </Form.Group>

        <Form.Group className='d-flex flex-row justify-content-between mt-3'>
        <Button className='user-box-btn mr-3 d-flex justify-content-center align-items-center' variant="transparent" type="submit" onClick={handleLogin}>
        <span></span>
      <span></span>
      <span></span>
      <span></span>
          Submit
        </Button>
        <Button className='user-box-btn' variant="transparent" type="submit"
         onClick={handleCreate}
         >
          <span></span>
      <span></span>
      <span></span>
      <span></span>
          Create account
        </Button>
        </Form.Group>
        
        <div class="--login-divider d-flex align-items-center justify-content-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
        </div>
        
        <Button variant='secondary' className='btn-lg btn-block d-flex justify-content-center align-items-between' 
        onClick={
          signInWithGoogle
          }><FcGoogle size={28}/>   Continue with Google</Button>
       
      
        {/* <a class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" 
          role="button">
         Continue with Facebook
        </a>
        <a class="btn btn-primary btn-lg btn-block" style="background-color: #55acee" 
          role="button">
          Continue with Twitter</a> */}


      </Form>
      </div>
      </div>
      }

      {user? <div className='login-box d-flex flex-column justify-content-center align-items-center m-0 p-5 position-absolute --login-hidden-element'>
      <h2>Welcome back!!</h2><p className='login-useremail'>{user.email}</p>
      <hr className=''/>
      
      <Form className="d-flex flex-column flex-md-row">
        <Form.Group controlId="formBasicEmail">
          <Form.Text className="">
            <h2>{userData.email}</h2>
          </Form.Text>
        </Form.Group>

        <Button className='allbtn' variant="transparent" type="submit" onClick={handleSignOut}>
          Logout
        </Button>
        <Button className='allbtn' variant="transparent" type="submit" onClick={() => {nav("../borrow")}}>
          Go to shop
        </Button>
      </Form>
      </div> : null}
    </div>
  )
}

export default Account