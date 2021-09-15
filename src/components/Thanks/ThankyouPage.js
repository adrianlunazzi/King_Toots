import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

import "../Thanks/thankyoupage.css";

const ThankyouPage = () => {
  const { cart, id, setCart, comprador, setComprador } =
    useContext(CartContext);
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
      <p> {item.Nombre}</p>
      <p>{item.Phone}</p>
      <p>{item.Email}</p>
    </div>
  ));
  const CleanCart = () => {
    setCart([]);
    setComprador([]);
  };

  return (
    <>
      <h4 className="thanks-title">Muchas gracias por tu compra!!</h4>
      <br />
      <div className="thankyou-container">
        <h2>Datos del Comprador</h2>
        <div>{buyerInfo}</div>
      </div>

      <div className="thankyou-container">
        <div>
          <strong>Compraste los siguientes articulos</strong>
          <hr />
        </div>
        <div>{productPurchase}</div>
        <hr />

        <h5>
          El numero de pedido es el: <strong>{id}</strong>
          <hr />
        </h5>
        <h5>
          El importe total de tu compra es: $<strong> {totalCart}</strong>
        </h5>
        <br />
        <br />
        <Link to="/">
          <button className="btn-add-more" onClick={() => CleanCart()}>
            <i className="fas fa-cart-plus"></i>Volver a la tienda
          </button>
        </Link>
      </div>
    </>
  );
};

export default ThankyouPage;
