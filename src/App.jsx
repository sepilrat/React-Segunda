import Destacado from "./components/Destacado";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemsListContainer from "./components/ItemsListContainer";
import NavBar from "./components/NavBar";
import PromoApp from "./components/PromoApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";


function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Destacado />
      <Routes>
        <Route path={"/"} element={<ItemsListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemsListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        <Route path={"*"} element={<Error404/>}/>
      </Routes>
     
      
       <PromoApp/>
    </div>
    </BrowserRouter>
  );
}

export default App;
