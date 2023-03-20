import Destacado from "./components/Destacado";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemsListContainer from "./components/ItemsListContainer";
import NavBar from "./components/NavBar";
import PromoApp from "./components/PromoApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/CartContext";
import Cart from "./components/cart";
import ThankYou from "./components/ThankYou";


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <div>
      <NavBar />
      <Destacado /> 
      <Routes>
        <Route path={"/"} element={<ItemsListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemsListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        <Route path={"/Cart"} element={<Cart/>}/>
        <Route path={"/ThankYou/:orderId"} element={<ThankYou/>}/>
        <Route path={"*"} element={<Error404/>}/>
      </Routes>
        <PromoApp/>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
