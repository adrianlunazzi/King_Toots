import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const ThankyouPage = () => {
  const cart = useContext(CartContext);
  console.log("soy Cart en la thankyou page", cart);

  return (
    <>
      <h4>Muchas gracias por tu compra</h4>
      <br />
      <h5>El numero de pedido es el : </h5>
    </>
  );
};

export default ThankyouPage;
