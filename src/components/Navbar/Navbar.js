import React from "react";
import CartWidget from "./CardWidget/CartWidget";
import "./navbar.css";

const Menu = () => {
  const showMenu = () => {
    document.getElementById("showMenu").classList.toggle("show");
  };
  return (
    <div>
      <nav className="menu">
        <label className="logoConteiner">
          <img src="/images/logo.png" width="74px" height="54" alt="" />
          <div className="logo">
            <strong>King Toots</strong>
            <br />
            Music Store
          </div>
        </label>
        <ul className="menu_items" id="showMenu">
          <li>
            <a href="/">Guitarras</a>
          </li>
          <li>
            <a href="/">Bajos</a>
          </li>
          <li>
            <a href="/">Baterias</a>
          </li>
          <li>
            <a href="/">Vientos</a>
          </li>
          <li>
            <a href="/">Teclados</a>
          </li>
          <li>
            <a href="/">Amplificadores</a>
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
