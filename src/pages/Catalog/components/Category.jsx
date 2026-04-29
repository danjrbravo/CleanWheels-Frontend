
import Card from './Card';

function Category(props) {
  return (
    <div className="categoria">
      <h2>{props.titulo}</h2>
      <div className="tarjetas_container">
              {props.servicios.map((servicio) => (
                  <Card
                      key={servicio.id}
                      imagen={servicio.imagen}
                      nombre={servicio.nombre}
                      descripcion={servicio.descripcion}
                      duracion={servicio.duracion}
                      precio={servicio.precio}
                  />
              ))}
      </div>
    </div>
  );
}

export default Category;