import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListConteiner/ItemListContainer";
import ItemDetailContainer from "./components/ItemListConteiner/ItemDetailContainer/ItemDetailContainer";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a King Toots" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
