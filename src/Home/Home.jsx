import React from 'react'
import Navbar from '../navbar/Navbar'
import Herobanner from '../herobanner/Herobanner'
import HourFrontServices from '../frontservicios/HourFrontServices'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <Herobanner></Herobanner>
    <HourFrontServices></HourFrontServices>
    <Footer></Footer>
    </>
  )
}

export default Home