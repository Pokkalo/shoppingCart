import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import style from './carousel.css'


const FadeCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  return (
    <div>
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block"
      src="./imgs/elderly-couplewalk.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>In Elderly</h3>
      <h3>We Trust</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="./imgs/cycling.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="./imgs/elderly-couplewalk2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
  )
}

export default FadeCarousel