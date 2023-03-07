import { useEffect, useState } from 'react'
import React from 'react'
import HomeProduct from '../components/HomeProduct'
import ProSelected from '../components/ProSelected'

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'


const Products = () => {

  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    const loadingPage = async() =>{
      const testing = setTimeout(()=>{
          setLoading(false)
      }, 1000)
      await testing()
    }
    loadingPage()
  },[])




  return (
    <div>
      {loading? 
      <div className='--pageSpace --loadingPage mainbg w-100 d-flex justify-content-center align-items-center' zIndex={999}>
        <ClimbingBoxLoader color="#8b622e"  loading={loading}/>
      </div>
      : 
      <>
      <HomeProduct/>
      <ProSelected/>
      </>
      }
      
    </div>
  )
}

export default Products