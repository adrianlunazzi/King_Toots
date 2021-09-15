import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import "../Thanks/thankyoupage.css";

const ThankyouPage = () => {
  const { cart, id } = useContext(CartContext);
  const totalCart2 = cart.map((item) => item.price * item.quantity);
  const totalCart = totalCart2.reduce((acc, red) => acc + red, 0);
  const productPurchase = cart.map((item) => (
    <div className="product-purchase-container">
      {item.type}
      <p> {item.brand}</p>
      <p>{item.model}</p>
      <p>cantidad: {item.quantity}</p>
      <p>${item.price}</p>
    </div>
  ));

  return (
    <>
      <h4 className="thanks-title">Muchas gracias por tu compra!!</h4>
      <br />
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
      </div>
    </>
  );
};

export default ThankyouPage;
