import React,{useState} from 'react'
import style from './HomeProduct.css'
import { Row } from 'react-bootstrap'
import AnimatedItem from './AnimatedItem'
import { productInput } from '../data/DummyData'


const HomeProduct = () => {

    const [proData, setProData] = useState(productInput)

  return (
    <div className="secondbg col-12">
        
    <div className='container-fluid col-12'>
        
        <h1 className='spacing text-center col-12 pt-5 catpaw'>Borrow Me</h1>

        <div className="allcards row spacing col-12 mt-5 align-content-center">

        {/* {
            proData.map((data) =>( <AnimatedItem {...data}/> ))
        } */}
   
            
        <div class="card col-12 col-lg-4">
            <div class="circle"></div>
            <div class="content">
            <h2>Dog</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. iustoLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque, consequuntur 
            </p>
            <a href="#">Buy Now</a>
            </div>
            <img src="./imgs/dog.png" alt=""></img>
        </div>

        <div class="card col-12 col-lg-4">

            <div class="circle"></div>
            <div class="content">
            <h2>Dog</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. iustoLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque, consequuntur 
            </p>
            <a href="#">Buy Now</a>
            </div>
            <img src="./imgs/cutekitten.png" alt=""></img>
        </div>

        <div class="card col-12  col-lg-4">
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
            


        </div>
  )
}

export default HomeProduct