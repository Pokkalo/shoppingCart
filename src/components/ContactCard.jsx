import React, {useState} from 'react';
import { Message } from 'semantic-ui-react'
import Lottie from "lottie-react";
import cuteCatMessage from "./catanmation/cat-message.json";
import style from "./ContactCard.css"

const ContactCard = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    message: ""
  });
  
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

  function handleSubmit(event) {
    event.preventDefault();
    console.log('name:', values.name);
    console.log('email:', values.email);
    console.log('message:', values.message);
  }

  return (
    <div className='mainbg --contectheight'>
        <div className='p-5  --contactcardbox row mainbg'>
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
        <button className='allbtn' type="submit">Submit</button>
      </form>

      </div>
      </div>

    </div>
  )
}

export default ContactCard