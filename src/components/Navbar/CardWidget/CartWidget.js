import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import "./cartwidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const cartQuantity = cart.reduce((acc, red) => acc + red.quantity, 0);

  return (
    <div className="cart-icon">
      <Link to="/Cart">
        <i className="fas fa-cart-arrow-down"></i>
      </Link>
      <p>{cartQuantity}</p>
    </div>
  );
};

export default CartWidget;
