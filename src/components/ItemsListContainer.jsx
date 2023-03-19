import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import arrayProductos from "./json/productos.json";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import Loading from "./Loading";

const ItemsListContainer = (prop) => {
    const [items, setItems] = useState([]);
    const { id } = useParams();  //para que tome los parámetros por url
    const [loading, setLoading] = useState(true);
    //Efecto que se utiliza solo una vez para subir a firebase el array de productos
    // useEffect(() => {   
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items")
    //     arrayProductos.forEach(item => {
    //         addDoc(itemsCollection, item);
    //     });
    // }, []);

    //efect para que demore 2 segundos y promise para traer el archivo json
    // useEffect(() => {
    //     const promesa = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(id ? arrayProductos.filter(item=>item.categoria === id ) : arrayProductos); //si existe el Id de categoria filtra sino muestra todos
    //         }, 2000);

    //     });
    //     promesa.then((respuesta) => {
    //         setItems(respuesta);
    //     });

    // }, [id]);

    useEffect(()=>{
        const db=getFirestore();
        const itemsCollection = collection(db,"items");
        const filter = id ? query(itemsCollection, where("categoria","==",id)) : itemsCollection;
        getDocs(filter).then(elements=>{
            setItems(elements.docs.map(element =>({id:element.id, ...element.data()})));
            setLoading(false);
        });
    },[id]);

    return (
           
        <div className="container my-5">
 
            {loading ? <Loading/> : <ItemList items={items} />}

        </div>

    );

}
export default ItemsListContainer;