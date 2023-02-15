import React, {useState, useRef} from 'react'
import { Form, Button, Table } from 'react-bootstrap'
//for sending data to firebase
import {doc, setDoc} from 'firebase/firestore'

import { productInput } from '../data/DummyData'
// For icons
import {AiOutlineShoppingCart, AiOutlineSync} from 'react-icons/ai'
import {FaRegTrashAlt} from 'react-icons/fa'


const Cart = () => {
  
  const inputValue = useRef(null)
  const [proData, setProData] = useState(productInput)

  const removeItem =(id) =>{
    const newData = proData.filter((data) => data.id !== id)
    setProData(newData)
    console.log(newData)

  }

  return (
    <div className='--pageSpace d-flex flex-column justify-content-center align-items-center'>
            
            <section class="pt-5 pb-5">
  <div class="container">
    <div class="row w-100">
        <div class="col-lg-12 col-md-12 col-12">
            <h3 class="display-5 mb-2 text-center">Shopping Cart</h3>
            <p class="mb-5 text-center">
                <i class="text-info font-weight-bold">{proData.length}</i> items in your cart</p>

                {/* ===================  TABLE  ================= */}
                <Table responsive>
  <thead>
    <tr>


      <th className='' style={{width: "60%"}}>Product</th>
      <th className='' style={{width: "12%"}}>Price</th>
      <th className='' style={{width: "10%"}}>Quanlity</th>
      <th className='' style={{width: "16%"}}>#</th>
    </tr>
  </thead>
  <tbody>
      
      {proData.map((data, index) => (
      <tr key={index}>
 
        <td data-th="Product">
        <div class="row">
            <div class="col-md-3 text-left">
                <img src={data.images[0]}  alt="" class="img-fluid d-none d-md-block rounded mb-2 shadow "/>
            </div>
            <div class="col-md-9 text-left mt-sm-2">
                <h4>{data.title}</h4>
                <p class="font-weight-light">{data.brand} &amp; {data.category}</p>
            </div>
            
        </div>
    </td>
    <td data-th="Price">{data.price}</td>
          <td data-th="Quantity">
              <input type="number" 
              class="form-control form-control-lg text-center"  
              placeholder='1'
              ref={inputValue}
              />
          </td>
          <td class="actions" data-th="">
              <div class="text-right row">
                  <button class="btn btn-white border-0 bg-white btn-md mb-2 mx-1">
                    <AiOutlineSync/>
                  </button>
                  <button class="btn btn-white border-0 bg-white btn-md mb-2 mx-1"
                  onClick={()=> removeItem(data.id)}>
                    <FaRegTrashAlt/>
                  </button>
              </div>
          </td>
    </tr>
      ))}
    
    {/* <tr>
      <td>2</td>
      {Array.from({ length: 4 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr> */}

  </tbody>
</Table>
            
            <div class="float-right text-right">
                <h4>Subtotal:</h4>
                <h1>$99.00</h1>
            </div>
        </div>
    </div>
    <div class="row mt-4 d-flex align-items-center">
        <div class="col-sm-6 order-md-2 text-right">
            <a href="catalog.html" class="btn btn-primary mb-4 btn-lg pl-5 pr-5">Checkout</a>
        </div>
        <div class="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
            <a href="catalog.html">
            <AiOutlineShoppingCart /> Continue Shopping</a>
        </div>
    </div>
</div>
</section>
    </div>
  )
}

export default Cart