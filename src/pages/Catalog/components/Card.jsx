function Card(props) {
  return (
    <div className="tarjeta">
      <div className="tarjeta_img_container">
        <img src={props.imagen} alt={props.name} className="tarjeta_img" />
      </div>
      <div className="tarjeta_content">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>Duración: {props.duration} min</p>
        <p className="tarjeta_precio">Precio: ${props.price}</p>
      </div>
    </div>
  );
}

export default Card;