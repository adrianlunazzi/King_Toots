import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

import "../Thanks/thankyoupage.css";

const Purchase = () => {
  const { cart, comprador, cleanCart } = useContext(CartContext);
  const totalCart2 = cart.map((item) => item.price * item.quantity);
  const totalCart = totalCart2.reduce((acc, red) => acc + red, 0);

  const productPurchase = cart.map((item) => (
    <div className="product-purchase-container" key={item.id}>
      {item.type}
      <p> {item.brand}</p>
      <p>{item.model}</p>
      <p>cantidad: {item.quantity}</p>
      <p>${item.price}</p>
    </div>
  ));

  const buyerInfo = comprador.map((item) => (
    <div key={item.Email}>
      <p>
        Nombre:
        <strong> {item.Nombre}</strong>
      </p>
      <p>
        Telefono de contacto: <strong> {item.Phone}</strong>
      </p>
      <p>
        Email: <strong>{item.Email}</strong>
      </p>
    </div>
  ));

  return (
    <>
      <h4 className="thanks-title">
        Antes de finalizar tu compra, verifica que los datos sean correctos
      </h4>

      <br />
      <div className="thankyou-container">
        <h2>Datos del Comprador</h2>
        <div>{buyerInfo}</div>
      </div>

      <div className="thankyou-container">
        <div>
          <strong>Tu Pedido:</strong>
          <hr />
        </div>
        <div className="product-info-container">{productPurchase}</div>
        <hr />

        <h5>El importe total de tu compra es: $ {totalCart}</h5>
        <br />
        <br />
        <Link to="/Thanks">
          <button className="btn-show-shop" onClick={() => cleanCart()}>
            <i className="fas fa-money-check-alt"></i>Pagar!
          </button>
        </Link>
      </div>
    </>
  );
};

export default Purchase;
