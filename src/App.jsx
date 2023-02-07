import Destacado from "./components/Destacado";
import ItemsListContainer from "./components/ItemsListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <Destacado />
      <ItemsListContainer greeting="No hay productos" />
    </div>

  );
}

export default App;
