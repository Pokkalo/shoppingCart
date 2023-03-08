import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Message } from 'semantic-ui-react'
import { Alert, Container, Button } from 'react-bootstrap';
import Lottie from "lottie-react";
import cuteCatMessage from "./catanmation/cat-message.json";
import style from "./ContactCard.css"

import { db } from '../firebase-config';
import { updateDoc, collection, doc, getDocs } from 'firebase/firestore';

const ContactCard = () => {

  const [submitState, setSubmitState] = useState(false)

  const nav = useNavigate()

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    message: ""
  });

  const usersRef = collection(db, "user"); 
  
  const validEmailRegex = RegExp (
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i);
  
    const handleChange = e => {
    setValues(oldValues => (
      {
      ...oldValues,
      [e.target.name]: e.target.value
      }
    ));

    const {name, value} = e.target;

    switch(name) {
      case 'email':
        setErrors({...errors, email: validEmailRegex.test(value) ? "": "Email is not valid"})
        break;
    
      case 'message':
        setErrors({...errors, message: value.length <10 ? "message must be at least 10 characters long" : ""})
        break;
      default:
        break;
    } 
  };




  async function handleSubmit(event) {
    event.preventDefault();
    // const submitInfo = { name: values.name, email: values.email, message: values.message}
    try {
      const data = await getDocs(collection(db, "feedback"), "All_feedback")
      
      let feedbackData = []
      data.forEach((doc) => 
        feedbackData.push({...doc.data()})
      )
      // console.log(JSON.stringify(feedbackData))
      const mergeFeedback =  [{name: values.name, 
        email: values.email, 
        message: values.message}]
      // feedbackData.concat(
      
        // )
      console.log(mergeFeedback)
      const user = values.name
      await updateDoc(doc(collection(db, "feedback"), user),
      {...data, ...mergeFeedback})
      setSubmitState(true)
    } catch (error) {
      console.log(error.message)
    }
    
  }

  return (
    <>
    {submitState? 
      
      <Alert variant='transparent'
        className='position-fixed --warnning_sign-styling col-10 col-sm-8 col-md-7 col-lg-6 mainbg border border-warning' style={{zIndex: "200"}}>
            <Container className='h-50 col maincolor'>
            <Alert.Heading className='text-center'>Are you ready to take them/it home?</Alert.Heading>
            <p className='text-center'>
              Please make sure you have prepared the suitable environment for your new member(s)
            </p>
            
            </Container>
            <hr className=''/>
            <Container className="col">
                <div className='d-flex align-content-center justify-content-between my-0'>
                    <Button variant='transparent' className='w-50 align-content-center ml-1 mr-5 noshadowbtn' onClick={()=>{nav("../")}}> Back to home </Button>
                    
                    <Button variant='transparent' className='w-50 align-content-center mr-1 noshadowbtn' onClick={()=>{setSubmitState(false)}}> Close </Button>                    
                </div>
            </Container>
        </Alert>
      
      : null}
      <div className='mainbg --contectheight'>
        <div className='p-5  --contactcardbox d-flex flex-column flex-md-row mainbg'>
          <div className='col catphone'>
            <Lottie animationData={cuteCatMessage} />
          </div>
        <div className='col'>
        <h2 className='--contact-title mb-5'>Send us a message</h2>
        <form onSubmit={handleSubmit}>
          <div className='contactinput-box'>
            
            <input id="name" type="text" name="name" value={values.name} onChange={handleChange}/>
            <label htmlFor="name">Enter your Name</label>
          </div>

          <div className='contactinput-box'>
            
            <input id="email" type="email" name="email" value={values.email} onChange={handleChange} noValidate/>
            <label htmlFor="email">Enter your Email</label>
            <br></br> 
            {errors.email.length >0 &&
                <span className='error'>{errors.email}</span>}
          </div>
          <div className='contactinput-messagebox mb-4'>
            
            <textarea id="message" name="message" value={values.message} onChange={handleChange} noValidate/>
            <label htmlFor="message">Enter your Message</label>
            <br></br>
            {errors.message.length >0 &&
                <span className='error'>{errors.message}</span>}
          
          </div>
          <button className='allbtn ' type="submit">Submit</button>
        </form>

        </div>
      </div>

    </div>
    </>
  )
}

export default ContactCard