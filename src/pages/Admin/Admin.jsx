

import Sidebar from "./Components/Sidebar/Sidebar.jsx"
import Reservas from "../Dashboard/Components/Reservas/Reservas.jsx"
import Vehiculos from "../Dashboard/Components/Vehiculos/Vehiculos.jsx"
import Reportes from "./Components/Reportes/Reportes.jsx"
import Feedback from "./Components/Feedback/Feedback.jsx"
import Servicios from "./Components/Servicios/Servicios.jsx"

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