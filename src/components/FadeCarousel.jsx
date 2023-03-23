import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



const FadeCarousel = () => {

  
  return (
    <div>
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block --caroursel_picture"
      src="./imgs/close-up-veterinarian-taking-care-pet.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>We Trust</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block --caroursel_picture"
      src="./imgs/mother-little-girl-feeding-petting-bunny.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>We Help</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block --caroursel_picture"
      src="./imgs/medium-shot-kid-feeding-pig.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>We Care</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
  )
}

export default FadeCarousel