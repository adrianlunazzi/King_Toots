import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./cart.css";
const Cart = () => {
  const { cart, removeAll, removeItem, isInCart, remove } =
    useContext(CartContext);
  const totalItemPrice = cart.reduce((acc, curr) => curr.count * curr.price, 0);
  console.log(totalItemPrice);
  const totalItems = cart.reduce((acc, curr) => acc + curr.count, 0);
  const subTotal = cart.reduce((acc, curr) => acc + curr.price, 0);
  console.log(subTotal);
  const total = subTotal + totalItemPrice;

  const product = cart.map((item) => (
    <ul>
      <li>
        {item.img_product}
        {item.product_type}
        Q:{item.count}
        {item.brand}${item.price}
        <button
          className="delete-btn-style"
          onClick={() => removeItem(item.id)}>
          <i className="fas fa-trash-alt" alt="Eliminar"></i>
        </button>
      </li>
    </ul>
  ));

  return (
    <>
      <h2>Mi compra</h2>

      <div className="cart-container">
        <div className="items-list"></div>
        <h5>{product}</h5>
      </div>
      <div className="btn-deleteAll-container">
        <button className="delete-all" onClick={removeAll}>
          Vaciar Carrito
        </button>
      </div>
      <br />
      <br />
      <div className="total-container">
        <div></div>
        <div></div>
        <div className="total">
          <h6>Items en el carrito: {totalItems} </h6>
          <h6>Total a pagar: $ {subTotal}</h6>
        </div>
      </div>
    </>
  );
};

export default Cart;
