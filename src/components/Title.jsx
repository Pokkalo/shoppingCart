import React from 'react'
import WordAnimation from './WordAnimation'
import style from "./title.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Lottie from "lottie-react";
import cuteCat from "./catanmation/Catinbox.json";

const Title = () => {
  return (
    <div className="mainbg">
    <section className='container'>
        <div className='row align-items-center'>
            <div className='col maincolor'>
            Experience the joy of
        <br/> 
        pet ownership,
        <br/>
      <WordAnimation/>
      </div>
      <div className='col tranleft'>
      <Lottie animationData={cuteCat} />
        {/* <img src='./imgs/elderly_couples.png' width={500}></img> */}
      </div>
      </div>
      
    </section>
    </div>
  )
}

export default Title