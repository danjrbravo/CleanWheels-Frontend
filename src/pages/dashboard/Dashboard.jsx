import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Reservas from "./components/reservas/Reservas";
import Vehiculos from "./components/vehiculos/Vehiculos";
import "./Dashboard.css";

const PAGES = {
  reservas: <Reservas />,
  vehiculos: <Vehiculos />,
};

export default function Dashboard() {
  const [activePage, setActivePage] = useState("reservas");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} onNavigate={setActivePage} onLogout={handleLogout} />
      <main className="app-main">
        {PAGES[activePage]}
      </main>
    </div>
  );
}