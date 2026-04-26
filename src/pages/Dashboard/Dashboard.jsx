import { useState } from "react";
import Sidebar from "./Components/sidebar/Sidebar";
import Reservas from "./Components/reservas/Reservas";
import Vehiculos from "./Components/vehiculos/Vehiculos";
import "./Dashboard.css";
 
const PAGES = {
  reservas: <Reservas />,
  vehiculos: <Vehiculos />,
};
 
export default function Dashboard() {
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