import React from 'react'
import { useShoppingCart } from '../data/CartContent'
import { Card, Button } from 'react-bootstrap'

const ProductItem = ({
    id,
    title,
    Age,
    Weight,
    breed,
    category,
    thumbnail,
    images,
    description,
    gender,
    price
}) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()
    const quantity = getItemQuantity(id)

  return (
    
        <Card style={{ width: '18rem' }} className="card w-100">
            <Card.Img variant="top" src={images[0]} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {breed}
                </Card.Text>
                { quantity === 0? <Button variant='transparent' className="w-100 cartbtn"  onClick={() => increaseCartQuantity(id)}>Add to Cart</Button> 
                : <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                </div>
                <Button
                  onClick={() => removeFromCart(id)}
                  variant="danger"
                  className='w-100'
                >
                  Remove
                </Button>
              </div> }
            </Card.Body>
        </Card>
  )
}

export default ProductItem