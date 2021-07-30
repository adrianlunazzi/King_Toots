import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListConteiner/ItemListContainer";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a King Toots" />
    </div>
  );
}

export default App;
