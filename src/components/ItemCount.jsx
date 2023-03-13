import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {

    const [items, setItems] = useState(1);
    const [itemStock, SetItemStock] = useState(stock);
    const [itemAdded, SetItemAdded] = useState(false);

    const addToCart = () =>
    {
        if (itemStock >= items) {
            SetItemStock(itemStock -items);
            setItems(1);
            SetItemAdded(true);
            onAdd(items);
        }
    //     if(itemStock >= items && itemStock >0)
    //     {
    //         SetItemStock(itemStock -items);
          
    //        (itemStock - items) > 0 ? setItems(1) : setItems(0);
    //     }
    //     else{
    //         setItems(0);
    //         SetItemStock(0);
           
    //     }
    //     SetItemAdded(true);
    // }
    }
    const IncrementarStock = () =>
    {
        if(items < itemStock){
            setItems(items + 1)
        }
    }
    const decrementarStock =()=>
    {
        if (items > 1){

            setItems(items -1);
        } 
    }

    //efecto para que cargue el stock cuando termine de cargar la pagina.
    useEffect(() => {
        SetItemStock(stock);
    },[stock])

    
    return (
        <div className="container">
            <div className="row">
                <div className="col text-end">
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" onClick={decrementarStock} className="btn btn-warning">-</button>
                        <button type="button" className="btn btn-warning">{items}</button>
                        <button type="button" onClick={IncrementarStock} className="btn btn-warning">+</button>
                    </div>
                </div>
                <div className="col">
                        {
                        itemAdded ? <Link to={"/cart"} className= " btn btn-warning">Terminar mi compra</Link>:
                        <button className= " btn btn-warning" onClick={addToCart}>Agregar al carrito</button>
                        }
                </div>
            </div>
        </div>

    )
}

export default ItemCount;