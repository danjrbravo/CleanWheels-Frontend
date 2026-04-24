import React, { useState } from "react"
import Logo from '../assets/CleanWheels.svg'
import './Navbar.css'

const Navbar = () => {
    const [active, setActive] = useState("Inicio");

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDd7xMgJedN2s&index=3" className="logo">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>
            <div className="navbar-middle">
                <ul className="nav-links">
                    <li
                        className={active === "Inicio" ? "active" : ""}
                        onClick={() => setActive("Inicio")}
                    >
                        Inicio
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className="btn-catalogo"><p>Catalogo</p></div>
                <div className="btn-login"><p>Agendar</p></div>
            </div>
        </nav>
    )
}

export default Navbar