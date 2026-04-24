import React from 'react'
import './Herobanner.css'
const Herobanner = () => {
  return (
    <div className='hero-section'>
        <div className='hero-left'>
            <h1>El cuidado que tu vehiculo necesita</h1>
            <span>Limpieza, lavado, encerado y mucho mas</span>
            <button className='agendar'>Agendar ya</button>
        </div>
        <div className='hero-right'>
            <img src="src/assets/gt_car.jpeg" alt="reactlogo" />
        </div>
    </div>
  )
}

export default Herobanner