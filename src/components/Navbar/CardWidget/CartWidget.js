import React from "react";
import { Link } from "react-router-dom";
import "./cartwidget.css";

const CartWidget = () => {
  return (
    <div className="cart-icon">
      <Link to="/Cart">
        <i className="fab fa-opencart"></i>
      </Link>
    </div>
  );
};

export default CartWidget;
