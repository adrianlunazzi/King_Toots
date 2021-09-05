import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import "./cartwidget.css";

const CartWidget = () => {
  return (
    <div className="cart-icon">
      <Link to="/Cart">
        <i class="fas fa-cart-arrow-down"></i>
      </Link>
    </div>
  );
};

export default CartWidget;
