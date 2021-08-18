import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";
import ItemListContainer from "./components/ItemListConteiner/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer greeting="Bienvenidos a King Toot" />
          </Route>
          <Route path="/:Category/" exact>
            <ItemList />
          </Route>
          <Route path="/:Category/:id" exact>
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
