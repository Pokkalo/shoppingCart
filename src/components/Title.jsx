import React from 'react'
import WordAnimation from './WordAnimation'
import style from "./title.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Title = () => {
  return (
    <section className='container'>
        <div className='row align-items-center'>
            <div className='col'>
        Unlock the Power of
        <br/>
        Gerontechnology for
        <br/>
      <WordAnimation/>
      </div>
      <div className='col tranleft'>
        <img src='./imgs/elderly_couples.png' width={500}></img>
      </div>
      </div>
      
    </section>
  )
}

export default Title