import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'

import Account from './pages/Account'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Setting from './pages/Setting'
import About from './pages/About'

import Borrow from './pages/Borrow'
import Cart from './pages/Cart'
import UserPage from './pages/UserPage'
import Contact from './pages/Contact'
import { AuthContextProvider } from './data/UserData'
import { ShoppingCartProvider } from './data/CartContent'

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
        <ShoppingCartProvider>
      <Header/>
      <Routes>
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
      </ShoppingCartProvider>
      <Footer/>
      </AuthContextProvider>
    </Router>

    </>
  )
}

export default Page