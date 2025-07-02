// import { ShoppingList1 } from "./components/4Errors/ShoppingList1";
import { ShoppingList2 } from "./components/4Errors/ShoppingList2";

function App() {
  const groceries = ["Manzanas", "Pan", "Leche", "Leche"];

  const selectItem = (item: (typeof groceries)[0]) => {
    console.log("Seleccionado:", item);
  };
  return (
    <>
      {/* <ShoppingList1 groceries={groceries} selectItem={selectItem} /> */}
      <ShoppingList2 groceries={groceries} selectItem={selectItem} />
    </>
  );
}

export default App;
