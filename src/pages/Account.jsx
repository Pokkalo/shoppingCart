import React from 'react'
import { Form, Button, } from 'react-bootstrap'

const Account = () => {
  return (
    <div className=' --screen-size d-flex flex-column justify-content-center align-items-center'>
      <div className='jumbotron d-flex flex-column justify-content-center align-items-center '>
      <h2>Please login your account</h2>
      <hr className=''/>
      <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </div>
  )
}

export default Account