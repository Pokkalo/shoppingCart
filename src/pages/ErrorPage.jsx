import React from 'react'
import Cart from './Cart'
import Lottie from "lottie-react";
import Cat404 from "./cat-on-pc.json";

const ErrorPage = () => {
  return (
    <div className='container'>
     <div className='animation center'>
     <Lottie animationData={Cat404} />
      </div>
    
    </div>
  )
}

export default ErrorPage