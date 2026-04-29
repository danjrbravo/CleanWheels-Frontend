
import CategoriaSeccion from './components/Category';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Catalog.css';
import car1 from '../../assets/car1.jpg'
import car2 from '../../assets/car2.jpg'
import car3 from '../../assets/car3.jpg'
import car4 from '../../assets/car4.jpg'
import car5 from '../../assets/car5.jpg'
import car6 from '../../assets/car6.jpeg'

const categorias = [
  {
    id: 1,
    titulo: "Lavado Exterior",
    servicios: [
      { id: 1, imagen: car1, nombre: "Lavado Básico", descripcion: "Limpieza exterior completa", duracion: "30 min", precio: "$15.000" },
      { id: 2, imagen: car2, nombre: "Lavado Premium", descripcion: "Lavado + encerado", duracion: "45 min", precio: "$25.000" },
      { id: 3, imagen: car3, nombre: "Lavado Deluxe", descripcion: "Lavado + encerado + llantas", duracion: "60 min", precio: "$35.000" }
    ]
  },
  {
    id: 2,
    titulo: "Interiores",
    servicios: [
      { id: 4, imagen: car4, nombre: "Aspirado Básico", descripcion: "Aspirado de tapetes y asientos", duracion: "20 min", precio: "$12.000" },
      { id: 5, imagen: car5, nombre: "Limpieza Profunda", descripcion: "Aspirado + limpieza de tablero", duracion: "40 min", precio: "$22.000" },
      { id: 6, imagen: car6, nombre: "Detailing Interior", descripcion: "Limpieza completa interior", duracion: "90 min", precio: "$45.000" }
    ]
  }
];

function Catalog() {
  return (
    <>
      <Navbar />
    <div className="catalogo">
      {categorias.map((categoria) => (
        <CategoriaSeccion
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


