import { useState, useEffect } from 'react'
import Category from './components/Category';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import car1 from '../../assets/car1.jpg'
import car2 from '../../assets/car2.jpg'
import car3 from '../../assets/car3.jpg'
import car4 from '../../assets/car4.jpg'
import car5 from '../../assets/car5.jpg'
import car6 from '../../assets/car6.jpeg'
import './Catalog.css'

const categorias = [
  {
    id: 1,
    titulo: "Lavado Exterior",
    servicios: [
      { id: 1, imagen: car1, name: "Lavado Básico", description: "Limpieza exterior completa", duration: 30, price: "15000.00" },
      { id: 2, imagen: car2, name: "Lavado Premium", description: "Lavado + encerado", duration: 45, price: "25000.00" },
      { id: 3, imagen: car3, name: "Lavado Deluxe", description: "Lavado + encerado + llantas", duration: 60, price: "35000.00" }
    ]
  },
  {
    id: 2,
    titulo: "Interiores",
    servicios: [
      { id: 4, imagen: car4, name: "Aspirado Básico", description: "Aspirado de tapetes y asientos", duration: 20, price: "12000.00" },
      { id: 5, imagen: car5, name: "Limpieza Profunda", description: "Aspirado + limpieza de tablero", duration: 40, price: "22000.00" },
      { id: 6, imagen: car6, name: "Detailing Interior", description: "Limpieza completa interior", duration: 90, price: "45000.00" }
    ]
  }
];


function Catalog() {
  return (
    <>
    <Navbar />
    <div className="catalogo">
      {categorias.map((categoria) => (
        <Category
          key={categoria.id}
          titulo={categoria.titulo}
          servicios={categoria.servicios}
        />
      ))}
    </div>
    <Footer />
    </>
  );
}

export default Catalog;


