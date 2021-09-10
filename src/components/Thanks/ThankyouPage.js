import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import "../Thanks/thankyoupage.css";

const ThankyouPage = () => {
  const { cart, purchaseOrderId, totalCart } = useContext(CartContext);

  const purchase = cart.map((detail) => (detail.brand, detail.product_type));
  console.log("ADD", purchaseOrderId);
  return (
    <>
      <h4 className="thanks-title">Muchas gracias por tu compra!!</h4>
      <br />
      <div className="thankyou-container">
        <h5>El numero de pedido es el: </h5>
        <h5>El Importe de tu compra es: {totalCart}</h5>
        <div>Detalle de tu compra {purchase} </div>
      </div>
    </>
  );
};

export default ThankyouPage;
