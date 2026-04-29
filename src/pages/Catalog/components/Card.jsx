function Card(props) {
  return (
    <div className="tarjeta">
      <div className="tarjeta_img_container">
        <img src={props.imagen} alt={props.nombre} className="tarjeta_img" />
      </div>
      <div className="tarjeta_content">
        <h3>{props.nombre}</h3>
        <p>{props.descripcion}</p>
        <p>Duración: {props.duracion}</p>
        <p className="tarjeta_precio">Precio: {props.precio}</p>
      </div>
    </div>
  );
}

export default Card;