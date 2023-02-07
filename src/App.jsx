import Destacado from "./components/Destacado";
import ItemsListContainer from "./components/ItemsListContainer";
import NavBar from "./components/NavBar";
import PromoApp from "./components/PromoApp";


function App() {
  return (
    <div>
      <NavBar />
      <Destacado />
      <ItemsListContainer greeting="No hay productos para mostrar" />
      <PromoApp/>
    </div>

  );
}

export default App;
