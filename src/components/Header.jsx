import React from 'react'
// import { NavDropdown, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'

import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import style from './header.css'
import "bootstrap/dist/css/bootstrap.min.css"

import {BsFillGearFill,BsPersonCircle} from 'react-icons/bs'


const Header = () => {

  const styling = {
    zindex: "5",
  }

  const preventRefresh = (e) => {
    e.preventDefault()
  }

  return (
<Navbar expand="lg" style={{maxHeight: "300px"}} >
    <div className='container sticky-top'>
  <Navbar.Brand href="#">
  <img
      className="d-block"
      src="./imgs/logo.png" width={150}
    />

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      
      className="ml-auto pr-5 my-2 my-lg-0" 
      navbarScroll

      hover
    >
      <Nav.Link href="/" className='px-4'><h1>Home</h1></Nav.Link>
      <Nav.Link href="/about" className='px-4'><h1>About</h1></Nav.Link>
      <Nav.Link href="/products" className='px-4'><h1>Products</h1></Nav.Link>
      <Nav.Link href="/contact" className='px-4'><h1>Contact</h1></Nav.Link>
      {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/setting">Setting</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown> 

      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>*/}
    </Nav>
      <Nav className='d-flex flex-row'>
        <Nav.Link variant='dark' href='/setting' className='d-none d-lg-flex'><BsFillGearFill/></Nav.Link>
        <Nav.Link variant='dark' href='/account' className='d-none d-lg-flex'><BsPersonCircle/></Nav.Link>
      </Nav>
    {/* <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-light">Search</Button>
    </Form> */}

    
  </Navbar.Collapse>
  </div>
</Navbar>

  )
}

export default Header