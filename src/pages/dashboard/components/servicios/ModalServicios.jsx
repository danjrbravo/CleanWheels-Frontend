import { useState, useEffect } from "react";
import "./ModalServicios.css";

// ── Mock — reemplazar con fetch a GET /services/ ─────────────
const MOCK_SERVICES = [
  {
    id: 1,
    name: "Lavado básico",
    price: "30000.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duración estimada: 1 hora.",
    duration: 60,
    is_active: true,
    created_at: null,
    category: "Categoria servicios",
  },
  {
    id: 2,
    name: "Lavado completo",
    price: "55000.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Incluye interior y exterior.",
    duration: 90,
    is_active: true,
    created_at: null,
    category: "Categoria servicios",
  },
  {
    id: 3,
    name: "Lavado premium",
    price: "80000.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cera y tratamiento especial.",
    duration: 120,
    is_active: true,
    created_at: null,
    category: "Categoria servicios",
  },
  {
    id: 4,
    name: "Pulida",
    price: "120000.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulida completa de carrocería.",
    duration: 180,
    is_active: true,
    created_at: null,
    category: "Categoria servicios 2",
  },
  {
    id: 5,
    name: "Encerado",
    price: "90000.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Protección de pintura.",
    duration: 120,
    is_active: true,
    created_at: null,
    category: "Categoria servicios 2",
  },
  {
    id: 6,
    name: "Detailing",
    price: "200000.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Servicio completo de detailing.",
    duration: 240,
    is_active: true,
    created_at: null,
    category: "Categoria servicios 2",
  },
];

function formatPrice(price) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(Number(price));
}

export default function ModalServicios({ onClose, onAgendar }) {
  const [services, setServices]   = useState([]);
  const [loading, setLoading]     = useState(true);
  const [selected, setSelected]   = useState(null);

  useEffect(() => {
    // TODO: reemplazar con fetch real:
    // fetch(`${import.meta.env.VITE_API_URL}/services/`)
    //   .then(r => r.json())
    //   .then(json => setServices(json.data))
    //   .finally(() => setLoading(false));

    const timer = setTimeout(() => {
      setServices(MOCK_SERVICES);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Agrupar por categoría
  const categories = services.reduce((acc, svc) => {
    const cat = svc.category || "Servicios";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(svc);
    return acc;
  }, {});

  const handleSelect = (svc) => {
    setSelected(prev => prev?.id === svc.id ? null : svc);
  };

  const handleAgendar = () => {
    if (!selected) return;
    onAgendar(selected); // pasa el servicio seleccionado al padre
  };

  // Cerrar al hacer click en backdrop
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdrop}>
      <div className="modal-box">

        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">AGENDAR SERVICIOS</h2>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {loading ? (
            <div className="modal-loading">Cargando servicios...</div>
          ) : (
            Object.entries(categories).map(([cat, items]) => (
              <div key={cat} className="modal-category">
                <h3 className="modal-category-title">{cat}</h3>
                <div className="modal-services-grid">
                  {items.map(svc => (
                    <div
                      key={svc.id}
                      className={`service-card ${selected?.id === svc.id ? "selected" : ""}`}
                      onClick={() => handleSelect(svc)}
                    >
                      <p className="service-card-name">{svc.name}</p>
                      <p className="service-card-desc">{svc.description}</p>
                      <p className="service-card-price">{formatPrice(svc.price)}</p>
                      <p className="service-card-duration">Duración: {svc.duration} min</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button
            className={`btn-modal-agendar ${selected ? "enabled" : "disabled"}`}
            onClick={handleAgendar}
            disabled={!selected}
          >
            Agendar
          </button>
        </div>

      </div>
    </div>
  );
}