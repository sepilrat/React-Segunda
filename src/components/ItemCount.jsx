import { useState } from "react";

const ItemCount = (stock) => {
    const [items, setItems] = useState=(1);
    const [itemStock, SetItemStock] = useState(stock);

    const onAdd = () =>
    {
        if(itemStock >= items){
            SetItemStock(itemStock -items);
            console.log("se agregaron" + {items} + "productos")
        }
    }
    const IncrementarStock =() =>
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

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" onClick={decrementarStock} className="btn btn-danger">-</button>
                        <button type="button" className="btn btn-warning">{items}</button>
                        <button type="button" onClick={IncrementarStock} className="btn btn-success">+</button>
                    </div>
                </div>
                <div className="col">
                        <button onClick={onAdd()}>Agregar al carrito</button>
                </div>
            </div>
        </div>

    )
}

export default ItemCount;