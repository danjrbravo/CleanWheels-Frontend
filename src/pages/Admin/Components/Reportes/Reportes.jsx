import './Reportes.css'
import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const datosAnio = [
  { mes: 'Ene', ingresos: 1200000 },
  { mes: 'Feb', ingresos: 1800000 },
  { mes: 'Mar', ingresos: 1500000 },
  { mes: 'Abr', ingresos: 2000000 },
  { mes: 'May', ingresos: 1700000 },
  { mes: 'Jun', ingresos: 2200000 },
  { mes: 'Jul', ingresos: 1900000 },
  { mes: 'Ago', ingresos: 2500000 },
  { mes: 'Sep', ingresos: 2100000 },
  { mes: 'Oct', ingresos: 2800000 },
  { mes: 'Nov', ingresos: 2300000 },
  { mes: 'Dic', ingresos: 3000000 },
]

function Reportes() {
  const [filtro, setFiltro] = useState('Año')

  return (
    <div className="reportes">
      <h1 className="reportes_titulo">Finanzas</h1>

      <div className="reportes_filtros">
        {['Día', 'Semana', 'Año', 'Custom'].map((f) => (
          <button
            key={f}
            className={`filtro_btn ${filtro === f ? 'activo' : ''}`}
            onClick={() => setFiltro(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="reportes_cards">
        <div className="reporte_card">
          <p className="card_label">Total del Año</p>
          <p className="card_valor">$ 2.000.000</p>
          <p className="card_variacion positivo">▲ Subió un 12%</p>
        </div>
        <div className="reporte_card">
          <p className="card_label">Reservas</p>
          <p className="card_valor">$ 2.000.000</p>
          <p className="card_variacion positivo">▲ Subió un 13%</p>
        </div>
      </div>

      <div className="reportes_grafica">
        <p className="grafica_titulo">{filtro}</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={datosAnio}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="ingresos" fill="#00E5FF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Reportes