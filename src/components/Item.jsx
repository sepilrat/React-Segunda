import { Link } from "react-router-dom";

const Item = ({ item }) => {
    
    return (

        <Link class="text-decoration-none" to={"/item/" + item.index}>
            <div className="card text-center text-black border-0">
                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                </div>
            </div>
        </Link>
      
    )

}

export default Item;