import React from 'react'
// import { NavDropdown, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'

import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const Header = () => {

  const styling = {
    zindex: "5",
  }

  const preventRefresh = (e) => {
    e.preventDefault()
  }

  return (
<Navbar bg="dark" expand="lg" variant='dark' style={{maxHeight: "300px"}} >
  <Navbar.Brand href="#">Elderly Family</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      navbarScroll

      hover
    >
      <Nav.Link href="/" >Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/service">Service</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
      <Nav.Link href="/account">Account</Nav.Link>
      {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/setting">Setting</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown> */}
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

  )
}

export default Header