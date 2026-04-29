import { useState } from 'react'
import './Servicios.css'

const serviciosIniciales = [
  { id: 1, name: "Lavado Básico", price: "15000.00", description: "Limpieza exterior completa", duration: 30, is_active: true },
  { id: 2, name: "Lavado Premium", price: "25000.00", description: "Lavado + encerado", duration: 45, is_active: true },
  { id: 3, name: "Lavado Deluxe", price: "35000.00", description: "Lavado + encerado + llantas", duration: 60, is_active: true },
  { id: 4, name: "Aspirado Básico", price: "12000.00", description: "Aspirado de tapetes y asientos", duration: 20, is_active: true },
  { id: 5, name: "Limpieza Profunda", price: "22000.00", description: "Aspirado + limpieza de tablero", duration: 40, is_active: false },
  { id: 6, name: "Detailing Interior", price: "45000.00", description: "Limpieza completa interior", duration: 90, is_active: true },
]

const formularioVacio = { name: "", price: "", description: "", duration: "", is_active: true }

export default function Servicios() {
  const [servicios, setServicios] = useState(serviciosIniciales)
  const [formulario, setFormulario] = useState(formularioVacio)
  const [editandoId, setEditandoId] = useState(null)
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormulario(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleGuardar = () => {
    if (!formulario.name || !formulario.price || !formulario.description || !formulario.duration) return

    if (editandoId !== null) {
      setServicios(prev => prev.map(s => s.id === editandoId ? { ...formulario, id: editandoId } : s))
    } else {
      const nuevoId = servicios.length + 1
      setServicios(prev => [...prev, { ...formulario, id: nuevoId }])
    }

    setFormulario(formularioVacio)
    setEditandoId(null)
    setMostrarFormulario(false)
  }

  const handleEditar = (servicio) => {
    setFormulario(servicio)
    setEditandoId(servicio.id)
    setMostrarFormulario(true)
  }

  const handleEliminar = (id) => {
    setServicios(prev => prev.filter(s => s.id !== id))
  }

  const handleCancelar = () => {
    setFormulario(formularioVacio)
    setEditandoId(null)
    setMostrarFormulario(false)
  }

  return (
    <div className="servicios">
      <div className="servicios_header">
        <h1 className="servicios_titulo">Administrar Servicios</h1>
        <button className="btn_agregar" onClick={() => setMostrarFormulario(true)}>
          + Nuevo Servicio
        </button>
      </div>

      {mostrarFormulario && (
        <div className="servicios_formulario">
          <h2>{editandoId ? 'Editar Servicio' : 'Nuevo Servicio'}</h2>
          <div className="formulario_grid">
            <input name="name" placeholder="Nombre" value={formulario.name} onChange={handleChange} />
            <input name="price" placeholder="Precio" value={formulario.price} onChange={handleChange} />
            <input name="duration" placeholder="Duración (min)" value={formulario.duration} onChange={handleChange} />
            <input name="description" placeholder="Descripción" value={formulario.description} onChange={handleChange} />
            <label className="formulario_check">
              <input type="checkbox" name="is_active" checked={formulario.is_active} onChange={handleChange} />
              Activo
            </label>
          </div>
          <div className="formulario_botones">
            <button className="btn_guardar" onClick={handleGuardar}>Guardar</button>
            <button className="btn_cancelar" onClick={handleCancelar}>Cancelar</button>
          </div>
        </div>
      )}

      <table className="servicios_tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Duración</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {servicios.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.description}</td>
              <td>{s.duration} min</td>
              <td>${s.price}</td>
              <td>
                <span className={`badge ${s.is_active ? 'activo' : 'inactivo'}`}>
                  {s.is_active ? 'Activo' : 'Inactivo'}
                </span>
              </td>
              <td className="acciones">
                <button className="btn_editar" onClick={() => handleEditar(s)}>Editar</button>
                <button className="btn_eliminar" onClick={() => handleEliminar(s.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}