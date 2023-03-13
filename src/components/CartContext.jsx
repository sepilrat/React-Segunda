import { createContext, useState } from "react";
// esto se usa para que todos los componentes que este envueltos por este contexto puedan acceder a las propiedades
export const CartContext = createContext();

const CartContextProvider = (children)=> {
    const [cart, setCart] = useState([]);
    const addItem = (item, quantity) =>
    {
        alert();
        console.log(cart);
        console.log("d:  " , ...cart)
        if (isInCart(item.index))
        {

            let pos = cart.findIndex(x=> x.index === item.index)
            cart[pos].quantity += quantity;
            setCart([...cart]);  //desparrama el cart. funciona pero no entiendo como
        }else{
            //desparrama el array
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }
    const removeItem =(itemId)=>{
        //esta funcion devuelve todos los productos del array exepto el que coincide con el del filtro
        const items = cart.filter(item =>item.index !==itemId);
        setCart(items);
    }

    const clear =()=>{
        setCart([])
    }
    const isInCart=(itemId)=>{
        //Validad si existe un producto con el id
        return cart.some(item =>item.index === itemId)  
    }
    const cartTotal=() =>{
        return cart.reduce((accum, item) => accum +=item.quantity, 0)
    }

    const cartSum =() =>{
        return cart.reduce((accum,item) => accum += item.quantity * item.price, 0);
    }

    return(
        <CartContextProvider.Provider value ={{cart, addItem,removeItem,clear, cartTotal, cartSum}}> //las funciones que quiero que esten disponibls en el contexto
        {children}
        </CartContextProvider.Provider>

    )
}

export default CartContextProvider;