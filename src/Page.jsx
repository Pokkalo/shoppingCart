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

import Borrow from './pages/Borrow'
import Cart from './pages/Cart'
import UserPage from './pages/UserPage'

import { UserData } from './data/UserData'
import { useState } from 'react'

const Page = () => {
  const [dataUser, setDataUser] = useState({})
  
  return (
    <>
    <Router>
      {/* <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/account'>Account</NavLink>
        <NavLink to='/setting'>Setting</NavLink>
      </nav> */}
      <UserData.Provider value={{dataUser, setDataUser}}>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/account' element={<Account/>}></Route>
          <Route path='/account/userpage' element={<UserPage />}></Route>
          <Route path='/setting/:username' element={<Setting/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/borrow' element={<Borrow/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
      <Footer/>
      </UserData.Provider>
    </Router>

    </>
  )
}

export default Page