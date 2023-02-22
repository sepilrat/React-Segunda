import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import arrayProductos from "./json/productos.json"

const ItemsListContainer = (prop) => {
    const [items, setItems] = useState([]);
    const {id} = useParams();  //para que tome los parámetros por url

    //efect para que demore 2 segundos y promise para traer el archivo json
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item=>item.categoria === id ) : arrayProductos); //si existe el Id de categoria filtra sino muestra todos
            }, 2000);

        });
        promesa.then((respuesta) => {
            setItems(respuesta);
        });

    }, [id]);

    return (

        <div className="container my-5">

            <ItemList items={items} />

        </div>

    );

}
export default ItemsListContainer;