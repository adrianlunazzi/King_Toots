import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./cart.css";
const Cart = () => {
  const [cart, setCart, removeAll] = useContext(CartContext);

  console.log("esto es lo que trae cart", cart);
  const totalItems = cart.reduce((acc, curr) => acc + curr.count, 0);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const items = cart.map((item) => (
    <ul>
      <li>
        <div className="cart-product-image"> {item.img_product}</div>
        <div>{item.product_type}</div>
        <div> Q:{item.count}</div>
        <div>{item.brand} </div>
        <div className="list-price">${item.price}</div>
        <button className="delete-btn-style">
          <i className="fas fa-trash-alt" alt="Eliminar"></i>
        </button>
      </li>
    </ul>
  ));

  console.log("este es el total de elementos en el carrito", totalItems);
  return (
    <>
      <h2>Mi compra</h2>

      <div className="cart-container">
        <div className="items-list">
          <h5>{items}</h5>
        </div>
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
          <h6>Items en el carrito: {totalItems}</h6>
          <h6>Total a pagar: ${totalPrice}</h6>
        </div>
      </div>
    </>
  );
};

export default Cart;
