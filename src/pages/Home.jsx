import React from 'react'
import FadeCarousel from '../components/FadeCarousel'
import CarousJSX from '../components/CarousJSX'
import JumbotJSX from '../components/JumbotJSX'
import WordAnimation from '../components/WordAnimation'
import Title from '../components/Title'
import HomeProduct from '../components/HomeProduct'

const Home = () => {
  return (
    <div>
      <FadeCarousel/>    
      <Title/>
      <HomeProduct/>
    </div>
  )
}

export default Home