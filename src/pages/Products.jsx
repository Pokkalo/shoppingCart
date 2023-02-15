import React from 'react'
import { productInput } from '../data/DummyData'
import { Form, Button,Card } from 'react-bootstrap'
import {doc, setDoc} from 'firebase/firestore'
import {AiOutlineSearch} from 'react-icons/ai'

const Products = () => {
  return (
    <div className='--product-image_size'>
      {/* <img src="./imgs/happy_elderly.png" alt="" className='w-100' ></img> */}
      {/* <div className='d-flex flex-column justify-content-center align-items-center m-0 p-5 position-absolute'> */}
      {/* <header class="section-header">
        <section class="header-main border-bottom">
            <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-2 col-4">
                <a href="#" class="brand-wrap">
                  Company Name
                </a> 
            </div>
            <div class="col-lg-6 col-sm-12">
                <form action="#" class="search">
                    <div class="input-group w-100">
                        <input type="text" class="form-control" placeholder="Search" />
                        <div class="input-group-append">
                          <button class="btn btn-primary" type="submit">
                            <i class="fa fa-search"></i>
                          </button>
                        </div>
                    </div>
                </form> 
            </div> 
            <div class="col-lg-4 col-sm-6 col-12">
                <div class="widgets-wrap float-md-right">
                    <div class="widget-header  mr-3">
                        <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></a>
                        <span class="badge badge-pill badge-danger notify">0</span>
                    </div>
                    <div class="widget-header icontext">
                        <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></a>
                        <div class="text">
                            <span class="text-muted">Welcome!</span>
                            <div> 
                                <a href="#">Sign in</a> |  
                                <a href="#"> Register</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </div> 
            </div> 
        </section>
        </header>  */}
       

      
        <section class="section-content padding-y mt-3">
        <div class="container">
        <div class="row">
            <aside class="col-md-3">
                
        <div class="card">
            <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">Product type</h6>
                    </a>
                </header>
                <div class="filter-content collapse show" id="collapse_1">
                    <div class="card-body">
                        <form class="pb-3">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Search" />
                          <div class="input-group-append">
                            <button class="btn btn-light" type="button"><AiOutlineSearch/></button>
                          </div>
                        </div>
                        </form>

                    </div> 
                </div>
            </article>
            <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">Brands </h6>
                    </a>
                </header>
                <div class="filter-content collapse show" id="collapse_2">
                    <div class="card-body">
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">Apple
                              <b class="badge badge-pill badge-light float-right">120</b>  </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">Sa
                              <b class="badge badge-pill badge-light float-right">15</b>  </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">Mitsubishi 
                              <b class="badge badge-pill badge-light float-right">35</b> </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">Nissan 
                              <b class="badge badge-pill badge-light float-right">89</b> </div>
                        </label>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <div class="custom-control-label">Honda 
                              <b class="badge badge-pill badge-light float-right">30</b>  </div>
                        </label>
            </div> 
                </div>
            </article> 
            <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">Price range </h6>
                    </a>
                </header>
                <div class="filter-content collapse show" id="collapse_3">
                    <div class="card-body">
                        <input type="range" class="custom-range" min="0" max="100" name="" />
                        <div class="form-row">
                        <div class="form-group col-md-6">
                          <label>Min</label>
                          <input class="form-control" placeholder="$0" type="number" />
                        </div>
                        <div class="form-group text-right col-md-6">
                          <label>Max</label>
                          <input class="form-control" placeholder="$1,0000" type="number" />
                        </div>
                        </div> 
                        <button class="btn btn-block btn-primary">Apply</button>
                    </div>
                </div>
            </article> 
            <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">Sizes </h6>
                    </a>
                </header>
                <div class="filter-content collapse show" id="collapse_4">
                    <div class="card-body">
                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> XS </span>
                      </label>
                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> SM </span>
                      </label>
                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> LG </span>
                      </label>
                      <label class="checkbox-btn">
                        <input type="checkbox" />
                        <span class="btn btn-light"> XXL </span>
                      </label>
                </div>
                </div>
            </article> 
            <article class="filter-group">
                <header class="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" class="">
                        <i class="icon-control fa fa-chevron-down"></i>
                        <h6 class="title">More filter </h6>
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
            <main class="col-md-9">
        <header class="border-bottom mb-4 pb-3">
                <div class="form-inline">
                    <span class="mr-md-auto"> </span>
                    <select class="mr-2 form-control">
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
                    </div>
                </div>
        </header>
        <div class="row">
            {/* <div class="col-md-4">
                <figure class="card card-product-grid">
                    <div class="img-wrap"> 
                        <span class="badge badge-danger"> NEW </span>
                        <img src="assets/images/items/1.jpg" />
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div> 
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <a href="#" class="title">Great item name goes here</a>
                            <div class="price-wrap mt-2">
                                <span class="price">$1280</span>
                                <del class="price-old">$1980</del>
                            </div>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                    </figcaption>
                </figure>
            </div>  */}
            <div className="card-columns">
            {productInput.map((data) => (
                <Card style={{ width: '18rem' }} className="card">
                <Card.Img variant="top" src={data.images[0]} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                    {data.description}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            // <div class="col-md-4">
            //     <figure class="card card-product-grid">
            //         <div class="img-wrap"> 
            //             <img src={data.images[0]} className="w-100"/>
            //             <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
            //         </div>
            //         <figcaption class="info-wrap">
            //             <div class="fix-height">
            //                 <a href="#" class="title">{data.title}</a>
            //                 <div class="price-wrap mt-2">
            //                     <span class="price">{data.price}</span>
            //                 </div> 
            //             </div>
            //             <a href="#" class="btn btn-block btn-primary">Add to cart </a>  
            //         </figcaption>
            //     </figure>
            // </div>
            ))} 
            </div>
           
        </div> 
        <nav class="mt-4" aria-label="Page navigation sample">
          <ul class="pagination">
            <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
            </main>
        </div>
        </div> 
        </section>
        
        <footer class="section-footer border-top padding-y">
            <div class="container">
                <p class="float-md-right"> 
                    &copy; Copyright 2021 All rights reserved
                </p>
                <p>
                    <a href="#">Terms and conditions</a>
                </p>
            </div>
        </footer>
      </div>
    // </div>
  )
} 

export default Products