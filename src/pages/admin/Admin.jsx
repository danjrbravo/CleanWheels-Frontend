

import Sidebar from "./components/sidebar/Sidebar.jsx"
import Reservas from "../dashboard/components/reservas/Reservas.jsx"
import Vehiculos from "../dashboard/components/vehiculos/Vehiculos.jsx"
import Reportes from "./components/reportes/Reportes.jsx"
import Feedback from "./components/feedback/Feedback.jsx"
import Servicios from "./components/servicios/Servicios.jsx"

import { useState } from "react"
import "./Admin.css"

const PAGES = {
  reservas: <Reservas />,
  vehiculos: <Vehiculos />,
    reportes: <Reportes />,
    feedback: <Feedback />,
    servicios: <Servicios />
};
 
export default function Admin() {
  const [activePage, setActivePage] = useState("reservas");
 
  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="app-main">
        {PAGES[activePage]}
      </main>
    </div>
  );
}