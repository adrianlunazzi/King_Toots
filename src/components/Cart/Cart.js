import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./cart.css";
const Cart = () => {
  const { cart, removeAll, removeItem, itemInCart } = useContext(CartContext);
  console.log("esto es lo que trae cart", cart);
  const totalItemPrice = cart.reduce((acc, curr) => curr.count * curr.price, 0);
  const totalItems = cart.reduce((acc, curr) => acc + curr.count, 0);
  const subTotal = cart.reduce((acc, curr) => acc + curr.price, 0);
  const Total = subTotal + totalItemPrice;

  console.log("este es el item en el carrito", itemInCart);

  const product = cart.map((item) => (
    <ul>
      <li>
        {item.img_product}
        {item.product_type}
        Q:{item.count}
        {item.brand}${item.price}
        <button className="delete-btn-style" onClick={removeItem}>
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
          <h6>Total a pagar: $ {Total}</h6>
        </div>
      </div>
    </>
  );
};

export default Cart;
