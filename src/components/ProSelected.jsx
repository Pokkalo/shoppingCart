import React,{useState, useEffect } from 'react'
import { useNavigate, useSearchParams, createSearchParams } from 'react-router-dom'

import { productInput } from '../data/DummyData'
import { useShoppingCart } from '../data/CartContent'
import ProductItem from '../components/ProductItem'

import { Alert, Container, Button, Form, InputGroup } from 'react-bootstrap'


import {doc, setDoc, collection, addDoc, updateDoc, getDocs} from 'firebase/firestore'
import { UserAuth } from '../data/UserData'
import { db } from '../firebase-config'

import {AiOutlineSearch} from 'react-icons/ai'
import { Radio } from 'semantic-ui-react'


const ProSelected = () => {
    const {user, logged} = UserAuth()
    const [tempCart, setTempCart] = useState("")
    const [mergeCart, setMergeCart] = useState([])
    
    const [proData, setProData] = useState(productInput)
    const [warningSign, setWarmingSign] = useState(false)
    
    const [search, setSearch] = useState("")

    const [searchRadio, setSearchRadio] = useState("")
    const [searchGender, setSearchGender] = useState("")

    const {openCart, cartQuantity, cartItems} = useShoppingCart()

    const userRef = collection(db, "user")

    const clickBoxesForCate = [
        {
            id: 0,
            category: "All",
            search: ""
        },
        {
            id: 1,
            category: "Cat",
            search: "cat"
        },
        {
            id: 2,
            category: "Dog", 
            search: "dog"
        },
        {
            id: 3,
            category: "Other",
            search: "other"
        },
    ]

    const clickBoxesForGender = [
        {
            id: 4,
            gender: "All", 
            search: ""
        },
        {
            id: 5,
            gender: "Male", 
            search: "M"
        },
        {
            id: 6,
            gender: "Female", 
            search: "F"
        },
    ]

    const nav = useNavigate()

    useEffect(() => {

    }, [proData])
 

    const submitAll = ()=>{
        const selectedItems = cartItems.map((data) => proData.find((pro) => (pro.id == data.id)))
        setTempCart(selectedItems)
        setWarmingSign(true)
        console.log(selectedItems)
        console.log(cartItems)
        
    }

    
    const handleAdd = async() => {
        console.log(tempCart.map((data) => (data)))
        try {
            const data = await getDocs(userRef, user.uid)
            let cart = []
            data.forEach((doc) => {
              cart.push({...doc.data(), id: doc.id})
            })
            console.log(cart)
            cart = cart.find((data)=> data.id === user.uid).shoppingCart
            const ids = new Set(cart.map((i) => i.id))
            const newCart = cart.concat(tempCart.filter((item) => (!ids.has(item.id))))
            console.log(newCart)
            await updateDoc(doc(collection(db, "user"), user.uid), {
              shoppingCart: newCart
            })

            setTempCart([])
            console.log(user.uid)
            nav('../cart')
        } catch (error) {
            console.log(error.message)
            nav('../cart')
        }
        console.log(tempCart.map((data) => (data)))
        setWarmingSign(false)
    }

    const test = async(e) =>{
        e.preventDefault()
        console.log(tempCart.map((data) => (data)))
        try {
            await updateDoc(doc(collection(db, "user"), user.uid),{
              shoppingCart: tempCart
            })
            setTempCart([])
            
        } catch (error) {
            console.log(error.message)
        } finally{
            console.log("Done")
        }
        console.log(tempCart.map((data) => (data)))
    }

    const object = (id) => {
        const selectedProduct = proData.find((data) =>(data.id === parseInt(id)))
        return selectedProduct
    }


  return (
    <div className='--product-image_size mainbg'>

      
        <section class="section-content padding-y pt-5">
        <div class="container pb-5">

        {warningSign? <Alert variant='transparent'
        className='position-fixed --warnning_sign-styling col-10 col-sm-8 col-md-7 col-lg-6 mainbg border border-warning' style={{zIndex: "200"}}>
            <Container className='h-50 col maincolor'>
            <Alert.Heading className='text-center'>Are you ready to take them/it home?</Alert.Heading>
            <p className='text-center'>
                Please make sure you have prepared the suitable environment for your new member(s)
            </p>
            
            </Container>
            <hr className=''/>
            <Container className="col">
                <div className='d-flex align-content-center justify-content-between my-0'>
                    <Button variant='transparent' className='w-50 align-content-center ml-1 mr-5 noshadowbtn' onClick={handleAdd}> Yes </Button>
                    
                    <Button variant='transparent' className='w-50 align-content-center mr-1 noshadowbtn' onClick={()=> {setWarmingSign(false)}}> No </Button>                    
                </div>
            </Container>
        </Alert>: null}
            
            {/* <div className="bg-danger position-fixed --warnning_sign-styling d-flex flex-column justify-content-around align-content-center rounded" style={{zIndex: "200"}}>
                <div className='text-center'>Are you ready to take them/it home?</div>

                <div className='d-flex justify-content-around align-content-center'>
                    <button className='w-25'> Yes </button>
                    <button className='w-25'> No </button>                    
                </div>

                
            </div> */}
        <div class="row maincolor">
            <aside class="col-md-4">
                
        <div class="card">
            <article class="filter-group">
                <header class="card-header bg-brown">
                    <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
                        
                        <h6 className="title maincolor">Search</h6>
                    </a>
                </header>
                <div class="filter-content collapse show" id="collapse_1">
                    <div class="card-body">
                    <Form>
                        <InputGroup className='my-3'>

                            {/* onChange for search */}
                            <Form.Control
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                            placeholder='Search contacts'
                            />
                        </InputGroup>
                    </Form>

                        
                        {/* <form class="pb-3">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Search" />
                          <div class="input-group-append">
                            <button class="btn btn-light border" type="button"><AiOutlineSearch/></button>
                          </div>
                        </div>
                        </form> */}

                    </div> 
                </div>
            </article>
            <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title maincolor">Filter</h6>
                    </a>
                </header>
                <div class="filter-content collapse show" id="collapse_2">
                    <div class="card-body">
                    {clickBoxesForCate.map((item)=>(
                       <Form.Check 
                       type="radio" className='checkedradio'
                       id={item.id}
                       value={item.search}
                       label={item.category}
                       name="group1"
                       onClick={(e)=>{
                            setSearchRadio(e.target.getAttribute("value"))
                        }}/>
                        ))}

                        <br />
                    {clickBoxesForGender.map((item)=>(
                       <Form.Check 
                       type="radio" className='checkedradio'
                       id={item.id}
                       value={item.search}
                       label={item.gender}
                       name="group2"
                       onClick={(e)=>{
                            setSearchGender(e.target.getAttribute("value"))
                        }}/>
                        ))}




                        {/* onClick={(e)=>{
                                    console.log(e.target.checked)
                                    console.log(e.target.getAttribute("value"))
                                }
                                    }
                                    checked={clickedBox === item } */}
            </div> 
                </div>
            </article> 
            <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title maincolor">Selected list {cartQuantity > 0 && <span>({cartQuantity} in your List)</span>} </h6>
                    </a>
                </header>
                <div class="filter-content collapse show" id="collapse_3">
                    {cartQuantity>0 ? <div class="card-body">
                        {cartItems.map((data) => <div className='d-flex justify-content-between my-3'> 
                        <div>{proData.find((pro) => (pro.id == data.id)).title}</div>
                        <div>{proData.find((pro) => (pro.id == data.id)).breed}</div> 
                        </div> )}
                        <button class="noshadowbtn col-12" onClick={submitAll}>Confirm all</button>
                    </div> : <div className='d-flex justify-content-center align-items-center' style={{height: "100px"}}>Nothing selected</div>  }
                </div>
            </article> 
           
            <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title maincolor">More filter </h6>
                    </a>
                </header>
                <div class="filter-content collapse in" id="collapse_5">
                    <div class="card-body">
                        <label class="custom-control custom-radio">
                          <input type="radio" name="myfilter_radio" checked="" class="custom-control-input" />
                          <div class="custom-control-label">Any condition</div>
                        </label>
                        <label class="custom-control custom-radio">
                          <input type="radio" name="myfilter_radio" class="custom-control-input" />
                          <div class="custom-control-label">Brand new </div>
                        </label>
                        <label class="custom-control custom-radio">
                          <input type="radio" name="myfilter_radio" class="custom-control-input" />
                          <div class="custom-control-label">Used items</div>
                        </label>
                        <label class="custom-control custom-radio">
                          <input type="radio" name="myfilter_radio" class="custom-control-input" />
                          <div class="custom-control-label">Very old</div>
                        </label>
                    </div>
                </div>
            </article> 
        </div> 
            </aside> 
            <main class="col-md-8">
        <header class="border-bottom mb-4 pb-3">
                <div class="form-inline ">
                    <span class="mr-md-auto"> </span>
                    {/* <select class="mr-2 form-control">
                        <option>Latest items</option>
                        <option>Trending</option>
                        <option>Most Popular</option>
                        <option>Cheapest</option>
                    </select>
                    <div class="btn-group">
                        <a href="#" class="btn btn-outline-secondary" data-toggle="tooltip" title="List view"> 
                            <i class="fa fa-bars"></i></a>
                        <a href="#" class="btn  btn-outline-secondary active" data-toggle="tooltip" title="Grid view"> 
                            <i class="fa fa-th"></i></a>
                    </div> */}
                </div>
        </header>

        <div class="row">
            
            <div className="card-columns">
            {productInput.filter((item) => {
                return search.toLocaleLowerCase() === ""?
                item:
                item.breed.toLowerCase().includes(search.toLowerCase()) ||  item.title.toLowerCase().includes(search.toLowerCase())
            })
            
            .filter((item)=>{
                return searchRadio.toLowerCase() === ""?
                item:
                item.category.toLowerCase().includes(searchRadio.toLowerCase())
            })
            .filter((item)=>{
                return searchGender.toLowerCase() === ""?
                item:
                item.gender.toLowerCase().includes(searchGender.toLowerCase())
            })
            .map((data) => (
                <ProductItem {...data} />
            ))} 
            </div>
            
        </div> 
     
            </main>
        </div>
        </div> 
        </section>
        
      </div>
  )
}

export default ProSelected