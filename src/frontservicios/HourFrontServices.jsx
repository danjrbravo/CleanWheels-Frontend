import React, { useEffect, useState } from 'react'
import ServicesCard from '../ServicesCard/ServicesCard';
import './HourFrontServices.css'

const HourFrontServices = () => {
  const [hour,setHour] = useState(`${new Date().getHours().toString()}:00`)
  useEffect(() => {
    const updateHour = () => {
      setHour(`${new Date().getHours()}:00`);
    };

    const now = new Date();
    const msToNextHour =
      (60 - now.getMinutes()) * 60 * 1000 -
      now.getSeconds() * 1000 -
      now.getMilliseconds();

    const timeout = setTimeout(() => {
      updateHour();

      const interval = setInterval(updateHour, 60 * 60 * 1000);

      return () => clearInterval(interval);
    }, msToNextHour);

    return () => clearTimeout(timeout);
  }, []);
  console.log(hour)
      const tarjetas = [
    { id: 1, hour: "10:00", state: "activo", ref: "A1" },
    { id: 2, hour: "11:00", state: "inactivo", ref: "B2" },
    { id: 3, hour: "10:00", state: "activo", ref: "C3" },
    { id: 4, hour: "8:00", state: "activo", ref: "D3" },
    { id: 5, hour: "9:00", state: "activo", ref: "D4" }
  ];
  return (
    <div>
        <div className='divider'></div>
        <div className='services-horizontal'>
          <h1>Tarjetas de las {hour}</h1>
          <ServicesCard hour={hour} cards={tarjetas}/>
        </div>
    </div>
  )
}

export default HourFrontServices