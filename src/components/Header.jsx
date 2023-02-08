import React from 'react'
// import { NavDropdown, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'

import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

<<<<<<< HEAD
import {BsFillGearFill,BsPersonCircle} from 'react-icons/bs'


const Header = () => {

  const styling = {
    zindex: "5",
  }

=======

const Header = () => {

>>>>>>> 7035063ffd03d77beaf26a518790e0353b5d3784
  const preventRefresh = (e) => {
    e.preventDefault()
  }

  return (
<<<<<<< HEAD
<Navbar bg="dark" expand="lg" variant='dark' style={{maxHeight: "300px"}} >
=======
<Navbar bg="dark" expand="lg" variant='dark'>
>>>>>>> 7035063ffd03d77beaf26a518790e0353b5d3784
  <Navbar.Brand href="#">Elderly Family</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
<<<<<<< HEAD
      
      className="mr-auto my-2 my-lg-0 bg-dark"
=======
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
>>>>>>> 7035063ffd03d77beaf26a518790e0353b5d3784
      navbarScroll

      hover
    >
      <Nav.Link href="/" >Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
<<<<<<< HEAD
      <Nav.Link href="/products">Products</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
=======
      <Nav.Link href="/service">Service</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
      <Nav.Link href="/account">Account</Nav.Link>
>>>>>>> 7035063ffd03d77beaf26a518790e0353b5d3784
      {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/setting">Setting</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
<<<<<<< HEAD
      </NavDropdown> 

      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>*/}
    </Nav>
      <Nav className='d-flex flex-row'>
        <Nav.Link variant='dark' href='' className='d-none d-lg-flex'><BsFillGearFill/></Nav.Link>
        <Nav.Link variant='dark' href='/account' className='d-none d-lg-flex'><BsPersonCircle/></Nav.Link>
      </Nav>
    {/* <Form className="d-flex">
=======
      </NavDropdown> */}
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
>>>>>>> 7035063ffd03d77beaf26a518790e0353b5d3784
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-light">Search</Button>
<<<<<<< HEAD
    </Form> */}

    
=======
    </Form>
>>>>>>> 7035063ffd03d77beaf26a518790e0353b5d3784
  </Navbar.Collapse>
</Navbar>

  )
}

export default Header