import carrito from "./images/cart.svg"

const CardWidget = () =>
{
return(
<button type="button" className="btn btn-warning position-relative">
  <img src={carrito} alt="Logo"></img>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    
  </span>
</button>

)}

export default CardWidget;