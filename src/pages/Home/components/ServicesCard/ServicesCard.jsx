import React from 'react'
import './ServicesCard.css'
const ServicesCard = ({hour,cards}) => {
    const filteredCards = cards.filter( (card) => card.hour === hour)
    if(filteredCards.length === 0){
        return <p>No hay servicios en esta hora</p>
    }
    const listFilteredCards = filteredCards.map( card =>
        <div className='card' key={card.id}>
            <h3>ID: {card.id}</h3>
            <p>Estado: {card.state}</p>
            <p>Ref: {card.ref}</p>
        </div>
    )
  return (
    <div className='card-container'>
        {listFilteredCards}
    </div>
  )
}

export default ServicesCard