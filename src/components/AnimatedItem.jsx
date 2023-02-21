import React from 'react'

const AnimatedItem = ({
  id,
  title,
  age,
  weight,
  breed,
  category,
  thumbnail,
  images,
  description,
  gender
}) => {
  return (
    <div class="card col-12 col-lg-4">
      <div class="circle"></div>
      <div class="content">
      <h2>{category}</h2>
      <p>{description}</p>
      <a href="#">Buy Now</a>
      </div>
    <img src={images[0]} alt=""></img>
</div>
  )
}

export default AnimatedItem