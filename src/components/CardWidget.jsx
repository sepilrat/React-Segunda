import carrito from "./images/cart.svg"

const CardWidget = () =>
{
return(
<button type="button" class="btn btn-warning position-relative">
  <img src={carrito}></img>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    
  </span>
</button>

)}

export default CardWidget;