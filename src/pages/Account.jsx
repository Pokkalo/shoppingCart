import React,{useState,useEffect,useContext} from 'react'
import { Form, Button, } from 'react-bootstrap'
import { useNavigate, } from 'react-router-dom';

import { UserAuth } from '../data/UserData';
import { db } from '../firebase-config';
import { collection, doc, setDoc } from "firebase/firestore"; 

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
      const test = await createUser(loginEmail, loginPassword)
 
      console.log("account created!")
      setCreateState(true)
      console.log(test.user.uid)

      await setDoc(doc(usersRef, test.user.uid), {
        shoppingCart: [],
        personalInfo: []
      });

    } catch (error) {
      console.log(error.message)
      setErrorMess(error.message)
    }
  }

  function printing(e){
    e.preventDefault();
    try {
      console.log(user.email)
    } catch (error) {
      console.log(user)
      console.log(error.message)
    }
    
    // for(let data of user){
    //   console.log(typeof data)
      
    // }
  }


  return (
    
    <div className=' --screen-size --pageSpace d-flex flex-column justify-content-center align-items-center mainbg'>
      {/* <img src="./imgs/arthouse-studio.jpg" className='--account-image_style w-100' alt="" /> */}
      {user? null : 
      <div className='jumbotron d-flex flex-column justify-content-center align-items-center m-0 p-5 position-absolute'>
     {createState? <h2>New Account Created!</h2> :<h2>Please login your account</h2>}
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
        <Button className='user-box-btn' variant="transparent" type="submit" onClick={handleLogin}>
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

      </Form>
      </div>
      }

      {user && createState === false? <div className='login-box d-flex flex-column justify-content-center align-items-center m-0 p-5 position-absolute --login-hidden-element'>
      <h2>Welcome back!!</h2><p className='login-useremail'>{user.email}</p>
      <hr className=''/>
      
      <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Text className="">
            <h2>{userData.email}</h2>
          </Form.Text>
        </Form.Group>

        <Button className='allbtn' variant="transparent" type="submit" onClick={handleSignOut}>
          Logout
        </Button>
        <Button className='allbtn' variant="transparent" type="submit" onClick={printing}>
          console
        </Button>
      </Form>
      </div> : null}

      {createState? <div className='jumbotron d-flex flex-column justify-content-center align-items-center m-0 p-5 position-absolute --login-hidden-element'>
      <h2>Account below is Created!!<br /> {user.email}</h2>
      <hr className=''/>
      
      <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Text className="">
            <h2>{userData.email}</h2>
          </Form.Text>
        </Form.Group>

        <Button variant="dark" type="submit" onClick={()=> {setCreateState(false)}}>
          Close
        </Button>
        
      </Form>
      </div> : null}
    </div>
  )
}

export default Account