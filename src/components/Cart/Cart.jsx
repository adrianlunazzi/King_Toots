import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

import "./cart.css";

const Cart = () => {
  const { cart, deleteAll, deleteItem, newOrder, newBuyer } =
    useContext(CartContext);

  const totalCart2 = cart.map((item) => item.price * item.quantity);
  const totalCart = totalCart2.reduce((acc, red) => acc + red, 0);

  if (cart.length === 0) {
    return (
      <div className="empty">
        <h2>No hay productos en el carrito</h2>
        <Link to="/">
          <h3>Empezar a comprar</h3>
        </Link>
        <img src="/images/carrito_vacio.png" width="500px" alt="" />
      </div>
    );
  } else {
    return (
      <>
        <h3 className="cart-title">Mi Compra</h3>
        <br />
        {cart.map((item) => (
          <div key={item.id}>
            <div className="items-cart-conteiner">
              <div className="cart-key"> </div>
              <div>
                <img src={item.img} alt="" />
              </div>
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
          </div>
        ))}

        <Link to="/">
          <button className="btn-add-more">
            <i className="fas fa-cart-plus"></i>Seguir Comprando
          </button>
        </Link>
        <button className="btn-delete-all" onClick={() => deleteAll()}>
          <i className="fas fa-trash-alt"></i>Vaciar Carrito
        </button>
        <div className="total-container">
          <h4 className="total-text">El total de tu compra es: ${totalCart}</h4>
        </div>
        <form action="" id="form" className="form-container">
          <h3>
            Por favor completa el siguiente formulario para finalizar tu compra
          </h3>

          <br />
          <i className="far fa-user"></i>
          <input
            className="contact-input"
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Ingresa tu nombre"
            required="true"
          />
          <br />

          <br />
          <i className="fas fa-mobile-alt"></i>
          <input
            className="contact-input"
            type="number"
            name="phone"
            id="phone"
            placeholder="Ingresa tu telefono"
            required="true"
          />
          <br />

          <br />
          <i className="far fa-envelope"></i>
          <input
            className="contact-input"
            type="email"
            name="email"
            id="email"
            placeholder="Ingresa tu email"
            required
          />
        </form>
        <Link to="/Purchase">
          <button
            className="btn-finish"
            onClick={() => {
              newBuyer();
              newOrder();
            }}>
            <i className="fas fa-file-invoice-dollar"></i>
            Comprar!
          </button>
        </Link>
      </>
    );
  }
};
export default Cart;
