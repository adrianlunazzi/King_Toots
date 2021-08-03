import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListConteiner/ItemListContainer";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a King Toots" />
      <ItemCount />
    </div>
  );
}

export default App;
