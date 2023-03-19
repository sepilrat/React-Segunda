import { CartContext } from "./CartContext";
import { useContext, useState } from "react";
//import Item from "./Item";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const { cart, cartTotal, removeItem, clear, cartSum } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const buyer = { name: nombre, email: email, telefono: telefono };
        const fecha = new Date();
        const date = `${fecha.getFullYear()} - ${fecha.getMonth() + 1} - ${fecha.getDate()} ${fecha.getHours()} : ${fecha.getMinutes()}: ${fecha.getSeconds()}`
        const order = { buyer: buyer, cart: cart, date: date, cartTotal: cartSum() }
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(data => {
            setOrderId(data.id);
            console.log(data.id)
            //clear();
        }

        );

    }

    if (cartTotal() === 0) {
        return (
            <div className="alert alert-warning text-center">No se encontraron productos en el carrito</div>
        )
    }
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-4">

                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">E-Mail</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Telefono</label>
                            <input type="text" className="form-control" id="telefono" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
                    </form>


                </div>
                <div className="col-md-8">
                    <table className="table">
                        <tr>
                            <td colSpan={5}><button className="btn btn-warning" onClick={() => clear()}>Vaciar carrito</button></td>

                        </tr>

                        {
                            cart.map(item =>
                                <tr key={item.index}>
                                    <td className="text-start"><img src={item.imagen} alt={item.nombre} width={80}></img></td>
                                    <td className="text-start">{item.nombre}</td>
                                    <td className="text-center">{item.quantity} X {item.precio}</td>
                                    <td className="text-center">${item.quantity * item.precio}</td>
                                    <td className="text-end"><Link onClick={() => removeItem(item.index)}>Eliminar</Link></td>
                                </tr>
                            )

                        }
                        <tr>                <td></td>
                            <td></td>
                            <td className="text-center">Total a pagar: </td>
                            <td className="text-center"><b>${cartSum()}</b></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {orderId ? <div className="alert alert-warning bg-warning" role="alert"><h3>Gracias por tu compra</h3>
                        Se generó una nueva compra con el número de orden {orderId}  </div> : "..."
                    }
                    
                </div>
            </div>
        </div>
    )
}
export default Cart;