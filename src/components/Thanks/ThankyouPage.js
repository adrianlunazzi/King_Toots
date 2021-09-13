import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import "../Thanks/thankyoupage.css";

const ThankyouPage = () => {
  const { cart, id } = useContext(CartContext);
  const totalCart2 = cart.map((item) => item.price * item.quantity);
  const totalCart = totalCart2.reduce((acc, red) => acc + red, 0);

  return (
    <>
      <h4 className="thanks-title">Muchas gracias por tu compra!!</h4>
      <br />
      <div className="thankyou-container">
        <h5>El numero de pedido es el: {id}</h5>
        <h5>El total de tu compra es: $ {totalCart}</h5>
      </div>
    </>
  );
};

export default ThankyouPage;
