import React from 'react'
import { NavLink } from 'react-router-dom'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'

import Account from './pages/Account'
import Announce from './pages/Announce'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Setting from './pages/Setting'
import About from './pages/About'
import Service from './pages/Service'
import Cart from './pages/Cart'

const Page = () => {
  return (
    <>
    <Router>
      {/* <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/account'>Account</NavLink>
        <NavLink to='/setting'>Setting</NavLink>
      </nav> */}
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/account' element={<Account/>}></Route>
          <Route path='/setting/:username' element={<Setting/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
      <Footer/>
      
    </Router>

    </>
  )
}

export default Page