import React from 'react'
import style from './HomeProduct.css'


const HomeProduct = () => {
  return (
    <div className="secondbg">
    <div className='container-fluid'>
        <h1 className='spacing text-center pt-5 catpaw'>Borrow Me</h1>
        <div className="allcards row spacing mt-5">
        <div class="card col">
         <div class="circle"></div>
        <div class="content">
         <h2>Dog</h2>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. iustoLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque, consequuntur 
        </p>
        <a href="#">Buy Now</a>
         </div>
         <img src="./imgs/dog.png" alt=""></img>
        </div>
        <div class="card col">
         <div class="circle"></div>
        <div class="content">
         <h2>Dog</h2>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. iustoLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque, consequuntur 
        </p>
        <a href="#">Buy Now</a>
         </div>
         <img src="./imgs/cutekitten.png" alt=""></img>
        </div>
        <div class="card col">
         <div class="circle"></div>
        <div class="content">
         <h2>Dog</h2>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. iustoLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque, consequuntur 
        </p>
        <a href="#">Buy Now</a>
         </div>
         <img src="./imgs/dog.png" alt=""></img>
        </div>
        </div>
        </div>
        {/* <div className="cards">
            <div className='card'>
            <img src='./product_image/product2.png' className='card-img-top' width={300}></img>
            <div class="card-body">
                <h2>
                 HOVER EFFECT 
                </h2>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-green d-inline-block text-center">Buy now</a>
            </div>

            
            

            </div>

            <div className='card'>
            <img src='./product_image/product2.png' className='card-img-top' width={300}></img>
            <div class="card-body">
                <h2>
                 HOVER EFFECT 
                </h2>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-green d-inline-block text-center">Buy now</a>
            </div>
            </div>

            <div className='card'>
            <img src='./product_image/product2.png' className='card-img-top' width={300}></img>
            <div class="card-body">
                <h2>
                 HOVER EFFECT 
                </h2>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-green d-inline-block text-center">Buy now</a>
            </div>
            </div>
            
            </div> */}


        </div>
  )
}

export default HomeProduct