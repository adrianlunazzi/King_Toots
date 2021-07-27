import React from "react";
import "./Navbar/navbar.css";
const Buttons = () => {
  return (
    <div className="d-flex justify-content-center py-2">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false">
          Guitarras
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Eléctricas
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Acuústicas
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Electroacústicas
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false">
          Bajos
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Eléctricos
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Electroacústicos
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false">
          Vientos
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Saxos
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Trompetas
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Flautas
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link" href="#" role="button" aria-expanded="false">
          Teclados
        </a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link" href="#" role="button" aria-expanded="false">
          Baterías
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false">
          Amplificadores
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Guitarra
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Bajos
            </a>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default Buttons;
