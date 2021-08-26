import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./cart.css";
const Cart = () => {
  const [cart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const items = cart.map((item) => (
    <ul>
      <li>
        <div className="cart-product-image"> {item.img_product}</div>
        <div>{item.product_type}</div>
        <div>{item.brand} </div>
        <div className="list-price">{item.price}</div>
        <button className="delete-btn-style">
          <i class="fas fa-trash-alt" alt="Eliminar"></i>
        </button>
      </li>
    </ul>
  ));
  console.log(cart);
  return (
    <>
      <h2>Carrito de Compras</h2>

      <div className="cart-container">
        <div className="items-list">
          <h5>{items}</h5>
        </div>
      </div>
      <br />
      <br />
      <div className="total-container">
        <div></div>
        <div></div>
        <div className="total">
          <h6>Items en el carrito: {cart.length}</h6>
          <h6>Total a pagar: {totalPrice}</h6>
        </div>
      </div>
    </>
  );
};

export default Cart;
