import React from "react";
import "./cartwidget.css";

const CartWidget = () => {
  return (
    <div className="cart-icon">
      <a href="/Cart">
        <i className="fab fa-opencart"></i>
      </a>
    </div>
  );
};

export default CartWidget;
