import React, {useState, useRef,useEffect, } from 'react'
import { useNavigate } from 'react-router-dom'
import {Button, Table, Alert, Container } from 'react-bootstrap'
//for sending data to firebase
import {doc, getDocs,updateDoc, collection} from 'firebase/firestore'

import { db } from '../firebase-config'
import { UserAuth } from '../data/UserData'

import { useShoppingCart } from '../data/CartContent'

// For icons
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaRegTrashAlt} from 'react-icons/fa'

// For loading page
import { ClimbingBoxLoader } from 'react-spinners'

 

const Cart = () => {
  
  const inputValue = useRef(null)
  // const [proData, setProData] = useState(productInput)
  const [cartData, setCartData] = useState([])
  const [cartQua, setCartQua] = useState()
  const [state, setState] = useState(false) // for refresh
  const [paymentState, setPaymentState] = useState(false)
  const [paid, setPaid] = useState(false)

  const [loading, setLoading] = useState(true)

  const userRef = collection(db, "user")
  const {user, logged} = UserAuth()

  const nav = useNavigate()

  const {updateCartItems, setCartQuantity,  cartItems, } = useShoppingCart()


  useEffect(() => {

    const loadingPage = async() =>{
      const testing = setTimeout(()=>{
          setLoading(false)
      }, 1000)
      await testing()
    }
    loadingPage()
    setCartData([])
    
    
    const fetchData = async() =>{
    const data = await getDocs(userRef, user.uid)
    let cart = []
    data.forEach((doc) => {
      cart.push({...doc.data(), id: doc.id})
    })
    const userProCart = cart.find((data)=> data.id === user.uid).shoppingCart

    if(userProCart !== null){
    setCartData(userProCart)
    console.log(userProCart)
    console.log(cart)

    updateCartItems(userProCart.map((item) =>{
      const id = item.id
      return {id: id, quantity: 1}}
      ))
    setCartQua(cart.find((data)=> data.id === user.uid).shoppingCart.map((item) =>{
      const id = item.id
      return {id: id, quantity: 1}}
      ))}
  }

  if(paid === false)
   { try {
      fetchData()
      console.log(cartQua)
    } catch (error) {
      console.log(error.message)
    }} else {
      const element = document.getElementById('focus');
      if (element) {
        console.log("inside!!")
        element.scrollIntoView({ behavior: 'smooth' });
    }}

  },[logged, paid])

  const removeItem = async(id) =>{
    const newData = cartData.filter((_, data) => data !== id)
    setCartData(newData)
    console.log(newData)
    try {
      await updateDoc(doc(collection(db, "user"), user.uid),{
        shoppingCart: newData
      })
      setState(!state)
  } catch (error) {
      console.log(error.message)
  } finally{
      console.log(user.uid)
  }
 
  }
  const handoutOrder = async() =>{
    const data = await getDocs(userRef, user.uid)
    let cart = []
    data.forEach((doc) => {
      cart.push({...doc.data(), id: doc.id})
    })
    const userOrderCart = cart.find((data)=> data.id === user.uid).productOrder
    console.log(userOrderCart)
   
    const mergeQuaCart = cartData.map(t1 => 
      ({...t1, ...cartItems.find(t2 => t2.id === t1.id)})).concat(userOrderCart)
      
      await updateDoc(doc(collection(db, "user"), user.uid), {
        productOrder: mergeQuaCart
      })
      await updateDoc(doc(collection(db, "user"), user.uid),{
        shoppingCart: []
      })
    

  }

  const testing = async() =>{
    const mergeQuaCart = cartData.map(t1 => 
      ({...t1, ...cartItems.find(t2 => t2.id === t1.id)}))
      console.log(mergeQuaCart)
    
    // try {
    //   const data = await getDocs(userRef, user.uid)
    //   let cart = []
    //   data.forEach((doc) => {
    //     cart.push({...doc.data(), id: doc.id})
    //   })
    //   const shoppingCartProd = cart.find((data)=> data.id === user.uid).shoppingCart
    //   console.log(shoppingCartProd)

    // } catch (error) {
    //   console.log(error.message)
    // }
  }

  return (
    <div className='d-flex flex-column --screen-size justify-content-center align-items-center mainbg maincolor'>
      
      {loading? 
      <div className='--pageSpace --loadingPage mainbg w-100 d-flex justify-content-center align-items-center position-absolute' zIndex={999}>
        <ClimbingBoxLoader color="#8b622e"  loading={loading}/>
      </div>
      : null}
      
      {loading === false && logged? null:
      <div className='position-absolute --cart-entire_page_size w-100 h-100' style={{zIndex: "250"}}>
      <Alert  variant='transparent'
        className='position-fixed --warnning_sign-styling col-10 col-sm-8 col-md-7 col-lg-6 mainbg border border-warning' style={{zIndex: "300"}}>
      <Container className='h-50 col maincolor'>
      <Alert.Heading className='text-center'>Please login your account</Alert.Heading>
      <p className='text-center'>
          The shopping cart is unable without login your account.
      </p>
      
      </Container>
      <hr className=''/>
      <Container className="col ">
          <div className='d-flex align-content-center justify-content-between my-0'>
              <Button  variant='transparent' className='w-50 align-content-center ml-1 mr-5 noshadowbtn' onClick={()=> {nav("../account")}}> Login </Button>
              
              <Button  variant='transparent' className='w-50 align-content-center mr-1 noshadowbtn' onClick={()=> {nav("../")}}> Back to Home </Button>                    
          </div>
      </Container>
        </Alert>
        </div>
        }
        {loading === false && paid === false ? null:
      <div className='position-absolute --cart-entire_page_size w-100 h-100' style={{zIndex: "250"}}>
      <Alert variant='transparent'
        className='position-fixed --warnning_sign-styling col-10 col-sm-8 col-md-7 col-lg-6 mainbg border border-warning' style={{zIndex: "300"}}>
      <Container className='h-50 col maincolor' id='focus'>
      <Alert.Heading className='text-center'>Thank you for your order!!</Alert.Heading>
      <p className='text-center'>
          We will send an email for further information
      </p>
      
      </Container>
      <hr className=''/>
      <Container className="col ">
          <div className='d-flex align-content-center justify-content-between my-0'>
              <Button variant='transparent' className='align-content-center noshadowbtn p-1' onClick={()=> {nav("../borrow")}}>Continus shopping</Button>
              
              <Button variant='transparent' className='align-content-center noshadowbtn p-2' onClick={()=> {nav("../")}}> Back to Home </Button>                    
          </div>
      </Container>
        </Alert>
        </div>
        }     
      {loading === false && paymentState? 

<div class="--payment-body">
    
<div class="card --payment-card">
    <div class="card-top --payment-card-top border-bottom text-center">
         <a class="--payment-a text-decoration-none" onClick={()=>{nav("../borrow")}}> <u>Back to borrow page</u></a>
        
    </div>
    <div class="card --payment-card-body card-body">

        <div class="--payment-row row">
            <div class="col-md-7">
                <div class="--payment-left left border px-5">
                    <div class="--payment-row row">
                        <span class="--payment-header header">Payment</span>
                        <div class="--payment-icons">
                            <img src="https://img.icons8.com/color/48/000000/visa.png"/>
                            <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png"/>
                            <img src="https://img.icons8.com/color/48/000000/maestro.png"/>
                        </div>
                    </div>
                    <form class="--payment-form">
                        <span>Cardholder's name:</span>
                        <input class="--payment-input" placeholder="Linda Williams" />
                        <span>Card Number:</span>
                        <input class="--payment-input" placeholder="0125 6780 4567 9909" />
                        <div class="--payment-row row">
                            <div class="col-4"><span>Expiry date:</span>
                                <input class="--payment-input" placeholder="YY/MM"/>
                            </div>
                            <div class="col-4"><span>CVV:</span>
                                <input class="--payment-input" id="cvv"/>
                            </div>
                        </div>
                        <input type="checkbox" id="save_card" class="align-left --payment-input" />
                        <label for="save_card">Save card details to wallet</label>  
                    </form>
                </div>                        
            </div>
            <div class="col-md-5">
                <div class="--payment-right border">
                    <div class="--payment-header header">Order Summary</div>
                    <p>{cartItems.reduce((t, item) => (t + item.quantity*1), 0)} item(s)</p>

                    {cartData.map((item) => (
                      <div class="--payment-row row item" key={item.id}>
                          <div class="col-4 align-self-center"><img class="img-fluid" src={item.images[0]}/></div>
                          <div class="--payment-col-8 col-8">
                              <div class="--payment-row row"><b>$ {item.price}</b></div>
                              <div class="--payment-row row text-muted">{item.description}</div>
                              <div class="--payment-row row">Quantity: {cartItems.find((i) => (i.id === item.id)).quantity}</div>
                          </div>
                      </div>
                    ))}

                    <hr/>
                    <div class="--payment-row row --payment-lower">
                        <div class="col text-left">Subtotal</div>
                        <div class="col text-right">$ {
                          cartData.reduce((tot, item) =>{
                          const qua = cartItems.find((i) => i.id == item.id).quantity
                          return (tot + item.price*qua)}
                          ,0)}
                  </div>
                    </div>
                    <div class="--payment-row row --payment-lower">
                        <div class="col text-left">Delivery</div>
                        <div class="col text-right">Free</div>
                    </div>
                    <div class="--payment-row row --payment-lower">
                        <div class="col text-left"><b>Total to pay</b></div>
                        <div class="col text-right">
                          <b>$ {
                            cartData.reduce((tot, item) =>{
                            const qua = cartItems.find((i) => i.id == item.id).quantity
                            return (tot + item.price*qua)}
                            ,0)}
                          </b>
                        </div>
                    </div>
                    <div class="--payment-row row --payment-lower">
                        <div class="col text-left"><a onClick={testing}><u>Add promo code</u></a></div>
                    </div>
                    <button class="--payment-btn btn-danger" 
                    onClick={()=>{
                      setPaid(true)
                      handoutOrder()
                      }}>
                      Place order</button>
                    <p class="text-muted text-center">Complimentary Shipping & Returns</p>
                </div>
            </div>
        </div>
    </div>
    
 <div>
</div>
</div>
</div>

      
      
      :
      
  <section class="pt-5 pb-5 --cart-table">
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


      <th className='maincolor' style={{width: "60%"}}>Product</th>
      <th className='maincolor' style={{width: "12%"}}>Price</th>
      <th className='maincolor' style={{width: "10%"}}>Quantity</th>
      <th className='maincolor' style={{width: "16%"}}>#</th>
    </tr>
  </thead>
  <tbody>
      
      {cartData.map((data, index) => {
      // console.log(index)
      return (<tr key={index}>

        <td data-th="Product">
        <div class="row">
            <div class="col-md-3 text-left">
                <img src={data.images[0]}  alt="" class="img-fluid d-none d-md-block rounded mb-2 shadow "/>
            </div>
            <div class="col-md-9 text-left mt-sm-2 maincolor">
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
              min={1}
              ref={inputValue}
              onChange={(e) => {
                setCartQuantity(e, data.id)
                }
              }
              />
          </td>
          <td class="actions" data-th="">
              <div class="text-right row">
                  {/* <button class="btn btn-white border-0 bg-white btn-md mb-2 mx-1">
                    <AiOutlineSync/>
                  </button> */}
                  <button class="btn btn-white border-0 bg-white btn-md mb-2 mx-1"
                  onClick={()=> removeItem(index)}>
                    <FaRegTrashAlt/>
                  </button>
                  
              </div>
          </td>
    </tr>
      )})}
  </tbody>
</Table>
            
            <div class="float-right text-right">
                <h4>Subtotal:</h4>
                <h1>$ {cartData.reduce((tot, item) =>{
                  const qua = cartItems.find((i) => i.id == item.id).quantity
                  return (tot + item.price*qua)}
                  ,0)}</h1>
                {/* <button onClick={testing}>Button</button> */}
            </div>
        </div>
    </div>
    <div class="row mt-4 d-flex align-items-center">
    <div class="col">
            <a className='allbtn' onClick={()=>{nav("../borrow")}}>
            <AiOutlineShoppingCart /> Continue Shopping</a> </div>
            <div class="col text-right">
            <a class="allbtn"onClick={()=>{ 
              setPaymentState(true)
              setCartQua(cartItems)
              }}>Checkout</a>       
        </div>
            

    </div>
</div>
</section>}

    </div>
  )
}

export default Cart