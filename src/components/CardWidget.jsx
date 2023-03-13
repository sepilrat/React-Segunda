import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import carrito from "./images/cart.svg"

const CardWidget = () =>
{
  const {cartTotal} = useContext(CartContext)
return(
<Link to={"/Cart"}className="btn btn-warning position-relative">
  <img src={carrito} alt="Logo"></img>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cartTotal()}
    
  </span>
</Link>

)}

export default CardWidget;