import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext);
    const onAdd = (quantity)=>
    {
    addItem(item,quantity)

    }
   
    return (
       
        <div className="Container ">
            <div className="row mt-5">
                <div className="col text-center">
                    <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="col">
                    <h1>{item.nombre}</h1>
                    <h5>{item.calorias} kkal</h5>
                    <p>{item.descripcion}</p>
                    <p><b>$ {item.precio}</b></p>
                    <div>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>

            </div>
        </div>

    )
   
}

export default ItemDetail;