import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./cart.css";
const Cart = () => {
  const { cart, deleteAll, deleteItem } = useContext(CartContext);
  const totalCart2 = cart.map((item) => item.price * item.quantity);
  const totalCart = totalCart2.reduce((acc, red) => acc + red, 0);

  if (cart.length === 0) {
    return (
      <div className="empty">
        <h2>No hay productos en el carrito</h2>
        <img src="/images/carrito_vacio.png" width="500px" alt="" />
      </div>
    );
  }
  return (
    <>
      <h3 className="cart-title">Mi Compra</h3>
      <br />
      {cart.map((item) => (
        <>
          <div className="items-cart-conteiner">
            {item.img}
            <div>{item.product_type}</div>
            <div>{item.brand}</div>
            <div>{item.model}</div>
            <div>${item.price}</div>
            <div>
              Cantidad:
              {item.quantity}
            </div>
            <div>Subtotal: {item.price * item.quantity}</div>
            <button
              className="cart-delete-btn"
              onClick={() => deleteItem(item.id)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </>
      ))}

      <div className="total-container">
        <h4 className="total-text">El total de tu compra es: ${totalCart}</h4>
      </div>
      <button className="btn-delete-all" onClick={() => deleteAll()}>
        <i className="fas fa-trash-alt"></i>Vaciar Carrito
      </button>
    </>
  );
};

export default Cart;
