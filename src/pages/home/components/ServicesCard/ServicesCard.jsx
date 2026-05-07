import React from 'react'
import './ServicesCard.css'

const ServicesCard = ({ currentHour, reservations }) => {
  if (!reservations || reservations.length === 0) {
    return <p className='no-services'>No hay reservas disponibles</p>
  }

  const getStatusColor = (status) => {
    if (status === 'pendiente') return '#FFD700'
    if (status === 'en_proceso') return '#4CAF50'
    return '#CCCCCC'
  }

  return (
    <div className='reservations-wrapper'>
      {reservations.map((hourBlock, index) => {
        const isCurrentHour = hourBlock.hour_label === currentHour
        return (
          <div 
            key={index} 
            className={`hour-block ${isCurrentHour ? 'current-hour' : ''}`}
          >
            <div className='hour-label'>Reservas de {hourBlock.hour_label}</div>
            <div className='slots-container'>
              {hourBlock.employees.map((slot) => (
                <div key={slot.slot_index} className='slot'>
                  {slot.reservation_id ? (
                    <div className='slot-content'>
                      <div className='slot-header'>
                        <div 
                          className='status-indicator' 
                          style={{ backgroundColor: getStatusColor(slot.status) }}
                        ></div>
                        <span className='status-label'>{slot.status}</span>
                      </div>
                      <div className='slot-info'>
                        <p className='vehicle-info'>
                          <strong>{slot.marca} {slot.modelo}</strong>
                        </p>
                        <p className='placa'>{slot.placa}</p>
                        <p className='services'>
                          {slot.services && slot.services.join(', ')}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className='slot-empty'>
                      <p>Disponible</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ServicesCard