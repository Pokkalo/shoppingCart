import React from 'react'
import { NavLink } from 'react-router-dom'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'

import Account from './pages/Account'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Setting from './pages/Setting'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart'
import UserPage from './pages/UserPage'

import { AuthContextProvider } from './data/UserData'


import { useState } from 'react'

const Page = () => {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [error, setError] = useState("")

  
  return (
    <>
    <Router>
      {/* <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/account'>Account</NavLink>
        <NavLink to='/setting'>Setting</NavLink>
      </nav> */}
      <AuthContextProvider >
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/account' element={<Account/>}></Route>
          <Route path='/account/userpage' element={<UserPage />}></Route>
          {/* <Route path='/setting/:username' element={<Setting/>}></Route> */}
          <Route path='/setting' element={<Setting/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
      <Footer/>
      </AuthContextProvider>
    </Router>

    </>
  )
}

export default Page