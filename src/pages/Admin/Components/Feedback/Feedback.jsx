import './Feedback.css'
import { useState } from 'react'

const reseñas = [
  { id: 1, nombre: "Carlos M.", texto: "Excelente servicio, mi carro quedó impecable. Muy recomendado.", estrellas: 5 },
  { id: 2, nombre: "Laura P.", texto: "Buen trabajo, aunque tardaron un poco más de lo esperado.", estrellas: 4 },
  { id: 3, nombre: "Andrés R.", texto: "Muy buena atención al cliente y resultados increíbles.", estrellas: 5 },
  { id: 4, nombre: "María G.", texto: "El servicio fue bueno pero el precio me pareció alto.", estrellas: 3 },
  { id: 5, nombre: "Juan S.", texto: "Quedé muy satisfecho, volveré pronto.", estrellas: 5 },
  { id: 6, nombre: "Sofía T.", texto: "Rápido y eficiente, justo lo que necesitaba.", estrellas: 4 },
]

const Estrellas = ({ cantidad }) => (
  <div className="estrellas">
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} className={i <= cantidad ? 'estrella activa' : 'estrella'}>★</span>
    ))}
  </div>
)

function Feedback() {
  const [filtro, setFiltro] = useState('Día')
  const [pagina, setPagina] = useState(1)
  const porPagina = 6
  const total = Math.ceil(reseñas.length / porPagina)

  return (
    <div className="feedback">
      <h1 className="feedback_titulo">Reseñas</h1>

      <div className="feedback_filtros">
        {['Día', 'Semana', 'Mes'].map((f) => (
          <button
            key={f}
            className={`filtro_btn ${filtro === f ? 'activo' : ''}`}
            onClick={() => setFiltro(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="feedback_grid">
        {reseñas.map((r) => (
          <div key={r.id} className="feedback_card">
            <div className="feedback_avatar">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>
            <p className="feedback_nombre">{r.nombre}</p>
            <p className="feedback_texto">{r.texto}</p>
            <Estrellas cantidad={r.estrellas} />
          </div>
        ))}
      </div>

      <div className="feedback_paginacion">
        <button onClick={() => setPagina(p => Math.max(1, p - 1))}>‹</button>
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i + 1}
            className={pagina === i + 1 ? 'activo' : ''}
            onClick={() => setPagina(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => setPagina(p => Math.min(total, p + 1))}>›</button>
      </div>
    </div>
  )
}

export default Feedback