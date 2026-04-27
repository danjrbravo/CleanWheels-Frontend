import { useState, useMemo } from "react";
import "./Vehiculos.css";

// ── Mock data — reemplazar con fetch más adelante ────────────
const MOCK_VEHICULOS = [
  { id: 1, servicio: "Servicio A", vehiculo: "Toyota Corolla",  fecha: "2024-01-10", status: "Completed" },
  { id: 2, servicio: "Servicio B", vehiculo: "Honda Civic",     fecha: "2024-01-12", status: "Active"    },
  { id: 3, servicio: "Servicio C", vehiculo: "Mazda CX-5",      fecha: "2024-01-15", status: "Cancelled" },
  { id: 4, servicio: "Servicio D", vehiculo: "Ford Explorer",   fecha: "2024-01-18", status: "Active"    },
  { id: 5, servicio: "Servicio E", vehiculo: "Nissan Rogue",    fecha: "2024-01-20", status: "Completed" },
  { id: 6, servicio: "Servicio F", vehiculo: "Chevrolet Spark", fecha: "2024-01-22", status: "Completed" },
  { id: 7, servicio: "Servicio G", vehiculo: "Kia Sportage",    fecha: "2024-01-25", status: "Active"    },
  { id: 8, servicio: "Servicio H", vehiculo: "Renault Duster",  fecha: "2024-01-28", status: "Completed" },
  { id: 9, servicio: "Servicio I", vehiculo: "Volkswagen Golf", fecha: "2024-02-01", status: "Completed" },
  { id: 10, servicio: "Servicio J", vehiculo: "Hyundai Tucson", fecha: "2024-02-03", status: "Cancelled" },
  { id: 11, servicio: "Servicio K", vehiculo: "Suzuki Vitara",  fecha: "2024-02-05", status: "Active"    },
  { id: 12, servicio: "Servicio L", vehiculo: "Jeep Compass",   fecha: "2024-02-08", status: "Completed" },
];

const STATUS_FILTERS = ["Todos", "Active", "Completed", "Cancelled"];
const PAGE_SIZE = 5;

const STATUS_LABELS = {
  Completed: "Completed",
  Active:    "Active",
  Cancelled: "Cancelled",
};

export default function Vehiculos() {
  const [search,     setSearch]     = useState("");
  const [filter,     setFilter]     = useState("Todos");
  const [page,       setPage]       = useState(1);

  // Stats
  const total      = MOCK_VEHICULOS.length;
  const completados = MOCK_VEHICULOS.filter(v => v.status === "Completed").length;
  const activos     = MOCK_VEHICULOS.filter(v => v.status === "Active").length;
  const cancelados  = MOCK_VEHICULOS.filter(v => v.status === "Cancelled").length;

  // Filtered + searched list
  const filtered = useMemo(() => {
    return MOCK_VEHICULOS.filter(v => {
      const matchFilter = filter === "Todos" || v.status === filter;
      const q = search.toLowerCase();
      const matchSearch = !q ||
        v.servicio.toLowerCase().includes(q) ||
        v.vehiculo.toLowerCase().includes(q) ||
        v.fecha.includes(q) ||
        v.status.toLowerCase().includes(q);
      return matchFilter && matchSearch;
    });
  }, [search, filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const goTo = (p) => setPage(Math.max(1, Math.min(p, totalPages)));

  const handleFilter = (f) => { setFilter(f); setPage(1); };
  const handleSearch = (e) => { setSearch(e.target.value); setPage(1); };

  return (
    <div className="vehiculos-container">
      <h1 className="vehiculos-title">Vehiculos</h1>

      {/* Search */}
      <input
        className="vehiculos-search"
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={handleSearch}
      />

      {/* Stats cards */}
      <div className="vehiculos-stats">
        <div className="stat-card">
          <span className="stat-label">Total</span>
          <span className="stat-value neutral">{total}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Completados</span>
          <span className="stat-value green">{completados}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Activo</span>
          <span className="stat-value amber">{activos}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Cancelados</span>
          <span className="stat-value red">{cancelados}</span>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="vehiculos-filters">
        {STATUS_FILTERS.map(f => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => handleFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="vehiculos-table-wrapper">
        <table className="vehiculos-table">
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Vehicle</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", color: "#9ca3af", padding: "24px" }}>
                  Sin resultados
                </td>
              </tr>
            ) : (
              paginated.map(v => (
                <tr key={v.id}>
                  <td>{v.servicio}</td>
                  <td>{v.vehiculo}</td>
                  <td>{v.fecha}</td>
                  <td>
                    <span className={`status-badge status-${v.status.toLowerCase()}`}>
                      {STATUS_LABELS[v.status]}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="vehiculos-pagination">
          <button className="page-btn" onClick={() => goTo(1)} disabled={currentPage === 1}>«</button>
          <button className="page-btn" onClick={() => goTo(currentPage - 1)} disabled={currentPage === 1}>‹</button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              className={`page-btn ${p === currentPage ? "active" : ""}`}
              onClick={() => goTo(p)}
            >
              {p}
            </button>
          ))}

          <button className="page-btn" onClick={() => goTo(currentPage + 1)} disabled={currentPage === totalPages}>›</button>
          <button className="page-btn" onClick={() => goTo(totalPages)} disabled={currentPage === totalPages}>»</button>
        </div>
      </div>
    </div>
  );
}