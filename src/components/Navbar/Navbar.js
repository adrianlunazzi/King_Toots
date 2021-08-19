import React from "react";
import CartWidget from "./CardWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

const Menu = () => {
  const showMenu = () => {
    document.getElementById("showMenu").classList.toggle("show");
  };
  return (
    <div>
      <nav className="menu">
        <label className="logoConteiner">
          <Link to="/">
            <img src="/images/logo.png" width="74px" height="54" alt="" />
          </Link>
          <div className="logo">
            <Link to="/">
              <h1>King Toots</h1>
              <p>Music Store</p>
            </Link>
          </div>
        </label>
        <ul className="menu_items" id="showMenu">
          <li>
            <Link to="/Guitarra"> Guitarras</Link>
          </li>
          <li>
            <Link to="/Bajo">Bajos</Link>
          </li>
          <li>
            <Link to="/Baterias">Baterias</Link>
          </li>
          <li>
            <Link to="/Vientos">Vientos</Link>
          </li>
          <li>
            <Link to="/Teclados">Teclados</Link>
          </li>
          <li>
            <Link to="/Amplificadores">Amplificadores</Link>
          </li>
        </ul>
        <span className="btn_menu" onClick={() => showMenu()}>
          <i className="fas fa-bars"></i>
        </span>
        <div>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default Menu;
