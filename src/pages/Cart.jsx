import React, {useState, useRef,useEffect, } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Table, Alert, Container } from 'react-bootstrap'
//for sending data to firebase
import {doc, setDoc, getDocs,updateDoc, collection, onSnapshot} from 'firebase/firestore'

import { db } from '../firebase-config'
import { UserAuth } from '../data/UserData'

import { useShoppingCart } from '../data/CartContent'

import { productInput } from '../data/DummyData'
// For icons
import {AiOutlineShoppingCart, AiOutlineSync} from 'react-icons/ai'
import {FaRegTrashAlt} from 'react-icons/fa'

 

const Cart = () => {
  
  const inputValue = useRef(null)
  const [proData, setProData] = useState(productInput)
  const [cartData, setCartData] = useState([])
  const [state, setState] = useState(false)

  const userRef = collection(db, "user")
  const {user, logged} = UserAuth()

  const nav = useNavigate()

  const {getItemQuantity,increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
  const quantity = getItemQuantity()

  useEffect(() => {
    setCartData([])
    const fetchData = async() =>{
    const data = await getDocs(userRef, user.uid)
    let cart = []
    data.forEach((doc) => {
      cart.push({...doc.data(), id: doc.id})
    })
    setCartData(cart.find((data)=> data.id === user.uid).shoppingCart)
    console.log(cart.find((data)=> data.id === user.uid).shoppingCart)
    console.log(cart)
  }

    try {
      fetchData()
    } catch (error) {
      console.log(error.message)
      setState(false)
    }   
  },[logged])

  const removeItem = async(id) =>{
    const newData = cartData.filter((_, data) => data !== id)
    setCartData(newData)
    console.log(newData)
    try {
      await updateDoc(doc(collection(db, "user"), user.uid),{
        shoppingCart: newData
      })
  } catch (error) {
      console.log(error.message)
  } finally{
      console.log(user.uid)
      // nav('../cart')
  }
  console.log(cartData.map((data) => (data)))

  }

  const testing = () =>{
    console.log(user.uid)
    
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      {logged? null:
      <div className='position-absolute --cart-entire_page_size w-100 h-100' style={{zIndex: "250"}}>
      <Alert variant="primary" 
        className='position-fixed --warnning_sign-styling col-10 col-sm-8 col-md-7 col-lg-6 ' style={{zIndex: "300"}}>
      <Container className='h-50 col'>
      <Alert.Heading className='text-center'>Please login your account</Alert.Heading>
      <p className='text-center'>
          The shopping cart is unable without login your account.
      </p>
      
      </Container>
      <hr className=''/>
      <Container className="col ">
          <div className='d-flex align-content-center justify-content-between my-0'>
              <Button className='w-50 align-content-center ml-1 mr-5' onClick={()=> {nav("../account")}}> Login </Button>
              
              <Button className='w-50 align-content-center mr-1' onClick={()=> {nav("../")}}> Back to Home </Button>                    
          </div>
      </Container>
        </Alert>
        </div>
        }    
      <section class="pt-5 pb-5">
  <div class="container">
    <div class="row w-100">
        <div class="col-lg-12 col-md-12 col-12">
            <h3 class="display-5 mb-2 text-center">Confirming list</h3>
            { cartData.length>0? <p class="mb-5 text-center">
              <i class="text-info font-weight-bold">{cartData.length} </i>
              item(s) in your cart
            </p>:
            null
            }

               
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
      
      {cartData.map((data, index) => (
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
                  onClick={()=> removeItem(index)}>
                    <FaRegTrashAlt/>
                  </button>
                  
              </div>
          </td>
    </tr>
      ))}
  </tbody>
</Table>
            
            <div class="float-right text-right">
                <h4>Subtotal:</h4>
                <h1>$99.00</h1>
                <button onClick={testing}>Button</button>
            </div>
        </div>
    </div>
    <div class="row mt-4 d-flex align-items-center">
        <div class="col-sm-6 order-md-2 text-right">
            <a href="catalog.html" class="btn btn-primary mb-4 btn-lg pl-5 pr-5">Checkout</a>
        </div>
        <div class="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
            <a onClick={()=>{nav("/products")}}>
            <AiOutlineShoppingCart /> Continue Shopping</a>
        </div>
    </div>
</div>
</section>

    </div>
  )
}

export default Cart