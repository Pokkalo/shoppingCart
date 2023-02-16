import React from 'react'
import style from './HomeProduct.css'
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js">
    </script>
const HomeProduct = () => {
  return (
    <div className='container mt-4'>
        <h1 className='display-4'>Product</h1>
            <div className='card'>
            <img src='./product_image/product2.png' width={300}></img>
            <div class="card-title">
                <h2>
                 HOVER EFFECT 
                </h2>
                <button>Buy now</button>
            </div>
            

            </div>
        
        </div>
  )
}

export default HomeProduct