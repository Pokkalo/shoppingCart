import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'





const Footer = () => {
  
  return (
    
    <footer className="border-top text-light footerbg sticky-bottom position-relative">
      <div className="d-flex flex-row justify-content-around">
        <div className="d-flex flex-column p-3">
          <div className=" col-md">
            <h5 className='footertitle'>Address:</h5>
            <p>99 Tung Tau Wan Road, Stanley, Hong Kong</p>
          </div>
          <div className=" col-md">
            <h5 className='footertitle'>Email:</h5>
            <p>sources11981755@gmail.com</p>
          </div>
        </div>

      {/* <div class="col-12 col-md">
        <small class="d-block mb-3 text-muted">&copy; 2017-2022</small>
      </div>
      <div class="col-6 col-md">
        <h5>Features</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Cool stuff</a></li>
          <li><a class="text-muted" href="#">Random feature</a></li>
          <li><a class="text-muted" href="#">Team feature</a></li>
          <li><a ="text-muted" href="#">Stuff for developers</a></li>
          <li><a class="text-muted" href="#">Another one</a></li>
          <li><a class="text-muted" href="#">Last time</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="#">Resource</a></li>
          <li><a class="text-muted" href="#">Resource name</a></li>
          <li><a class="text-muted" href="#">Another resource</a></li>
          <li><a class="text-muted" href="#">Final resource</a></li>
        </ul>
      </div> */}

    <div className="flex-column p-3 align-content-center">
        <ul className="list-unstyled d-flex flex-column flex-md-row appearing_transtion text-light align-content-center my-auto">
          <li className='mt-2 mt-md-5'>
              <NavLink className="text-muted m-3 " to='https://developers.facebook.com/'><FontAwesomeIcon icon={faFacebook} size="2x" color='#fff'></FontAwesomeIcon></NavLink>
          </li>
          <li className='mt-2 mt-md-5'>
              <NavLink className="text-muted m-3" to='https://twitter.com/?lang=zh-Hant'><FontAwesomeIcon icon={faTwitter} size="2x" color='#fff'></FontAwesomeIcon></NavLink>
          </li>
          <li className='mt-2 mt-md-5'>
              <NavLink className="text-muted m-3" to='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} size="2x" color='#fff'></FontAwesomeIcon></NavLink>
          </li>
          <li className='mt-2 mt-md-5'>
              <NavLink className="text-muted m-3" to='https://www.whatsapp.com/?lang=zh_tw'><FontAwesomeIcon icon={faWhatsapp} size="2x" color='#fff'></FontAwesomeIcon></NavLink>
          </li>
          {/* <li><a class="text-muted px-4 fa-5x" style="font-size: 2rem;" href="https://developers.facebook.com/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
          <li><a class="text-muted px-4 fa-5x" style="font-size: 2rem;" href="https://twitter.com/?lang=zh-Hant"></a></li>
          <li><a class="text-muted px-4 fa-5x" style="font-size: 2rem;" href="https://www.instagram.com/"></a></li>
          <li><a class="text-muted px-4 fa-5x" style="font-size: 2rem;" href="https://www.whatsapp.com/?lang=zh_tw"></a></li> */}
        </ul>
        

      </div>

      
        
    </div>
  </footer>

    
  )
}

export default Footer