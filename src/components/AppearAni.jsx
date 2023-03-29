import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Account from './pages/Account'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Setting from './pages/Setting'
import About from './pages/About'
import Borrow from './pages/Borrow'
import Cart from './pages/Cart'
import UserPage from './pages/UserPage'
import Contact from './pages/Contact'

import { AnimatePresence } from 'framer-motion'

const AppearAni = () => {

    const location = useLocation();

  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
        <Route path='/account/userpage' element={<UserPage />}></Route>
        {/* <Route path='/setting/:username' element={<Setting/>}></Route> */}
        <Route path='/setting' element={<Setting/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/borrow' element={<Borrow/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
    </Routes>
    </AnimatePresence>
  )
}

export default AppearAni