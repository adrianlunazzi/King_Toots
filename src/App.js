import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";
import ItemListContainer from "./components/ItemListConteiner/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import ThankyouPage from "./components/Thanks/ThankyouPage";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import { CartFunction } from "./components/contexts/CartContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartFunction>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <ItemListContainer greeting="Bienvenidos a King Toot" />
            </Route>
            <Route path="/:Category" exact>
              <ItemList />
            </Route>
            <Route path="/:Category/:id" exact>
              <ItemDetailContainer />
            </Route>
          </Switch>
          <Route path="/Cart" exact>
            <Cart />
          </Route>
          <Route exact path="/Thankyou" component={ThankyouPage} />
          <Footer />
        </CartFunction>
      </BrowserRouter>
    </div>
  );
}

export default App;
