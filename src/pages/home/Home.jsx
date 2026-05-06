import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Herobanner from './components/herobanner/Herobanner'
import HourFrontServices from './components/frontservicios/HourFrontServices'
import Footer from '../../components/footer/Footer'

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